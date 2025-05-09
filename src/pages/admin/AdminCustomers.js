// // // // // // // // // // "use client"
// // // // // // // // // // import { useState, useEffect } from "react"
// // // // // // // // // // import { Link } from "react-router-dom"
// // // // // // // // // // import {
// // // // // // // // // //     Search,
// // // // // // // // // //     Filter,
// // // // // // // // // //     ChevronLeft,
// // // // // // // // // //     ChevronRight,
// // // // // // // // // //     Edit,
// // // // // // // // // //     Trash2,
// // // // // // // // // //     UserPlus,
// // // // // // // // // //     Mail,
// // // // // // // // // //     RefreshCw,
// // // // // // // // // //     Eye,
// // // // // // // // // //     Download,
// // // // // // // // // // } from "lucide-react"
// // // // // // // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // // // // // // import { fetchAllUsers } from "../../services/api"
// // // // // // // // // // import { toast } from "react-toastify"

// // // // // // // // // // const AdminCustomers = () => {
// // // // // // // // // //     const [customers, setCustomers] = useState([])
// // // // // // // // // //     const [loading, setLoading] = useState(true)
// // // // // // // // // //     const [error, setError] = useState(null)
// // // // // // // // // //     const [searchQuery, setSearchQuery] = useState("")
// // // // // // // // // //     const [roleFilter, setRoleFilter] = useState("all")
// // // // // // // // // //     const [currentPage, setCurrentPage] = useState(1)
// // // // // // // // // //     const [itemsPerPage] = useState(10)
// // // // // // // // // //     const [showDeleteModal, setShowDeleteModal] = useState(false)
// // // // // // // // // //     const [customerToDelete, setCustomerToDelete] = useState(null)
// // // // // // // // // //     const [sortBy, setSortBy] = useState("newest")

// // // // // // // // // //     useEffect(() => {
// // // // // // // // // //         const loadCustomers = async () => {
// // // // // // // // // //             setLoading(true)
// // // // // // // // // //             try {
// // // // // // // // // //                 const data = await fetchAllUsers()
// // // // // // // // // //                 setCustomers(data)
// // // // // // // // // //                 setError(null)
// // // // // // // // // //             } catch (err) {
// // // // // // // // // //                 console.error("Error loading customers:", err)
// // // // // // // // // //                 setError("Failed to load customers. Please try again later.")
// // // // // // // // // //                 setCustomers([])
// // // // // // // // // //             } finally {
// // // // // // // // // //                 setLoading(false)
// // // // // // // // // //             }
// // // // // // // // // //         }

// // // // // // // // // //         loadCustomers()
// // // // // // // // // //     }, [])

// // // // // // // // // //     // Filter customers based on search query and role
// // // // // // // // // //     const filteredCustomers = customers.filter((customer) => {
// // // // // // // // // //         const matchesSearch =
// // // // // // // // // //             customer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // //             customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // //             customer.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // //             customer.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // // //             customer.company?.toLowerCase().includes(searchQuery.toLowerCase())

// // // // // // // // // //         const matchesRole = roleFilter === "all" || customer.role === roleFilter

// // // // // // // // // //         return matchesSearch && matchesRole
// // // // // // // // // //     })

// // // // // // // // // //     // Sort customers
// // // // // // // // // //     const sortedCustomers = [...filteredCustomers].sort((a, b) => {
// // // // // // // // // //         switch (sortBy) {
// // // // // // // // // //             case "name-asc":
// // // // // // // // // //                 return (a.firstName || a.username).localeCompare(b.firstName || b.username)
// // // // // // // // // //             case "name-desc":
// // // // // // // // // //                 return (b.firstName || b.username).localeCompare(a.firstName || a.username)
// // // // // // // // // //             case "email-asc":
// // // // // // // // // //                 return a.email.localeCompare(b.email)
// // // // // // // // // //             case "email-desc":
// // // // // // // // // //                 return b.email.localeCompare(a.email)
// // // // // // // // // //             case "newest":
// // // // // // // // // //                 return new Date(b.createdAt) - new Date(a.createdAt)
// // // // // // // // // //             case "oldest":
// // // // // // // // // //                 return new Date(a.createdAt) - new Date(b.createdAt)
// // // // // // // // // //             default:
// // // // // // // // // //                 return 0
// // // // // // // // // //         }
// // // // // // // // // //     })

// // // // // // // // // //     // Pagination
// // // // // // // // // //     const indexOfLastItem = currentPage * itemsPerPage
// // // // // // // // // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // // // // // // // // //     const currentItems = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem)
// // // // // // // // // //     const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage)

// // // // // // // // // //     const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // // // // // // // // //     const handleDeleteClick = (customer) => {
// // // // // // // // // //         setCustomerToDelete(customer)
// // // // // // // // // //         setShowDeleteModal(true)
// // // // // // // // // //     }

// // // // // // // // // //     const confirmDelete = async () => {
// // // // // // // // // //         if (!customerToDelete) return

// // // // // // // // // //         try {
// // // // // // // // // //             // In a real app, this would call an API endpoint
// // // // // // // // // //             // await deleteUser(customerToDelete.id)

// // // // // // // // // //             // Update local state
// // // // // // // // // //             setCustomers(customers.filter((c) => c.id !== customerToDelete.id))
// // // // // // // // // //             setShowDeleteModal(false)
// // // // // // // // // //             setCustomerToDelete(null)
// // // // // // // // // //             toast.success("Customer deleted successfully")
// // // // // // // // // //         } catch (err) {
// // // // // // // // // //             console.error("Error deleting customer:", err)
// // // // // // // // // //             toast.error("Failed to delete customer")
// // // // // // // // // //         }
// // // // // // // // // //     }

// // // // // // // // // //     const exportCustomers = () => {
// // // // // // // // // //         // In a real app, this would generate a CSV or Excel file
// // // // // // // // // //         toast.info("Exporting customers...")
// // // // // // // // // //     }

// // // // // // // // // //     return (
// // // // // // // // // //         <AdminLayout>
// // // // // // // // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // // // // // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // // // // // // // // //                     <div>
// // // // // // // // // //                         <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
// // // // // // // // // //                         <p className="mt-2 text-sm text-gray-700">A list of all customers in your system.</p>
// // // // // // // // // //                     </div>
// // // // // // // // // //                     <div className="mt-4 sm:mt-0 flex space-x-3">
// // // // // // // // // //                         <button
// // // // // // // // // //                             onClick={exportCustomers}
// // // // // // // // // //                             className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // // // // // // // //                         >
// // // // // // // // // //                             <Download className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
// // // // // // // // // //                             Export
// // // // // // // // // //                         </button>
// // // // // // // // // //                         <Link
// // // // // // // // // //                             to="/admin/customers/new"
// // // // // // // // // //                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // // // // // // // //                         >
// // // // // // // // // //                             <UserPlus className="-ml-1 mr-2 h-4 w-4" />
// // // // // // // // // //                             Add Admin
// // // // // // // // // //                         </Link>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // // // // // // // // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // // // // // // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // // // // // // //                             <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <input
// // // // // // // // // //                             type="text"
// // // // // // // // // //                             value={searchQuery}
// // // // // // // // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // // //                             className="block w-full rounded-md border-gray-300 pl-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // // // // // // // //                             placeholder="Search customers..."
// // // // // // // // // //                         />
// // // // // // // // // //                     </div>

// // // // // // // // // //                     <div className="flex flex-col sm:flex-row gap-4">
// // // // // // // // // //                         <div className="relative max-w-xs w-full">
// // // // // // // // // //                             <select
// // // // // // // // // //                                 value={roleFilter}
// // // // // // // // // //                                 onChange={(e) => setRoleFilter(e.target.value)}
// // // // // // // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // // // // //                             >
// // // // // // // // // //                                 <option value="all">All Roles</option>
// // // // // // // // // //                                 <option value="user">Customer</option>
// // // // // // // // // //                                 <option value="admin">Admin</option>
// // // // // // // // // //                             </select>
// // // // // // // // // //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // // // // // //                                 <Filter className="h-4 w-4" />
// // // // // // // // // //                             </div>
// // // // // // // // // //                         </div>

// // // // // // // // // //                         <div className="relative max-w-xs w-full">
// // // // // // // // // //                             <select
// // // // // // // // // //                                 value={sortBy}
// // // // // // // // // //                                 onChange={(e) => setSortBy(e.target.value)}
// // // // // // // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // // // // //                             >
// // // // // // // // // //                                 <option value="newest">Newest</option>
// // // // // // // // // //                                 <option value="oldest">Oldest</option>
// // // // // // // // // //                                 <option value="name-asc">Name (A-Z)</option>
// // // // // // // // // //                                 <option value="name-desc">Name (Z-A)</option>
// // // // // // // // // //                                 <option value="email-asc">Email (A-Z)</option>
// // // // // // // // // //                                 <option value="email-desc">Email (Z-A)</option>
// // // // // // // // // //                             </select>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 <div className="mt-8 flex flex-col">
// // // // // // // // // //                     <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // // // // // // // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // // // // // //                             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // // // // // //                                 {loading ? (
// // // // // // // // // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // // // // // // // // //                                         <RefreshCw className="animate-spin h-8 w-8 text-red-600" />
// // // // // // // // // //                                     </div>
// // // // // // // // // //                                 ) : error ? (
// // // // // // // // // //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // // // // // // // // //                                 ) : currentItems.length === 0 ? (
// // // // // // // // // //                                     <div className="text-center py-12 bg-white">
// // // // // // // // // //                                         <p className="text-gray-500">No customers found.</p>
// // // // // // // // // //                                     </div>
// // // // // // // // // //                                 ) : (
// // // // // // // // // //                                     <table className="min-w-full divide-y divide-gray-300">
// // // // // // // // // //                                         <thead className="bg-gray-50">
// // // // // // // // // //                                             <tr>
// // // // // // // // // //                                                 <th
// // // // // // // // // //                                                     scope="col"
// // // // // // // // // //                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // // // // // // // //                                                 >
// // // // // // // // // //                                                     Name
// // // // // // // // // //                                                 </th>
// // // // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // // //                                                     Email
// // // // // // // // // //                                                 </th>
// // // // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // // //                                                     Company
// // // // // // // // // //                                                 </th>
// // // // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // // //                                                     Role
// // // // // // // // // //                                                 </th>
// // // // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // // //                                                     Joined
// // // // // // // // // //                                                 </th>
// // // // // // // // // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // // // // // // //                                                     <span className="sr-only">Actions</span>
// // // // // // // // // //                                                 </th>
// // // // // // // // // //                                             </tr>
// // // // // // // // // //                                         </thead>
// // // // // // // // // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // // // // // // // // //                                             {currentItems.map((customer) => (
// // // // // // // // // //                                                 <tr key={customer.id}>
// // // // // // // // // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // // // // // // // // //                                                         <div className="flex items-center">
// // // // // // // // // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // // // // // // // // //                                                                 <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
// // // // // // // // // //                                                                     {customer.firstName?.charAt(0) || customer.username?.charAt(0) || "U"}
// // // // // // // // // //                                                                 </div>
// // // // // // // // // //                                                             </div>
// // // // // // // // // //                                                             <div className="ml-4">
// // // // // // // // // //                                                                 <div className="font-medium text-gray-900">
// // // // // // // // // //                                                                     {customer.firstName && customer.lastName
// // // // // // // // // //                                                                         ? `${customer.firstName} ${customer.lastName}`
// // // // // // // // // //                                                                         : customer.username}
// // // // // // // // // //                                                                 </div>

// // // // // // // // // //                                                             </div>
// // // // // // // // // //                                                         </div>
// // // // // // // // // //                                                     </td>
// // // // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // // //                                                         <div className="flex items-center">
// // // // // // // // // //                                                             <Mail className="h-4 w-4 text-gray-400 mr-2" />
// // // // // // // // // //                                                             <a href={`mailto:${customer.email}`} className="hover:text-red-600">
// // // // // // // // // //                                                                 {customer.email}
// // // // // // // // // //                                                             </a>
// // // // // // // // // //                                                         </div>
// // // // // // // // // //                                                     </td>
// // // // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // // //                                                         {customer.company || "-"}
// // // // // // // // // //                                                     </td>
// // // // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // // //                                                         <span
// // // // // // // // // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${customer.role === "admin"
// // // // // // // // // //                                                                 ? "bg-purple-100 text-purple-800"
// // // // // // // // // //                                                                 : "bg-green-100 text-green-800"
// // // // // // // // // //                                                                 }`}
// // // // // // // // // //                                                         >
// // // // // // // // // //                                                             {customer.role}
// // // // // // // // // //                                                         </span>
// // // // // // // // // //                                                     </td>
// // // // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // // //                                                         {new Date(customer.createdAt).toLocaleDateString()}
// // // // // // // // // //                                                     </td>
// // // // // // // // // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // // // // // //                                                         <div className="flex items-center justify-end space-x-3">
// // // // // // // // // //                                                             <Link
// // // // // // // // // //                                                                 to={`/admin/customers/${customer.id}`}
// // // // // // // // // //                                                                 className="text-gray-600 hover:text-gray-900"
// // // // // // // // // //                                                             >

// // // // // // // // // //                                                             </Link>
// // // // // // // // // //                                                             <Link
// // // // // // // // // //                                                                 to={`/admin/customers/edit/${customer.id}`}
// // // // // // // // // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // // // // // // // // //                                                             >
// // // // // // // // // //                                                                 <Edit className="h-5 w-5" />
// // // // // // // // // //                                                             </Link>
// // // // // // // // // //                                                             <button
// // // // // // // // // //                                                                 type="button"
// // // // // // // // // //                                                                 className="text-red-600 hover:text-red-900"
// // // // // // // // // //                                                                 onClick={() => handleDeleteClick(customer)}
// // // // // // // // // //                                                             >
// // // // // // // // // //                                                                 <Trash2 className="h-5 w-5" />
// // // // // // // // // //                                                             </button>
// // // // // // // // // //                                                         </div>
// // // // // // // // // //                                                     </td>
// // // // // // // // // //                                                 </tr>
// // // // // // // // // //                                             ))}
// // // // // // // // // //                                         </tbody>
// // // // // // // // // //                                     </table>
// // // // // // // // // //                                 )}
// // // // // // // // // //                             </div>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 </div>

// // // // // // // // // //                 {/* Pagination */}
// // // // // // // // // //                 {!loading && !error && totalPages > 1 && (
// // // // // // // // // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // // // // // //                         <div className="flex flex-1 justify-between sm:hidden">
// // // // // // // // // //                             <button
// // // // // // // // // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // // // //                                 disabled={currentPage === 1}
// // // // // // // // // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // // // // // //                             >
// // // // // // // // // //                                 Previous
// // // // // // // // // //                             </button>
// // // // // // // // // //                             <button
// // // // // // // // // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // // // //                                 disabled={currentPage === totalPages}
// // // // // // // // // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // // // // // //                             >
// // // // // // // // // //                                 Next
// // // // // // // // // //                             </button>
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // // // // // //                             <div>
// // // // // // // // // //                                 <p className="text-sm text-gray-700">
// // // // // // // // // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // // // // // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredCustomers.length)}</span> of{" "}
// // // // // // // // // //                                     <span className="font-medium">{filteredCustomers.length}</span> results
// // // // // // // // // //                                 </p>
// // // // // // // // // //                             </div>
// // // // // // // // // //                             <div>
// // // // // // // // // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // // // // // //                                     <button
// // // // // // // // // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // // // //                                         disabled={currentPage === 1}
// // // // // // // // // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // // // //                                     >
// // // // // // // // // //                                         <span className="sr-only">Previous</span>
// // // // // // // // // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // // // // // //                                     </button>
// // // // // // // // // //                                     {[...Array(totalPages).keys()].map((number) => (
// // // // // // // // // //                                         <button
// // // // // // // // // //                                             key={number + 1}
// // // // // // // // // //                                             onClick={() => paginate(number + 1)}
// // // // // // // // // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // // // // // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // // // // // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // // // //                                                 }`}
// // // // // // // // // //                                         >
// // // // // // // // // //                                             {number + 1}
// // // // // // // // // //                                         </button>
// // // // // // // // // //                                     ))}
// // // // // // // // // //                                     <button
// // // // // // // // // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // // // //                                         disabled={currentPage === totalPages}
// // // // // // // // // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // // // //                                     >
// // // // // // // // // //                                         <span className="sr-only">Next</span>
// // // // // // // // // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // // // // // //                                     </button>
// // // // // // // // // //                                 </nav>
// // // // // // // // // //                             </div>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 )}

// // // // // // // // // //                 {/* Delete Confirmation Modal */}
// // // // // // // // // //                 {showDeleteModal && (
// // // // // // // // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // // // // // // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // // // // // // // //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// // // // // // // // // //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// // // // // // // // // //                             </div>

// // // // // // // // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
// // // // // // // // // //                                 &#8203;
// // // // // // // // // //                             </span>

// // // // // // // // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // // // // // // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // // // // // // // //                                     <div className="sm:flex sm:items-start">
// // // // // // // // // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // // // // // // // // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // // // // // // // // //                                         </div>
// // // // // // // // // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // // // // // // // // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Customer</h3>
// // // // // // // // // //                                             <div className="mt-2">
// // // // // // // // // //                                                 <p className="text-sm text-gray-500">
// // // // // // // // // //                                                     Are you sure you want to delete this customer? This action cannot be undone.
// // // // // // // // // //                                                 </p>
// // // // // // // // // //                                             </div>
// // // // // // // // // //                                         </div>
// // // // // // // // // //                                     </div>
// // // // // // // // // //                                 </div>
// // // // // // // // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // // // // // // // //                                     <button
// // // // // // // // // //                                         type="button"
// // // // // // // // // //                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// // // // // // // // // //                                         onClick={confirmDelete}
// // // // // // // // // //                                     >
// // // // // // // // // //                                         Delete
// // // // // // // // // //                                     </button>
// // // // // // // // // //                                     <button
// // // // // // // // // //                                         type="button"
// // // // // // // // // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// // // // // // // // // //                                         onClick={() => setShowDeleteModal(false)}
// // // // // // // // // //                                     >
// // // // // // // // // //                                         Cancel
// // // // // // // // // //                                     </button>
// // // // // // // // // //                                 </div>
// // // // // // // // // //                             </div>
// // // // // // // // // //                         </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                 )}
// // // // // // // // // //             </div>
// // // // // // // // // //         </AdminLayout>
// // // // // // // // // //     )
// // // // // // // // // // }

// // // // // // // // // // export default AdminCustomers


// // // // // // // // // "use client"

// // // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // // import { Search, Filter, ChevronLeft, ChevronRight, Edit, Trash2, UserPlus, Mail } from "lucide-react";
// // // // // // // // // import AdminLayout from "../../components/admin/AdminLayout";
// // // // // // // // // import axios from "axios";
// // // // // // // // // import { toast } from "react-toastify";

// // // // // // // // // const AdminCustomers = () => {
// // // // // // // // //     const [customers, setCustomers] = useState([]);
// // // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // // //     const [error, setError] = useState(null);
// // // // // // // // //     const [searchQuery, setSearchQuery] = useState("");
// // // // // // // // //     const [roleFilter, setRoleFilter] = useState("all");
// // // // // // // // //     const [currentPage, setCurrentPage] = useState(1);
// // // // // // // // //     const [itemsPerPage] = useState(10);
// // // // // // // // //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// // // // // // // // //     const [customerToDelete, setCustomerToDelete] = useState(null);
// // // // // // // // //     const [sortBy, setSortBy] = useState("newest");

// // // // // // // // //     useEffect(() => {
// // // // // // // // //         const loadCustomers = async () => {
// // // // // // // // //             setLoading(true);
// // // // // // // // //             try {
// // // // // // // // //                 const response = await axios.get(`${process.env.REACT_APP_API_URL}/customers`);
// // // // // // // // //                 setCustomers(response.data);
// // // // // // // // //                 setError(null);
// // // // // // // // //             } catch (err) {
// // // // // // // // //                 console.error("Error loading customers:", err);
// // // // // // // // //                 setError("Failed to load customers. Please try again later.");
// // // // // // // // //                 setCustomers([]);
// // // // // // // // //             } finally {
// // // // // // // // //                 setLoading(false);
// // // // // // // // //             }
// // // // // // // // //         };

// // // // // // // // //         loadCustomers();
// // // // // // // // //     }, []);

// // // // // // // // //     const filteredCustomers = customers.filter((customer) => {
// // // // // // // // //         const matchesSearch =
// // // // // // // // //             customer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // //             customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // //             customer.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // //             customer.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // //             customer.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // // //             customer.phone?.toLowerCase().includes(searchQuery.toLowerCase());

// // // // // // // // //         const matchesRole = roleFilter === "all" || customer.role === roleFilter;

// // // // // // // // //         return matchesSearch && matchesRole;
// // // // // // // // //     });

// // // // // // // // //     const sortedCustomers = [...filteredCustomers].sort((a, b) => {
// // // // // // // // //         switch (sortBy) {
// // // // // // // // //             case "name-asc":
// // // // // // // // //                 return (a.firstName || a.username).localeCompare(b.firstName || b.username);
// // // // // // // // //             case "name-desc":
// // // // // // // // //                 return (b.firstName || b.username).localeCompare(a.firstName || a.username);
// // // // // // // // //             case "email-asc":
// // // // // // // // //                 return a.email.localeCompare(b.email);
// // // // // // // // //             case "email-desc":
// // // // // // // // //                 return b.email.localeCompare(a.email);
// // // // // // // // //             case "newest":
// // // // // // // // //                 return new Date(b.createdAt) - new Date(a.createdAt);
// // // // // // // // //             case "oldest":
// // // // // // // // //                 return new Date(a.createdAt) - new Date(b.createdAt);
// // // // // // // // //             default:
// // // // // // // // //                 return 0;
// // // // // // // // //         }
// // // // // // // // //     });

// // // // // // // // //     const indexOfLastItem = currentPage * itemsPerPage;
// // // // // // // // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // // // // // // // //     const currentItems = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem);
// // // // // // // // //     const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage);

// // // // // // // // //     const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // // // // // // // //     const handleDeleteClick = (customer) => {
// // // // // // // // //         setCustomerToDelete(customer);
// // // // // // // // //         setShowDeleteModal(true);
// // // // // // // // //     };

// // // // // // // // //     const confirmDelete = async () => {
// // // // // // // // //         if (!customerToDelete) return;

// // // // // // // // //         try {
// // // // // // // // //             const token = localStorage.getItem("token");
// // // // // // // // //             await axios.delete(`${process.env.REACT_APP_API_URL}/customers/${customerToDelete._id}`, {
// // // // // // // // //                 headers: { Authorization: `Bearer ${token}` },
// // // // // // // // //             });

// // // // // // // // //             setCustomers(customers.filter((c) => c._id !== customerToDelete._id));
// // // // // // // // //             setShowDeleteModal(false);
// // // // // // // // //             setCustomerToDelete(null);
// // // // // // // // //             toast.success("Customer deleted successfully");
// // // // // // // // //         } catch (err) {
// // // // // // // // //             console.error("Error deleting customer:", err);
// // // // // // // // //             toast.error("Failed to delete customer");
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     return (
// // // // // // // // //         <AdminLayout>
// // // // // // // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // // // // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // // // // // // // //                     <div>
// // // // // // // // //                         <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
// // // // // // // // //                         <p className="mt-2 text-sm text-gray-700">A list of all customers and admins in your system.</p>
// // // // // // // // //                     </div>
// // // // // // // // //                     <div className="mt-4 sm:mt-0 flex space-x-3">
// // // // // // // // //                         <Link
// // // // // // // // //                             to="/admin/customers/new"
// // // // // // // // //                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
// // // // // // // // //                         >
// // // // // // // // //                             <UserPlus className="-ml-1 mr-2 h-4 w-4" />
// // // // // // // // //                             Add Admin
// // // // // // // // //                         </Link>
// // // // // // // // //                     </div>
// // // // // // // // //                 </div>

// // // // // // // // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // // // // // // // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // // // // // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // // // // // //                             <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
// // // // // // // // //                         </div>
// // // // // // // // //                         <input
// // // // // // // // //                             type="text"
// // // // // // // // //                             value={searchQuery}
// // // // // // // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // // //                             className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
// // // // // // // // //                             placeholder="Search customers..."
// // // // // // // // //                         />
// // // // // // // // //                     </div>

// // // // // // // // //                     <div className="flex flex-col sm:flex-row gap-4">
// // // // // // // // //                         <div className="relative max-w-xs w-full">
// // // // // // // // //                             <select
// // // // // // // // //                                 value={roleFilter}
// // // // // // // // //                                 onChange={(e) => setRoleFilter(e.target.value)}
// // // // // // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // // // //                             >
// // // // // // // // //                                 <option value="all">All Roles</option>
// // // // // // // // //                                 <option value="customer">Customer</option>
// // // // // // // // //                                 <option value="admin">Admin</option>
// // // // // // // // //                             </select>
// // // // // // // // //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // // // // //                                 <Filter className="h-4 w-4" />
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>

// // // // // // // // //                         <div className="relative max-w-xs w-full">
// // // // // // // // //                             <select
// // // // // // // // //                                 value={sortBy}
// // // // // // // // //                                 onChange={(e) => setSortBy(e.target.value)}
// // // // // // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // // // //                             >
// // // // // // // // //                                 <option value="newest">Newest</option>
// // // // // // // // //                                 <option value="oldest">Oldest</option>
// // // // // // // // //                                 <option value="name-asc">Name (A-Z)</option>
// // // // // // // // //                                 <option value="name-desc">Name (Z-A)</option>
// // // // // // // // //                                 <option value="email-asc">Email (A-Z)</option>
// // // // // // // // //                                 <option value="email-desc">Email (Z-A)</option>
// // // // // // // // //                             </select>
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>
// // // // // // // // //                 </div>

// // // // // // // // //                 <div className="mt-8 flex flex-col">
// // // // // // // // //                     <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// // // // // // // // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // // // // //                             <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // // // // //                                 {loading ? (
// // // // // // // // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // // // // // // // //                                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // // // // // // //                                     </div>
// // // // // // // // //                                 ) : error ? (
// // // // // // // // //                                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
// // // // // // // // //                                 ) : currentItems.length === 0 ? (
// // // // // // // // //                                     <div className="text-center py-12 bg-white">
// // // // // // // // //                                         <p className="text-gray-500">No customers found.</p>
// // // // // // // // //                                     </div>
// // // // // // // // //                                 ) : (
// // // // // // // // //                                     <table className="min-w-full divide-y divide-gray-300">
// // // // // // // // //                                         <thead className="bg-gray-50">
// // // // // // // // //                                             <tr>
// // // // // // // // //                                                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
// // // // // // // // //                                                     Name
// // // // // // // // //                                                 </th>
// // // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // //                                                     Email
// // // // // // // // //                                                 </th>
// // // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // //                                                     Phone
// // // // // // // // //                                                 </th>
// // // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // //                                                     Company
// // // // // // // // //                                                 </th>
// // // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // //                                                     Role
// // // // // // // // //                                                 </th>
// // // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // // //                                                     Joined
// // // // // // // // //                                                 </th>
// // // // // // // // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // // // // // //                                                     <span className="sr-only">Actions</span>
// // // // // // // // //                                                 </th>
// // // // // // // // //                                             </tr>
// // // // // // // // //                                         </thead>
// // // // // // // // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // // // // // // // //                                             {currentItems.map((customer) => (
// // // // // // // // //                                                 <tr key={customer._id}>
// // // // // // // // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // // // // // // // //                                                         <div className="flex items-center">
// // // // // // // // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // // // // // // // //                                                                 <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
// // // // // // // // //                                                                     {customer.firstName?.charAt(0) || customer.username?.charAt(0) || "C"}
// // // // // // // // //                                                                 </div>
// // // // // // // // //                                                             </div>
// // // // // // // // //                                                             <div className="ml-4">
// // // // // // // // //                                                                 <div className="font-medium text-gray-900">
// // // // // // // // //                                                                     {customer.firstName && customer.lastName
// // // // // // // // //                                                                         ? `${customer.firstName} ${customer.lastName}`
// // // // // // // // //                                                                         : customer.username}
// // // // // // // // //                                                                 </div>
// // // // // // // // //                                                             </div>
// // // // // // // // //                                                         </div>
// // // // // // // // //                                                     </td>
// // // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // //                                                         <div className="flex items-center">
// // // // // // // // //                                                             <Mail className="h-4 w-4 text-gray-400 mr-2" />
// // // // // // // // //                                                             <a href={`mailto:${customer.email}`} className="hover:text-red-600">
// // // // // // // // //                                                                 {customer.email}
// // // // // // // // //                                                             </a>
// // // // // // // // //                                                         </div>
// // // // // // // // //                                                     </td>
// // // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // //                                                         {customer.phone || "-"}
// // // // // // // // //                                                     </td>
// // // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // //                                                         {customer.company || "-"}
// // // // // // // // //                                                     </td>
// // // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // //                                                         <span
// // // // // // // // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${customer.role === "admin"
// // // // // // // // //                                                                 ? "bg-purple-100 text-purple-800"
// // // // // // // // //                                                                 : "bg-green-100 text-green-800"
// // // // // // // // //                                                                 }`}
// // // // // // // // //                                                         >
// // // // // // // // //                                                             {customer.role}
// // // // // // // // //                                                         </span>
// // // // // // // // //                                                     </td>
// // // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // // //                                                         {new Date(customer.createdAt).toLocaleDateString()}
// // // // // // // // //                                                     </td>
// // // // // // // // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // // // // //                                                         <div className="flex items-center justify-end space-x-3">
// // // // // // // // //                                                             <Link
// // // // // // // // //                                                                 to={`/admin/customers/edit/${customer._id}`}
// // // // // // // // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // // // // // // // //                                                             >
// // // // // // // // //                                                                 <Edit className="h-5 w-5" />
// // // // // // // // //                                                             </Link>
// // // // // // // // //                                                             <button
// // // // // // // // //                                                                 type="button"
// // // // // // // // //                                                                 className="text-red-600 hover:text-red-900"
// // // // // // // // //                                                                 onClick={() => handleDeleteClick(customer)}
// // // // // // // // //                                                             >
// // // // // // // // //                                                                 <Trash2 className="h-5 w-5" />
// // // // // // // // //                                                             </button>
// // // // // // // // //                                                         </div>
// // // // // // // // //                                                     </td>
// // // // // // // // //                                                 </tr>
// // // // // // // // //                                             ))}
// // // // // // // // //                                         </tbody>
// // // // // // // // //                                     </table>
// // // // // // // // //                                 )}
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>
// // // // // // // // //                 </div>

// // // // // // // // //                 {!loading && !error && totalPages > 1 && (
// // // // // // // // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // // // // //                         <div className="flex flex-1 justify-between sm:hidden">
// // // // // // // // //                             <button
// // // // // // // // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // // //                                 disabled={currentPage === 1}
// // // // // // // // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // // // // //                             >
// // // // // // // // //                                 Previous
// // // // // // // // //                             </button>
// // // // // // // // //                             <button
// // // // // // // // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // // //                                 disabled={currentPage === totalPages}
// // // // // // // // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // // // // //                             >
// // // // // // // // //                                 Next
// // // // // // // // //                             </button>
// // // // // // // // //                         </div>
// // // // // // // // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // // // // //                             <div>
// // // // // // // // //                                 <p className="text-sm text-gray-700">
// // // // // // // // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // // // // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredCustomers.length)}</span> of{" "}
// // // // // // // // //                                     <span className="font-medium">{filteredCustomers.length}</span> results
// // // // // // // // //                                 </p>
// // // // // // // // //                             </div>
// // // // // // // // //                             <div>
// // // // // // // // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // // // // //                                     <button
// // // // // // // // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // // //                                         disabled={currentPage === 1}
// // // // // // // // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // // // // //                                     >
// // // // // // // // //                                         <span className="sr-only">Previous</span>
// // // // // // // // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // // // // //                                     </button>
// // // // // // // // //                                     {[...Array(totalPages).keys()].map((number) => (
// // // // // // // // //                                         <button
// // // // // // // // //                                             key={number + 1}
// // // // // // // // //                                             onClick={() => paginate(number + 1)}
// // // // // // // // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // // // // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // // // // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // // //                                                 }`}
// // // // // // // // //                                         >
// // // // // // // // //                                             {number + 1}
// // // // // // // // //                                         </button>
// // // // // // // // //                                     ))}
// // // // // // // // //                                     <button
// // // // // // // // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // // //                                         disabled={currentPage === totalPages}
// // // // // // // // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // // // // //                                     >
// // // // // // // // //                                         <span className="sr-only">Next</span>
// // // // // // // // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // // // // //                                     </button>
// // // // // // // // //                                 </nav>
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>
// // // // // // // // //                 )}

// // // // // // // // //                 {showDeleteModal && (
// // // // // // // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // // // // // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // // // // // // //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// // // // // // // // //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// // // // // // // // //                             </div>
// // // // // // // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
// // // // // // // // //                                 &#8203;
// // // // // // // // //                             </span>
// // // // // // // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // // // // // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // // // // // // //                                     <div className="sm:flex sm:items-start">
// // // // // // // // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // // // // // // // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // // // // // // // //                                         </div>
// // // // // // // // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // // // // // // // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Customer</h3>
// // // // // // // // //                                             <div className="mt-2">
// // // // // // // // //                                                 <p className="text-sm text-gray-500">
// // // // // // // // //                                                     Are you sure you want to delete this customer? This action cannot be undone.
// // // // // // // // //                                                 </p>
// // // // // // // // //                                             </div>
// // // // // // // // //                                         </div>
// // // // // // // // //                                     </div>
// // // // // // // // //                                 </div>
// // // // // // // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // // // // // // //                                     <button
// // // // // // // // //                                         type="button"
// // // // // // // // //                                         className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-300"
// // // // // // // // //                                         onClick={confirmDelete}
// // // // // // // // //                                     >
// // // // // // // // //                                         Delete
// // // // // // // // //                                     </button>
// // // // // // // // //                                     <button
// // // // // // // // //                                         type="button"
// // // // // // // // //                                         className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition duration-300"
// // // // // // // // //                                         onClick={() => setShowDeleteModal(false)}
// // // // // // // // //                                     >
// // // // // // // // //                                         Cancel
// // // // // // // // //                                     </button>
// // // // // // // // //                                 </div>
// // // // // // // // //                             </div>
// // // // // // // // //                         </div>
// // // // // // // // //                     </div>
// // // // // // // // //                 )}
// // // // // // // // //             </div>
// // // // // // // // //         </AdminLayout>
// // // // // // // // //     );
// // // // // // // // // };

// // // // // // // // // export default AdminCustomers;


// // // // // // // // "use client"

// // // // // // // // import { useState, useEffect } from "react";
// // // // // // // // import { Link } from "react-router-dom";
// // // // // // // // import { Search, Filter, ChevronLeft, ChevronRight, Edit, Trash2, UserPlus, Mail } from "lucide-react";
// // // // // // // // import AdminLayout from "../../components/admin/AdminLayout";
// // // // // // // // import axios from "axios";
// // // // // // // // import { toast } from "react-toastify";

// // // // // // // // const AdminCustomers = () => {
// // // // // // // //     const [users, setUsers] = useState([]);
// // // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // // //     const [error, setError] = useState(null);
// // // // // // // //     const [searchQuery, setSearchQuery] = useState("");
// // // // // // // //     const [roleFilter, setRoleFilter] = useState("all");
// // // // // // // //     const [currentPage, setCurrentPage] = useState(1);
// // // // // // // //     const [itemsPerPage] = useState(10);
// // // // // // // //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// // // // // // // //     const [userToDelete, setUserToDelete] = useState(null);
// // // // // // // //     const [sortBy, setSortBy] = useState("newest");

// // // // // // // //     useEffect(() => {
// // // // // // // //         const loadUsers = async () => {
// // // // // // // //             setLoading(true);
// // // // // // // //             try {
// // // // // // // //                 const token = localStorage.getItem("token");
// // // // // // // //                 const response = await axios.get(`${process.env.REACT_APP_API_URL}/users`, {
// // // // // // // //                     headers: { Authorization: `Bearer ${token}` },
// // // // // // // //                 });
// // // // // // // //                 setUsers(response.data);
// // // // // // // //                 setError(null);
// // // // // // // //             } catch (err) {
// // // // // // // //                 console.error("Error loading users:", err);
// // // // // // // //                 setError("Failed to load users. Please try again later.");
// // // // // // // //                 setUsers([]);
// // // // // // // //             } finally {
// // // // // // // //                 setLoading(false);
// // // // // // // //             }
// // // // // // // //         };

// // // // // // // //         loadUsers();
// // // // // // // //     }, []);

// // // // // // // //     const filteredUsers = users.filter((user) => {
// // // // // // // //         const matchesSearch =
// // // // // // // //             user.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // //             user.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // //             user.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // //             user.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // //             user.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // // //             user.phone?.toLowerCase().includes(searchQuery.toLowerCase());

// // // // // // // //         const matchesRole = roleFilter === "all" || user.role === roleFilter;

// // // // // // // //         return matchesSearch && matchesRole;
// // // // // // // //     });

// // // // // // // //     const sortedUsers = [...filteredUsers].sort((a, b) => {
// // // // // // // //         switch (sortBy) {
// // // // // // // //             case "name-asc":
// // // // // // // //                 return (a.firstName || a.username).localeCompare(b.firstName || b.username);
// // // // // // // //             case "name-desc":
// // // // // // // //                 return (b.firstName || b.username).localeCompare(a.firstName || a.username);
// // // // // // // //             case "email-asc":
// // // // // // // //                 return a.email.localeCompare(b.email);
// // // // // // // //             case "email-desc":
// // // // // // // //                 return b.email.localeCompare(a.email);
// // // // // // // //             case "newest":
// // // // // // // //                 return new Date(b.createdAt) - new Date(a.createdAt);
// // // // // // // //             case "oldest":
// // // // // // // //                 return new Date(a.createdAt) - new Date(b.createdAt);
// // // // // // // //             default:
// // // // // // // //                 return 0;
// // // // // // // //         }
// // // // // // // //     });

// // // // // // // //     const indexOfLastItem = currentPage * itemsPerPage;
// // // // // // // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // // // // // // //     const currentItems = sortedUsers.slice(indexOfFirstItem, indexOfLastItem);
// // // // // // // //     const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);

// // // // // // // //     const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // // // // // // //     const handleDeleteClick = (user) => {
// // // // // // // //         setUserToDelete(user);
// // // // // // // //         setShowDeleteModal(true);
// // // // // // // //     };

// // // // // // // //     const confirmDelete = async () => {
// // // // // // // //         if (!userToDelete) return;

// // // // // // // //         try {
// // // // // // // //             const token = localStorage.getItem("token");
// // // // // // // //             await axios.delete(`${process.env.REACT_APP_API_URL}/users/${userToDelete._id}`, {
// // // // // // // //                 headers: { Authorization: `Bearer ${token}` },
// // // // // // // //             });

// // // // // // // //             setUsers(users.filter((u) => u._id !== userToDelete._id));
// // // // // // // //             setShowDeleteModal(false);
// // // // // // // //             setUserToDelete(null);
// // // // // // // //             toast.success("User deleted successfully");
// // // // // // // //         } catch (err) {
// // // // // // // //             console.error("Error deleting user:", err);
// // // // // // // //             toast.error("Failed to delete user");
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <AdminLayout>
// // // // // // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // // // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // // // // // // //                     <div>
// // // // // // // //                         <h1 className="text-3xl font-bold text-gray-900">Users</h1>
// // // // // // // //                         <p className="mt-2 text-sm text-gray-700">A list of all users and admins in your system.</p>
// // // // // // // //                     </div>
// // // // // // // //                     <div className="mt-4 sm:mt-0 flex space-x-3">
// // // // // // // //                         <Link
// // // // // // // //                             to="/admin/users/new"
// // // // // // // //                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
// // // // // // // //                         >
// // // // // // // //                             <UserPlus className="-ml-1 mr-2 h-4 w-4" />
// // // // // // // //                             Add Admin
// // // // // // // //                         </Link>
// // // // // // // //                     </div>
// // // // // // // //                 </div>

// // // // // // // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // // // // // // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // // // // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // // // // //                             <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
// // // // // // // //                         </div>
// // // // // // // //                         <input
// // // // // // // //                             type="text"
// // // // // // // //                             value={searchQuery}
// // // // // // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // // //                             className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
// // // // // // // //                             placeholder="Search users..."
// // // // // // // //                         />
// // // // // // // //                     </div>

// // // // // // // //                     <div className="flex flex-col sm:flex-row gap-4">
// // // // // // // //                         <div className="relative max-w-xs w-full">
// // // // // // // //                             <select
// // // // // // // //                                 value={roleFilter}
// // // // // // // //                                 onChange={(e) => setRoleFilter(e.target.value)}
// // // // // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // // //                             >
// // // // // // // //                                 <option value="all">All Roles</option>
// // // // // // // //                                 <option value="user">User</option>
// // // // // // // //                                 <option value="admin">Admin</option>
// // // // // // // //                             </select>
// // // // // // // //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // // // //                                 <Filter className="h-4 w-4" />
// // // // // // // //                             </div>
// // // // // // // //                         </div>

// // // // // // // //                         <div className="relative max-w-xs w-full">
// // // // // // // //                             <select
// // // // // // // //                                 value={sortBy}
// // // // // // // //                                 onChange={(e) => setSortBy(e.target.value)}
// // // // // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // // //                             >
// // // // // // // //                                 <option value="newest">Newest</option>
// // // // // // // //                                 <option value="oldest">Oldest</option>
// // // // // // // //                                 <option value="name-asc">Name (A-Z)</option>
// // // // // // // //                                 <option value="name-desc">Name (Z-A)</option>
// // // // // // // //                                 <option value="email-asc">Email (A-Z)</option>
// // // // // // // //                                 <option value="email-desc">Email (Z-A)</option>
// // // // // // // //                             </select>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 </div>

// // // // // // // //                 <div className="mt-8 flex flex-col">
// // // // // // // //                     <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// // // // // // // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // // // //                             <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // // // //                                 {loading ? (
// // // // // // // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // // // // // // //                                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // // // // // //                                     </div>
// // // // // // // //                                 ) : error ? (
// // // // // // // //                                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
// // // // // // // //                                 ) : currentItems.length === 0 ? (
// // // // // // // //                                     <div className="text-center py-12 bg-white">
// // // // // // // //                                         <p className="text-gray-500">No users found.</p>
// // // // // // // //                                     </div>
// // // // // // // //                                 ) : (
// // // // // // // //                                     <table className="min-w-full divide-y divide-gray-300">
// // // // // // // //                                         <thead className="bg-gray-50">
// // // // // // // //                                             <tr>
// // // // // // // //                                                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
// // // // // // // //                                                     Name
// // // // // // // //                                                 </th>
// // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // //                                                     Email
// // // // // // // //                                                 </th>
// // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // //                                                     Phone
// // // // // // // //                                                 </th>
// // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // //                                                     Company
// // // // // // // //                                                 </th>
// // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // //                                                     Role
// // // // // // // //                                                 </th>
// // // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // // //                                                     Joined
// // // // // // // //                                                 </th>
// // // // // // // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // // // // //                                                     <span className="sr-only">Actions</span>
// // // // // // // //                                                 </th>
// // // // // // // //                                             </tr>
// // // // // // // //                                         </thead>
// // // // // // // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // // // // // // //                                             {currentItems.map((user) => (
// // // // // // // //                                                 <tr key={user._id}>
// // // // // // // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // // // // // // //                                                         <div className="flex items-center">
// // // // // // // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // // // // // // //                                                                 <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
// // // // // // // //                                                                     {user.firstName?.charAt(0) || user.username?.charAt(0) || "U"}
// // // // // // // //                                                                 </div>
// // // // // // // //                                                             </div>
// // // // // // // //                                                             <div className="ml-4">
// // // // // // // //                                                                 <div className="font-medium text-gray-900">
// // // // // // // //                                                                     {user.firstName && user.lastName
// // // // // // // //                                                                         ? `${user.firstName} ${user.lastName}`
// // // // // // // //                                                                         : user.username}
// // // // // // // //                                                                 </div>
// // // // // // // //                                                             </div>
// // // // // // // //                                                         </div>
// // // // // // // //                                                     </td>
// // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // //                                                         <div className="flex items-center">
// // // // // // // //                                                             <Mail className="h-4 w-4 text-gray-400 mr-2" />
// // // // // // // //                                                             <a href={`mailto:${user.email}`} className="hover:text-red-600">
// // // // // // // //                                                                 {user.email}
// // // // // // // //                                                             </a>
// // // // // // // //                                                         </div>
// // // // // // // //                                                     </td>
// // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // //                                                         {user.phone || "-"}
// // // // // // // //                                                     </td>
// // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // //                                                         {user.company || "-"}
// // // // // // // //                                                     </td>
// // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // //                                                         <span
// // // // // // // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${user.role === "admin"
// // // // // // // //                                                                 ? "bg-purple-100 text-purple-800"
// // // // // // // //                                                                 : "bg-green-100 text-green-800"
// // // // // // // //                                                                 }`}
// // // // // // // //                                                         >
// // // // // // // //                                                             {user.role}
// // // // // // // //                                                         </span>
// // // // // // // //                                                     </td>
// // // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // // //                                                         {new Date(user.createdAt).toLocaleDateString()}
// // // // // // // //                                                     </td>
// // // // // // // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // // // //                                                         <div className="flex items-center justify-end space-x-3">
// // // // // // // //                                                             <Link
// // // // // // // //                                                                 to={`/admin/users/edit/${user._id}`}
// // // // // // // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // // // // // // //                                                             >
// // // // // // // //                                                                 <Edit className="h-5 w-5" />
// // // // // // // //                                                             </Link>
// // // // // // // //                                                             <button
// // // // // // // //                                                                 type="button"
// // // // // // // //                                                                 className="text-red-600 hover:text-red-900"
// // // // // // // //                                                                 onClick={() => handleDeleteClick(user)}
// // // // // // // //                                                             >
// // // // // // // //                                                                 <Trash2 className="h-5 w-5" />
// // // // // // // //                                                             </button>
// // // // // // // //                                                         </div>
// // // // // // // //                                                     </td>
// // // // // // // //                                                 </tr>
// // // // // // // //                                             ))}
// // // // // // // //                                         </tbody>
// // // // // // // //                                     </table>
// // // // // // // //                                 )}
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 </div>

// // // // // // // //                 {!loading && !error && totalPages > 1 && (
// // // // // // // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // // // //                         <div className="flex flex-1 justify-between sm:hidden">
// // // // // // // //                             <button
// // // // // // // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // //                                 disabled={currentPage === 1}
// // // // // // // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // // // //                             >
// // // // // // // //                                 Previous
// // // // // // // //                             </button>
// // // // // // // //                             <button
// // // // // // // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // //                                 disabled={currentPage === totalPages}
// // // // // // // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // // // //                             >
// // // // // // // //                                 Next
// // // // // // // //                             </button>
// // // // // // // //                         </div>
// // // // // // // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // // // //                             <div>
// // // // // // // //                                 <p className="text-sm text-gray-700">
// // // // // // // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // // // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredUsers.length)}</span> of{" "}
// // // // // // // //                                     <span className="font-medium">{filteredUsers.length}</span> results
// // // // // // // //                                 </p>
// // // // // // // //                             </div>
// // // // // // // //                             <div>
// // // // // // // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // // // //                                     <button
// // // // // // // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // // //                                         disabled={currentPage === 1}
// // // // // // // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // // // //                                     >
// // // // // // // //                                         <span className="sr-only">Previous</span>
// // // // // // // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // // // //                                     </button>
// // // // // // // //                                     {[...Array(totalPages).keys()].map((number) => (
// // // // // // // //                                         <button
// // // // // // // //                                             key={number + 1}
// // // // // // // //                                             onClick={() => paginate(number + 1)}
// // // // // // // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // // // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // // // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // // //                                                 }`}
// // // // // // // //                                         >
// // // // // // // //                                             {number + 1}
// // // // // // // //                                         </button>
// // // // // // // //                                     ))}
// // // // // // // //                                     <button
// // // // // // // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // // //                                         disabled={currentPage === totalPages}
// // // // // // // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // // // //                                     >
// // // // // // // //                                         <span className="sr-only">Next</span>
// // // // // // // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // // // //                                     </button>
// // // // // // // //                                 </nav>
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 )}

// // // // // // // //                 {showDeleteModal && (
// // // // // // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // // // // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // // // // // //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// // // // // // // //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// // // // // // // //                             </div>
// // // // // // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

// // // // // // // //                             </span>
// // // // // // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // // // // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // // // // // //                                     <div className="sm:flex sm:items-start">
// // // // // // // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // // // // // // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // // // // // // //                                         </div>
// // // // // // // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // // // // // // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete User</h3>
// // // // // // // //                                             <div className="mt-2">
// // // // // // // //                                                 <p className="text-sm text-gray-500">
// // // // // // // //                                                     Are you sure you want to delete this user? This action cannot be undone.
// // // // // // // //                                                 </p>
// // // // // // // //                                             </div>
// // // // // // // //                                         </div>
// // // // // // // //                                     </div>
// // // // // // // //                                 </div>
// // // // // // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // // // // // //                                     <button
// // // // // // // //                                         type="button"
// // // // // // // //                                         className="w-full inline-flex justify-center rounded-lg border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm transition duration-300"
// // // // // // // //                                         onClick={confirmDelete}
// // // // // // // //                                     >
// // // // // // // //                                         Delete
// // // // // // // //                                     </button>
// // // // // // // //                                     <button
// // // // // // // //                                         type="button"
// // // // // // // //                                         className="mt-3 w-full inline-flex justify-center rounded-lg border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm transition duration-300"
// // // // // // // //                                         onClick={() => setShowDeleteModal(false)}
// // // // // // // //                                     >
// // // // // // // //                                         Cancel
// // // // // // // //                                     </button>
// // // // // // // //                                 </div>
// // // // // // // //                             </div>
// // // // // // // //                         </div>
// // // // // // // //                     </div>
// // // // // // // //                 )}
// // // // // // // //             </div>
// // // // // // // //         </AdminLayout>
// // // // // // // //     );
// // // // // // // // };

// // // // // // // // export default AdminCustomers;

// // // // // // // "use client"
// // // // // // // import { useState, useEffect } from "react";
// // // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // // import { Search, Filter, ChevronLeft, ChevronRight, Edit, Trash2, UserPlus, Mail, RefreshCw, Download } from "lucide-react";
// // // // // // // import AdminLayout from "../../components/admin/AdminLayout";
// // // // // // // import { fetchAllUsers, deleteUser } from "../../services/api";
// // // // // // // import { toast } from "react-toastify";

// // // // // // // const AdminCustomers = () => {
// // // // // // //     const [customers, setCustomers] = useState([]);
// // // // // // //     const [loading, setLoading] = useState(true);
// // // // // // //     const [error, setError] = useState(null);
// // // // // // //     const [searchQuery, setSearchQuery] = useState("");
// // // // // // //     const [roleFilter, setRoleFilter] = useState("all");
// // // // // // //     const [currentPage, setCurrentPage] = useState(1);
// // // // // // //     const [itemsPerPage] = useState(10);
// // // // // // //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// // // // // // //     const [customerToDelete, setCustomerToDelete] = useState(null);
// // // // // // //     const [sortBy, setSortBy] = useState("newest");
// // // // // // //     const navigate = useNavigate();

// // // // // // //     useEffect(() => {
// // // // // // //         const loadCustomers = async () => {
// // // // // // //             setLoading(true);
// // // // // // //             try {
// // // // // // //                 const token = localStorage.getItem("token");
// // // // // // //                 const data = await fetchAllUsers(token);
// // // // // // //                 setCustomers(data);
// // // // // // //                 setError(null);
// // // // // // //             } catch (err) {
// // // // // // //                 console.error("Error loading customers:", err);
// // // // // // //                 setError("Failed to load customers. Please try again later.");
// // // // // // //                 setCustomers([]);
// // // // // // //             } finally {
// // // // // // //                 setLoading(false);
// // // // // // //             }
// // // // // // //         };

// // // // // // //         loadCustomers();
// // // // // // //     }, []);

// // // // // // //     // Filter customers based on search query and role
// // // // // // //     const filteredCustomers = customers.filter((customer) => {
// // // // // // //         const matchesSearch =
// // // // // // //             (customer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // //                 customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // //                 customer.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // //                 customer.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // //                 customer.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // // //                 customer.phone?.toLowerCase().includes(searchQuery.toLowerCase()));

// // // // // // //         const matchesRole = roleFilter === "all" || customer.role === roleFilter;

// // // // // // //         return matchesSearch && matchesRole;
// // // // // // //     });

// // // // // // //     // Sort customers
// // // // // // //     const sortedCustomers = [...filteredCustomers].sort((a, b) => {
// // // // // // //         switch (sortBy) {
// // // // // // //             case "name-asc":
// // // // // // //                 return (a.firstName || a.username).localeCompare(b.firstName || b.username);
// // // // // // //             case "name-desc":
// // // // // // //                 return (b.firstName || b.username).localeCompare(a.firstName || a.username);
// // // // // // //             case "email-asc":
// // // // // // //                 return a.email.localeCompare(b.email);
// // // // // // //             case "email-desc":
// // // // // // //                 return b.email.localeCompare(a.email);
// // // // // // //             case "newest":
// // // // // // //                 return new Date(b.createdAt) - new Date(a.createdAt);
// // // // // // //             case "oldest":
// // // // // // //                 return new Date(a.createdAt) - new Date(b.createdAt);
// // // // // // //             default:
// // // // // // //                 return 0;
// // // // // // //         }
// // // // // // //     });

// // // // // // //     // Pagination
// // // // // // //     const indexOfLastItem = currentPage * itemsPerPage;
// // // // // // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // // // // // //     const currentItems = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem);
// // // // // // //     const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage);

// // // // // // //     const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // // // // // //     const handleDeleteClick = (customer) => {
// // // // // // //         setCustomerToDelete(customer);
// // // // // // //         setShowDeleteModal(true);
// // // // // // //     };

// // // // // // //     const confirmDelete = async () => {
// // // // // // //         if (!customerToDelete) return;

// // // // // // //         try {
// // // // // // //             const token = localStorage.getItem("token");
// // // // // // //             await deleteUser(customerToDelete.id, token);

// // // // // // //             setCustomers(customers.filter((c) => c.id !== customerToDelete.id));
// // // // // // //             setShowDeleteModal(false);
// // // // // // //             setCustomerToDelete(null);
// // // // // // //             toast.success("Customer deleted successfully");
// // // // // // //         } catch (err) {
// // // // // // //             console.error("Error deleting customer:", err);
// // // // // // //             toast.error("Failed to delete customer");
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const exportCustomers = () => {
// // // // // // //         toast.info("Exporting customers...");
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <AdminLayout>
// // // // // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // // // // // //                     <div>
// // // // // // //                         <p className="mt-2 text-3xl text-gray-900">Customers</p>
// // // // // // //                         <p className="mt-2 text-sm text-gray-700">A list of all customers in your system.</p>
// // // // // // //                     </div>
// // // // // // //                     <div className="mt-4 sm:mt-0 flex space-x-3">
// // // // // // //                         <button
// // // // // // //                             onClick={exportCustomers}
// // // // // // //                             className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // // // // //                         >
// // // // // // //                             <Download className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
// // // // // // //                             Export
// // // // // // //                         </button>
// // // // // // //                         <Link
// // // // // // //                             to="/admin/customers/new"
// // // // // // //                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // // // // //                         >
// // // // // // //                             <UserPlus className="-ml-1 mr-2 h-4 w-4" />
// // // // // // //                             Add Admin
// // // // // // //                         </Link>
// // // // // // //                     </div>
// // // // // // //                 </div>

// // // // // // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // // // // // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // // // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // // // //                             <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
// // // // // // //                         </div>
// // // // // // //                         <input
// // // // // // //                             type="text"
// // // // // // //                             value={searchQuery}
// // // // // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // // //                             className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
// // // // // // //                             placeholder="Search customers..."
// // // // // // //                         />
// // // // // // //                     </div>

// // // // // // //                     <div className="flex flex-col sm:flex-row gap-4">
// // // // // // //                         <div className="relative max-w-xs w-full">
// // // // // // //                             <select
// // // // // // //                                 value={roleFilter}
// // // // // // //                                 onChange={(e) => setRoleFilter(e.target.value)}
// // // // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // //                             >
// // // // // // //                                 <option value="all">All Roles</option>
// // // // // // //                                 <option value="user">Customer</option>
// // // // // // //                                 <option value="admin">Admin</option>
// // // // // // //                             </select>
// // // // // // //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // // //                                 <Filter className="h-4 w-4" />
// // // // // // //                             </div>
// // // // // // //                         </div>

// // // // // // //                         <div className="relative max-w-xs w-full">
// // // // // // //                             <select
// // // // // // //                                 value={sortBy}
// // // // // // //                                 onChange={(e) => setSortBy(e.target.value)}
// // // // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // // //                             >
// // // // // // //                                 <option value="newest">Newest</option>
// // // // // // //                                 <option value="oldest">Oldest</option>
// // // // // // //                                 <option value="name-asc">Name (A-Z)</option>
// // // // // // //                                 <option value="name-desc">Name (Z-A)</option>
// // // // // // //                                 <option value="email-asc">Email (A-Z)</option>
// // // // // // //                                 <option value="email-desc">Email (Z-A)</option>
// // // // // // //                             </select>
// // // // // // //                         </div>
// // // // // // //                     </div>
// // // // // // //                 </div>

// // // // // // //                 <div className="mt-8 flex flex-col">
// // // // // // //                     <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// // // // // // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // // //                             <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // // //                                 {loading ? (
// // // // // // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // // // // // //                                         <RefreshCw className="animate-spin h-8 w-8 text-red-600" />
// // // // // // //                                     </div>
// // // // // // //                                 ) : error ? (
// // // // // // //                                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
// // // // // // //                                 ) : currentItems.length === 0 ? (
// // // // // // //                                     <div className="text-center py-12 bg-white">
// // // // // // //                                         <p className="text-gray-500">No customers found.</p>
// // // // // // //                                     </div>
// // // // // // //                                 ) : (
// // // // // // //                                     <table className="min-w-full divide-y divide-gray-300">
// // // // // // //                                         <thead className="bg-gray-50">
// // // // // // //                                             <tr>
// // // // // // //                                                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
// // // // // // //                                                     Customer
// // // // // // //                                                 </th>
// // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // //                                                     Email
// // // // // // //                                                 </th>
// // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // //                                                     Phone
// // // // // // //                                                 </th>
// // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // //                                                     Company
// // // // // // //                                                 </th>
// // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // //                                                     Role
// // // // // // //                                                 </th>
// // // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // // //                                                     Joined
// // // // // // //                                                 </th>
// // // // // // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // // // //                                                     <span className="sr-only">Actions</span>
// // // // // // //                                                 </th>
// // // // // // //                                             </tr>
// // // // // // //                                         </thead>
// // // // // // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // // // // // //                                             {currentItems.map((customer) => (
// // // // // // //                                                 <tr key={customer.id}>
// // // // // // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // // // // // //                                                         <div className="flex items-center">
// // // // // // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // // // // // //                                                                 <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
// // // // // // //                                                                     {customer.firstName?.charAt(0) || customer.username?.charAt(0) || "U"}
// // // // // // //                                                                 </div>
// // // // // // //                                                             </div>
// // // // // // //                                                             <div className="ml-4">
// // // // // // //                                                                 <div className="font-medium text-gray-900">
// // // // // // //                                                                     {customer.firstName && customer.lastName
// // // // // // //                                                                         ? `${customer.firstName} ${customer.lastName}`
// // // // // // //                                                                         : customer.username}
// // // // // // //                                                                 </div>
// // // // // // //                                                             </div>
// // // // // // //                                                         </div>
// // // // // // //                                                     </td>
// // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // //                                                         <div className="flex items-center">
// // // // // // //                                                             <Mail className="h-4 w-4 text-gray-400 mr-2" />
// // // // // // //                                                             <a href={`mailto:${customer.email}`} className="hover:text-red-600">
// // // // // // //                                                                 {customer.email}
// // // // // // //                                                             </a>
// // // // // // //                                                         </div>
// // // // // // //                                                     </td>
// // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // //                                                         {customer.phone || "-"}
// // // // // // //                                                     </td>
// // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // //                                                         {customer.company || "-"}
// // // // // // //                                                     </td>
// // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // //                                                         <span
// // // // // // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${customer.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"
// // // // // // //                                                                 }`}
// // // // // // //                                                         >
// // // // // // //                                                             {customer.role}
// // // // // // //                                                         </span>
// // // // // // //                                                     </td>
// // // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // // //                                                         {new Date(customer.createdAt).toLocaleDateString()}
// // // // // // //                                                     </td>
// // // // // // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // // //                                                         <div className="flex items-center justify-end space-x-3">
// // // // // // //                                                             <Link
// // // // // // //                                                                 to={`/admin/customers/edit/${customer.id}`}
// // // // // // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // // // // // //                                                             >
// // // // // // //                                                                 <Edit className="h-5 w-5" />
// // // // // // //                                                             </Link>
// // // // // // //                                                             <button
// // // // // // //                                                                 type="button"
// // // // // // //                                                                 className="text-red-600 hover:text-red-900"
// // // // // // //                                                                 onClick={() => handleDeleteClick(customer)}
// // // // // // //                                                             >
// // // // // // //                                                                 <Trash2 className="h-5 w-5" />
// // // // // // //                                                             </button>
// // // // // // //                                                         </div>
// // // // // // //                                                     </td>
// // // // // // //                                                 </tr>
// // // // // // //                                             ))}
// // // // // // //                                         </tbody>
// // // // // // //                                     </table>
// // // // // // //                                 )}
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                     </div>
// // // // // // //                 </div>

// // // // // // //                 {/* Pagination */}
// // // // // // //                 {!loading && !error && totalPages > 1 && (
// // // // // // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // // //                         <div className="flex flex-1 justify-between sm:hidden">
// // // // // // //                             <button
// // // // // // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // //                                 disabled={currentPage === 1}
// // // // // // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // // //                             >
// // // // // // //                                 Previous
// // // // // // //                             </button>
// // // // // // //                             <button
// // // // // // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // //                                 disabled={currentPage === totalPages}
// // // // // // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // // //                             >
// // // // // // //                                 Next
// // // // // // //                             </button>
// // // // // // //                         </div>
// // // // // // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // // //                             <div>
// // // // // // //                                 <p className="text-sm text-gray-700">
// // // // // // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredCustomers.length)}</span> of{" "}
// // // // // // //                                     <span className="font-medium">{filteredCustomers.length}</span> results
// // // // // // //                                 </p>
// // // // // // //                             </div>
// // // // // // //                             <div>
// // // // // // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // // //                                     <button
// // // // // // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // // //                                         disabled={currentPage === 1}
// // // // // // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // // //                                     >
// // // // // // //                                         <span className="sr-only">Previous</span>
// // // // // // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // // //                                     </button>
// // // // // // //                                     {[...Array(totalPages).keys()].map((number) => (
// // // // // // //                                         <button
// // // // // // //                                             key={number + 1}
// // // // // // //                                             onClick={() => paginate(number + 1)}
// // // // // // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // // //                                                 }`}
// // // // // // //                                         >
// // // // // // //                                             {number + 1}
// // // // // // //                                         </button>
// // // // // // //                                     ))}
// // // // // // //                                     <button
// // // // // // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // // //                                         disabled={currentPage === totalPages}
// // // // // // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // // //                                     >
// // // // // // //                                         <span className="sr-only">Next</span>
// // // // // // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // // //                                     </button>
// // // // // // //                                 </nav>
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                     </div>
// // // // // // //                 )}

// // // // // // //                 {/* Delete Confirmation Modal */}
// // // // // // //                 {showDeleteModal && (
// // // // // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // // // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // // // // //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// // // // // // //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// // // // // // //                             </div>
// // // // // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

// // // // // // //                             </span>
// // // // // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // // // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // // // // //                                     <div className="sm:flex sm:items-start">
// // // // // // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // // // // // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // // // // // //                                         </div>
// // // // // // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // // // // // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Customer</h3>
// // // // // // //                                             <div className="mt-2">
// // // // // // //                                                 <p className="text-sm text-gray-500">
// // // // // // //                                                     Are you sure you want to delete this customer? This action cannot be undone.
// // // // // // //                                                 </p>
// // // // // // //                                             </div>
// // // // // // //                                         </div>
// // // // // // //                                     </div>
// // // // // // //                                 </div>
// // // // // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // // // // //                                     <button
// // // // // // //                                         type="button"
// // // // // // //                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// // // // // // //                                         onClick={confirmDelete}
// // // // // // //                                     >
// // // // // // //                                         Delete
// // // // // // //                                     </button>
// // // // // // //                                     <button
// // // // // // //                                         type="button"
// // // // // // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// // // // // // //                                         onClick={() => setShowDeleteModal(false)}
// // // // // // //                                     >
// // // // // // //                                         Cancel
// // // // // // //                                     </button>
// // // // // // //                                 </div>
// // // // // // //                             </div>
// // // // // // //                         </div>
// // // // // // //                     </div>
// // // // // // //                 )}
// // // // // // //             </div>
// // // // // // //         </AdminLayout>
// // // // // // //     );
// // // // // // // };

// // // // // // // export default AdminCustomers;


// // // // // // "use client"
// // // // // // import { useState, useEffect } from "react";
// // // // // // import { Link, useNavigate } from "react-router-dom";
// // // // // // import { Search, Filter, ChevronLeft, ChevronRight, Edit, Trash2, UserPlus, Mail, RefreshCw, Download } from "lucide-react";
// // // // // // import AdminLayout from "../../components/admin/AdminLayout";
// // // // // // import { fetchAllUsers, deleteUser } from "../../services/api";
// // // // // // import { toast } from "react-toastify";

// // // // // // const AdminCustomers = () => {
// // // // // //     const [customers, setCustomers] = useState([]);
// // // // // //     const [loading, setLoading] = useState(true);
// // // // // //     const [error, setError] = useState(null);
// // // // // //     const [searchQuery, setSearchQuery] = useState("");
// // // // // //     const [roleFilter, setRoleFilter] = useState("all");
// // // // // //     const [currentPage, setCurrentPage] = useState(1);
// // // // // //     const [itemsPerPage] = useState(10);
// // // // // //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// // // // // //     const [customerToDelete, setCustomerToDelete] = useState(null);
// // // // // //     const [sortBy, setSortBy] = useState("newest");
// // // // // //     const navigate = useNavigate();

// // // // // //     useEffect(() => {
// // // // // //         const loadCustomers = async () => {
// // // // // //             setLoading(true);
// // // // // //             try {
// // // // // //                 const token = localStorage.getItem("token");
// // // // // //                 const data = await fetchAllUsers(token);
// // // // // //                 setCustomers(data);
// // // // // //                 setError(null);
// // // // // //             } catch (err) {
// // // // // //                 console.error("Error loading customers:", err);
// // // // // //                 setError("Failed to load customers. Please try again later.");
// // // // // //                 setCustomers([]);
// // // // // //             } finally {
// // // // // //                 setLoading(false);
// // // // // //             }
// // // // // //         };

// // // // // //         loadCustomers();
// // // // // //     }, []);

// // // // // //     // Filter customers based on search query and role
// // // // // //     const filteredCustomers = customers.filter((customer) => {
// // // // // //         const matchesSearch =
// // // // // //             (customer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //                 customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //                 customer.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //                 customer.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //                 customer.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //                 customer.phone?.toLowerCase().includes(searchQuery.toLowerCase()));

// // // // // //         const matchesRole = roleFilter === "all" || customer.role === roleFilter;

// // // // // //         return matchesSearch && matchesRole;
// // // // // //     });

// // // // // //     // Sort customers
// // // // // //     const sortedCustomers = [...filteredCustomers].sort((a, b) => {
// // // // // //         switch (sortBy) {
// // // // // //             case "name-asc":
// // // // // //                 return (a.firstName || a.username).localeCompare(b.firstName || b.username);
// // // // // //             case "name-desc":
// // // // // //                 return (b.firstName || b.username).localeCompare(a.firstName || a.username);
// // // // // //             case "email-asc":
// // // // // //                 return a.email.localeCompare(b.email);
// // // // // //             case "email-desc":
// // // // // //                 return b.email.localeCompare(a.email);
// // // // // //             case "newest":
// // // // // //                 return new Date(b.createdAt) - new Date(a.createdAt);
// // // // // //             case "oldest":
// // // // // //                 return new Date(a.createdAt) - new Date(b.createdAt);
// // // // // //             default:
// // // // // //                 return 0;
// // // // // //         }
// // // // // //     });

// // // // // //     // Pagination
// // // // // //     const indexOfLastItem = currentPage * itemsPerPage;
// // // // // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // // // // //     const currentItems = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem);
// // // // // //     const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage);

// // // // // //     const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // // // // //     const handleDeleteClick = (customer) => {
// // // // // //         setCustomerToDelete(customer);
// // // // // //         setShowDeleteModal(true);
// // // // // //     };

// // // // // //     const confirmDelete = async () => {
// // // // // //         if (!customerToDelete) return;

// // // // // //         try {
// // // // // //             const token = localStorage.getItem("token");
// // // // // //             await deleteUser(customerToDelete.id, token);

// // // // // //             setCustomers(customers.filter((c) => c.id !== customerToDelete.id));
// // // // // //             setShowDeleteModal(false);
// // // // // //             setCustomerToDelete(null);
// // // // // //             toast.success("Customer deleted successfully");
// // // // // //         } catch (err) {
// // // // // //             console.error("Error deleting customer:", err);
// // // // // //             toast.error("Failed to delete customer");
// // // // // //         }
// // // // // //     };

// // // // // //     const exportCustomers = () => {
// // // // // //         toast.info("Exporting customers...");
// // // // // //     };

// // // // // //     return (
// // // // // //         <AdminLayout>
// // // // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // // // // //                     <div>
// // // // // //                         <p className="mt-2 text-3xl text-gray-900">Customers</p>
// // // // // //                         <p className="mt-2 text-sm text-gray-700">A list of all customers in your system.</p>
// // // // // //                     </div>
// // // // // //                     <div className="mt-4 sm:mt-0 flex space-x-3">
// // // // // //                         <button
// // // // // //                             onClick={exportCustomers}
// // // // // //                             className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // // // //                         >
// // // // // //                             <Download className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
// // // // // //                             Export
// // // // // //                         </button>
// // // // // //                         <Link
// // // // // //                             to="/admin/customers/new"
// // // // // //                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // // // //                         >
// // // // // //                             <UserPlus className="-ml-1 mr-2 h-4 w-4" />
// // // // // //                             Add Admin
// // // // // //                         </Link>
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // // // // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // // //                             <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
// // // // // //                         </div>
// // // // // //                         <input
// // // // // //                             type="text"
// // // // // //                             value={searchQuery}
// // // // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // //                             className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
// // // // // //                             placeholder="Search customers..."
// // // // // //                         />
// // // // // //                     </div>

// // // // // //                     <div className="flex flex-col sm:flex-row gap-4">
// // // // // //                         <div className="relative max-w-xs w-full">
// // // // // //                             <select
// // // // // //                                 value={roleFilter}
// // // // // //                                 onChange={(e) => setRoleFilter(e.target.value)}
// // // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // //                             >
// // // // // //                                 <option value="all">All Roles</option>
// // // // // //                                 <option value="user">Customer</option>
// // // // // //                                 <option value="admin">Admin</option>
// // // // // //                             </select>
// // // // // //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // //                                 <Filter className="h-4 w-4" />
// // // // // //                             </div>
// // // // // //                         </div>

// // // // // //                         <div className="relative max-w-xs w-full">
// // // // // //                             <select
// // // // // //                                 value={sortBy}
// // // // // //                                 onChange={(e) => setSortBy(e.target.value)}
// // // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // //                             >
// // // // // //                                 <option value="newest">Newest</option>
// // // // // //                                 <option value="oldest">Oldest</option>
// // // // // //                                 <option value="name-asc">Name (A-Z)</option>
// // // // // //                                 <option value="name-desc">Name (Z-A)</option>
// // // // // //                                 <option value="email-asc">Email (A-Z)</option>
// // // // // //                                 <option value="email-desc">Email (Z-A)</option>
// // // // // //                             </select>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 <div className="mt-8 flex flex-col">
// // // // // //                     <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// // // // // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // //                             <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // //                                 {loading ? (
// // // // // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // // // // //                                         <RefreshCw className="animate-spin h-8 w-8 text-red-600" />
// // // // // //                                     </div>
// // // // // //                                 ) : error ? (
// // // // // //                                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
// // // // // //                                 ) : currentItems.length === 0 ? (
// // // // // //                                     <div className="text-center py-12 bg-white">
// // // // // //                                         <p className="text-gray-500">No customers found.</p>
// // // // // //                                     </div>
// // // // // //                                 ) : (
// // // // // //                                     <table className="min-w-full divide-y divide-gray-300">
// // // // // //                                         <thead className="bg-gray-50">
// // // // // //                                             <tr>
// // // // // //                                                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
// // // // // //                                                     Customer
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // //                                                     Email
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // //                                                     Phone
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // //                                                     Company
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // //                                                     Role
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // //                                                     Joined
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // // //                                                     <span className="sr-only">Actions</span>
// // // // // //                                                 </th>
// // // // // //                                             </tr>
// // // // // //                                         </thead>
// // // // // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // // // // //                                             {currentItems.map((customer) => (
// // // // // //                                                 <tr key={customer.id}>
// // // // // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // // // // //                                                         <div className="flex items-center">
// // // // // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // // // // //                                                                 <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
// // // // // //                                                                     {customer.firstName?.charAt(0) || customer.username?.charAt(0) || "U"}
// // // // // //                                                                 </div>
// // // // // //                                                             </div>
// // // // // //                                                             <div className="ml-4">
// // // // // //                                                                 <div className="font-medium text-gray-900">
// // // // // //                                                                     {customer.firstName && customer.lastName
// // // // // //                                                                         ? `${customer.firstName} ${customer.lastName}`
// // // // // //                                                                         : customer.username}
// // // // // //                                                                 </div>
// // // // // //                                                             </div>
// // // // // //                                                         </div>
// // // // // //                                                     </td>
// // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // //                                                         <div className="flex items-center">
// // // // // //                                                             <Mail className="h-4 w-4 text-gray-400 mr-2" />
// // // // // //                                                             <a href={`mailto:${customer.email}`} className="hover:text-red-600">
// // // // // //                                                                 {customer.email}
// // // // // //                                                             </a>
// // // // // //                                                         </div>
// // // // // //                                                     </td>
// // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // //                                                         {customer.phone || "-"}
// // // // // //                                                     </td>
// // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // //                                                         {customer.company || "-"}
// // // // // //                                                     </td>
// // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // //                                                         <span
// // // // // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${customer.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"
// // // // // //                                                                 }`}
// // // // // //                                                         >
// // // // // //                                                             {customer.role}
// // // // // //                                                         </span>
// // // // // //                                                     </td>
// // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // //                                                         {new Date(customer.createdAt).toLocaleDateString()}
// // // // // //                                                     </td>
// // // // // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // //                                                         <div className="flex items-center justify-end space-x-3">
// // // // // //                                                             <Link
// // // // // //                                                                 to={`/admin/customers/edit/${customer.id}`}
// // // // // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // // // // //                                                             >
// // // // // //                                                                 <Edit className="h-5 w-5" />
// // // // // //                                                             </Link>
// // // // // //                                                             <button
// // // // // //                                                                 type="button"
// // // // // //                                                                 className="text-red-600 hover:text-red-900"
// // // // // //                                                                 onClick={() => handleDeleteClick(customer)}
// // // // // //                                                             >
// // // // // //                                                                 <Trash2 className="h-5 w-5" />
// // // // // //                                                             </button>
// // // // // //                                                         </div>
// // // // // //                                                     </td>
// // // // // //                                                 </tr>
// // // // // //                                             ))}
// // // // // //                                         </tbody>
// // // // // //                                     </table>
// // // // // //                                 )}
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 {/* Pagination */}
// // // // // //                 {!loading && !error && totalPages > 1 && (
// // // // // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // //                         <div className="flex flex-1 justify-between sm:hidden">
// // // // // //                             <button
// // // // // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // //                                 disabled={currentPage === 1}
// // // // // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // //                             >
// // // // // //                                 Previous
// // // // // //                             </button>
// // // // // //                             <button
// // // // // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // //                                 disabled={currentPage === totalPages}
// // // // // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // // //                             >
// // // // // //                                 Next
// // // // // //                             </button>
// // // // // //                         </div>
// // // // // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // //                             <div>
// // // // // //                                 <p className="text-sm text-gray-700">
// // // // // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredCustomers.length)}</span> of{" "}
// // // // // //                                     <span className="font-medium">{filteredCustomers.length}</span> results
// // // // // //                                 </p>
// // // // // //                             </div>
// // // // // //                             <div>
// // // // // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // //                                     <button
// // // // // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // //                                         disabled={currentPage === 1}
// // // // // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // //                                     >
// // // // // //                                         <span className="sr-only">Previous</span>
// // // // // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // //                                     </button>
// // // // // //                                     {[...Array(totalPages).keys()].map((number) => (
// // // // // //                                         <button
// // // // // //                                             key={number + 1}
// // // // // //                                             onClick={() => paginate(number + 1)}
// // // // // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // //                                                 }`}
// // // // // //                                         >
// // // // // //                                             {number + 1}
// // // // // //                                         </button>
// // // // // //                                     ))}
// // // // // //                                     <button
// // // // // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // //                                         disabled={currentPage === totalPages}
// // // // // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // // //                                     >
// // // // // //                                         <span className="sr-only">Next</span>
// // // // // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // //                                     </button>
// // // // // //                                 </nav>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 )}

// // // // // //                 {/* Delete Confirmation Modal */}
// // // // // //                 {showDeleteModal && (
// // // // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // // // //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// // // // // //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// // // // // //                             </div>
// // // // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

// // // // // //                             </span>
// // // // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // // // //                                     <div className="sm:flex sm:items-start">
// // // // // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // // // // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // // // // //                                         </div>
// // // // // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // // // // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Customer</h3>
// // // // // //                                             <div className="mt-2">
// // // // // //                                                 <p className="text-sm text-gray-500">
// // // // // //                                                     Are you sure you want to delete this customer? This action cannot be undone.
// // // // // //                                                 </p>
// // // // // //                                             </div>
// // // // // //                                         </div>
// // // // // //                                     </div>
// // // // // //                                 </div>
// // // // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // // // //                                     <button
// // // // // //                                         type="button"
// // // // // //                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// // // // // //                                         onClick={confirmDelete}
// // // // // //                                     >
// // // // // //                                         Delete
// // // // // //                                     </button>
// // // // // //                                     <button
// // // // // //                                         type="button"
// // // // // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// // // // // //                                         onClick={() => setShowDeleteModal(false)}
// // // // // //                                     >
// // // // // //                                         Cancel
// // // // // //                                     </button>
// // // // // //                                 </div>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 )}
// // // // // //             </div>
// // // // // //         </AdminLayout>
// // // // // //     );
// // // // // // };

// // // // // // export default AdminCustomers;

// // // // // "use client"
// // // // // import { useState, useEffect } from "react"
// // // // // import { Link } from "react-router-dom"
// // // // // import { Search, Filter, ChevronLeft, ChevronRight, Edit, Trash2, UserPlus, Mail, RefreshCw, Download } from "lucide-react"
// // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // import { fetchAllUsers, deleteUser } from "../../services/api"
// // // // // import { toast } from "react-toastify"

// // // // // const AdminCustomers = () => {
// // // // //     const [customers, setCustomers] = useState([])
// // // // //     const [loading, setLoading] = useState(true)
// // // // //     const [error, setError] = useState(null)
// // // // //     const [searchQuery, setSearchQuery] = useState("")
// // // // //     const [roleFilter, setRoleFilter] = useState("all")
// // // // //     const [currentPage, setCurrentPage] = useState(1)
// // // // //     const [itemsPerPage] = useState(10)
// // // // //     const [showDeleteModal, setShowDeleteModal] = useState(false)
// // // // //     const [customerToDelete, setCustomerToDelete] = useState(null)
// // // // //     const [sortBy, setSortBy] = useState("newest")

// // // // //     useEffect(() => {
// // // // //         const loadCustomers = async () => {
// // // // //             setLoading(true)
// // // // //             try {
// // // // //                 const data = await fetchAllUsers()
// // // // //                 setCustomers(data)
// // // // //                 setError(null)
// // // // //             } catch (err) {
// // // // //                 console.error("Error loading customers:", err)
// // // // //                 setError("Failed to load customers. Please try again later.")
// // // // //                 setCustomers([])
// // // // //             } finally {
// // // // //                 setLoading(false)
// // // // //             }
// // // // //         }

// // // // //         loadCustomers()
// // // // //     }, [])

// // // // //     // Filter customers based on search query and role
// // // // //     const filteredCustomers = customers.filter((customer) => {
// // // // //         const matchesSearch =
// // // // //             customer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //             customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //             customer.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //             customer.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //             customer.company?.toLowerCase().includes(searchQuery.toLowerCase())

// // // // //         const matchesRole = roleFilter === "all" || customer.role === roleFilter

// // // // //         return matchesSearch && matchesRole
// // // // //     })

// // // // //     // Sort customers
// // // // //     const sortedCustomers = [...filteredCustomers].sort((a, b) => {
// // // // //         switch (sortBy) {
// // // // //             case "name-asc":
// // // // //                 return (a.firstName || a.username).localeCompare(b.firstName || b.username)
// // // // //             case "name-desc":
// // // // //                 return (b.firstName || b.username).localeCompare(a.firstName || a.username)
// // // // //             case "email-asc":
// // // // //                 return a.email.localeCompare(b.email)
// // // // //             case "email-desc":
// // // // //                 return b.email.localeCompare(a.email)
// // // // //             case "newest":
// // // // //                 return new Date(b.createdAt) - new Date(a.createdAt)
// // // // //             case "oldest":
// // // // //                 return new Date(a.createdAt) - new Date(b.createdAt)
// // // // //             default:
// // // // //                 return 0
// // // // //         }
// // // // //     })

// // // // //     // Pagination
// // // // //     const indexOfLastItem = currentPage * itemsPerPage
// // // // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // // // //     const currentItems = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem)
// // // // //     const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage)

// // // // //     const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // // // //     const handleDeleteClick = (customer) => {
// // // // //         setCustomerToDelete(customer)
// // // // //         setShowDeleteModal(true)
// // // // //     }

// // // // //     const confirmDelete = async () => {
// // // // //         if (!customerToDelete) return

// // // // //         try {
// // // // //             await deleteUser(customerToDelete.id)
// // // // //             setCustomers(customers.filter((c) => c.id !== customerToDelete.id))
// // // // //             setShowDeleteModal(false)
// // // // //             setCustomerToDelete(null)
// // // // //             toast.success("Customer deleted successfully")
// // // // //         } catch (err) {
// // // // //             console.error("Error deleting customer:", err)
// // // // //             toast.error("Failed to delete customer")
// // // // //         }
// // // // //     }

// // // // //     const exportCustomers = () => {
// // // // //         toast.info("Exporting customers...")
// // // // //     }

// // // // //     return (
// // // // //         <AdminLayout>
// // // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // // // //                     <div>
// // // // //                         <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
// // // // //                         <p className="mt-2 text-sm text-gray-700">A list of all customers in your system.</p>
// // // // //                     </div>
// // // // //                     <div className="mt-4 sm:mt-0 flex space-x-3">
// // // // //                         <button
// // // // //                             onClick={exportCustomers}
// // // // //                             className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // // //                         >
// // // // //                             <Download className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
// // // // //                             Export
// // // // //                         </button>
// // // // //                         <Link
// // // // //                             to="/admin/customers/new"
// // // // //                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // // //                         >
// // // // //                             <UserPlus className="-ml-1 mr-2 h-4 w-4" />
// // // // //                             Add Admin
// // // // //                         </Link>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // // // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // //                             <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
// // // // //                         </div>
// // // // //                         <input
// // // // //                             type="text"
// // // // //                             value={searchQuery}
// // // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // // //                             className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
// // // // //                             placeholder="Search customers..."
// // // // //                         />
// // // // //                     </div>

// // // // //                     <div className="flex flex-col sm:flex-row gap-4">
// // // // //                         <div className="relative max-w-xs w-full">
// // // // //                             <select
// // // // //                                 value={roleFilter}
// // // // //                                 onChange={(e) => setRoleFilter(e.target.value)}
// // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // //                             >
// // // // //                                 <option value="all">All Roles</option>
// // // // //                                 <option value="user">Customer</option>
// // // // //                                 <option value="admin">Admin</option>
// // // // //                             </select>
// // // // //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // //                                 <Filter className="h-4 w-4" />
// // // // //                             </div>
// // // // //                         </div>

// // // // //                         <div className="relative max-w-xs w-full">
// // // // //                             <select
// // // // //                                 value={sortBy}
// // // // //                                 onChange={(e) => setSortBy(e.target.value)}
// // // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // //                             >
// // // // //                                 <option value="newest">Newest</option>
// // // // //                                 <option value="oldest">Oldest</option>
// // // // //                                 <option value="name-asc">Name (A-Z)</option>
// // // // //                                 <option value="name-desc">Name (Z-A)</option>
// // // // //                                 <option value="email-asc">Email (A-Z)</option>
// // // // //                                 <option value="email-desc">Email (Z-A)</option>
// // // // //                             </select>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 <div className="mt-8 flex flex-col">
// // // // //                     <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// // // // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // //                             <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // //                                 {loading ? (
// // // // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // // // //                                         <RefreshCw className="animate-spin h-8 w-8 text-red-600" />
// // // // //                                     </div>
// // // // //                                 ) : error ? (
// // // // //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // // // //                                 ) : currentItems.length === 0 ? (
// // // // //                                     <div className="text-center py-12 bg-white">
// // // // //                                         <p className="text-gray-500">No customers found.</p>
// // // // //                                     </div>
// // // // //                                 ) : (
// // // // //                                     <table className="min-w-full divide-y divide-gray-300">
// // // // //                                         <thead className="bg-gray-50">
// // // // //                                             <tr>
// // // // //                                                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
// // // // //                                                     Name
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // //                                                     Email
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // //                                                     Phone
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // //                                                     Company
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // //                                                     Role
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // //                                                     Joined
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // //                                                     <span className="sr-only">Actions</span>
// // // // //                                                 </th>
// // // // //                                             </tr>
// // // // //                                         </thead>
// // // // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // // // //                                             {currentItems.map((customer) => (
// // // // //                                                 <tr key={customer.id}>
// // // // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // // // //                                                         <div className="flex items-center">
// // // // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // // // //                                                                 <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
// // // // //                                                                     {customer.firstName?.charAt(0) || customer.username?.charAt(0) || "C"}
// // // // //                                                                 </div>
// // // // //                                                             </div>
// // // // //                                                             <div className="ml-4">
// // // // //                                                                 <div className="font-medium text-gray-900">
// // // // //                                                                     {customer.firstName && customer.lastName
// // // // //                                                                         ? `${customer.firstName} ${customer.lastName}`
// // // // //                                                                         : customer.username}
// // // // //                                                                 </div>
// // // // //                                                             </div>
// // // // //                                                         </div>
// // // // //                                                     </td>
// // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // //                                                         <div className="flex items-center">
// // // // //                                                             <Mail className="h-4 w-4 text-gray-400 mr-2" />
// // // // //                                                             <a href={`mailto:${customer.email}`} className="hover:text-red-600">
// // // // //                                                                 {customer.email}
// // // // //                                                             </a>
// // // // //                                                         </div>
// // // // //                                                     </td>
// // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // //                                                         {customer.phone || "-"}
// // // // //                                                     </td>
// // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // //                                                         {customer.company || "-"}
// // // // //                                                     </td>
// // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // //                                                         <span
// // // // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${customer.role === "admin"
// // // // //                                                                 ? "bg-purple-100 text-purple-800"
// // // // //                                                                 : "bg-green-100 text-green-800"
// // // // //                                                                 }`}
// // // // //                                                         >
// // // // //                                                             {customer.role}
// // // // //                                                         </span>
// // // // //                                                     </td>
// // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // //                                                         {new Date(customer.createdAt).toLocaleDateString()}
// // // // //                                                     </td>
// // // // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // //                                                         <div className="flex items-center justify-end space-x-3">
// // // // //                                                             <Link
// // // // //                                                                 to={`/admin/customers/edit/${customer.id}`}
// // // // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // // // //                                                             >
// // // // //                                                                 <Edit className="h-5 w-5" />
// // // // //                                                             </Link>
// // // // //                                                             <button
// // // // //                                                                 type="button"
// // // // //                                                                 className="text-red-600 hover:text-red-900"
// // // // //                                                                 onClick={() => handleDeleteClick(customer)}
// // // // //                                                             >
// // // // //                                                                 <Trash2 className="h-5 w-5" />
// // // // //                                                             </button>
// // // // //                                                         </div>
// // // // //                                                     </td>
// // // // //                                                 </tr>
// // // // //                                             ))}
// // // // //                                         </tbody>
// // // // //                                     </table>
// // // // //                                 )}
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* Pagination */}
// // // // //                 {!loading && !error && totalPages > 1 && (
// // // // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // //                         <div className="flex flex-1 justify-between sm:hidden">
// // // // //                             <button
// // // // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // //                                 disabled={currentPage === 1}
// // // // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // //                             >
// // // // //                                 Previous
// // // // //                             </button>
// // // // //                             <button
// // // // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // //                                 disabled={currentPage === totalPages}
// // // // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // // //                             >
// // // // //                                 Next
// // // // //                             </button>
// // // // //                         </div>
// // // // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // //                             <div>
// // // // //                                 <p className="text-sm text-gray-700">
// // // // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredCustomers.length)}</span> of{" "}
// // // // //                                     <span className="font-medium">{filteredCustomers.length}</span> results
// // // // //                                 </p>
// // // // //                             </div>
// // // // //                             <div>
// // // // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // //                                     <button
// // // // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // //                                         disabled={currentPage === 1}
// // // // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // //                                     >
// // // // //                                         <span className="sr-only">Previous</span>
// // // // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // //                                     </button>
// // // // //                                     {[...Array(totalPages).keys()].map((number) => (
// // // // //                                         <button
// // // // //                                             key={number + 1}
// // // // //                                             onClick={() => paginate(number + 1)}
// // // // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // //                                                 }`}
// // // // //                                         >
// // // // //                                             {number + 1}
// // // // //                                         </button>
// // // // //                                     ))}
// // // // //                                     <button
// // // // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // //                                         disabled={currentPage === totalPages}
// // // // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // // //                                     >
// // // // //                                         <span className="sr-only">Next</span>
// // // // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // //                                     </button>
// // // // //                                 </nav>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 )}

// // // // //                 {/* Delete Confirmation Modal */}
// // // // //                 {showDeleteModal && (
// // // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // // //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// // // // //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// // // // //                             </div>

// // // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

// // // // //                             </span>

// // // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // // //                                     <div className="sm:flex sm:items-start">
// // // // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // // // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // // // //                                         </div>
// // // // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // // // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Customer</h3>
// // // // //                                             <div className="mt-2">
// // // // //                                                 <p className="text-sm text-gray-500">
// // // // //                                                     Are you sure you want to delete this customer? This action cannot be undone.
// // // // //                                                 </p>
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                     </div>
// // // // //                                 </div>
// // // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // // //                                     <button
// // // // //                                         type="button"
// // // // //                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// // // // //                                         onClick={confirmDelete}
// // // // //                                     >
// // // // //                                         Delete
// // // // //                                     </button>
// // // // //                                     <button
// // // // //                                         type="button"
// // // // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:w-auto sm:text-sm"
// // // // //                                         onClick={() => setShowDeleteModal(false)}
// // // // //                                     >
// // // // //                                         Cancel
// // // // //                                     </button>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 )}
// // // // //             </div>
// // // // //         </AdminLayout>
// // // // //     )
// // // // // }

// // // // // export default AdminCustomers


// // // // "use client"
// // // // import { useState, useEffect } from "react"
// // // // import { Link } from "react-router-dom"
// // // // import { Search, Filter, ChevronLeft, ChevronRight, Edit, Trash2, UserPlus, Mail, RefreshCw, Download } from "lucide-react"
// // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // import { fetchAllUsers, deleteUser } from "../../services/api"
// // // // import { toast } from "react-toastify"

// // // // const AdminCustomers = () => {
// // // //     const [customers, setCustomers] = useState([])
// // // //     const [loading, setLoading] = useState(true)
// // // //     const [error, setError] = useState(null)
// // // //     const [searchQuery, setSearchQuery] = useState("")
// // // //     const [roleFilter, setRoleFilter] = useState("all")
// // // //     const [currentPage, setCurrentPage] = useState(1)
// // // //     const [itemsPerPage] = useState(10)
// // // //     const [showDeleteModal, setShowDeleteModal] = useState(false)
// // // //     const [customerToDelete, setCustomerToDelete] = useState(null)
// // // //     const [sortBy, setSortBy] = useState("newest")

// // // //     useEffect(() => {
// // // //         const loadCustomers = async () => {
// // // //             setLoading(true)
// // // //             try {
// // // //                 const data = await fetchAllUsers()
// // // //                 setCustomers(data)
// // // //                 setError(null)
// // // //             } catch (err) {
// // // //                 console.error("Error loading customers:", err)
// // // //                 setError("Failed to load customers. Please try again later.")
// // // //                 setCustomers([])
// // // //             } finally {
// // // //                 setLoading(false)
// // // //             }
// // // //         }

// // // //         loadCustomers()
// // // //     }, [])

// // // //     // Filter customers based on search query and role
// // // //     const filteredCustomers = customers.filter((customer) => {
// // // //         const matchesSearch =
// // // //             customer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //             customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //             customer.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //             customer.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //             customer.company?.toLowerCase().includes(searchQuery.toLowerCase())

// // // //         const matchesRole = roleFilter === "all" || customer.role === roleFilter

// // // //         return matchesSearch && matchesRole
// // // //     })

// // // //     // Sort customers
// // // //     const sortedCustomers = [...filteredCustomers].sort((a, b) => {
// // // //         switch (sortBy) {
// // // //             case "name-asc":
// // // //                 return (a.firstName || a.username).localeCompare(b.firstName || b.username)
// // // //             case "name-desc":
// // // //                 return (b.firstName || b.username).localeCompare(a.firstName || a.username)
// // // //             case "email-asc":
// // // //                 return a.email.localeCompare(b.email)
// // // //             case "email-desc":
// // // //                 return b.email.localeCompare(a.email)
// // // //             case "newest":
// // // //                 return new Date(b.createdAt) - new Date(a.createdAt)
// // // //             case "oldest":
// // // //                 return new Date(a.createdAt) - new Date(b.createdAt)
// // // //             default:
// // // //                 return 0
// // // //         }
// // // //     })

// // // //     // Pagination
// // // //     const indexOfLastItem = currentPage * itemsPerPage
// // // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // // //     const currentItems = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem)
// // // //     const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage)

// // // //     const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // // //     const handleDeleteClick = (customer) => {
// // // //         setCustomerToDelete(customer)
// // // //         setShowDeleteModal(true)
// // // //     }

// // // //     const confirmDelete = async () => {
// // // //         if (!customerToDelete) return

// // // //         try {
// // // //             await deleteUser(customerToDelete.id)
// // // //             setCustomers(customers.filter((c) => c.id !== customerToDelete.id))
// // // //             setShowDeleteModal(false)
// // // //             setCustomerToDelete(null)
// // // //             toast.success("Customer deleted successfully")
// // // //         } catch (err) {
// // // //             console.error("Error deleting customer:", err)
// // // //             toast.error("Failed to delete customer")
// // // //         }
// // // //     }

// // // //     const exportCustomers = () => {
// // // //         toast.info("Exporting customers...")
// // // //     }

// // // //     return (
// // // //         <AdminLayout>
// // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // // //                     <div>
// // // //                         <h1 className="text-3xl font-bold text-gray-900">Customers</h1>
// // // //                         <p className="mt-2 text-sm text-gray-700">A list of all customers in your system.</p>
// // // //                     </div>
// // // //                     <div className="mt-4 sm:mt-0 flex space-x-3">
// // // //                         <button
// // // //                             onClick={exportCustomers}
// // // //                             className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // //                         >
// // // //                             <Download className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
// // // //                             Export
// // // //                         </button>
// // // //                         <Link
// // // //                             to="/admin/customers/new"
// // // //                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // //                         >
// // // //                             <UserPlus className="-ml-1 mr-2 h-4 w-4" />
// // // //                             Add Admin
// // // //                         </Link>
// // // //                     </div>
// // // //                 </div>

// // // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // //                             <Search className="h-5 w-5 text-gray-400" aria-hidden="true" />
// // // //                         </div>
// // // //                         <input
// // // //                             type="text"
// // // //                             value={searchQuery}
// // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // //                             className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
// // // //                             placeholder="Search customers..."
// // // //                         />
// // // //                     </div>

// // // //                     <div className="flex flex-col sm:flex-row gap-4">
// // // //                         <div className="relative max-w-xs w-full">
// // // //                             <select
// // // //                                 value={roleFilter}
// // // //                                 onChange={(e) => setRoleFilter(e.target.value)}
// // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // //                             >
// // // //                                 <option value="all">All Roles</option>
// // // //                                 <option value="user">Customer</option>
// // // //                                 <option value="admin">Admin</option>
// // // //                             </select>
// // // //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // //                                 <Filter className="h-4 w-4" />
// // // //                             </div>
// // // //                         </div>

// // // //                         <div className="relative max-w-xs w-full">
// // // //                             <select
// // // //                                 value={sortBy}
// // // //                                 onChange={(e) => setSortBy(e.target.value)}
// // // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // //                             >
// // // //                                 <option value="newest">Newest</option>
// // // //                                 <option value="oldest">Oldest</option>
// // // //                                 <option value="name-asc">Name (A-Z)</option>
// // // //                                 <option value="name-desc">Name (Z-A)</option>
// // // //                                 <option value="email-asc">Email (A-Z)</option>
// // // //                                 <option value="email-desc">Email (Z-A)</option>
// // // //                             </select>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 <div className="mt-8 flex flex-col">
// // // //                     <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// // // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // //                             <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // //                                 {loading ? (
// // // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // // //                                         <RefreshCw className="animate-spin h-8 w-8 text-red-600" />
// // // //                                     </div>
// // // //                                 ) : error ? (
// // // //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // // //                                 ) : currentItems.length === 0 ? (
// // // //                                     <div className="text-center py-12 bg-white">
// // // //                                         <p className="text-gray-500">No customers found.</p>
// // // //                                     </div>
// // // //                                 ) : (
// // // //                                     <table className="min-w-full divide-y divide-gray-300">
// // // //                                         <thead className="bg-gray-50">
// // // //                                             <tr>
// // // //                                                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
// // // //                                                     Name
// // // //                                                 </th>
// // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // //                                                     Email
// // // //                                                 </th>
// // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // //                                                     Phone
// // // //                                                 </th>
// // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // //                                                     Company
// // // //                                                 </th>
// // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // //                                                     Role
// // // //                                                 </th>
// // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // //                                                     Joined
// // // //                                                 </th>
// // // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // //                                                     <span className="sr-only">Actions</span>
// // // //                                                 </th>
// // // //                                             </tr>
// // // //                                         </thead>
// // // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // // //                                             {currentItems.map((customer) => (
// // // //                                                 <tr key={customer.id}>
// // // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // // //                                                         <div className="flex items-center">
// // // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // // //                                                                 <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
// // // //                                                                     {customer.firstName?.charAt(0) || customer.username?.charAt(0) || "C"}
// // // //                                                                 </div>
// // // //                                                             </div>
// // // //                                                             <div className="ml-4">
// // // //                                                                 <div className="font-medium text-gray-900">
// // // //                                                                     {customer.firstName && customer.lastName
// // // //                                                                         ? `${customer.firstName} ${customer.lastName}`
// // // //                                                                         : customer.username}
// // // //                                                                 </div>
// // // //                                                             </div>
// // // //                                                         </div>
// // // //                                                     </td>
// // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // //                                                         <div className="flex items-center">
// // // //                                                             <Mail className="h-4 w-4 text-gray-400 mr-2" />
// // // //                                                             <a href={`mailto:${customer.email}`} className="hover:text-red-600">
// // // //                                                                 {customer.email}
// // // //                                                             </a>
// // // //                                                         </div>
// // // //                                                     </td>
// // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // //                                                         {customer.phone || "-"}
// // // //                                                     </td>
// // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // //                                                         {customer.company || "-"}
// // // //                                                     </td>
// // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // //                                                         <span
// // // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${customer.role === "admin"
// // // //                                                                 ? "bg-purple-100 text-purple-800"
// // // //                                                                 : "bg-green-100 text-green-800"
// // // //                                                                 }`}
// // // //                                                         >
// // // //                                                             {customer.role}
// // // //                                                         </span>
// // // //                                                     </td>
// // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // //                                                         {new Date(customer.createdAt).toLocaleDateString()}
// // // //                                                     </td>
// // // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // //                                                         <div className="flex items-center justify-end space-x-3">
// // // //                                                             <Link
// // // //                                                                 to={`/admin/customers/edit/${customer.id}`}
// // // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // // //                                                             >
// // // //                                                                 <Edit className="h-5 w-5" />
// // // //                                                             </Link>
// // // //                                                             <button
// // // //                                                                 type="button"
// // // //                                                                 className="text-red-600 hover:text-red-900"
// // // //                                                                 onClick={() => handleDeleteClick(customer)}
// // // //                                                             >
// // // //                                                                 <Trash2 className="h-5 w-5" />
// // // //                                                             </button>
// // // //                                                         </div>
// // // //                                                     </td>
// // // //                                                 </tr>
// // // //                                             ))}
// // // //                                         </tbody>
// // // //                                     </table>
// // // //                                 )}
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Pagination */}
// // // //                 {!loading && !error && totalPages > 1 && (
// // // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // //                         <div className="flex flex-1 justify-between sm:hidden">
// // // //                             <button
// // // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // //                                 disabled={currentPage === 1}
// // // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // //                             >
// // // //                                 Previous
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // //                                 disabled={currentPage === totalPages}
// // // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
// // // //                             >
// // // //                                 Next
// // // //                             </button>
// // // //                         </div>
// // // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // //                             <div>
// // // //                                 <p className="text-sm text-gray-700">
// // // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredCustomers.length)}</span> of{" "}
// // // //                                     <span className="font-medium">{filteredCustomers.length}</span> results
// // // //                                 </p>
// // // //                             </div>
// // // //                             <div>
// // // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // //                                     <button
// // // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // //                                         disabled={currentPage === 1}
// // // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // //                                     >
// // // //                                         <span className="sr-only">Previous</span>
// // // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // //                                     </button>
// // // //                                     {[...Array(totalPages).keys()].map((number) => (
// // // //                                         <button
// // // //                                             key={number + 1}
// // // //                                             onClick={() => paginate(number + 1)}
// // // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // //                                                 }`}
// // // //                                         >
// // // //                                             {number + 1}
// // // //                                         </button>
// // // //                                     ))}
// // // //                                     <button
// // // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // //                                         disabled={currentPage === totalPages}
// // // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:text-gray-300 disabled:cursor-not-allowed"
// // // //                                     >
// // // //                                         <span className="sr-only">Next</span>
// // // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // //                                     </button>
// // // //                                 </nav>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 )}

// // // //                 {/* Delete Confirmation Modal */}
// // // //                 {showDeleteModal && (
// // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// // // //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// // // //                             </div>

// // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

// // // //                             </span>

// // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // //                                     <div className="sm:flex sm:items-start">
// // // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // // //                                         </div>
// // // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Customer</h3>
// // // //                                             <div className="mt-2">
// // // //                                                 <p className="text-sm text-gray-500">
// // // //                                                     Are you sure you want to delete this customer? This action cannot be undone.
// // // //                                                 </p>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // //                                     <button
// // // //                                         type="button"
// // // //                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// // // //                                         onClick={confirmDelete}
// // // //                                     >
// // // //                                         Delete
// // // //                                     </button>
// // // //                                     <button
// // // //                                         type="button"
// // // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:w-auto sm:text-sm"
// // // //                                         onClick={() => setShowDeleteModal(false)}
// // // //                                     >
// // // //                                         Cancel
// // // //                                     </button>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 )}
// // // //             </div>
// // // //         </AdminLayout>
// // // //     )
// // // // }

// // // // export default AdminCustomers


// // // "use client";
// // // import { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";
// // // import {
// // //     Search,
// // //     Filter,
// // //     ChevronLeft,
// // //     ChevronRight,
// // //     Edit,
// // //     Trash2,
// // //     UserPlus,
// // //     Mail,
// // //     RefreshCw,
// // //     Download,
// // // } from "lucide-react";
// // // import AdminLayout from "../../components/admin/AdminLayout";
// // // import { fetchAllUsers, deleteUser } from "../../services/api";
// // // import { toast } from "react-toastify";

// // // const AdminCustomers = () => {
// // //     const [customers, setCustomers] = useState([]);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);
// // //     const [searchQuery, setSearchQuery] = useState("");
// // //     const [roleFilter, setRoleFilter] = useState("all");
// // //     const [currentPage, setCurrentPage] = useState(1);
// // //     const [itemsPerPage] = useState(10);
// // //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// // //     const [customerToDelete, setCustomerToDelete] = useState(null);
// // //     const [sortBy, setSortBy] = useState("newest");

// // //     useEffect(() => {
// // //         const loadCustomers = async () => {
// // //             setLoading(true);
// // //             try {
// // //                 const data = await fetchAllUsers();
// // //                 setCustomers(data);
// // //                 setError(null);
// // //             } catch (err) {
// // //                 console.error("Error loading customers:", err);
// // //                 setError("Failed to load customers. Please try again later.");
// // //                 setCustomers([]);
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };

// // //         loadCustomers();
// // //     }, []);

// // //     // Filter customers based on search query and role
// // //     const filteredCustomers = customers.filter((customer) => {
// // //         const matchesSearch =
// // //             customer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //             customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //             customer.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //             customer.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //             customer.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //             customer.phone?.toLowerCase().includes(searchQuery.toLowerCase());

// // //         const matchesRole = roleFilter === "all" || customer.role === roleFilter;

// // //         return matchesSearch && matchesRole;
// // //     });

// // //     // Sort customers
// // //     const sortedCustomers = [...filteredCustomers].sort((a, b) => {
// // //         switch (sortBy) {
// // //             case "name-asc":
// // //                 return (a.firstName || a.username).localeCompare(b.firstName || b.username);
// // //             case "name-desc":
// // //                 return (b.firstName || b.username).localeCompare(a.firstName || a.username);
// // //             case "email-asc":
// // //                 return a.email.localeCompare(b.email);
// // //             case "email-desc":
// // //                 return b.email.localeCompare(a.email);
// // //             case "newest":
// // //                 return new Date(b.createdAt) - new Date(a.createdAt);
// // //             case "oldest":
// // //                 return new Date(a.createdAt) - new Date(b.createdAt);
// // //             default:
// // //                 return 0;
// // //         }
// // //     });

// // //     // Pagination
// // //     const indexOfLastItem = currentPage * itemsPerPage;
// // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // //     const currentItems = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem);
// // //     const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage);

// // //     const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // //     const handleDeleteClick = (customer) => {
// // //         setCustomerToDelete(customer);
// // //         setShowDeleteModal(true);
// // //     };

// // //     const confirmDelete = async () => {
// // //         if (!customerToDelete) return;

// // //         try {
// // //             await deleteUser(customerToDelete.id);
// // //             setCustomers(customers.filter((c) => c.id !== customerToDelete.id));
// // //             setShowDeleteModal(false);
// // //             setCustomerToDelete(null);
// // //             toast.success("Customer deleted successfully");
// // //         } catch (err) {
// // //             console.error("Error deleting customer:", err);
// // //             toast.error("Failed to delete customer");
// // //         }
// // //     };

// // //     const exportCustomers = () => {
// // //         toast.info("Exporting customers...");
// // //     };

// // //     return (
// // //         <AdminLayout>
// // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // //                     <div>
// // //                         <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
// // //                         <p className="mt-2 text-sm text-gray-700">A list of all customers in your system.</p>
// // //                     </div>
// // //                     <div className="mt-4 sm:mt-0 flex space-x-3">
// // //                         <button
// // //                             onClick={exportCustomers}
// // //                             className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // //                         >
// // //                             <Download className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
// // //                             Export
// // //                         </button>
// // //                         <Link
// // //                             to="/admin/customers/new"
// // //                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // //                         >
// // //                             <UserPlus className="-ml-1 mr-2 h-4 w-4" />
// // //                             Add Customer
// // //                         </Link>
// // //                     </div>
// // //                 </div>

// // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // //                             <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
// // //                         </div>
// // //                         <input
// // //                             type="text"
// // //                             value={searchQuery}
// // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // //                             className="block w-full rounded-md border-gray-300 pl-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // //                             placeholder="Search customers..."
// // //                         />
// // //                     </div>

// // //                     <div className="flex flex-col sm:flex-row gap-4">
// // //                         <div className="relative max-w-xs w-full">
// // //                             <select
// // //                                 value={roleFilter}
// // //                                 onChange={(e) => setRoleFilter(e.target.value)}
// // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // //                             >
// // //                                 <option value="all">All Roles</option>
// // //                                 <option value="user">Customer</option>
// // //                                 <option value="admin">Admin</option>
// // //                             </select>
// // //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // //                                 <Filter className="h-4 w-4" />
// // //                             </div>
// // //                         </div>

// // //                         <div className="relative max-w-xs w-full">
// // //                             <select
// // //                                 value={sortBy}
// // //                                 onChange={(e) => setSortBy(e.target.value)}
// // //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // //                             >
// // //                                 <option value="newest">Newest</option>
// // //                                 <option value="oldest">Oldest</option>
// // //                                 <option value="name-asc">Name (A-Z)</option>
// // //                                 <option value="name-desc">Name (Z-A)</option>
// // //                                 <option value="email-asc">Email (A-Z)</option>
// // //                                 <option value="email-desc">Email (Z-A)</option>
// // //                             </select>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 <div className="mt-8 flex flex-col">
// // //                     <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // //                             <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // //                                 {loading ? (
// // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // //                                         <RefreshCw className="animate-spin h-8 w-8 text-red-600" />
// // //                                     </div>
// // //                                 ) : error ? (
// // //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // //                                 ) : currentItems.length === 0 ? (
// // //                                     <div className="text-center py-12 bg-white">
// // //                                         <p className="text-gray-500">No customers found.</p>
// // //                                     </div>
// // //                                 ) : (
// // //                                     <table className="min-w-full divide-y divide-gray-300">
// // //                                         <thead className="bg-gray-50">
// // //                                             <tr>
// // //                                                 <th
// // //                                                     scope="col"
// // //                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // //                                                 >
// // //                                                     Name
// // //                                                 </th>
// // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                                                     Email
// // //                                                 </th>
// // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                                                     Phone
// // //                                                 </th>
// // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                                                     Company
// // //                                                 </th>
// // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                                                     Role
// // //                                                 </th>
// // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // //                                                     Joined
// // //                                                 </th>
// // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // //                                                     <span className="sr-only">Actions</span>
// // //                                                 </th>
// // //                                             </tr>
// // //                                         </thead>
// // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // //                                             {currentItems.map((customer) => (
// // //                                                 <tr key={customer.id}>
// // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // //                                                         <div className="flex items-center">
// // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // //                                                                 <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
// // //                                                                     {customer.firstName?.charAt(0) || customer.username?.charAt(0) || "U"}
// // //                                                                 </div>
// // //                                                             </div>
// // //                                                             <div className="ml-4">
// // //                                                                 <div className="font-medium text-gray-900">
// // //                                                                     {customer.firstName && customer.lastName
// // //                                                                         ? `${customer.firstName} ${customer.lastName}`
// // //                                                                         : customer.username}
// // //                                                                 </div>
// // //                                                             </div>
// // //                                                         </div>
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         <div className="flex items-center">
// // //                                                             <Mail className="h-4 w-4 text-gray-400 mr-2" />
// // //                                                             <a href={`mailto:${customer.email}`} className="hover:text-red-600">
// // //                                                                 {customer.email}
// // //                                                             </a>
// // //                                                         </div>
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         {customer.phone || "-"}
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         {customer.company || "-"}
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         <span
// // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${customer.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"
// // //                                                                 }`}
// // //                                                         >
// // //                                                             {customer.role === "user" ? "Customer" : "Admin"}
// // //                                                         </span>
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         {new Date(customer.createdAt).toLocaleDateString()}
// // //                                                     </td>
// // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // //                                                         <div className="flex items-center justify-end space-x-3">
// // //                                                             <Link
// // //                                                                 to={`/admin/customers/edit/${customer.id}`}
// // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // //                                                             >
// // //                                                                 <Edit className="h-5 w-5" />
// // //                                                             </Link>
// // //                                                             <button
// // //                                                                 type="button"
// // //                                                                 className="text-red-600 hover:text-red-900"
// // //                                                                 onClick={() => handleDeleteClick(customer)}
// // //                                                             >
// // //                                                                 <Trash2 className="h-5 w-5" />
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
// // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredCustomers.length)}</span> of{" "}
// // //                                     <span className="font-medium">{filteredCustomers.length}</span> results
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

// // //                 {/* Delete Confirmation Modal */}
// // //                 {showDeleteModal && (
// // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// // //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// // //                             </div>

// // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

// // //                             </span>

// // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // //                                     <div className="sm:flex sm:items-start">
// // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // //                                         </div>
// // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Customer</h3>
// // //                                             <div className="mt-2">
// // //                                                 <p className="text-sm text-gray-500">
// // //                                                     Are you sure you want to delete this customer? This action cannot be undone.
// // //                                                 </p>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // //                                     <button
// // //                                         type="button"
// // //                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// // //                                         onClick={confirmDelete}
// // //                                     >
// // //                                         Delete
// // //                                     </button>
// // //                                     <button
// // //                                         type="button"
// // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:w-auto sm:text-sm"
// // //                                         onClick={() => setShowDeleteModal(false)}
// // //                                     >
// // //                                         Cancel
// // //                                     </button>
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </AdminLayout>
// // //     );
// // // };

// // // export default AdminCustomers;


// // "use client";
// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //     Search,
// //     Filter,
// //     ChevronLeft,
// //     ChevronRight,
// //     Edit,
// //     Trash2,
// //     UserPlus,
// //     Mail,
// //     RefreshCw,
// //     Download,
// // } from "lucide-react";
// // import AdminLayout from "../../components/admin/AdminLayout";
// // import { fetchAllUsers, deleteUser } from "../../services/api";
// // import { toast } from "react-toastify";

// // const AdminCustomers = () => {
// //     const [customers, setCustomers] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [searchQuery, setSearchQuery] = useState("");
// //     const [roleFilter, setRoleFilter] = useState("all");
// //     const [currentPage, setCurrentPage] = useState(1);
// //     const [itemsPerPage] = useState(10);
// //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// //     const [customerToDelete, setCustomerToDelete] = useState(null);
// //     const [sortBy, setSortBy] = useState("newest");

// //     useEffect(() => {
// //         const loadCustomers = async () => {
// //             setLoading(true);
// //             try {
// //                 const data = await fetchAllUsers();
// //                 setCustomers(data);
// //                 setError(null);
// //             } catch (err) {
// //                 console.error("Error loading customers:", err);
// //                 setError("Failed to load customers. Please try again later.");
// //                 setCustomers([]);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         loadCustomers();
// //     }, []);

// //     // Filter customers based on search query and role
// //     const filteredCustomers = customers.filter((customer) => {
// //         const matchesSearch =
// //             customer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //             customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //             customer.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //             customer.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //             customer.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //             customer.phone?.toLowerCase().includes(searchQuery.toLowerCase());

// //         const matchesRole = roleFilter === "all" || customer.role === roleFilter;

// //         return matchesSearch && matchesRole;
// //     });

// //     // Sort customers
// //     const sortedCustomers = [...filteredCustomers].sort((a, b) => {
// //         switch (sortBy) {
// //             case "name-asc":
// //                 return (a.firstName || a.username).localeCompare(b.firstName || b.username);
// //             case "name-desc":
// //                 return (b.firstName || b.username).localeCompare(a.firstName || a.username);
// //             case "email-asc":
// //                 return a.email.localeCompare(b.email);
// //             case "email-desc":
// //                 return b.email.localeCompare(a.email);
// //             case "newest":
// //                 return new Date(b.createdAt) - new Date(a.createdAt);
// //             case "oldest":
// //                 return new Date(a.createdAt) - new Date(b.createdAt);
// //             default:
// //                 return 0;
// //         }
// //     });

// //     // Pagination
// //     const indexOfLastItem = currentPage * itemsPerPage;
// //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //     const currentItems = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem);
// //     const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage);

// //     const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //     const handleDeleteClick = (customer) => {
// //         setCustomerToDelete(customer);
// //         setShowDeleteModal(true);
// //     };

// //     const confirmDelete = async () => {
// //         if (!customerToDelete) return;

// //         try {
// //             await deleteUser(customerToDelete.id);
// //             setCustomers(customers.filter((c) => c.id !== customerToDelete.id));
// //             setShowDeleteModal(false);
// //             setCustomerToDelete(null);
// //             toast.success("Customer deleted successfully");
// //         } catch (err) {
// //             console.error("Error deleting customer:", err);
// //             toast.error("Failed to delete customer");
// //         }
// //     };

// //     const exportCustomers = () => {
// //         toast.info("Exporting customers...");
// //     };

// //     return (
// //         <AdminLayout>
// //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// //                 <div className="sm:flex sm:items-center sm:justify-between">
// //                     <div>
// //                         <h1 className="text-2xl font-bold text-gray-900">Customers</h1>
// //                         <p className="mt-2 text-sm text-gray-700">A list of all customers in your system.</p>
// //                     </div>
// //                     <div className="mt-4 sm:mt-0 flex space-x-3">
// //                         <button
// //                             onClick={exportCustomers}
// //                             className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// //                         >
// //                             <Download className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
// //                             Export
// //                         </button>
// //                         <Link
// //                             to="/admin/customers/new"
// //                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// //                         >
// //                             <UserPlus className="-ml-1 mr-2 h-4 w-4" />
// //                             Add Customer
// //                         </Link>
// //                     </div>
// //                 </div>

// //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// //                             <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
// //                         </div>
// //                         <input
// //                             type="text"
// //                             value={searchQuery}
// //                             onChange={(e) => setSearchQuery(e.target.value)}
// //                             className="block w-full rounded-md border-gray-300 pl-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
// //                             placeholder="Search customers..."
// //                         />
// //                     </div>

// //                     <div className="flex flex-col sm:flex-row gap-4">
// //                         <div className="relative max-w-xs w-full">
// //                             <select
// //                                 value={roleFilter}
// //                                 onChange={(e) => setRoleFilter(e.target.value)}
// //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //                             >
// //                                 <option value="all">All Roles</option>
// //                                 <option value="user">Customer</option>
// //                                 <option value="admin">Admin</option>
// //                             </select>
// //                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //                                 <Filter className="h-4 w-4" />
// //                             </div>
// //                         </div>

// //                         <div className="relative max-w-xs w-full">
// //                             <select
// //                                 value={sortBy}
// //                                 onChange={(e) => setSortBy(e.target.value)}
// //                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //                             >
// //                                 <option value="newest">Newest</option>
// //                                 <option value="oldest">Oldest</option>
// //                                 <option value="name-asc">Name (A-Z)</option>
// //                                 <option value="name-desc">Name (Z-A)</option>
// //                                 <option value="email-asc">Email (A-Z)</option>
// //                                 <option value="email-desc">Email (Z-A)</option>
// //                             </select>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="mt-8 flex flex-col">
// //                     <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
// //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// //                             <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// //                                 {loading ? (
// //                                     <div className="flex justify-center items-center h-64 bg-white">
// //                                         <RefreshCw className="animate-spin h-8 w-8 text-red-600" />
// //                                     </div>
// //                                 ) : error ? (
// //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// //                                 ) : currentItems.length === 0 ? (
// //                                     <div className="text-center py-12 bg-white">
// //                                         <p className="text-gray-500">No customers found.</p>
// //                                     </div>
// //                                 ) : (
// //                                     <table className="min-w-full divide-y divide-gray-300">
// //                                         <thead className="bg-gray-50">
// //                                             <tr>
// //                                                 <th
// //                                                     scope="col"
// //                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// //                                                 >
// //                                                     Name
// //                                                 </th>
// //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                                                     Email
// //                                                 </th>
// //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                                                     Phone
// //                                                 </th>
// //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                                                     Company
// //                                                 </th>
// //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                                                     Role
// //                                                 </th>
// //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// //                                                     Joined
// //                                                 </th>
// //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// //                                                     <span className="sr-only">Actions</span>
// //                                                 </th>
// //                                             </tr>
// //                                         </thead>
// //                                         <tbody className="divide-y divide-gray-200 bg-white">
// //                                             {currentItems.map((customer) => (
// //                                                 <tr key={customer.id}>
// //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// //                                                         <div className="flex items-center">
// //                                                             <div className="h-10 w-10 flex-shrink-0">
// //                                                                 <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
// //                                                                     {customer.firstName?.charAt(0) || customer.username?.charAt(0) || "U"}
// //                                                                 </div>
// //                                                             </div>
// //                                                             <div className="ml-4">
// //                                                                 <div className="font-medium text-gray-900">
// //                                                                     {(customer.firstName || customer.lastName)
// //                                                                         ? `${customer.firstName || ""} ${customer.lastName || ""}`.trim()
// //                                                                         : customer.username || "Unknown"}
// //                                                                 </div>
// //                                                             </div>
// //                                                         </div>
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         <div className="flex items-center">
// //                                                             <Mail className="h-4 w-4 text-gray-400 mr-2" />
// //                                                             <a href={`mailto:${customer.email}`} className="hover:text-red-600">
// //                                                                 {customer.email}
// //                                                             </a>
// //                                                         </div>
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         {customer.phone || "-"}
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         {customer.company || "-"}
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         <span
// //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${customer.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"
// //                                                                 }`}
// //                                                         >
// //                                                             {customer.role === "user" ? "Customer" : "Admin"}
// //                                                         </span>
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         {new Date(customer.createdAt).toLocaleDateString()}
// //                                                     </td>
// //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// //                                                         <div className="flex items-center justify-end space-x-3">
// //                                                             <Link
// //                                                                 to={`/admin/customers/edit/${customer.id}`}
// //                                                                 className="text-indigo-600 hover:text-indigo-900"
// //                                                             >
// //                                                                 <Edit className="h-5 w-5" />
// //                                                             </Link>
// //                                                             <button
// //                                                                 type="button"
// //                                                                 className="text-red-600 hover:text-red-900"
// //                                                                 onClick={() => handleDeleteClick(customer)}
// //                                                             >
// //                                                                 <Trash2 className="h-5 w-5" />
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
// //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// //                             >
// //                                 Previous
// //                             </button>
// //                             <button
// //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// //                                 disabled={currentPage === totalPages}
// //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// //                             >
// //                                 Next
// //                             </button>
// //                         </div>
// //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// //                             <div>
// //                                 <p className="text-sm text-gray-700">
// //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredCustomers.length)}</span> of{" "}
// //                                     <span className="font-medium">{filteredCustomers.length}</span> results
// //                                 </p>
// //                             </div>
// //                             <div>
// //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// //                                     <button
// //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// //                                         disabled={currentPage === 1}
// //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// //                                     >
// //                                         <span className="sr-only">Previous</span>
// //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// //                                     </button>
// //                                     {[...Array(totalPages).keys()].map((number) => (
// //                                         <button
// //                                             key={number + 1}
// //                                             onClick={() => paginate(number + 1)}
// //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// //                                                     ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// //                                                     : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// //                                                 }`}
// //                                         >
// //                                             {number + 1}
// //                                         </button>
// //                                     ))}
// //                                     <button
// //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// //                                         disabled={currentPage === totalPages}
// //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// //                                     >
// //                                         <span className="sr-only">Next</span>
// //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// //                                     </button>
// //                                 </nav>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Delete Confirmation Modal */}
// //                 {showDeleteModal && (
// //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// //                             </div>

// //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

// //                             </span>

// //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// //                                     <div className="sm:flex sm:items-start">
// //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// //                                         </div>
// //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Customer</h3>
// //                                             <div className="mt-2">
// //                                                 <p className="text-sm text-gray-500">
// //                                                     Are you sure you want to delete this customer? This action cannot be undone.
// //                                                 </p>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// //                                     <button
// //                                         type="button"
// //                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// //                                         onClick={confirmDelete}
// //                                     >
// //                                         Delete
// //                                     </button>
// //                                     <button
// //                                         type="button"
// //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:w-auto sm:text-sm"
// //                                         onClick={() => setShowDeleteModal(false)}
// //                                     >
// //                                         Cancel
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 )}
// //             </div>
// //         </AdminLayout>
// //     );
// // };

// // export default AdminCustomers;


// "use client";
// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//     Search,
//     Filter,
//     ChevronLeft,
//     ChevronRight,
//     Edit,
//     Trash2,
//     UserPlus,
//     Mail,
//     RefreshCw,
//     Download,
// } from "lucide-react";
// import AdminLayout from "../../components/admin/AdminLayout";
// import { fetchAllUsers, deleteUser } from "../../services/api";
// import { toast } from "react-toastify";

// const AdminCustomers = () => {
//     const [customers, setCustomers] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [roleFilter, setRoleFilter] = useState("all");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(10);
//     const [showDeleteModal, setShowDeleteModal] = useState(false);
//     const [customerToDelete, setCustomerToDelete] = useState(null);
//     const [sortBy, setSortBy] = useState("newest");

//     useEffect(() => {
//         const loadCustomers = async () => {
//             setLoading(true);
//             try {
//                 const data = await fetchAllUsers();
//                 setCustomers(data);
//                 setError(null);
//             } catch (err) {
//                 console.error("Error loading customers:", err);
//                 setError("Failed to load customers. Please try again later.");
//                 setCustomers([]);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         loadCustomers();
//     }, []);

//     // Filter customers based on search query and role
//     const filteredCustomers = customers.filter((customer) => {
//         const matchesSearch =
//             customer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             customer.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             customer.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             customer.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//             customer.phone?.toLowerCase().includes(searchQuery.toLowerCase());

//         const matchesRole = roleFilter === "all" || customer.role === roleFilter;

//         return matchesSearch && matchesRole;
//     });

//     // Sort customers
//     const sortedCustomers = [...filteredCustomers].sort((a, b) => {
//         switch (sortBy) {
//             case "name-asc":
//                 return (a.firstName || a.username).localeCompare(b.firstName || b.username);
//             case "name-desc":
//                 return (b.firstName || b.username).localeCompare(a.firstName || a.username);
//             case "email-asc":
//                 return a.email.localeCompare(b.email);
//             case "email-desc":
//                 return b.email.localeCompare(a.email);
//             case "newest":
//                 return new Date(b.createdAt) - new Date(a.createdAt);
//             case "oldest":
//                 return new Date(a.createdAt) - new Date(b.createdAt);
//             default:
//                 return 0;
//         }
//     });

//     // Pagination
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     const handleDeleteClick = (customer) => {
//         setCustomerToDelete(customer);
//         setShowDeleteModal(true);
//     };

//     const confirmDelete = async () => {
//         if (!customerToDelete) return;

//         try {
//             await deleteUser(customerToDelete._id); // Updated to use _id
//             setCustomers(customers.filter((c) => c._id !== customerToDelete._id));
//             setShowDeleteModal(false);
//             setCustomerToDelete(null);
//             toast.success("Customer deleted successfully");
//         } catch (err) {
//             console.error("Error deleting customer:", err);
//             toast.error("Failed to delete customer");
//         }
//     };

//     const exportCustomers = () => {
//         toast.info("Exporting customers...");
//     };

//     return (
//         <AdminLayout>
//             <div className="px-4 sm:px-6 lg:px-8 py-8">
//                 <div className="sm:flex sm:items-center sm:justify-between">
//                     <div>
//                         {/* <h1 className="text-2xl font-bold text-gray-900">Customers</h1> */}
//                         <p className="mt-2 text-3xl text-gray-900">A list of all customers in your system.</p>
//                     </div>
//                     <div className="mt-4 sm:mt-0 flex space-x-3">
//                         <button
//                             onClick={exportCustomers}
//                             className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                         >
//                             <Download className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
//                             Export
//                         </button>
//                         <Link
//                             to="/admin/customers/new"
//                             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                         >
//                             <UserPlus className="-ml-1 mr-2 h-4 w-4" />
//                             Add Customer
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
//                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
//                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                             <Search className="h-5 w-5 text-red-400" aria-hidden="true" />
//                         </div>
//                         <input
//                             type="text"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="block w-full rounded-md border-gray-300 pl-10 focus:border-red-500 focus:ring-red-500 sm:text-sm h-full"
//                             placeholder="Search customers..."
//                         />
//                     </div>

//                     <div className="flex flex-col sm:flex-row gap-4">
//                         <div className="relative max-w-xs w-full">
//                             <select
//                                 value={roleFilter}
//                                 onChange={(e) => setRoleFilter(e.target.value)}
//                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                             >
//                                 <option value="all">All Roles</option>
//                                 <option value="user">Customer</option>
//                                 <option value="admin">Admin</option>
//                             </select>
//                             <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                                 <Filter className="h-4 w-4" />
//                             </div>
//                         </div>

//                         <div className="relative max-w-xs w-full">
//                             <select
//                                 value={sortBy}
//                                 onChange={(e) => setSortBy(e.target.value)}
//                                 className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                             >
//                                 <option value="newest">Newest</option>
//                                 <option value="oldest">Oldest</option>
//                                 <option value="name-asc">Name (A-Z)</option>
//                                 <option value="name-desc">Name (Z-A)</option>
//                                 <option value="email-asc">Email (A-Z)</option>
//                                 <option value="email-desc">Email (Z-A)</option>
//                             </select>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mt-8 flex flex-col">
//                     <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
//                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//                             <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
//                                 {loading ? (
//                                     <div className="flex justify-center items-center h-64 bg-white">
//                                         <RefreshCw className="animate-spin h-8 w-8 text-red-600" />
//                                     </div>
//                                 ) : error ? (
//                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
//                                 ) : currentItems.length === 0 ? (
//                                     <div className="text-center py-12 bg-white">
//                                         <p className="text-gray-500">No customers found.</p>
//                                     </div>
//                                 ) : (
//                                     <table className="min-w-full divide-y divide-gray-300">
//                                         <thead className="bg-gray-50">
//                                             <tr>
//                                                 <th
//                                                     scope="col"
//                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
//                                                 >
//                                                     Name
//                                                 </th>
//                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                                     Email
//                                                 </th>
//                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                                     Phone
//                                                 </th>
//                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                                     Company
//                                                 </th>
//                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                                     Role
//                                                 </th>
//                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
//                                                     Joined
//                                                 </th>
//                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
//                                                     <span className="sr-only">Actions</span>
//                                                 </th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="divide-y divide-gray-200 bg-white">
//                                             {currentItems.map((customer) => (
//                                                 <tr key={customer._id}>
//                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
//                                                         <div className="flex items-center">
//                                                             <div className="h-10 w-10 flex-shrink-0">
//                                                                 <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
//                                                                     {customer.firstName?.charAt(0) || customer.username?.charAt(0) || "U"}
//                                                                 </div>
//                                                             </div>
//                                                             <div className="ml-4">
//                                                                 <div className="font-medium text-gray-900">
//                                                                     {(customer.firstName || customer.lastName)
//                                                                         ? `${customer.firstName || ""} ${customer.lastName || ""}`.trim()
//                                                                         : customer.username || "Unknown"}
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                                         <div className="flex items-center">
//                                                             <Mail className="h-4 w-4 text-red-400 mr-2" />
//                                                             <a href={`mailto:${customer.email}`} className="hover:text-red-600">
//                                                                 {customer.email}
//                                                             </a>
//                                                         </div>
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                                         {customer.phone || "-"}
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                                         {customer.company || "-"}
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                                         <span
//                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${customer.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"
//                                                                 }`}
//                                                         >
//                                                             {customer.role === "user" ? "Customer" : "Admin"}
//                                                         </span>
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                                         {new Date(customer.createdAt).toLocaleDateString()}
//                                                     </td>
//                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
//                                                         <div className="flex items-center justify-end space-x-3">
//                                                             <Link
//                                                                 to={`/admin/customers/edit/${customer._id}`} // Changed customer.id to customer._id
//                                                                 className="text-indigo-600 hover:text-indigo-900"
//                                                             >
//                                                                 <Edit className="h-5 w-5" />
//                                                             </Link>
//                                                             <button
//                                                                 type="button"
//                                                                 className="text-red-600 hover:text-red-900"
//                                                                 onClick={() => handleDeleteClick(customer)}
//                                                             >
//                                                                 <Trash2 className="h-5 w-5" />
//                                                             </button>
//                                                         </div>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Pagination */}
//                 {!loading && !error && totalPages > 1 && (
//                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
//                         <div className="flex flex-1 justify-between sm:hidden">
//                             <button
//                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
//                                 disabled={currentPage === 1}
//                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                             >
//                                 Previous
//                             </button>
//                             <button
//                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//                                 disabled={currentPage === totalPages}
//                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                             >
//                                 Next
//                             </button>
//                         </div>
//                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//                             <div>
//                                 <p className="text-sm text-gray-700">
//                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
//                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredCustomers.length)}</span> of{" "}
//                                     <span className="font-medium">{filteredCustomers.length}</span> results
//                                 </p>
//                             </div>
//                             <div>
//                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
//                                     <button
//                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
//                                         disabled={currentPage === 1}
//                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                                     >
//                                         <span className="sr-only">Previous</span>
//                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
//                                     </button>
//                                     {[...Array(totalPages).keys()].map((number) => (
//                                         <button
//                                             key={number + 1}
//                                             onClick={() => paginate(number + 1)}
//                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
//                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
//                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                                                 }`}
//                                         >
//                                             {number + 1}
//                                         </button>
//                                     ))}
//                                     <button
//                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//                                         disabled={currentPage === totalPages}
//                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                                     >
//                                         <span className="sr-only">Next</span>
//                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
//                                     </button>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Delete Confirmation Modal */}
//                 {showDeleteModal && (
//                     <div className="fixed inset-0 z-50 overflow-y-auto">
//                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
//                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
//                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
//                             </div>

//                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

//                             </span>

//                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
//                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                                     <div className="sm:flex sm:items-start">
//                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
//                                         </div>
//                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Customer</h3>
//                                             <div className="mt-2">
//                                                 <p className="text-sm text-gray-500">
//                                                     Are you sure you want to delete this customer? This action cannot be undone.
//                                                 </p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                                     <button
//                                         type="button"
//                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
//                                         onClick={confirmDelete}
//                                     >
//                                         Delete
//                                     </button>
//                                     <button
//                                         type="button"
//                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:w-auto sm:text-sm"
//                                         onClick={() => setShowDeleteModal(false)}
//                                     >
//                                         Cancel
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </AdminLayout>
//     );
// };

// export default AdminCustomers;


"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Search,
    Filter,
    ChevronLeft,
    ChevronRight,
    Edit,
    Trash2,
    UserPlus,
    Mail,
    RefreshCw,
    Download,
} from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout";
import { fetchAllUsers, deleteUser } from "../../services/api";
import { toast } from "react-toastify";

const AdminCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [roleFilter, setRoleFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [customerToDelete, setCustomerToDelete] = useState(null);
    const [sortBy, setSortBy] = useState("newest");

    useEffect(() => {
        const loadCustomers = async () => {
            setLoading(true);
            try {
                const data = await fetchAllUsers();
                setCustomers(data);
                setError(null);
            } catch (err) {
                console.error("Error loading customers:", err);
                setError("Failed to load customers. Please try again later.");
                setCustomers([]);
            } finally {
                setLoading(false);
            }
        };

        loadCustomers();
    }, []);

    // Filter customers based on search query and role
    const filteredCustomers = customers.filter((customer) => {
        const matchesSearch =
            customer.username?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.company?.toLowerCase().includes(searchQuery.toLowerCase()) ||
            customer.phone?.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesRole = roleFilter === "all" || customer.role === roleFilter;

        return matchesSearch && matchesRole;
    });

    // Sort customers
    const sortedCustomers = [...filteredCustomers].sort((a, b) => {
        switch (sortBy) {
            case "name-asc":
                return (a.firstName || a.username).localeCompare(b.firstName || b.username);
            case "name-desc":
                return (b.firstName || b.username).localeCompare(a.firstName || a.username);
            case "email-asc":
                return a.email.localeCompare(b.email);
            case "email-desc":
                return b.email.localeCompare(a.email);
            case "newest":
                return new Date(b.createdAt) - new Date(a.createdAt);
            case "oldest":
                return new Date(a.createdAt) - new Date(b.createdAt);
            default:
                return 0;
        }
    });

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedCustomers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(sortedCustomers.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleDeleteClick = (customer) => {
        setCustomerToDelete(customer);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!customerToDelete) return;

        try {
            await deleteUser(customerToDelete._id); // Updated to use _id
            setCustomers(customers.filter((c) => c._id !== customerToDelete._id));
            setShowDeleteModal(false);
            setCustomerToDelete(null);
            toast.success("Customer deleted successfully");
        } catch (err) {
            console.error("Error deleting customer:", err);
            toast.error("Failed to delete customer");
        }
    };

    const exportCustomers = () => {
        toast.info("Exporting customers...");
    };

    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        {/* <h1 className="text-2xl font-bold text-gray-900">Customers</h1> */}
                        <p className="mt-2 text-3xl text-gray-900">A list of all customers in your system.</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex space-x-3">
                        {/* <button
                            onClick={exportCustomers}
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <Download className="-ml-1 mr-2 h-4 w-4 text-gray-500" />
                            Export
                        </button> */}
                        <Link
                            to="/admin/customers/new"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            <UserPlus className="-ml-1 mr-2 h-4 w-4" />
                            Add Customer
                        </Link>
                    </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
                    <div className="relative rounded-md shadow-sm max-w-xs w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-5 w-5 text-red-400" aria-hidden="true" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full rounded-md border-gray-300 pl-10 focus:border-red-500 focus:ring-red-500 sm:text-sm h-full"
                            placeholder="Search customers..."
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="relative max-w-xs w-full">
                            <select
                                value={roleFilter}
                                onChange={(e) => setRoleFilter(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            >
                                <option value="all">All Roles</option>
                                <option value="user">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <Filter className="h-4 w-4" />
                            </div>
                        </div>

                        <div className="relative max-w-xs w-full">
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                            >
                                <option value="newest">Newest</option>
                                <option value="oldest">Oldest</option>
                                <option value="name-asc">Name (A-Z)</option>
                                <option value="name-desc">Name (Z-A)</option>
                                <option value="email-asc">Email (A-Z)</option>
                                <option value="email-desc">Email (Z-A)</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                {loading ? (
                                    <div className="flex justify-center items-center h-64 bg-white">
                                        <RefreshCw className="animate-spin h-8 w-8 text-red-600" />
                                    </div>
                                ) : error ? (
                                    <div className="bg-red-100 text-red-700 p-4">{error}</div>
                                ) : currentItems.length === 0 ? (
                                    <div className="text-center py-12 bg-white">
                                        <p className="text-gray-500">No customers found.</p>
                                    </div>
                                ) : (
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                                >
                                                    Name
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Email
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Phone
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Company
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Role
                                                </th>
                                                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                    Date
                                                </th>
                                                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                    <span className="sr-only">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {currentItems.map((customer) => (
                                                <tr key={customer._id}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                        <div className="flex items-center">
                                                            <div className="h-10 w-10 flex-shrink-0">
                                                                <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
                                                                    {customer.firstName?.charAt(0) || customer.username?.charAt(0) || "U"}
                                                                </div>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="font-medium text-gray-900">
                                                                    {(customer.firstName || customer.lastName)
                                                                        ? `${customer.firstName || ""} ${customer.lastName || ""}`.trim()
                                                                        : customer.username || "Unknown"}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <div className="flex items-center">
                                                            <Mail className="h-4 w-4 text-red-400 mr-2" />
                                                            <a href={`mailto:${customer.email}`} className="hover:text-red-600">
                                                                {customer.email}
                                                            </a>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {customer.phone || "-"}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {customer.company || "-"}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <span
                                                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${customer.role === "admin" ? "bg-purple-100 text-purple-800" : "bg-green-100 text-green-800"
                                                                }`}
                                                        >
                                                            {customer.role === "user" ? "Customer" : "Admin"}
                                                        </span>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {new Date(customer.createdAt).toLocaleDateString()}
                                                    </td>
                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                        <div className="flex items-center justify-end space-x-3">
                                                            <Link
                                                                to={`/admin/customers/edit/${customer._id}`} // Changed customer.id to customer._id
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                            >
                                                                <Edit className="h-5 w-5" />
                                                            </Link>
                                                            <button
                                                                type="button"
                                                                className="text-red-600 hover:text-red-900"
                                                                onClick={() => handleDeleteClick(customer)}
                                                            >
                                                                <Trash2 className="h-5 w-5" />
                                                            </button>
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

                {/* Pagination */}
                {!loading && !error && totalPages > 1 && (
                    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <button
                                onClick={() => paginate(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Next
                            </button>
                        </div>
                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
                                    <span className="font-medium">{Math.min(indexOfLastItem, filteredCustomers.length)}</span> of{" "}
                                    <span className="font-medium">{filteredCustomers.length}</span> results
                                </p>
                            </div>
                            <div>
                                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                                    <button
                                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                    {[...Array(totalPages).keys()].map((number) => (
                                        <button
                                            key={number + 1}
                                            onClick={() => paginate(number + 1)}
                                            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
                                                ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                                }`}
                                        >
                                            {number + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                        disabled={currentPage === totalPages}
                                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Next</span>
                                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Modal */}
                {showDeleteModal && (
                    <div className="fixed inset-0 z-50 overflow-y-auto">
                        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                            </div>

                            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">

                            </span>

                            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                    <div className="sm:flex sm:items-start">
                                        <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                            <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
                                        </div>
                                        <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                            <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Customer</h3>
                                            <div className="mt-2">
                                                <p className="text-sm text-gray-500">
                                                    Are you sure you want to delete this customer? This action cannot be undone.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                    <button
                                        type="button"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                        onClick={confirmDelete}
                                    >
                                        Delete
                                    </button>
                                    <button
                                        type="button"
                                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:w-auto sm:text-sm"
                                        onClick={() => setShowDeleteModal(false)}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminCustomers;