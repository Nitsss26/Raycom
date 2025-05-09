// // // // // // // // // // "use client"

// // // // // // // // // // import { useState, useEffect } from "react"
// // // // // // // // // // import { Link } from "react-router-dom"
// // // // // // // // // // import { Eye, Download, CheckCircle, XCircle, Filter, ChevronLeft, ChevronRight } from "lucide-react"
// // // // // // // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // // // // // // import { fetchRequests, updateRequestStatus } from "../../services/api"

// // // // // // // // // // const AdminRequests = () => {
// // // // // // // // // //   const [requests, setRequests] = useState([])
// // // // // // // // // //   const [loading, setLoading] = useState(true)
// // // // // // // // // //   const [error, setError] = useState(null)
// // // // // // // // // //   const [statusFilter, setStatusFilter] = useState("all")
// // // // // // // // // //   const [currentPage, setCurrentPage] = useState(1)
// // // // // // // // // //   const [itemsPerPage] = useState(10)

// // // // // // // // // //   useEffect(() => {
// // // // // // // // // //     const loadRequests = async () => {
// // // // // // // // // //       setLoading(true)
// // // // // // // // // //       try {
// // // // // // // // // //         const data = await fetchRequests()
// // // // // // // // // //         setRequests(data)
// // // // // // // // // //         setError(null)
// // // // // // // // // //       } catch (err) {
// // // // // // // // // //         setError("Failed to load requests. Please try again later.")
// // // // // // // // // //         setRequests([])
// // // // // // // // // //       } finally {
// // // // // // // // // //         setLoading(false)
// // // // // // // // // //       }
// // // // // // // // // //     }

// // // // // // // // // //     loadRequests()
// // // // // // // // // //   }, [])

// // // // // // // // // //   const handleStatusChange = async (requestId, newStatus) => {
// // // // // // // // // //     try {
// // // // // // // // // //       await updateRequestStatus(requestId, newStatus)

// // // // // // // // // //       // Update local state
// // // // // // // // // //       setRequests((prev) =>
// // // // // // // // // //         prev.map((request) => (request.id === requestId ? { ...request, status: newStatus } : request)),
// // // // // // // // // //       )
// // // // // // // // // //     } catch (err) {
// // // // // // // // // //       console.error("Error updating request status:", err)
// // // // // // // // // //       // Show error notification
// // // // // // // // // //     }
// // // // // // // // // //   }

// // // // // // // // // //   // Filter requests based on status
// // // // // // // // // //   const filteredRequests = requests?.filter((request) => {
// // // // // // // // // //     if (statusFilter === "all") return true
// // // // // // // // // //     return request.status === statusFilter
// // // // // // // // // //   })

// // // // // // // // // //   // Pagination
// // // // // // // // // //   const indexOfLastItem = currentPage * itemsPerPage
// // // // // // // // // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // // // // // // // // //   const currentItems = filteredRequests.slice(indexOfFirstItem, indexOfLastItem)
// // // // // // // // // //   const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)

// // // // // // // // // //   const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // // // // // // // // //   return (
// // // // // // // // // //     <AdminLayout>
// // // // // // // // // //       <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // // // // // //         <div className="sm:flex sm:items-center sm:justify-between">
// // // // // // // // // //           <div>
// // // // // // // // // //             <h1 className="text-2xl font-bold text-gray-900">Customer Requests</h1>
// // // // // // // // // //             <p className="mt-2 text-sm text-gray-700">A list of all customer product requests and inquiries.</p>
// // // // // // // // // //           </div>
// // // // // // // // // //           <div className="mt-4 sm:mt-0 flex items-center">
// // // // // // // // // //             <div className="relative">
// // // // // // // // // //               <select
// // // // // // // // // //                 value={statusFilter}
// // // // // // // // // //                 onChange={(e) => setStatusFilter(e.target.value)}
// // // // // // // // // //                 className="appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // // // // //               >
// // // // // // // // // //                 <option value="all">All Requests</option>
// // // // // // // // // //                 <option value="pending">Pending</option>
// // // // // // // // // //                 <option value="approved">Approved</option>
// // // // // // // // // //                 <option value="rejected">Rejected</option>
// // // // // // // // // //                 <option value="completed">Completed</option>
// // // // // // // // // //               </select>
// // // // // // // // // //               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // // // // // //                 <Filter className="h-4 w-4" />
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="mt-8 flex flex-col">
// // // // // // // // // //           <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // // // // // // // //             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // // // // // //               <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // // // // // //                 {loading ? (
// // // // // // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // // // // // //                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 ) : error ? (
// // // // // // // // // //                   <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // // // // // // // // //                 ) : currentItems.length === 0 ? (
// // // // // // // // // //                   <div className="text-center py-12 bg-white">
// // // // // // // // // //                     <p className="text-gray-500">No requests found.</p>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 ) : (
// // // // // // // // // //                   <table className="min-w-full divide-y divide-gray-300">
// // // // // // // // // //                     <thead className="bg-gray-50">
// // // // // // // // // //                       <tr>
// // // // // // // // // //                         <th
// // // // // // // // // //                           scope="col"
// // // // // // // // // //                           className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // // // // // // // //                         >
// // // // // // // // // //                           Request ID
// // // // // // // // // //                         </th>
// // // // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // // //                           Customer
// // // // // // // // // //                         </th>
// // // // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // // //                           Date
// // // // // // // // // //                         </th>
// // // // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // // //                           Items
// // // // // // // // // //                         </th>
// // // // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // // //                           Status
// // // // // // // // // //                         </th>
// // // // // // // // // //                         <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // // // // // // //                           <span className="sr-only">Actions</span>
// // // // // // // // // //                         </th>
// // // // // // // // // //                       </tr>
// // // // // // // // // //                     </thead>
// // // // // // // // // //                     <tbody className="divide-y divide-gray-200 bg-white">
// // // // // // // // // //                       {currentItems.map((request) => (
// // // // // // // // // //                         <tr key={request.id}>
// // // // // // // // // //                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
// // // // // // // // // //                             #{request.id}
// // // // // // // // // //                           </td>
// // // // // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // // //                             <div className="font-medium text-gray-900">{request.name}</div>
// // // // // // // // // //                             <div className="text-gray-500">{request.email}</div>
// // // // // // // // // //                           </td>
// // // // // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // // //                             {new Date(request.date).toLocaleDateString()}
// // // // // // // // // //                           </td>
// // // // // // // // // //                           <td className="px-3 py-4 text-sm text-gray-500">{request.items.length} items</td>
// // // // // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // // // // // // //                             <span
// // // // // // // // // //                               className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "approved"
// // // // // // // // // //                                 ? "bg-green-100 text-green-800"
// // // // // // // // // //                                 : request.status === "rejected"
// // // // // // // // // //                                   ? "bg-red-100 text-red-800"
// // // // // // // // // //                                   : request.status === "completed"
// // // // // // // // // //                                     ? "bg-blue-100 text-blue-800"
// // // // // // // // // //                                     : "bg-yellow-100 text-yellow-800"
// // // // // // // // // //                                 }`}
// // // // // // // // // //                             >
// // // // // // // // // //                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // // // // // // // //                             </span>
// // // // // // // // // //                           </td>
// // // // // // // // // //                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // // // // // //                             <div className="flex items-center justify-end space-x-2">
// // // // // // // // // //                               <Link to={`/admin/requests/${request.id}`} className="text-gray-600 hover:text-gray-900">
// // // // // // // // // //                                 <Eye className="h-5 w-5" />
// // // // // // // // // //                               </Link>
// // // // // // // // // //                               {request.status === "pending" && (
// // // // // // // // // //                                 <>
// // // // // // // // // //                                   <button
// // // // // // // // // //                                     onClick={() => handleStatusChange(request.id, "approved")}
// // // // // // // // // //                                     className="text-green-600 hover:text-green-900"
// // // // // // // // // //                                   >
// // // // // // // // // //                                     <CheckCircle className="h-5 w-5" />
// // // // // // // // // //                                   </button>
// // // // // // // // // //                                   <button
// // // // // // // // // //                                     onClick={() => handleStatusChange(request.id, "rejected")}
// // // // // // // // // //                                     className="text-red-600 hover:text-red-900"
// // // // // // // // // //                                   >
// // // // // // // // // //                                     <XCircle className="h-5 w-5" />
// // // // // // // // // //                                   </button>
// // // // // // // // // //                                 </>
// // // // // // // // // //                               )}
// // // // // // // // // //                               <button className="text-gray-600 hover:text-gray-900">
// // // // // // // // // //                                 <Download className="h-5 w-5" />
// // // // // // // // // //                               </button>
// // // // // // // // // //                             </div>
// // // // // // // // // //                           </td>
// // // // // // // // // //                         </tr>
// // // // // // // // // //                       ))}
// // // // // // // // // //                     </tbody>
// // // // // // // // // //                   </table>
// // // // // // // // // //                 )}
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         {/* Pagination */}
// // // // // // // // // //         {!loading && !error && totalPages > 1 && (
// // // // // // // // // //           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // // // // // //             <div className="flex flex-1 justify-between sm:hidden">
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // // // //                 disabled={currentPage === 1}
// // // // // // // // // //                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // // // // // //               >
// // // // // // // // // //                 Previous
// // // // // // // // // //               </button>
// // // // // // // // // //               <button
// // // // // // // // // //                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // // // //                 disabled={currentPage === totalPages}
// // // // // // // // // //                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // // // // // //               >
// // // // // // // // // //                 Next
// // // // // // // // // //               </button>
// // // // // // // // // //             </div>
// // // // // // // // // //             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // // // // // //               <div>
// // // // // // // // // //                 <p className="text-sm text-gray-700">
// // // // // // // // // //                   Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // // // // // //                   <span className="font-medium">{Math.min(indexOfLastItem, filteredRequests.length)}</span> of{" "}
// // // // // // // // // //                   <span className="font-medium">{filteredRequests.length}</span> results
// // // // // // // // // //                 </p>
// // // // // // // // // //               </div>
// // // // // // // // // //               <div>
// // // // // // // // // //                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // // // // // //                   <button
// // // // // // // // // //                     onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // // // //                     disabled={currentPage === 1}
// // // // // // // // // //                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // // // //                   >
// // // // // // // // // //                     <span className="sr-only">Previous</span>
// // // // // // // // // //                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // // // // // //                   </button>
// // // // // // // // // //                   {[...Array(totalPages).keys()].map((number) => (
// // // // // // // // // //                     <button
// // // // // // // // // //                       key={number + 1}
// // // // // // // // // //                       onClick={() => paginate(number + 1)}
// // // // // // // // // //                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // // // // // //                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // // // // // //                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // // // //                         }`}
// // // // // // // // // //                     >
// // // // // // // // // //                       {number + 1}
// // // // // // // // // //                     </button>
// // // // // // // // // //                   ))}
// // // // // // // // // //                   <button
// // // // // // // // // //                     onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // // // //                     disabled={currentPage === totalPages}
// // // // // // // // // //                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // // // //                   >
// // // // // // // // // //                     <span className="sr-only">Next</span>
// // // // // // // // // //                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // // // // // //                   </button>
// // // // // // // // // //                 </nav>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         )}
// // // // // // // // // //       </div>
// // // // // // // // // //     </AdminLayout>
// // // // // // // // // //   )
// // // // // // // // // // }

// // // // // // // // // // export default AdminRequests

// // // // // // // // // "use client"

// // // // // // // // // import { useState, useEffect } from "react"
// // // // // // // // // import { Link } from "react-router-dom"
// // // // // // // // // import { Eye, Download, CheckCircle, XCircle, Filter, ChevronLeft, ChevronRight } from "lucide-react"
// // // // // // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // // // // // import { fetchRequests, updateRequestStatus } from "../../services/api"

// // // // // // // // // const AdminRequests = () => {
// // // // // // // // //   const [requests, setRequests] = useState([])
// // // // // // // // //   const [loading, setLoading] = useState(true)
// // // // // // // // //   const [error, setError] = useState(null)
// // // // // // // // //   const [statusFilter, setStatusFilter] = useState("all")
// // // // // // // // //   const [currentPage, setCurrentPage] = useState(1)
// // // // // // // // //   const [itemsPerPage] = useState(10)

// // // // // // // // //   useEffect(() => {
// // // // // // // // //     const loadRequests = async () => {
// // // // // // // // //       setLoading(true)
// // // // // // // // //       try {
// // // // // // // // //         const data = await fetchRequests()
// // // // // // // // //         setRequests(data)
// // // // // // // // //         setError(null)
// // // // // // // // //       } catch (err) {
// // // // // // // // //         setError("Failed to load requests. Please try again later.")
// // // // // // // // //         setRequests([])
// // // // // // // // //       } finally {
// // // // // // // // //         setLoading(false)
// // // // // // // // //       }
// // // // // // // // //     }

// // // // // // // // //     loadRequests()
// // // // // // // // //   }, [])

// // // // // // // // //   const handleStatusChange = async (requestId, newStatus) => {
// // // // // // // // //     try {
// // // // // // // // //       await updateRequestStatus(requestId, newStatus)

// // // // // // // // //       // Update local state
// // // // // // // // //       setRequests((prev) =>
// // // // // // // // //         prev.map((request) => (request.id === requestId ? { ...request, status: newStatus } : request)),
// // // // // // // // //       )
// // // // // // // // //     } catch (err) {
// // // // // // // // //       console.error("Error updating request status:", err)
// // // // // // // // //       // Show error notification
// // // // // // // // //     }
// // // // // // // // //   }

// // // // // // // // //   // Ensure requests is an array before filtering
// // // // // // // // //   const filteredRequests = Array.isArray(requests)
// // // // // // // // //     ? requests.filter((request) => {
// // // // // // // // //       if (statusFilter === "all") return true
// // // // // // // // //       return request.status === statusFilter
// // // // // // // // //     })
// // // // // // // // //     : []

// // // // // // // // //   // Pagination
// // // // // // // // //   const indexOfLastItem = currentPage * itemsPerPage
// // // // // // // // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // // // // // // // //   const currentItems = filteredRequests.slice(indexOfFirstItem, indexOfLastItem)
// // // // // // // // //   const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)

// // // // // // // // //   const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // // // // // // // //   return (
// // // // // // // // //     <AdminLayout>
// // // // // // // // //       <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // // // // //         <div className="sm:flex sm:items-center sm:justify-between">
// // // // // // // // //           <div>
// // // // // // // // //             <h1 className="text-2xl font-bold text-gray-900">Customer Requests</h1>
// // // // // // // // //             <p className="mt-2 text-sm text-gray-700">A list of all customer product requests and inquiries.</p>
// // // // // // // // //           </div>
// // // // // // // // //           <div className="mt-4 sm:mt-0 flex items-center">
// // // // // // // // //             <div className="relative">
// // // // // // // // //               <select
// // // // // // // // //                 value={statusFilter}
// // // // // // // // //                 onChange={(e) => setStatusFilter(e.target.value)}
// // // // // // // // //                 className="appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // // // //               >
// // // // // // // // //                 <option value="all">All Requests</option>
// // // // // // // // //                 <option value="pending">Pending</option>
// // // // // // // // //                 <option value="approved">Approved</option>
// // // // // // // // //                 <option value="rejected">Rejected</option>
// // // // // // // // //                 <option value="completed">Completed</option>
// // // // // // // // //               </select>
// // // // // // // // //               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // // // // //                 <Filter className="h-4 w-4" />
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="mt-8 flex flex-col">
// // // // // // // // //           <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // // // // // // //             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // // // // //               <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // // // // //                 {loading ? (
// // // // // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // // // // //                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // // // // // // //                   </div>
// // // // // // // // //                 ) : error ? (
// // // // // // // // //                   <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // // // // // // // //                 ) : currentItems.length === 0 ? (
// // // // // // // // //                   <div className="text-center py-12 bg-white">
// // // // // // // // //                     <p className="text-gray-500">No requests found.</p>
// // // // // // // // //                   </div>
// // // // // // // // //                 ) : (
// // // // // // // // //                   <table className="min-w-full divide-y divide-gray-300">
// // // // // // // // //                     <thead className="bg-gray-50">
// // // // // // // // //                       <tr>
// // // // // // // // //                         <th
// // // // // // // // //                           scope="col"
// // // // // // // // //                           className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // // // // // // //                         >
// // // // // // // // //                           Request ID
// // // // // // // // //                         </th>
// // // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // //                           Customer
// // // // // // // // //                         </th>
// // // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // //                           Date
// // // // // // // // //                         </th>
// // // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // //                           Items
// // // // // // // // //                         </th>
// // // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // //                           Status
// // // // // // // // //                         </th>
// // // // // // // // //                         <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // // // // // //                           <span className="sr-only">Actions</span>
// // // // // // // // //                         </th>
// // // // // // // // //                       </tr>
// // // // // // // // //                     </thead>
// // // // // // // // //                     <tbody className="divide-y divide-gray-200 bg-white">
// // // // // // // // //                       {currentItems.map((request) => (
// // // // // // // // //                         <tr key={request.id}>
// // // // // // // // //                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
// // // // // // // // //                             #{request.id}
// // // // // // // // //                           </td>
// // // // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // //                             <div className="font-medium text-gray-900">{request.name}</div>
// // // // // // // // //                             <div className="text-gray-500">{request.email}</div>
// // // // // // // // //                           </td>
// // // // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // //                             {new Date(request.date).toLocaleDateString()}
// // // // // // // // //                           </td>
// // // // // // // // //                           <td className="px-3 py-4 text-sm text-gray-500">{request.items.length} items</td>
// // // // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // // // // // //                             <span
// // // // // // // // //                               className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "approved"
// // // // // // // // //                                 ? "bg-green-100 text-green-800"
// // // // // // // // //                                 : request.status === "rejected"
// // // // // // // // //                                   ? "bg-red-100 text-red-800"
// // // // // // // // //                                   : request.status === "completed"
// // // // // // // // //                                     ? "bg-blue-100 text-blue-800"
// // // // // // // // //                                     : "bg-yellow-100 text-yellow-800"
// // // // // // // // //                                 }`}
// // // // // // // // //                             >
// // // // // // // // //                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // // // // // // //                             </span>
// // // // // // // // //                           </td>
// // // // // // // // //                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // // // // //                             <div className="flex items-center justify-end space-x-2">
// // // // // // // // //                               <Link to={`/admin/requests/${request.id}`} className="text-gray-600 hover:text-gray-900">
// // // // // // // // //                                 <Eye className="h-5 w-5" />
// // // // // // // // //                               </Link>
// // // // // // // // //                               {request.status === "pending" && (
// // // // // // // // //                                 <>
// // // // // // // // //                                   <button
// // // // // // // // //                                     onClick={() => handleStatusChange(request.id, "approved")}
// // // // // // // // //                                     className="text-green-600 hover:text-green-900"
// // // // // // // // //                                   >
// // // // // // // // //                                     <CheckCircle className="h-5 w-5" />
// // // // // // // // //                                   </button>
// // // // // // // // //                                   <button
// // // // // // // // //                                     onClick={() => handleStatusChange(request.id, "rejected")}
// // // // // // // // //                                     className="text-red-600 hover:text-red-900"
// // // // // // // // //                                   >
// // // // // // // // //                                     <XCircle className="h-5 w-5" />
// // // // // // // // //                                   </button>
// // // // // // // // //                                 </>
// // // // // // // // //                               )}
// // // // // // // // //                               <button className="text-gray-600 hover:text-gray-900">
// // // // // // // // //                                 <Download className="h-5 w-5" />
// // // // // // // // //                               </button>
// // // // // // // // //                             </div>
// // // // // // // // //                           </td>
// // // // // // // // //                         </tr>
// // // // // // // // //                       ))}
// // // // // // // // //                     </tbody>
// // // // // // // // //                   </table>
// // // // // // // // //                 )}
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         {/* Pagination */}
// // // // // // // // //         {!loading && !error && totalPages > 1 && (
// // // // // // // // //           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // // // // //             <div className="flex flex-1 justify-between sm:hidden">
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // // //                 disabled={currentPage === 1}
// // // // // // // // //                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // // // // //               >
// // // // // // // // //                 Previous
// // // // // // // // //               </button>
// // // // // // // // //               <button
// // // // // // // // //                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // // //                 disabled={currentPage === totalPages}
// // // // // // // // //                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // // // // //               >
// // // // // // // // //                 Next
// // // // // // // // //               </button>
// // // // // // // // //             </div>
// // // // // // // // //             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // // // // //               <div>
// // // // // // // // //                 <p className="text-sm text-gray-700">
// // // // // // // // //                   Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // // // // //                   <span className="font-medium">{Math.min(indexOfLastItem, filteredRequests.length)}</span> of{" "}
// // // // // // // // //                   <span className="font-medium">{filteredRequests.length}</span> results
// // // // // // // // //                 </p>
// // // // // // // // //               </div>
// // // // // // // // //               <div>
// // // // // // // // //                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // // //                     disabled={currentPage === 1}
// // // // // // // // //                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // // //                   >
// // // // // // // // //                     <span className="sr-only">Previous</span>
// // // // // // // // //                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // // // // //                   </button>
// // // // // // // // //                   {[...Array(totalPages).keys()].map((number) => (
// // // // // // // // //                     <button
// // // // // // // // //                       key={number + 1}
// // // // // // // // //                       onClick={() => paginate(number + 1)}
// // // // // // // // //                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // // // // //                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // // // // //                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // // //                         }`}
// // // // // // // // //                     >
// // // // // // // // //                       {number + 1}
// // // // // // // // //                     </button>
// // // // // // // // //                   ))}
// // // // // // // // //                   <button
// // // // // // // // //                     onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // // //                     disabled={currentPage === totalPages}
// // // // // // // // //                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // // //                   >
// // // // // // // // //                     <span className="sr-only">Next</span>
// // // // // // // // //                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // // // // //                   </button>
// // // // // // // // //                 </nav>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         )}
// // // // // // // // //       </div>
// // // // // // // // //     </AdminLayout>
// // // // // // // // //   )
// // // // // // // // // }

// // // // // // // // // export default AdminRequests

// // // // // // // // "use client"

// // // // // // // // import { useState, useEffect } from "react"
// // // // // // // // import { Link } from "react-router-dom"
// // // // // // // // import { Eye, Download, CheckCircle, XCircle, Filter, ChevronLeft, ChevronRight } from "lucide-react"
// // // // // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // // // // import { fetchRequests, updateRequestStatus } from "../../services/api"

// // // // // // // // const AdminRequests = () => {
// // // // // // // //   const [requests, setRequests] = useState([])
// // // // // // // //   const [loading, setLoading] = useState(true)
// // // // // // // //   const [error, setError] = useState(null)
// // // // // // // //   const [statusFilter, setStatusFilter] = useState("all")
// // // // // // // //   const [currentPage, setCurrentPage] = useState(1)
// // // // // // // //   const [itemsPerPage] = useState(10)

// // // // // // // //   useEffect(() => {
// // // // // // // //     const loadRequests = async () => {
// // // // // // // //       setLoading(true)
// // // // // // // //       try {
// // // // // // // //         const data = await fetchRequests()
// // // // // // // //         setRequests(data)
// // // // // // // //         setError(null)
// // // // // // // //       } catch (err) {
// // // // // // // //         setError("Failed to load requests. Please try again later.")
// // // // // // // //         setRequests([])
// // // // // // // //       } finally {
// // // // // // // //         setLoading(false)
// // // // // // // //       }
// // // // // // // //     }

// // // // // // // //     loadRequests()
// // // // // // // //   }, [])

// // // // // // // //   const handleStatusChange = async (requestId, newStatus) => {
// // // // // // // //     try {
// // // // // // // //       await updateRequestStatus(requestId, newStatus)

// // // // // // // //       // Update local state
// // // // // // // //       setRequests((prev) =>
// // // // // // // //         prev.map((request) => (request.id === requestId ? { ...request, status: newStatus } : request)),
// // // // // // // //       )
// // // // // // // //     } catch (err) {
// // // // // // // //       console.error("Error updating request status:", err)
// // // // // // // //       // Show error notification
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   // Filter requests based on status
// // // // // // // //   const filteredRequests = (Array.isArray(requests) ? requests : []).filter((request) => {
// // // // // // // //     if (statusFilter === "all") return true
// // // // // // // //     return request.status === statusFilter
// // // // // // // //   })

// // // // // // // //   // Pagination
// // // // // // // //   const indexOfLastItem = currentPage * itemsPerPage
// // // // // // // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // // // // // // //   const currentItems = filteredRequests.slice(indexOfFirstItem, indexOfLastItem)
// // // // // // // //   const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)

// // // // // // // //   const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // // // // // // //   return (
// // // // // // // //     <AdminLayout>
// // // // // // // //       <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // // // //         <div className="sm:flex sm:items-center sm:justify-between">
// // // // // // // //           <div>
// // // // // // // //             <h1 className="text-2xl font-bold text-gray-900">Customer Requests</h1>
// // // // // // // //             <p className="mt-2 text-sm text-gray-700">A list of all customer product requests and inquiries.</p>
// // // // // // // //           </div>
// // // // // // // //           <div className="mt-4 sm:mt-0 flex items-center">
// // // // // // // //             <div className="relative">
// // // // // // // //               <select
// // // // // // // //                 value={statusFilter}
// // // // // // // //                 onChange={(e) => setStatusFilter(e.target.value)}
// // // // // // // //                 className="appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // // //               >
// // // // // // // //                 <option value="all">All Requests</option>
// // // // // // // //                 <option value="pending">Pending</option>
// // // // // // // //                 <option value="approved">Approved</option>
// // // // // // // //                 <option value="rejected">Rejected</option>
// // // // // // // //                 <option value="completed">Completed</option>
// // // // // // // //               </select>
// // // // // // // //               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // // // //                 <Filter className="h-4 w-4" />
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <div className="mt-8 flex flex-col">
// // // // // // // //           <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // // // // // //             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // // // //               <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // // // //                 {loading ? (
// // // // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // // // //                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // // // // // //                   </div>
// // // // // // // //                 ) : error ? (
// // // // // // // //                   <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // // // // // // //                 ) : currentItems.length === 0 ? (
// // // // // // // //                   <div className="text-center py-12 bg-white">
// // // // // // // //                     <p className="text-gray-500">No requests found.</p>
// // // // // // // //                   </div>
// // // // // // // //                 ) : (
// // // // // // // //                   <table className="min-w-full divide-y divide-gray-300">
// // // // // // // //                     <thead className="bg-gray-50">
// // // // // // // //                       <tr>
// // // // // // // //                         <th
// // // // // // // //                           scope="col"
// // // // // // // //                           className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // // // // // //                         >
// // // // // // // //                           Request ID
// // // // // // // //                         </th>
// // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // //                           Customer
// // // // // // // //                         </th>
// // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // //                           Date
// // // // // // // //                         </th>
// // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // //                           Items
// // // // // // // //                         </th>
// // // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // //                           Status
// // // // // // // //                         </th>
// // // // // // // //                         <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // // // // //                           <span className="sr-only">Actions</span>
// // // // // // // //                         </th>
// // // // // // // //                       </tr>
// // // // // // // //                     </thead>
// // // // // // // //                     <tbody className="divide-y divide-gray-200 bg-white">
// // // // // // // //                       {currentItems.map((request) => (
// // // // // // // //                         <tr key={request.id}>
// // // // // // // //                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
// // // // // // // //                             #{request.id}
// // // // // // // //                           </td>
// // // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // //                             <div className="font-medium text-gray-900">{request.name}</div>
// // // // // // // //                             <div className="text-gray-500">{request.email}</div>
// // // // // // // //                           </td>
// // // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // //                             {new Date(request.date).toLocaleDateString()}
// // // // // // // //                           </td>
// // // // // // // //                           <td className="px-3 py-4 text-sm text-gray-500">{request.items.length} items</td>
// // // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // // // // //                             <span
// // // // // // // //                               className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "approved"
// // // // // // // //                                 ? "bg-green-100 text-green-800"
// // // // // // // //                                 : request.status === "rejected"
// // // // // // // //                                   ? "bg-red-100 text-red-800"
// // // // // // // //                                   : request.status === "completed"
// // // // // // // //                                     ? "bg-blue-100 text-blue-800"
// // // // // // // //                                     : "bg-yellow-100 text-yellow-800"
// // // // // // // //                                 }`}
// // // // // // // //                             >
// // // // // // // //                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // // // // // //                             </span>
// // // // // // // //                           </td>
// // // // // // // //                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // // // //                             <div className="flex items-center justify-end space-x-2">
// // // // // // // //                               <Link to={`/admin/requests/${request.id}`} className="text-gray-600 hover:text-gray-900">
// // // // // // // //                                 <Eye className="h-5 w-5" />
// // // // // // // //                               </Link>
// // // // // // // //                               {request.status === "pending" && (
// // // // // // // //                                 <>
// // // // // // // //                                   <button
// // // // // // // //                                     onClick={() => handleStatusChange(request.id, "approved")}
// // // // // // // //                                     className="text-green-600 hover:text-green-900"
// // // // // // // //                                   >
// // // // // // // //                                     <CheckCircle className="h-5 w-5" />
// // // // // // // //                                   </button>
// // // // // // // //                                   <button
// // // // // // // //                                     onClick={() => handleStatusChange(request.id, "rejected")}
// // // // // // // //                                     className="text-red-600 hover:text-red-900"
// // // // // // // //                                   >
// // // // // // // //                                     <XCircle className="h-5 w-5" />
// // // // // // // //                                   </button>
// // // // // // // //                                 </>
// // // // // // // //                               )}
// // // // // // // //                               <button className="text-gray-600 hover:text-gray-900">
// // // // // // // //                                 <Download className="h-5 w-5" />
// // // // // // // //                               </button>
// // // // // // // //                             </div>
// // // // // // // //                           </td>
// // // // // // // //                         </tr>
// // // // // // // //                       ))}
// // // // // // // //                     </tbody>
// // // // // // // //                   </table>
// // // // // // // //                 )}
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         {/* Pagination */}
// // // // // // // //         {!loading && !error && totalPages > 1 && (
// // // // // // // //           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // // // //             <div className="flex flex-1 justify-between sm:hidden">
// // // // // // // //               <button
// // // // // // // //                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // //                 disabled={currentPage === 1}
// // // // // // // //                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // // // //               >
// // // // // // // //                 Previous
// // // // // // // //               </button>
// // // // // // // //               <button
// // // // // // // //                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // //                 disabled={currentPage === totalPages}
// // // // // // // //                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // // // //               >
// // // // // // // //                 Next
// // // // // // // //               </button>
// // // // // // // //             </div>
// // // // // // // //             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // // // //               <div>
// // // // // // // //                 <p className="text-sm text-gray-700">
// // // // // // // //                   Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // // // //                   <span className="font-medium">{Math.min(indexOfLastItem, filteredRequests.length)}</span> of{" "}
// // // // // // // //                   <span className="font-medium">{filteredRequests.length}</span> results
// // // // // // // //                 </p>
// // // // // // // //               </div>
// // // // // // // //               <div>
// // // // // // // //                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // // // //                   <button
// // // // // // // //                     onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // //                     disabled={currentPage === 1}
// // // // // // // //                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // //                   >
// // // // // // // //                     <span className="sr-only">Previous</span>
// // // // // // // //                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // // // //                   </button>
// // // // // // // //                   {[...Array(totalPages).keys()].map((number) => (
// // // // // // // //                     <button
// // // // // // // //                       key={number + 1}
// // // // // // // //                       onClick={() => paginate(number + 1)}
// // // // // // // //                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // // // //                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // // // //                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // //                         }`}
// // // // // // // //                     >
// // // // // // // //                       {number + 1}
// // // // // // // //                     </button>
// // // // // // // //                   ))}
// // // // // // // //                   <button
// // // // // // // //                     onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // //                     disabled={currentPage === totalPages}
// // // // // // // //                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // //                   >
// // // // // // // //                     <span className="sr-only">Next</span>
// // // // // // // //                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // // // //                   </button>
// // // // // // // //                 </nav>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         )}
// // // // // // // //       </div>
// // // // // // // //     </AdminLayout>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default AdminRequests



// // // // // // // "use client"

// // // // // // // import { useState, useEffect } from "react"
// // // // // // // import { Link } from "react-router-dom"
// // // // // // // import { Eye, Download, CheckCircle, XCircle, Filter, ChevronLeft, ChevronRight } from "lucide-react"
// // // // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // // // import axios from "axios"
// // // // // // // import { updateRequestStatus } from "services/api"

// // // // // // // // Updated fetchRequests to point to your API endpoint
// // // // // // // export const fetchRequests = async () => {
// // // // // // //   try {
// // // // // // //     const response = await axios.get("https://raycom-backend.onrender.com/api/requests");
// // // // // // //     return response.data;
// // // // // // //   } catch (error) {
// // // // // // //     console.error("Error fetching requests:", error);
// // // // // // //     throw error;
// // // // // // //   }
// // // // // // // };

// // // // // // // const AdminRequests = () => {
// // // // // // //   const [requests, setRequests] = useState([])
// // // // // // //   const [loading, setLoading] = useState(true)
// // // // // // //   const [error, setError] = useState(null)
// // // // // // //   const [statusFilter, setStatusFilter] = useState("all")
// // // // // // //   const [currentPage, setCurrentPage] = useState(1)
// // // // // // //   const [itemsPerPage] = useState(10)

// // // // // // //   useEffect(() => {
// // // // // // //     const loadRequests = async () => {
// // // // // // //       setLoading(true)
// // // // // // //       try {
// // // // // // //         const data = await fetchRequests()
// // // // // // //         // Set requests to data.requests to get the array
// // // // // // //         setRequests(Array.isArray(data.requests) ? data.requests : [])
// // // // // // //         setError(null)
// // // // // // //       } catch (err) {
// // // // // // //         setError("Failed to load requests. Please try again later.")
// // // // // // //         setRequests([])
// // // // // // //       } finally {
// // // // // // //         setLoading(false)
// // // // // // //       }
// // // // // // //     }

// // // // // // //     loadRequests()
// // // // // // //   }, [])

// // // // // // //   const handleStatusChange = async (requestId, newStatus) => {
// // // // // // //     try {
// // // // // // //       // Assuming updateRequestStatus is defined elsewhere in "../../services/api"
// // // // // // //       await updateRequestStatus(requestId, newStatus)

// // // // // // //       // Update local state
// // // // // // //       setRequests((prev) =>
// // // // // // //         prev.map((request) => (request.id === requestId ? { ...request, status: newStatus } : request)),
// // // // // // //       )
// // // // // // //     } catch (err) {
// // // // // // //       console.error("Error updating request status:", err)
// // // // // // //       // Show error notification
// // // // // // //     }
// // // // // // //   }

// // // // // // //   // Ensure requests is an array before filtering
// // // // // // //   const filteredRequests = Array.isArray(requests)
// // // // // // //     ? requests.filter((request) => {
// // // // // // //       if (statusFilter === "all") return true
// // // // // // //       return request.status === statusFilter
// // // // // // //     })
// // // // // // //     : []

// // // // // // //   // Pagination
// // // // // // //   const indexOfLastItem = currentPage * itemsPerPage
// // // // // // //   const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // // // // // //   const currentItems = filteredRequests.slice(indexOfFirstItem, indexOfLastItem)
// // // // // // //   const totalPages = Math.ceil(filteredRequests.length / itemsPerPage)

// // // // // // //   const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // // // // // //   return (
// // // // // // //     <AdminLayout>
// // // // // // //       <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // // //         <div className="sm:flex sm:items-center sm:justify-between">
// // // // // // //           <div>
// // // // // // //             <h1 className="text-2xl font-bold text-gray-900">Customer Requests</h1>
// // // // // // //             <p className="mt-2 text-sm text-gray-700">A list of all customer product requests and inquiries.</p>
// // // // // // //           </div>
// // // // // // //           <div className="mt-4 sm:mt-0 flex items-center">
// // // // // // //             <div className="relative">
// // // // // // //               <select
// // // // // // //                 value={statusFilter}
// // // // // // //                 onChange={(e) => setStatusFilter(e.target.value)}
// // // // // // //                 className="appearance-none block w-full bg-white border border-gray-300 rounded-md py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // //               >
// // // // // // //                 <option value="all">All Requests</option>
// // // // // // //                 <option value="pending">Pending</option>
// // // // // // //                 <option value="approved">Approved</option>
// // // // // // //                 <option value="rejected">Rejected</option>
// // // // // // //                 <option value="completed">Completed</option>
// // // // // // //               </select>
// // // // // // //               <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // // //                 <Filter className="h-4 w-4" />
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div className="mt-8 flex flex-col">
// // // // // // //           <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // // // // //             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // // //               <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // // //                 {loading ? (
// // // // // // //                   <div className="flex justify-center items-center h-64">
// // // // // // //                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // // // // //                   </div>
// // // // // // //                 ) : error ? (
// // // // // // //                   <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // // // // // //                 ) : currentItems.length === 0 ? (
// // // // // // //                   <div className="text-center py-12 bg-white">
// // // // // // //                     <p className="text-gray-500">No requests found.</p>
// // // // // // //                   </div>
// // // // // // //                 ) : (
// // // // // // //                   <table className="min-w-full divide-y divide-gray-300">
// // // // // // //                     <thead className="bg-gray-50">
// // // // // // //                       <tr>
// // // // // // //                         <th
// // // // // // //                           scope="col"
// // // // // // //                           className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // // // // //                         >
// // // // // // //                           Request ID
// // // // // // //                         </th>
// // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // //                           Customer
// // // // // // //                         </th>
// // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // //                           Date
// // // // // // //                         </th>
// // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // //                           Items
// // // // // // //                         </th>
// // // // // // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // //                           Status
// // // // // // //                         </th>
// // // // // // //                         <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // // // //                           <span className="sr-only">Actions</span>
// // // // // // //                         </th>
// // // // // // //                       </tr>
// // // // // // //                     </thead>
// // // // // // //                     <tbody className="divide-y divide-gray-200 bg-white">
// // // // // // //                       {currentItems.map((request) => (
// // // // // // //                         <tr key={request.id}>
// // // // // // //                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
// // // // // // //                             #{request.id}
// // // // // // //                           </td>
// // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // //                             <div className="font-medium text-gray-900">{request.name}</div>
// // // // // // //                             <div className="text-gray-500">{request.email}</div>
// // // // // // //                           </td>
// // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // //                             {new Date(request.date).toLocaleDateString()}
// // // // // // //                           </td>
// // // // // // //                           <td className="px-3 py-4 text-sm text-gray-500">{request.items.length} items</td>
// // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // // // //                             <span
// // // // // // //                               className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "approved"
// // // // // // //                                 ? "bg-green-100 text-green-800"
// // // // // // //                                 : request.status === "rejected"
// // // // // // //                                   ? "bg-red-100 text-red-800"
// // // // // // //                                   : request.status === "completed"
// // // // // // //                                     ? "bg-blue-100 text-blue-800"
// // // // // // //                                     : "bg-yellow-100 text-yellow-800"
// // // // // // //                                 }`}
// // // // // // //                             >
// // // // // // //                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // // // // //                             </span>
// // // // // // //                           </td>
// // // // // // //                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // // //                             <div className="flex items-center justify-end space-x-2">
// // // // // // //                               <Link to={`/admin/requests/${request.id}`} className="text-gray-600 hover:text-gray-900">
// // // // // // //                                 <Eye className="h-5 w-5" />
// // // // // // //                               </Link>
// // // // // // //                               {request.status === "pending" && (
// // // // // // //                                 <>
// // // // // // //                                   <button
// // // // // // //                                     onClick={() => handleStatusChange(request.id, "approved")}
// // // // // // //                                     className="text-green-600 hover:text-green-900"
// // // // // // //                                   >
// // // // // // //                                     <CheckCircle className="h-5 w-5" />
// // // // // // //                                   </button>
// // // // // // //                                   <button
// // // // // // //                                     onClick={() => handleStatusChange(request.id, "rejected")}
// // // // // // //                                     className="text-red-600 hover:text-red-900"
// // // // // // //                                   >
// // // // // // //                                     <XCircle className="h-5 w-5" />
// // // // // // //                                   </button>
// // // // // // //                                 </>
// // // // // // //                               )}
// // // // // // //                               <button className="text-gray-600 hover:text-gray-900">
// // // // // // //                                 <Download className="h-5 w-5" />
// // // // // // //                               </button>
// // // // // // //                             </div>
// // // // // // //                           </td>
// // // // // // //                         </tr>
// // // // // // //                       ))}
// // // // // // //                     </tbody>
// // // // // // //                   </table>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Pagination */}
// // // // // // //         {!loading && !error && totalPages > 1 && (
// // // // // // //           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // // //             <div className="flex flex-1 justify-between sm:hidden">
// // // // // // //               <button
// // // // // // //                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // //                 disabled={currentPage === 1}
// // // // // // //                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // // //               >
// // // // // // //                 Previous
// // // // // // //               </button>
// // // // // // //               <button
// // // // // // //                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // //                 disabled={currentPage === totalPages}
// // // // // // //                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // // //               >
// // // // // // //                 Next
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // // //               <div>
// // // // // // //                 <p className="text-sm text-gray-700">
// // // // // // //                   Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // // //                   <span className="font-medium">{Math.min(indexOfLastItem, filteredRequests.length)}</span> of{" "}
// // // // // // //                   <span className="font-medium">{filteredRequests.length}</span> results
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // // //                   <button
// // // // // // //                     onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // //                     disabled={currentPage === 1}
// // // // // // //                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // //                   >
// // // // // // //                     <span className="sr-only">Previous</span>
// // // // // // //                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // // //                   </button>
// // // // // // //                   {[...Array(totalPages).keys()].map((number) => (
// // // // // // //                     <button
// // // // // // //                       key={number + 1}
// // // // // // //                       onClick={() => paginate(number + 1)}
// // // // // // //                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // // //                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // // //                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // //                         }`}
// // // // // // //                     >
// // // // // // //                       {number + 1}
// // // // // // //                     </button>
// // // // // // //                   ))}
// // // // // // //                   <button
// // // // // // //                     onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // //                     disabled={currentPage === totalPages}
// // // // // // //                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // //                   >
// // // // // // //                     <span className="sr-only">Next</span>
// // // // // // //                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // // //                   </button>
// // // // // // //                 </nav>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </AdminLayout>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default AdminRequests
// // // // // // // "use client"

// // // // // // // import { useState, useEffect } from "react"
// // // // // // // import { Link } from "react-router-dom"
// // // // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // // // import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"

// // // // // // // const AdminRequests = () => {
// // // // // // //   const [requests, setRequests] = useState([])
// // // // // // //   const [loading, setLoading] = useState(true)
// // // // // // //   const [error, setError] = useState(null)
// // // // // // //   const [filter, setFilter] = useState("all")
// // // // // // //   const [searchTerm, setSearchTerm] = useState("")
// // // // // // //   const [currentPage, setCurrentPage] = useState(1)
// // // // // // //   const [totalPages, setTotalPages] = useState(1)
// // // // // // //   const [sortBy, setSortBy] = useState("date")
// // // // // // //   const [sortOrder, setSortOrder] = useState("desc")

// // // // // // //   // Mock data for demonstration
// // // // // // //   const mockRequests = [
// // // // // // //     {
// // // // // // //       id: 1,
// // // // // // //       name: "John Smith",
// // // // // // //       email: "john.smith@example.com",
// // // // // // //       company: "Aerospace Systems Inc.",
// // // // // // //       phone: "(555) 123-4567",
// // // // // // //       products: [
// // // // // // //         { id: 1, name: "WR-90 Straight Waveguide Section", quantity: 2, price: 195.0, category: "Waveguide Straight" },
// // // // // // //         { id: 7, name: "WR-90 E-Plane Bend", quantity: 1, price: 245.0, category: "Waveguide Bend" },
// // // // // // //       ],
// // // // // // //       totalAmount: 635.0,
// // // // // // //       status: "pending",
// // // // // // //       date: "2023-04-15T10:30:00Z",
// // // // // // //       message: "Need these components for a satellite communication project.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 2,
// // // // // // //       name: "Sarah Johnson",
// // // // // // //       email: "sarah.johnson@example.com",
// // // // // // //       company: "Defense Technologies",
// // // // // // //       phone: "(555) 987-6543",
// // // // // // //       products: [
// // // // // // //         { id: 3, name: "WR-62 Straight Waveguide Section", quantity: 3, price: 235.0, category: "Waveguide Straight" },
// // // // // // //       ],
// // // // // // //       totalAmount: 705.0,
// // // // // // //       status: "processing",
// // // // // // //       date: "2023-04-12T14:45:00Z",
// // // // // // //       message: "Please provide lead time information.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 3,
// // // // // // //       name: "Michael Chen",
// // // // // // //       email: "michael.chen@example.com",
// // // // // // //       company: "Research Institute",
// // // // // // //       phone: "(555) 456-7890",
// // // // // // //       products: [
// // // // // // //         { id: 8, name: "WR-75 H-Plane Bend", quantity: 2, price: 265.0, category: "Waveguide Bend" },
// // // // // // //         { id: 2, name: "WR-75 Straight Waveguide Section", quantity: 4, price: 215.0, category: "Waveguide Straight" },
// // // // // // //       ],
// // // // // // //       totalAmount: 1390.0,
// // // // // // //       status: "completed",
// // // // // // //       date: "2023-04-08T09:15:00Z",
// // // // // // //       message: "These components are for a research project.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 4,
// // // // // // //       name: "Emily Davis",
// // // // // // //       email: "emily.davis@example.com",
// // // // // // //       company: "Telecom Solutions",
// // // // // // //       phone: "(555) 789-0123",
// // // // // // //       products: [
// // // // // // //         { id: 5, name: "WR-28 Straight Waveguide Section", quantity: 1, price: 325.0, category: "Waveguide Straight" },
// // // // // // //       ],
// // // // // // //       totalAmount: 325.0,
// // // // // // //       status: "cancelled",
// // // // // // //       date: "2023-04-05T16:20:00Z",
// // // // // // //       message: "Need this for a prototype.",
// // // // // // //     },
// // // // // // //     {
// // // // // // //       id: 5,
// // // // // // //       name: "Robert Wilson",
// // // // // // //       email: "robert.wilson@example.com",
// // // // // // //       company: "Satellite Communications",
// // // // // // //       phone: "(555) 234-5678",
// // // // // // //       products: [
// // // // // // //         { id: 1, name: "WR-90 Straight Waveguide Section", quantity: 5, price: 195.0, category: "Waveguide Straight" },
// // // // // // //         { id: 4, name: "WR-42 Straight Waveguide Section", quantity: 3, price: 275.0, category: "Waveguide Straight" },
// // // // // // //       ],
// // // // // // //       totalAmount: 1800.0,
// // // // // // //       status: "pending",
// // // // // // //       date: "2023-04-18T11:10:00Z",
// // // // // // //       message: "Urgent order for a government project.",
// // // // // // //     },
// // // // // // //   ]

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchRequests = async () => {
// // // // // // //       setLoading(true)
// // // // // // //       try {
// // // // // // //         let filteredRequests = [...mockRequests]

// // // // // // //         // Apply status filter
// // // // // // //         if (filter !== "all") {
// // // // // // //           filteredRequests = filteredRequests.filter((req) => req.status === filter)
// // // // // // //         }

// // // // // // //         // Apply search
// // // // // // //         if (searchTerm) {
// // // // // // //           const term = searchTerm.toLowerCase()
// // // // // // //           filteredRequests = filteredRequests.filter(
// // // // // // //             (req) =>
// // // // // // //               req.name.toLowerCase().includes(term) ||
// // // // // // //               req.email.toLowerCase().includes(term) ||
// // // // // // //               req.company.toLowerCase().includes(term) ||
// // // // // // //               req.products.some((p) => p.name.toLowerCase().includes(term)),
// // // // // // //           )
// // // // // // //         }

// // // // // // //         // Apply sorting
// // // // // // //         filteredRequests.sort((a, b) => {
// // // // // // //           let comparison = 0

// // // // // // //           if (sortBy === "date") {
// // // // // // //             comparison = new Date(a.date) - new Date(b.date)
// // // // // // //           } else if (sortBy === "amount") {
// // // // // // //             comparison = a.totalAmount - b.totalAmount
// // // // // // //           } else if (sortBy === "name") {
// // // // // // //             comparison = a.name.localeCompare(b.name)
// // // // // // //           }

// // // // // // //           return sortOrder === "asc" ? comparison : -comparison
// // // // // // //         })

// // // // // // //         setRequests(filteredRequests)
// // // // // // //         setTotalPages(Math.ceil(filteredRequests.length / 10)) // Assuming 10 items per page

// // // // // // //         setLoading(false)
// // // // // // //       } catch (err) {
// // // // // // //         console.error("Error fetching requests:", err)
// // // // // // //         setError("Failed to load requests. Please try again later.")
// // // // // // //         setLoading(false)
// // // // // // //       }
// // // // // // //     }

// // // // // // //     fetchRequests()
// // // // // // //   }, [currentPage, filter, searchTerm, sortBy, sortOrder])

// // // // // // //   const handleFilterChange = (e) => {
// // // // // // //     setFilter(e.target.value)
// // // // // // //     setCurrentPage(1)
// // // // // // //   }

// // // // // // //   const handleSearchChange = (e) => {
// // // // // // //     setSearchTerm(e.target.value)
// // // // // // //     setCurrentPage(1)
// // // // // // //   }

// // // // // // //   const handleSort = (field) => {
// // // // // // //     if (sortBy === field) {
// // // // // // //       setSortOrder(sortOrder === "asc" ? "desc" : "asc")
// // // // // // //     } else {
// // // // // // //       setSortBy(field)
// // // // // // //       setSortOrder("desc")
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const handleStatusChange = async (requestId, newStatus) => {
// // // // // // //     try {
// // // // // // //       setRequests((prevRequests) =>
// // // // // // //         prevRequests.map((req) => (req.id === requestId ? { ...req, status: newStatus } : req)),
// // // // // // //       )
// // // // // // //       alert(`Request #${requestId} status updated to ${newStatus}`)
// // // // // // //     } catch (err) {
// // // // // // //       console.error("Error updating request status:", err)
// // // // // // //       alert("Failed to update request status. Please try again.")
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const getStatusBadgeClass = (status) => {
// // // // // // //     switch (status) {
// // // // // // //       case "pending":
// // // // // // //         return "bg-yellow-100 text-yellow-800"
// // // // // // //       case "processing":
// // // // // // //         return "bg-blue-100 text-blue-800"
// // // // // // //       case "completed":
// // // // // // //         return "bg-green-100 text-green-800"
// // // // // // //       case "cancelled":
// // // // // // //         return "bg-red-100 text-red-800"
// // // // // // //       default:
// // // // // // //         return "bg-gray-100 text-gray-800"
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const formatDate = (dateString) => {
// // // // // // //     const date = new Date(dateString)
// // // // // // //     return date.toLocaleDateString("en-US", {
// // // // // // //       year: "numeric",
// // // // // // //       month: "short",
// // // // // // //       day: "numeric",
// // // // // // //       hour: "2-digit",
// // // // // // //       minute: "2-digit",
// // // // // // //     })
// // // // // // //   }

// // // // // // //   if (loading) {
// // // // // // //     return (
// // // // // // //       <AdminLayout>
// // // // // // //         <div className="flex justify-center items-center h-64">
// // // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
// // // // // // //         </div>
// // // // // // //       </AdminLayout>
// // // // // // //     )
// // // // // // //   }

// // // // // // //   if (error) {
// // // // // // //     return (
// // // // // // //       <AdminLayout>
// // // // // // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // // // // // //           <p>{error}</p>
// // // // // // //         </div>
// // // // // // //       </AdminLayout>
// // // // // // //     )
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <AdminLayout>
// // // // // // //       <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // // //         {/* Header */}
// // // // // // //         <div className="sm:flex sm:items-center sm:justify-between">
// // // // // // //           <div>
// // // // // // //             <p className="mt-2 text-3xl text-gray-900">Customer Requests</p>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Search and Filter */}
// // // // // // //         <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // // // // // //           <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // // // //             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // // // //               <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
// // // // // // //             </div>
// // // // // // //             <input
// // // // // // //               type="text"
// // // // // // //               placeholder="Search requests..."
// // // // // // //               value={searchTerm}
// // // // // // //               onChange={handleSearchChange}
// // // // // // //               className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
// // // // // // //             />
// // // // // // //           </div>
// // // // // // //           <div className="relative max-w-xs w-full">
// // // // // // //             <select
// // // // // // //               value={filter}
// // // // // // //               onChange={handleFilterChange}
// // // // // // //               className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // // // // //             >
// // // // // // //               <option value="all">All Requests</option>
// // // // // // //               <option value="pending">Pending</option>
// // // // // // //               <option value="processing">Processing</option>
// // // // // // //               <option value="completed">Completed</option>
// // // // // // //               <option value="cancelled">Cancelled</option>
// // // // // // //             </select>
// // // // // // //             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // // //               <Filter className="h-4 w-4" />
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Requests Table */}
// // // // // // //         <div className="mt-8 flex flex-col">
// // // // // // //           <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // // // // //             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // // //               <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // // //                 {requests.length === 0 ? (
// // // // // // //                   <div className="text-center py-12 bg-white">
// // // // // // //                     <p className="text-gray-500">No requests found.</p>
// // // // // // //                   </div>
// // // // // // //                 ) : (
// // // // // // //                   <table className="min-w-full divide-y divide-gray-300">
// // // // // // //                     <thead className="bg-gray-50">
// // // // // // //                       <tr>
// // // // // // //                         <th
// // // // // // //                           scope="col"
// // // // // // //                           className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // // // // //                         >
// // // // // // //                           <button onClick={() => handleSort("date")} className="flex items-center focus:outline-none">
// // // // // // //                             Date
// // // // // // //                             {sortBy === "date" && (
// // // // // // //                               <svg
// // // // // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // // // // //                                 fill="none"
// // // // // // //                                 stroke="currentColor"
// // // // // // //                                 viewBox="0 0 24 24"
// // // // // // //                               >
// // // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // // // // //                               </svg>
// // // // // // //                             )}
// // // // // // //                           </button>
// // // // // // //                         </th>
// // // // // // //                         <th
// // // // // // //                           scope="col"
// // // // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // // // //                         >
// // // // // // //                           <button onClick={() => handleSort("name")} className="flex items-center focus:outline-none">
// // // // // // //                             Customer
// // // // // // //                             {sortBy === "name" && (
// // // // // // //                               <svg
// // // // // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // // // // //                                 fill="none"
// // // // // // //                                 stroke="currentColor"
// // // // // // //                                 viewBox="0 0 24 24"
// // // // // // //                               >
// // // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // // // // //                               </svg>
// // // // // // //                             )}
// // // // // // //                           </button>
// // // // // // //                         </th>
// // // // // // //                         <th
// // // // // // //                           scope="col"
// // // // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // // // //                         >
// // // // // // //                           Products
// // // // // // //                         </th>
// // // // // // //                         <th
// // // // // // //                           scope="col"
// // // // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // // // //                         >
// // // // // // //                           <button onClick={() => handleSort("amount")} className="flex items-center focus:outline-none">
// // // // // // //                             Total
// // // // // // //                             {sortBy === "amount" && (
// // // // // // //                               <svg
// // // // // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // // // // //                                 fill="none"
// // // // // // //                                 stroke="currentColor"
// // // // // // //                                 viewBox="0 0 24 24"
// // // // // // //                               >
// // // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // // // // //                               </svg>
// // // // // // //                             )}
// // // // // // //                           </button>
// // // // // // //                         </th>
// // // // // // //                         <th
// // // // // // //                           scope="col"
// // // // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // // // //                         >
// // // // // // //                           Status
// // // // // // //                         </th>
// // // // // // //                         <th
// // // // // // //                           scope="col"
// // // // // // //                           className="relative py-3.5 pl-3 pr-4 sm:pr-6"
// // // // // // //                         >
// // // // // // //                           <span className="sr-only">Actions</span>
// // // // // // //                         </th>
// // // // // // //                       </tr>
// // // // // // //                     </thead>
// // // // // // //                     <tbody className="divide-y divide-gray-200 bg-white">
// // // // // // //                       {requests.map((request) => (
// // // // // // //                         <tr key={request.id}>
// // // // // // //                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
// // // // // // //                             {formatDate(request.date)}
// // // // // // //                           </td>
// // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // // // //                             <div className="font-medium text-gray-900">{request.name}</div>
// // // // // // //                             <div className="text-gray-500">{request.company}</div>
// // // // // // //                           </td>
// // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // // // //                             <div className="text-gray-900">
// // // // // // //                               {request.products.length} {request.products.length === 1 ? "item" : "items"}
// // // // // // //                             </div>
// // // // // // //                             <div className="text-gray-500">
// // // // // // //                               {request.products
// // // // // // //                                 .map((p) => p.name)
// // // // // // //                                 .join(", ")
// // // // // // //                                 .substring(0, 30)}
// // // // // // //                               {request.products.map((p) => p.name).join(", ").length > 30 ? "..." : ""}
// // // // // // //                             </div>
// // // // // // //                           </td>
// // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
// // // // // // //                             ${request.totalAmount.toFixed(2)}
// // // // // // //                           </td>
// // // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // // // //                             <span
// // // // // // //                               className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
// // // // // // //                             >
// // // // // // //                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // // // // //                             </span>
// // // // // // //                           </td>
// // // // // // //                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // // //                             <div className="flex items-center justify-end space-x-3">
// // // // // // //                               <Link to={`/admin/requests/${request.id}`} className="text-indigo-600 hover:text-indigo-900">
// // // // // // //                                 View
// // // // // // //                               </Link>
// // // // // // //                               <div className="relative group">
// // // // // // //                                 <button className="text-gray-500 hover:text-gray-700">
// // // // // // //                                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // // //                                     <path
// // // // // // //                                       strokeLinecap="round"
// // // // // // //                                       strokeLinejoin="round"
// // // // // // //                                       strokeWidth="2"
// // // // // // //                                       d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
// // // // // // //                                     />
// // // // // // //                                   </svg>
// // // // // // //                                 </button>
// // // // // // //                                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
// // // // // // //                                   {request.status !== "processing" && (
// // // // // // //                                     <button
// // // // // // //                                       onClick={() => handleStatusChange(request.id, "processing")}
// // // // // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
// // // // // // //                                     >
// // // // // // //                                       Mark as Processing
// // // // // // //                                     </button>
// // // // // // //                                   )}
// // // // // // //                                   {request.status !== "completed" && (
// // // // // // //                                     <button
// // // // // // //                                       onClick={() => handleStatusChange(request.id, "completed")}
// // // // // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
// // // // // // //                                     >
// // // // // // //                                       Mark as Completed
// // // // // // //                                     </button>
// // // // // // //                                   )}
// // // // // // //                                   {request.status !== "cancelled" && (
// // // // // // //                                     <button
// // // // // // //                                       onClick={() => handleStatusChange(request.id, "cancelled")}
// // // // // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
// // // // // // //                                     >
// // // // // // //                                       Cancel Request
// // // // // // //                                     </button>
// // // // // // //                                   )}
// // // // // // //                                 </div>
// // // // // // //                               </div>
// // // // // // //                             </div>
// // // // // // //                           </td>
// // // // // // //                         </tr>
// // // // // // //                       ))}
// // // // // // //                     </tbody>
// // // // // // //                   </table>
// // // // // // //                 )}
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         {/* Pagination */}
// // // // // // //         {totalPages > 1 && (
// // // // // // //           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // // //             <div className="flex flex-1 justify-between sm:hidden">
// // // // // // //               <button
// // // // // // //                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // // // // // //                 disabled={currentPage === 1}
// // // // // // //                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // // //               >
// // // // // // //                 Previous
// // // // // // //               </button>
// // // // // // //               <button
// // // // // // //                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // // // // // //                 disabled={currentPage === totalPages}
// // // // // // //                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // // //               >
// // // // // // //                 Next
// // // // // // //               </button>
// // // // // // //             </div>
// // // // // // //             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // // //               <div>
// // // // // // //                 <p className="text-sm text-gray-700">
// // // // // // //                   Showing page <span className="font-medium">{currentPage}</span> of{" "}
// // // // // // //                   <span className="font-medium">{totalPages}</span>
// // // // // // //                 </p>
// // // // // // //               </div>
// // // // // // //               <div>
// // // // // // //                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // // //                   <button
// // // // // // //                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // // // // // //                     disabled={currentPage === 1}
// // // // // // //                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // // //                   >
// // // // // // //                     <span className="sr-only">Previous</span>
// // // // // // //                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // // //                   </button>
// // // // // // //                   {[...Array(totalPages).keys()].map((number) => (
// // // // // // //                     <button
// // // // // // //                       key={number + 1}
// // // // // // //                       onClick={() => setCurrentPage(number + 1)}
// // // // // // //                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // // //                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // // //                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // //                         }`}
// // // // // // //                     >
// // // // // // //                       {number + 1}
// // // // // // //                     </button>
// // // // // // //                   ))}
// // // // // // //                   <button
// // // // // // //                     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // // // // // //                     disabled={currentPage === totalPages}
// // // // // // //                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // // //                   >
// // // // // // //                     <span className="sr-only">Next</span>
// // // // // // //                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // // //                   </button>
// // // // // // //                 </nav>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         )}
// // // // // // //       </div>
// // // // // // //     </AdminLayout>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default AdminRequests


// // // // // // "use client"

// // // // // // import { useState, useEffect } from "react"
// // // // // // import { Link } from "react-router-dom"
// // // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // // import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"
// // // // // // import axios from "axios"

// // // // // // const AdminRequests = () => {
// // // // // //   const [requests, setRequests] = useState([])
// // // // // //   const [loading, setLoading] = useState(true)
// // // // // //   const [error, setError] = useState(null)
// // // // // //   const [filter, setFilter] = useState("all")
// // // // // //   const [searchTerm, setSearchTerm] = useState("")
// // // // // //   const [currentPage, setCurrentPage] = useState(1)
// // // // // //   const [totalPages, setTotalPages] = useState(1)
// // // // // //   const [sortBy, setSortBy] = useState("date")
// // // // // //   const [sortOrder, setSortOrder] = useState("desc")

// // // // // //   useEffect(() => {
// // // // // //     const fetchRequests = async () => {
// // // // // //       setLoading(true)
// // // // // //       try {
// // // // // //         const response = await axios.get(`${process.env.REACT_APP_API_URL}/requests`, {
// // // // // //           params: {
// // // // // //             status: filter,
// // // // // //             search: searchTerm,
// // // // // //             sortBy,
// // // // // //             sortOrder,
// // // // // //             page: currentPage,
// // // // // //             limit: 10,
// // // // // //           },
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //           },
// // // // // //         })

// // // // // //         setRequests(response.data.requests)
// // // // // //         setTotalPages(response.data.totalPages)
// // // // // //         setLoading(false)
// // // // // //       } catch (err) {
// // // // // //         console.error("Error fetching requests:", err)
// // // // // //         setError("Failed to load requests. Please try again later.")
// // // // // //         setLoading(false)
// // // // // //       }
// // // // // //     }

// // // // // //     fetchRequests()
// // // // // //   }, [currentPage, filter, searchTerm, sortBy, sortOrder])

// // // // // //   const handleFilterChange = (e) => {
// // // // // //     setFilter(e.target.value)
// // // // // //     setCurrentPage(1)
// // // // // //   }

// // // // // //   const handleSearchChange = (e) => {
// // // // // //     setSearchTerm(e.target.value)
// // // // // //     setCurrentPage(1)
// // // // // //   }

// // // // // //   const handleSort = (field) => {
// // // // // //     if (sortBy === field) {
// // // // // //       setSortOrder(sortOrder === "asc" ? "desc" : "asc")
// // // // // //     } else {
// // // // // //       setSortBy(field)
// // // // // //       setSortOrder("desc")
// // // // // //     }
// // // // // //   }

// // // // // //   const handleStatusChange = async (requestId, newStatus) => {
// // // // // //     try {
// // // // // //       const response = await axios.put(
// // // // // //         `${process.env.REACT_APP_API_URL}/requests/${requestId}/status`,
// // // // // //         { status: newStatus },
// // // // // //         {
// // // // // //           headers: {
// // // // // //             Authorization: `Bearer ${localStorage.getItem("token")}`,
// // // // // //           },
// // // // // //         }
// // // // // //       )

// // // // // //       setRequests((prevRequests) =>
// // // // // //         prevRequests.map((req) => (req._id === requestId ? response.data : req))
// // // // // //       )
// // // // // //       alert(`Request #${requestId} status updated to ${newStatus}`)
// // // // // //     } catch (err) {
// // // // // //       console.error("Error updating request status:", err)
// // // // // //       alert("Failed to update request status. Please try again.")
// // // // // //     }
// // // // // //   }

// // // // // //   const getStatusBadgeClass = (status) => {
// // // // // //     switch (status) {
// // // // // //       case "pending":
// // // // // //         return "bg-yellow-100 text-yellow-800"
// // // // // //       case "processing":
// // // // // //         return "bg-blue-100 text-blue-800"
// // // // // //       case "completed":
// // // // // //         return "bg-green-100 text-green-800"
// // // // // //       case "cancelled":
// // // // // //         return "bg-red-100 text-red-800"
// // // // // //       default:
// // // // // //         return "bg-gray-100 text-gray-800"
// // // // // //     }
// // // // // //   }

// // // // // //   const formatDate = (dateString) => {
// // // // // //     const date = new Date(dateString)
// // // // // //     return date.toLocaleDateString("en-US", {
// // // // // //       year: "numeric",
// // // // // //       month: "short",
// // // // // //       day: "numeric",
// // // // // //       hour: "2-digit",
// // // // // //       minute: "2-digit",
// // // // // //     })
// // // // // //   }

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <AdminLayout>
// // // // // //         <div className="flex justify-center items-center h-64">
// // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
// // // // // //         </div>
// // // // // //       </AdminLayout>
// // // // // //     )
// // // // // //   }

// // // // // //   if (error) {
// // // // // //     return (
// // // // // //       <AdminLayout>
// // // // // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // // // // //           <p>{error}</p>
// // // // // //         </div>
// // // // // //       </AdminLayout>
// // // // // //     )
// // // // // //   }

// // // // // //   return (
// // // // // //     <AdminLayout>
// // // // // //       <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // //         {/* Header */}
// // // // // //         <div className="sm:flex sm:items-center sm:justify-between">
// // // // // //           <div>
// // // // // //             <p className="mt-2 text-3xl text-gray-900">Customer Requests</p>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Search and Filter */}
// // // // // //         <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // // // // //           <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // // //             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // // //               <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
// // // // // //             </div>
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               placeholder="Search requests..."
// // // // // //               value={searchTerm}
// // // // // //               onChange={handleSearchChange}
// // // // // //               className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
// // // // // //             />
// // // // // //           </div>
// // // // // //           <div className="relative max-w-xs w-full">
// // // // // //             <select
// // // // // //               value={filter}
// // // // // //               onChange={handleFilterChange}
// // // // // //               className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // // // //             >
// // // // // //               <option value="all">All Requests</option>
// // // // // //               <option value="pending">Pending</option>
// // // // // //               <option value="processing">Processing</option>
// // // // // //               <option value="completed">Completed</option>
// // // // // //               <option value="cancelled">Cancelled</option>
// // // // // //             </select>
// // // // // //             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // //               <Filter className="h-4 w-4" />
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Requests Table */}
// // // // // //         <div className="mt-8 flex flex-col">
// // // // // //           <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // // // //             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // //               <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // //                 {requests.length === 0 ? (
// // // // // //                   <div className="text-center py-12 bg-white">
// // // // // //                     <p className="text-gray-500">No requests found.</p>
// // // // // //                   </div>
// // // // // //                 ) : (
// // // // // //                   <table className="min-w-full divide-y divide-gray-300">
// // // // // //                     <thead className="bg-gray-50">
// // // // // //                       <tr>
// // // // // //                         <th
// // // // // //                           scope="col"
// // // // // //                           className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // // // //                         >
// // // // // //                           <button onClick={() => handleSort("date")} className="flex items-center focus:outline-none">
// // // // // //                             Date
// // // // // //                             {sortBy === "date" && (
// // // // // //                               <svg
// // // // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // // // //                                 fill="none"
// // // // // //                                 stroke="currentColor"
// // // // // //                                 viewBox="0 0 24 24"
// // // // // //                               >
// // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // // // //                               </svg>
// // // // // //                             )}
// // // // // //                           </button>
// // // // // //                         </th>
// // // // // //                         <th
// // // // // //                           scope="col"
// // // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // // //                         >
// // // // // //                           <button onClick={() => handleSort("name")} className="flex items-center focus:outline-none">
// // // // // //                             Customer
// // // // // //                             {sortBy === "name" && (
// // // // // //                               <svg
// // // // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // // // //                                 fill="none"
// // // // // //                                 stroke="currentColor"
// // // // // //                                 viewBox="0 0 24 24"
// // // // // //                               >
// // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // // // //                               </svg>
// // // // // //                             )}
// // // // // //                           </button>
// // // // // //                         </th>
// // // // // //                         <th
// // // // // //                           scope="col"
// // // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // // //                         >
// // // // // //                           Products
// // // // // //                         </th>
// // // // // //                         <th
// // // // // //                           scope="col"
// // // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // // //                         >
// // // // // //                           <button onClick={() => handleSort("amount")} className="flex items-center focus:outline-none">
// // // // // //                             Total
// // // // // //                             {sortBy === "amount" && (
// // // // // //                               <svg
// // // // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // // // //                                 fill="none"
// // // // // //                                 stroke="currentColor"
// // // // // //                                 viewBox="0 0 24 24"
// // // // // //                               >
// // // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // // // //                               </svg>
// // // // // //                             )}
// // // // // //                           </button>
// // // // // //                         </th>
// // // // // //                         <th
// // // // // //                           scope="col"
// // // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // // //                         >
// // // // // //                           Status
// // // // // //                         </th>
// // // // // //                         <th
// // // // // //                           scope="col"
// // // // // //                           className="relative py-3.5 pl-3 pr-4 sm:pr-6"
// // // // // //                         >
// // // // // //                           <span className="sr-only">Actions</span>
// // // // // //                         </th>
// // // // // //                       </tr>
// // // // // //                     </thead>
// // // // // //                     <tbody className="divide-y divide-gray-200 bg-white">
// // // // // //                       {requests.map((request) => (
// // // // // //                         <tr key={request._id}>
// // // // // //                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
// // // // // //                             {formatDate(request.date)}
// // // // // //                           </td>
// // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // // //                             <div className="font-medium text-gray-900">{request.name}</div>
// // // // // //                             <div className="text-gray-500">{request.company}</div>
// // // // // //                           </td>
// // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // // //                             <div className="text-gray-900">
// // // // // //                               {request.products.length} {request.products.length === 1 ? "item" : "items"}
// // // // // //                             </div>
// // // // // //                             <div className="text-gray-500">
// // // // // //                               {request.products
// // // // // //                                 .map((p) => p.name)
// // // // // //                                 .join(", ")
// // // // // //                                 .substring(0, 30)}
// // // // // //                               {request.products.map((p) => p.name).join(", ").length > 30 ? "..." : ""}
// // // // // //                             </div>
// // // // // //                           </td>
// // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
// // // // // //                             ${request.totalAmount.toFixed(2)}
// // // // // //                           </td>
// // // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // // //                             <span
// // // // // //                               className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
// // // // // //                             >
// // // // // //                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // // // //                             </span>
// // // // // //                           </td>
// // // // // //                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // //                             <div className="flex items-center justify-end space-x-3">
// // // // // //                               <Link to={`/admin/requests/${request._id}`} className="text-indigo-600 hover:text-indigo-900">
// // // // // //                                 View
// // // // // //                               </Link>
// // // // // //                               <div className="relative group">
// // // // // //                                 <button className="text-gray-500 hover:text-gray-700">
// // // // // //                                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // // //                                     <path
// // // // // //                                       strokeLinecap="round"
// // // // // //                                       strokeLinejoin="round"
// // // // // //                                       strokeWidth="2"
// // // // // //                                       d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
// // // // // //                                     />
// // // // // //                                   </svg>
// // // // // //                                 </button>
// // // // // //                                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
// // // // // //                                   {request.status !== "processing" && (
// // // // // //                                     <button
// // // // // //                                       onClick={() => handleStatusChange(request._id, "processing")}
// // // // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
// // // // // //                                     >
// // // // // //                                       Mark as Processing
// // // // // //                                     </button>
// // // // // //                                   )}
// // // // // //                                   {request.status !== "completed" && (
// // // // // //                                     <button
// // // // // //                                       onClick={() => handleStatusChange(request._id, "completed")}
// // // // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
// // // // // //                                     >
// // // // // //                                       Mark as Completed
// // // // // //                                     </button>
// // // // // //                                   )}
// // // // // //                                   {request.status !== "cancelled" && (
// // // // // //                                     <button
// // // // // //                                       onClick={() => handleStatusChange(request._id, "cancelled")}
// // // // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
// // // // // //                                     >
// // // // // //                                       Cancel Request
// // // // // //                                     </button>
// // // // // //                                   )}
// // // // // //                                 </div>
// // // // // //                               </div>
// // // // // //                             </div>
// // // // // //                           </td>
// // // // // //                         </tr>
// // // // // //                       ))}
// // // // // //                     </tbody>
// // // // // //                   </table>
// // // // // //                 )}
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Pagination */}
// // // // // //         {totalPages > 1 && (
// // // // // //           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // //             <div className="flex flex-1 justify-between sm:hidden">
// // // // // //               <button
// // // // // //                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // // // // //                 disabled={currentPage === 1}
// // // // // //                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // //               >
// // // // // //                 Previous
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // // // // //                 disabled={currentPage === totalPages}
// // // // // //                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // //               >
// // // // // //                 Next
// // // // // //               </button>
// // // // // //             </div>
// // // // // //             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // //               <div>
// // // // // //                 <p className="text-sm text-gray-700">
// // // // // //                   Showing page <span className="font-medium">{currentPage}</span> of{" "}
// // // // // //                   <span className="font-medium">{totalPages}</span>
// // // // // //                 </p>
// // // // // //               </div>
// // // // // //               <div>
// // // // // //                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // //                   <button
// // // // // //                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // // // // //                     disabled={currentPage === 1}
// // // // // //                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // //                   >
// // // // // //                     <span className="sr-only">Previous</span>
// // // // // //                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // //                   </button>
// // // // // //                   {[...Array(totalPages).keys()].map((number) => (
// // // // // //                     <button
// // // // // //                       key={number + 1}
// // // // // //                       onClick={() => setCurrentPage(number + 1)}
// // // // // //                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // //                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // //                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // //                         }`}
// // // // // //                     >
// // // // // //                       {number + 1}
// // // // // //                     </button>
// // // // // //                   ))}
// // // // // //                   <button
// // // // // //                     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // // // // //                     disabled={currentPage === totalPages}
// // // // // //                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // //                   >
// // // // // //                     <span className="sr-only">Next</span>
// // // // // //                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // //                   </button>
// // // // // //                 </nav>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </AdminLayout>
// // // // // //   )
// // // // // // }

// // // // // // export default AdminRequests

// // // // // "use client"

// // // // // import { useState, useEffect } from "react"
// // // // // import { Link } from "react-router-dom"
// // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react"
// // // // // import axios from "axios"

// // // // // const AdminRequests = () => {
// // // // //   const [requests, setRequests] = useState([])
// // // // //   const [loading, setLoading] = useState(true)
// // // // //   const [error, setError] = useState(null)
// // // // //   const [filter, setFilter] = useState("all")
// // // // //   const [searchTerm, setSearchTerm] = useState("")
// // // // //   const [currentPage, setCurrentPage] = useState(1)
// // // // //   const [totalPages, setTotalPages] = useState(1)
// // // // //   const [sortBy, setSortBy] = useState("date")
// // // // //   const [sortOrder, setSortOrder] = useState("desc")

// // // // //   useEffect(() => {
// // // // //     const fetchRequests = async () => {
// // // // //       setLoading(true)
// // // // //       try {
// // // // //         // Get token from localStorage
// // // // //         const token = localStorage.getItem("token")

// // // // //         // Prepare headers, only include Authorization if token exists and is not empty
// // // // //         const headers = token && token.trim() !== "" ? {
// // // // //           Authorization: `Bearer ${token}`
// // // // //         } : {}

// // // // //         const response = await axios.get(`${process.env.REACT_APP_API_URL}/requests`, {
// // // // //           params: {
// // // // //             status: filter,
// // // // //             search: searchTerm,
// // // // //             sortBy,
// // // // //             sortOrder,
// // // // //             page: currentPage,
// // // // //             limit: 10,
// // // // //           },
// // // // //           headers: headers,
// // // // //         })

// // // // //         setRequests(response.data.requests)
// // // // //         setTotalPages(response.data.totalPages)
// // // // //         setLoading(false)
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching requests:", err)
// // // // //         setError("Failed to load requests. Please try again later.")
// // // // //         setLoading(false)
// // // // //       }
// // // // //     }

// // // // //     fetchRequests()
// // // // //   }, [currentPage, filter, searchTerm, sortBy, sortOrder])

// // // // //   const handleFilterChange = (e) => {
// // // // //     setFilter(e.target.value)
// // // // //     setCurrentPage(1)
// // // // //   }

// // // // //   const handleSearchChange = (e) => {
// // // // //     setSearchTerm(e.target.value)
// // // // //     setCurrentPage(1)
// // // // //   }

// // // // //   const handleSort = (field) => {
// // // // //     if (sortBy === field) {
// // // // //       setSortOrder(sortOrder === "asc" ? "desc" : "asc")
// // // // //     } else {
// // // // //       setSortBy(field)
// // // // //       setSortOrder("desc")
// // // // //     }
// // // // //   }

// // // // //   const handleStatusChange = async (requestId, newStatus) => {
// // // // //     try {
// // // // //       // Get token from localStorage
// // // // //       const token = localStorage.getItem("token")

// // // // //       // Prepare headers, only include Authorization if token exists and is not empty
// // // // //       const headers = token && token.trim() !== "" ? {
// // // // //         Authorization: `Bearer ${token}`
// // // // //       } : {}

// // // // //       const response = await axios.put(
// // // // //         `${process.env.REACT_APP_API_URL}/requests/${requestId}/status`,
// // // // //         { status: newStatus },
// // // // //         { headers }
// // // // //       )

// // // // //       setRequests((prevRequests) =>
// // // // //         prevRequests.map((req) => (req._id === requestId ? response.data : req))
// // // // //       )
// // // // //       alert(`Request #${requestId} status updated to ${newStatus}`)
// // // // //     } catch (err) {
// // // // //       console.error("Error updating request status:", err)
// // // // //       alert("Failed to update request status. Please try again.")
// // // // //     }
// // // // //   }

// // // // //   const getStatusBadgeClass = (status) => {
// // // // //     switch (status) {
// // // // //       case "pending":
// // // // //         return "bg-yellow-100 text-yellow-800"
// // // // //       case "processing":
// // // // //         return "bg-blue-100 text-blue-800"
// // // // //       case "completed":
// // // // //         return "bg-green-100 text-green-800"
// // // // //       case "cancelled":
// // // // //         return "bg-red-100 text-red-800"
// // // // //       default:
// // // // //         return "bg-gray-100 text-gray-800"
// // // // //     }
// // // // //   }

// // // // //   const formatDate = (dateString) => {
// // // // //     const date = new Date(dateString)
// // // // //     return date.toLocaleDateString("en-US", {
// // // // //       year: "numeric",
// // // // //       month: "short",
// // // // //       day: "numeric",
// // // // //       hour: "2-digit",
// // // // //       minute: "2-digit",
// // // // //     })
// // // // //   }

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <AdminLayout>
// // // // //         <div className="flex justify-center items-center h-64">
// // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
// // // // //         </div>
// // // // //       </AdminLayout>
// // // // //     )
// // // // //   }

// // // // //   if (error) {
// // // // //     return (
// // // // //       <AdminLayout>
// // // // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // // // //           <p>{error}</p>
// // // // //         </div>
// // // // //       </AdminLayout>
// // // // //     )
// // // // //   }

// // // // //   return (
// // // // //     <AdminLayout>
// // // // //       <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // //         {/* Header */}
// // // // //         <div className="sm:flex sm:items-center sm:justify-between">
// // // // //           <div>
// // // // //             <p className="mt-2 text-3xl text-gray-900">Customer Requests</p>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Search and Filter */}
// // // // //         <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // // // //           <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // //             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // //               <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
// // // // //             </div>
// // // // //             <input
// // // // //               type="text"
// // // // //               placeholder="Search requests..."
// // // // //               value={searchTerm}
// // // // //               onChange={handleSearchChange}
// // // // //               className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
// // // // //             />
// // // // //           </div>
// // // // //           <div className="relative max-w-xs w-full">
// // // // //             <select
// // // // //               value={filter}
// // // // //               onChange={handleFilterChange}
// // // // //               className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // // //             >
// // // // //               <option value="all">All Requests</option>
// // // // //               <option value="pending">Pending</option>
// // // // //               <option value="processing">Processing</option>
// // // // //               <option value="completed">Completed</option>
// // // // //               <option value="cancelled">Cancelled</option>
// // // // //             </select>
// // // // //             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // //               <Filter className="h-4 w-4" />
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Requests Table */}
// // // // //         <div className="mt-8 flex flex-col">
// // // // //           <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // // //             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // //               <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // //                 {requests.length === 0 ? (
// // // // //                   <div className="text-center py-12 bg-white">
// // // // //                     <p className="text-gray-500">No requests found.</p>
// // // // //                   </div>
// // // // //                 ) : (
// // // // //                   <table className="min-w-full divide-y divide-gray-300">
// // // // //                     <thead className="bg-gray-50">
// // // // //                       <tr>
// // // // //                         <th
// // // // //                           scope="col"
// // // // //                           className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // // //                         >
// // // // //                           <button onClick={() => handleSort("date")} className="flex items-center focus:outline-none">
// // // // //                             Date
// // // // //                             {sortBy === "date" && (
// // // // //                               <svg
// // // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // // //                                 fill="none"
// // // // //                                 stroke="currentColor"
// // // // //                                 viewBox="0 0 24 24"
// // // // //                               >
// // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // // //                               </svg>
// // // // //                             )}
// // // // //                           </button>
// // // // //                         </th>
// // // // //                         <th
// // // // //                           scope="col"
// // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // //                         >
// // // // //                           <button onClick={() => handleSort("name")} className="flex items-center focus:outline-none">
// // // // //                             Customer
// // // // //                             {sortBy === "name" && (
// // // // //                               <svg
// // // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // // //                                 fill="none"
// // // // //                                 stroke="currentColor"
// // // // //                                 viewBox="0 0 24 24"
// // // // //                               >
// // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // // //                               </svg>
// // // // //                             )}
// // // // //                           </button>
// // // // //                         </th>
// // // // //                         <th
// // // // //                           scope="col"
// // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // //                         >
// // // // //                           Products
// // // // //                         </th>
// // // // //                         <th
// // // // //                           scope="col"
// // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // //                         >
// // // // //                           <button onClick={() => handleSort("amount")} className="flex items-center focus:outline-none">
// // // // //                             Total
// // // // //                             {sortBy === "amount" && (
// // // // //                               <svg
// // // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // // //                                 fill="none"
// // // // //                                 stroke="currentColor"
// // // // //                                 viewBox="0 0 24 24"
// // // // //                               >
// // // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // // //                               </svg>
// // // // //                             )}
// // // // //                           </button>
// // // // //                         </th>
// // // // //                         <th
// // // // //                           scope="col"
// // // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // // //                         >
// // // // //                           Status
// // // // //                         </th>
// // // // //                         <th
// // // // //                           scope="col"
// // // // //                           className="relative py-3.5 pl-3 pr-4 sm:pr-6"
// // // // //                         >
// // // // //                           <span className="sr-only">Actions</span>
// // // // //                         </th>
// // // // //                       </tr>
// // // // //                     </thead>
// // // // //                     <tbody className="divide-y divide-gray-200 bg-white">
// // // // //                       {requests.map((request) => (
// // // // //                         <tr key={request._id}>
// // // // //                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
// // // // //                             {formatDate(request.date)}
// // // // //                           </td>
// // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // //                             <div className="font-medium text-gray-900">{request.name}</div>
// // // // //                             <div className="text-gray-500">{request.company}</div>
// // // // //                           </td>
// // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // //                             <div className="text-gray-900">
// // // // //                               {request.products.length} {request.products.length === 1 ? "item" : "items"}
// // // // //                             </div>
// // // // //                             <div className="text-gray-500">
// // // // //                               {request.products
// // // // //                                 .map((p) => p.name)
// // // // //                                 .join(", ")
// // // // //                                 .substring(0, 30)}
// // // // //                               {request.products.map((p) => p.name).join(", ").length > 30 ? "..." : ""}
// // // // //                             </div>
// // // // //                           </td>
// // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
// // // // //                             ${request.totalAmount.toFixed(2)}
// // // // //                           </td>
// // // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // // //                             <span
// // // // //                               className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
// // // // //                             >
// // // // //                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // // //                             </span>
// // // // //                           </td>
// // // // //                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // //                             <div className="flex items-center justify-end space-x-3">
// // // // //                               <Link to={`/admin/requests/${request._id}`} className="text-indigo-600 hover:text-indigo-900">
// // // // //                                 View
// // // // //                               </Link>
// // // // //                               <div className="relative group">
// // // // //                                 <button className="text-gray-500 hover:text-gray-700">
// // // // //                                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                                     <path
// // // // //                                       strokeLinecap="round"
// // // // //                                       strokeLinejoin="round"
// // // // //                                       strokeWidth="2"
// // // // //                                       d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
// // // // //                                     />
// // // // //                                   </svg>
// // // // //                                 </button>
// // // // //                                 <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 hidden group-hover:block">
// // // // //                                   {request.status !== "processing" && (
// // // // //                                     <button
// // // // //                                       onClick={() => handleStatusChange(request._id, "processing")}
// // // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
// // // // //                                     >
// // // // //                                       Mark as Processing
// // // // //                                     </button>
// // // // //                                   )}
// // // // //                                   {request.status !== "completed" && (
// // // // //                                     <button
// // // // //                                       onClick={() => handleStatusChange(request._id, "completed")}
// // // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
// // // // //                                     >
// // // // //                                       Mark as Completed
// // // // //                                     </button>
// // // // //                                   )}
// // // // //                                   {request.status !== "cancelled" && (
// // // // //                                     <button
// // // // //                                       onClick={() => handleStatusChange(request._id, "cancelled")}
// // // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
// // // // //                                     >
// // // // //                                       Cancel Request
// // // // //                                     </button>
// // // // //                                   )}
// // // // //                                 </div>
// // // // //                               </div>
// // // // //                             </div>
// // // // //                           </td>
// // // // //                         </tr>
// // // // //                       ))}
// // // // //                     </tbody>
// // // // //                   </table>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Pagination */}
// // // // //         {totalPages > 1 && (
// // // // //           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // //             <div className="flex flex-1 justify-between sm:hidden">
// // // // //               <button
// // // // //                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // // // //                 disabled={currentPage === 1}
// // // // //                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // //               >
// // // // //                 Previous
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // // // //                 disabled={currentPage === totalPages}
// // // // //                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // //               >
// // // // //                 Next
// // // // //               </button>
// // // // //             </div>
// // // // //             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // //               <div>
// // // // //                 <p className="text-sm text-gray-700">
// // // // //                   Showing page <span className="font-medium">{currentPage}</span> of{" "}
// // // // //                   <span className="font-medium">{totalPages}</span>
// // // // //                 </p>
// // // // //               </div>
// // // // //               <div>
// // // // //                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // //                   <button
// // // // //                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // // // //                     disabled={currentPage === 1}
// // // // //                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // //                   >
// // // // //                     <span className="sr-only">Previous</span>
// // // // //                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // //                   </button>
// // // // //                   {[...Array(totalPages).keys()].map((number) => (
// // // // //                     <button
// // // // //                       key={number + 1}
// // // // //                       onClick={() => setCurrentPage(number + 1)}
// // // // //                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // //                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // //                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // //                         }`}
// // // // //                     >
// // // // //                       {number + 1}
// // // // //                     </button>
// // // // //                   ))}
// // // // //                   <button
// // // // //                     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // // // //                     disabled={currentPage === totalPages}
// // // // //                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // //                   >
// // // // //                     <span className="sr-only">Next</span>
// // // // //                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // //                   </button>
// // // // //                 </nav>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </AdminLayout>
// // // // //   )
// // // // // }

// // // // // export default AdminRequests

// // // // "use client"

// // // // import { useState, useEffect, useRef } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import AdminLayout from "../../components/admin/AdminLayout";
// // // // import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
// // // // import axios from "axios";

// // // // // Toast Component
// // // // const Toast = ({ message, type, onClose }) => {
// // // //   useEffect(() => {
// // // //     const timer = setTimeout(() => {
// // // //       onClose();
// // // //     }, 3000); // Auto-dismiss after 3 seconds
// // // //     return () => clearTimeout(timer);
// // // //   }, [onClose]);

// // // //   return (
// // // //     <div
// // // //       className={`fixed top-4 right-4 px-4 py-2 rounded-md shadow-lg text-white ${type === "success" ? "bg-green-600" : "bg-red-600"} z-50`}
// // // //     >
// // // //       {message}
// // // //     </div>
// // // //   );
// // // // };

// // // // const AdminRequests = () => {
// // // //   const [requests, setRequests] = useState([]);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [filter, setFilter] = useState("all");
// // // //   const [searchTerm, setSearchTerm] = useState("");
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [totalPages, setTotalPages] = useState(1);
// // // //   const [sortBy, setSortBy] = useState("date");
// // // //   const [sortOrder, setSortOrder] = useState("desc");
// // // //   const [openDropdownId, setOpenDropdownId] = useState(null);
// // // //   const [toast, setToast] = useState(null);
// // // //   const [exchangeRate, setExchangeRate] = useState(null);
// // // //   const [currency, setCurrency] = useState("INR"); // Default to INR

// // // //   const dropdownRefs = useRef({}); // Store refs for each dropdown

// // // //   // Fetch exchange rate on component mount with caching
// // // //   useEffect(() => {
// // // //     const fetchExchangeRate = async () => {
// // // //       const cachedData = JSON.parse(localStorage.getItem("exchangeRateData"));
// // // //       const now = Date.now();
// // // //       const twoDays = 2 * 24 * 60 * 60 * 1000; // 2 days in milliseconds

// // // //       // Use cached data if it's less than 2 days old
// // // //       if (cachedData && (now - cachedData.timestamp) < twoDays) {
// // // //         setExchangeRate(cachedData.rate);
// // // //         return;
// // // //       }

// // // //       try {
// // // //         const response = await axios.get("https://open.er-api.com/v6/latest/USD");
// // // //         const rate = response.data.rates.INR;
// // // //         setExchangeRate(rate);

// // // //         // Cache the rate and timestamp
// // // //         localStorage.setItem("exchangeRateData", JSON.stringify({
// // // //           rate: rate,
// // // //           timestamp: now,
// // // //         }));
// // // //       } catch (err) {
// // // //         console.error("Error fetching exchange rate:", err);
// // // //         setExchangeRate(83.5); // Fallback rate
// // // //       }
// // // //     };

// // // //     fetchExchangeRate();
// // // //   }, []);

// // // //   // Fetch requests
// // // //   useEffect(() => {
// // // //     const fetchRequests = async () => {
// // // //       setLoading(true);
// // // //       try {
// // // //         const token = localStorage.getItem("token");
// // // //         const headers = token && token.trim() !== "" ? {
// // // //           Authorization: `Bearer ${token}`
// // // //         } : {};

// // // //         const response = await axios.get(`${process.env.REACT_APP_API_URL}/requests`, {
// // // //           params: {
// // // //             status: filter,
// // // //             search: searchTerm,
// // // //             sortBy,
// // // //             sortOrder,
// // // //             page: currentPage,
// // // //             limit: 10,
// // // //           },
// // // //           headers: headers,
// // // //         });

// // // //         setRequests(response.data.requests);
// // // //         setTotalPages(response.data.totalPages);
// // // //         setLoading(false);
// // // //       } catch (err) {
// // // //         console.error("Error fetching requests:", err);
// // // //         setError("Failed to load requests. Please try again later.");
// // // //         setLoading(false);
// // // //       }
// // // //     };

// // // //     fetchRequests();
// // // //   }, [currentPage, filter, searchTerm, sortBy, sortOrder]);

// // // //   // Handle clicks outside the dropdown to close it
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (event) => {
// // // //       if (openDropdownId && dropdownRefs.current[openDropdownId] && !dropdownRefs.current[openDropdownId].contains(event.target)) {
// // // //         setOpenDropdownId(null);
// // // //       }
// // // //     };

// // // //     document.addEventListener("mousedown", handleClickOutside);
// // // //     return () => {
// // // //       document.removeEventListener("mousedown", handleClickOutside);
// // // //     };
// // // //   }, [openDropdownId]);

// // // //   const handleFilterChange = (e) => {
// // // //     setFilter(e.target.value);
// // // //     setCurrentPage(1);
// // // //   };

// // // //   const handleSearchChange = (e) => {
// // // //     setSearchTerm(e.target.value);
// // // //     setCurrentPage(1);
// // // //   };

// // // //   const handleSort = (field) => {
// // // //     if (sortBy === field) {
// // // //       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
// // // //     } else {
// // // //       setSortBy(field);
// // // //       setSortOrder("desc");
// // // //     }
// // // //   };

// // // //   const handleStatusChange = async (requestId, newStatus, event) => {
// // // //     event.stopPropagation(); // Prevent click from bubbling up
// // // //     try {
// // // //       const token = localStorage.getItem("token");
// // // //       const headers = token && token.trim() !== "" ? {
// // // //         Authorization: `Bearer ${token}`
// // // //       } : {};

// // // //       const response = await axios.put(
// // // //         `${process.env.REACT_APP_API_URL}/requests/${requestId}/status`,
// // // //         { status: newStatus },
// // // //         { headers }
// // // //       );

// // // //       setRequests((prevRequests) =>
// // // //         prevRequests.map((req) => (req._id === requestId ? response.data : req))
// // // //       );
// // // //       setToast({
// // // //         message: `Request status updated to ${newStatus}`,
// // // //         type: "success",
// // // //       });
// // // //     } catch (err) {
// // // //       console.error("Error updating request status:", err);
// // // //       setToast({
// // // //         message: "Failed to update request status. Please try again.",
// // // //         type: "error",
// // // //       });
// // // //     } finally {
// // // //       setOpenDropdownId(null);
// // // //     }
// // // //   };

// // // //   const toggleDropdown = (requestId, event) => {
// // // //     event.stopPropagation(); // Prevent click from bubbling up
// // // //     setOpenDropdownId(openDropdownId === requestId ? null : requestId);
// // // //   };

// // // //   const getStatusBadgeClass = (status) => {
// // // //     switch (status) {
// // // //       case "pending":
// // // //         return "bg-yellow-100 text-yellow-800";
// // // //       case "processing":
// // // //         return "bg-blue-100 text-blue-800";
// // // //       case "completed":
// // // //         return "bg-green-100 text-green-800";
// // // //       case "cancelled":
// // // //         return "bg-red-100 text-red-800";
// // // //       default:
// // // //         return "bg-gray-100 text-gray-800";
// // // //     }
// // // //   };

// // // //   const formatDate = (dateString) => {
// // // //     const date = new Date(dateString);
// // // //     return date.toLocaleDateString("en-US", {
// // // //       year: "numeric",
// // // //       month: "short",
// // // //       day: "numeric",
// // // //       hour: "2-digit",
// // // //       minute: "2-digit",
// // // //     });
// // // //   };

// // // //   const formatAmount = (amount) => {
// // // //     if (currency === "INR" && exchangeRate) {
// // // //       return `₹${(amount * exchangeRate).toFixed(2)}`;
// // // //     }
// // // //     return `$${amount.toFixed(2)}`;
// // // //   };

// // // //   const toggleCurrency = () => {
// // // //     setCurrency(currency === "USD" ? "INR" : "USD");
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <AdminLayout>
// // // //         <div className="flex justify-center items-center h-64">
// // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
// // // //         </div>
// // // //       </AdminLayout>
// // // //     );
// // // //   }

// // // //   if (error) {
// // // //     return (
// // // //       <AdminLayout>
// // // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // // //           <p>{error}</p>
// // // //         </div>
// // // //       </AdminLayout>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <AdminLayout>
// // // //       <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // //         {/* Toast Notification */}
// // // //         {toast && (
// // // //           <Toast
// // // //             message={toast.message}
// // // //             type={toast.type}
// // // //             onClose={() => setToast(null)}
// // // //           />
// // // //         )}

// // // //         {/* Header */}
// // // //         <div className="sm:flex sm:items-center sm:justify-between">
// // // //           <div>
// // // //             <p className="mt-2 text-3xl text-gray-900">Customer Requests</p>
// // // //           </div>
// // // //           <div>
// // // //             <button
// // // //               onClick={toggleCurrency}
// // // //               className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300 shadow-sm"
// // // //             >
// // // //               Show in {currency === "USD" ? "INR" : "USD"}
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* Search and Filter */}
// // // //         <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // // //           <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // //             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // //               <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
// // // //             </div>
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search requests..."
// // // //               value={searchTerm}
// // // //               onChange={handleSearchChange}
// // // //               className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
// // // //             />
// // // //           </div>
// // // //           <div className="relative max-w-xs w-full">
// // // //             <select
// // // //               value={filter}
// // // //               onChange={handleFilterChange}
// // // //               className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // // //             >
// // // //               <option value="all">All Requests</option>
// // // //               <option value="pending">Pending</option>
// // // //               <option value="processing">Processing</option>
// // // //               <option value="completed">Completed</option>
// // // //               <option value="cancelled">Cancelled</option>
// // // //             </select>
// // // //             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // //               <Filter className="h-4 w-4" />
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Requests Table */}
// // // //         <div className="mt-8 flex flex-col">
// // // //           <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// // // //             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // //               <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // //                 {requests.length === 0 ? (
// // // //                   <div className="text-center py-12 bg-white">
// // // //                     <p className="text-gray-500">No requests found.</p>
// // // //                   </div>
// // // //                 ) : (
// // // //                   <table className="min-w-full divide-y divide-gray-300">
// // // //                     <thead className="bg-gray-50">
// // // //                       <tr>
// // // //                         <th
// // // //                           scope="col"
// // // //                           className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // //                         >
// // // //                           <button onClick={() => handleSort("date")} className="flex items-center focus:outline-none">
// // // //                             Date
// // // //                             {sortBy === "date" && (
// // // //                               <svg
// // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // //                                 fill="none"
// // // //                                 stroke="currentColor"
// // // //                                 viewBox="0 0 24 24"
// // // //                               >
// // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // //                               </svg>
// // // //                             )}
// // // //                           </button>
// // // //                         </th>
// // // //                         <th
// // // //                           scope="col"
// // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // //                         >
// // // //                           <button onClick={() => handleSort("name")} className="flex items-center focus:outline-none">
// // // //                             Customer
// // // //                             {sortBy === "name" && (
// // // //                               <svg
// // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // //                                 fill="none"
// // // //                                 stroke="currentColor"
// // // //                                 viewBox="0 0 24 24"
// // // //                               >
// // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // //                               </svg>
// // // //                             )}
// // // //                           </button>
// // // //                         </th>
// // // //                         <th
// // // //                           scope="col"
// // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // //                         >
// // // //                           Products
// // // //                         </th>
// // // //                         <th
// // // //                           scope="col"
// // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // //                         >
// // // //                           <button onClick={() => handleSort("amount")} className="flex items-center focus:outline-none">
// // // //                             Total ({currency})
// // // //                             {sortBy === "amount" && (
// // // //                               <svg
// // // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // // //                                 fill="none"
// // // //                                 stroke="currentColor"
// // // //                                 viewBox="0 0 24 24"
// // // //                               >
// // // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // // //                               </svg>
// // // //                             )}
// // // //                           </button>
// // // //                         </th>
// // // //                         <th
// // // //                           scope="col"
// // // //                           className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // // //                         >
// // // //                           Status
// // // //                         </th>
// // // //                         <th
// // // //                           scope="col"
// // // //                           className="relative py-3.5 pl-3 pr-4 sm:pr-6"
// // // //                         >
// // // //                           <span className="sr-only">Actions</span>
// // // //                         </th>
// // // //                       </tr>
// // // //                     </thead>
// // // //                     <tbody className="divide-y divide-gray-200 bg-white">
// // // //                       {requests.map((request) => (
// // // //                         <tr key={request._id}>
// // // //                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
// // // //                             {formatDate(request.date)}
// // // //                           </td>
// // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // //                             <div className="font-medium text-gray-900">{request.name}</div>
// // // //                             <div className="text-gray-500">{request.company}</div>
// // // //                           </td>
// // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // //                             <div className="text-gray-900">
// // // //                               {request.products.length} {request.products.length === 1 ? "item" : "items"}
// // // //                             </div>
// // // //                             <div className="text-gray-500">
// // // //                               {request.products
// // // //                                 .map((p) => p.name)
// // // //                                 .join(", ")
// // // //                                 .substring(0, 30)}
// // // //                               {request.products.map((p) => p.name).join(", ").length > 30 ? "..." : ""}
// // // //                             </div>
// // // //                           </td>
// // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
// // // //                             {formatAmount(request.totalAmount)}
// // // //                           </td>
// // // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // // //                             <span
// // // //                               className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}
// // // //                             >
// // // //                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // //                             </span>
// // // //                           </td>
// // // //                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // //                             <div className="flex items-center justify-end space-x-3">
// // // //                               <Link to={`/admin/requests/${request._id}`} className="text-indigo-600 hover:text-indigo-900">
// // // //                                 View
// // // //                               </Link>
// // // //                               <div className="relative">
// // // //                                 <button
// // // //                                   onClick={(e) => toggleDropdown(request._id, e)}
// // // //                                   className="text-gray-500 hover:text-gray-700 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
// // // //                                   aria-label="Change status"
// // // //                                 >
// // // //                                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                                     <path
// // // //                                       strokeLinecap="round"
// // // //                                       strokeLinejoin="round"
// // // //                                       strokeWidth="2"
// // // //                                       d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
// // // //                                     />
// // // //                                   </svg>
// // // //                                 </button>
// // // //                                 {openDropdownId === request._id && (
// // // //                                   <div
// // // //                                     ref={(el) => (dropdownRefs.current[request._id] = el)}
// // // //                                     className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
// // // //                                   >
// // // //                                     <button
// // // //                                       onClick={(e) => handleStatusChange(request._id, "pending", e)}
// // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// // // //                                     >
// // // //                                       Mark as Pending
// // // //                                     </button>
// // // //                                     <button
// // // //                                       onClick={(e) => handleStatusChange(request._id, "processing", e)}
// // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// // // //                                     >
// // // //                                       Mark as Processing
// // // //                                     </button>
// // // //                                     <button
// // // //                                       onClick={(e) => handleStatusChange(request._id, "completed", e)}
// // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// // // //                                     >
// // // //                                       Mark as Completed
// // // //                                     </button>
// // // //                                     <button
// // // //                                       onClick={(e) => handleStatusChange(request._id, "cancelled", e)}
// // // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// // // //                                     >
// // // //                                       Cancel Request
// // // //                                     </button>
// // // //                                   </div>
// // // //                                 )}
// // // //                               </div>
// // // //                             </div>
// // // //                           </td>
// // // //                         </tr>
// // // //                       ))}
// // // //                     </tbody>
// // // //                   </table>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>

// // // //         {/* Pagination */}
// // // //         {totalPages > 1 && (
// // // //           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // //             <div className="flex flex-1 justify-between sm:hidden">
// // // //               <button
// // // //                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // // //                 disabled={currentPage === 1}
// // // //                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // //               >
// // // //                 Previous
// // // //               </button>
// // // //               <button
// // // //                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // // //                 disabled={currentPage === totalPages}
// // // //                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // //               >
// // // //                 Next
// // // //               </button>
// // // //             </div>
// // // //             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // //               <div>
// // // //                 <p className="text-sm text-gray-700">
// // // //                   Showing page <span className="font-medium">{currentPage}</span> of{" "}
// // // //                   <span className="font-medium">{totalPages}</span>
// // // //                 </p>
// // // //               </div>
// // // //               <div>
// // // //                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // //                   <button
// // // //                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // // //                     disabled={currentPage === 1}
// // // //                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // //                   >
// // // //                     <span className="sr-only">Previous</span>
// // // //                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // //                   </button>
// // // //                   {[...Array(totalPages).keys()].map((number) => (
// // // //                     <button
// // // //                       key={number + 1}
// // // //                       onClick={() => setCurrentPage(number + 1)}
// // // //                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // //                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // //                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // //                         }`}
// // // //                     >
// // // //                       {number + 1}
// // // //                     </button>
// // // //                   ))}
// // // //                   <button
// // // //                     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // // //                     disabled={currentPage === totalPages}
// // // //                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // //                   >
// // // //                     <span className="sr-only">Next</span>
// // // //                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // //                   </button>
// // // //                 </nav>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </AdminLayout>
// // // //   );
// // // // };

// // // // export default AdminRequests;


// // // "use client"

// // // import { useState, useEffect, useRef } from "react";
// // // import { Link } from "react-router-dom";
// // // import AdminLayout from "../../components/admin/AdminLayout";
// // // import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";

// // // const Toast = ({ message, type, onClose }) => {
// // //   useEffect(() => {
// // //     const timer = setTimeout(() => {
// // //       onClose();
// // //     }, 3000);
// // //     return () => clearTimeout(timer);
// // //   }, [onClose]);

// // //   return (
// // //     <div
// // //       className={`fixed top-4 right-4 px-4 py-2 rounded-md shadow-lg text-white ${type === "success" ? "bg-green-600" : "bg-red-600"} z-50`}
// // //     >
// // //       {message}
// // //     </div>
// // //   );
// // // };

// // // const AdminRequests = () => {
// // //   const [requests, setRequests] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [filter, setFilter] = useState("all");
// // //   const [searchTerm, setSearchTerm] = useState("");
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [totalPages, setTotalPages] = useState(1);
// // //   const [sortBy, setSortBy] = useState("date");
// // //   const [sortOrder, setSortOrder] = useState("desc");
// // //   const [openDropdownId, setOpenDropdownId] = useState(null);
// // //   const [toast, setToast] = useState(null);
// // //   const [exchangeRate, setExchangeRate] = useState(null);
// // //   const [currency, setCurrency] = useState("INR");

// // //   const dropdownRefs = useRef({});

// // //   useEffect(() => {
// // //     const fetchExchangeRate = async () => {
// // //       const cachedData = JSON.parse(localStorage.getItem("exchangeRateData"));
// // //       const now = Date.now();
// // //       const twoDays = 2 * 24 * 60 * 60 * 1000;

// // //       if (cachedData && (now - cachedData.timestamp) < twoDays) {
// // //         setExchangeRate(cachedData.rate);
// // //         return;
// // //       }

// // //       try {
// // //         const response = await axios.get("https://open.er-api.com/v6/latest/USD");
// // //         const rate = response.data.rates.INR;
// // //         setExchangeRate(rate);
// // //         localStorage.setItem("exchangeRateData", JSON.stringify({ rate, timestamp: now }));
// // //       } catch (err) {
// // //         console.error("Error fetching exchange rate:", err);
// // //         setExchangeRate(83.5);
// // //       }
// // //     };

// // //     fetchExchangeRate();
// // //   }, []);

// // //   useEffect(() => {
// // //     const fetchRequests = async () => {
// // //       setLoading(true);
// // //       try {
// // //         const token = localStorage.getItem("token");
// // //         const headers = token && token.trim() !== "" ? { Authorization: `Bearer ${token}` } : {};

// // //         const response = await axios.get(`${process.env.REACT_APP_API_URL}/requests`, {
// // //           params: { status: filter, search: searchTerm, sortBy, sortOrder, page: currentPage, limit: 10 },
// // //           headers,
// // //         });

// // //         setRequests(response.data.requests);
// // //         setTotalPages(response.data.totalPages);
// // //         setLoading(false);
// // //       } catch (err) {
// // //         console.error("Error fetching requests:", err);
// // //         setError("Failed to load requests. Please try again later.");
// // //         setLoading(false);
// // //       }
// // //     };

// // //     fetchRequests();
// // //   }, [currentPage, filter, searchTerm, sortBy, sortOrder]);

// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (openDropdownId && dropdownRefs.current[openDropdownId] && !dropdownRefs.current[openDropdownId].contains(event.target)) {
// // //         setOpenDropdownId(null);
// // //       }
// // //     };

// // //     document.addEventListener("mousedown", handleClickOutside);
// // //     return () => document.removeEventListener("mousedown", handleClickOutside);
// // //   }, [openDropdownId]);

// // //   const handleFilterChange = (e) => {
// // //     setFilter(e.target.value);
// // //     setCurrentPage(1);
// // //   };

// // //   const handleSearchChange = (e) => {
// // //     setSearchTerm(e.target.value);
// // //     setCurrentPage(1);
// // //   };

// // //   const handleSort = (field) => {
// // //     if (sortBy === field) {
// // //       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
// // //     } else {
// // //       setSortBy(field);
// // //       setSortOrder("desc");
// // //     }
// // //   };

// // //   const handleStatusChange = async (requestId, newStatus, event) => {
// // //     event.stopPropagation();
// // //     try {
// // //       const token = localStorage.getItem("token");
// // //       const headers = token && token.trim() !== "" ? { Authorization: `Bearer ${token}` } : {};

// // //       const response = await axios.put(
// // //         `${process.env.REACT_APP_API_URL}/requests/${requestId}/status`,
// // //         { status: newStatus },
// // //         { headers }
// // //       );

// // //       setRequests((prevRequests) =>
// // //         prevRequests.map((req) => (req._id === requestId ? response.data : req))
// // //       );
// // //       setToast({ message: `Request  status updated to ${newStatus}`, type: "success" });
// // //     } catch (err) {
// // //       console.error("Error updating request status:", err);
// // //       setToast({ message: "Failed to update request status. Please try again.", type: "error" });
// // //     } finally {
// // //       setOpenDropdownId(null);
// // //     }
// // //   };

// // //   const toggleDropdown = (requestId, event) => {
// // //     event.stopPropagation();
// // //     setOpenDropdownId(openDropdownId === requestId ? null : requestId);
// // //   };

// // //   const getStatusBadgeClass = (status) => {
// // //     switch (status) {
// // //       case "pending": return "bg-yellow-100 text-yellow-800";
// // //       case "processing": return "bg-blue-100 text-blue-800";
// // //       case "completed": return "bg-green-100 text-green-800";
// // //       case "cancelled": return "bg-red-100 text-red-800";
// // //       default: return "bg-gray-100 text-gray-800";
// // //     }
// // //   };

// // //   const formatDate = (dateString) => {
// // //     const date = new Date(dateString);
// // //     return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
// // //   };

// // //   const formatAmount = (amount) => {
// // //     if (currency === "INR" && exchangeRate) {
// // //       return `₹${(amount * exchangeRate).toFixed(2)}`;
// // //     }
// // //     return `$${amount.toFixed(2)}`;
// // //   };

// // //   const toggleCurrency = () => {
// // //     setCurrency(currency === "USD" ? "INR" : "USD");
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <AdminLayout>
// // //         <div className="flex justify-center items-center h-64">
// // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // //         </div>
// // //       </AdminLayout>
// // //     );
// // //   }

// // //   if (error) {
// // //     return (
// // //       <AdminLayout>
// // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // //           <p>{error}</p>
// // //         </div>
// // //       </AdminLayout>
// // //     );
// // //   }

// // //   return (
// // //     <AdminLayout>
// // //       <div className="px-4 sm:px-6 lg:px-8 py-8">
// // //         {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

// // //         <div className="sm:flex sm:items-center sm:justify-between">
// // //           <div>
// // //             <p className="mt-2 text-3xl text-gray-900">Customer Requests</p>
// // //           </div>
// // //           <div>
// // //             <button
// // //               onClick={toggleCurrency}
// // //               className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300 shadow-sm"
// // //             >
// // //               Show in {currency === "USD" ? "INR" : "USD"}
// // //             </button>
// // //           </div>
// // //         </div>

// // //         <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // //           <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // //             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // //               <Search className="h-5 w-5 text-red-400" aria-hidden="true" />
// // //             </div>
// // //             <input
// // //               type="text"
// // //               placeholder="Search requests..."
// // //               value={searchTerm}
// // //               onChange={handleSearchChange}
// // //               className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
// // //             />
// // //           </div>
// // //           <div className="relative max-w-xs w-full">
// // //             <select
// // //               value={filter}
// // //               onChange={handleFilterChange}
// // //               className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // //             >
// // //               <option value="all">All Requests</option>
// // //               <option value="pending">Pending</option>
// // //               <option value="processing">Processing</option>
// // //               <option value="completed">Completed</option>
// // //               <option value="cancelled">Cancelled</option>
// // //             </select>
// // //             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // //               <Filter className="h-4 w-4" />
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="mt-8 flex flex-col">
// // //           <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// // //             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // //               <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // //                 {requests.length === 0 ? (
// // //                   <div className="text-center py-12 bg-white">
// // //                     <p className="text-gray-500">No requests found.</p>
// // //                   </div>
// // //                 ) : (
// // //                   <table className="min-w-full divide-y divide-gray-300">
// // //                     <thead className="bg-gray-50">
// // //                       <tr>
// // //                         <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
// // //                           <button onClick={() => handleSort("date")} className="flex items-center focus:outline-none">
// // //                             Date
// // //                             {sortBy === "date" && (
// // //                               <svg
// // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // //                                 fill="none"
// // //                                 stroke="currentColor"
// // //                                 viewBox="0 0 24 24"
// // //                               >
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // //                               </svg>
// // //                             )}
// // //                           </button>
// // //                         </th>
// // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                           <button onClick={() => handleSort("name")} className="flex items-center focus:outline-none">
// // //                             Customer
// // //                             {sortBy === "name" && (
// // //                               <svg
// // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // //                                 fill="none"
// // //                                 stroke="currentColor"
// // //                                 viewBox="0 0 24 24"
// // //                               >
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // //                               </svg>
// // //                             )}
// // //                           </button>
// // //                         </th>
// // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                           Products
// // //                         </th>
// // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                           <button onClick={() => handleSort("amount")} className="flex items-center focus:outline-none">
// // //                             Total ({currency})
// // //                             {sortBy === "amount" && (
// // //                               <svg
// // //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// // //                                 fill="none"
// // //                                 stroke="currentColor"
// // //                                 viewBox="0 0 24 24"
// // //                               >
// // //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// // //                               </svg>
// // //                             )}
// // //                           </button>
// // //                         </th>
// // //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                           Status
// // //                         </th>
// // //                         <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // //                           <span className="sr-only">Actions</span>
// // //                         </th>
// // //                       </tr>
// // //                     </thead>
// // //                     <tbody className="divide-y divide-gray-200 bg-white">
// // //                       {requests.map((request) => (
// // //                         <tr key={request._id}>
// // //                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
// // //                             {formatDate(request.date)}
// // //                           </td>
// // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // //                             <div className="font-medium text-gray-900">{request.name}</div>
// // //                             <div className="text-gray-500">{request.company}</div>
// // //                           </td>
// // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // //                             <div className="text-gray-900">
// // //                               {request.products.length} {request.products.length === 1 ? "item" : "items"}
// // //                             </div>
// // //                             <div className="text-gray-500">
// // //                               {request.products.map((p) => p.name).join(", ").substring(0, 30)}
// // //                               {request.products.map((p) => p.name).join(", ").length > 30 ? "..." : ""}
// // //                             </div>
// // //                           </td>
// // //                           <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
// // //                             {formatAmount(request.totalAmount)}
// // //                           </td>
// // //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// // //                             <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}>
// // //                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // //                             </span>
// // //                           </td>
// // //                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // //                             <div className="flex items-center justify-end space-x-3">
// // //                               <Link to={`/admin/requests/${request._id}`} className="text-indigo-600 hover:text-indigo-900">
// // //                                 View
// // //                               </Link>
// // //                               <div className="relative">
// // //                                 <button
// // //                                   onClick={(e) => toggleDropdown(request._id, e)}
// // //                                   className="text-gray-500 hover:text-gray-700 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
// // //                                   aria-label="Change status"
// // //                                 >
// // //                                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                                     <path
// // //                                       strokeLinecap="round"
// // //                                       strokeLinejoin="round"
// // //                                       strokeWidth="2"
// // //                                       d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
// // //                                     />
// // //                                   </svg>
// // //                                 </button>
// // //                                 {openDropdownId === request._id && (
// // //                                   <div
// // //                                     ref={(el) => (dropdownRefs.current[request._id] = el)}
// // //                                     className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
// // //                                   >
// // //                                     <button
// // //                                       onClick={(e) => handleStatusChange(request._id, "pending", e)}
// // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// // //                                     >
// // //                                       Mark as Pending
// // //                                     </button>
// // //                                     <button
// // //                                       onClick={(e) => handleStatusChange(request._id, "processing", e)}
// // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// // //                                     >
// // //                                       Mark as Processing
// // //                                     </button>
// // //                                     <button
// // //                                       onClick={(e) => handleStatusChange(request._id, "completed", e)}
// // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// // //                                     >
// // //                                       Mark as Completed
// // //                                     </button>
// // //                                     <button
// // //                                       onClick={(e) => handleStatusChange(request._id, "cancelled", e)}
// // //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// // //                                     >
// // //                                       Cancel Request
// // //                                     </button>
// // //                                   </div>
// // //                                 )}
// // //                               </div>
// // //                             </div>
// // //                           </td>
// // //                         </tr>
// // //                       ))}
// // //                     </tbody>
// // //                   </table>
// // //                 )}
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>

// // //         {totalPages > 1 && (
// // //           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // //             <div className="flex flex-1 justify-between sm:hidden">
// // //               <button
// // //                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // //                 disabled={currentPage === 1}
// // //                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // //               >
// // //                 Previous
// // //               </button>
// // //               <button
// // //                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // //                 disabled={currentPage === totalPages}
// // //                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // //               >
// // //                 Next
// // //               </button>
// // //             </div>
// // //             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // //               <div>
// // //                 <p className="text-sm text-gray-700">
// // //                   Showing page <span className="font-medium">{currentPage}</span> of{" "}
// // //                   <span className="font-medium">{totalPages}</span>
// // //                 </p>
// // //               </div>
// // //               <div>
// // //                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // //                   <button
// // //                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// // //                     disabled={currentPage === 1}
// // //                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // //                   >
// // //                     <span className="sr-only">Previous</span>
// // //                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // //                   </button>
// // //                   {[...Array(totalPages).keys()].map((number) => (
// // //                     <button
// // //                       key={number + 1}
// // //                       onClick={() => setCurrentPage(number + 1)}
// // //                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // //                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // //                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // //                         }`}
// // //                     >
// // //                       {number + 1}
// // //                     </button>
// // //                   ))}
// // //                   <button
// // //                     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// // //                     disabled={currentPage === totalPages}
// // //                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // //                   >
// // //                     <span className="sr-only">Next</span>
// // //                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // //                   </button>
// // //                 </nav>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </AdminLayout>
// // //   );
// // // };

// // // export default AdminRequests;


// // "use client"

// // import { useState, useEffect, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import AdminLayout from "../../components/admin/AdminLayout";
// // import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // const Toast = ({ message, type, onClose }) => {
// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       onClose();
// //     }, 3000);
// //     return () => clearTimeout(timer);
// //   }, [onClose]);

// //   return (
// //     <div
// //       className={`fixed top-4 right-4 px-4 py-2 rounded-md shadow-lg text-white ${type === "success" ? "bg-green-600" : "bg-red-600"} z-50`}
// //     >
// //       {message}
// //     </div>
// //   );
// // };

// // const AdminRequests = () => {
// //   const [requests, setRequests] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);
// //   const [filter, setFilter] = useState("all");
// //   const [searchTerm, setSearchTerm] = useState("");
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [sortBy, setSortBy] = useState("date");
// //   const [sortOrder, setSortOrder] = useState("desc");
// //   const [openDropdownId, setOpenDropdownId] = useState(null);
// //   const [toast, setToast] = useState(null);
// //   const [exchangeRate, setExchangeRate] = useState(null);
// //   const [currency, setCurrency] = useState("INR");

// //   const dropdownRefs = useRef({});

// //   useEffect(() => {
// //     const fetchExchangeRate = async () => {
// //       const cachedData = JSON.parse(localStorage.getItem("exchangeRateData"));
// //       const now = Date.now();
// //       const twoDays = 2 * 24 * 60 * 60 * 1000;

// //       if (cachedData && (now - cachedData.timestamp) < twoDays) {
// //         setExchangeRate(cachedData.rate);
// //         return;
// //       }

// //       try {
// //         const response = await axios.get("https://open.er-api.com/v6/latest/USD");
// //         const rate = response.data.rates.INR;
// //         setExchangeRate(rate);
// //         localStorage.setItem("exchangeRateData", JSON.stringify({ rate, timestamp: now }));
// //       } catch (err) {
// //         console.error("Error fetching exchange rate:", err);
// //         setExchangeRate(83.5);
// //       }
// //     };

// //     fetchExchangeRate();
// //   }, []);

// //   useEffect(() => {
// //     const fetchRequests = async () => {
// //       setLoading(true);
// //       try {
// //         const token = localStorage.getItem("token");
// //         const headers = token && token.trim() !== "" ? { Authorization: `Bearer ${token}` } : {};

// //         const response = await axios.get(`${process.env.REACT_APP_API_URL}/requests`, {
// //           params: { status: filter, search: searchTerm, sortBy, sortOrder, page: currentPage, limit: 10 },
// //           headers,
// //         });

// //         setRequests(response.data.requests);
// //         setTotalPages(response.data.totalPages);
// //         setLoading(false);
// //       } catch (err) {
// //         console.error("Error fetching requests:", err);
// //         setError("Failed to load requests. Please try again later.");
// //         setLoading(false);
// //       }
// //     };

// //     fetchRequests();
// //   }, [currentPage, filter, searchTerm, sortBy, sortOrder]);

// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (openDropdownId && dropdownRefs.current[openDropdownId] && !dropdownRefs.current[openDropdownId].contains(event.target)) {
// //         setOpenDropdownId(null);
// //       }
// //     };

// //     document.addEventListener("mousedown", handleClickOutside);
// //     return () => document.removeEventListener("mousedown", handleClickOutside);
// //   }, [openDropdownId]);

// //   const handleFilterChange = (e) => {
// //     setFilter(e.target.value);
// //     setCurrentPage(1);
// //   };

// //   const handleSearchChange = (e) => {
// //     setSearchTerm(e.target.value);
// //     setCurrentPage(1);
// //   };

// //   const handleSort = (field) => {
// //     if (sortBy === field) {
// //       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
// //     } else {
// //       setSortBy(field);
// //       setSortOrder("desc");
// //     }
// //   };

// //   const handleStatusChange = async (requestId, newStatus, event) => {
// //     event.stopPropagation();
// //     try {
// //       const token = localStorage.getItem("token");
// //       const headers = token && token.trim() !== "" ? { Authorization: `Bearer ${token}` } : {};

// //       const response = await axios.put(
// //         `${process.env.REACT_APP_API_URL}/requests/${requestId}/status`,
// //         { status: newStatus },
// //         { headers }
// //       );

// //       setRequests((prevRequests) =>
// //         prevRequests.map((req) => (req._id === requestId ? response.data : req))
// //       );
// //       setToast({ message: `Request status updated to ${newStatus}`, type: "success" });
// //     } catch (err) {
// //       console.error("Error updating request status:", err);
// //       const errorMessage = err.response?.data?.message || "Failed to update request status. Please try again.";
// //       setToast({ message: errorMessage, type: "error" });
// //     } finally {
// //       setOpenDropdownId(null);
// //     }
// //   };

// //   const toggleDropdown = (requestId, event) => {
// //     event.stopPropagation();
// //     setOpenDropdownId(openDropdownId === requestId ? null : requestId);
// //   };

// //   const getStatusBadgeClass = (status) => {
// //     switch (status) {
// //       case "pending": return "bg-yellow-100 text-yellow-800";
// //       case "processing": return "bg-blue-100 text-blue-800";
// //       case "completed": return "bg-green-100 text-green-800";
// //       case "cancelled": return "bg-red-100 text-red-800";
// //       default: return "bg-gray-100 text-gray-800";
// //     }
// //   };

// //   const formatDate = (dateString) => {
// //     const date = new Date(dateString);
// //     return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
// //   };

// //   const formatAmount = (amount) => {
// //     if (currency === "INR" && exchangeRate) {
// //       return `₹${(amount * exchangeRate).toFixed(2)}`;
// //     }
// //     return `$${amount.toFixed(2)}`;
// //   };

// //   const toggleCurrency = () => {
// //     setCurrency(currency === "USD" ? "INR" : "USD");
// //   };

// //   if (loading) {
// //     return (
// //       <AdminLayout>
// //         <div className="flex justify-center items-center h-64">
// //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// //         </div>
// //       </AdminLayout>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <AdminLayout>
// //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// //           <p>{error}</p>
// //         </div>
// //       </AdminLayout>
// //     );
// //   }

// //   return (
// //     <AdminLayout>
// //       <div className="px-4 sm:px-6 lg:px-8 py-8">
// //         {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

// //         <div className="sm:flex sm:items-center sm:justify-between">
// //           <div>
// //             <p className="mt-2 text-3xl text-gray-900">Customer Requests</p>
// //           </div>
// //           <div>
// //             <button
// //               onClick={toggleCurrency}
// //               className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300 shadow-sm"
// //             >
// //               Show in {currency === "USD" ? "INR" : "USD"}
// //             </button>
// //           </div>
// //         </div>

// //         <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// //           <div className="relative rounded-md shadow-sm max-w-xs w-full">
// //             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// //               <Search className="h-5 w-5 text-red-400" aria-hidden="true" />
// //             </div>
// //             <input
// //               type="text"
// //               placeholder="Search requests..."
// //               value={searchTerm}
// //               onChange={handleSearchChange}
// //               className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
// //             />
// //           </div>
// //           <div className="relative max-w-xs w-full">
// //             <select
// //               value={filter}
// //               onChange={handleFilterChange}
// //               className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //             >
// //               <option value="all">All Requests</option>
// //               <option value="pending">Pending</option>
// //               <option value="processing">Processing</option>
// //               <option value="completed">Completed</option>
// //               <option value="cancelled">Cancelled</option>
// //             </select>
// //             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //               <Filter className="h-4 w-4" />
// //             </div>
// //           </div>
// //         </div>

// //         <div className="mt-8 flex flex-col">
// //           <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// //             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// //               <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// //                 {requests.length === 0 ? (
// //                   <div className="text-center py-12 bg-white">
// //                     <p className="text-gray-500">No requests found.</p>
// //                   </div>
// //                 ) : (
// //                   <table className="min-w-full divide-y divide-gray-300">
// //                     <thead className="bg-gray-50">
// //                       <tr>
// //                         <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
// //                           <button onClick={() => handleSort("date")} className="flex items-center focus:outline-none">
// //                             Date
// //                             {sortBy === "date" && (
// //                               <svg
// //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// //                                 fill="none"
// //                                 stroke="currentColor"
// //                                 viewBox="0 0 24 24"
// //                               >
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// //                               </svg>
// //                             )}
// //                           </button>
// //                         </th>
// //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                           <button onClick={() => handleSort("name")} className="flex items-center focus:outline-none">
// //                             Customer
// //                             {sortBy === "name" && (
// //                               <svg
// //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// //                                 fill="none"
// //                                 stroke="currentColor"
// //                                 viewBox="0 0 24 24"
// //                               >
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// //                               </svg>
// //                             )}
// //                           </button>
// //                         </th>
// //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                           Products
// //                         </th>
// //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                           <button onClick={() => handleSort("amount")} className="flex items-center focus:outline-none">
// //                             Total ({currency})
// //                             {sortBy === "amount" && (
// //                               <svg
// //                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
// //                                 fill="none"
// //                                 stroke="currentColor"
// //                                 viewBox="0 0 24 24"
// //                               >
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
// //                               </svg>
// //                             )}
// //                           </button>
// //                         </th>
// //                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                           Status
// //                         </th>
// //                         <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// //                           <span className="sr-only">Actions</span>
// //                         </th>
// //                       </tr>
// //                     </thead>
// //                     <tbody className="divide-y divide-gray-200 bg-white">
// //                       {requests.map((request) => (
// //                         <tr key={request._id}>
// //                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
// //                             {formatDate(request.date)}
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// //                             <div className="font-medium text-gray-900">{request.name}</div>
// //                             <div className="text-gray-500">{request.company}</div>
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// //                             <div className="text-gray-900">
// //                               {request.products.length} {request.products.length === 1 ? "item" : "items"}
// //                             </div>
// //                             <div className="text-gray-500">
// //                               {request.products.map((p) => p.name).join(", ").substring(0, 30)}
// //                               {request.products.map((p) => p.name).join(", ").length > 30 ? "..." : ""}
// //                             </div>
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
// //                             {formatAmount(request.totalAmount)}
// //                           </td>
// //                           <td className="whitespace-nowrap px-3 py-4 text-sm">
// //                             <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}>
// //                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// //                             </span>
// //                           </td>
// //                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// //                             <div className="flex items-center justify-end space-x-3">
// //                               <Link to={`/admin/requests/${request._id}`} className="text-indigo-600 hover:text-indigo-900">
// //                                 View
// //                               </Link>
// //                               <div className="relative">
// //                                 <button
// //                                   onClick={(e) => toggleDropdown(request._id, e)}
// //                                   className="text-gray-500 hover:text-gray-700 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
// //                                   aria-label="Change status"
// //                                 >
// //                                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                                     <path
// //                                       strokeLinecap="round"
// //                                       strokeLinejoin="round"
// //                                       strokeWidth="2"
// //                                       d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
// //                                     />
// //                                   </svg>
// //                                 </button>
// //                                 {openDropdownId === request._id && (
// //                                   <div
// //                                     ref={(el) => (dropdownRefs.current[request._id] = el)}
// //                                     className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
// //                                   >
// //                                     <button
// //                                       onClick={(e) => handleStatusChange(request._id, "pending", e)}
// //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// //                                     >
// //                                       Mark as Pending
// //                                     </button>
// //                                     <button
// //                                       onClick={(e) => handleStatusChange(request._id, "processing", e)}
// //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// //                                     >
// //                                       Mark as Processing
// //                                     </button>
// //                                     <button
// //                                       onClick={(e) => handleStatusChange(request._id, "completed", e)}
// //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// //                                     >
// //                                       Mark as Completed
// //                                     </button>
// //                                     <button
// //                                       onClick={(e) => handleStatusChange(request._id, "cancelled", e)}
// //                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
// //                                     >
// //                                       Cancel Request
// //                                     </button>
// //                                   </div>
// //                                 )}
// //                               </div>
// //                             </div>
// //                           </td>
// //                         </tr>
// //                       ))}
// //                     </tbody>
// //                   </table>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {totalPages > 1 && (
// //           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// //             <div className="flex flex-1 justify-between sm:hidden">
// //               <button
// //                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //                 disabled={currentPage === 1}
// //                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// //               >
// //                 Previous
// //               </button>
// //               <button
// //                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //                 disabled={currentPage === totalPages}
// //                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// //               >
// //                 Next
// //               </button>
// //             </div>
// //             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// //               <div>
// //                 <p className="text-sm text-gray-700">
// //                   Showing page <span className="font-medium">{currentPage}</span> of{" "}
// //                   <span className="font-medium">{totalPages}</span>
// //                 </p>
// //               </div>
// //               <div>
// //                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// //                   <button
// //                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
// //                     disabled={currentPage === 1}
// //                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// //                   >
// //                     <span className="sr-only">Previous</span>
// //                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// //                   </button>
// //                   {[...Array(totalPages).keys()].map((number) => (
// //                     <button
// //                       key={number + 1}
// //                       onClick={() => setCurrentPage(number + 1)}
// //                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// //                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// //                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// //                         }`}
// //                     >
// //                       {number + 1}
// //                     </button>
// //                   ))}
// //                   <button
// //                     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
// //                     disabled={currentPage === totalPages}
// //                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// //                   >
// //                     <span className="sr-only">Next</span>
// //                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
// //                   </button>
// //                 </nav>
// //               </div>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </AdminLayout>
// //   );
// // };

// // export default AdminRequests;

// "use client";

// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import AdminLayout from "../../components/admin/AdminLayout";
// import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Toast = ({ message, type, onClose }) => {
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onClose();
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, [onClose]);

//   return (
//     <div
//       className={`fixed top-4 right-4 px-4 py-2 rounded-md shadow-lg text-white ${type === "success" ? "bg-green-600" : "bg-red-600"} z-50`}
//     >
//       {message}
//     </div>
//   );
// };

// const AdminRequests = () => {
//   const [requests, setRequests] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [filter, setFilter] = useState("all");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [sortBy, setSortBy] = useState("date");
//   const [sortOrder, setSortOrder] = useState("desc");
//   const [openDropdownId, setOpenDropdownId] = useState(null);
//   const [toast, setToast] = useState(null);
//   const [exchangeRate, setExchangeRate] = useState(null);
//   const [currency, setCurrency] = useState("INR"); // Default to INR

//   const dropdownRefs = useRef({});

//   useEffect(() => {
//     const fetchExchangeRate = async () => {
//       const cachedData = JSON.parse(localStorage.getItem("exchangeRateData"));
//       const now = Date.now();
//       const twoDays = 2 * 24 * 60 * 60 * 1000;

//       if (cachedData && now - cachedData.timestamp < twoDays) {
//         setExchangeRate(cachedData.rate);
//         return;
//       }

//       try {
//         const response = await axios.get("https://open.er-api.com/v6/latest/USD");
//         const rate = response.data.rates.INR; // 1 USD = X INR
//         setExchangeRate(rate);
//         localStorage.setItem("exchangeRateData", JSON.stringify({ rate, timestamp: now }));
//       } catch (err) {
//         console.error("Error fetching exchange rate:", err);
//         setExchangeRate(83.5); // Fallback rate: 1 USD = 83.5 INR
//       }
//     };

//     fetchExchangeRate();
//   }, []);

//   useEffect(() => {
//     const fetchRequests = async () => {
//       setLoading(true);
//       try {
//         const token = localStorage.getItem("token");
//         const headers = token && token.trim() !== "" ? { Authorization: `Bearer ${token}` } : {};

//         const response = await axios.get(`${process.env.REACT_APP_API_URL}/requests`, {
//           params: { status: filter, search: searchTerm, sortBy, sortOrder, page: currentPage, limit: 10 },
//           headers,
//         });

//         setRequests(response.data.requests);
//         setTotalPages(response.data.totalPages);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching requests:", err);
//         setError("Failed to load requests. Please try again later.");
//         setLoading(false);
//       }
//     };

//     fetchRequests();
//   }, [currentPage, filter, searchTerm, sortBy, sortOrder]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (openDropdownId && dropdownRefs.current[openDropdownId] && !dropdownRefs.current[openDropdownId].contains(event.target)) {
//         setOpenDropdownId(null);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, [openDropdownId]);

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleSearchChange = (e) => {
//     setSearchTerm(e.target.value);
//     setCurrentPage(1);
//   };

//   const handleSort = (field) => {
//     if (sortBy === field) {
//       setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//     } else {
//       setSortBy(field);
//       setSortOrder("desc");
//     }
//   };

//   const handleStatusChange = async (requestId, newStatus, event) => {
//     event.stopPropagation();
//     try {
//       const token = localStorage.getItem("token");
//       const headers = token && token.trim() !== "" ? { Authorization: `Bearer ${token}` } : {};

//       const response = await axios.put(
//         `${process.env.REACT_APP_API_URL}/requests/${requestId}/status`,
//         { status: newStatus },
//         { headers }
//       );

//       setRequests((prevRequests) =>
//         prevRequests.map((req) => (req._id === requestId ? response.data : req))
//       );
//       setToast({ message: `Request status updated to ${newStatus}`, type: "success" });
//     } catch (err) {
//       console.error("Error updating request status:", err);
//       const errorMessage = err.response?.data?.message || "Failed to update request status. Please try again.";
//       setToast({ message: errorMessage, type: "error" });
//     } finally {
//       setOpenDropdownId(null);
//     }
//   };

//   const toggleDropdown = (requestId, event) => {
//     event.stopPropagation();
//     setOpenDropdownId(openDropdownId === requestId ? null : requestId);
//   };

//   const getStatusBadgeClass = (status) => {
//     switch (status) {
//       case "pending": return "bg-yellow-100 text-yellow-800";
//       case "processing": return "bg-blue-100 text-blue-800";
//       case "completed": return "bg-green-100 text-green-800";
//       case "cancelled": return "bg-red-100 text-red-800";
//       default: return "bg-gray-100 text-gray-800";
//     }
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
//   };

//   const formatAmount = (amount) => {
//     if (currency === "INR") {
//       return `₹${amount.toFixed(2)}`; // Amount is already in INR from API
//     }
//     if (currency === "USD" && exchangeRate) {
//       return `$${(amount / exchangeRate).toFixed(2)}`; // Convert INR to USD
//     }
//     return `₹${amount.toFixed(2)}`; // Fallback to INR if exchange rate isn't available
//   };

//   const toggleCurrency = () => {
//     setCurrency(currency === "INR" ? "USD" : "INR");
//   };

//   if (loading) {
//     return (
//       <AdminLayout>
//         <div className="flex justify-center items-center h-64">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
//         </div>
//       </AdminLayout>
//     );
//   }

//   if (error) {
//     return (
//       <AdminLayout>
//         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
//           <p>{error}</p>
//         </div>
//       </AdminLayout>
//     );
//   }

//   return (
//     <AdminLayout>
//       <div className="px-4 sm:px-6 lg:px-8 py-8">
//         {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

//         <div className="sm:flex sm:items-center sm:justify-between">
//           <div>
//             <p className="mt-2 text-3xl text-gray-900">Customer Requests</p>
//           </div>
//           <div>
//             <button
//               onClick={toggleCurrency}
//               className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300 shadow-sm"
//             >
//               Show in {currency === "INR" ? "USD" : "INR"}
//             </button>
//           </div>
//         </div>

//         <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//           <div className="relative rounded-md shadow-sm max-w-xs w-full">
//             <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//               <Search className="h-5 w-5 text-red-400" aria-hidden="true" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search requests..."
//               value={searchTerm}
//               onChange={handleSearchChange}
//               className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
//             />
//           </div>
//           <div className="relative max-w-xs w-full">
//             <select
//               value={filter}
//               onChange={handleFilterChange}
//               className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//             >
//               <option value="all">All Requests</option>
//               <option value="pending">Pending</option>
//               <option value="processing">Processing</option>
//               <option value="completed">Completed</option>
//               <option value="cancelled">Cancelled</option>
//             </select>
//             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//               <Filter className="h-4 w-4" />
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 flex flex-col">
//           <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
//             <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//               <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
//                 {requests.length === 0 ? (
//                   <div className="text-center py-12 bg-white">
//                     <p className="text-gray-500">No requests found.</p>
//                   </div>
//                 ) : (
//                   <table className="min-w-full divide-y divide-gray-300">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
//                           <button onClick={() => handleSort("date")} className="flex items-center focus:outline-none">
//                             Date
//                             {sortBy === "date" && (
//                               <svg
//                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                               </svg>
//                             )}
//                           </button>
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                           <button onClick={() => handleSort("name")} className="flex items-center focus:outline-none">
//                             Customer
//                             {sortBy === "name" && (
//                               <svg
//                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                               </svg>
//                             )}
//                           </button>
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                           Products
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                           <button onClick={() => handleSort("amount")} className="flex items-center focus:outline-none">
//                             Total ({currency})
//                             {sortBy === "amount" && (
//                               <svg
//                                 className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                               >
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
//                               </svg>
//                             )}
//                           </button>
//                         </th>
//                         <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                           Status
//                         </th>
//                         <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
//                           <span className="sr-only">Actions</span>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200 bg-white">
//                       {requests.map((request) => (
//                         <tr key={request._id}>
//                           <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
//                             {formatDate(request.date)}
//                           </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm">
//                             <div className="font-medium text-gray-900">{request.name}</div>
//                             <div className="text-gray-500">{request.company}</div>
//                           </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm">
//                             <div className="text-gray-900">
//                               {request.products.length} {request.products.length === 1 ? "item" : "items"}
//                             </div>
//                             <div className="text-gray-500">
//                               {request.products.map((p) => p.name).join(", ").substring(0, 30)}
//                               {request.products.map((p) => p.name).join(", ").length > 30 ? "..." : ""}
//                             </div>
//                           </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
//                             {formatAmount(request.totalAmount)}
//                           </td>
//                           <td className="whitespace-nowrap px-3 py-4 text-sm">
//                             <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}>
//                               {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
//                             </span>
//                           </td>
//                           <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
//                             <div className="flex items-center justify-end space-x-3">
//                               <Link to={`/admin/requests/${request._id}`} className="text-indigo-600 hover:text-indigo-900">
//                                 View
//                               </Link>
//                               <div className="relative">
//                                 <button
//                                   onClick={(e) => toggleDropdown(request._id, e)}
//                                   className="text-gray-500 hover:text-gray-700 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
//                                   aria-label="Change status"
//                                 >
//                                   <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                     <path
//                                       strokeLinecap="round"
//                                       strokeLinejoin="round"
//                                       strokeWidth="2"
//                                       d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
//                                     />
//                                   </svg>
//                                 </button>
//                                 {openDropdownId === request._id && (
//                                   <div
//                                     ref={(el) => (dropdownRefs.current[request._id] = el)}
//                                     className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
//                                   >
//                                     <button
//                                       onClick={(e) => handleStatusChange(request._id, "pending", e)}
//                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
//                                     >
//                                       Mark as Pending
//                                     </button>
//                                     <button
//                                       onClick={(e) => handleStatusChange(request._id, "processing", e)}
//                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
//                                     >
//                                       Mark as Processing
//                                     </button>
//                                     <button
//                                       onClick={(e) => handleStatusChange(request._id, "completed", e)}
//                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
//                                     >
//                                       Mark as Completed
//                                     </button>
//                                     <button
//                                       onClick={(e) => handleStatusChange(request._id, "cancelled", e)}
//                                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
//                                     >
//                                       Cancel Request
//                                     </button>
//                                   </div>
//                                 )}
//                               </div>
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {totalPages > 1 && (
//           <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
//             <div className="flex flex-1 justify-between sm:hidden">
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                 disabled={currentPage === 1}
//                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
//               >
//                 Previous
//               </button>
//               <button
//                 onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                 disabled={currentPage === totalPages}
//                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
//               >
//                 Next
//               </button>
//             </div>
//             <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//               <div>
//                 <p className="text-sm text-gray-700">
//                   Showing page <span className="font-medium">{currentPage}</span> of{" "}
//                   <span className="font-medium">{totalPages}</span>
//                 </p>
//               </div>
//               <div>
//                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
//                   <button
//                     onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
//                     disabled={currentPage === 1}
//                     className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
//                   >
//                     <span className="sr-only">Previous</span>
//                     <ChevronLeft className="h-5 w-5" aria-hidden="true" />
//                   </button>
//                   {[...Array(totalPages).keys()].map((number) => (
//                     <button
//                       key={number + 1}
//                       onClick={() => setCurrentPage(number + 1)}
//                       className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
//                         ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
//                         : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                         }`}
//                     >
//                       {number + 1}
//                     </button>
//                   ))}
//                   <button
//                     onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
//                     disabled={currentPage === totalPages}
//                     className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
//                   >
//                     <span className="sr-only">Next</span>
//                     <ChevronRight className="h-5 w-5" aria-hidden="true" />
//                   </button>
//                 </nav>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </AdminLayout>
//   );
// };

// export default AdminRequests;



"use client";

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import { Search, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import emailjs from '@emailjs/browser';

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`fixed top-4 right-4 px-4 py-2 rounded-md shadow-lg text-white ${type === "success" ? "bg-green-600" : "bg-red-600"} z-50`}
    >
      {message}
    </div>
  );
};

const AdminRequests = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortBy, setSortBy] = useState("date");
  const [sortOrder, setSortOrder] = useState("desc");
  const [openDropdownId, setOpenDropdownId] = useState(null);
  const [toast, setToast] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [currency, setCurrency] = useState("INR"); // Default to INR
  const [showCompleteModal, setShowCompleteModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [miscCharges, setMiscCharges] = useState(0);
  const [shippingCharges, setShippingCharges] = useState(0);
  const [formErrors, setFormErrors] = useState({});

  const dropdownRefs = useRef({});

  useEffect(() => {
    const fetchExchangeRate = async () => {
      const cachedData = JSON.parse(localStorage.getItem("exchangeRateData"));
      const now = Date.now();
      const twoDays = 2 * 24 * 60 * 60 * 1000;

      if (cachedData && now - cachedData.timestamp < twoDays) {
        setExchangeRate(cachedData.rate);
        return;
      }

      try {
        const response = await axios.get("https://open.er-api.com/v6/latest/USD");
        const rate = response.data.rates.INR; // 1 USD = X INR
        setExchangeRate(rate);
        localStorage.setItem("exchangeRateData", JSON.stringify({ rate, timestamp: now }));
      } catch (err) {
        console.error("Error fetching exchange rate:", err);
        setExchangeRate(83.5); // Fallback rate: 1 USD = 83.5 INR
      }
    };

    fetchExchangeRate();
  }, []);

  useEffect(() => {
    const fetchRequests = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const headers = token && token.trim() !== "" ? { Authorization: `Bearer ${token}` } : {};

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/requests`, {
          params: { status: filter, search: searchTerm, sortBy, sortOrder, page: currentPage, limit: 10 },
          headers,
        });

        setRequests(response.data.requests);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching requests:", err);
        setError("Failed to load requests. Please try again later.");
        setLoading(false);
      }
    };

    fetchRequests();
  }, [currentPage, filter, searchTerm, sortBy, sortOrder]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (openDropdownId && dropdownRefs.current[openDropdownId] && !dropdownRefs.current[openDropdownId].contains(event.target)) {
        setOpenDropdownId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdownId]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
  };

  const validateCompleteForm = () => {
    const newErrors = {};
    if (miscCharges < 0) newErrors.miscCharges = "Miscellaneous charges cannot be negative.";
    if (shippingCharges < 0) newErrors.shippingCharges = "Shipping charges cannot be negative.";
    setFormErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCompleteOrder = async () => {
    if (!validateCompleteForm()) return;

    try {
      // Calculate totals
      const subtotal = selectedRequest.products.reduce((sum, product) => sum + (product.price * product.quantity), 0);
      const gst = subtotal * 0.18; // 18% GST
      const total = subtotal + gst + parseFloat(miscCharges || 0) + parseFloat(shippingCharges || 0);

      // Prepare email data
      const emailData = {
        name: selectedRequest.name,
        email: selectedRequest.email,
        company: selectedRequest.company,
        phone: selectedRequest.phone,
        message: selectedRequest.message || "N/A",
        products: selectedRequest.products.map(p => ({
          name: p.name,
          category: p.category,
          quantity: p.quantity,
          price: formatPrice(p.price),
          total: formatPrice(p.price * p.quantity),
          image: p.image || "https://via.placeholder.com/40",
        })),
        subtotal: formatPrice(subtotal),
        gst: formatPrice(gst),
        miscCharges: formatPrice(miscCharges),
        shippingCharges: formatPrice(shippingCharges),
        total: formatPrice(total),
      };

      // Send email to customer
      await emailjs.send(
        'service_y4a4npb', // Replace with your EmailJS service ID
        'template_zskao2j', // Replace with your EmailJS template ID for customer
        emailData,
        'Qyjy-LECOP7bPgqHE' // Replace with your EmailJS public key
      );

      // Send notification to admin team
      await emailjs.send(
        'service_by04ibv', // Replace with your EmailJS service ID
        'template_fhe6ckr', // Replace with your EmailJS template ID for admin
        emailData,
        '4mWmU4QhvYl3c_8_G' // Replace with your EmailJS public key
      );

      // Update the request status to completed
      const token = localStorage.getItem("token");
      const headers = token && token.trim() !== "" ? { Authorization: `Bearer ${token}` } : {};
      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/requests/${selectedRequest._id}/status`,
        { status: "completed" },
        { headers }
      );

      setRequests((prevRequests) =>
        prevRequests.map((req) => (req._id === selectedRequest._id ? response.data : req))
      );
      setToast({ message: "Request marked as completed and summary sent to customer.", type: "success" });
      setShowCompleteModal(false);
      setSelectedRequest(null);
      setMiscCharges(0);
      setShippingCharges(0);
    } catch (err) {
      console.error("Error completing request:", err);
      const errorMessage = err.response?.data?.message || "Failed to complete request. Please try again.";
      setToast({ message: errorMessage, type: "error" });
    } finally {
      setOpenDropdownId(null);
    }
  };

  const handleStatusChange = async (requestId, newStatus, event) => {
    event.stopPropagation();
    if (newStatus === "completed") {
      const request = requests.find(req => req._id === requestId);
      setSelectedRequest(request);
      setShowCompleteModal(true);
      setOpenDropdownId(null);
      return;
    }

    try {
      const token = localStorage.getItem("token");
      const headers = token && token.trim() !== "" ? { Authorization: `Bearer ${token}` } : {};

      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/requests/${requestId}/status`,
        { status: newStatus },
        { headers }
      );

      setRequests((prevRequests) =>
        prevRequests.map((req) => (req._id === requestId ? response.data : req))
      );
      setToast({ message: `Request status updated to ${newStatus}`, type: "success" });
    } catch (err) {
      console.error("Error updating request status:", err);
      const errorMessage = err.response?.data?.message || "Failed to update request status. Please try again.";
      setToast({ message: errorMessage, type: "error" });
    } finally {
      setOpenDropdownId(null);
    }
  };

  const toggleDropdown = (requestId, event) => {
    event.stopPropagation();
    setOpenDropdownId(openDropdownId === requestId ? null : requestId);
  };

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "processing": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
  };

  const formatPrice = (amount) => {
    if (!amount) return "N/A";
    if (currency === "INR") {
      return `₹${parseFloat(amount).toFixed(2)}`; // Amount is already in INR from API
    }
    if (currency === "USD" && exchangeRate) {
      return `$${(amount / exchangeRate).toFixed(2)}`; // Convert INR to USD
    }
    return `₹${parseFloat(amount).toFixed(2)}`; // Fallback to INR if exchange rate isn't available
  };

  const toggleCurrency = () => {
    setCurrency(currency === "INR" ? "USD" : "INR");
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
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          <p>{error}</p>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="px-4 sm:px-6 lg:px-8 py-8">
        {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}

        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <p className="mt-2 text-3xl text-gray-900">Customer Requests</p>
          </div>
          <div>
            <button
              onClick={toggleCurrency}
              className="mt-4 sm:mt-0 bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-lg font-medium transition duration-300 shadow-sm"
            >
              Show in {currency === "INR" ? "USD" : "INR"}
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="relative rounded-md shadow-sm max-w-xs w-full">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="h-5 w-5 text-red-400" aria-hidden="true" />
            </div>
            <input
              type="text"
              placeholder="Search requests..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
            />
          </div>
          <div className="relative max-w-xs w-full">
            <select
              value={filter}
              onChange={handleFilterChange}
              className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
            >
              <option value="all">All Requests</option>
              <option value="pending">Pending</option>
              <option value="processing">Processing</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <Filter className="h-4 w-4" />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col">
          <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                {requests.length === 0 ? (
                  <div className="text-center py-12 bg-white">
                    <p className="text-gray-500">No requests found.</p>
                  </div>
                ) : (
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                          <button onClick={() => handleSort("date")} className="flex items-center focus:outline-none">
                            Date
                            {sortBy === "date" && (
                              <svg
                                className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                          </button>
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          <button onClick={() => handleSort("name")} className="flex items-center focus:outline-none">
                            Customer
                            {sortBy === "name" && (
                              <svg
                                className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                          </button>
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Products
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          <button onClick={() => handleSort("amount")} className="flex items-center focus:outline-none">
                            Total ({currency})
                            {sortBy === "amount" && (
                              <svg
                                className={`ml-1 h-4 w-4 ${sortOrder === "asc" ? "transform rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                              </svg>
                            )}
                          </button>
                        </th>
                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                          Status
                        </th>
                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {requests.map((request) => (
                        <tr key={request._id}>
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-500 sm:pl-6">
                            {formatDate(request.date)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            <div className="font-medium text-gray-900">{request.name}</div>
                            <div className="text-gray-500">{request.company}</div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            <div className="text-gray-900">
                              {request.products.length} {request.products.length === 1 ? "item" : "items"}
                            </div>
                            <div className="text-gray-500">
                              {request.products.map((p) => p.name).join(", ").substring(0, 30)}
                              {request.products.map((p) => p.name).join(", ").length > 30 ? "..." : ""}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                            {formatPrice(request.totalAmount)}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm">
                            <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${getStatusBadgeClass(request.status)}`}>
                              {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                            </span>
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                            <div className="flex items-center justify-end space-x-3">
                              <Link to={`/admin/requests/${request._id}`} className="text-indigo-600 hover:text-indigo-900">
                                View
                              </Link>
                              <div className="relative">
                                <button
                                  onClick={(e) => toggleDropdown(request._id, e)}
                                  className="text-gray-500 hover:text-gray-700 focus:outline-none p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
                                  aria-label="Change status"
                                >
                                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                  </svg>
                                </button>
                                {openDropdownId === request._id && (
                                  <div
                                    ref={(el) => (dropdownRefs.current[request._id] = el)}
                                    className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200"
                                  >
                                    <button
                                      onClick={(e) => handleStatusChange(request._id, "pending", e)}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
                                    >
                                      Mark as Pending
                                    </button>
                                    <button
                                      onClick={(e) => handleStatusChange(request._id, "processing", e)}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
                                    >
                                      Mark as Processing
                                    </button>
                                    <button
                                      onClick={(e) => handleStatusChange(request._id, "completed", e)}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
                                    >
                                      Mark as Completed
                                    </button>
                                    <button
                                      onClick={(e) => handleStatusChange(request._id, "cancelled", e)}
                                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left transition-colors duration-200"
                                    >
                                      Cancel Request
                                    </button>
                                  </div>
                                )}
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
            <div className="flex flex-1 justify-between sm:hidden">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing page <span className="font-medium">{currentPage}</span> of{" "}
                  <span className="font-medium">{totalPages}</span>
                </p>
              </div>
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                  </button>
                  {[...Array(totalPages).keys()].map((number) => (
                    <button
                      key={number + 1}
                      onClick={() => setCurrentPage(number + 1)}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
                        ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                        }`}
                    >
                      {number + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRight className="h-5 w-5" aria-hidden="true" />
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* Complete Order Modal */}
        {showCompleteModal && selectedRequest && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
              <div className="px-6 py-5">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-medium text-gray-900">Complete Order</h3>
                  <button
                    type="button"
                    onClick={() => setShowCompleteModal(false)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="mt-5">
                  {/* Customer Information */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="text-md font-semibold text-red-600 mb-2">Customer Information</h4>
                    <table className="w-full text-sm text-gray-700">
                      <tbody>
                        <tr>
                          <td className="font-medium w-24 py-1">Name:</td>
                          <td>{selectedRequest.name}</td>
                        </tr>
                        <tr>
                          <td className="font-medium w-24 py-1">Email:</td>
                          <td><a href={`mailto:${selectedRequest.email}`} className="text-red-600">{selectedRequest.email}</a></td>
                        </tr>
                        <tr>
                          <td className="font-medium w-24 py-1">Company:</td>
                          <td>{selectedRequest.company}</td>
                        </tr>
                        <tr>
                          <td className="font-medium w-24 py-1">Phone:</td>
                          <td>{selectedRequest.phone}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Products Table */}
                  <div className="mb-4">
                    <h4 className="text-md font-semibold text-red-600 mb-2">Products</h4>
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-red-50 text-red-700 uppercase text-xs">
                          <th className="py-2 px-3 text-left">Product</th>
                          <th className="py-2 px-3 text-left">Category</th>
                          <th className="py-2 px-3 text-left">Quantity</th>
                          <th className="py-2 px-3 text-left">Price ({currency})</th>
                          <th className="py-2 px-3 text-left">Total ({currency})</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedRequest.products.map((product, index) => (
                          <tr key={index} className="border-b border-gray-200">
                            <td className="py-2 px-3">{product.name}</td>
                            <td className="py-2 px-3 text-gray-500">{product.category}</td>
                            <td className="py-2 px-3">{product.quantity}</td>
                            <td className="py-2 px-3">{formatPrice(product.price)}</td>
                            <td className="py-2 px-3">{formatPrice(product.price * product.quantity)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Price Summary */}
                  <div className="bg-gray-50 p-4 rounded-lg mb-4">
                    <h4 className="text-md font-semibold text-red-600 mb-2">Price Summary</h4>
                    <table className="w-full text-sm text-gray-700">
                      <tbody>
                        <tr>
                          <td className="font-medium w-40 py-1">Subtotal:</td>
                          <td>{formatPrice(selectedRequest.products.reduce((sum, p) => sum + (p.price * p.quantity), 0))}</td>
                        </tr>
                        <tr>
                          <td className="font-medium w-40 py-1">GST (18%):</td>
                          <td>{formatPrice(selectedRequest.products.reduce((sum, p) => sum + (p.price * p.quantity), 0) * 0.18)}</td>
                        </tr>
                        <tr>
                          <td className="font-medium w-40 py-1">Miscellaneous Charges:</td>
                          <td>
                            <input
                              type="number"
                              value={miscCharges}
                              onChange={(e) => setMiscCharges(e.target.value)}
                              className="w-32 px-2 py-1 border rounded-md"
                              min="0"
                            />
                            {formErrors.miscCharges && <p className="text-red-600 text-xs mt-1">{formErrors.miscCharges}</p>}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-medium w-40 py-1">Shipping Charges:</td>
                          <td>
                            <input
                              type="number"
                              value={shippingCharges}
                              onChange={(e) => setShippingCharges(e.target.value)}
                              className="w-32 px-2 py-1 border rounded-md"
                              min="0"
                            />
                            {formErrors.shippingCharges && <p className="text-red-600 text-xs mt-1">{formErrors.shippingCharges}</p>}
                          </td>
                        </tr>
                        <tr>
                          <td className="font-medium w-40 py-1 font-semibold text-red-600">Total:</td>
                          <td className="font-semibold text-red-600">
                            {formatPrice(
                              selectedRequest.products.reduce((sum, p) => sum + (p.price * p.quantity), 0) +
                              (selectedRequest.products.reduce((sum, p) => sum + (p.price * p.quantity), 0) * 0.18) +
                              parseFloat(miscCharges || 0) +
                              parseFloat(shippingCharges || 0)
                            )}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Actions */}
                  <div className="flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={handleCompleteOrder}
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Complete Order
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowCompleteModal(false)}
                      className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default AdminRequests;