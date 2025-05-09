// "use client"

// import { useState } from "react"
// import { Link, useLocation, useNavigate } from "react-router-dom"
// import { motion } from "framer-motion"
// import { LayoutDashboard, Package, ShoppingBag, Users, Settings, LogOut, Menu, X, ChevronDown } from "lucide-react"
// import { useAuth } from "../../contexts/AuthContext"

// const AdminLayout = ({ children }) => {
//   const [sidebarOpen, setSidebarOpen] = useState(false)
//   const { logout } = useAuth()
//   const location = useLocation()
//   const navigate = useNavigate()

//   const handleLogout = () => {
//     logout()
//     navigate("/admin")
//   }

//   const navigation = [
//     { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
//     { name: "Products", href: "/admin/products", icon: Package },
//     { name: "Requests", href: "/admin/requests", icon: ShoppingBag },
//     { name: "Customers", href: "/admin/customers", icon: Users },
//     { name: "Settings", href: "/admin/settings", icon: Settings },
//   ]

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Mobile sidebar */}
//       <div className="lg:hidden">
//         <div className="fixed inset-0 z-40 flex">
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: sidebarOpen ? 0 : "-100%" }}
//             transition={{ duration: 0.3 }}
//             className={`fixed inset-0 z-40 flex ${sidebarOpen ? "block" : "hidden"}`}
//           >
//             {/* Sidebar overlay */}
//             <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>

//             {/* Sidebar */}
//             <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white pt-5 pb-4">
//               <div className="absolute top-0 right-0 -mr-12 pt-2">
//                 <button
//                   type="button"
//                   className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
//                   onClick={() => setSidebarOpen(false)}
//                 >
//                   <span className="sr-only">Close sidebar</span>
//                   <X className="h-6 w-6 text-white" aria-hidden="true" />
//                 </button>
//               </div>

//               <div className="flex flex-shrink-0 items-center px-4">
//                 <img className="h-8 w-auto" src="/images/logo.png" alt="Raycom" />
//               </div>
//               <div className="mt-5 h-0 flex-1 overflow-y-auto">
//                 <nav className="space-y-1 px-2">
//                   {navigation.map((item) => (
//                     <Link
//                       key={item.name}
//                       to={item.href}
//                       className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
//                         location.pathname === item.href
//                           ? "bg-gray-100 text-gray-900"
//                           : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                       }`}
//                     >
//                       <item.icon
//                         className={`mr-4 h-6 w-6 flex-shrink-0 ${
//                           location.pathname === item.href ? "text-red-600" : "text-gray-400 group-hover:text-gray-500"
//                         }`}
//                         aria-hidden="true"
//                       />
//                       {item.name}
//                     </Link>
//                   ))}
//                 </nav>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>

//       {/* Static sidebar for desktop */}
//       <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
//         <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white pt-5">
//           <div className="flex flex-shrink-0 items-center px-4">
//             <img className="h-8 w-auto" src="/images/logo.png" alt="Raycom" />
//           </div>
//           <div className="mt-5 flex flex-grow flex-col">
//             <nav className="flex-1 space-y-1 px-2 pb-4">
//               {navigation.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.href}
//                   className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
//                     location.pathname === item.href
//                       ? "bg-gray-100 text-gray-900"
//                       : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
//                   }`}
//                 >
//                   <item.icon
//                     className={`mr-3 h-6 w-6 flex-shrink-0 ${
//                       location.pathname === item.href ? "text-red-600" : "text-gray-400 group-hover:text-gray-500"
//                     }`}
//                     aria-hidden="true"
//                   />
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>
//           </div>
//         </div>
//       </div>

//       {/* Main content */}
//       <div className="flex flex-1 flex-col lg:pl-64">
//         <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
//           <button
//             type="button"
//             className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 lg:hidden"
//             onClick={() => setSidebarOpen(true)}
//           >
//             <span className="sr-only">Open sidebar</span>
//             <Menu className="h-6 w-6" aria-hidden="true" />
//           </button>
//           <div className="flex flex-1 justify-between px-4">
//             <div className="flex flex-1">
//               <h1 className="text-2xl font-semibold text-gray-900 self-center">Admin Panel</h1>
//             </div>
//             <div className="ml-4 flex items-center md:ml-6">
//               <div className="relative ml-3">
//                 <div>
//                   <button
//                     type="button"
//                     className="flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
//                     id="user-menu-button"
//                   >
//                     <span className="sr-only">Open user menu</span>
//                     <div className="flex items-center">
//                       <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600">
//                         A
//                       </div>
//                       <span className="ml-2 text-gray-700">Admin</span>
//                       <ChevronDown className="ml-1 h-4 w-4 text-gray-400" />
//                     </div>
//                   </button>
//                 </div>
//               </div>
//               <button
//                 onClick={handleLogout}
//                 className="ml-4 flex items-center text-sm text-gray-700 hover:text-red-600"
//               >
//                 <LogOut className="h-5 w-5 mr-1" />
//                 Logout
//               </button>
//             </div>
//           </div>
//         </div>

//         <main className="flex-1">{children}</main>
//       </div>
//     </div>
//   )
// }

// export default AdminLayout



"use client"

import { useState, useEffect } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { LayoutDashboard, Package, ShoppingBag, Users, Settings, LogOut, Menu, X, Bell } from "lucide-react"
import { useAuth } from "../../contexts/AuthContext"

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const { logout, user } = useAuth()
  const location = useLocation()
  const navigate = useNavigate()

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarOpen && !event.target.closest(".sidebar") && !event.target.closest(".sidebar-trigger")) {
        setSidebarOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [sidebarOpen])

  // Close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  const navigation = [
    { name: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Products", href: "/admin/products", icon: Package },
    { name: "Requests", href: "/admin/requests", icon: ShoppingBag },
    { name: "Customers", href: "/admin/customers", icon: Users },
    { name: "Settings", href: "/admin/settings", icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Mobile sidebar */}
      <div className="lg:hidden">
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
        )}

        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: sidebarOpen ? 0 : "-100%" }}
          transition={{ duration: 0.3 }}
          className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg sidebar ${sidebarOpen ? "block" : "hidden"}`}
        >
          <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200">
            <Link to="/admin/dashboard" className="flex items-center">
              <img className="h-8 w-auto" src="/images/logo.png" alt="Raycom" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Admin</span>
            </Link>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="overflow-y-auto h-full pb-16">
            <nav className="mt-5 px-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${location.pathname === item.href
                    ? "bg-red-50 text-red-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                >
                  <item.icon
                    className={`mr-4 h-6 w-6 flex-shrink-0 ${location.pathname === item.href ? "text-red-600" : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </motion.div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col sidebar">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-gray-200 bg-white">
          <div className="flex items-center h-16 flex-shrink-0 px-4 border-b border-gray-200">
            <Link to="/admin/dashboard" className="flex items-center">
              <img className="h-8 w-auto" src="https://i.ibb.co/xqDJN8vj/Screenshot-2025-05-05-154412-1-1.png" alt="Raycom" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Admin</span>
            </Link>
          </div>
          <div className="flex flex-grow flex-col">
            <nav className="flex-1 space-y-1 px-2 py-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md ${location.pathname === item.href
                    ? "bg-red-50 text-red-600"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                >
                  <item.icon
                    className={`mr-3 h-6 w-6 flex-shrink-0 ${location.pathname === item.href ? "text-red-600" : "text-gray-400 group-hover:text-gray-500"
                      }`}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
          <div className="flex-shrink-0 border-t border-gray-200 p-4">
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <LogOut className="mr-3 h-5 w-5 text-gray-400" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500 lg:hidden sidebar-trigger"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
          <div className="flex flex-1 justify-between px-4">
            <div className="flex flex-1 items-center">
              <h1 className="ml-3 text-2xl font-semibold text-gray-900">
                {navigation.find((item) => item.href === location.pathname)?.name || "Admin Panel"}
              </h1>
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              {/* Notification bell */}
              <button className="relative p-1 text-gray-400 hover:text-gray-500 focus:outline-none">
                <Bell className="h-6 w-6" />
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-red-600"></span>
              </button>

              {/* Profile dropdown */}
              <div className="relative ml-3 mr-5">
                <div className="flex items-center">
                  <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 mr-2">
                    {user?.firstName?.charAt(0) || user?.username?.charAt(0) || "A"}
                  </div>
                  <span className="text-sm font-medium text-gray-700">
                    {user?.firstName || user?.username || "Admin"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <main className="flex-1 pb-8">{children}</main>
      </div>
    </div>
  )
}

export default AdminLayout

