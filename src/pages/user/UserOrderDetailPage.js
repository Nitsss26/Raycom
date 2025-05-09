"use client"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import { ArrowLeft, Truck, Package, Calendar, Clock, FileText, Download, AlertCircle, XCircle } from "lucide-react"
import { fetchRequestById, cancelRequest } from "../../services/api"
import { toast } from "react-toastify"

const UserOrderDetailPage = () => {
    const { id } = useParams()
    const [order, setOrder] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [cancelLoading, setCancelLoading] = useState(false)
    const [showCancelModal, setShowCancelModal] = useState(false)
    const [cancelReason, setCancelReason] = useState("")

    useEffect(() => {
        const loadOrder = async () => {
            setLoading(true)
            try {
                const data = await fetchRequestById(id)
                setOrder(data)
                setError(null)
            } catch (err) {
                console.error("Error loading order:", err)
                setError("Failed to load order details. Please try again later.")
            } finally {
                setLoading(false)
            }
        }

        loadOrder()
    }, [id])

    const handleCancelOrder = async () => {
        if (!cancelReason.trim()) {
            toast.error("Please provide a reason for cancellation")
            return
        }

        setCancelLoading(true)
        try {
            await cancelRequest(id, cancelReason)

            // Update local state
            setOrder((prev) => ({
                ...prev,
                status: "cancelled",
                statusHistory: [
                    ...prev.statusHistory,
                    {
                        status: "cancelled",
                        date: new Date(),
                        note: cancelReason,
                    },
                ],
            }))

            setShowCancelModal(false)
            toast.success("Order cancelled successfully")
        } catch (err) {
            console.error("Error cancelling order:", err)
            toast.error("Failed to cancel order. Please try again.")
        } finally {
            setCancelLoading(false)
        }
    }

    // Get status badge color
    const getStatusBadgeColor = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-800"
            case "approved":
                return "bg-green-100 text-green-800"
            case "processing":
                return "bg-blue-100 text-blue-800"
            case "shipped":
                return "bg-purple-100 text-purple-800"
            case "delivered":
                return "bg-green-100 text-green-800"
            case "rejected":
                return "bg-red-100 text-red-800"
            case "cancelled":
                return "bg-gray-100 text-gray-800"
            default:
                return "bg-gray-100 text-gray-800"
        }
    }

    // Format currency
    const formatCurrency = (amount) => {
        return amount ? `$${Number.parseFloat(amount).toFixed(2)}` : "N/A"
    }

    // Calculate order total
    const calculateTotal = () => {
        if (!order || !order.items) return 0
        return order.items?.reduce((total, item) => {
            return total + (item.price || 0) * item.quantity
        }, 0)
    }

    // Check if order can be cancelled
    const canCancel = () => {
        if (!order) return false
        return ["pending", "approved"].includes(order.status)
    }

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="flex items-center mb-6">
                        <Link to="/orders" className="text-gray-500 hover:text-gray-700 flex items-center mr-4">
                            <ArrowLeft className="h-5 w-5 mr-1" />
                            Back to Orders
                        </Link>
                        <h1 className="text-3xl font-bold">Order Details</h1>
                    </div>

                    {loading ? (
                        <div className="bg-white rounded-lg shadow-md p-6 flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                        </div>
                    ) : error ? (
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <div className="bg-red-50 text-red-700 p-4 rounded-md flex items-center">
                                <AlertCircle className="h-5 w-5 mr-2" />
                                {error}
                            </div>
                        </div>
                    ) : order ? (
                        <>
                            {/* Order Summary */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                                <div className="p-6 border-b border-gray-200 bg-gray-50 flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h2 className="text-xl font-semibold text-gray-900">
                                            {order.requestNumber || `Order #${order.id.substring(0, 8)}`}
                                        </h2>
                                        <p className="text-gray-500 mt-1">
                                            Placed on {new Date(order.date).toLocaleDateString()} at{" "}
                                            {new Date(order.date).toLocaleTimeString()}
                                        </p>
                                    </div>
                                    <div className="mt-4 md:mt-0">
                                        <span
                                            className={`px-3 py-1 inline-flex text-sm leading-5 font-semibold rounded-full ${getStatusBadgeColor(order.status)}`}
                                        >
                                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center mb-3">
                                                <Package className="h-5 w-5 text-gray-400 mr-2" />
                                                <h3 className="text-sm font-medium text-gray-900">Order Summary</h3>
                                            </div>
                                            <div className="text-sm text-gray-500 space-y-1">
                                                <p>Total Items: {order.items.length}</p>
                                                <p>Total Amount: {formatCurrency(calculateTotal())}</p>
                                            </div>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center mb-3">
                                                <Truck className="h-5 w-5 text-gray-400 mr-2" />
                                                <h3 className="text-sm font-medium text-gray-900">Shipping Information</h3>
                                            </div>
                                            <div className="text-sm text-gray-500 space-y-1">
                                                <p>{order.name}</p>
                                                <p>{order.address}</p>
                                                <p>
                                                    {order.city}, {order.state} {order.zip}
                                                </p>
                                                <p>{order.country}</p>
                                            </div>
                                        </div>

                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center mb-3">
                                                <Calendar className="h-5 w-5 text-gray-400 mr-2" />
                                                <h3 className="text-sm font-medium text-gray-900">Status Timeline</h3>
                                            </div>
                                            <div className="text-sm text-gray-500 space-y-2">
                                                {order.statusHistory && order.statusHistory.length > 0 ? (
                                                    order.statusHistory.map((status, index) => (
                                                        <div key={index} className="flex items-start">
                                                            <Clock className="h-4 w-4 text-gray-400 mr-2 mt-0.5" />
                                                            <div>
                                                                <p className="font-medium">
                                                                    {status.status.charAt(0).toUpperCase() + status.status.slice(1)}
                                                                </p>
                                                                <p className="text-xs">
                                                                    {new Date(status.date).toLocaleDateString()} at{" "}
                                                                    {new Date(status.date).toLocaleTimeString()}
                                                                </p>
                                                                {status.note && <p className="text-xs italic mt-1">{status.note}</p>}
                                                            </div>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <p>No status updates available</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Order Items */}
                                    <h3 className="text-lg font-medium text-gray-900 mb-4">Order Items</h3>
                                    <div className="overflow-x-auto">
                                        <table className="min-w-full divide-y divide-gray-200">
                                            <thead className="bg-gray-50">
                                                <tr>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Product
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Price
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Quantity
                                                    </th>
                                                    <th
                                                        scope="col"
                                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                                    >
                                                        Total
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200">
                                                {order.items.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="px-6 py-4 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center">
                                                                    {item.image ? (
                                                                        <img
                                                                            src={item.image || "/placeholder.svg"}
                                                                            alt={item.name}
                                                                            className="h-10 w-10 object-contain"
                                                                        />
                                                                    ) : (
                                                                        <Package className="h-5 w-5 text-gray-400" />
                                                                    )}
                                                                </div>
                                                                <div className="ml-4">
                                                                    <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                                                    <div className="text-sm text-gray-500">{item.model}</div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {formatCurrency(item.price)}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                            {formatCurrency(item.price * item.quantity)}
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                            <tfoot className="bg-gray-50">
                                                <tr>
                                                    <td colSpan="3" className="px-6 py-4 text-sm font-medium text-gray-900 text-right">
                                                        Total
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        {formatCurrency(calculateTotal())}
                                                    </td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>

                                    {/* Actions */}
                                    <div className="mt-8 flex flex-col sm:flex-row sm:justify-between">
                                        <div className="flex space-x-4 mb-4 sm:mb-0">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            >
                                                <FileText className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                                                View Invoice
                                            </button>
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            >
                                                <Download className="-ml-1 mr-2 h-5 w-5 text-gray-500" />
                                                Download Details
                                            </button>
                                        </div>

                                        {canCancel() && (
                                            <button
                                                type="button"
                                                onClick={() => setShowCancelModal(true)}
                                                className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            >
                                                <XCircle className="-ml-1 mr-2 h-5 w-5" />
                                                Cancel Order
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Additional Information */}
                            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                <div className="p-6 border-b border-gray-200 bg-gray-50">
                                    <h2 className="text-lg font-medium text-gray-900">Additional Information</h2>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-md font-medium text-gray-900 mb-2">Special Instructions</h3>
                                    <p className="text-gray-600 mb-6">{order.message || "No special instructions provided."}</p>

                                    <h3 className="text-md font-medium text-gray-900 mb-2">Contact Information</h3>
                                    <div className="text-gray-600">
                                        <p>Email: {order.email}</p>
                                        <p>Phone: {order.phone}</p>
                                        <p>Company: {order.company}</p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-100 text-red-600 mb-4">
                                <AlertCircle className="h-8 w-8" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-1">Order Not Found</h3>
                            <p className="text-gray-500 mb-4">
                                The order you're looking for doesn't exist or you don't have permission to view it.
                            </p>
                            <Link
                                to="/orders"
                                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                View All Orders
                            </Link>
                        </div>
                    )}
                </div>
            </div>

            {/* Cancel Order Modal */}
            {showCancelModal && (
                <div className="fixed inset-0 z-50 overflow-y-auto">
                    <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                            &#8203;
                        </span>

                        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <XCircle className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">Cancel Order</h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to cancel this order? This action cannot be undone.
                                            </p>
                                            <div className="mt-4">
                                                <label htmlFor="cancelReason" className="block text-sm font-medium text-gray-700">
                                                    Reason for cancellation
                                                </label>
                                                <textarea
                                                    id="cancelReason"
                                                    name="cancelReason"
                                                    rows="3"
                                                    value={cancelReason}
                                                    onChange={(e) => setCancelReason(e.target.value)}
                                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                                    placeholder="Please provide a reason for cancellation"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    onClick={handleCancelOrder}
                                    disabled={cancelLoading}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    {cancelLoading ? (
                                        <span className="flex items-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        "Cancel Order"
                                    )}
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setShowCancelModal(false)}
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserOrderDetailPage

