// // // // // "use client"

// // // // // import { createContext, useContext, useState, useEffect } from "react"

// // // // // const AuthContext = createContext()

// // // // // export const useAuth = () => useContext(AuthContext)

// // // // // export const AuthProvider = ({ children }) => {
// // // // //   const [user, setUser] = useState(null)
// // // // //   const [loading, setLoading] = useState(true)

// // // // //   // Check if user is already logged in
// // // // //   useEffect(() => {
// // // // //     const savedUser = localStorage.getItem("user")
// // // // //     if (savedUser) {
// // // // //       try {
// // // // //         setUser(JSON.parse(savedUser))
// // // // //       } catch (error) {
// // // // //         console.error("Failed to parse user from localStorage:", error)
// // // // //         setUser(null)
// // // // //       }
// // // // //     }
// // // // //     setLoading(false)
// // // // //   }, [])

// // // // //   const login = async (username) => {
// // // // //     // In a real app, this would make an API call to authenticate
// // // // //     const userData = { username, role: "admin" }
// // // // //     setUser(userData)
// // // // //     localStorage.setItem("user", JSON.stringify(userData))
// // // // //     return userData
// // // // //   }

// // // // //   const logout = () => {
// // // // //     setUser(null)
// // // // //     localStorage.removeItem("user")
// // // // //   }

// // // // //   const isAuthenticated = () => {
// // // // //     return !!user
// // // // //   }

// // // // //   return (
// // // // //     <AuthContext.Provider
// // // // //       value={{
// // // // //         user,
// // // // //         login,
// // // // //         logout,
// // // // //         isAuthenticated,
// // // // //         loading,
// // // // //       }}
// // // // //     >
// // // // //       {children}
// // // // //     </AuthContext.Provider>
// // // // //   )
// // // // // }


// // // // "use client"

// // // // import { createContext, useContext, useState, useEffect } from "react"
// // // // import axios from "axios"
// // // // import { toast } from "react-toastify"

// // // // const AuthContext = createContext()

// // // // export const useAuth = () => useContext(AuthContext)

// // // // export const AuthProvider = ({ children }) => {
// // // //   const [user, setUser] = useState(null)
// // // //   const [token, setToken] = useState(localStorage.getItem("token"))
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [initializing, setInitializing] = useState(true)

// // // //   // Set up axios defaults
// // // //   useEffect(() => {
// // // //     if (token) {
// // // //       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
// // // //     } else {
// // // //       delete axios.defaults.headers.common["Authorization"]
// // // //     }
// // // //   }, [token])

// // // //   // Check if user is already logged in
// // // //   useEffect(() => {
// // // //     const loadUser = async () => {
// // // //       if (token) {
// // // //         try {
// // // //           const res = await axios.get("/api/users/me")
// // // //           setUser(res.data)
// // // //         } catch (err) {
// // // //           console.error("Failed to load user:", err)
// // // //           localStorage.removeItem("token")
// // // //           setToken(null)
// // // //           setUser(null)
// // // //         }
// // // //       }
// // // //       setLoading(false)
// // // //       setInitializing(false)
// // // //     }

// // // //     loadUser()
// // // //   }, [token])

// // // //   const register = async (userData) => {
// // // //     try {
// // // //       setLoading(true)
// // // //       const res = await axios.post("/api/users/register", userData)

// // // //       localStorage.setItem("token", res.data.token)
// // // //       setToken(res.data.token)
// // // //       setUser(res.data.user)

// // // //       toast.success("Registration successful!")
// // // //       return { success: true }
// // // //     } catch (err) {
// // // //       console.log("Registration error:", err)
// // // //       const message = err.response?.data?.message || "Registration failed"
// // // //       toast.error(message)
// // // //       return { success: false, message }
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   const login = async (email, password) => {
// // // //     try {
// // // //       setLoading(true)
// // // //       const res = await axios.post("/api/users/login", { email, password })

// // // //       localStorage.setItem("token", res.data.token)
// // // //       setToken(res.data.token)
// // // //       setUser(res.data.user)

// // // //       toast.success("Login successful!")
// // // //       return { success: true }
// // // //     } catch (err) {
// // // //       console.log("Login error:", err)
// // // //       const message = err.response?.data?.message || "Login failed"
// // // //       toast.error(message)
// // // //       return { success: false, message }
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   const logout = () => {
// // // //     localStorage.removeItem("token")
// // // //     setToken(null)
// // // //     setUser(null)
// // // //     toast.info("You have been logged out")
// // // //   }

// // // //   const updateProfile = async (userData) => {
// // // //     try {
// // // //       setLoading(true)
// // // //       const res = await axios.put("/api/users/me", userData)
// // // //       setUser(res.data)
// // // //       toast.success("Profile updated successfully")
// // // //       return { success: true }
// // // //     } catch (err) {
// // // //       const message = err.response?.data?.message || "Failed to update profile"
// // // //       toast.error(message)
// // // //       return { success: false, message }
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   const changePassword = async (passwordData) => {
// // // //     try {
// // // //       setLoading(true)
// // // //       await axios.put("/api/users/password", passwordData)
// // // //       toast.success("Password changed successfully")
// // // //       return { success: true }
// // // //     } catch (err) {
// // // //       const message = err.response?.data?.message || "Failed to change password"
// // // //       toast.error(message)
// // // //       return { success: false, message }
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   const forgotPassword = async (email) => {
// // // //     try {
// // // //       setLoading(true)
// // // //       await axios.post("/api/users/forgot-password", { email })
// // // //       toast.success("Password reset instructions sent to your email")
// // // //       return { success: true }
// // // //     } catch (err) {
// // // //       const message = err.response?.data?.message || "Failed to process request"
// // // //       toast.error(message)
// // // //       return { success: false, message }
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   const resetPassword = async (token, password) => {
// // // //     try {
// // // //       setLoading(true)
// // // //       await axios.post(`/api/users/reset-password/${token}`, { password })
// // // //       toast.success("Password has been reset successfully")
// // // //       return { success: true }
// // // //     } catch (err) {
// // // //       const message = err.response?.data?.message || "Failed to reset password"
// // // //       toast.error(message)
// // // //       return { success: false, message }
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   const isAuthenticated = () => {
// // // //     return !!user
// // // //   }

// // // //   const isAdmin = () => {
// // // //     return user?.role === "admin"
// // // //   }

// // // //   return (
// // // //     <AuthContext.Provider
// // // //       value={{
// // // //         user,
// // // //         loading,
// // // //         initializing,
// // // //         register,
// // // //         login,
// // // //         logout,
// // // //         updateProfile,
// // // //         changePassword,
// // // //         forgotPassword,
// // // //         resetPassword,
// // // //         isAuthenticated,
// // // //         isAdmin,
// // // //       }}
// // // //     >
// // // //       {children}
// // // //     </AuthContext.Provider>
// // // //   )
// // // // }



// // // "use client"

// // // import { createContext, useContext, useState, useEffect } from "react"
// // // import { loginUser, registerUser, fetchUserProfile, updateUserProfile, changePassword, forgotPassword, resetPassword } from "../services/api"
// // // import { toast } from "react-toastify"

// // // const AuthContext = createContext()

// // // export const useAuth = () => useContext(AuthContext)

// // // export const AuthProvider = ({ children }) => {
// // //   const [user, setUser] = useState(null)
// // //   const [token, setToken] = useState(localStorage.getItem("token"))
// // //   const [loading, setLoading] = useState(true)
// // //   const [initializing, setInitializing] = useState(true)

// // //   // Set up axios defaults
// // //   useEffect(() => {
// // //     if (token) {
// // //       localStorage.setItem("token", token)
// // //     } else {
// // //       localStorage.removeItem("token")
// // //     }
// // //   }, [token])

// // //   // Check if user is already logged in
// // //   useEffect(() => {
// // //     const loadUser = async () => {
// // //       if (token) {
// // //         try {
// // //           const userData = await fetchUserProfile()
// // //           setUser(userData)
// // //         } catch (err) {
// // //           console.error("Failed to load user:", err)
// // //           localStorage.removeItem("token")
// // //           setToken(null)
// // //           setUser(null)
// // //         }
// // //       }
// // //       setLoading(false)
// // //       setInitializing(false)
// // //     }

// // //     loadUser()
// // //   }, [token])

// // //   const register = async (userData) => {
// // //     try {
// // //       setLoading(true)
// // //       const res = await registerUser(userData)

// // //       localStorage.setItem("token", res.token)
// // //       setToken(res.token)
// // //       setUser(res.user)

// // //       toast.success("Registration successful!")
// // //       return { success: true }
// // //     } catch (err) {
// // //       const message = err.response?.data?.message || "Registration failed"
// // //       toast.error(message)
// // //       return { success: false, message }
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const login = async (email, password) => {
// // //     try {
// // //       setLoading(true)
// // //       const res = await loginUser({ email, password })

// // //       localStorage.setItem("token", res.token)
// // //       setToken(res.token)
// // //       setUser(res.user)

// // //       toast.success("Login successful!")
// // //       return { success: true }
// // //     } catch (err) {
// // //       const message = err.response?.data?.message || "Login failed"
// // //       toast.error(message)
// // //       return { success: false, message }
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const logout = () => {
// // //     localStorage.removeItem("token")
// // //     setToken(null)
// // //     setUser(null)
// // //     toast.info("You have been logged out")
// // //   }

// // //   const updateProfile = async (userData) => {
// // //     try {
// // //       setLoading(true)
// // //       const updatedUser = await updateUserProfile(userData)
// // //       setUser(updatedUser)
// // //       toast.success("Profile updated successfully")
// // //       return { success: true }
// // //     } catch (err) {
// // //       const message = err.response?.data?.message || "Failed to update profile"
// // //       toast.error(message)
// // //       return { success: false, message }
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const updatePassword = async (passwordData) => {
// // //     try {
// // //       setLoading(true)
// // //       await changePassword(passwordData)
// // //       toast.success("Password changed successfully")
// // //       return { success: true }
// // //     } catch (err) {
// // //       const message = err.response?.data?.message || "Failed to change password"
// // //       toast.error(message)
// // //       return { success: false, message }
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const requestPasswordReset = async (email) => {
// // //     try {
// // //       setLoading(true)
// // //       await forgotPassword(email)
// // //       toast.success("Password reset instructions sent to your email")
// // //       return { success: true }
// // //     } catch (err) {
// // //       const message = err.response?.data?.message || "Failed to process request"
// // //       toast.error(message)
// // //       return { success: false, message }
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const completePasswordReset = async (token, password) => {
// // //     try {
// // //       setLoading(true)
// // //       await resetPassword(token, password)
// // //       toast.success("Password has been reset successfully")
// // //       return { success: true }
// // //     } catch (err) {
// // //       const message = err.response?.data?.message || "Failed to reset password"
// // //       toast.error(message)
// // //       return { success: false, message }
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const isAuthenticated = () => {
// // //     return !!user
// // //   }

// // //   const isAdmin = () => {
// // //     return user?.role === "admin"
// // //   }

// // //   return (
// // //     <AuthContext.Provider
// // //       value={{
// // //         user,
// // //         loading,
// // //         initializing,
// // //         register,
// // //         login,
// // //         logout,
// // //         updateProfile,
// // //         updatePassword,
// // //         requestPasswordReset,
// // //         completePasswordReset,
// // //         isAuthenticated,
// // //         isAdmin,
// // //       }}
// // //     >
// // //       {children}
// // //     </AuthContext.Provider>
// // //   )
// // // }


// // "use client"

// // import { createContext, useContext, useState, useEffect } from "react"
// // import axios from "axios"
// // import { toast } from "react-toastify"

// // const AuthContext = createContext()

// // export const useAuth = () => useContext(AuthContext)

// // export const AuthProvider = ({ children }) => {
// //   const [user, setUser] = useState(null)
// //   const [token, setToken] = useState(localStorage.getItem("token"))
// //   const [loading, setLoading] = useState(true)
// //   const [initializing, setInitializing] = useState(true)

// //   // Set up axios defaults
// //   useEffect(() => {
// //     if (token) {
// //       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
// //     } else {
// //       delete axios.defaults.headers.common["Authorization"]
// //     }
// //   }, [token])

// //   // Check if user is already logged in
// //   useEffect(() => {
// //     const loadUser = async () => {
// //       if (token) {
// //         try {
// //           const res = await axios.get("/api/users/me")
// //           setUser(res.data)
// //         } catch (err) {
// //           console.error("Failed to load user:", err)
// //           localStorage.removeItem("token")
// //           setToken(null)
// //           setUser(null)
// //         }
// //       }
// //       setLoading(false)
// //       setInitializing(false)
// //     }

// //     loadUser()
// //   }, [token])

// //   const register = async (userData) => {
// //     try {
// //       setLoading(true)
// //       const res = await axios.post("/api/users/register", userData)

// //       localStorage.setItem("token", res.data.token)
// //       setToken(res.data.token)
// //       setUser(res.data.user)

// //       toast.success("Registration successful!")
// //       return { success: true }
// //     } catch (err) {
// //       const message = err.response?.data?.message || "Registration failed"
// //       toast.error(message)
// //       return { success: false, message }
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const login = async (email, password) => {
// //     try {
// //       setLoading(true)

// //       // For demo purposes, allow login with hardcoded credentials
// //       if (email === "admin@Raycom.com" && password === "Nitesh") {
// //         const demoUser = {
// //           id: "admin123",
// //           username: "admin",
// //           email: "admin@Raycom.com",
// //           firstName: "Admin",
// //           lastName: "User",
// //           role: "admin",
// //         }

// //         const demoToken = "demo-token-for-admin"
// //         localStorage.setItem("token", demoToken)
// //         setToken(demoToken)
// //         setUser(demoUser)

// //         toast.success("Admin login successful!")
// //         return { success: true }
// //       }

// //       if (email === "user1@example.com" && password === "password123") {
// //         const demoUser = {
// //           id: "user123",
// //           username: "user1",
// //           email: "user1@example.com",
// //           firstName: "John",
// //           lastName: "Doe",
// //           role: "user",
// //         }

// //         const demoToken = "demo-token-for-user"
// //         localStorage.setItem("token", demoToken)
// //         setToken(demoToken)
// //         setUser(demoUser)

// //         toast.success("User login successful!")
// //         return { success: true }
// //       }

// //       // If not using demo credentials, try actual API
// //       const res = await axios.post("/api/users/login", { email, password })

// //       localStorage.setItem("token", res.data.token)
// //       setToken(res.data.token)
// //       setUser(res.data.user)

// //       toast.success("Login successful!")
// //       return { success: true }
// //     } catch (err) {
// //       const message = err.response?.data?.message || "Invalid credentials"
// //       toast.error(message)
// //       return { success: false, message }
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const logout = () => {
// //     localStorage.removeItem("token")
// //     setToken(null)
// //     setUser(null)
// //     toast.info("You have been logged out")
// //   }

// //   const updateProfile = async (userData) => {
// //     try {
// //       setLoading(true)
// //       const res = await axios.put("/api/users/me", userData)
// //       setUser(res.data)
// //       toast.success("Profile updated successfully")
// //       return { success: true }
// //     } catch (err) {
// //       const message = err.response?.data?.message || "Failed to update profile"
// //       toast.error(message)
// //       return { success: false, message }
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const changePassword = async (passwordData) => {
// //     try {
// //       setLoading(true)
// //       await axios.put("/api/users/password", passwordData)
// //       toast.success("Password changed successfully")
// //       return { success: true }
// //     } catch (err) {
// //       const message = err.response?.data?.message || "Failed to change password"
// //       toast.error(message)
// //       return { success: false, message }
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const forgotPassword = async (email) => {
// //     try {
// //       setLoading(true)

// //       // For demo purposes, always succeed
// //       if (email) {
// //         toast.success("Password reset instructions sent to your email")
// //         return { success: true, resetToken: "demo-reset-token" }
// //       }

// //       // In a real app, call the API
// //       await axios.post("/api/users/forgot-password", { email })
// //       toast.success("Password reset instructions sent to your email")
// //       return { success: true }
// //     } catch (err) {
// //       const message = err.response?.data?.message || "Failed to process request"
// //       toast.error(message)
// //       return { success: false, message }
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const resetPassword = async (token, password) => {
// //     try {
// //       setLoading(true)

// //       // For demo purposes, always succeed
// //       if (token === "demo-reset-token") {
// //         toast.success("Password has been reset successfully")
// //         return { success: true }
// //       }

// //       // In a real app, call the API
// //       await axios.post(`/api/users/reset-password/${token}`, { password })
// //       toast.success("Password has been reset successfully")
// //       return { success: true }
// //     } catch (err) {
// //       const message = err.response?.data?.message || "Failed to reset password"
// //       toast.error(message)
// //       return { success: false, message }
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const isAuthenticated = () => {
// //     return !!user
// //   }

// //   const isAdmin = () => {
// //     return user?.role === "admin"
// //   }

// //   return (
// //     <AuthContext.Provider
// //       value={{
// //         user,
// //         loading,
// //         initializing,
// //         register,
// //         login,
// //         logout,
// //         updateProfile,
// //         changePassword,
// //         forgotPassword,
// //         resetPassword,
// //         isAuthenticated,
// //         isAdmin,
// //       }}
// //     >
// //       {children}
// //     </AuthContext.Provider>
// //   )
// // }

// "use client"

// import { createContext, useContext, useState, useEffect } from "react"
// import { toast } from "react-toastify"

// const AuthContext = createContext()

// export const useAuth = () => useContext(AuthContext)

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null)
//   const [token, setToken] = useState(localStorage.getItem("token"))
//   const [loading, setLoading] = useState(true)
//   const [initializing, setInitializing] = useState(true)

//   // Check if user is already logged in (without backend request)
//   useEffect(() => {
//     const loadUser = () => {
//       if (token) {
//         // For demo purposes, set user based on token without backend validation
//         if (token === "demo-token-for-admin") {
//           setUser({
//             id: "admin123",
//             username: "admin",
//             email: "admin@Raycom.com",
//             firstName: "Admin",
//             lastName: "User",
//             role: "admin",
//           })
//         } else if (token === "demo-token-for-user") {
//           setUser({
//             id: "user123",
//             username: "user1",
//             email: "user1@example.com",
//             firstName: "John",
//             lastName: "Doe",
//             role: "user",
//           })
//         } else {
//           localStorage.removeItem("token")
//           setToken(null)
//           setUser(null)
//         }
//       }
//       setLoading(false)
//       setInitializing(false)
//     }

//     loadUser()
//   }, [token])

//   const register = async (userData) => {
//     // Not used for demo, so we'll leave it as-is
//     toast.error("Registration not available in demo mode")
//     return { success: false, message: "Registration not available in demo mode" }
//   }

//   const login = async (email, password) => {
//     try {
//       setLoading(true)

//       // For demo purposes, allow login with hardcoded credentials
//       if (email === "admin@Raycom.com" && password === "Nitesh") {
//         const demoUser = {
//           id: "admin123",
//           username: "admin",
//           email: "admin@Raycom.com",
//           firstName: "Admin",
//           lastName: "User",
//           role: "admin",
//         }

//         const demoToken = "demo-token-for-admin"
//         localStorage.setItem("token", demoToken)
//         setToken(demoToken)
//         setUser(demoUser)

//         toast.success("Admin login successful!")
//         return { success: true }
//       }

//       // For simplicity, we're only allowing demo admin login
//       toast.error("Invalid credentials")
//       return { success: false, message: "Invalid credentials" }
//     } catch (err) {
//       const message = err.message || "Invalid credentials"
//       toast.error(message)
//       return { success: false, message }
//     } finally {
//       setLoading(false)
//     }
//   }

//   const logout = () => {
//     localStorage.removeItem("token")
//     setToken(null)
//     setUser(null)
//     toast.info("You have been logged out")
//   }

//   const updateProfile = async (userData) => {
//     toast.error("Profile update not available in demo mode")
//     return { success: false, message: "Profile update not available in demo mode" }
//   }

//   const changePassword = async (passwordData) => {
//     toast.error("Password change not available in demo mode")
//     return { success: false, message: "Password change not available in demo mode" }
//   }

//   const forgotPassword = async (email) => {
//     toast.error("Forgot password not available in demo mode")
//     return { success: false, message: "Forgot password not available in demo mode" }
//   }

//   const resetPassword = async (token, password) => {
//     toast.error("Reset password not available in demo mode")
//     return { success: false, message: "Reset password not available in demo mode" }
//   }

//   const isAuthenticated = () => {
//     return !!user
//   }

//   const isAdmin = () => {
//     return user?.role === "admin"
//   }

//   return (
//     <AuthContext.Provider
//       value={{
//         user,
//         loading,
//         initializing,
//         register,
//         login,
//         logout,
//         updateProfile,
//         changePassword,
//         forgotPassword,
//         resetPassword,
//         isAuthenticated,
//         isAdmin,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   )
// }

"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "react-toastify"

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(localStorage.getItem("token"))
  const [loading, setLoading] = useState(true)
  const [initializing, setInitializing] = useState(true)

  // Check if user is already logged in (without backend request for demo)
  useEffect(() => {
    const loadUser = () => {
      if (token) {
        // For demo purposes, set user based on token without backend validation
        if (token === "demo-token-for-admin") {
          const demoUser = {
            id: "admin123",
            username: "admin",
            email: "admin@Raycom.com",
            firstName: "Admin",
            lastName: "User",
            role: "admin",
          }
          setUser(demoUser)
          console.log("AuthProvider - User loaded from token:", demoUser)
        } else {
          localStorage.removeItem("token")
          setToken(null)
          setUser(null)
          console.log("AuthProvider - Invalid token, user set to null")
        }
      }
      setLoading(false)
      setInitializing(false)
    }

    loadUser()
  }, [token])

  const login = async (email, password) => {
    try {
      setLoading(true)

      // For demo purposes, allow login with hardcoded credentials
      if (email === "admin@Raycom.com" && password === "Nitesh") {
        const demoUser = {
          id: "admin123",
          username: "admin",
          email: "admin@Raycom.com",
          firstName: "Admin",
          lastName: "User",
          role: "admin",
        }

        const demoToken = "demo-token-for-admin"
        localStorage.setItem("token", demoToken)
        setToken(demoToken)
        setUser(demoUser)

        console.log("AuthProvider - User logged in:", demoUser)
        toast.success("Admin login successful!")
        return { success: true }
      }

      toast.error("Invalid credentials")
      return { success: false, message: "Invalid credentials" }
    } catch (err) {
      const message = err.message || "Invalid credentials"
      toast.error(message)
      return { success: false, message }
    } finally {
      setLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    setToken(null)
    setUser(null)
    toast.info("You have been logged out")
  }

  const isAuthenticated = () => {
    const authenticated = !!user
    console.log("AuthProvider - isAuthenticated:", authenticated)
    return authenticated
  }

  const isAdmin = () => {
    return user?.role === "admin"
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        initializing,
        login,
        logout,
        isAuthenticated,
        isAdmin,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}