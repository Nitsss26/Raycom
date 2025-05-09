// // // // "use client"

// // // // import { useState, useEffect } from "react"
// // // // import { useParams, useNavigate } from "react-router-dom"
// // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // import axios from "axios"

// // // // const RequestDetail = () => {
// // // //     const { requestId } = useParams()
// // // //     const navigate = useNavigate()
// // // //     const [request, setRequest] = useState(null)
// // // //     const [loading, setLoading] = useState(true)
// // // //     const [error, setError] = useState(null)

// // // //     useEffect(() => {
// // // //         const fetchRequest = async () => {
// // // //             setLoading(true)
// // // //             try {
// // // //                 const response = await axios.get(`${process.env.REACT_APP_API_URL}/requests/${requestId}`, {

// // // //                     // headers: {
// // // //                     //     Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // //                     // },
// // // //                 })
// // // //                 setRequest(response.data)
// // // //                 console.log("request:", request)
// // // //                 setLoading(false)
// // // //             } catch (err) {
// // // //                 console.error("Error fetching request:", err)
// // // //                 setError("Failed to load request details. Please try again later.")
// // // //                 setLoading(false)
// // // //             }
// // // //         }

// // // //         fetchRequest()
// // // //     }, [requestId])

// // // //     const getStatusBadgeClass = (status) => {
// // // //         switch (status) {
// // // //             case "pending":
// // // //                 return "bg-yellow-100 text-yellow-800"
// // // //             case "processing":
// // // //                 return "bg-blue-100 text-blue-800"
// // // //             case "completed":
// // // //                 return "bg-green-100 text-green-800"
// // // //             case "cancelled":
// // // //                 return "bg-red-100 text-red-800"
// // // //             default:
// // // //                 return "bg-gray-100 text-gray-800"
// // // //         }
// // // //     }

// // // //     const formatDate = (dateString) => {
// // // //         const date = new Date(dateString)
// // // //         return date.toLocaleDateString("en-US", {
// // // //             year: "numeric",
// // // //             month: "short",
// // // //             day: "numeric",
// // // //             hour: "2-digit",
// // // //             minute: "2-digit",
// // // //         })
// // // //     }

// // // //     if (loading) {
// // // //         return (
// // // //             <AdminLayout>
// // // //                 <div className="flex justify-center items-center h-64">
// // // //                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
// // // //                 </div>
// // // //             </AdminLayout>
// // // //         )
// // // //     }

// // // //     if (error || !request) {
// // // //         return (
// // // //             <AdminLayout>
// // // //                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // // //                     <p>{error || "Request not found."}</p>
// // // //                 </div>
// // // //             </AdminLayout>
// // // //         )
// // // //     }

// // // //     return (
// // // //         <AdminLayout>
// // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // //                 <div className="max-w-4xl mx-auto">
// // // //                     <div className="sm:flex sm:items-center sm:justify-between mb-6">
// // // //                         <h1 className="text-3xl font-bold text-gray-900">Request Details</h1>
// // // //                         <button
// // // //                             onClick={() => navigate("/admin/requests")}
// // // //                             className="mt-4 sm:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium transition duration-300"
// // // //                         >
// // // //                             Back to Requests
// // // //                         </button>
// // // //                     </div>

// // // //                     {/* Customer Information */}
// // // //                     <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
// // // //                         <div className="p-6">
// // // //                             <h2 className="text-xl font-semibold text-indigo-600 mb-4 border-b border-indigo-100 pb-2">
// // // //                                 Customer Information
// // // //                             </h2>
// // // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Full Name</p>
// // // //                                     <p className="text-gray-900">{request.name}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Email</p>
// // // //                                     <p className="text-gray-900">{request.email}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Company</p>
// // // //                                     <p className="text-gray-900">{request.company}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Phone</p>
// // // //                                     <p className="text-gray-900">{request.phone}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Date</p>
// // // //                                     <p className="text-gray-900">{formatDate(request.date)}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Status</p>
// // // //                                     <span
// // // //                                         className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
// // // //                                     >
// // // //                                         {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // //                                     </span>
// // // //                                 </div>
// // // //                             </div>
// // // //                             {request.message && (
// // // //                                 <div className="mt-4">
// // // //                                     <p className="text-sm font-medium text-gray-600">Additional Information</p>
// // // //                                     <p className="text-gray-900">{request.message}</p>
// // // //                                 </div>
// // // //                             )}
// // // //                         </div>
// // // //                     </div>

// // // //                     {/* Products in Request */}
// // // //                     <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
// // // //                         <div className="p-6">
// // // //                             <h2 className="text-xl font-semibold text-indigo-600 mb-4 border-b border-indigo-100 pb-2">
// // // //                                 Products in Request
// // // //                             </h2>
// // // //                             <div className="overflow-x-auto">
// // // //                                 <table className="min-w-full divide-y divide-gray-200">
// // // //                                     <thead className="bg-indigo-50">
// // // //                                         <tr>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Product
// // // //                                             </th>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Category
// // // //                                             </th>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Quantity
// // // //                                             </th>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Price
// // // //                                             </th>
// // // //                                         </tr>
// // // //                                     </thead>
// // // //                                     <tbody className="bg-white divide-y divide-gray-200">
// // // //                                         {request.products.map((product) => (
// // // //                                             <tr key={product.id} className="hover:bg-indigo-50 transition-colors">
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap">
// // // //                                                     <div className="text-sm font-medium text-gray-900">{product.name}</div>
// // // //                                                 </td>
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // //                                                     {product.category}
// // // //                                                 </td>
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // //                                                     {product.quantity}
// // // //                                                 </td>
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // // //                                                     ${(product.price * product.quantity).toFixed(2)}
// // // //                                                 </td>
// // // //                                             </tr>
// // // //                                         ))}
// // // //                                     </tbody>
// // // //                                     <tfoot className="bg-indigo-50">
// // // //                                         <tr>
// // // //                                             <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
// // // //                                                 Total:
// // // //                                             </td>
// // // //                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-indigo-700">
// // // //                                                 ${request.totalAmount.toFixed(2)}
// // // //                                             </td>
// // // //                                         </tr>
// // // //                                     </tfoot>
// // // //                                 </table>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </AdminLayout>
// // // //     )
// // // // }

// // // // export default RequestDetail

// // // // "use client"

// // // // import { useState, useEffect } from "react"
// // // // import { useParams, useNavigate } from "react-router-dom"
// // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // import axios from "axios"

// // // // // Configure axios base URL
// // // // axios.defaults.baseURL = "https://raycom-backend.onrender.com/api"

// // // // const RequestDetail = () => {
// // // //     const { requestId } = useParams()
// // // //     const navigate = useNavigate()
// // // //     const [request, setRequest] = useState(null)
// // // //     const [loading, setLoading] = useState(true)
// // // //     const [error, setError] = useState(null)

// // // //     useEffect(() => {
// // // //         const fetchRequest = async () => {
// // // //             setLoading(true)
// // // //             try {
// // // //                 const response = await axios.get(`/requests/${requestId}`, {
// // // //                     // Uncomment and ensure token is available if required
// // // //                     headers: {
// // // //                         Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // //                     },
// // // //                 })
// // // //                 setRequest(response.data)
// // // //                 setLoading(false)
// // // //             } catch (err) {
// // // //                 console.error("Error fetching request:", err)
// // // //                 setError("Failed to load request details. Please try again later.")
// // // //                 setLoading(false)
// // // //             }
// // // //         }

// // // //         fetchRequest()
// // // //     }, [requestId])

// // // //     // Log request after it updates
// // // //     useEffect(() => {
// // // //         if (request) {
// // // //             console.log("Request data:", request)
// // // //         }
// // // //     }, [request])

// // // //     const getStatusBadgeClass = (status) => {
// // // //         switch (status) {
// // // //             case "pending":
// // // //                 return "bg-yellow-100 text-yellow-800"
// // // //             case "processing":
// // // //                 return "bg-blue-100 text-blue-800"
// // // //             case "completed":
// // // //                 return "bg-green-100 text-green-800"
// // // //             case "cancelled":
// // // //                 return "bg-red-100 text-red-800"
// // // //             default:
// // // //                 return "bg-gray-100 text-gray-800"
// // // //         }
// // // //     }

// // // //     const formatDate = (dateString) => {
// // // //         const date = new Date(dateString)
// // // //         return date.toLocaleDateString("en-US", {
// // // //             year: "numeric",
// // // //             month: "short",
// // // //             day: "numeric",
// // // //             hour: "2-digit",
// // // //             minute: "2-digit",
// // // //         })
// // // //     }

// // // //     if (loading) {
// // // //         return (
// // // //             <AdminLayout>
// // // //                 <div className="flex justify-center items-center h-64">
// // // //                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // //                 </div>
// // // //             </AdminLayout>
// // // //         )
// // // //     }

// // // //     if (error || !request) {
// // // //         return (
// // // //             <AdminLayout>
// // // //                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-sm">
// // // //                     <p>{error || "Request not found."}</p>
// // // //                 </div>
// // // //             </AdminLayout>
// // // //         )
// // // //     }

// // // //     return (
// // // //         <AdminLayout>
// // // //             <div className="px-6 sm:px-8 lg:px-10 py-10 bg-gray-50 min-h-screen">
// // // //                 <div className="max-w-5xl mx-auto">
// // // //                     {/* Header */}
// // // //                     <div className="sm:flex sm:items-center sm:justify-between mb-8">
// // // //                         <h1 className="text-3xl font-bold text-gray-800">Request Details</h1>
// // // //                         <button
// // // //                             onClick={() => navigate("/admin/requests")}
// // // //                             className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 shadow-sm"
// // // //                         >
// // // //                             Back to Requests
// // // //                         </button>
// // // //                     </div>

// // // //                     {/* Customer Information */}
// // // //                     <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
// // // //                         <div className="p-6">
// // // //                             <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
// // // //                                 Customer Information
// // // //                             </h2>
// // // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Full Name</p>
// // // //                                     <p className="text-gray-900 text-base">{request.name}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Email</p>
// // // //                                     <p className="text-gray-900 text-base">{request.email}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Company</p>
// // // //                                     <p className="text-gray-900 text-base">{request.company}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Phone</p>
// // // //                                     <p className="text-gray-900 text-base">{request.phone}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Date</p>
// // // //                                     <p className="text-gray-900 text-base">{formatDate(request.date)}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Status</p>
// // // //                                     <span
// // // //                                         className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
// // // //                                     >
// // // //                                         {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // //                                     </span>
// // // //                                 </div>
// // // //                             </div>
// // // //                             {request.message && (
// // // //                                 <div className="mt-6">
// // // //                                     <p className="text-sm font-medium text-gray-600">Additional Information</p>
// // // //                                     <p className="text-gray-900 text-base">{request.message}</p>
// // // //                                 </div>
// // // //                             )}
// // // //                         </div>
// // // //                     </div>

// // // //                     {/* Products in Request */}
// // // //                     <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
// // // //                         <div className="p-6">
// // // //                             <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
// // // //                                 Products in Request
// // // //                             </h2>
// // // //                             <div className="overflow-x-auto">
// // // //                                 <table className="min-w-full divide-y divide-gray-200">
// // // //                                     <thead className="bg-gray-100">
// // // //                                         <tr>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Product
// // // //                                             </th>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Category
// // // //                                             </th>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Quantity
// // // //                                             </th>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Price
// // // //                                             </th>
// // // //                                         </tr>
// // // //                                     </thead>
// // // //                                     <tbody className="bg-white divide-y divide-gray-200">
// // // //                                         {request.products.map((product) => (
// // // //                                             <tr key={product.id} className="hover:bg-gray-50 transition-colors">
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap">
// // // //                                                     <div className="text-sm font-medium text-gray-900">{product.name}</div>
// // // //                                                 </td>
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// // // //                                                     {product.category}
// // // //                                                 </td>
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// // // //                                                     {product.quantity}
// // // //                                                 </td>
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // // //                                                     ${(product.price * product.quantity).toFixed(2)}
// // // //                                                 </td>
// // // //                                             </tr>
// // // //                                         ))}
// // // //                                     </tbody>
// // // //                                     <tfoot className="bg-gray-100">
// // // //                                         <tr>
// // // //                                             <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-800">
// // // //                                                 Total:
// // // //                                             </td>
// // // //                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">
// // // //                                                 ${request.totalAmount.toFixed(2)}
// // // //                                             </td>
// // // //                                         </tr>
// // // //                                     </tfoot>
// // // //                                 </table>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </AdminLayout>
// // // //     )
// // // // }

// // // // export default RequestDetail


// // // // "use client"

// // // // import { useState, useEffect } from "react"
// // // // import { useParams, useNavigate } from "react-router-dom"
// // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // import axios from "axios"

// // // // const RequestDetail = () => {
// // // //     const { requestId } = useParams()
// // // //     const navigate = useNavigate()
// // // //     const [request, setRequest] = useState(null)
// // // //     const [loading, setLoading] = useState(true)
// // // //     const [error, setError] = useState(null)

// // // //     useEffect(() => {
// // // //         const fetchRequest = async () => {
// // // //             setLoading(true)
// // // //             try {
// // // //                 const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/requests/${requestId}`)
// // // //                 console.log("Fetched request data:", response.data) // Log the response data
// // // //                 setRequest(response.data)
// // // //                 setLoading(false)
// // // //             } catch (err) {
// // // //                 console.error("Error fetching request:", err)
// // // //                 setError("Failed to load request details. Please try again later.")
// // // //                 setLoading(false)
// // // //             }
// // // //         }

// // // //         fetchRequest()
// // // //     }, [requestId])

// // // //     const getStatusBadgeClass = (status) => {
// // // //         switch (status) {
// // // //             case "pending":
// // // //                 return "bg-yellow-100 text-yellow-800"
// // // //             case "processing":
// // // //                 return "bg-blue-100 text-blue-800"
// // // //             case "completed":
// // // //                 return "bg-green-100 text-green-800"
// // // //             case "cancelled":
// // // //                 return "bg-red-100 text-red-800"
// // // //             default:
// // // //                 return "bg-gray-100 text-gray-800"
// // // //         }
// // // //     }

// // // //     const formatDate = (dateString) => {
// // // //         const date = new Date(dateString)
// // // //         return date.toLocaleDateString("en-US", {
// // // //             year: "numeric",
// // // //             month: "short",
// // // //             day: "numeric",
// // // //             hour: "2-digit",
// // // //             minute: "2-digit",
// // // //         })
// // // //     }

// // // //     if (loading) {
// // // //         return (
// // // //             <AdminLayout>
// // // //                 <div className="flex justify-center items-center h-64">
// // // //                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
// // // //                 </div>
// // // //             </AdminLayout>
// // // //         )
// // // //     }

// // // //     if (error || !request) {
// // // //         return (
// // // //             <AdminLayout>
// // // //                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // // //                     <p>{error || "Request not found."}</p>
// // // //                 </div>
// // // //             </AdminLayout>
// // // //         )
// // // //     }

// // // //     return (
// // // //         <AdminLayout>
// // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // //                 <div className="max-w-4xl mx-auto">
// // // //                     <div className="sm:flex sm:items-center sm:justify-between mb-6">
// // // //                         <h1 className="text-3xl font-bold text-gray-900">Request Details</h1>
// // // //                         <button
// // // //                             onClick={() => navigate("/admin/requests")}
// // // //                             className="mt-4 sm:mt-0 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-md font-medium transition duration-300"
// // // //                         >
// // // //                             Back to Requests
// // // //                         </button>
// // // //                     </div>

// // // //                     {/* Customer Information */}
// // // //                     <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
// // // //                         <div className="p-6">
// // // //                             <h2 className="text-xl font-semibold text-indigo-600 mb-4 border-b border-indigo-100 pb-2">
// // // //                                 Customer Information
// // // //                             </h2>
// // // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Full Name</p>
// // // //                                     <p className="text-gray-900">{request.name}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Email</p>
// // // //                                     <p className="text-gray-900">{request.email}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Company</p>
// // // //                                     <p className="text-gray-900">{request.company}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Phone</p>
// // // //                                     <p className="text-gray-900">{request.phone}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Date</p>
// // // //                                     <p className="text-gray-900">{formatDate(request.date)}</p>
// // // //                                 </div>
// // // //                                 <div>
// // // //                                     <p className="text-sm font-medium text-gray-600">Status</p>
// // // //                                     <span
// // // //                                         className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
// // // //                                     >
// // // //                                         {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // //                                     </span>
// // // //                                 </div>
// // // //                             </div>
// // // //                             {request.message && (
// // // //                                 <div className="mt-4">
// // // //                                     <p className="text-sm font-medium text-gray-600">Additional Information</p>
// // // //                                     <p className="text-gray-900">{request.message}</p>
// // // //                                 </div>
// // // //                             )}
// // // //                         </div>
// // // //                     </div>

// // // //                     {/* Products in Request */}
// // // //                     <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
// // // //                         <div className="p-6">
// // // //                             <h2 className="text-xl font-semibold text-indigo-600 mb-4 border-b border-indigo-100 pb-2">
// // // //                                 Products in Request
// // // //                             </h2>
// // // //                             <div className="overflow-x-auto">
// // // //                                 <table className="min-w-full divide-y divide-gray-200">
// // // //                                     <thead className="bg-indigo-50">
// // // //                                         <tr>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Product
// // // //                                             </th>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Category
// // // //                                             </th>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Quantity
// // // //                                             </th>
// // // //                                             <th
// // // //                                                 scope="col"
// // // //                                                 className="px-6 py-3 text-left text-xs font-medium text-indigo-700 uppercase tracking-wider"
// // // //                                             >
// // // //                                                 Price
// // // //                                             </th>
// // // //                                         </tr>
// // // //                                     </thead>
// // // //                                     <tbody className="bg-white divide-y divide-gray-200">
// // // //                                         {request.products.map((product) => (
// // // //                                             <tr key={product.id} className="hover:bg-indigo-50 transition-colors">
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap">
// // // //                                                     <div className="text-sm font-medium text-gray-900">{product.name}</div>
// // // //                                                 </td>
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // //                                                     {product.category}
// // // //                                                 </td>
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // //                                                     {product.quantity}
// // // //                                                 </td>
// // // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // // //                                                     ${(product.price * product.quantity).toFixed(2)}
// // // //                                                 </td>
// // // //                                             </tr>
// // // //                                         ))}
// // // //                                     </tbody>
// // // //                                     <tfoot className="bg-indigo-50">
// // // //                                         <tr>
// // // //                                             <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
// // // //                                                 Total:
// // // //                                             </td>
// // // //                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-indigo-700">
// // // //                                                 ${request.totalAmount.toFixed(2)}
// // // //                                             </td>
// // // //                                         </tr>
// // // //                                     </tfoot>
// // // //                                 </table>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>
// // // //             </div>
// // // //         </AdminLayout>
// // // //     )
// // // // }

// // // // export default RequestDetail


// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import { useParams, useNavigate } from "react-router-dom"
// // // import AdminLayout from "../../components/admin/AdminLayout"
// // // import axios from "axios"

// // // // Configure axios base URL
// // // axios.defaults.baseURL = "https://raycom-backend.onrender.com/api"

// // // const RequestDetail = () => {
// // //     const { requestId } = useParams()
// // //     const navigate = useNavigate()
// // //     const [request, setRequest] = useState(null)
// // //     const [loading, setLoading] = useState(true)
// // //     const [error, setError] = useState(null)

// // //     useEffect(() => {
// // //         const fetchRequest = async () => {
// // //             setLoading(true)
// // //             try {
// // //                 const response = await axios.get(`/requests/${requestId}`, {
// // //                     timeout: 10000, // Set a 10-second timeout
// // //                     // Uncomment if authentication is required
// // //                     // headers: {
// // //                     //     Authorization: `Bearer ${localStorage.getItem("token")}`,
// // //                     // },
// // //                 })
// // //                 setRequest(response.data)
// // //                 setLoading(false)
// // //             } catch (err) {
// // //                 console.error("Error fetching request:", err.message);
// // //                 if (err.code === 'ECONNRESET') {
// // //                     setError("Connection reset. Please check if the server is running and try again.");
// // //                 } else if (err.response) {
// // //                     setError(err.response.data.message || "Failed to load request details.");
// // //                 } else {
// // //                     setError("Failed to connect to the server. Please try again later.");
// // //                 }
// // //                 setLoading(false)
// // //             }
// // //         }

// // //         fetchRequest()
// // //     }, [requestId])

// // //     // Log request after it updates
// // //     useEffect(() => {
// // //         if (request) {
// // //             console.log("Request data:", request)
// // //         }
// // //     }, [request])

// // //     const getStatusBadgeClass = (status) => {
// // //         switch (status) {
// // //             case "pending":
// // //                 return "bg-yellow-100 text-yellow-800"
// // //             case "processing":
// // //                 return "bg-blue-100 text-blue-800"
// // //             case "completed":
// // //                 return "bg-green-100 text-green-800"
// // //             case "cancelled":
// // //                 return "bg-red-100 text-red-800"
// // //             default:
// // //                 return "bg-gray-100 text-gray-800"
// // //         }
// // //     }

// // //     const formatDate = (dateString) => {
// // //         const date = new Date(dateString)
// // //         return date.toLocaleDateString("en-US", {
// // //             year: "numeric",
// // //             month: "short",
// // //             day: "numeric",
// // //             hour: "2-digit",
// // //             minute: "2-digit",
// // //         })
// // //     }

