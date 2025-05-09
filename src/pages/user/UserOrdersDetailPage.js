"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ShoppingBag, ChevronRight, Search, Filter, Eye, FileText, AlertCircle } from "lucide-react"
import { fetchRequests } from "../../services/api"

const UserOrdersPage = () => {
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [searchQuery, setSearchQuery] = useState("")
    const [statusFilter, setStatusFilter] = useState("all")

    useEffect(() => {
        const loadOrders = async () => {
            setLoading(true)
            try {
                const response = await fetchRequests()
                setOrders(response.requests || [])
                setError(null)
            } catch (err) {
                console.error("Error loading orders:", err)
                setError("Failed to load your orders. Please try again later.")
            } finally {
                setLoading(false)
            }
        }

        loadOrders()
    }, [])

    // Filter orders based on search query and status
    const filteredOrders = orders.filter((order) => {
        const matchesSearch =
            order.requestNumber?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.status?.toLowerCase().includes(searchQuery.toLowerCase())

        const matchesStatus = statusFilter === "all" || order.status === statusFilter

        return matchesSearch && matchesStatus
    })

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

    return (
        <div className="pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-3xl font-bold mb-6">My Orders</h1>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                        <div className="p-6 border-b border-gray-200 bg-gray-50">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                                <div className="relative max-w-xs w-full">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Search className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <input
                                        type="text"
                                        placeholder="Search orders..."
                                        value={searchQuery}
                                        onChange={(e) => setSearchQuery(e.target.value)}
                                        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                                    />
                                </div>

                                <div className="relative max-w-xs w-full md:w-auto">
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                        <Filter className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <select
                                        value={statusFilter}
                                        onChange={(e) => setStatusFilter(e.target.value)}
                                        className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm appearance-none"
                                    >
                                        <option value="all">All Orders</option>
                                        <option value="pending">Pending</option>
                                        <option value="approved">Approved</option>
                                        <option value="processing">Processing</option>
                                        <option value="shipped">Shipped</option>
                                        <option value="delivered">Delivered</option>
                                        <option value="rejected">Rejected</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex justify-center items-center h-64">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                            </div>
                        ) : error ? (
                            <div className="p-6 flex items-center justify-center">
                                <div className="bg-red-50 text-red-700 p-4 rounded-md flex items-center">
                                    <AlertCircle className="h-5 w-5 mr-2" />
                                    {error}
                                </div>
                            </div>
                        ) : filteredOrders.length === 0 ? (
                            <div className="p-6 text-center">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 text-gray-500 mb-4">
                                    <ShoppingBag className="h-8 w-8" />
                                </div>
                                <h3 className="text-lg font-medium text-gray-900 mb-1">No orders found</h3>
                                <p className="text-gray-500 mb-4">
                                    {searchQuery || statusFilter !== "all"
                                        ? "Try adjusting your search or filter criteria"
                                        : "You haven't placed any orders yet"}
                                </p>
                                <Link
                                    to="/products"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    Browse Products
                                </Link>
                            </div>
                        ) : (
                            <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-gray-200">
                                    <thead className="bg-gray-50">
                                        <tr>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Order ID
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Date
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Items
                                            </th>
                                            <th
                                                scope="col"
                                                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                            >
                                                Status
                                            </th>
                                            <th scope="col" className="relative px-6 py-3">
                                                <span className="sr-only">Actions</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white divide-y divide-gray-200">
                                        {filteredOrders.map((order) => (
                                            <motion.tr
                                                key={order.id}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    {order.requestNumber || `#${order.id.substring(0, 8)}`}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {new Date(order.date).toLocaleDateString()}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                    {order.items.length} {order.items.length === 1 ? "item" : "items"}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span
                                                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeColor(order.status)}`}
                                                    >
                                                        {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                    <Link
                                                        to={`/orders/${order.id}`}
                                                        className="text-red-600 hover:text-red-900 flex items-center justify-end"
                                                    >
                                                        <span className="mr-1">View</span>
                                                        <ChevronRight className="h-4 w-4" />
                                                    </Link>
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="p-6 border-b border-gray-200 bg-gray-50">
                            <h2 className="text-lg font-medium text-gray-900">Need Help?</h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="border border-gray-200 rounded-lg p-4 flex items-start">
                                    <div className="flex-shrink-0 bg-red-100 rounded-md p-2 mr-4">
                                        <Eye className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-medium text-gray-900 mb-1">Track Your Order</h3>
                                        <p className="text-sm text-gray-500 mb-3">
                                            Check the current status and estimated delivery date of your order.
                                        </p>
                                        <Link to="/contact" className="text-sm font-medium text-red-600 hover:text-red-500">
                                            Contact Support
                                        </Link>
                                    </div>
                                </div>

                                <div className="border border-gray-200 rounded-lg p-4 flex items-start">
                                    <div className="flex-shrink-0 bg-red-100 rounded-md p-2 mr-4">
                                        <FileText className="h-6 w-6 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="text-md font-medium text-gray-900 mb-1">Order Documentation</h3>
                                        <p className="text-sm text-gray-500 mb-3">
                                            Access invoices, shipping documents, and product specifications.
                                        </p>
                                        <Link to="/faq" className="text-sm font-medium text-red-600 hover:text-red-500">
                                            View FAQ
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserOrdersPage

