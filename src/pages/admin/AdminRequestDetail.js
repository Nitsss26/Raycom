// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import { Link } from "react-router-dom"
// // // import { Eye, Download, CheckCircle, XCircle, Filter, ChevronLeft, ChevronRight } from "lucide-react"
// // // import AdminLayout from "../../components/admin/AdminLayout"
// // // import { fetchRequests, updateRequestStatus } from "../../services/api"

// // // const AdminRequests = () => {
// // //     const [requests, setRequests] = useState([])
// // //     const [loading, setLoading] = useState(true)
// // //     const [error, setError] = useState(null)
// // //     const [statusFilter, setStatusFilter] = useState("all")
// // //     const [currentPage, setCurrentPage] = useState(1)
// // //     const [itemsPerPage] = useState(10)

// // //     useEffect(() => {
// // //         const loadRequests = async () => {
// // //             setLoading(true)
// // //             try {
// // //                 const data = await fetchRequests()
// // //                 setRequests(data)
// // //                 setError(null)
// // //             } catch (err) {
// // //                 setError("Failed to load requestss. Please try again later.")
// // //                 setRequests([])
// // //             } finally {
// // //                 setLoading(false)
// // //             }
// // //         }

// // //         loadRequests()
// // //     }, [])

// // //     const handleStatusChange = async (requestId, newStatus) => {
// // //         try {
// // //             await updateRequestStatus(requestId, newStatus)

// // //             // Update local state
// // //             setRequests((prev) =>
// // //                 prev.map((request) => (request.id === requestId ? { ...request, status: newStatus } : request)),
// // //             )
// // //         } catch (err) {
// // //             console.error("Error updating request status:", err)
// // //             // Show error notification
// // //         }
// // //     }

// // //     // Filter requests based on status
// // //     const filteredRequests = requests?.filter((request) => {
// // //         if (statusFilter === "all") return true
// // //         return request.status === statusFilter
// // //     })

// // //     // Pagination
// // //     const indexOfLastItem = currentPage * itemsPerPage
// // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // //     const currentItems = filteredRequests.slice(indexOfFirstItem, indexOfLastItem)
// // //     const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)

// // //     const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // //     return (
// // //         <AdminLayout>
// // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // //                     <div>
// // //                         <h1 className="text-2xl font-bold text-gray-900">Customer Requests</h1>
// // //                         <p className="mt-2 text-sm text-gray-700">A list of all customer product requests and inquiries.</p>
// // //                     </div>
// // //                     <div className="mt-4 sm:mt-0 flex items-center">
// // //                         <div className="relative">
// // //                             <select
// // //                                 value={statusFilter}
// // //                                 onChange={(e) => setStatusFilter(e.target.value)}
// // //                                 className="appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // //                             >
// // //                                 <option value="all">All Requests</option>
// // //                                 <option value="pending">Pending</option>
// // //                                 <option value="approved">Approved</option>
// // //                                 <option value="rejected">Rejected</option>
// // //                                 <option value="completed">Completed</option>
// // //                             </select>
// // //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // //                                 <Filter className="h-4 w-4" />
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 <div className="mt-8 flex flex-col">
// // //                     <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // //                             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // //                                 {loading ? (
// // //                                     <div className="flex justify-center items-center h-64">
// // //                                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // //                                     </div>
// // //                                 ) : error ? (
// // //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // //                                 ) : currentItems.length === 0 ? (
// // //                                     <div className="text-center py-12 bg-white">
// // //                                         <p className="text-gray-500">No requests found.</p>
// // //                                     </div>
// // //                                 ) : (
// // //                                     <table className="min-w-full divide-y divide-gray-300">
// // //                                         <thead className="bg-gray-50">
// // //                                             <tr>
// // //                                                 <th
// // //                                                     scope="col"
// // //                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // //                                                 >
// // //                                                     Request ID
// // //                                                 </th>
// // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                                                     Customer
// // //                                                 </th>
// // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                                                     Date
// // //                                                 </th>
// // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                                                     Items
// // //                                                 </th>
// // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                                                     Status
// // //                                                 </th>
// // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // //                                                     <span className="sr-only">Actions</span>
// // //                                                 </th>
// // //                                             </tr>
// // //                                         </thead>
// // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // //                                             {currentItems.map((request) => (
// // //                                                 <tr key={request.id}>
// // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
// // //                                                         #{request.id}
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         <div className="font-medium text-gray-900">{request.name}</div>
// // //                                                         <div className="text-gray-500">{request.email}</div>
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         {new Date(request.date).toLocaleDateString()}
// // //                                                     </td>
// // //                                                     <td className="px-3 py-4 text-sm text-gray-500">{request.items.length} items</td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm">
// // //                                                         <span
// // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "approved"
// // //                                                                 ? "bg-green-100 text-green-800"
// // //                                                                 : request.status === "rejected"
// // //                                                                     ? "bg-red-100 text-red-800"
// // //                                                                     : request.status === "completed"
// // //                                                                         ? "bg-blue-100 text-blue-800"
// // //                                                                         : "bg-yellow-100 text-yellow-800"
// // //                                                                 }`}
// // //                                                         >
// // //                                                             {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // //                                                         </span>
// // //                                                     </td>
// // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // //                                                         <div className="flex items-center justify-end space-x-2">
// // //                                                             <Link to={`/admin/requests/${request.id}`} className="text-gray-600 hover:text-gray-900">
// // //                                                                 <Eye className="h-5 w-5" />
// // //                                                             </Link>
// // //                                                             {request.status === "pending" && (
// // //                                                                 <>
// // //                                                                     <button
// // //                                                                         onClick={() => handleStatusChange(request.id, "approved")}
// // //                                                                         className="text-green-600 hover:text-green-900"
// // //                                                                     >
// // //                                                                         <CheckCircle className="h-5 w-5" />
// // //                                                                     </button>
// // //                                                                     <button
// // //                                                                         onClick={() => handleStatusChange(request.id, "rejected")}
// // //                                                                         className="text-red-600 hover:text-red-900"
// // //                                                                     >
// // //                                                                         <XCircle className="h-5 w-5" />
// // //                                                                     </button>
// // //                                                                 </>
// // //                                                             )}
// // //                                                             <button className="text-gray-600 hover:text-gray-900">
// // //                                                                 <Download className="h-5 w-5" />
// // //                                                             </button>
// // //                                                         </div>
// // //                                                     </td>
// // //                                                 </tr>
// // //                                             ))}
// // //                                         </tbody>
// // //                                     </table>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Pagination */}
// // //                 {!loading && !error && totalPages > 1 && (
// // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // //                         <div className="flex flex-1 justify-between sm:hidden">
// // //                             <button
// // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // //                                 disabled={currentPage === 1}
// // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // //                             >
// // //                                 Previous
// // //                             </button>
// // //                             <button
// // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // //                                 disabled={currentPage === totalPages}
// // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // //                             >
// // //                                 Next
// // //                             </button>
// // //                         </div>
// // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // //                             <div>
// // //                                 <p className="text-sm text-gray-700">
// // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredRequests.length)}</span> of{" "}
// // //                                     <span className="font-medium">{filteredRequests.length}</span> results
// // //                                 </p>
// // //                             </div>
// // //                             <div>
// // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // //                                     <button
// // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // //                                         disabled={currentPage === 1}
// // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // //                                     >
// // //                                         <span className="sr-only">Previous</span>
// // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // //                                     </button>
// // //                                     {[...Array(totalPages).keys()].map((number) => (
// // //                                         <button
// // //                                             key={number + 1}
// // //                                             onClick={() => paginate(number + 1)}
// // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // //                                                 }`}
// // //                                         >
// // //                                             {number + 1}
// // //                                         </button>
// // //                                     ))}
// // //                                     <button
// // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // //                                         disabled={currentPage === totalPages}
// // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // //                                     >
// // //                                         <span className="sr-only">Next</span>
// // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // //                                     </button>
// // //                                 </nav>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </AdminLayout>
// // //     )
// // // }

// // // export default AdminRequests


// // "use client"

// // import { useState, useEffect } from "react"
// // import { Link } from "react-router-dom"
// // import { Eye, Download, CheckCircle, XCircle, Filter, ChevronLeft, ChevronRight } from "lucide-react"
// // import AdminLayout from "../../components/admin/AdminLayout"
// // import { fetchRequests, updateRequestStatus } from "../../services/api"

// // const AdminRequests = () => {
// //     const [requests, setRequests] = useState([])
// //     const [loading, setLoading] = useState(true)
// //     const [error, setError] = useState(null)
// //     const [statusFilter, setStatusFilter] = useState("all")
// //     const [currentPage, setCurrentPage] = useState(1)
// //     const [itemsPerPage] = useState(10)

// //     useEffect(() => {
// //         const loadRequests = async () => {
// //             setLoading(true)
// //             try {
// //                 const data = await fetchRequests()
// //                 setRequests(data || [])  // Ensure data is an array (fallback to empty array)
// //                 setError(null)
// //             } catch (err) {
// //                 setError("Failed to load requests. Please try again later.")
// //                 setRequests([])  // Ensure empty array on error
// //             } finally {
// //                 setLoading(false)
// //             }
// //         }

// //         loadRequests()
// //     }, [])

// //     const handleStatusChange = async (requestId, newStatus) => {
// //         try {
// //             await updateRequestStatus(requestId, newStatus)

// //             // Update local state
// //             setRequests((prev) =>
// //                 prev.map((request) => (request.id === requestId ? { ...request, status: newStatus } : request)),
// //             )
// //         } catch (err) {
// //             console.error("Error updating request status:", err)
// //             // Show error notification
// //         }
// //     }

// //     // Filter requests based on status
// //     const filteredRequests = Array.isArray(requests) ? requests.filter((request) => {
// //         if (statusFilter === "all") return true
// //         return request.status === statusFilter
// //     }) : []  // Ensure filteredRequests is always an array

// //     // Pagination
// //     const indexOfLastItem = currentPage * itemsPerPage
// //     const indexOfFirstItem = indexOfLastItem - itemsPerPage
// //     const currentItems = filteredRequests.slice(indexOfFirstItem, indexOfLastItem)
// //     const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)

// //     const paginate = (pageNumber) => setCurrentPage(pageNumber)

// //     return (
// //         <AdminLayout>
// //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// //                 <div className="sm:flex sm:items-center sm:justify-between">
// //                     <div>
// //                         <h1 className="text-2xl font-bold text-gray-900">Customer Requests</h1>
// //                         <p className="mt-2 text-sm text-gray-700">A list of all customer product requests and inquiries.</p>
// //                     </div>
// //                     <div className="mt-4 sm:mt-0 flex items-center">
// //                         <div className="relative">
// //                             <select
// //                                 value={statusFilter}
// //                                 onChange={(e) => setStatusFilter(e.target.value)}
// //                                 className="appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //                             >
// //                                 <option value="all">All Requests</option>
// //                                 <option value="pending">Pending</option>
// //                                 <option value="approved">Approved</option>
// //                                 <option value="rejected">Rejected</option>
// //                                 <option value="completed">Completed</option>
// //                             </select>
// //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //                                 <Filter className="h-4 w-4" />
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="mt-8 flex flex-col">
// //                     <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// //                             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// //                                 {loading ? (
// //                                     <div className="flex justify-center items-center h-64">
// //                                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// //                                     </div>
// //                                 ) : error ? (
// //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// //                                 ) : currentItems.length === 0 ? (
// //                                     <div className="text-center py-12 bg-white">
// //                                         <p className="text-gray-500">No requests found.</p>
// //                                     </div>
// //                                 ) : (
// //                                     <table className="min-w-full divide-y divide-gray-300">
// //                                         <thead className="bg-gray-50">
// //                                             <tr>
// //                                                 <th
// //                                                     scope="col"
// //                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// //                                                 >
// //                                                     Request ID
// //                                                 </th>
// //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                                                     Customer
// //                                                 </th>
// //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                                                     Date
// //                                                 </th>
// //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                                                     Items
// //                                                 </th>
// //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                                                     Status
// //                                                 </th>
// //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// //                                                     <span className="sr-only">Actions</span>
// //                                                 </th>
// //                                             </tr>
// //                                         </thead>
// //                                         <tbody className="divide-y divide-gray-200 bg-white">
// //                                             {currentItems.map((request) => (
// //                                                 <tr key={request.id}>
// //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
// //                                                         #{request.id}
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         <div className="font-medium text-gray-900">{request.name}</div>
// //                                                         <div className="text-gray-500">{request.email}</div>
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         {new Date(request.date).toLocaleDateString()}
// //                                                     </td>
// //                                                     <td className="px-3 py-4 text-sm text-gray-500">{request.items.length} items</td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm">
// //                                                         <span
// //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "approved"
// //                                                                 ? "bg-green-100 text-green-800"
// //                                                                 : request.status === "rejected"
// //                                                                     ? "bg-red-100 text-red-800"
// //                                                                     : request.status === "completed"
// //                                                                         ? "bg-blue-100 text-blue-800"
// //                                                                         : "bg-yellow-100 text-yellow-800"
// //                                                                 }`}
// //                                                         >
// //                                                             {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// //                                                         </span>
// //                                                     </td>
// //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// //                                                         <div className="flex items-center justify-end space-x-2">
// //                                                             <Link to={`/admin/requests/${request.id}`} className="text-gray-600 hover:text-gray-900">
// //                                                                 <Eye className="h-5 w-5" />
// //                                                             </Link>
// //                                                             {request.status === "pending" && (
// //                                                                 <>
// //                                                                     <button
// //                                                                         onClick={() => handleStatusChange(request.id, "approved")}
// //                                                                         className="text-green-600 hover:text-green-900"
// //                                                                     >
// //                                                                         <CheckCircle className="h-5 w-5" />
// //                                                                     </button>
// //                                                                     <button
// //                                                                         onClick={() => handleStatusChange(request.id, "rejected")}
// //                                                                         className="text-red-600 hover:text-red-900"
// //                                                                     >
// //                                                                         <XCircle className="h-5 w-5" />
// //                                                                     </button>
// //                                                                 </>
// //                                                             )}
// //                                                             <button className="text-gray-600 hover:text-gray-900">
// //                                                                 <Download className="h-5 w-5" />
// //                                                             </button>
// //                                                         </div>
// //                                                     </td>
// //                                                 </tr>
// //                                             ))}
// //                                         </tbody>
// //                                     </table>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Pagination */}
// //                 {!loading && !error && totalPages > 1 && (
// //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// //                         <div className="flex flex-1 justify-between sm:hidden">
// //                             <button
// //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// //                                 disabled={currentPage === 1}
// //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm disabled:opacity-50"
// //                             >
// //                                 Previous
// //                             </button>
// //                             <button
// //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// //                                 disabled={currentPage === totalPages}
// //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm disabled:opacity-50"
// //                             >
// //                                 Next
// //                             </button>
// //                         </div>
// //                     </div>
// //                 )}
// //             </div>
// //         </AdminLayout>
// //     )
// // }

// // export default AdminRequests


// // "use client"

// // import { useState, useEffect } from "react"
// // import { useParams, Link, useNavigate } from "react-router-dom"
// // import AdminLayout from "../../components/admin/AdminLayout"

// // const AdminRequestDetail = () => {
// //     const { requestId } = useParams()
// //     const navigate = useNavigate()
// //     const [request, setRequest] = useState(null)
// //     const [loading, setLoading] = useState(true)
// //     const [error, setError] = useState(null)
// //     const [statusUpdate, setStatusUpdate] = useState("")
// //     const [notes, setNotes] = useState("")

// //     // Mock data for demonstration
// //     const mockRequests = [
// //         {
// //             id: 1,
// //             name: "John Smith",
// //             email: "john.smith@example.com",
// //             company: "Aerospace Systems Inc.",
// //             phone: "(555) 123-4567",
// //             products: [
// //                 {
// //                     id: 1,
// //                     name: "WR-90 Straight Waveguide Section",
// //                     quantity: 2,
// //                     price: 195.0,
// //                     category: "Waveguide Straight",
// //                     image: "/images/waveguide-components/waveguide-straight.jpg",
// //                 },
// //                 {
// //                     id: 7,
// //                     name: "WR-90 E-Plane Bend",
// //                     quantity: 1,
// //                     price: 245.0,
// //                     category: "Waveguide Bend",
// //                     image: "/images/waveguide-components/waveguide-bend.jpg",
// //                 },
// //             ],
// //             totalAmount: 635.0,
// //             status: "pending",
// //             date: "2023-04-15T10:30:00Z",
// //             message: "Need these components for a satellite communication project.",
// //             notes: "",
// //             history: [{ date: "2023-04-15T10:30:00Z", action: "Request created", user: "System" }],
// //         },
// //         {
// //             id: 2,
// //             name: "Sarah Johnson",
// //             email: "sarah.johnson@example.com",
// //             company: "Defense Technologies",
// //             phone: "(555) 987-6543",
// //             products: [
// //                 {
// //                     id: 3,
// //                     name: "WR-62 Straight Waveguide Section",
// //                     quantity: 3,
// //                     price: 235.0,
// //                     category: "Waveguide Straight",
// //                     image: "/images/waveguide-components/waveguide-straight.jpg",
// //                 },
// //             ],
// //             totalAmount: 705.0,
// //             status: "processing",
// //             date: "2023-04-12T14:45:00Z",
// //             message: "Please provide lead time information.",
// //             notes: "Customer needs expedited shipping.",
// //             history: [
// //                 { date: "2023-04-12T14:45:00Z", action: "Request created", user: "System" },
// //                 { date: "2023-04-13T09:20:00Z", action: "Status changed to processing", user: "Admin" },
// //             ],
// //         },
// //     ]

// //     useEffect(() => {
// //         const fetchRequest = async () => {
// //             setLoading(true)
// //             try {
// //                 // In a real application, you would fetch from your API
// //                 // const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin/requests/${requestId}`);
// //                 // setRequest(response.data);

// //                 // Using mock data for demonstration
// //                 const foundRequest = mockRequests.find((req) => req.id === Number.parseInt(requestId))
// //                 if (foundRequest) {
// //                     setRequest(foundRequest)
// //                     setNotes(foundRequest.notes || "")
// //                 } else {
// //                     setError("Request not found")
// //                 }

// //                 setLoading(false)
// //             } catch (err) {
// //                 console.error("Error fetching request:", err)
// //                 setError("Failed to load request details. Please try again later.")
// //                 setLoading(false)
// //             }
// //         }

// //         fetchRequest()
// //     }, [requestId])

// //     const handleStatusChange = async (e) => {
// //         e.preventDefault()

// //         if (!statusUpdate) {
// //             return
// //         }

// //         try {
// //             // In a real application, you would update via your API
// //             // await axios.patch(`${process.env.REACT_APP_API_URL}/api/admin/requests/${requestId}`, {
// //             //   status: statusUpdate
// //             // });

// //             // Update local state
// //             setRequest((prev) => {
// //                 if (!prev) return null

// //                 const now = new Date().toISOString()
// //                 return {
// //                     ...prev,
// //                     status: statusUpdate,
// //                     history: [...prev.history, { date: now, action: `Status changed to ${statusUpdate}`, user: "Admin" }],
// //                 }
// //             })

// //             // Reset status update
// //             setStatusUpdate("")

// //             // Show success message
// //             alert(`Request status updated to ${statusUpdate}`)
// //         } catch (err) {
// //             console.error("Error updating request status:", err)
// //             alert("Failed to update request status. Please try again.")
// //         }
// //     }

// //     const handleNotesUpdate = async () => {
// //         try {
// //             // In a real application, you would update via your API
// //             // await axios.patch(`${process.env.REACT_APP_API_URL}/api/admin/requests/${requestId}`, {
// //             //   notes: notes
// //             // });

// //             // Update local state
// //             setRequest((prev) => {
// //                 if (!prev) return null
// //                 return {
// //                     ...prev,
// //                     notes: notes,
// //                 }
// //             })

// //             // Show success message
// //             alert("Notes updated successfully")
// //         } catch (err) {
// //             console.error("Error updating notes:", err)
// //             alert("Failed to update notes. Please try again.")
// //         }
// //     }

// //     const formatDate = (dateString) => {
// //         const date = new Date(dateString)
// //         return date.toLocaleDateString("en-US", {
// //             year: "numeric",
// //             month: "short",
// //             day: "numeric",
// //             hour: "2-digit",
// //             minute: "2-digit",
// //         })
// //     }

// //     const getStatusBadgeClass = (status) => {
// //         switch (status) {
// //             case "pending":
// //                 return "bg-yellow-100 text-yellow-800"
// //             case "processing":
// //                 return "bg-blue-100 text-blue-800"
// //             case "completed":
// //                 return "bg-green-100 text-green-800"
// //             case "cancelled":
// //                 return "bg-red-100 text-red-800"
// //             default:
// //                 return "bg-gray-100 text-gray-800"
// //         }
// //     }

// //     if (loading) {
// //         return (
// //             <AdminLayout>
// //                 <div className="flex justify-center items-center h-64">
// //                     <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-900 border-r-transparent"></div>
// //                     <p className="ml-2 text-gray-600">Loading request details...</p>
// //                 </div>
// //             </AdminLayout>
// //         )
// //     }

// //     if (error || !request) {
// //         return (
// //             <AdminLayout>
// //                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// //                     <p>{error || "Request not found"}</p>
// //                 </div>
// //                 <button
// //                     onClick={() => navigate("/admin/requests")}
// //                     className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-md"
// //                 >
// //                     Back to Requests
// //                 </button>
// //             </AdminLayout>
// //         )
// //     }

// //     return (
// //         <AdminLayout>
// //             <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// //                 <div>
// //                     <div className="flex items-center gap-2 mb-1">
// //                         <Link to="/admin/requests" className="text-blue-900 hover:text-blue-700">
// //                             <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
// //                             </svg>
// //                         </Link>
// //                         <h1 className="text-2xl font-bold text-gray-800">Request #{request.id}</h1>
// //                         <span
// //                             className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadgeClass(request.status)}`}
// //                         >
// //                             {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// //                         </span>
// //                     </div>
// //                     <p className="text-gray-600">Submitted on {formatDate(request.date)}</p>
// //                 </div>

// //                 <form onSubmit={handleStatusChange} className="flex items-center gap-2">
// //                     <select
// //                         value={statusUpdate}
// //                         onChange={(e) => setStatusUpdate(e.target.value)}
// //                         className="border border-gray-300 rounded-md py-2 pl-3 pr-10 focus:ring-blue-500 focus:border-blue-500"
// //                     >
// //                         <option value="">Update Status</option>
// //                         <option value="pending">Pending</option>
// //                         <option value="processing">Processing</option>
// //                         <option value="completed">Completed</option>
// //                         <option value="cancelled">Cancelled</option>
// //                     </select>
// //                     <button
// //                         type="submit"
// //                         disabled={!statusUpdate}
// //                         className={`py-2 px-4 rounded-md ${statusUpdate ? "bg-blue-900 hover:bg-blue-800 text-white" : "bg-gray-200 text-gray-500 cursor-not-allowed"
// //                             }`}
// //                     >
// //                         Update
// //                     </button>
// //                 </form>
// //             </div>

// //             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
// //                 {/* Customer Information */}
// //                 <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //                     <div className="px-6 py-4 border-b border-gray-200">
// //                         <h2 className="text-lg font-semibold text-gray-800">Customer Information</h2>
// //                     </div>
// //                     <div className="p-6">
// //                         <div className="mb-4">
// //                             <h3 className="text-sm font-medium text-gray-500">Name</h3>
// //                             <p className="text-gray-900">{request.name}</p>
// //                         </div>
// //                         <div className="mb-4">
// //                             <h3 className="text-sm font-medium text-gray-500">Company</h3>
// //                             <p className="text-gray-900">{request.company}</p>
// //                         </div>
// //                         <div className="mb-4">
// //                             <h3 className="text-sm font-medium text-gray-500">Email</h3>
// //                             <p className="text-gray-900">
// //                                 <a href={`mailto:${request.email}`} className="text-blue-900 hover:underline">
// //                                     {request.email}
// //                                 </a>
// //                             </p>
// //                         </div>
// //                         <div>
// //                             <h3 className="text-sm font-medium text-gray-500">Phone</h3>
// //                             <p className="text-gray-900">
// //                                 <a href={`tel:${request.phone}`} className="text-blue-900 hover:underline">
// //                                     {request.phone}
// //                                 </a>
// //                             </p>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Request Details */}
// //                 <div className="bg-white rounded-lg shadow-md overflow-hidden lg:col-span-2">
// //                     <div className="px-6 py-4 border-b border-gray-200">
// //                         <h2 className="text-lg font-semibold text-gray-800">Request Details</h2>
// //                     </div>
// //                     <div className="p-6">
// //                         <div className="mb-6">
// //                             <h3 className="text-sm font-medium text-gray-500 mb-2">Products</h3>
// //                             <div className="border rounded-md overflow-hidden">
// //                                 <table className="min-w-full divide-y divide-gray-200">
// //                                     <thead className="bg-gray-50">
// //                                         <tr>
// //                                             <th
// //                                                 scope="col"
// //                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                                             >
// //                                                 Product
// //                                             </th>
// //                                             <th
// //                                                 scope="col"
// //                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                                             >
// //                                                 Category
// //                                             </th>
// //                                             <th
// //                                                 scope="col"
// //                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                                             >
// //                                                 Quantity
// //                                             </th>
// //                                             <th
// //                                                 scope="col"
// //                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                                             >
// //                                                 Price
// //                                             </th>
// //                                             <th
// //                                                 scope="col"
// //                                                 className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// //                                             >
// //                                                 Total
// //                                             </th>
// //                                         </tr>
// //                                     </thead>
// //                                     <tbody className="bg-white divide-y divide-gray-200">
// //                                         {request.products.map((product, index) => (
// //                                             <tr key={index}>
// //                                                 <td className="px-6 py-4 whitespace-nowrap">
// //                                                     <div className="flex items-center">
// //                                                         <div className="flex-shrink-0 h-10 w-10">
// //                                                             <img
// //                                                                 className="h-10 w-10 rounded-md object-cover"
// //                                                                 src={product.image || "/placeholder.svg"}
// //                                                                 alt={product.name}
// //                                                             />
// //                                                         </div>
// //                                                         <div className="ml-4">
// //                                                             <div className="text-sm font-medium text-gray-900">{product.name}</div>
// //                                                         </div>
// //                                                     </div>
// //                                                 </td>
// //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>
// //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.quantity}</td>
// //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                                                     ${product.price.toFixed(2)}
// //                                                 </td>
// //                                                 <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// //                                                     ${(product.price * product.quantity).toFixed(2)}
// //                                                 </td>
// //                                             </tr>
// //                                         ))}
// //                                     </tbody>
// //                                     <tfoot className="bg-gray-50">
// //                                         <tr>
// //                                             <td colSpan="4" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
// //                                                 Total:
// //                                             </td>
// //                                             <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// //                                                 ${request.totalAmount.toFixed(2)}
// //                                             </td>
// //                                         </tr>
// //                                     </tfoot>
// //                                 </table>
// //                             </div>
// //                         </div>

// //                         {request.message && (
// //                             <div className="mb-6">
// //                                 <h3 className="text-sm font-medium text-gray-500 mb-2">Customer Message</h3>
// //                                 <div className="bg-gray-50 p-4 rounded-md">
// //                                     <p className="text-gray-700 whitespace-pre-line">{request.message}</p>
// //                                 </div>
// //                             </div>
// //                         )}

// //                         <div className="mb-6">
// //                             <h3 className="text-sm font-medium text-gray-500 mb-2">Status History</h3>
// //                             <div className="bg-gray-50 p-4 rounded-md">
// //                                 <ul className="space-y-3">
// //                                     {request.history.map((item, index) => (
// //                                         <li key={index} className="flex items-start">
// //                                             <div
// //                                                 className={`flex-shrink-0 h-4 w-4 rounded-full mt-1 mr-3 ${item.action.includes("created")
// //                                                     ? "bg-blue-500"
// //                                                     : item.action.includes("pending")
// //                                                         ? "bg-yellow-500"
// //                                                         : item.action.includes("processing")
// //                                                             ? "bg-blue-500"
// //                                                             : item.action.includes("completed")
// //                                                                 ? "bg-green-500"
// //                                                                 : item.action.includes("cancelled")
// //                                                                     ? "bg-red-500"
// //                                                                     : "bg-gray-500"
// //                                                     }`}
// //                                             ></div>
// //                                             <div>
// //                                                 <p className="text-sm text-gray-700">{item.action}</p>
// //                                                 <p className="text-xs text-gray-500">
// //                                                     {formatDate(item.date)} by {item.user}
// //                                                 </p>
// //                                             </div>
// //                                         </li>
// //                                     ))}
// //                                 </ul>
// //                             </div>
// //                         </div>

// //                         <div>
// //                             <h3 className="text-sm font-medium text-gray-500 mb-2">Admin Notes</h3>
// //                             <textarea
// //                                 value={notes}
// //                                 onChange={(e) => setNotes(e.target.value)}
// //                                 rows="4"
// //                                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// //                                 placeholder="Add internal notes about this request..."
// //                             ></textarea>
// //                             <div className="mt-2 flex justify-end">
// //                                 <button
// //                                     onClick={handleNotesUpdate}
// //                                     className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-md"
// //                                 >
// //                                     Save Notes
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             <div className="mt-6 flex justify-between">
// //                 <button
// //                     onClick={() => navigate("/admin/requests")}
// //                     className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md"
// //                 >
// //                     Back to Requests
// //                 </button>

// //                 <div className="flex gap-2">
// //                     <button
// //                         onClick={() => window.print()}
// //                         className="bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 rounded-md flex items-center"
// //                     >
// //                         <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                                 strokeWidth="2"
// //                                 d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
// //                             />
// //                         </svg>
// //                         Print
// //                     </button>

// //                     <button
// //                         onClick={() => {
// //                             // In a real application, you would generate and download a PDF
// //                             alert("Generating PDF...")
// //                         }}
// //                         className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-md flex items-center"
// //                     >
// //                         <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                             <path
// //                                 strokeLinecap="round"
// //                                 strokeLinejoin="round"
// //                                 strokeWidth="2"
// //                                 d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
// //                             />
// //                         </svg>
// //                         Export PDF
// //                     </button>
// //                 </div>
// //             </div>
// //         </AdminLayout>
// //     )
// // }

// // export default AdminRequestDetail

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
//                     timeout: 10000, // Set a 10-second timeout
//                     // Uncomment if authentication is required
//                     // headers: {
//                     //     Authorization: `Bearer ${localStorage.getItem("token")}`,
//                     // },
//                 })
//                 setRequest(response.data)
//                 setLoading(false)
//             } catch (err) {
//                 console.error("Error fetching request:", err.message);
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

//     // Log request after it updates
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
//                     <p>{error || "Request not found Hadd hogi yrr."}</p>
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
//                             Back to Requestss
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
//                                             <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-800">
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

"use client"

import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

// Configure axios base URL
axios.defaults.baseURL = "https://raycom-backend.onrender.com/api";

const RequestDetail = () => {
    const { requestId } = useParams();
    const navigate = useNavigate();
    const [request, setRequest] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRequest = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`/requests/${requestId}`, {
                    timeout: 10000, // Set a 10-second timeout
                });
                setRequest(response.data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching request:", err.message);
                if (err.code === "ECONNRESET") {
                    setError("Connection reset. Please check if the server is running and try again.");
                } else if (err.response) {
                    setError(err.response.data.message || "Failed to load request details.");
                } else {
                    setError("Failed to connect to the server. Please try again later.");
                }
                setLoading(false);
            }
        };

        fetchRequest();
    }, [requestId]);

    // Log request after it updates
    useEffect(() => {
        if (request) {
            console.log("Request data:", request);
        }
    }, [request]);

    const getStatusBadgeClass = (status) => {
        switch (status) {
            case "pending":
                return "bg-yellow-100 text-yellow-800";
            case "processing":
                return "bg-blue-100 text-blue-800";
            case "completed":
                return "bg-green-100 text-green-800";
            case "cancelled":
                return "bg-red-100 text-red-800";
            default:
                return "bg-gray-100 text-gray-800";
        }
    };

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
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
        );
    }

    if (error || !request) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-sm">
                <p>{error || "Request not found Hadd hogi yrr."}</p>
            </div>
        );
    }

    return (
        <div className="px-6 sm:px-8 lg:px-10 py-10 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="sm:flex sm:items-center sm:justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Request Details</h1>
                    <button
                        onClick={() => navigate("/admin/requests")}
                        className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition duration-300 shadow-sm"
                    >
                        Back to Requests
                    </button>
                </div>

                {/* Customer Information */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                            Customer Information
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="text-sm font-medium text-gray-600">Full Name</p>
                                <p className="text-gray-900 text-base">{request.name}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Email</p>
                                <p className="text-gray-900 text-base">{request.email}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Company</p>
                                <p className="text-gray-900 text-base">{request.company}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Phone</p>
                                <p className="text-gray-900 text-base">{request.phone}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Date</p>
                                <p className="text-gray-900 text-base">{formatDate(request.date)}</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-600">Status</p>
                                <span
                                    className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
                                >
                                    {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                </span>
                            </div>
                        </div>
                        {request.message && (
                            <div className="mt-6">
                                <p className="text-sm font-medium text-gray-600">Additional Information</p>
                                <p className="text-gray-900 text-base">{request.message}</p>
                            </div>
                        )}
                    </div>
                </div>

                {/* Products in Request */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
                    <div className="p-6">
                        <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
                            Products in Request
                        </h2>
                        <div className="overflow-x-auto">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-100">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
                                        >
                                            Image
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
                                        >
                                            Product
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
                                        >
                                            Category
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
                                        >
                                            Quantity
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-4 text-left text-xs font-semibold text-gray-800 uppercase tracking-wider"
                                        >
                                            Price
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {request.products.map((product) => (
                                        <tr key={product.id} className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                {product.image ? (
                                                    <img
                                                        src={product.image}
                                                        alt={product.name}
                                                        className="h-12 w-12 object-cover rounded-md"
                                                        onError={(e) => (e.target.src = "https://via.placeholder.com/48?text=No+Image")}
                                                    />
                                                ) : (
                                                    <div className="h-12 w-12 flex items-center justify-center text-gray-500 text-xs">
                                                        No Image
                                                    </div>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {product.category}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                                                {product.quantity}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                                                ${(product.price * product.quantity).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                                <tfoot className="bg-gray-100">
                                    <tr>
                                        <td colSpan="4" className="px-6 py-4 text-right text-sm font-medium text-gray-800">
                                            Total:
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-600">
                                            ${request.totalAmount.toFixed(2)}
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RequestDetail;