// // //     if (loading) {
// // //         return (
// // //             <AdminLayout>
// // //                 <div className="flex justify-center items-center h-64">
// // //                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // //                 </div>
// // //             </AdminLayout>
// // //         )
// // //     }

// // //     if (error || !request) {
// // //         return (
// // //             <AdminLayout>
// // //                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-sm">
// // //                     <p>{error || "Request not found Hadd hogi yrr."}</p>
// // //                 </div>
// // //             </AdminLayout>
// // //         )
// // //     }

// // //     return (
// // //         <AdminLayout>
// // //             <div className="px-6 sm:px-8 lg:px-10 py-10 bg-gray-50 min-h-screen">
// // //                 <div className="max-w-5xl mx-auto">
// // //                     {/* Header */}
// // //                     <div className="sm:flex sm:items-center sm:justify-between mb-8">
// // //                         <h1 className="text-3xl font-bold text-gray-800">Request Details</h1>
// // //                         <button
// // //                             onClick={() => navigate("/admin/requests")}
// // //                             className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 shadow-sm"
// // //                         >
// // //                             Back to Requestss
// // //                         </button>
// // //                     </div>

// // //                     {/* Customer Information */}
// // //                     <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
// // //                         <div className="p-6">
// // //                             <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
// // //                                 Customer Information
// // //                             </h2>
// // //                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                                 <div>
// // //                                     <p className="text-sm font-medium text-gray-600">Full Name</p>
// // //                                     <p className="text-gray-900 text-base">{request.name}</p>
// // //                                 </div>
// // //                                 <div>
// // //                                     <p className="text-sm font-medium text-gray-600">Email</p>
// // //                                     <p className="text-gray-900 text-base">{request.email}</p>
// // //                                 </div>
// // //                                 <div>
// // //                                     <p className="text-sm font-medium text-gray-600">Company</p>
// // //                                     <p className="text-gray-900 text-base">{request.company}</p>
// // //                                 </div>
// // //                                 <div>
// // //                                     <p className="text-sm font-medium text-gray-600">Phone</p>
// // //                                     <p className="text-gray-900 text-base">{request.phone}</p>
// // //                                 </div>
// // //                                 <div>
// // //                                     <p className="text-sm font-medium text-gray-600">Date</p>
// // //                                     <p className="text-gray-900 text-base">{formatDate(request.date)}</p>
// // //                                 </div>
// // //                                 <div>
// // //                                     <p className="text-sm font-medium text-gray-600">Status</p>
// // //                                     <span
// // //                                         className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
// // //                                     >
// // //                                         {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // //                                     </span>
// // //                                 </div>
// // //                             </div>
// // //                             {request.message && (
// // //                                 <div className="mt-6">
// // //                                     <p className="text-sm font-medium text-gray-600">Additional Information</p>
// // //                                     <p className="text-gray-900 text-base">{request.message}</p>
// // //                                 </div>
// // //                             )}
// // //                         </div>
// // //                     </div>

// // //                     {/* Products in Request */}
// // //                     <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
// // //                         <div className="p-6">
// // //                             <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
// // //                                 Products in Request
// // //                             </h2>
// // //                             <div className="overflow-x-auto">
// // //                                 <table className="min-w-full divide-y divide-gray-200">
// // //                                     <thead className="bg-gray-100">
// // //                                         <tr>
// // //                                             <th
// // //                                                 scope="col"
// // //                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// // //                                             >
// // //                                                 Product
// // //                                             </th>
// // //                                             <th
// // //                                                 scope="col"
// // //                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// // //                                             >
// // //                                                 Category
// // //                                             </th>
// // //                                             <th
// // //                                                 scope="col"
// // //                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// // //                                             >
// // //                                                 Quantity
// // //                                             </th>
// // //                                             <th
// // //                                                 scope="col"
// // //                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// // //                                             >
// // //                                                 Price
// // //                                             </th>
// // //                                         </tr>
// // //                                     </thead>
// // //                                     <tbody className="bg-white divide-y divide-gray-200">
// // //                                         {request.products.map((product) => (
// // //                                             <tr key={product.id} className="hover:bg-gray-50 transition-colors">
// // //                                                 <td className="px-6 py-4 whitespace-nowrap">
// // //                                                     <div className="text-sm font-medium text-gray-900">{product.name}</div>
// // //                                                 </td>
// // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// // //                                                     {product.category}
// // //                                                 </td>
// // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// // //                                                     {product.quantity}
// // //                                                 </td>
// // //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // //                                                     ${(product.price * product.quantity).toFixed(2)}
// // //                                                 </td>
// // //                                             </tr>
// // //                                         ))}
// // //                                     </tbody>
// // //                                     <tfoot className="bg-gray-100">
// // //                                         <tr>
// // //                                             <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-800">
// // //                                                 Total:
// // //                                             </td>
// // //                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">
// // //                                                 ${request.totalAmount.toFixed(2)}
// // //                                             </td>
// // //                                         </tr>
// // //                                     </tfoot>
// // //                                 </table>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>
// // //         </AdminLayout>
// // //     )
// // // }

// // // export default RequestDetail


// // "use client"

// // import { useState, useEffect } from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import axios from "axios";

// // // Configure axios base URL
// // axios.defaults.baseURL = "https://raycom-backend.onrender.com/api";

// // const RequestDetail = () => {
// //     const { requestId } = useParams();
// //     const navigate = useNavigate();
// //     const [request, setRequest] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         const fetchRequest = async () => {
// //             setLoading(true);
// //             try {
// //                 const response = await axios.get(`/requests/${requestId}`, {
// //                     timeout: 10000, // Set a 10-second timeout
// //                 });
// //                 setRequest(response.data);
// //                 setLoading(false);
// //             } catch (err) {
// //                 console.error("Error fetching request:", err.message);
// //                 if (err.code === "ECONNRESET") {
// //                     setError("Connection reset. Please check if the server is running and try again.");
// //                 } else if (err.response) {
// //                     setError(err.response.data.message || "Failed to load request details.");
// //                 } else {
// //                     setError("Failed to connect to the server. Please try again later.");
// //                 }
// //                 setLoading(false);
// //             }
// //         };

// //         fetchRequest();
// //     }, [requestId]);

// //     // Log request after it updates
// //     useEffect(() => {
// //         if (request) {
// //             console.log("Request data:", request);
// //         }
// //     }, [request]);

// //     const getStatusBadgeClass = (status) => {
// //         switch (status) {
// //             case "pending":
// //                 return "bg-yellow-100 text-yellow-800";
// //             case "processing":
// //                 return "bg-blue-100 text-blue-800";
// //             case "completed":
// //                 return "bg-green-100 text-green-800";
// //             case "cancelled":
// //                 return "bg-red-100 text-red-800";
// //             default:
// //                 return "bg-gray-100 text-gray-800";
// //         }
// //     };

// //     const formatDate = (dateString) => {
// //         const date = new Date(dateString);
// //         return date.toLocaleDateString("en-US", {
// //             year: "numeric",
// //             month: "short",
// //             day: "numeric",
// //             hour: "2-digit",
// //             minute: "2-digit",
// //         });
// //     };

// //     if (loading) {
// //         return (
// //             <div className="flex justify-center items-center h-64">
// //                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// //             </div>
// //         );
// //     }

// //     if (error || !request) {
// //         return (
// //             <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-sm">
// //                 <p>{error || "Request not found Hadd hogi yrr."}</p>
// //             </div>
// //         );
// //     }

// //     return (
// //         <div className="px-6 sm:px-8 lg:px-10 py-10 bg-gray-50 min-h-screen">
// //             <div className="max-w-5xl mx-auto">
// //                 {/* Header */}
// //                 <div className="sm:flex sm:items-center sm:justify-between mb-8">
// //                     <h1 className="text-3xl font-bold text-gray-800">Request Details</h1>
// //                     <button
// //                         onClick={() => navigate("/admin/requests")}
// //                         className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 shadow-sm"
// //                     >
// //                         Back to Requests
// //                     </button>
// //                 </div>

// //                 {/* Customer Information */}
// //                 <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
// //                     <div className="p-6">
// //                         <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
// //                             Customer Information
// //                         </h2>
// //                         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                             <div>
// //                                 <p className="text-sm font-medium text-gray-600">Full Name</p>
// //                                 <p className="text-gray-900 text-base">{request.name}</p>
// //                             </div>
// //                             <div>
// //                                 <p className="text-sm font-medium text-gray-600">Email</p>
// //                                 <p className="text-gray-900 text-base">{request.email}</p>
// //                             </div>
// //                             <div>
// //                                 <p className="text-sm font-medium text-gray-600">Company</p>
// //                                 <p className="text-gray-900 text-base">{request.company}</p>
// //                             </div>
// //                             <div>
// //                                 <p className="text-sm font-medium text-gray-600">Phone</p>
// //                                 <p className="text-gray-900 text-base">{request.phone}</p>
// //                             </div>
// //                             <div>
// //                                 <p className="text-sm font-medium text-gray-600">Date</p>
// //                                 <p className="text-gray-900 text-base">{formatDate(request.date)}</p>
// //                             </div>
// //                             <div>
// //                                 <p className="text-sm font-medium text-gray-600">Status</p>
// //                                 <span
// //                                     className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
// //                                 >
// //                                     {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// //                                 </span>
// //                             </div>
// //                         </div>
// //                         {request.message && (
// //                             <div className="mt-6">
// //                                 <p className="text-sm font-medium text-gray-600">Additional Information</p>
// //                                 <p className="text-gray-900 text-base">{request.message}</p>
// //                             </div>
// //                         )}
// //                     </div>
// //                 </div>

// //                 {/* Products in Request */}
// //                 <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
// //                     <div className="p-6">
// //                         <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
// //                             Products in Request
// //                         </h2>
// //                         <div className="overflow-x-auto">
// //                             <table className="min-w-full divide-y divide-gray-200">
// //                                 <thead className="bg-gray-100">
// //                                     <tr>
// //                                         <th
// //                                             scope="col"
// //                                             className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// //                                         >
// //                                             Image
// //                                         </th>
// //                                         <th
// //                                             scope="col"
// //                                             className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// //                                         >
// //                                             Product
// //                                         </th>
// //                                         <th
// //                                             scope="col"
// //                                             className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// //                                         >
// //                                             Category
// //                                         </th>
// //                                         <th
// //                                             scope="col"
// //                                             className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// //                                         >
// //                                             Quantity
// //                                         </th>
// //                                         <th
// //                                             scope="col"
// //                                             className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
// //                                         >
// //                                             Price
// //                                         </th>
// //                                     </tr>
// //                                 </thead>
// //                                 <tbody className="bg-white divide-y divide-gray-200">
// //                                     {request.products.map((product) => (
// //                                         <tr key={product.id} className="hover:bg-gray-50 transition-colors">
// //                                             <td className="px-6 py-4 whitespace-nowrap">
// //                                                 {product.image ? (
// //                                                     <img
// //                                                         src={product.image}
// //                                                         alt={product.name}
// //                                                         className="h-12 w-12 object-cover rounded-md"
// //                                                         onError={(e) => (e.target.src = "https://via.placeholder.com/48?text=No+Image")}
// //                                                     />
// //                                                 ) : (
// //                                                     <div className="h-12 w-12 flex items-center justify-center text-gray-500 text-xs">
// //                                                         No Image
// //                                                     </div>
// //                                                 )}
// //                                             </td>
// //                                             <td className="px-6 py-4 whitespace-nowrap">
// //                                                 <div className="text-sm font-medium text-gray-900">{product.name}</div>
// //                                             </td>
// //                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                                                 {product.category}
// //                                             </td>
// //                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
// //                                                 {product.quantity}
// //                                             </td>
// //                                             <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// //                                                 ${(product.price * product.quantity).toFixed(2)}
// //                                             </td>
// //                                         </tr>
// //                                     ))}
// //                                 </tbody>
// //                                 <tfoot className="bg-gray-100">
// //                                     <tr>
// //                                         <td colSpan="4" className="px-6 py-4 text-right text-sm font-medium text-gray-800">
// //                                             Total:
// //                                         </td>
// //                                         <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">
// //                                             ${request.totalAmount.toFixed(2)}
// //                                         </td>
// //                                     </tr>
// //                                 </tfoot>
// //                             </table>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };

// // export default RequestDetail;


// "use client"

// import { useState, useEffect } from "react"
// import { useParams, useNavigate } from "react-router-dom"
// import AdminLayout from "../../components/admin/AdminLayout"
// import axios from "axios"

// // Configure axios base URL
// axios.defaults.baseURL = "https://raycom-backend.onrender.com/api"

// const RequestDetail = () => {
//     const { requestId } = useParams()
//     const navigate = useNavigate()
//     const [request, setRequest] = useState(null)
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const fetchRequest = async () => {
//             setLoading(true)
//             try {
//                 const response = await axios.get(`/requests/${requestId}`, {
//                     timeout: 10000,
//                 })
//                 setRequest(response.data)
//                 setLoading(false)
//             } catch (err) {
//                 console.error("Error fetching request:", err.message, err.code, err.response?.status, err.response?.data);
//                 if (err.code === 'ECONNRESET') {
//                     setError("Connection reset. Please check if the server is running and try again.");
//                 } else if (err.response) {
//                     setError(err.response.data.message || "Failed to load request details.");
//                 } else {
//                     setError("Failed to connect to the server. Please try again later.");
//                 }
//                 setLoading(false)
//             }
//         }

//         fetchRequest()
//     }, [requestId])

//     useEffect(() => {
//         if (request) {
//             console.log("Request data:", request)
//         }
//     }, [request])

//     const getStatusBadgeClass = (status) => {
//         switch (status) {
//             case "pending":
//                 return "bg-yellow-100 text-yellow-800"
//             case "processing":
//                 return "bg-blue-100 text-blue-800"
//             case "completed":
//                 return "bg-green-100 text-green-800"
//             case "cancelled":
//                 return "bg-red-100 text-red-800"
//             default:
//                 return "bg-gray-100 text-gray-800"
//         }
//     }

//     const formatDate = (dateString) => {
//         const date = new Date(dateString)
//         return date.toLocaleDateString("en-US", {
//             year: "numeric",
//             month: "short",
//             day: "numeric",
//             hour: "2-digit",
//             minute: "2-digit",
//         })
//     }

//     if (loading) {
//         return (
//             <AdminLayout>
//                 <div className="flex justify-center items-center h-64">
//                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
//                 </div>
//             </AdminLayout>
//         )
//     }

//     if (error || !request) {
//         return (
//             <AdminLayout>
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-sm">
//                     <p>{error || "Request not found."}</p>
//                 </div>
//             </AdminLayout>
//         )
//     }

//     return (
//         <AdminLayout>
//             <div className="px-6 sm:px-8 lg:px-10 py-10 bg-gray-50 min-h-screen">
//                 <div className="max-w-5xl mx-auto">
//                     {/* Header */}
//                     <div className="sm:flex sm:items-center sm:justify-between mb-8">
//                         <h1 className="text-3xl font-bold text-gray-800">Request Details</h1>
//                         <button
//                             onClick={() => navigate("/admin/requests")}
//                             className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 shadow-sm"
//                         >
//                             Back to Requests
//                         </button>
//                     </div>

//                     {/* Customer Information */}
//                     <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
//                         <div className="p-6">
//                             <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
//                                 Customer Information
//                             </h2>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-600">Full Name</p>
//                                     <p className="text-gray-900 text-base">{request.name}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-600">Email</p>
//                                     <p className="text-gray-900 text-base">{request.email}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-600">Company</p>
//                                     <p className="text-gray-900 text-base">{request.company}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-600">Phone</p>
//                                     <p className="text-gray-900 text-base">{request.phone}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-600">Date</p>
//                                     <p className="text-gray-900 text-base">{formatDate(request.date)}</p>
//                                 </div>
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-600">Status</p>
//                                     <span
//                                         className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
//                                     >
//                                         {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
//                                     </span>
//                                 </div>
//                             </div>
//                             {request.message && (
//                                 <div className="mt-6">
//                                     <p className="text-sm font-medium text-gray-600">Additional Information</p>
//                                     <p className="text-gray-900 text-base">{request.message}</p>
//                                 </div>
//                             )}
//                         </div>
//                     </div>

//                     {/* Products in Request */}
//                     <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
//                         <div className="p-6">
//                             <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
//                                 Products in Request
//                             </h2>
//                             <div className="overflow-x-auto">
//                                 <table className="min-w-full divide-y divide-gray-200">
//                                     <thead className="bg-gray-100">
//                                         <tr>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
//                                             >
//                                                 Image
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
//                                             >
//                                                 Product
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
//                                             >
//                                                 Category
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
//                                             >
//                                                 Quantity
//                                             </th>
//                                             <th
//                                                 scope="col"
//                                                 className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
//                                             >
//                                                 Price
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody className="bg-white divide-y divide-gray-200">
//                                         {request.products.map((product) => (
//                                             <tr key={product.id} className="hover:bg-gray-50 transition-colors">
//                                                 <td className="px-6 py-4 whitespace-nowrap">
//                                                     {product.images && product.images.length > 0 ? (
//                                                         <img
//                                                             src={product.images[0]}
//                                                             alt={product.name}
//                                                             className="h-12 w-12 rounded-full object-cover"
//                                                         />
//                                                     ) : (
//                                                         <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
//                                                             No Image
//                                                         </div>
//                                                     )}
//                                                 </td>
//                                                 <td className="px-6 py-4 whitespace-nowrap">
//                                                     <div className="text-sm font-medium text-gray-900">{product.name}</div>
//                                                 </td>
//                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                                                     {product.category}
//                                                 </td>
//                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
//                                                     {product.quantity}
//                                                 </td>
//                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
//                                                     ${(product.price * product.quantity).toFixed(2)}
//                                                 </td>
//                                             </tr>
//                                         ))}
//                                     </tbody>
//                                     <tfoot className="bg-gray-100">
//                                         <tr>
//                                             <td colSpan="4" className="px-6 py-4 text-right text-sm font-medium text-gray-800">
//                                                 Total:
//                                             </td>
//                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">
//                                                 ${request.totalAmount.toFixed(2)}
//                                             </td>
//                                         </tr>
//                                     </tfoot>
//                                 </table>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </AdminLayout>
//     )
// }

// export default RequestDetail

"use client";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import axios from "axios";

const RequestDetails = () => {
    const { id } = useParams();
    const [request, setRequest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequest = async () => {
            setLoading(true);
            try {
                const token = localStorage.getItem("token");
                const headers = token && token.trim() !== "" ? {
                    Authorization: `Bearer ${token}`
                } : {};

                const response = await axios.get(`${process.env.REACT_APP_API_URL}/requests/${id}`, { headers });
                setRequest(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching request:", err);
                setError("Failed to load request details. Please try again later.");
                setLoading(false);
            }
        };

        fetchRequest();
    }, [id]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                </div>
            </AdminLayout>
        );
    }

    if (error) {
        return (
            <AdminLayout>
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Request Details</h1>
                        <p className="mt-2 text-sm text-gray-700">Details of the request #{id}</p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <Link
                            to="/admin/requests"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Back to Requests
                        </Link>
                    </div>
                </div>

                <div className="mt-6 bg-white shadow rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Customer Information</h2>
                            <div className="mt-4 space-y-2">
                                <p><span className="font-medium">Name:</span> {request.name}</p>
                                <p><span className="font-medium">Email:</span> {request.email}</p>
                                <p><span className="font-medium">Phone:</span> {request.phone}</p>
                                <p><span className="font-medium">Company:</span> {request.company}</p>
                                {request.message && <p><span className="font-medium">Message:</span> {request.message}</p>}
                            </div>
                        </div>
                        <div>
                            <h2 className="text-lg font-semibold text-gray-900">Request Information</h2>
                            <div className="mt-4 space-y-2">
                                <p><span className="font-medium">Status:</span>
                                    <span className={`ml-2 inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "pending" ? "bg-yellow-100 text-yellow-800" :
                                        request.status === "processing" ? "bg-blue-100 text-blue-800" :
                                            request.status === "completed" ? "bg-green-100 text-green-800" :
                                                "bg-red-100 text-red-800"
                                        }`}>
                                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                    </span>
                                </p>
                                <p><span className="font-medium">Date:</span> {formatDate(request.date)}</p>
                                <p><span className="font-medium">Total Amount:</span> ${request.totalAmount.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h2 className="text-lg font-semibold text-gray-900">Products</h2>
                        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {request.products.map((product, index) => (
                                <div key={index} className="border rounded-lg p-4">
                                    {product.image ? (
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-40 object-cover rounded-md mb-4"
                                            onError={(e) => (e.target.src = "https://via.placeholder.com/150?text=No+Image")}
                                        />
                                    ) : (
                                        <div className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center mb-4">
                                            <span className="text-gray-500">No Image</span>
                                        </div>
                                    )}
                                    <p><span className="font-medium">Name:</span> {product.name}</p>
                                    <p><span className="font-medium">Category:</span> {product.category}</p>
                                    <p><span className="font-medium">Quantity:</span> {product.quantity}</p>
                                    <p><span className="font-medium">Price:</span> ${product.price.toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default RequestDetails;