// // // "use client"
// // // import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// // // import { AnimatePresence } from "framer-motion"
// // // import { CartProvider } from "./contexts/CartContext"
// // // import { AuthProvider } from "./contexts/AuthContext"
// // // import { ToastContainer } from "react-toastify"
// // // import "react-toastify/dist/ReactToastify.css"

// // // // Layout Components
// // // import Navbar from "./components/layout/Navbar"
// // // import Footer from "./components/layout/Footer"

// // // // Pages
// // // import HomePage from "./pages/HomePage"
// // // import ProductsPage from "./pages/ProductsPage"
// // // import ProductCategoryPage from "./pages/ProductCategoryPage"
// // // import ProductDetailPage from "./pages/ProductDetailPage"
// // // import ServicesPage from "./pages/ServicesPage"
// // // import AboutPage from "./pages/AboutPage"
// // // import ContactPage from "./pages/ContactPage"
// // // import FaqPage from "./pages/FaqPage"
// // // import ApplicationPage from "./pages/ApplicationPage"
// // // import TermsPage from "./pages/TermsPage"
// // // import CartPage from "./pages/CartPage"
// // // import RequestPage from "./pages/RequestPage"
// // // import RequestSuccessPage from "./pages/RequestSuccessPage"
// // // import NotFoundPage from "./pages/NotFoundPage"

// // // // Admin Pages
// // // import AdminLogin from "./pages/admin/AdminLogin"
// // // import AdminDashboard from "./pages/admin/AdminDashboard.js"
// // // import AdminProducts from "./pages/admin/AdminProducts"
// // // import AdminRequests from "./pages/admin/AdminRequests"

// // // function App() {
// // //   return (
// // //     <AuthProvider>
// // //       <CartProvider>
// // //         <Router>
// // //           <ToastContainer position="top-right" autoClose={3000} />
// // //           <Navbar />
// // //           <AnimatePresence mode="wait">
// // //             <Routes>
// // //               <Route path="/" element={<HomePage />} />
// // //               <Route path="/products" element={<ProductsPage />} />
// // //               <Route path="/products/:category" element={<ProductCategoryPage />} />
// // //               <Route path="/products/:category/:id" element={<ProductDetailPage />} />
// // //               <Route path="/services" element={<ServicesPage />} />
// // //               <Route path="/about" element={<AboutPage />} />
// // //               <Route path="/contact" element={<ContactPage />} />
// // //               <Route path="/faq" element={<FaqPage />} />
// // //               <Route path="/application" element={<ApplicationPage />} />
// // //               <Route path="/terms" element={<TermsPage />} />
// // //               <Route path="/cart" element={<CartPage />} />
// // //               <Route path="/request" element={<RequestPage />} />
// // //               <Route path="/request-success" element={<RequestSuccessPage />} />

// // //               {/* Admin Routes */}
// // //               <Route path="/admin" element={<AdminLogin />} />
// // //               <Route path="/admin/dashboard" element={<AdminDashboard />} />
// // //               <Route path="/admin/products" element={<AdminProducts />} />
// // //               <Route path="/admin/requests" element={<AdminRequests />} />

// // //               {/* 404 Page */}
// // //               <Route path="*" element={<NotFoundPage />} />
// // //             </Routes>
// // //           </AnimatePresence>
// // //           <Footer />
// // //         </Router>
// // //       </CartProvider>
// // //     </AuthProvider>
// // //   )
// // // }

// // // export default App

// // "use client"
// // import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
// // import { AnimatePresence } from "framer-motion"
// // import { CartProvider } from "./contexts/CartContext"
// // import { AuthProvider } from "./contexts/AuthContext"
// // import { ToastContainer } from "react-toastify"
// // import "react-toastify/dist/ReactToastify.css"

// // // Auth Components
// // import { ProtectedRoute, AdminRoute, GuestRoute } from "./components/auth/ProtectedRoute"

// // // Layout Components
// // import Navbar from "./components/layout/Navbar"
// // import Footer from "./components/layout/Footer"

// // // Pages
// // import HomePage from "./pages/HomePage"
// // import ProductsPage from "./pages/ProductsPage"
// // import ProductCategoryPage from "./pages/ProductCategoryPage"
// // import ProductDetailPage from "./pages/ProductDetailPage"
// // import ServicesPage from "./pages/ServicesPage"
// // import AboutPage from "./pages/AboutPage"
// // import ContactPage from "./pages/ContactPage"
// // import FaqPage from "./pages/FaqPage"
// // import ApplicationPage from "./pages/ApplicationPage"
// // import TermsPage from "./pages/TermsPage"
// // import CartPage from "./pages/CartPage"
// // import RequestPage from "./pages/RequestPage"
// // import RequestSuccessPage from "./pages/RequestSuccessPage"
// // import NotFoundPage from "./pages/NotFoundPage"
// // import LoginPage from "./pages/auth/LoginPage"
// // import RegisterPage from "./pages/auth/RegisterPage"
// // import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage"
// // import ResetPasswordPage from "./pages/auth/ResetPasswordPage"
// // import UserProfilePage from "./pages/user/UserProfilePage"
// // import UserOrdersPage from "./pages/user/UserOrdersPage"
// // import UserOrderDetailPage from "./pages/user/UserOrdersDetailPage"

// // // Admin Pages
// // import AdminDashboard from "./pages/admin/AdminDashboard"
// // import AdminProducts from "./pages/admin/AdminProducts"
// // import AdminProductForm from "./pages/admin/AdminProductForm"
// // import AdminRequests from "./pages/admin/AdminRequests"
// // import AdminRequestDetail from "./pages/admin/AdminRequestDetail"
// // import AdminCustomers from "./pages/admin/AdminCustomers"
// // import AdminSettings from "./pages/admin/AdminSettings"
// // import RequestDetail from "pages/admin/RequestDetail"
// // import EditCustomer from "pages/admin/EditCustomer"
// // import AddAdmin from "pages/admin/AddAdmin"
// // import AddUser from "pages/admin/AddUser"
// // import EditUser from "pages/admin/EditUser"
// // import ProductRouteHandler from "pages/ProductRouteHandler"

// // function App() {
// //   return (
// //     <AuthProvider>
// //       <CartProvider>
// //         <Router>
// //           <ToastContainer position="top-right" autoClose={3000} />

// //           <Routes>
// //             {/* Admin Routes */}
// //             <Route path="/admin" element={<AdminRoute />} >
// //               <Route path="dashboard" element={<AdminDashboard />} />
// //               <Route path="products" element={<AdminProducts />} />
// //               <Route path="products/new" element={<AdminProductForm />} />
// //               <Route path="products/edit/:id" element={<AdminProductForm />} />
// //               <Route path="requests" element={<AdminRequests />} />
// //               <Route path="requests/:requestId" element={<AdminRequestDetail />} />
// //               <Route path="customers" element={<AdminCustomers />} />
// //               <Route path="settings" element={<AdminSettings />} />
// //               <Route path="customers/new" element={<AddUser />} />
// //               <Route path="customers/edit/:id" element={<EditUser />} />
// //             </Route>

// //             {/* Auth Routes */}
// //             <Route element={<GuestRoute />}>
// //               <Route path="/login" element={<LoginPage />} />
// //               <Route path="/register" element={<RegisterPage />} />
// //               <Route path="/forgot-password" element={<ForgotPasswordPage />} />
// //               <Route path="/reset-password/:token" element={<ResetPasswordPage />} />
// //               <Route path="d/dashboard" element={<AdminDashboard />} />
// //               <Route path="d/products" element={<AdminProducts />} />
// //               <Route path="d/products/new" element={<AdminProductForm />} />
// //               <Route path="d/products/edit/:id" element={<AdminProductForm />} />
// //               <Route path="d/requests" element={<AdminRequests />} />
// //               <Route path="d/requests/:id" element={<AdminRequestDetail />} />
// //               <Route path="d/customers" element={<AdminCustomers />} />
// //               <Route path="d/settings" element={<AdminSettings />} />
// //               <Route path="d/profile" element={<UserProfilePage />} />
// //               <Route path="d/orders" element={<UserOrdersPage />} />
// //               <Route path="d/orders/:id" element={<UserOrderDetailPage />} />
// //             </Route>

// //             {/* Protected User Routes */}
// //             <Route >
// //               <Route path="/profile" element={<UserProfilePage />} />
// //               <Route path="/orders" element={<UserOrdersPage />} />
// //               <Route path="/orders/:id" element={<UserOrderDetailPage />} />
// //             </Route>

// //             {/* Public Routes */}
// //             <Route
// //               path="/"
// //               element={
// //                 <>
// //                   <Navbar />
// //                   <AnimatePresence mode="wait">
// //                     <HomePage />
// //                   </AnimatePresence>
// //                   <Footer />
// //                 </>
// //               }
// //             />

// //             <Route
// //               path="*"
// //               element={
// //                 <>
// //                   <Navbar />
// //                   <AnimatePresence mode="wait">
// //                     <Routes>
// //                       <Route path="/products" element={<ProductsPage />} />
// //                       <Route path="/products/:id" element={<ProductDetailPage />} />
// //                       <Route path="/products/category/:category" element={<ProductCategoryPage />} />

// //                       <Route path="/products/:param" element={<ProductRouteHandler />} />
// //                       <Route path="/services" element={<ServicesPage />} />
// //                       <Route path="/about" element={<AboutPage />} />
// //                       <Route path="/contact" element={<ContactPage />} />
// //                       <Route path="/faq" element={<FaqPage />} />
// //                       <Route path="/application" element={<ApplicationPage />} />
// //                       <Route path="/terms" element={<TermsPage />} />
// //                       <Route path="/cart" element={<CartPage />} />
// //                       <Route path="/request" element={<RequestPage />} />
// //                       <Route path="/request-success" element={<RequestSuccessPage />} />
// //                       <Route path="/request" element={<RequestPage />} />
// //                       <Route path="/admin/requests" element={<AdminRequests />} />
// //                       {/* <Route path="/admin/requests/:requestId" element={<RequestDetail />} /> */}

// //                       {/* 404 Page */}
// //                       <Route path="*" element={<NotFoundPage />} />
// //                     </Routes>
// //                   </AnimatePresence>
// //                   <Footer />
// //                 </>
// //               }
// //             />
// //           </Routes>
// //         </Router>
// //       </CartProvider>
// //     </AuthProvider>
// //   )
// // }

// // export default App

// "use client"
// import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom"
// import { AnimatePresence } from "framer-motion"
// import { CartProvider } from "./contexts/CartContext"
// import { AuthProvider, useAuth } from "./contexts/AuthContext"
// import { ToastContainer } from "react-toastify"
// import "react-toastify/dist/ReactToastify.css"

// // Layout Components
// import Navbar from "./components/layout/Navbar"
// import Footer from "./components/layout/Footer"

// // Pages
// import HomePage from "./pages/HomePage"
// import ProductsPage from "./pages/ProductsPage"
// import ProductCategoryPage from "./pages/ProductCategoryPage"
// import ProductDetailPage from "./pages/ProductDetailPage"
// import ServicesPage from "./pages/ServicesPage"
// import AboutPage from "./pages/AboutPage"
// import ContactPage from "./pages/ContactPage"
// import FaqPage from "./pages/FaqPage"
// import ApplicationPage from "./pages/ApplicationPage"
// import TermsPage from "./pages/TermsPage"
// import CartPage from "./pages/CartPage"
// import RequestPage from "./pages/RequestPage"
// import RequestSuccessPage from "./pages/RequestSuccessPage"
// import NotFoundPage from "./pages/NotFoundPage"
// import AdminLogin from "./pages/auth/LoginPage"

// // Admin Pages
// import AdminDashboard from "./pages/admin/AdminDashboard"
// import AdminProducts from "./pages/admin/AdminProducts"
// import AdminProductForm from "./pages/admin/AdminProductForm"
// import AdminRequests from "./pages/admin/AdminRequests"
// import AdminRequestDetail from "./pages/admin/AdminRequestDetail"
// import AdminCustomers from "./pages/admin/AdminCustomers"
// import AdminSettings from "./pages/admin/AdminSettings"
// import AddUser from "pages/admin/AddUser"
// import EditUser from "pages/admin/EditUser"
// import ProductRouteHandler from "pages/ProductRouteHandler"

// // Global navigation guard component
// const RequireAuth = ({ children }) => {
//   const { isAuthenticated, initializing } = useAuth()
//   const location = useLocation()

//   if (initializing) {
//     return null
//   }

//   // Allow access to /login without authentication
//   if (location.pathname === "/login") {
//     return children
//   }

//   // Redirect to /login if not authenticated
//   if (!isAuthenticated()) {
//     return <Navigate to="/login" replace state={{ from: location }} />
//   }

//   return children
// }

// function App() {
//   return (
//     <AuthProvider>
//       <CartProvider>
//         <Router>
//           <ToastContainer position="top-right" autoClose={3000} />

//           <RequireAuth>
//             <Routes>
//               {/* All Routes (Public but with redirect to /login) */}
//               <Route
//                 path="/login"
//                 element={<AdminLogin />}
//               />

//               <Route
//                 path="/"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <HomePage />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/admin/dashboard"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <AdminDashboard />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/admin/products"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <AdminProducts />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/admin/products/new"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <AdminProductForm />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/admin/products/edit/:id"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <AdminProductForm />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/admin/requests"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <AdminRequests />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/admin/requests/:requestId"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <AdminRequestDetail />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/admin/customers"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <AdminCustomers />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/admin/settings"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <AdminSettings />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/admin/customers/new"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <AddUser />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="/admin/customers/edit/:id"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <EditUser />
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />

//               <Route
//                 path="*"
//                 element={
//                   <>
//                     <Navbar />
//                     <AnimatePresence mode="wait">
//                       <Routes>
//                         <Route path="/products" element={<ProductsPage />} />
//                         <Route path="/products/:id" element={<ProductDetailPage />} />
//                         <Route path="/products/category/:category" element={<ProductCategoryPage />} />
//                         <Route path="/products/:param" element={<ProductRouteHandler />} />
//                         <Route path="/services" element={<ServicesPage />} />
//                         <Route path="/about" element={<AboutPage />} />
//                         <Route path="/contact" element={<ContactPage />} />
//                         <Route path="/faq" element={<FaqPage />} />
//                         <Route path="/application" element={<ApplicationPage />} />
//                         <Route path="/terms" element={<TermsPage />} />
//                         <Route path="/cart" element={<CartPage />} />
//                         <Route path="/request" element={<RequestPage />} />
//                         <Route path="/request-success" element={<RequestSuccessPage />} />
//                         <Route path="/request" element={<RequestPage />} />
//                         <Route path="/admin/requests" element={<AdminRequests />} />
//                         <Route path="*" element={<NotFoundPage />} />
//                       </Routes>
//                     </AnimatePresence>
//                     <Footer />
//                   </>
//                 }
//               />
//             </Routes>
//           </RequireAuth>
//         </Router>
//       </CartProvider>
//     </AuthProvider>
//   )
// }

// export default App

"use client"
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import { CartProvider } from "./contexts/CartContext"
import { AuthProvider, useAuth } from "./contexts/AuthContext"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// Layout Components
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"

// Pages
import HomePage from "./pages/HomePage"
import ProductsPage from "./pages/ProductsPage"
import ProductCategoryPage from "./pages/ProductCategoryPage"
import ProductDetailPage from "./pages/ProductDetailPage"
import ServicesPage from "./pages/ServicesPage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import FaqPage from "./pages/FaqPage"
import ApplicationPage from "./pages/ApplicationPage"
import TermsPage from "./pages/TermsPage"
import CartPage from "./pages/CartPage"
import RequestPage from "./pages/RequestPage"
import RequestSuccessPage from "./pages/RequestSuccessPage"
import NotFoundPage from "./pages/NotFoundPage"
import AdminLogin from "./pages/auth/LoginPage"

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminProducts from "./pages/admin/AdminProducts"
import AdminProductForm from "./pages/admin/AdminProductForm"
import AdminRequests from "./pages/admin/AdminRequests"
import AdminRequestDetail from "./pages/admin/AdminRequestDetail"
import AdminCustomers from "./pages/admin/AdminCustomers"
import AdminSettings from "./pages/admin/AdminSettings"
import AddUser from "pages/admin/AddUser"
import EditUser from "pages/admin/EditUser"
import ProductRouteHandler from "pages/ProductRouteHandler"

// Navigation guard for admin routes only
const RequireAdminAuth = ({ children }) => {
  const { isAuthenticated, initializing } = useAuth()
  const location = useLocation()

  if (initializing) {
    return null
  }

  // Redirect to /login if not authenticated and trying to access an admin route
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace state={{ from: location }} />
  }

  return children
}

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ToastContainer position="top-right" autoClose={3000} />

          <Routes>
            {/* Public Routes (No Authentication Required) */}
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <HomePage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/products"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <ProductsPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/products/:id"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <ProductDetailPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/products/category/:category"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <ProductCategoryPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/products/:param"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <ProductRouteHandler />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/services"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <ServicesPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/about"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <AboutPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/contact"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <ContactPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/faq"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <FaqPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/application"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <ApplicationPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/terms"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <TermsPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/cart"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <CartPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/request"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <RequestPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            <Route
              path="/request-success"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <RequestSuccessPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />

            {/* Login Route (Public) */}
            <Route
              path="/login"
              element={<AdminLogin />}
            />

            {/* Admin Routes (Protected) */}
            <Route
              path="/admin/dashboard"
              element={
                <RequireAdminAuth>
                  <>
                    {/* <Navbar /> */}
                    <AnimatePresence mode="wait">
                      <AdminDashboard />
                    </AnimatePresence>
                    {/* <Footer /> */}
                  </>
                </RequireAdminAuth>
              }
            />

            <Route
              path="/admin/products"
              element={
                <RequireAdminAuth>
                  <>
                    {/* <Navbar /> */}
                    <AnimatePresence mode="wait">
                      <AdminProducts />
                    </AnimatePresence>
                    {/* <Footer /> */}
                  </>
                </RequireAdminAuth>
              }
            />

            <Route
              path="/admin/products/new"
              element={
                <RequireAdminAuth>
                  <>
                    {/* <Navbar /> */}
                    <AnimatePresence mode="wait">
                      <AdminProductForm />
                    </AnimatePresence>
                    {/* <Footer /> */}
                  </>
                </RequireAdminAuth>
              }
            />

            <Route
              path="/admin/products/edit/:id"
              element={
                <RequireAdminAuth>
                  <>
                    {/* <Navbar /> */}
                    <AnimatePresence mode="wait">
                      <AdminProductForm />
                    </AnimatePresence>
                    {/* <Footer /> */}
                  </>
                </RequireAdminAuth>
              }
            />

            <Route
              path="/admin/requests"
              element={
                <RequireAdminAuth>
                  <>
                    {/* <Navbar /> */}
                    <AnimatePresence mode="wait">
                      <AdminRequests />
                    </AnimatePresence>
                    {/* <Footer /> */}
                  </>
                </RequireAdminAuth>
              }
            />

            <Route
              path="/admin/requests/:requestId"
              element={
                <RequireAdminAuth>
                  <>
                    {/* <Navbar /> */}
                    <AnimatePresence mode="wait">
                      <AdminRequestDetail />
                    </AnimatePresence>
                    {/* <Footer /> */}
                  </>
                </RequireAdminAuth>
              }
            />

            <Route
              path="/admin/customers"
              element={
                <RequireAdminAuth>
                  <>
                    {/* <Navbar /> */}
                    <AnimatePresence mode="wait">
                      <AdminCustomers />
                    </AnimatePresence>
                    {/* <Footer /> */}
                  </>
                </RequireAdminAuth>
              }
            />

            <Route
              path="/admin/settings"
              element={
                <RequireAdminAuth>
                  <>
                    {/* <Navbar /> */}
                    <AnimatePresence mode="wait">
                      <AdminSettings />
                    </AnimatePresence>
                    {/* <Footer /> */}
                  </>
                </RequireAdminAuth>
              }
            />

            <Route
              path="/admin/customers/new"
              element={
                <RequireAdminAuth>
                  <>
                    {/* <Navbar /> */}
                    <AnimatePresence mode="wait">
                      <AddUser />
                    </AnimatePresence>
                    {/* <Footer /> */}
                  </>
                </RequireAdminAuth>
              }
            />

            <Route
              path="/admin/customers/edit/:id"
              element={
                <RequireAdminAuth>
                  <>
                    {/* <Navbar /> */}
                    <AnimatePresence mode="wait">
                      <EditUser />
                    </AnimatePresence>
                    {/* <Footer /> */}
                  </>
                </RequireAdminAuth>
              }
            />

            {/* 404 Route (Public) */}
            <Route
              path="*"
              element={
                <>
                  <Navbar />
                  <AnimatePresence mode="wait">
                    <NotFoundPage />
                  </AnimatePresence>
                  <Footer />
                </>
              }
            />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  )
}

export default App