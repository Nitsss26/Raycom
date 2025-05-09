// "use client"

// import { Navigate, Outlet } from "react-router-dom"
// import { useAuth } from "../../contexts/AuthContext"

// // Component for routes that require authentication
// export const ProtectedRoute = () => {
//     const { isAuthenticated, initializing } = useAuth()

//     // Show nothing while checking authentication
//     if (initializing) {
//         return null
//     }

//     // Redirect to login if not authenticated
//     if (!isAuthenticated()) {
//         return <Navigate to="/login" replace />
//     }

//     // Render child routes if authenticated
//     return <Outlet />
// }

// // Component for routes that require admin role

// export const AdminRoute = () => {
//     const { user, initializing, isAdmin } = useAuth()

//     if (initializing) return null // or a loader/spinner

//     if (!user || !isAdmin()) {
//         return <Navigate to="/login" replace />
//     }

//     return <Outlet />
// }

// // export const AdminRoute = () => {
// //     const { user, loading, initializing } = useAuth()

// //     if (loading || initializing) return <div>Loading...</div>

// //     if (!user || user.role !== "admin") {
// //         return <Navigate to="/login" replace />
// //     }

// //     return user.role !== "admin" && <Outlet />
// // }

// // export const AdminRoute = () => {
// //     const { isAdmin, initializing } = useAuth()

// //     // Show nothing while checking authentication
// //     if (initializing) {
// //         return null
// //     }

// //     // Redirect to login if not authenticated or not admin
// //     if (!isAdmin()) {
// //         return <Navigate to="/login" replace />
// //     }

// //     // Render child routes if authenticated and admin
// //     return <Outlet />
// // }

// // Component for routes that should not be accessible when authenticated
// export const GuestRoute = () => {
//     const { isAuthenticated, initializing } = useAuth()

//     // Show nothing while checking authentication
//     if (initializing) {
//         return null
//     }

//     // Redirect to home if already authenticated
//     if (isAuthenticated()) {
//         return <Navigate to="/" replace />
//     }

//     // Render child routes if not authenticated
//     return <Outlet />
// }


import { Navigate, Outlet } from "react-router-dom"
import { useAuth } from "../../contexts/AuthContext"

// Component for routes that require authentication
export const ProtectedRoute = () => {
    const { isAuthenticated, initializing } = useAuth()

    // Show nothing while checking authentication
    if (initializing) {
        return null
    }

    // Redirect to login if not authenticated
    if (!isAuthenticated()) {
        return <Navigate to="/login" replace />
    }

    // Render child routes if authenticated
    return <Outlet />
}

// Component for routes that require admin role
export const AdminRoute = () => {
    const { isAuthenticated, isAdmin, initializing } = useAuth()

    // Show nothing while checking authentication
    if (initializing) {
        return null
    }

    // Redirect to login if not authenticated or not admin
    if (!isAuthenticated() || !isAdmin()) {
        return <Navigate to="/login" replace />
    }

    // Render child routes if authenticated and admin
    return <Outlet />
}

// Component for routes that should not be accessible when authenticated
export const GuestRoute = () => {
    const { isAuthenticated, initializing } = useAuth()

    // Show nothing while checking authentication
    if (initializing) {
        return null
    }

    // Redirect to home if already authenticated
    if (isAuthenticated()) {
        return <Navigate to="/" replace />
    }

    // Render child routes if not authenticated
    return <Outlet />
}