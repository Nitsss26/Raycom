// // // // "use client"

// // // // import { useState } from "react"
// // // // import { useNavigate } from "react-router-dom"
// // // // import { motion } from "framer-motion"
// // // // import { useAuth } from "../../contexts/AuthContext"
// // // // import { Lock } from "lucide-react"

// // // // const AdminLogin = () => {
// // // //   const [username, setUsername] = useState("")
// // // //   const [password, setPassword] = useState("")
// // // //   const [error, setError] = useState("")
// // // //   const [loading, setLoading] = useState(false)
// // // //   const { login } = useAuth()
// // // //   const navigate = useNavigate()

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault()

// // // //     if (!username || !password) {
// // // //       setError("Please enter both username and password")
// // // //       return
// // // //     }

// // // //     setLoading(true)
// // // //     setError("")

// // // //     try {
// // // //       // For demo purposes, hardcoded credentials as per requirements
// // // //       if (username === "admin" && password === "Nitesh") {
// // // //         await login(username)
// // // //         navigate("/admin/dashboard")
// // // //       } else {
// // // //         setError("Invalid credentials")
// // // //       }
// // // //     } catch (err) {
// // // //       setError("Failed to login. Please try again.")
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
// // // //       <div className="max-w-md w-full space-y-8">
// // // //         <div>
// // // //           <div className="flex justify-center">
// // // //             <img src="/images/logo.png" alt="Raycom" className="h-16" />
// // // //           </div>
// // // //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
// // // //         </div>

// // // //         <motion.div
// // // //           className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
// // // //           initial={{ opacity: 0, y: 20 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           transition={{ duration: 0.5 }}
// // // //         >
// // // //           {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

// // // //           <form className="space-y-6" onSubmit={handleSubmit}>
// // // //             <div>
// // // //               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
// // // //                 Username
// // // //               </label>
// // // //               <div className="mt-1">
// // // //                 <input
// // // //                   id="username"
// // // //                   name="username"
// // // //                   type="text"
// // // //                   autoComplete="username"
// // // //                   required
// // // //                   value={username}
// // // //                   onChange={(e) => setUsername(e.target.value)}
// // // //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //             <div>
// // // //               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// // // //                 Password
// // // //               </label>
// // // //               <div className="mt-1">
// // // //                 <input
// // // //                   id="password"
// // // //                   name="password"
// // // //                   type="password"
// // // //                   autoComplete="current-password"
// // // //                   required
// // // //                   value={password}
// // // //                   onChange={(e) => setPassword(e.target.value)}
// // // //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // //                 />
// // // //               </div>
// // // //             </div>

// // // //             <div>
// // // //               <button
// // // //                 type="submit"
// // // //                 disabled={loading}
// // // //                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // // //               >
// // // //                 {loading ? (
// // // //                   <span className="flex items-center">
// // // //                     <svg
// // // //                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
// // // //                       xmlns="http://www.w3.org/2000/svg"
// // // //                       fill="none"
// // // //                       viewBox="0 0 24 24"
// // // //                     >
// // // //                       <circle
// // // //                         className="opacity-25"
// // // //                         cx="12"
// // // //                         cy="12"
// // // //                         r="10"
// // // //                         stroke="currentColor"
// // // //                         strokeWidth="4"
// // // //                       ></circle>
// // // //                       <path
// // // //                         className="opacity-75"
// // // //                         fill="currentColor"
// // // //                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // //                       ></path>
// // // //                     </svg>
// // // //                     Signing in...
// // // //                   </span>
// // // //                 ) : (
// // // //                   <span className="flex items-center">
// // // //                     <Lock className="h-5 w-5 mr-2" />
// // // //                     Sign in
// // // //                   </span>
// // // //                 )}
// // // //               </button>
// // // //             </div>
// // // //           </form>
// // // //         </motion.div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default AdminLogin

// // // "use client"

// // // import { useState } from "react"
// // // import { useNavigate } from "react-router-dom"
// // // import { motion } from "framer-motion"
// // // import { useAuth } from "../../contexts/AuthContext"
// // // import { Lock } from "lucide-react"

// // // const AdminLogin = () => {
// // //   const [username, setUsername] = useState("")
// // //   const [password, setPassword] = useState("")
// // //   const [error, setError] = useState("")
// // //   const [loading, setLoading] = useState(false)
// // //   const { login } = useAuth()
// // //   const navigate = useNavigate()

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault()

// // //     if (!username || !password) {
// // //       setError("Please enter both username and password")
// // //       return
// // //     }

// // //     setLoading(true)
// // //     setError("")

// // //     try {
// // //       // Use AuthContext's login function with demo admin credentials
// // //       const result = await login("admin@Raycom.com", "Nitesh")
// // //       if (result.success) {
// // //         navigate("/admin/dashboard")
// // //       } else {
// // //         setError("Invalid credentials")
// // //       }
// // //     } catch (err) {
// // //       setError("Failed to login. Please try again.")
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   return (
// // //     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
// // //       <div className="max-w-md w-full space-y-8">
// // //         <div>
// // //           <div className="flex justify-center">
// // //             <img src="/images/logo.png" alt="Raycom" className="h-16" />
// // //           </div>
// // //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
// // //         </div>

// // //         <motion.div
// // //           className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
// // //           initial={{ opacity: 0, y: 20 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           transition={{ duration: 0.5 }}
// // //         >
// // //           {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

// // //           <form className="space-y-6" onSubmit={handleSubmit}>
// // //             <div>
// // //               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
// // //                 Username
// // //               </label>
// // //               <div className="mt-1">
// // //                 <input
// // //                   id="username"
// // //                   name="username"
// // //                   type="text"
// // //                   autoComplete="username"
// // //                   required
// // //                   value={username}
// // //                   onChange={(e) => setUsername(e.target.value)}
// // //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div>
// // //               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// // //                 Password
// // //               </label>
// // //               <div className="mt-1">
// // //                 <input
// // //                   id="password"
// // //                   name="password"
// // //                   type="password"
// // //                   autoComplete="current-password"
// // //                   required
// // //                   value={password}
// // //                   onChange={(e) => setPassword(e.target.value)}
// // //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // //                 />
// // //               </div>
// // //             </div>

// // //             <div>
// // //               <button
// // //                 type="submit"
// // //                 disabled={loading}
// // //                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// // //               >
// // //                 {loading ? (
// // //                   <span className="flex items-center">
// // //                     <svg
// // //                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
// // //                       xmlns="http://www.w3.org/2000/svg"
// // //                       fill="none"
// // //                       viewBox="0 0 24 24"
// // //                     >
// // //                       <circle
// // //                         className="opacity-25"
// // //                         cx="12"
// // //                         cy="12"
// // //                         r="10"
// // //                         stroke="currentColor"
// // //                         strokeWidth="4"
// // //                       ></circle>
// // //                       <path
// // //                         className="opacity-75"
// // //                         fill="currentColor"
// // //                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // //                       ></path>
// // //                     </svg>
// // //                     Signing in...
// // //                   </span>
// // //                 ) : (
// // //                   <span className="flex items-center">
// // //                     <Lock className="h-5 w-5 mr-2" />
// // //                     Sign in
// // //                   </span>
// // //                 )}
// // //               </button>
// // //             </div>
// // //           </form>
// // //         </motion.div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default AdminLogin


// // "use client"

// // import { useState } from "react"
// // import { useNavigate, useLocation } from "react-router-dom"
// // import { motion } from "framer-motion"
// // import { useAuth } from "../../contexts/AuthContext"
// // import { Lock } from "lucide-react"

// // const AdminLogin = () => {
// //   const [username, setUsername] = useState("")
// //   const [password, setPassword] = useState("")
// //   const [error, setError] = useState("")
// //   const [loading, setLoading] = useState(false)
// //   const { login } = useAuth()
// //   const navigate = useNavigate()
// //   const location = useLocation()

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()

// //     if (!username || !password) {
// //       setError("Please enter both username and password")
// //       return
// //     }

// //     setLoading(true)
// //     setError("")

// //     try {
// //       // Use AuthContext's login function with demo admin credentials
// //       const result = await login("admin@Raycom.com", "Nitesh")
// //       if (result.success) {
// //         // Redirect to the original requested route or /admin/dashboard
// //         const from = location.state?.from?.pathname || "/admin/dashboard"
// //         navigate(from, { replace: true })
// //       } else {
// //         setError("Invalid credentials")
// //       }
// //     } catch (err) {
// //       setError("Failed to login. Please try again.")
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   return (
// //     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
// //       <div className="max-w-md w-full space-y-8">
// //         <div>
// //           <div className="flex justify-center">
// //             <img src="/images/logo.png" alt="Raycom" className="h-16" />
// //           </div>
// //           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
// //         </div>

// //         <motion.div
// //           className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.5 }}
// //         >
// //           {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

// //           <form className="space-y-6" onSubmit={handleSubmit}>
// //             <div>
// //               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
// //                 Username
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="username"
// //                   name="username"
// //                   type="text"
// //                   autoComplete="username"
// //                   required
// //                   value={username}
// //                   onChange={(e) => setUsername(e.target.value)}
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// //                 Password
// //               </label>
// //               <div className="mt-1">
// //                 <input
// //                   id="password"
// //                   name="password"
// //                   type="password"
// //                   autoComplete="current-password"
// //                   required
// //                   value={password}
// //                   onChange={(e) => setPassword(e.target.value)}
// //                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //                 />
// //               </div>
// //             </div>

// //             <div>
// //               <button
// //                 type="submit"
// //                 disabled={loading}
// //                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// //               >
// //                 {loading ? (
// //                   <span className="flex items-center">
// //                     <svg
// //                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
// //                       xmlns="http://www.w3.org/2000/svg"
// //                       fill="none"
// //                       viewBox="0 0 24 24"
// //                     >
// //                       <circle
// //                         className="opacity-25"
// //                         cx="12"
// //                         cy="12"
// //                         r="10"
// //                         stroke="currentColor"
// //                         strokeWidth="4"
// //                       ></circle>
// //                       <path
// //                         className="opacity-75"
// //                         fill="currentColor"
// //                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                       ></path>
// //                     </svg>
// //                     Signing in...
// //                   </span>
// //                 ) : (
// //                   <span className="flex items-center">
// //                     <Lock className="h-5 w-5 mr-2" />
// //                     Sign in
// //                   </span>
// //                 )}
// //               </button>
// //             </div>
// //           </form>
// //         </motion.div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default AdminLogin

// "use client"

// import { useState } from "react"
// import { useNavigate, useLocation } from "react-router-dom"
// import { motion } from "framer-motion"
// import { useAuth } from "../../contexts/AuthContext"
// import { Lock } from "lucide-react"

// const AdminLogin = () => {
//   const [username, setUsername] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const [loading, setLoading] = useState(false)
//   const { login } = useAuth()
//   const navigate = useNavigate()
//   const location = useLocation()

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!username || !password) {
//       setError("Please enter both username and password")
//       return
//     }

//     setLoading(true)
//     setError("")

//     try {
//       const result = await login("admin@Raycom.com", "Nitesh")
//       if (result.success) {
//         const from = location.state?.from?.pathname || "/admin/dashboard"
//         console.log("Navigating to:", from)
//         navigate(from, { replace: true })
//       } else {
//         setError("Invalid credentials")
//       }
//     } catch (err) {
//       setError("Failed to login. Please try again.")
//     } finally {
//       setLoading(false)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <div className="flex justify-center">
//             <img src="/images/logo.png" alt="Raycom" className="h-16" />
//           </div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
//         </div>

//         <motion.div
//           className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                 Username
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="username"
//                   name="username"
//                   type="text"
//                   autoComplete="username"
//                   required
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                 Password
//               </label>
//               <div className="mt-1">
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   autoComplete="current-password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                   className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                 />
//               </div>
//             </div>

//             <div>
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//               >
//                 {loading ? (
//                   <span className="flex items-center">
//                     <svg
//                       className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle
//                         className="opacity-25"
//                         cx="12"
//                         cy="12"
//                         r="10"
//                         stroke="currentColor"
//                         strokeWidth="4"
//                       ></circle>
//                       <path
//                         className="opacity-75"
//                         fill="currentColor"
//                         d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                       ></path>
//                     </svg>
//                     Signing in...
//                   </span>
//                 ) : (
//                   <span className="flex items-center">
//                     <Lock className="h-5 w-5 mr-2" />
//                     Sign in
//                   </span>
//                 )}
//               </button>
//             </div>
//           </form>
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// export default AdminLogin


"use client"

import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { useAuth } from "../../contexts/AuthContext"
import { Lock } from "lucide-react"

const AdminLogin = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!username || !password) {
      setError("Please enter both username and password")
      return
    }

    setLoading(true)
    setError("")

    try {
      // Use AuthContext's login function with demo admin credentials
      const result = await login("admin@Raycom.com", "Nitesh")
      if (result.success) {
        // Redirect to the original requested route or /admin/dashboard
        const from = location.state?.from?.pathname || "/admin/dashboard"
        navigate(from, { replace: true })
      } else {
        setError("Invalid credentials")
      }
    } catch (err) {
      setError("Failed to login. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="flex justify-center">
            <img src="/images/logo.png" alt="Raycom" className="h-16" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Admin Login</h2>
        </div>

        <motion.div
          className="mt-8 bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">{error}</div>}

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="mt-1">
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                {loading ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                    Signing in...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Lock className="h-5 w-5 mr-2" />
                    Sign in
                  </span>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminLogin