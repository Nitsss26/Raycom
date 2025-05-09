// // // // "use client"
// // // // import { useState, useEffect } from "react"
// // // // import { Link } from "react-router-dom"
// // // // import { motion } from "framer-motion"
// // // // import { LayoutDashboard, ShoppingBag, Users, TrendingUp, AlertCircle, Package, DollarSign, BarChart2 } from 'lucide-react'
// // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // import { fetchDashboardStats, fetchRecentRequests } from "../../services/api"

// // // // const AdminDashboard = () => {
// // // //     const [stats, setStats] = useState({
// // // //         totalRequests: 0,
// // // //         pendingRequests: 0,
// // // //         totalProducts: 0,
// // // //         totalCustomers: 0,
// // // //     })
// // // //     const [recentRequests, setRecentRequests] = useState([])
// // // //     const [loading, setLoading] = useState(true)
// // // //     const [error, setError] = useState(null)

// // // //     useEffect(() => {
// // // //         const loadDashboardData = async () => {
// // // //             setLoading(true)
// // // //             try {
// // // //                 const statsData = await fetchDashboardStats()
// // // //                 setStats(statsData)

// // // //                 const requestsData = await fetchRecentRequests()
// // // //                 setRecentRequests(requestsData)

// // // //                 setError(null)
// // // //             } catch (err) {
// // // //                 console.error("Error loading dashboard data:", err)
// // // //                 setError("Failed to load dashboard data. Please try again later.")
// // // //             } finally {
// // // //                 setLoading(false)
// // // //             }
// // // //         }

// // // //         loadDashboardData()
// // // //     }, [])

// // // //     const statCards = [
// // // //         {
// // // //             title: "Total Requests",
// // // //             value: stats.totalRequests,
// // // //             icon: ShoppingBag,
// // // //             color: "bg-blue-500",
// // // //             link: "/admin/requests",
// // // //         },
// // // //         {
// // // //             title: "Pending Requests",
// // // //             value: stats.pendingRequests,
// // // //             icon: AlertCircle,
// // // //             color: "bg-yellow-500",
// // // //             link: "/admin/requests?status=pending",
// // // //         },
// // // //         {
// // // //             title: "Total Products",
// // // //             value: stats.totalProducts,
// // // //             icon: Package,
// // // //             color: "bg-green-500",
// // // //             link: "/admin/products",
// // // //         },
// // // //         {
// // // //             title: "Total Customers",
// // // //             value: stats.totalCustomers,
// // // //             icon: Users,
// // // //             color: "bg-purple-500",
// // // //             link: "/admin/customers",
// // // //         },
// // // //     ]

// // // //     return (
// // // //         <AdminLayout>
// // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // //                 <div className="mb-8">
// // // //                     {/* <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1> */}
// // // //                     <p className="mt-2 text-3xl text-gray-900">Welcome to your admin dashboard</p>
// // // //                 </div>

// // // //                 {loading ? (
// // // //                     <div className="flex justify-center items-center h-64">
// // // //                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // //                     </div>
// // // //                 ) : error ? (
// // // //                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
// // // //                         <span className="block sm:inline">{error}</span>
// // // //                     </div>
// // // //                 ) : (
// // // //                     <>
// // // //                         {/* Stats Cards */}
// // // //                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // // //                             {statCards.map((stat, index) => (
// // // //                                 <motion.div
// // // //                                     key={stat.title}
// // // //                                     initial={{ opacity: 0, y: 20 }}
// // // //                                     animate={{ opacity: 1, y: 0 }}
// // // //                                     transition={{ duration: 0.3, delay: index * 0.1 }}
// // // //                                 >
// // // //                                     <Link to={stat.link} className="block">
// // // //                                         <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
// // // //                                             <div className="flex items-center">
// // // //                                                 <div className={`${stat.color} rounded-full p-3 mr-4`}>
// // // //                                                     <stat.icon className="h-6 w-6 text-white" />
// // // //                                                 </div>
// // // //                                                 <div>
// // // //                                                     <p className="text-sm font-medium text-gray-500">{stat.title}</p>
// // // //                                                     <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </Link>
// // // //                                 </motion.div>
// // // //                             ))}
// // // //                         </div>

// // // //                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // // //                             {/* Recent Requests */}
// // // //                             <motion.div
// // // //                                 initial={{ opacity: 0, y: 20 }}
// // // //                                 animate={{ opacity: 1, y: 0 }}
// // // //                                 transition={{ duration: 0.3, delay: 0.4 }}
// // // //                                 className="bg-white rounded-lg shadow-sm overflow-hidden"
// // // //                             >
// // // //                                 <div className="px-6 py-4 border-b border-gray-200">
// // // //                                     <h2 className="text-lg font-medium text-gray-900">Recent Requests</h2>
// // // //                                 </div>
// // // //                                 <div className="divide-y divide-gray-200">
// // // //                                     {recentRequests?.length === 0 ? (
// // // //                                         <p className="px-6 py-4 text-gray-500 text-sm">No recent requests found.</p>
// // // //                                     ) : (
// // // //                                         recentRequests.map((request) => (
// // // //                                             <div key={request.id} className="px-6 py-4">
// // // //                                                 <div className="flex items-center justify-between">
// // // //                                                     <div>
// // // //                                                         <p className="font-medium text-gray-900">#{request.id} - {request.name}</p>
// // // //                                                         <p className="text-sm text-gray-500">
// // // //                                                             {new Date(request.date).toLocaleDateString()} • {request.items?.length} items
// // // //                                                         </p>
// // // //                                                     </div>
// // // //                                                     <span
// // // //                                                         className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "processing"
// // // //                                                             ? "bg-green-100 text-blue-800"
// // // //                                                             : request.status === "cancelled"
// // // //                                                                 ? "bg-red-100 text-red-800"
// // // //                                                                 : request.status === "completed"
// // // //                                                                     ? "bg-blue-100 text-green-800"
// // // //                                                                     : "bg-yellow-100 text-yellow-800"
// // // //                                                             }`}
// // // //                                                     >
// // // //                                                         {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // // //                                                     </span>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                         ))
// // // //                                     )}
// // // //                                 </div>
// // // //                                 <div className="px-6 py-4 bg-gray-50">
// // // //                                     <Link
// // // //                                         to="/admin/requests"
// // // //                                         className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
// // // //                                     >
// // // //                                         View all requests
// // // //                                     </Link>
// // // //                                 </div>
// // // //                             </motion.div>

// // // //                             {/* Sales Overview */}
// // // //                             <motion.div
// // // //                                 initial={{ opacity: 0, y: 20 }}
// // // //                                 animate={{ opacity: 1, y: 0 }}
// // // //                                 transition={{ duration: 0.3, delay: 0.5 }}
// // // //                                 className="bg-white rounded-lg shadow-sm overflow-hidden"
// // // //                             >
// // // //                                 <div className="px-6 py-4 border-b border-gray-200">
// // // //                                     <h2 className="text-lg font-medium text-gray-900">Overview</h2>
// // // //                                 </div>
// // // //                                 <div className="p-6">
// // // //                                     <div className="grid grid-cols-2 gap-6">
// // // //                                         <div className="border border-gray-200 rounded-lg p-4">
// // // //                                             <div className="flex items-center mb-2">
// // // //                                                 <DollarSign className="h-5 w-5 text-green-500 mr-2" />
// // // //                                                 <h3 className="text-sm font-medium text-gray-500">Monthly Requests</h3>
// // // //                                             </div>
// // // //                                             <p className="text-2xl font-bold text-gray-900">24</p>
// // // //                                             <p className="text-xs text-green-600 flex items-center mt-1">
// // // //                                                 <TrendingUp className="h-3 w-3 mr-1" /> 12% increase
// // // //                                             </p>
// // // //                                         </div>
// // // //                                         <div className="border border-gray-200 rounded-lg p-4">
// // // //                                             <div className="flex items-center mb-2">
// // // //                                                 <BarChart2 className="h-5 w-5 text-blue-500 mr-2" />
// // // //                                                 <h3 className="text-sm font-medium text-gray-500">Approval Rate</h3>
// // // //                                             </div>
// // // //                                             <p className="text-2xl font-bold text-gray-900">85%</p>
// // // //                                             <p className="text-xs text-green-600 flex items-center mt-1">
// // // //                                                 <TrendingUp className="h-3 w-3 mr-1" /> 5% increase
// // // //                                             </p>
// // // //                                         </div>
// // // //                                     </div>

// // // //                                     <div className="mt-6">
// // // //                                         <h3 className="text-sm font-medium text-gray-500 mb-4">Request Status Distribution</h3>
// // // //                                         <div className="space-y-4">
// // // //                                             <div>
// // // //                                                 <div className="flex justify-between text-sm mb-1">
// // // //                                                     <span className="text-gray-600">Pending</span>
// // // //                                                     <span className="font-medium text-gray-900">35%</span>
// // // //                                                 </div>
// // // //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// // // //                                                     <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "35%" }}></div>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <div className="flex justify-between text-sm mb-1">
// // // //                                                     <span className="text-gray-600">Approved</span>
// // // //                                                     <span className="font-medium text-gray-900">45%</span>
// // // //                                                 </div>
// // // //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// // // //                                                     <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <div className="flex justify-between text-sm mb-1">
// // // //                                                     <span className="text-gray-600">Completed</span>
// // // //                                                     <span className="font-medium text-gray-900">15%</span>
// // // //                                                 </div>
// // // //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// // // //                                                     <div className="bg-blue-500 h-2 rounded-full" style={{ width: "15%" }}></div>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                             <div>
// // // //                                                 <div className="flex justify-between text-sm mb-1">
// // // //                                                     <span className="text-gray-600">Rejected</span>
// // // //                                                     <span className="font-medium text-gray-900">5%</span>
// // // //                                                 </div>
// // // //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// // // //                                                     <div className="bg-red-500 h-2 rounded-full" style={{ width: "5%" }}></div>
// // // //                                                 </div>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                             </motion.div>
// // // //                         </div>
// // // //                     </>
// // // //                 )}
// // // //             </div>
// // // //         </AdminLayout>
// // // //     )
// // // // }

// // // // export default AdminDashboard


// // // "use client"
// // // import { useState, useEffect } from "react"
// // // import { Link } from "react-router-dom"
// // // import { motion } from "framer-motion"
// // // import { LayoutDashboard, ShoppingBag, Users, TrendingUp, AlertCircle, Package, DollarSign, BarChart2 } from 'lucide-react'
// // // import AdminLayout from "../../components/admin/AdminLayout"
// // // import { fetchDashboardStats, fetchRecentRequests } from "../../services/api"

// // // const AdminDashboard = () => {
// // //     const [stats, setStats] = useState({
// // //         totalRequests: 0,
// // //         pendingRequests: 0,
// // //         totalProducts: 0,
// // //         totalCustomers: 0,
// // //     })
// // //     const [recentRequests, setRecentRequests] = useState([])
// // //     const [loading, setLoading] = useState(true)
// // //     const [error, setError] = useState(null)

// // //     useEffect(() => {
// // //         const loadDashboardData = async () => {
// // //             setLoading(true)
// // //             try {
// // //                 const statsData = await fetchDashboardStats()
// // //                 setStats(statsData)

// // //                 const requestsData = await fetchRecentRequests()
// // //                 setRecentRequests(requestsData)

// // //                 setError(null)
// // //             } catch (err) {
// // //                 console.error("Error loading dashboard data:", err)
// // //                 setError("Failed to load dashboard data. Please try again later.")
// // //             } finally {
// // //                 setLoading(false)
// // //             }
// // //         }

// // //         loadDashboardData()
// // //     }, [])

// // //     const statCards = [
// // //         {
// // //             title: "Total Requests",
// // //             value: stats.totalRequests,
// // //             icon: ShoppingBag,
// // //             color: "bg-blue-500",
// // //             link: "/admin/requests",
// // //         },
// // //         {
// // //             title: "Pending Requests",
// // //             value: stats.pendingRequests,
// // //             icon: AlertCircle,
// // //             color: "bg-yellow-500",
// // //             link: "/admin/requests?status=pending",
// // //         },
// // //         {
// // //             title: "Total Products",
// // //             value: stats.totalProducts,
// // //             icon: Package,
// // //             color: "bg-green-500",
// // //             link: "/admin/products",
// // //         },
// // //         {
// // //             title: "Total Customers",
// // //             value: stats.totalCustomers,
// // //             icon: Users,
// // //             color: "bg-purple-500",
// // //             link: "/admin/customers",
// // //         },
// // //     ]

// // //     return (
// // //         <AdminLayout>
// // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // //                 <div className="mb-8">
// // //                     {/* <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1> */}
// // //                     <p className="mt-2 text-3xl text-gray-900">Welcome to your admin dashboard</p>
// // //                 </div>

// // //                 {loading ? (
// // //                     <div className="flex justify-center items-center h-64">
// // //                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // //                     </div>
// // //                 ) : error ? (
// // //                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
// // //                         <span className="block sm:inline">{error}</span>
// // //                     </div>
// // //                 ) : (
// // //                     <>
// // //                         {/* Stats Cards */}
// // //                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// // //                             {statCards.map((stat, index) => (
// // //                                 <motion.div
// // //                                     key={stat.title}
// // //                                     initial={{ opacity: 0, y: 20 }}
// // //                                     animate={{ opacity: 1, y: 0 }}
// // //                                     transition={{ duration: 0.3, delay: index * 0.1 }}
// // //                                 >
// // //                                     <Link to={stat.link} className="block">
// // //                                         <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
// // //                                             <div className="flex items-center">
// // //                                                 <div className={`${stat.color} rounded-full p-3 mr-4`}>
// // //                                                     <stat.icon className="h-6 w-6 text-white" />
// // //                                                 </div>
// // //                                                 <div>
// // //                                                     <p className="text-sm font-medium text-gray-500">{stat.title}</p>
// // //                                                     <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
// // //                                                 </div>
// // //                                             </div>
// // //                                         </div>
// // //                                     </Link>
// // //                                 </motion.div>
// // //                             ))}
// // //                         </div>

// // //                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //                             {/* Recent Requests */}
// // //                             <motion.div
// // //                                 initial={{ opacity: 0, y: 20 }}
// // //                                 animate={{ opacity: 1, y: 0 }}
// // //                                 transition={{ duration: 0.3, delay: 0.4 }}
// // //                                 className="bg-white rounded-lg shadow-sm overflow-hidden"
// // //                             >
// // //                                 <div className="px-6 py-4 border-b border-gray-200">
// // //                                     <h2 className="text-lg font-medium text-gray-900">Recent Requests</h2>
// // //                                 </div>
// // //                                 <div className="divide-y divide-gray-200">
// // //                                     {recentRequests?.length === 0 ? (
// // //                                         <p className="px-6 py-4 text-gray-500 text-sm">No recent requests found.</p>
// // //                                     ) : (
// // //                                         recentRequests.map((request) => (
// // //                                             <div key={request.id} className="px-6 py-4">
// // //                                                 <div className="flex items-center justify-between">
// // //                                                     <div>
// // //                                                         <p className="font-medium text-gray-900">#{request.id} - {request.name}</p>
// // //                                                         <p className="text-sm text-gray-500">
// // //                                                             {new Date(request.date).toLocaleDateString()} • {request.products?.length} items
// // //                                                         </p>
// // //                                                     </div>
// // //                                                     <span
// // //                                                         className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "processing"
// // //                                                             ? "bg-blue-100 text-blue-800"
// // //                                                             : request.status === "cancelled"
// // //                                                                 ? "bg-red-100 text-red-800"
// // //                                                                 : request.status === "completed"
// // //                                                                     ? "bg-green-100 text-green-800"
// // //                                                                     : "bg-yellow-100 text-yellow-800"
// // //                                                             }`}
// // //                                                     >
// // //                                                         {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// // //                                                     </span>
// // //                                                 </div>
// // //                                             </div>
// // //                                         ))
// // //                                     )}
// // //                                 </div>
// // //                                 <div className="px-6 py-4 bg-gray-50">
// // //                                     <Link
// // //                                         to="/admin/requests"
// // //                                         className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
// // //                                     >
// // //                                         View all requests
// // //                                     </Link>
// // //                                 </div>
// // //                             </motion.div>

// // //                             {/* Sales Overview */}
// // //                             <motion.div
// // //                                 initial={{ opacity: 0, y: 20 }}
// // //                                 animate={{ opacity: 1, y: 0 }}
// // //                                 transition={{ duration: 0.3, delay: 0.5 }}
// // //                                 className="bg-white rounded-lg shadow-sm overflow-hidden"
// // //                             >
// // //                                 <div className="px-6 py-4 border-b border-gray-200">
// // //                                     <h2 className="text-lg font-medium text-gray-900">Overview</h2>
// // //                                 </div>
// // //                                 <div className="p-6">
// // //                                     <div className="grid grid-cols-2 gap-6">
// // //                                         <div className="border border-gray-200 rounded-lg p-4">
// // //                                             <div className="flex items-center mb-2">
// // //                                                 <DollarSign className="h-5 w-5 text-green-500 mr-2" />
// // //                                                 <h3 className="text-sm font-medium text-gray-500">Monthly Requests</h3>
// // //                                             </div>
// // //                                             <p className="text-2xl font-bold text-gray-900">24</p>
// // //                                             <p className="text-xs text-green-600 flex items-center mt-1">
// // //                                                 <TrendingUp className="h-3 w-3 mr-1" /> 12% increase
// // //                                             </p>
// // //                                         </div>
// // //                                         <div className="border border-gray-200 rounded-lg p-4">
// // //                                             <div className="flex items-center mb-2">
// // //                                                 <BarChart2 className="h-5 w-5 text-blue-500 mr-2" />
// // //                                                 <h3 className="text-sm font-medium text-gray-500">Approval Rate</h3>
// // //                                             </div>
// // //                                             <p className="text-2xl font-bold text-gray-900">85%</p>
// // //                                             <p className="text-xs text-green-600 flex items-center mt-1">
// // //                                                 <TrendingUp className="h-3 w-3 mr-1" /> 5% increase
// // //                                             </p>
// // //                                         </div>
// // //                                     </div>

// // //                                     <div className="mt-6">
// // //                                         <h3 className="text-sm font-medium text-gray-500 mb-4">Request Status Distribution</h3>
// // //                                         <div className="space-y-4">
// // //                                             <div>
// // //                                                 <div className="flex justify-between text-sm mb-1">
// // //                                                     <span className="text-gray-600">Pending</span>
// // //                                                     <span className="font-medium text-gray-900">35%</span>
// // //                                                 </div>
// // //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// // //                                                     <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "35%" }}></div>
// // //                                                 </div>
// // //                                             </div>
// // //                                             <div>
// // //                                                 <div className="flex justify-between text-sm mb-1">
// // //                                                     <span className="text-gray-600">Approved</span>
// // //                                                     <span className="font-medium text-gray-900">45%</span>
// // //                                                 </div>
// // //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// // //                                                     <div className="bg-green-500 h-2 rounded-full" style={{ width: "45%" }}></div>
// // //                                                 </div>
// // //                                             </div>
// // //                                             <div>
// // //                                                 <div className="flex justify-between text-sm mb-1">
// // //                                                     <span className="text-gray-600">Completed</span>
// // //                                                     <span className="font-medium text-gray-900">15%</span>
// // //                                                 </div>
// // //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// // //                                                     <div className="bg-blue-500 h-2 rounded-full" style={{ width: "15%" }}></div>
// // //                                                 </div>
// // //                                             </div>
// // //                                             <div>
// // //                                                 <div className="flex justify-between text-sm mb-1">
// // //                                                     <span className="text-gray-600">Rejected</span>
// // //                                                     <span className="font-medium text-gray-900">5%</span>
// // //                                                 </div>
// // //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// // //                                                     <div className="bg-red-500 h-2 rounded-full" style={{ width: "5%" }}></div>
// // //                                                 </div>
// // //                                             </div>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </motion.div>
// // //                         </div>
// // //                     </>
// // //                 )}
// // //             </div>
// // //         </AdminLayout>
// // //     )
// // // }

// // // export default AdminDashboard



// // "use client"
// // import { useState, useEffect } from "react"
// // import { Link } from "react-router-dom"
// // import { motion } from "framer-motion"
// // import { LayoutDashboard, ShoppingBag, Users, TrendingUp, AlertCircle, Package, DollarSign, BarChart2, ArrowUp, ArrowDown } from 'lucide-react'
// // import AdminLayout from "../../components/admin/AdminLayout"
// // import { fetchDashboardStats, fetchRecentRequests, fetchRequests } from "../../services/api"

// // const AdminDashboard = () => {
// //     const [stats, setStats] = useState({
// //         totalRequests: 0,
// //         pendingRequests: 0,
// //         totalProducts: 0,
// //         totalCustomers: 0,
// //     })
// //     const [recentRequests, setRecentRequests] = useState([])
// //     const [monthlyData, setMonthlyData] = useState([])
// //     const [currentMonthStats, setCurrentMonthStats] = useState({
// //         total: 0,
// //         byStatus: { pending: 0, processing: 0, completed: 0, cancelled: 0 },
// //     })
// //     const [loading, setLoading] = useState(true)
// //     const [error, setError] = useState(null)

// //     useEffect(() => {
// //         const loadDashboardData = async () => {
// //             setLoading(true)
// //             try {
// //                 // Fetch dashboard stats
// //                 const statsData = await fetchDashboardStats()
// //                 setStats(statsData)
// //                 setMonthlyData(statsData.monthlyData || [])

// //                 // Fetch recent requests
// //                 const requestsData = await fetchRecentRequests()
// //                 setRecentRequests(requestsData)

// //                 // Fetch requests for the current month to calculate status distribution
// //                 const currentDate = new Date()
// //                 const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
// //                 const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

// //                 const currentMonthRequests = await fetchRequests({
// //                     startDate: startOfMonth.toISOString(),
// //                     endDate: endOfMonth.toISOString(),
// //                 })

// //                 // Calculate status distribution for the current month
// //                 const statusCounts = currentMonthRequests.requests.reduce((acc, request) => {
// //                     acc[request.status] = (acc[request.status] || 0) + 1
// //                     return acc
// //                 }, { pending: 0, processing: 0, completed: 0, cancelled: 0 })

// //                 setCurrentMonthStats({
// //                     total: currentMonthRequests.requests.length,
// //                     byStatus: statusCounts,
// //                 })

// //                 setError(null)
// //             } catch (err) {
// //                 console.error("Error loading dashboard data:", err)
// //                 setError("Failed to load dashboard data. Please try again later.")
// //             } finally {
// //                 setLoading(false)
// //             }
// //         }

// //         loadDashboardData()
// //     }, [])

// //     // Calculate Monthly Requests and Percentage Change
// //     const currentMonthIndex = monthlyData.length - 1
// //     const currentMonthRequests = monthlyData[currentMonthIndex]?.count || 0
// //     const previousMonthRequests = currentMonthIndex > 0 ? monthlyData[currentMonthIndex - 1]?.count || 0 : 0
// //     const requestChangePercent = previousMonthRequests === 0 ? 0 : ((currentMonthRequests - previousMonthRequests) / previousMonthRequests) * 100

// //     // Calculate Approval Rate and Percentage Change
// //     const totalCurrentMonth = currentMonthStats.total || 1 // Avoid division by zero
// //     const processingRequests = currentMonthStats.byStatus.processing || 0
// //     const approvalRate = (processingRequests / totalCurrentMonth) * 100

// //     // For approval rate change, we need previous month's data
// //     const previousMonthStats = monthlyData[currentMonthIndex - 1] ? monthlyData[currentMonthIndex - 1] : { count: 0 }
// //     const previousMonthTotal = previousMonthStats.count || 1
// //     const previousMonthProcessing = stats.requestsByStatus?.processing || 0 // Approximation
// //     const previousApprovalRate = (previousMonthProcessing / previousMonthTotal) * 100
// //     const approvalRateChange = approvalRate - previousApprovalRate

// //     // Calculate Status Distribution Percentages
// //     const statusDistribution = {
// //         pending: ((currentMonthStats.byStatus.pending || 0) / totalCurrentMonth) * 100,
// //         processing: ((currentMonthStats.byStatus.processing || 0) / totalCurrentMonth) * 100,
// //         completed: ((currentMonthStats.byStatus.completed || 0) / totalCurrentMonth) * 100,
// //         cancelled: ((currentMonthStats.byStatus.cancelled || 0) / totalCurrentMonth) * 100,
// //     }

// //     const statCards = [
// //         {
// //             title: "Total Requests",
// //             value: stats.totalRequests,
// //             icon: ShoppingBag,
// //             color: "bg-blue-500",
// //             link: "/admin/requests",
// //         },
// //         {
// //             title: "Pending Requests",
// //             value: stats.pendingRequests,
// //             icon: AlertCircle,
// //             color: "bg-yellow-500",
// //             link: "/admin/requests?status=pending",
// //         },
// //         {
// //             title: "Total Products",
// //             value: stats.totalProducts,
// //             icon: Package,
// //             color: "bg-green-500",
// //             link: "/admin/products",
// //         },
// //         {
// //             title: "Total Customers",
// //             value: stats.totalCustomers,
// //             icon: Users,
// //             color: "bg-purple-500",
// //             link: "/admin/customers",
// //         },
// //     ]

// //     return (
// //         <AdminLayout>
// //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// //                 <div className="mb-8">
// //                     <p className="mt-2 text-3xl text-gray-900">Welcome to your admin dashboard</p>
// //                 </div>

// //                 {loading ? (
// //                     <div className="flex justify-center items-center h-64">
// //                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// //                     </div>
// //                 ) : error ? (
// //                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
// //                         <span className="block sm:inline">{error}</span>
// //                     </div>
// //                 ) : (
// //                     <>
// //                         {/* Stats Cards */}
// //                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
// //                             {statCards.map((stat, index) => (
// //                                 <motion.div
// //                                     key={stat.title}
// //                                     initial={{ opacity: 0, y: 20 }}
// //                                     animate={{ opacity: 1, y: 0 }}
// //                                     transition={{ duration: 0.3, delay: index * 0.1 }}
// //                                 >
// //                                     <Link to={stat.link} className="block">
// //                                         <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
// //                                             <div className="flex items-center">
// //                                                 <div className={`${stat.color} rounded-full p-3 mr-4`}>
// //                                                     <stat.icon className="h-6 w-6 text-white" />
// //                                                 </div>
// //                                                 <div>
// //                                                     <p className="text-sm font-medium text-gray-500">{stat.title}</p>
// //                                                     <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </Link>
// //                                 </motion.div>
// //                             ))}
// //                         </div>

// //                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// //                             {/* Recent Requests */}
// //                             <motion.div
// //                                 initial={{ opacity: 0, y: 20 }}
// //                                 animate={{ opacity: 1, y: 0 }}
// //                                 transition={{ duration: 0.3, delay: 0.4 }}
// //                                 className="bg-white rounded-lg shadow-sm overflow-hidden"
// //                             >
// //                                 <div className="px-6 py-4 border-b border-gray-200">
// //                                     <h2 className="text-lg font-medium text-gray-900">Recent Requests</h2>
// //                                 </div>
// //                                 <div className="divide-y divide-gray-200">
// //                                     {recentRequests?.length === 0 ? (
// //                                         <p className="px-6 py-4 text-gray-500 text-sm">No recent requests found.</p>
// //                                     ) : (
// //                                         recentRequests.map((request, index) => (
// //                                             <div key={request.id} className="px-6 py-4">
// //                                                 <div className="flex items-center justify-between">
// //                                                     <div>
// //                                                         <p className="font-medium text-gray-900">{index + 1}. {request.name}</p>
// //                                                         <p className="text-sm text-gray-500">
// //                                                             {new Date(request.date).toLocaleDateString('en-GB', {
// //                                                                 day: '2-digit',
// //                                                                 month: '2-digit',
// //                                                                 year: 'numeric'
// //                                                             })} • {request.products?.length} items
// //                                                         </p>
// //                                                     </div>
// //                                                     <span
// //                                                         className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "processing"
// //                                                             ? "bg-blue-100 text-blue-800"
// //                                                             : request.status === "cancelled"
// //                                                                 ? "bg-red-100 text-red-800"
// //                                                                 : request.status === "completed"
// //                                                                     ? "bg-green-100 text-green-800"
// //                                                                     : "bg-yellow-100 text-yellow-800"
// //                                                             }`}
// //                                                     >
// //                                                         {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
// //                                                     </span>
// //                                                 </div>
// //                                             </div>
// //                                         ))
// //                                     )}
// //                                 </div>
// //                                 <div className="px-6 py-4 bg-gray-50">
// //                                     <Link
// //                                         to="/admin/requests"
// //                                         className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
// //                                     >
// //                                         View all requests
// //                                     </Link>
// //                                 </div>
// //                             </motion.div>

// //                             {/* Overview */}
// //                             <motion.div
// //                                 initial={{ opacity: 0, y: 20 }}
// //                                 animate={{ opacity: 1, y: 0 }}
// //                                 transition={{ duration: 0.3, delay: 0.5 }}
// //                                 className="bg-white rounded-lg shadow-sm overflow-hidden"
// //                             >
// //                                 <div className="px-6 py-4 border-b border-gray-200">
// //                                     <h2 className="text-lg font-medium text-gray-900">Overview</h2>
// //                                 </div>
// //                                 <div className="p-6">
// //                                     <div className="grid grid-cols-2 gap-6">
// //                                         <div className="border border-gray-200 rounded-lg p-4">
// //                                             <div className="flex items-center mb-2">
// //                                                 <DollarSign className="h-5 w-5 text-green-500 mr-2" />
// //                                                 <h3 className="text-sm font-medium text-gray-500">Monthly Requests</h3>
// //                                             </div>
// //                                             <p className="text-2xl font-bold text-gray-900">{currentMonthRequests}</p>
// //                                             <p className={`text-xs flex items-center mt-1 ${requestChangePercent >= 0 ? "text-green-600" : "text-red-600"
// //                                                 }`}>
// //                                                 {requestChangePercent >= 0 ? (
// //                                                     <ArrowUp className="h-3 w-3 mr-1" />
// //                                                 ) : (
// //                                                     <ArrowDown className="h-3 w-3 mr-1" />
// //                                                 )}
// //                                                 {Math.abs(requestChangePercent).toFixed(1)}% {requestChangePercent >= 0 ? "increase" : "decrease"}
// //                                             </p>
// //                                         </div>
// //                                         <div className="border border-gray-200 rounded-lg p-4">
// //                                             <div className="flex items-center mb-2">
// //                                                 <BarChart2 className="h-5 w-5 text-blue-500 mr-2" />
// //                                                 <h3 className="text-sm font-medium text-gray-500">Approval Rate</h3>
// //                                             </div>
// //                                             <p className="text-2xl font-bold text-gray-900">{approvalRate.toFixed(1)}%</p>
// //                                             <p className={`text-xs flex items-center mt-1 ${approvalRateChange >= 0 ? "text-green-600" : "text-red-600"
// //                                                 }`}>
// //                                                 {approvalRateChange >= 0 ? (
// //                                                     <ArrowUp className="h-3 w-3 mr-1" />
// //                                                 ) : (
// //                                                     <ArrowDown className="h-3 w-3 mr-1" />
// //                                                 )}
// //                                                 {Math.abs(approvalRateChange).toFixed(1)}% {approvalRateChange >= 0 ? "increase" : "decrease"}
// //                                             </p>
// //                                         </div>
// //                                     </div>

// //                                     <div className="mt-6">
// //                                         <h3 className="text-sm font-medium text-gray-500 mb-4">Request Status Distribution</h3>
// //                                         <div className="space-y-4">
// //                                             <div>
// //                                                 <div className="flex justify-between text-sm mb-1">
// //                                                     <span className="text-gray-600">Pending</span>
// //                                                     <span className="font-medium text-gray-900">{statusDistribution.pending.toFixed(1)}%</span>
// //                                                 </div>
// //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// //                                                     <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${statusDistribution.pending}%` }}></div>
// //                                                 </div>
// //                                             </div>
// //                                             <div>
// //                                                 <div className="flex justify-between text-sm mb-1">
// //                                                     <span className="text-gray-600">Processing</span>
// //                                                     <span className="font-medium text-gray-900">{statusDistribution.processing.toFixed(1)}%</span>
// //                                                 </div>
// //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// //                                                     <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${statusDistribution.processing}%` }}></div>
// //                                                 </div>
// //                                             </div>
// //                                             <div>
// //                                                 <div className="flex justify-between text-sm mb-1">
// //                                                     <span className="text-gray-600">Completed</span>
// //                                                     <span className="font-medium text-gray-900">{statusDistribution.completed.toFixed(1)}%</span>
// //                                                 </div>
// //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// //                                                     <div className="bg-green-500 h-2 rounded-full" style={{ width: `${statusDistribution.completed}%` }}></div>
// //                                                 </div>
// //                                             </div>
// //                                             <div>
// //                                                 <div className="flex justify-between text-sm mb-1">
// //                                                     <span className="text-gray-600">Rejected</span>
// //                                                     <span className="font-medium text-gray-900">{statusDistribution.cancelled.toFixed(1)}%</span>
// //                                                 </div>
// //                                                 <div className="w-full bg-gray-200 rounded-full h-2">
// //                                                     <div className="bg-red-500 h-2 rounded-full" style={{ width: `${statusDistribution.cancelled}%` }}></div>
// //                                                 </div>
// //                                             </div>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </motion.div>
// //                         </div>
// //                     </>
// //                 )}
// //             </div>
// //         </AdminLayout>
// //     )
// // }

// // export default AdminDashboard


// "use client"
// import { useState, useEffect } from "react"
// import { Link } from "react-router-dom"
// import { motion } from "framer-motion"
// import { LayoutDashboard, ShoppingBag, Users, TrendingUp, AlertCircle, Package, DollarSign, BarChart2, ArrowUp, ArrowDown } from 'lucide-react'
// import AdminLayout from "../../components/admin/AdminLayout"
// import { fetchDashboardStats, fetchRecentRequests, fetchRequests } from "../../services/api"

// const AdminDashboard = () => {
//     const [stats, setStats] = useState({
//         totalRequests: 0,
//         pendingRequests: 0,
//         totalProducts: 0,
//         totalCustomers: 0,
//     })
//     const [recentRequests, setRecentRequests] = useState([])
//     const [monthlyData, setMonthlyData] = useState([])
//     const [currentMonthStats, setCurrentMonthStats] = useState({
//         total: 0,
//         byStatus: { pending: 0, processing: 0, completed: 0, cancelled: 0 },
//     })
//     const [loading, setLoading] = useState(true)
//     const [error, setError] = useState(null)

//     useEffect(() => {
//         const loadDashboardData = async () => {
//             setLoading(true)
//             try {
//                 // Fetch dashboard stats
//                 const statsData = await fetchDashboardStats()
//                 setStats({
//                     totalRequests: statsData.stats?.total || 0,
//                     pendingRequests: statsData.stats?.byStatus?.pending || 0,
//                     totalProducts: statsData.totalProducts || 0,
//                     totalCustomers: statsData.totalCustomers || 0,
//                 })
//                 setMonthlyData(statsData.monthlyData || [])

//                 // Fetch recent requests
//                 const requestsData = await fetchRecentRequests()
//                 setRecentRequests(requestsData)

//                 // Fetch requests for the current month to calculate status distribution
//                 const currentDate = new Date()
//                 const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
//                 const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

//                 const currentMonthRequests = await fetchRequests({
//                     startDate: startOfMonth.toISOString(),
//                     endDate: endOfMonth.toISOString(),
//                 })

//                 // Calculate status distribution for the current month
//                 const statusCounts = currentMonthRequests.requests.reduce((acc, request) => {
//                     acc[request.status] = (acc[request.status] || 0) + 1
//                     return acc
//                 }, { pending: 0, processing: 0, completed: 0, cancelled: 0 })

//                 setCurrentMonthStats({
//                     total: currentMonthRequests.requests.length,
//                     byStatus: statusCounts,
//                 })

//                 setError(null)
//             } catch (err) {
//                 console.error("Error loading dashboard data:", err)
//                 setError("Failed to load dashboard data. Please try again later.")
//             } finally {
//                 setLoading(false)
//             }
//         }

//         loadDashboardData()
//     }, [])

//     // Calculate Monthly Requests and Percentage Change
//     const currentMonthRequests = currentMonthStats.total || 0
//     const currentMonthIndex = monthlyData.length - 1
//     const previousMonthRequests = currentMonthIndex > 0 ? (monthlyData[currentMonthIndex - 1]?.count || 0) : 0
//     const requestChangePercent = previousMonthRequests === 0 ? (currentMonthRequests > 0 ? 100 : 0) : ((currentMonthRequests - previousMonthRequests) / previousMonthRequests) * 100

//     // Calculate Approval Rate and Percentage Change
//     const totalCurrentMonth = currentMonthStats.total || 1 // Avoid division by zero
//     const processingRequests = currentMonthStats.byStatus.processing || 0
//     const approvalRate = (processingRequests / totalCurrentMonth) * 100

//     // For approval rate change, calculate based on previous month's data
//     const previousMonthTotal = currentMonthIndex > 0 ? (monthlyData[currentMonthIndex - 1]?.count || 0) : 0
//     const previousMonthProcessing = currentMonthIndex > 0 ? (monthlyData[currentMonthIndex - 1]?.byStatus?.processing || 0) : 0
//     const previousApprovalRate = previousMonthTotal > 0 ? (previousMonthProcessing / previousMonthTotal) * 100 : 0
//     const approvalRateChange = previousApprovalRate === 0 ? (approvalRate > 0 ? 100 : 0) : ((approvalRate - previousApprovalRate) / previousApprovalRate) * 100

//     // Calculate Status Distribution Percentages
//     const statusDistribution = {
//         pending: ((currentMonthStats.byStatus.pending || 0) / totalCurrentMonth) * 100,
//         processing: ((currentMonthStats.byStatus.processing || 0) / totalCurrentMonth) * 100,
//         completed: ((currentMonthStats.byStatus.completed || 0) / totalCurrentMonth) * 100,
//         cancelled: ((currentMonthStats.byStatus.cancelled || 0) / totalCurrentMonth) * 100,
//     }

//     const statCards = [
//         {
//             title: "Total Requests",
//             value: stats.totalRequests,
//             icon: ShoppingBag,
//             color: "bg-blue-500",
//             link: "/admin/requests",
//         },
//         {
//             title: "Pending Requests",
//             value: stats.pendingRequests,
//             icon: AlertCircle,
//             color: "bg-yellow-500",
//             link: "/admin/requests?status=pending",
//         },
//         {
//             title: "Total Products",
//             value: stats.totalProducts,
//             icon: Package,
//             color: "bg-green-500",
//             link: "/admin/products",
//         },
//         {
//             title: "Total Customers",
//             value: stats.totalCustomers,
//             icon: Users,
//             color: "bg-purple-500",
//             link: "/admin/customers",
//         },
//     ]

//     return (
//         <AdminLayout>
//             <div className="px-4 sm:px-6 lg:px-8 py-8">
//                 <div className="mb-8">
//                     <p className="mt-2 text-3xl text-gray-900">Welcome to your admin dashboard</p>
//                 </div>

//                 {loading ? (
//                     <div className="flex justify-center items-center h-64">
//                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
//                     </div>
//                 ) : error ? (
//                     <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//                         <span className="block sm:inline">{error}</span>
//                     </div>
//                 ) : (
//                     <>
//                         {/* Stats Cards */}
//                         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
//                             {statCards.map((stat, index) => (
//                                 <motion.div
//                                     key={stat.title}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     animate={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                                 >
//                                     <Link to={stat.link} className="block">
//                                         <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
//                                             <div className="flex items-center">
//                                                 <div className={`${stat.color} rounded-full p-3 mr-4`}>
//                                                     <stat.icon className="h-6 w-6 text-white" />
//                                                 </div>
//                                                 <div>
//                                                     <p className="text-sm font-medium text-gray-500">{stat.title}</p>
//                                                     <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </Link>
//                                 </motion.div>
//                             ))}
//                         </div>

//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                             {/* Recent Requests */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.3, delay: 0.4 }}
//                                 className="bg-white rounded-lg shadow-sm overflow-hidden"
//                             >
//                                 <div className="px-6 py-4 border-b border-gray-200">
//                                     <h2 className="text-lg font-medium text-gray-900">Recent Requests</h2>
//                                 </div>
//                                 <div className="divide-y divide-gray-200">
//                                     {recentRequests?.length === 0 ? (
//                                         <p className="px-6 py-4 text-gray-500 text-sm">No recent requests found.</p>
//                                     ) : (
//                                         recentRequests.map((request, index) => (
//                                             <div key={request.id} className="px-6 py-4">
//                                                 <div className="flex items-center justify-between">
//                                                     <div>
//                                                         <p className="font-medium text-gray-900">{index + 1}. {request.name}</p>
//                                                         <p className="text-sm text-gray-500">
//                                                             {new Date(request.date).toLocaleDateString('en-GB', {
//                                                                 day: '2-digit',
//                                                                 month: '2-digit',
//                                                                 year: 'numeric'
//                                                             })} • {request.products?.length} items
//                                                         </p>
//                                                     </div>
//                                                     <span
//                                                         className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "processing"
//                                                             ? "bg-blue-100 text-blue-800"
//                                                             : request.status === "cancelled"
//                                                                 ? "bg-red-100 text-red-800"
//                                                                 : request.status === "completed"
//                                                                     ? "bg-green-100 text-green-800"
//                                                                     : "bg-yellow-100 text-yellow-800"
//                                                             }`}
//                                                     >
//                                                         {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
//                                                     </span>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     )}
//                                 </div>
//                                 <div className="px-6 py-4 bg-gray-50">
//                                     <Link
//                                         to="/admin/requests"
//                                         className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
//                                     >
//                                         View all requests
//                                     </Link>
//                                 </div>
//                             </motion.div>

//                             {/* Overview */}
//                             <motion.div
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.3, delay: 0.5 }}
//                                 className="bg-white rounded-lg shadow-sm overflow-hidden"
//                             >
//                                 <div className="px-6 py-4 border-b border-gray-200">
//                                     <h2 className="text-lg font-medium text-gray-900">Overview</h2>
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="grid grid-cols-2 gap-6">
//                                         <div className="border border-gray-200 rounded-lg p-4">
//                                             <div className="flex items-center mb-2">
//                                                 <DollarSign className="h-5 w-5 text-green-500 mr-2" />
//                                                 <h3 className="text-sm font-medium text-gray-500">Monthly Requests</h3>
//                                             </div>
//                                             <p className="text-2xl font-bold text-gray-900">{currentMonthRequests}</p>
//                                             <p className={`text-xs flex items-center mt-1 ${requestChangePercent >= 0 ? "text-green-600" : "text-red-600"}`}>
//                                                 {requestChangePercent >= 0 ? (
//                                                     <ArrowUp className="h-3 w-3 mr-1" />
//                                                 ) : (
//                                                     <ArrowDown className="h-3 w-3 mr-1" />
//                                                 )}
//                                                 {Math.abs(requestChangePercent).toFixed(1)}% {requestChangePercent >= 0 ? "increase" : "decrease"}
//                                             </p>
//                                         </div>
//                                         <div className="border border-gray-200 rounded-lg p-4">
//                                             <div className="flex items-center mb-2">
//                                                 <BarChart2 className="h-5 w-5 text-blue-500 mr-2" />
//                                                 <h3 className="text-sm font-medium text-gray-500">Approval Rate</h3>
//                                             </div>
//                                             <p className="text-2xl font-bold text-gray-900">{approvalRate.toFixed(1)}%</p>
//                                             <p className={`text-xs flex items-center mt-1 ${approvalRateChange >= 0 ? "text-green-600" : "text-red-600"}`}>
//                                                 {approvalRateChange >= 0 ? (
//                                                     <ArrowUp className="h-3 w-3 mr-1" />
//                                                 ) : (
//                                                     <ArrowDown className="h-3 w-3 mr-1" />
//                                                 )}
//                                                 {Math.abs(approvalRateChange).toFixed(1)}% {approvalRateChange >= 0 ? "increase" : "decrease"}
//                                             </p>
//                                         </div>
//                                     </div>

//                                     <div className="mt-6">
//                                         <h3 className="text-sm font-medium text-gray-500 mb-4">Request Status Distribution</h3>
//                                         <div className="space-y-4">
//                                             <div>
//                                                 <div className="flex justify-between text-sm mb-1">
//                                                     <span className="text-gray-600">Pending</span>
//                                                     <span className="font-medium text-gray-900">{statusDistribution.pending.toFixed(1)}%</span>
//                                                 </div>
//                                                 <div className="w-full bg-gray-200 rounded-full h-2">
//                                                     <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${statusDistribution.pending}%` }}></div>
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <div className="flex justify-between text-sm mb-1">
//                                                     <span className="text-gray-600">Processing</span>
//                                                     <span className="font-medium text-gray-900">{statusDistribution.processing.toFixed(1)}%</span>
//                                                 </div>
//                                                 <div className="w-full bg-gray-200 rounded-full h-2">
//                                                     <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${statusDistribution.processing}%` }}></div>
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <div className="flex justify-between text-sm mb-1">
//                                                     <span className="text-gray-600">Completed</span>
//                                                     <span className="font-medium text-gray-900">{statusDistribution.completed.toFixed(1)}%</span>
//                                                 </div>
//                                                 <div className="w-full bg-gray-200 rounded-full h-2">
//                                                     <div className="bg-green-500 h-2 rounded-full" style={{ width: `${statusDistribution.completed}%` }}></div>
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <div className="flex justify-between text-sm mb-1">
//                                                     <span className="text-gray-600">Rejected</span>
//                                                     <span className="font-medium text-gray-900">{statusDistribution.cancelled.toFixed(1)}%</span>
//                                                 </div>
//                                                 <div className="w-full bg-gray-200 rounded-full h-2">
//                                                     <div className="bg-red-500 h-2 rounded-full" style={{ width: `${statusDistribution.cancelled}%` }}></div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </AdminLayout>
//     )
// }

// export default AdminDashboard


"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { LayoutDashboard, ShoppingBag, Users, TrendingUp, AlertCircle, Package, DollarSign, BarChart2, ArrowUp, ArrowDown } from 'lucide-react'
import AdminLayout from "../../components/admin/AdminLayout"
import { fetchDashboardStats, fetchRecentRequests, fetchRequests } from "../../services/api"

const AdminDashboard = () => {
    const [stats, setStats] = useState({
        totalRequests: 0,
        pendingRequests: 0,
        totalProducts: 0,
        totalCustomers: 0,
    })
    const [recentRequests, setRecentRequests] = useState([])
    const [monthlyData, setMonthlyData] = useState([])
    const [currentMonthStats, setCurrentMonthStats] = useState({
        total: 0,
        byStatus: { pending: 0, processing: 0, completed: 0, cancelled: 0 },
    })
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadDashboardData = async () => {
            setLoading(true)
            try {
                // Fetch dashboard stats
                const statsData = await fetchDashboardStats()
                console.log("Stats Data:", statsData) // Debug the API response

                // Fetch requests for the current month to calculate status distribution
                const currentDate = new Date()
                const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1)
                const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)

                const currentMonthRequests = await fetchRequests({
                    startDate: startOfMonth.toISOString(),
                    endDate: endOfMonth.toISOString(),
                })

                // Calculate status distribution for the current month
                const statusCounts = currentMonthRequests.requests.reduce((acc, request) => {
                    acc[request.status] = (acc[request.status] || 0) + 1
                    return acc
                }, { pending: 0, processing: 0, completed: 0, cancelled: 0 })

                setCurrentMonthStats({
                    total: currentMonthRequests.requests.length,
                    byStatus: statusCounts,
                })

                // Fetch all requests to calculate total and pending requests if statsData is incorrect
                const allRequests = await fetchRequests({})
                const totalRequests = allRequests.requests.length
                const pendingRequests = allRequests.requests.filter(request => request.status === "pending").length

                // Set stats, falling back to calculated values if statsData is incorrect
                setStats({
                    totalRequests: statsData.stats?.total || totalRequests,
                    pendingRequests: statsData.stats?.byStatus?.pending || pendingRequests,
                    totalProducts: statsData.totalProducts || 0,
                    totalCustomers: statsData.totalCustomers || 0,
                })
                setMonthlyData(statsData.monthlyData || [])

                // Fetch recent requests
                const requestsData = await fetchRecentRequests()
                setRecentRequests(requestsData)

                setError(null)
            } catch (err) {
                console.error("Error loading dashboard data:", err)
                setError("Failed to load dashboard data. Please try again later.")
            } finally {
                setLoading(false)
            }
        }

        loadDashboardData()
    }, [])

    // Calculate Monthly Requests and Percentage Change
    const currentMonthRequests = currentMonthStats.total || 0
    const currentMonthIndex = monthlyData.length - 1
    const previousMonthRequests = currentMonthIndex > 0 ? (monthlyData[currentMonthIndex - 1]?.count || 0) : 0
    const requestChangePercent = previousMonthRequests === 0 ? (currentMonthRequests > 0 ? 100 : 0) : ((currentMonthRequests - previousMonthRequests) / previousMonthRequests) * 100

    // Calculate Approval Rate and Percentage Change
    const totalCurrentMonth = currentMonthStats.total || 1 // Avoid division by zero
    const processingRequests = currentMonthStats.byStatus.processing || 0
    const approvalRate = (processingRequests / totalCurrentMonth) * 100

    // For approval rate change, calculate based on previous month's data
    const previousMonthTotal = currentMonthIndex > 0 ? (monthlyData[currentMonthIndex - 1]?.count || 0) : 0
    const previousMonthProcessing = currentMonthIndex > 0 ? (monthlyData[currentMonthIndex - 1]?.byStatus?.processing || 0) : 0
    const previousApprovalRate = previousMonthTotal > 0 ? (previousMonthProcessing / previousMonthTotal) * 100 : 0
    const approvalRateChange = previousApprovalRate === 0 ? (approvalRate > 0 ? 100 : 0) : ((approvalRate - previousApprovalRate) / previousApprovalRate) * 100

    // Calculate Status Distribution Percentages
    const statusDistribution = {
        pending: ((currentMonthStats.byStatus.pending || 0) / totalCurrentMonth) * 100,
        processing: ((currentMonthStats.byStatus.processing || 0) / totalCurrentMonth) * 100,
        completed: ((currentMonthStats.byStatus.completed || 0) / totalCurrentMonth) * 100,
        cancelled: ((currentMonthStats.byStatus.cancelled || 0) / totalCurrentMonth) * 100,
    }

    const statCards = [
        {
            title: "Total Requests",
            value: stats.totalRequests,
            icon: ShoppingBag,
            color: "bg-blue-500",
            link: "/admin/requests",
        },
        {
            title: "Pending Requests",
            value: stats.pendingRequests,
            icon: AlertCircle,
            color: "bg-yellow-500",
            link: "/admin/requests?status=pending",
        },
        {
            title: "Total Products",
            value: stats.totalProducts,
            icon: Package,
            color: "bg-green-500",
            link: "/admin/products",
        },
        {
            title: "Total Customers",
            value: stats.totalCustomers,
            icon: Users,
            color: "bg-purple-500",
            link: "/admin/customers",
        },
    ]

    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    <p className="mt-2 text-3xl text-gray-900">Welcome to your admin dashboard</p>
                </div>

                {loading ? (
                    <div className="flex justify-center items-center h-64">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                    </div>
                ) : error ? (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                        <span className="block sm:inline">{error}</span>
                    </div>
                ) : (
                    <>
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                            {statCards.map((stat, index) => (
                                <motion.div
                                    key={stat.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <Link to={stat.link} className="block">
                                        <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                                            <div className="flex items-center">
                                                <div className={`${stat.color} rounded-full p-3 mr-4`}>
                                                    <stat.icon className="h-6 w-6 text-white" />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Recent Requests */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.4 }}
                                className="bg-white rounded-lg shadow-sm overflow-hidden"
                            >
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h2 className="text-lg font-medium text-gray-900">Recent Requests</h2>
                                </div>
                                <div className="divide-y divide-gray-200">
                                    {recentRequests?.length === 0 ? (
                                        <p className="px-6 py-4 text-gray-500 text-sm">No recent requests found.</p>
                                    ) : (
                                        recentRequests.map((request, index) => (
                                            <div key={request.id} className="px-6 py-4">
                                                <div className="flex items-center justify-between">
                                                    <div>
                                                        <p className="font-medium text-gray-900">{index + 1}. {request.name}</p>
                                                        <p className="text-sm text-gray-500">
                                                            {new Date(request.date).toLocaleDateString('en-GB', {
                                                                day: '2-digit',
                                                                month: '2-digit',
                                                                year: 'numeric'
                                                            })} • {request.products?.length} items
                                                        </p>
                                                    </div>
                                                    <span
                                                        className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${request.status === "processing"
                                                                ? "bg-blue-100 text-blue-800"
                                                                : request.status === "cancelled"
                                                                    ? "bg-red-100 text-red-800"
                                                                    : request.status === "completed"
                                                                        ? "bg-green-100 text-green-800"
                                                                        : "bg-yellow-100 text-yellow-800"
                                                            }`}
                                                    >
                                                        {request.status.charAt(0).toUpperCase() + request.status.slice(1)}
                                                    </span>
                                                </div>
                                            </div>
                                        ))
                                    )}
                                </div>
                                <div className="px-6 py-4 bg-gray-50">
                                    <Link
                                        to="/admin/requests"
                                        className="text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                                    >
                                        View all requests
                                    </Link>
                                </div>
                            </motion.div>

                            {/* Overview */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.5 }}
                                className="bg-white rounded-lg shadow-sm overflow-hidden"
                            >
                                <div className="px-6 py-4 border-b border-gray-200">
                                    <h2 className="text-lg font-medium text-gray-900">Overview</h2>
                                </div>
                                <div className="p-6">
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center mb-2">
                                                <DollarSign className="h-5 w-5 text-green-500 mr-2" />
                                                <h3 className="text-sm font-medium text-gray-500">Monthly Requests</h3>
                                            </div>
                                            <p className="text-2xl font-bold text-gray-900">{currentMonthRequests}</p>
                                            <p className={`text-xs flex items-center mt-1 ${requestChangePercent >= 0 ? "text-green-600" : "text-red-600"}`}>
                                                {requestChangePercent >= 0 ? (
                                                    <ArrowUp className="h-3 w-3 mr-1" />
                                                ) : (
                                                    <ArrowDown className="h-3 w-3 mr-1" />
                                                )}
                                                {Math.abs(requestChangePercent).toFixed(1)}% {requestChangePercent >= 0 ? "increase" : "decrease"}
                                            </p>
                                        </div>
                                        <div className="border border-gray-200 rounded-lg p-4">
                                            <div className="flex items-center mb-2">
                                                <BarChart2 className="h-5 w-5 text-blue-500 mr-2" />
                                                <h3 className="text-sm font-medium text-gray-500">Approval Rate</h3>
                                            </div>
                                            <p className="text-2xl font-bold text-gray-900">{approvalRate.toFixed(1)}%</p>
                                            <p className={`text-xs flex items-center mt-1 ${approvalRateChange >= 0 ? "text-green-600" : "text-red-600"}`}>
                                                {approvalRateChange >= 0 ? (
                                                    <ArrowUp className="h-3 w-3 mr-1" />
                                                ) : (
                                                    <ArrowDown className="h-3 w-3 mr-1" />
                                                )}
                                                {Math.abs(approvalRateChange).toFixed(1)}% {approvalRateChange >= 0 ? "increase" : "decrease"}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <h3 className="text-sm font-medium text-gray-500 mb-4">Request Status Distribution</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-600">Pending</span>
                                                    <span className="font-medium text-gray-900">{statusDistribution.pending.toFixed(1)}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: `${statusDistribution.pending}%` }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-600">Processing</span>
                                                    <span className="font-medium text-gray-900">{statusDistribution.processing.toFixed(1)}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${statusDistribution.processing}%` }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-600">Completed</span>
                                                    <span className="font-medium text-gray-900">{statusDistribution.completed.toFixed(1)}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-green-500 h-2 rounded-full" style={{ width: `${statusDistribution.completed}%` }}></div>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="flex justify-between text-sm mb-1">
                                                    <span className="text-gray-600">Rejected</span>
                                                    <span className="font-medium text-gray-900">{statusDistribution.cancelled.toFixed(1)}%</span>
                                                </div>
                                                <div className="w-full bg-gray-200 rounded-full h-2">
                                                    <div className="bg-red-500 h-2 rounded-full" style={{ width: `${statusDistribution.cancelled}%` }}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </>
                )}
            </div>
        </AdminLayout>
    )
}

export default AdminDashboard