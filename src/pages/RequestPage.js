// // // // // // // // "use client"

// // // // // // // // import { useState } from "react"
// // // // // // // // import { useNavigate } from "react-router-dom"
// // // // // // // // import { useCart } from "../contexts/CartContext"
// // // // // // // // import { submitRequest } from "../services/api"

// // // // // // // // const RequestPage = () => {
// // // // // // // //   const { cart, clearCart } = useCart()
// // // // // // // //   const navigate = useNavigate()
// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     name: "",
// // // // // // // //     email: "",
// // // // // // // //     phone: "",
// // // // // // // //     company: "",
// // // // // // // //     address: "",
// // // // // // // //     city: "",
// // // // // // // //     state: "",
// // // // // // // //     zip: "",
// // // // // // // //     country: "",
// // // // // // // //     message: "",
// // // // // // // //   })
// // // // // // // //   const [loading, setLoading] = useState(false)
// // // // // // // //   const [errors, setErrors] = useState({})

// // // // // // // //   const handleChange = (e) => {
// // // // // // // //     const { name, value } = e.target
// // // // // // // //     setFormData((prev) => ({
// // // // // // // //       ...prev,
// // // // // // // //       [name]: value,
// // // // // // // //     }))

// // // // // // // //     // Clear error when field is edited
// // // // // // // //     if (errors[name]) {
// // // // // // // //       setErrors((prev) => ({
// // // // // // // //         ...prev,
// // // // // // // //         [name]: "",
// // // // // // // //       }))
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   const validateForm = () => {
// // // // // // // //     const newErrors = {}

// // // // // // // //     if (!formData.name.trim()) newErrors.name = "Name is required"
// // // // // // // //     if (!formData.email.trim()) {
// // // // // // // //       newErrors.email = "Email is required"
// // // // // // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // // // // // //       newErrors.email = "Email is invalid"
// // // // // // // //     }
// // // // // // // //     if (!formData.phone.trim()) newErrors.phone = "Phone is required"
// // // // // // // //     if (!formData.company.trim()) newErrors.company = "Company is required"
// // // // // // // //     if (!formData.address.trim()) newErrors.address = "Address is required"
// // // // // // // //     if (!formData.city.trim()) newErrors.city = "City is required"
// // // // // // // //     if (!formData.country.trim()) newErrors.country = "Country is required"

// // // // // // // //     setErrors(newErrors)
// // // // // // // //     return Object.keys(newErrors).length === 0
// // // // // // // //   }

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault()

// // // // // // // //     if (!validateForm()) return

// // // // // // // //     setLoading(true)
// // // // // // // //     try {
// // // // // // // //       // Submit request to backend
// // // // // // // //       await submitRequest({
// // // // // // // //         ...formData,
// // // // // // // //         items: cart,
// // // // // // // //       })

// // // // // // // //       // Clear cart and redirect to success page
// // // // // // // //       clearCart()
// // // // // // // //       navigate("/request-success")
// // // // // // // //     } catch (error) {
// // // // // // // //       console.error("Error submitting request:", error)
// // // // // // // //       setErrors({
// // // // // // // //         submit: "Failed to submit request. Please try again later.",
// // // // // // // //       })
// // // // // // // //     } finally {
// // // // // // // //       setLoading(false)
// // // // // // // //     }
// // // // // // // //   }

// // // // // // // //   return (
// // // // // // // //     <div className="pt-24 pb-16">
// // // // // // // //       <div className="container mx-auto px-4">
// // // // // // // //         <div className="max-w-4xl mx-auto">
// // // // // // // //           <h1 className="text-3xl font-bold mb-6">Request Form</h1>

// // // // // // // //           {cart.length === 0 ? (
// // // // // // // //             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
// // // // // // // //               <p className="text-yellow-700">
// // // // // // // //                 Your cart is empty. Please add products to your cart before submitting a request.
// // // // // // // //               </p>
// // // // // // // //             </div>
// // // // // // // //           ) : (
// // // // // // // //             <>
// // // // // // // //               <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
// // // // // // // //                 <h2 className="text-xl font-semibold mb-4">Products in Your Request</h2>
// // // // // // // //                 <div className="overflow-x-auto">
// // // // // // // //                   <table className="min-w-full divide-y divide-gray-200">
// // // // // // // //                     <thead className="bg-gray-50">
// // // // // // // //                       <tr>
// // // // // // // //                         <th
// // // // // // // //                           scope="col"
// // // // // // // //                           className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // // // //                         >
// // // // // // // //                           Product
// // // // // // // //                         </th>
// // // // // // // //                         <th
// // // // // // // //                           scope="col"
// // // // // // // //                           className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // // // //                         >
// // // // // // // //                           Model
// // // // // // // //                         </th>
// // // // // // // //                         <th
// // // // // // // //                           scope="col"
// // // // // // // //                           className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // // // //                         >
// // // // // // // //                           Quantity
// // // // // // // //                         </th>
// // // // // // // //                       </tr>
// // // // // // // //                     </thead>
// // // // // // // //                     <tbody className="bg-white divide-y divide-gray-200">
// // // // // // // //                       {cart.map((item) => (
// // // // // // // //                         <tr key={item.id}>
// // // // // // // //                           <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
// // // // // // // //                           <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.model}</td>
// // // // // // // //                           <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
// // // // // // // //                         </tr>
// // // // // // // //                       ))}
// // // // // // // //                     </tbody>
// // // // // // // //                   </table>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               <div className="bg-white rounded-lg shadow-sm p-6">
// // // // // // // //                 <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

// // // // // // // //                 {errors.submit && (
// // // // // // // //                   <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
// // // // // // // //                     <p className="text-red-700">{errors.submit}</p>
// // // // // // // //                   </div>
// // // // // // // //                 )}

// // // // // // // //                 <form onSubmit={handleSubmit}>
// // // // // // // //                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // // // //                     <div className="form-group">
// // // // // // // //                       <label htmlFor="name" className="form-label">
// // // // // // // //                         Full Name *
// // // // // // // //                       </label>
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         id="name"
// // // // // // // //                         name="name"
// // // // // // // //                         value={formData.name}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         className={`form-control ${errors.name ? "border-red-500" : ""}`}
// // // // // // // //                       />
// // // // // // // //                       {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// // // // // // // //                     </div>

// // // // // // // //                     <div className="form-group">
// // // // // // // //                       <label htmlFor="email" className="form-label">
// // // // // // // //                         Email Address *
// // // // // // // //                       </label>
// // // // // // // //                       <input
// // // // // // // //                         type="email"
// // // // // // // //                         id="email"
// // // // // // // //                         name="email"
// // // // // // // //                         value={formData.email}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         className={`form-control ${errors.email ? "border-red-500" : ""}`}
// // // // // // // //                       />
// // // // // // // //                       {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // // // // // // //                     </div>

// // // // // // // //                     <div className="form-group">
// // // // // // // //                       <label htmlFor="phone" className="form-label">
// // // // // // // //                         Phone Number *
// // // // // // // //                       </label>
// // // // // // // //                       <input
// // // // // // // //                         type="tel"
// // // // // // // //                         id="phone"
// // // // // // // //                         name="phone"
// // // // // // // //                         value={formData.phone}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         className={`form-control ${errors.phone ? "border-red-500" : ""}`}
// // // // // // // //                       />
// // // // // // // //                       {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// // // // // // // //                     </div>

// // // // // // // //                     <div className="form-group">
// // // // // // // //                       <label htmlFor="company" className="form-label">
// // // // // // // //                         Company Name *
// // // // // // // //                       </label>
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         id="company"
// // // // // // // //                         name="company"
// // // // // // // //                         value={formData.company}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         className={`form-control ${errors.company ? "border-red-500" : ""}`}
// // // // // // // //                       />
// // // // // // // //                       {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
// // // // // // // //                     </div>

// // // // // // // //                     <div className="form-group md:col-span-2">
// // // // // // // //                       <label htmlFor="address" className="form-label">
// // // // // // // //                         Address *
// // // // // // // //                       </label>
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         id="address"
// // // // // // // //                         name="address"
// // // // // // // //                         value={formData.address}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         className={`form-control ${errors.address ? "border-red-500" : ""}`}
// // // // // // // //                       />
// // // // // // // //                       {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
// // // // // // // //                     </div>

// // // // // // // //                     <div className="form-group">
// // // // // // // //                       <label htmlFor="city" className="form-label">
// // // // // // // //                         City *
// // // // // // // //                       </label>
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         id="city"
// // // // // // // //                         name="city"
// // // // // // // //                         value={formData.city}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         className={`form-control ${errors.city ? "border-red-500" : ""}`}
// // // // // // // //                       />
// // // // // // // //                       {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city}</p>}
// // // // // // // //                     </div>

// // // // // // // //                     <div className="form-group">
// // // // // // // //                       <label htmlFor="state" className="form-label">
// // // // // // // //                         State/Province
// // // // // // // //                       </label>
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         id="state"
// // // // // // // //                         name="state"
// // // // // // // //                         value={formData.state}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         className="form-control"
// // // // // // // //                       />
// // // // // // // //                     </div>

// // // // // // // //                     <div className="form-group">
// // // // // // // //                       <label htmlFor="zip" className="form-label">
// // // // // // // //                         ZIP/Postal Code
// // // // // // // //                       </label>
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         id="zip"
// // // // // // // //                         name="zip"
// // // // // // // //                         value={formData.zip}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         className="form-control"
// // // // // // // //                       />
// // // // // // // //                     </div>

// // // // // // // //                     <div className="form-group">
// // // // // // // //                       <label htmlFor="country" className="form-label">
// // // // // // // //                         Country *
// // // // // // // //                       </label>
// // // // // // // //                       <input
// // // // // // // //                         type="text"
// // // // // // // //                         id="country"
// // // // // // // //                         name="country"
// // // // // // // //                         value={formData.country}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         className={`form-control ${errors.country ? "border-red-500" : ""}`}
// // // // // // // //                       />
// // // // // // // //                       {errors.country && <p className="mt-1 text-sm text-red-600">{errors.country}</p>}
// // // // // // // //                     </div>

// // // // // // // //                     <div className="form-group md:col-span-2">
// // // // // // // //                       <label htmlFor="message" className="form-label">
// // // // // // // //                         Additional Information
// // // // // // // //                       </label>
// // // // // // // //                       <textarea
// // // // // // // //                         id="message"
// // // // // // // //                         name="message"
// // // // // // // //                         rows="4"
// // // // // // // //                         value={formData.message}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         className="form-control"
// // // // // // // //                         placeholder="Please provide any specific requirements or questions about the products."
// // // // // // // //                       ></textarea>
// // // // // // // //                     </div>
// // // // // // // //                   </div>

// // // // // // // //                   <div className="mt-8">
// // // // // // // //                     <button type="submit" disabled={loading} className="btn btn-primary w-full md:w-auto">
// // // // // // // //                       {loading ? (
// // // // // // // //                         <span className="flex items-center justify-center">
// // // // // // // //                           <svg
// // // // // // // //                             className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
// // // // // // // //                             xmlns="http://www.w3.org/2000/svg"
// // // // // // // //                             fill="none"
// // // // // // // //                             viewBox="0 0 24 24"
// // // // // // // //                           >
// // // // // // // //                             <circle
// // // // // // // //                               className="opacity-25"
// // // // // // // //                               cx="12"
// // // // // // // //                               cy="12"
// // // // // // // //                               r="10"
// // // // // // // //                               stroke="currentColor"
// // // // // // // //                               strokeWidth="4"
// // // // // // // //                             ></circle>
// // // // // // // //                             <path
// // // // // // // //                               className="opacity-75"
// // // // // // // //                               fill="currentColor"
// // // // // // // //                               d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // // // // // //                             ></path>
// // // // // // // //                           </svg>
// // // // // // // //                           Processing...
// // // // // // // //                         </span>
// // // // // // // //                       ) : (
// // // // // // // //                         "Submit Request"
// // // // // // // //                       )}
// // // // // // // //                     </button>
// // // // // // // //                   </div>
// // // // // // // //                 </form>
// // // // // // // //               </div>
// // // // // // // //             </>
// // // // // // // //           )}
// // // // // // // //         </div>
// // // // // // // //       </div>
// // // // // // // //     </div>
// // // // // // // //   )
// // // // // // // // }

// // // // // // // // export default RequestPage

// // // // // // // "use client"

// // // // // // // import { useState, useEffect } from "react"
// // // // // // // import { useNavigate, useLocation } from "react-router-dom"
// // // // // // // import { useCart } from "../contexts/CartContext"

// // // // // // // const RequestPage = () => {
// // // // // // //   const { cartItems, cartTotal, clearCart } = useCart()
// // // // // // //   const navigate = useNavigate()
// // // // // // //   const location = useLocation()
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     name: "",
// // // // // // //     email: "",
// // // // // // //     company: "",
// // // // // // //     phone: "",
// // // // // // //     message: "",
// // // // // // //   })
// // // // // // //   const [errors, setErrors] = useState({})
// // // // // // //   const [loading, setLoading] = useState(false)
// // // // // // //   const [singleProductMode, setSingleProductMode] = useState(false)
// // // // // // //   const [singleProduct, setSingleProduct] = useState(null)

// // // // // // //   useEffect(() => {
// // // // // // //     // Check if a single product was passed via location state
// // // // // // //     if (location.state?.product) {
// // // // // // //       setSingleProductMode(true)
// // // // // // //       setSingleProduct(location.state.product)
// // // // // // //     }
// // // // // // //   }, [location])

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value } = e.target
// // // // // // //     setFormData((prev) => ({ ...prev, [name]: value }))

// // // // // // //     // Clear error for this field when user types
// // // // // // //     if (errors[name]) {
// // // // // // //       setErrors((prev) => ({ ...prev, [name]: "" }))
// // // // // // //     }
// // // // // // //   }

// // // // // // //   const validateForm = () => {
// // // // // // //     const newErrors = {}

// // // // // // //     if (!formData.name.trim()) {
// // // // // // //       newErrors.name = "Name is required"
// // // // // // //     }

// // // // // // //     if (!formData.email.trim()) {
// // // // // // //       newErrors.email = "Email is required"
// // // // // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // // // // //       newErrors.email = "Email is invalid"
// // // // // // //     }

// // // // // // //     if (!formData.company.trim()) {
// // // // // // //       newErrors.company = "Company is required"
// // // // // // //     }

// // // // // // //     if (!formData.phone.trim()) {
// // // // // // //       newErrors.phone = "Phone is required"
// // // // // // //     }

// // // // // // //     setErrors(newErrors)
// // // // // // //     return Object.keys(newErrors).length === 0
// // // // // // //   }

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault()

// // // // // // //     if (!validateForm()) {
// // // // // // //       return
// // // // // // //     }

// // // // // // //     setLoading(true)

// // // // // // //     try {
// // // // // // //       const requestData = {
// // // // // // //         ...formData,
// // // // // // //         products: singleProductMode
// // // // // // //           ? [
// // // // // // //             {
// // // // // // //               id: singleProduct.id,
// // // // // // //               name: singleProduct.name,
// // // // // // //               quantity: 1,
// // // // // // //               price: singleProduct.price,
// // // // // // //               category: singleProduct.categoryName || singleProduct.category,
// // // // // // //             },
// // // // // // //           ]
// // // // // // //           : cartItems,
// // // // // // //         totalAmount: singleProductMode ? singleProduct.price : cartTotal,
// // // // // // //         status: "pending",
// // // // // // //         date: new Date().toISOString(),
// // // // // // //       }

// // // // // // //       // In a real application, you would send this to your backend
// // // // // // //       // await axios.post(`${process.env.REACT_APP_API_URL}/api/requests`, requestData);

// // // // // // //       console.log("Submitting request:", requestData)

// // // // // // //       // Clear cart if not in single product mode
// // // // // // //       if (!singleProductMode) {
// // // // // // //         clearCart()
// // // // // // //       }

// // // // // // //       // Navigate to success page
// // // // // // //       navigate("/request-success")
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error submitting request:", error)
// // // // // // //       setErrors({ submit: "Failed to submit request. Please try again." })
// // // // // // //     } finally {
// // // // // // //       setLoading(false)
// // // // // // //     }
// // // // // // //   }

// // // // // // //   // If cart is empty and not in single product mode, show message
// // // // // // //   if (!singleProductMode && cartItems.length === 0) {
// // // // // // //     return (
// // // // // // //       <div className="container mx-auto px-4 py-16">
// // // // // // //         <div className="max-w-2xl mx-auto text-center">
// // // // // // //           <h1 className="text-3xl font-bold text-gray-800 mb-4">Request Quote</h1>
// // // // // // //           <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
// // // // // // //             <p className="text-yellow-700">
// // // // // // //               Your cart is empty. Please add products to your cart before requesting a quote.
// // // // // // //             </p>
// // // // // // //           </div>
// // // // // // //           <button
// // // // // // //             onClick={() => navigate("/products")}
// // // // // // //             className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-6 rounded-md font-medium transition duration-300"
// // // // // // //           >
// // // // // // //             Browse Products
// // // // // // //           </button>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     )
// // // // // // //   }

// // // // // // //   return (
// // // // // // //     <div className="container mx-auto px-4 py-8">
// // // // // // //       <div className="max-w-4xl mx-auto">
// // // // // // //         <h1 className="text-3xl font-bold text-gray-800 mb-6">Request Quote</h1>

// // // // // // //         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
// // // // // // //           <div className="p-6">
// // // // // // //             <h2 className="text-xl font-semibold text-gray-800 mb-4">Products in Your Request</h2>

// // // // // // //             <div className="overflow-x-auto">
// // // // // // //               <table className="min-w-full divide-y divide-gray-200">
// // // // // // //                 <thead className="bg-gray-50">
// // // // // // //                   <tr>
// // // // // // //                     <th
// // // // // // //                       scope="col"
// // // // // // //                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // // //                     >
// // // // // // //                       Product
// // // // // // //                     </th>
// // // // // // //                     <th
// // // // // // //                       scope="col"
// // // // // // //                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // // //                     >
// // // // // // //                       Category
// // // // // // //                     </th>
// // // // // // //                     <th
// // // // // // //                       scope="col"
// // // // // // //                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // // //                     >
// // // // // // //                       Quantity
// // // // // // //                     </th>
// // // // // // //                     <th
// // // // // // //                       scope="col"
// // // // // // //                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // // //                     >
// // // // // // //                       Price
// // // // // // //                     </th>
// // // // // // //                   </tr>
// // // // // // //                 </thead>
// // // // // // //                 <tbody className="bg-white divide-y divide-gray-200">
// // // // // // //                   {singleProductMode ? (
// // // // // // //                     <tr>
// // // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // // //                         <div className="flex items-center">
// // // // // // //                           <div className="flex-shrink-0 h-10 w-10">
// // // // // // //                             <img
// // // // // // //                               className="h-10 w-10 rounded-md object-cover"
// // // // // // //                               src={singleProduct.images?.[0] || singleProduct.image}
// // // // // // //                               alt={singleProduct.name}
// // // // // // //                             />
// // // // // // //                           </div>
// // // // // // //                           <div className="ml-4">
// // // // // // //                             <div className="text-sm font-medium text-gray-900">{singleProduct.name}</div>
// // // // // // //                           </div>
// // // // // // //                         </div>
// // // // // // //                       </td>
// // // // // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // // // //                         {singleProduct.categoryName || singleProduct.category}
// // // // // // //                       </td>
// // // // // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
// // // // // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // // // // // //                         ${singleProduct.price.toFixed(2)}
// // // // // // //                       </td>
// // // // // // //                     </tr>
// // // // // // //                   ) : (
// // // // // // //                     cartItems.map((item) => (
// // // // // // //                       <tr key={item.id}>
// // // // // // //                         <td className="px-6 py-4 whitespace-nowrap">
// // // // // // //                           <div className="flex items-center">
// // // // // // //                             <div className="flex-shrink-0 h-10 w-10">
// // // // // // //                               <img
// // // // // // //                                 className="h-10 w-10 rounded-md object-cover"
// // // // // // //                                 src={item.image || "/placeholder.svg"}
// // // // // // //                                 alt={item.name}
// // // // // // //                               />
// // // // // // //                             </div>
// // // // // // //                             <div className="ml-4">
// // // // // // //                               <div className="text-sm font-medium text-gray-900">{item.name}</div>
// // // // // // //                             </div>
// // // // // // //                           </div>
// // // // // // //                         </td>
// // // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
// // // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
// // // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // // // // // //                           ${(item.price * item.quantity).toFixed(2)}
// // // // // // //                         </td>
// // // // // // //                       </tr>
// // // // // // //                     ))
// // // // // // //                   )}
// // // // // // //                 </tbody>
// // // // // // //                 <tfoot className="bg-gray-50">
// // // // // // //                   <tr>
// // // // // // //                     <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
// // // // // // //                       Total:
// // // // // // //                     </td>
// // // // // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
// // // // // // //                       ${(singleProductMode ? singleProduct.price : cartTotal).toFixed(2)}
// // // // // // //                     </td>
// // // // // // //                   </tr>
// // // // // // //                 </tfoot>
// // // // // // //               </table>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div className="bg-white rounded-lg shadow-md overflow-hidden">
// // // // // // //           <div className="p-6">
// // // // // // //             <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>

// // // // // // //             <form onSubmit={handleSubmit}>
// // // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // // // //                 <div>
// // // // // // //                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // // //                     Full Name *
// // // // // // //                   </label>
// // // // // // //                   <input
// // // // // // //                     type="text"
// // // // // // //                     id="name"
// // // // // // //                     name="name"
// // // // // // //                     value={formData.name}
// // // // // // //                     onChange={handleChange}
// // // // // // //                     className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"
// // // // // // //                       }`}
// // // // // // //                   />
// // // // // // //                   {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// // // // // // //                 </div>

// // // // // // //                 <div>
// // // // // // //                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // // //                     Email Address *
// // // // // // //                   </label>
// // // // // // //                   <input
// // // // // // //                     type="email"
// // // // // // //                     id="email"
// // // // // // //                     name="email"
// // // // // // //                     value={formData.email}
// // // // // // //                     onChange={handleChange}
// // // // // // //                     className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
// // // // // // //                       }`}
// // // // // // //                   />
// // // // // // //                   {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // // // // // //                 </div>

// // // // // // //                 <div>
// // // // // // //                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // // //                     Company Name *
// // // // // // //                   </label>
// // // // // // //                   <input
// // // // // // //                     type="text"
// // // // // // //                     id="company"
// // // // // // //                     name="company"
// // // // // // //                     value={formData.company}
// // // // // // //                     onChange={handleChange}
// // // // // // //                     className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.company ? "border-red-500" : "border-gray-300"
// // // // // // //                       }`}
// // // // // // //                   />
// // // // // // //                   {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
// // // // // // //                 </div>

// // // // // // //                 <div>
// // // // // // //                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // // //                     Phone Number *
// // // // // // //                   </label>
// // // // // // //                   <input
// // // // // // //                     type="tel"
// // // // // // //                     id="phone"
// // // // // // //                     name="phone"
// // // // // // //                     value={formData.phone}
// // // // // // //                     onChange={handleChange}
// // // // // // //                     className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"
// // // // // // //                       }`}
// // // // // // //                   />
// // // // // // //                   {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               <div className="mb-6">
// // // // // // //                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // // //                   Additional Information
// // // // // // //                 </label>
// // // // // // //                 <textarea
// // // // // // //                   id="message"
// // // // // // //                   name="message"
// // // // // // //                   rows="4"
// // // // // // //                   value={formData.message}
// // // // // // //                   onChange={handleChange}
// // // // // // //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // // //                   placeholder="Please include any specific requirements or questions about the products."
// // // // // // //                 ></textarea>
// // // // // // //               </div>

// // // // // // //               {errors.submit && (
// // // // // // //                 <div className="mb-6">
// // // // // // //                   <p className="text-sm text-red-600">{errors.submit}</p>
// // // // // // //                 </div>
// // // // // // //               )}

// // // // // // //               <div className="flex justify-end">
// // // // // // //                 <button
// // // // // // //                   type="submit"
// // // // // // //                   disabled={loading}
// // // // // // //                   className="bg-blue-900 hover:bg-blue-800 text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center"
// // // // // // //                 >
// // // // // // //                   {loading ? (
// // // // // // //                     <>
// // // // // // //                       <svg
// // // // // // //                         className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// // // // // // //                         xmlns="http://www.w3.org/2000/svg"
// // // // // // //                         fill="none"
// // // // // // //                         viewBox="0 0 24 24"
// // // // // // //                       >
// // // // // // //                         <circle
// // // // // // //                           className="opacity-25"
// // // // // // //                           cx="12"
// // // // // // //                           cy="12"
// // // // // // //                           r="10"
// // // // // // //                           stroke="currentColor"
// // // // // // //                           strokeWidth="4"
// // // // // // //                         ></circle>
// // // // // // //                         <path
// // // // // // //                           className="opacity-75"
// // // // // // //                           fill="currentColor"
// // // // // // //                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // // // // //                         ></path>
// // // // // // //                       </svg>
// // // // // // //                       Processing...
// // // // // // //                     </>
// // // // // // //                   ) : (
// // // // // // //                     "Submit Request"
// // // // // // //                   )}
// // // // // // //                 </button>
// // // // // // //               </div>
// // // // // // //             </form>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>
// // // // // // //     </div>
// // // // // // //   )
// // // // // // // }

// // // // // // // export default RequestPage


// // // // // // "use client"

// // // // // // import { useState, useEffect } from "react"
// // // // // // import { useNavigate, useLocation } from "react-router-dom"
// // // // // // import { useCart } from "../contexts/CartContext"

// // // // // // const RequestPage = () => {
// // // // // //   const { cartItems, cartTotal, clearCart } = useCart()
// // // // // //   const navigate = useNavigate()
// // // // // //   const location = useLocation()
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: "",
// // // // // //     email: "",
// // // // // //     company: "",
// // // // // //     phone: "",
// // // // // //     message: "",
// // // // // //   })
// // // // // //   const [errors, setErrors] = useState({})
// // // // // //   const [loading, setLoading] = useState(false)
// // // // // //   const [singleProductMode, setSingleProductMode] = useState(false)
// // // // // //   const [singleProduct, setSingleProduct] = useState(null)

// // // // // //   useEffect(() => {
// // // // // //     // Check if a single product was passed via location state
// // // // // //     if (location.state?.product) {
// // // // // //       setSingleProductMode(true)
// // // // // //       setSingleProduct(location.state.product)
// // // // // //     }
// // // // // //   }, [location])

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value } = e.target
// // // // // //     setFormData((prev) => ({ ...prev, [name]: value }))

// // // // // //     // Clear error for this field when user types
// // // // // //     if (errors[name]) {
// // // // // //       setErrors((prev) => ({ ...prev, [name]: "" }))
// // // // // //     }
// // // // // //   }

// // // // // //   const validateForm = () => {
// // // // // //     const newErrors = {}

// // // // // //     if (!formData.name.trim()) {
// // // // // //       newErrors.name = "Name is required"
// // // // // //     }

// // // // // //     if (!formData.email.trim()) {
// // // // // //       newErrors.email = "Email is required"
// // // // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // // // //       newErrors.email = "Email is invalid"
// // // // // //     }

// // // // // //     if (!formData.company.trim()) {
// // // // // //       newErrors.company = "Company is required"
// // // // // //     }

// // // // // //     if (!formData.phone.trim()) {
// // // // // //       newErrors.phone = "Phone is required"
// // // // // //     }

// // // // // //     setErrors(newErrors)
// // // // // //     return Object.keys(newErrors)?.length === 0
// // // // // //   }

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault()

// // // // // //     if (!validateForm()) {
// // // // // //       return
// // // // // //     }

// // // // // //     setLoading(true)

// // // // // //     try {
// // // // // //       const requestData = {
// // // // // //         ...formData,
// // // // // //         products: singleProductMode
// // // // // //           ? [
// // // // // //             {
// // // // // //               id: singleProduct.id,
// // // // // //               name: singleProduct.name,
// // // // // //               quantity: 1,
// // // // // //               price: singleProduct.price,
// // // // // //               category: singleProduct.categoryName || singleProduct.category,
// // // // // //             },
// // // // // //           ]
// // // // // //           : cartItems,
// // // // // //         totalAmount: singleProductMode ? singleProduct.price : cartTotal,
// // // // // //         status: "pending",
// // // // // //         date: new Date().toISOString(),
// // // // // //       }

// // // // // //       // In a real application, you would send this to your backend
// // // // // //       // await axios.post(`${process.env.REACT_APP_API_URL}/api/requests`, requestData);

// // // // // //       console.log("Submitting request:", requestData)

// // // // // //       // Clear cart if not in single product mode
// // // // // //       if (!singleProductMode) {
// // // // // //         clearCart()
// // // // // //       }

// // // // // //       // Navigate to success page
// // // // // //       navigate("/request-success")
// // // // // //     } catch (error) {
// // // // // //       console.error("Error submitting request:", error)
// // // // // //       setErrors({ submit: "Failed to submit request. Please try again." })
// // // // // //     } finally {
// // // // // //       setLoading(false)
// // // // // //     }
// // // // // //   }

// // // // // //   // If cart is empty and not in single product mode, show message
// // // // // //   if (!singleProductMode && cartItems?.length === 0) {
// // // // // //     return (
// // // // // //       <div className="container mx-auto px-4 py-16">
// // // // // //         <div className="max-w-2xl mx-auto text-center">
// // // // // //           <h1 className="text-3xl font-bold text-gray-800 mb-4">Request Quote</h1>
// // // // // //           <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
// // // // // //             <p className="text-yellow-700">
// // // // // //               Your cart is empty. Please add products to your cart before requesting a quote.
// // // // // //             </p>
// // // // // //           </div>
// // // // // //           <button
// // // // // //             onClick={() => navigate("/products")}
// // // // // //             className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-6 rounded-md font-medium transition duration-300"
// // // // // //           >
// // // // // //             Browse Products
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     )
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="container mx-auto px-4 py-8">
// // // // // //       <div className="max-w-4xl mx-auto">
// // // // // //         <h1 className="text-3xl font-bold text-gray-800 mb-6">Request Quote</h1>

// // // // // //         <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
// // // // // //           <div className="p-6">
// // // // // //             <h2 className="text-xl font-semibold text-gray-800 mb-4">Products in Your Request</h2>

// // // // // //             <div className="overflow-x-auto">
// // // // // //               <table className="min-w-full divide-y divide-gray-200">
// // // // // //                 <thead className="bg-gray-50">
// // // // // //                   <tr>
// // // // // //                     <th
// // // // // //                       scope="col"
// // // // // //                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // //                     >
// // // // // //                       Product
// // // // // //                     </th>
// // // // // //                     <th
// // // // // //                       scope="col"
// // // // // //                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // //                     >
// // // // // //                       Category
// // // // // //                     </th>
// // // // // //                     <th
// // // // // //                       scope="col"
// // // // // //                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // //                     >
// // // // // //                       Quantity
// // // // // //                     </th>
// // // // // //                     <th
// // // // // //                       scope="col"
// // // // // //                       className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
// // // // // //                     >
// // // // // //                       Price
// // // // // //                     </th>
// // // // // //                   </tr>
// // // // // //                 </thead>
// // // // // //                 <tbody className="bg-white divide-y divide-gray-200">
// // // // // //                   {singleProductMode ? (
// // // // // //                     <tr>
// // // // // //                       <td className="px-6 py-4 whitespace-nowrap">
// // // // // //                         <div className="flex items-center">
// // // // // //                           <div className="flex-shrink-0 h-10 w-10">
// // // // // //                             <img
// // // // // //                               className="h-10 w-10 rounded-md object-cover"
// // // // // //                               src={singleProduct.images?.[0] || singleProduct.image}
// // // // // //                               alt={singleProduct.name}
// // // // // //                             />
// // // // // //                           </div>
// // // // // //                           <div className="ml-4">
// // // // // //                             <div className="text-sm font-medium text-gray-900">{singleProduct.name}</div>
// // // // // //                           </div>
// // // // // //                         </div>
// // // // // //                       </td>
// // // // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // // //                         {singleProduct.categoryName || singleProduct.category}
// // // // // //                       </td>
// // // // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
// // // // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // // // // //                         ${singleProduct.price.toFixed(2)}
// // // // // //                       </td>
// // // // // //                     </tr>
// // // // // //                   ) : (
// // // // // //                     cartItems?.map((item) => (
// // // // // //                       <tr key={item.id}>
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap">
// // // // // //                           <div className="flex items-center">
// // // // // //                             <div className="flex-shrink-0 h-10 w-10">
// // // // // //                               <img
// // // // // //                                 className="h-10 w-10 rounded-md object-cover"
// // // // // //                                 src={item.images[0] || "/placeholder.svg"}
// // // // // //                                 alt={item.name}
// // // // // //                               />
// // // // // //                             </div>
// // // // // //                             <div className="ml-4">
// // // // // //                               <div className="text-sm font-medium text-gray-900">{item.name}</div>
// // // // // //                             </div>
// // // // // //                           </div>
// // // // // //                         </td>
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
// // // // // //                           ${(item.price * item.quantity).toFixed(2)}
// // // // // //                         </td>
// // // // // //                       </tr>
// // // // // //                     ))
// // // // // //                   )}
// // // // // //                 </tbody>
// // // // // //                 <tfoot className="bg-gray-50">
// // // // // //                   <tr>
// // // // // //                     <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
// // // // // //                       Total:
// // // // // //                     </td>
// // // // // //                     <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
// // // // // //                       ${(singleProductMode ? singleProduct.price : cartTotal).toFixed(2)}
// // // // // //                     </td>
// // // // // //                   </tr>
// // // // // //                 </tfoot>
// // // // // //               </table>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="bg-white rounded-lg shadow-md overflow-hidden">
// // // // // //           <div className="p-6">
// // // // // //             <h2 className="text-xl font-semibold text-gray-800 mb-4">Contact Information</h2>

// // // // // //             <form onSubmit={handleSubmit}>
// // // // // //               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// // // // // //                 <div>
// // // // // //                   <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //                     Full Name *
// // // // // //                   </label>
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     id="name"
// // // // // //                     name="name"
// // // // // //                     value={formData.name}
// // // // // //                     onChange={handleChange}
// // // // // //                     className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.name ? "border-red-500" : "border-gray-300"
// // // // // //                       }`}
// // // // // //                   />
// // // // // //                   {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// // // // // //                 </div>

// // // // // //                 <div>
// // // // // //                   <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //                     Email Address *
// // // // // //                   </label>
// // // // // //                   <input
// // // // // //                     type="email"
// // // // // //                     id="email"
// // // // // //                     name="email"
// // // // // //                     value={formData.email}
// // // // // //                     onChange={handleChange}
// // // // // //                     className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.email ? "border-red-500" : "border-gray-300"
// // // // // //                       }`}
// // // // // //                   />
// // // // // //                   {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // // // // //                 </div>

// // // // // //                 <div>
// // // // // //                   <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //                     Company Name *
// // // // // //                   </label>
// // // // // //                   <input
// // // // // //                     type="text"
// // // // // //                     id="company"
// // // // // //                     name="company"
// // // // // //                     value={formData.company}
// // // // // //                     onChange={handleChange}
// // // // // //                     className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.company ? "border-red-500" : "border-gray-300"
// // // // // //                       }`}
// // // // // //                   />
// // // // // //                   {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
// // // // // //                 </div>

// // // // // //                 <div>
// // // // // //                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //                     Phone Number *
// // // // // //                   </label>
// // // // // //                   <input
// // // // // //                     type="tel"
// // // // // //                     id="phone"
// // // // // //                     name="phone"
// // // // // //                     value={formData.phone}
// // // // // //                     onChange={handleChange}
// // // // // //                     className={`w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${errors.phone ? "border-red-500" : "border-gray-300"
// // // // // //                       }`}
// // // // // //                   />
// // // // // //                   {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <div className="mb-6">
// // // // // //                 <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //                   Additional Information
// // // // // //                 </label>
// // // // // //                 <textarea
// // // // // //                   id="message"
// // // // // //                   name="message"
// // // // // //                   rows="4"
// // // // // //                   value={formData.message}
// // // // // //                   onChange={handleChange}
// // // // // //                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
// // // // // //                   placeholder="Please include any specific requirements or questions about the products."
// // // // // //                 ></textarea>
// // // // // //               </div>

// // // // // //               {errors.submit && (
// // // // // //                 <div className="mb-6">
// // // // // //                   <p className="text-sm text-red-600">{errors.submit}</p>
// // // // // //                 </div>
// // // // // //               )}

// // // // // //               <div className="flex justify-end">
// // // // // //                 <button
// // // // // //                   type="submit"
// // // // // //                   disabled={loading}
// // // // // //                   className="bg-blue-900 hover:bg-blue-800 text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center"
// // // // // //                 >
// // // // // //                   {loading ? (
// // // // // //                     <>
// // // // // //                       <svg
// // // // // //                         className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
// // // // // //                         xmlns="http://www.w3.org/2000/svg"
// // // // // //                         fill="none"
// // // // // //                         viewBox="0 0 24 24"
// // // // // //                       >
// // // // // //                         <circle
// // // // // //                           className="opacity-25"
// // // // // //                           cx="12"
// // // // // //                           cy="12"
// // // // // //                           r="10"
// // // // // //                           stroke="currentColor"
// // // // // //                           strokeWidth="4"
// // // // // //                         ></circle>
// // // // // //                         <path
// // // // // //                           className="opacity-75"
// // // // // //                           fill="currentColor"
// // // // // //                           d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // // // //                         ></path>
// // // // // //                       </svg>
// // // // // //                       Processing...
// // // // // //                     </>
// // // // // //                   ) : (
// // // // // //                     "Submit Request"
// // // // // //                   )}
// // // // // //                 </button>
// // // // // //               </div>
// // // // // //             </form>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default RequestPage



// // // // // // "use client"

// // // // // // import { useState, useEffect } from "react"
// // // // // // import { useNavigate, useLocation } from "react-router-dom"
// // // // // // import { useCart } from "../contexts/CartContext"

// // // // // // const RequestPage = () => {
// // // // // //   const { cart, calculateSubtotal, clearCart } = useCart()
// // // // // //   const navigate = useNavigate()
// // // // // //   const location = useLocation()
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     name: "",
// // // // // //     email: "",
// // // // // //     company: "",
// // // // // //     phone: "",
// // // // // //     message: "",
// // // // // //   })
// // // // // //   const [errors, setErrors] = useState({})
// // // // // //   const [loading, setLoading] = useState(false)
// // // // // //   const [singleProductMode, setSingleProductMode] = useState(false)
// // // // // //   const [singleProduct, setSingleProduct] = useState(null)

// // // // // //   // Calculate total separately since it's not directly provided by context
// // // // // //   const cartTotal = calculateSubtotal()

// // // // // //   useEffect(() => {
// // // // // //     // Check if a single product was passed via location state
// // // // // //     if (location.state?.product) {
// // // // // //       setSingleProductMode(true)
// // // // // //       setSingleProduct(location.state.product)
// // // // // //     }
// // // // // //   }, [location])

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value } = e.target
// // // // // //     setFormData((prev) => ({ ...prev, [name]: value }))

// // // // // //     // Clear error for this field when user types
// // // // // //     if (errors[name]) {
// // // // // //       setErrors((prev) => ({ ...prev, [name]: "" }))
// // // // // //     }
// // // // // //   }

// // // // // //   const validateForm = () => {
// // // // // //     const newErrors = {}

// // // // // //     if (!formData.name.trim()) {
// // // // // //       newErrors.name = "Name is required"
// // // // // //     }

// // // // // //     if (!formData.email.trim()) {
// // // // // //       newErrors.email = "Email is required"
// // // // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // // // //       newErrors.email = "Email is invalid"
// // // // // //     }

// // // // // //     if (!formData.company.trim()) {
// // // // // //       newErrors.company = "Company is required"
// // // // // //     }

// // // // // //     if (!formData.phone.trim()) {
// // // // // //       newErrors.phone = "Phone is required"
// // // // // //     }

// // // // // //     setErrors(newErrors)
// // // // // //     return Object.keys(newErrors).length === 0
// // // // // //   }
// // // // // //   useEffect(() => {
// // // // // //     window.scrollTo(0, 0)
// // // // // //   }, [])


// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault()

// // // // // //     if (!validateForm()) {
// // // // // //       return
// // // // // //     }

// // // // // //     setLoading(true)

// // // // // //     try {
// // // // // //       const requestData = {
// // // // // //         ...formData,
// // // // // //         products: singleProductMode
// // // // // //           ? [
// // // // // //             {
// // // // // //               id: singleProduct.id,
// // // // // //               name: singleProduct.name,
// // // // // //               quantity: 1,
// // // // // //               price: singleProduct.price,
// // // // // //               category: singleProduct.categoryName || singleProduct.category,
// // // // // //             },
// // // // // //           ]
// // // // // //           : cart,
// // // // // //         totalAmount: singleProductMode ? singleProduct.price : cartTotal,
// // // // // //         status: "pending",
// // // // // //         date: new Date().toISOString(),
// // // // // //       }

// // // // // //       // In a real application, you would send this to your backend
// // // // // //       // await axios.post(`${process.env.REACT_APP_API_URL}/api/requests`, requestData);

// // // // // //       console.log("Submitting request:", requestData)

// // // // // //       // Clear cart if not in single product mode
// // // // // //       if (!singleProductMode) {
// // // // // //         clearCart()
// // // // // //       }

// // // // // //       // Navigate to success page
// // // // // //       navigate("/request-success")
// // // // // //     } catch (error) {
// // // // // //       console.error("Error submitting request:", error)
// // // // // //       setErrors({ submit: "Failed to submit request. Please try again." })
// // // // // //     } finally {
// // // // // //       setLoading(false)
// // // // // //     }
// // // // // //   }

// // // // // //   // Required field marker component
// // // // // //   const RequiredMark = () => (
// // // // // //     <span className="text-red-600 ml-1">*</span>
// // // // // //   )

// // // // // //   // If cart is empty and not in single product mode, show message
// // // // // //   if (!singleProductMode && (!cart || cart.length === 0)) {
// // // // // //     return (
// // // // // //       <div className="container mx-auto px-4 py-16 bg-gray-50">
// // // // // //         <div className="max-w-2xl mx-auto text-center">
// // // // // //           <h1 className="text-3xl font-bold text-red-700 mb-4">Request Quote</h1>
// // // // // //           <div className="bg-white border border-red-100 rounded-lg p-6 mb-6 shadow-md">
// // // // // //             <p className="text-gray-700">
// // // // // //               Your cart is empty. Please add products to your cart before requesting a quote.
// // // // // //             </p>
// // // // // //           </div>
// // // // // //           <button
// // // // // //             onClick={() => navigate("/products")}
// // // // // //             className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition duration-300"
// // // // // //           >
// // // // // //             Browse Products
// // // // // //           </button>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     )
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="bg-gray-50 min-h-screen p-36">
// // // // // //       <div className="container mx-auto px-4 py-8">
// // // // // //         <div className="max-w-4xl mx-auto">
// // // // // //           <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Request Quote</h1>

// // // // // //           <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
// // // // // //             <div className="p-6">
// // // // // //               <h2 className="text-xl font-semibold text-red-600 mb-4 border-b border-red-100 pb-2">Products in Your Request</h2>

// // // // // //               <div className="overflow-x-auto">
// // // // // //                 <table className="min-w-full divide-y divide-gray-200">
// // // // // //                   <thead className="bg-red-50">
// // // // // //                     <tr>
// // // // // //                       <th
// // // // // //                         scope="col"
// // // // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // // // //                       >
// // // // // //                         Product
// // // // // //                       </th>
// // // // // //                       <th
// // // // // //                         scope="col"
// // // // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // // // //                       >
// // // // // //                         Category
// // // // // //                       </th>
// // // // // //                       <th
// // // // // //                         scope="col"
// // // // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // // // //                       >
// // // // // //                         Quantity
// // // // // //                       </th>
// // // // // //                       <th
// // // // // //                         scope="col"
// // // // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // // // //                       >
// // // // // //                         Price
// // // // // //                       </th>
// // // // // //                     </tr>
// // // // // //                   </thead>
// // // // // //                   <tbody className="bg-white divide-y divide-gray-200">
// // // // // //                     {singleProductMode ? (
// // // // // //                       <tr>
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap">
// // // // // //                           <div className="flex items-center">
// // // // // //                             <div className="flex-shrink-0 h-10 w-10">
// // // // // //                               <img
// // // // // //                                 className="h-10 w-10 rounded-md object-cover"
// // // // // //                                 src={singleProduct.images?.[0] || singleProduct.image || "/placeholder.svg"}
// // // // // //                                 alt={singleProduct.name}
// // // // // //                               />
// // // // // //                             </div>
// // // // // //                             <div className="ml-4">
// // // // // //                               <div className="text-sm font-medium text-gray-900">{singleProduct.name}</div>
// // // // // //                             </div>
// // // // // //                           </div>
// // // // // //                         </td>
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // // //                           {singleProduct.categoryName || singleProduct.category}
// // // // // //                         </td>
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
// // // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // // // // //                           ${singleProduct.price.toFixed(2)}
// // // // // //                         </td>
// // // // // //                       </tr>
// // // // // //                     ) : (
// // // // // //                       cart && cart.map((item) => (
// // // // // //                         <tr key={item.id || item.model} className="hover:bg-red-50 transition-colors">
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // // //                             <div className="flex items-center">
// // // // // //                               <div className="flex-shrink-0 h-12 w-12 border border-gray-200 rounded-md overflow-hidden">
// // // // // //                                 <img
// // // // // //                                   className="h-full w-full object-cover"
// // // // // //                                   src={(item.images && item.images[0]) || item.image || "/placeholder.svg"}
// // // // // //                                   alt={item.name}
// // // // // //                                 />
// // // // // //                               </div>
// // // // // //                               <div className="ml-4">
// // // // // //                                 <div className="text-sm font-medium text-gray-900">{item.name}</div>
// // // // // //                               </div>
// // // // // //                             </div>
// // // // // //                           </td>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // // //                             {item.categoryName || item.category}
// // // // // //                           </td>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
// // // // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // // // // //                             ${((item.price || 0) * item.quantity).toFixed(2)}
// // // // // //                           </td>
// // // // // //                         </tr>
// // // // // //                       ))
// // // // // //                     )}
// // // // // //                   </tbody>
// // // // // //                   <tfoot className="bg-red-50">
// // // // // //                     <tr>
// // // // // //                       <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
// // // // // //                         Total:
// // // // // //                       </td>
// // // // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-700">
// // // // // //                         ${(singleProductMode ? singleProduct.price : cartTotal).toFixed(2)}
// // // // // //                       </td>
// // // // // //                     </tr>
// // // // // //                   </tfoot>
// // // // // //                 </table>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>

// // // // // //           <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
// // // // // //             <div className="p-6">
// // // // // //               <h2 className="text-xl font-semibold text-red-600 mb-6 border-b border-red-100 pb-2">Contact Information</h2>

// // // // // //               <form onSubmit={handleSubmit} className="space-y-6">
// // // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // // //                   <div>
// // // // // //                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //                       Full Name <RequiredMark />
// // // // // //                     </label>
// // // // // //                     <input
// // // // // //                       type="text"
// // // // // //                       id="name"
// // // // // //                       name="name"
// // // // // //                       value={formData.name}
// // // // // //                       onChange={handleChange}
// // // // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // // // //                         }`}
// // // // // //                       placeholder="Name"
// // // // // //                     />
// // // // // //                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// // // // // //                   </div>

// // // // // //                   <div>
// // // // // //                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //                       Email Address <RequiredMark />
// // // // // //                     </label>
// // // // // //                     <input
// // // // // //                       type="email"
// // // // // //                       id="email"
// // // // // //                       name="email"
// // // // // //                       value={formData.email}
// // // // // //                       onChange={handleChange}
// // // // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // // // //                         }`}
// // // // // //                       placeholder="email"
// // // // // //                     />
// // // // // //                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // // // // //                   </div>

// // // // // //                   <div>
// // // // // //                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //                       Company Name <RequiredMark />
// // // // // //                     </label>
// // // // // //                     <input
// // // // // //                       type="text"
// // // // // //                       id="company"
// // // // // //                       name="company"
// // // // // //                       value={formData.company}
// // // // // //                       onChange={handleChange}
// // // // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // // // //                         }`}
// // // // // //                       placeholder="Acme Inc."
// // // // // //                     />
// // // // // //                     {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
// // // // // //                   </div>

// // // // // //                   <div>
// // // // // //                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //                       Phone Number <RequiredMark />
// // // // // //                     </label>
// // // // // //                     <input
// // // // // //                       type="tel"
// // // // // //                       id="phone"
// // // // // //                       name="phone"
// // // // // //                       value={formData.phone}
// // // // // //                       onChange={handleChange}
// // // // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // // // //                         }`}
// // // // // //                       placeholder="(123) 456-7890"
// // // // // //                     />
// // // // // //                     {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// // // // // //                   </div>
// // // // // //                 </div>

// // // // // //                 <div>
// // // // // //                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// // // // // //                     Additional Information
// // // // // //                   </label>
// // // // // //                   <textarea
// // // // // //                     id="message"
// // // // // //                     name="message"
// // // // // //                     rows="4"
// // // // // //                     value={formData.message}
// // // // // //                     onChange={handleChange}
// // // // // //                     className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // // // //                       }`}
// // // // // //                     placeholder="Please include any specific requirements or questions about the products."
// // // // // //                   ></textarea>
// // // // // //                 </div>

// // // // // //                 {errors.submit && (
// // // // // //                   <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
// // // // // //                     <p>{errors.submit}</p>
// // // // // //                   </div>
// // // // // //                 )}

// // // // // //                 <div className="flex justify-center pt-4">
// // // // // //                   <button
// // // // // //                     type="submit"
// // // // // //                     disabled={loading}
// // // // // //                     className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center justify-center shadow-md w-full md:w-auto min-w-[200px]"
// // // // // //                   >
// // // // // //                     {loading ? (
// // // // // //                       <>
// // // // // //                         <svg
// // // // // //                           className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
// // // // // //                           xmlns="http://www.w3.org/2000/svg"
// // // // // //                           fill="none"
// // // // // //                           viewBox="0 0 24 24"
// // // // // //                         >
// // // // // //                           <circle
// // // // // //                             className="opacity-25"
// // // // // //                             cx="12"
// // // // // //                             cy="12"
// // // // // //                             r="10"
// // // // // //                             stroke="currentColor"
// // // // // //                             strokeWidth="4"
// // // // // //                           ></circle>
// // // // // //                           <path
// // // // // //                             className="opacity-75"
// // // // // //                             fill="currentColor"
// // // // // //                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // // // //                           ></path>
// // // // // //                         </svg>
// // // // // //                         Processing...
// // // // // //                       </>
// // // // // //                     ) : (
// // // // // //                       "Submit Request"
// // // // // //                     )}
// // // // // //                   </button>
// // // // // //                 </div>

// // // // // //                 <div className="text-center text-gray-500 text-sm">
// // // // // //                   <p>Fields marked with <span className="text-red-600">*</span> are required</p>
// // // // // //                 </div>
// // // // // //               </form>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default RequestPage



// // // // // "use client"

// // // // // import { useState, useEffect } from "react"
// // // // // import { useNavigate, useLocation } from "react-router-dom"
// // // // // import { useCart } from "../contexts/CartContext"
// // // // // import axios from "axios"

// // // // // const RequestPage = () => {
// // // // //   const { cart, calculateSubtotal, clearCart } = useCart()
// // // // //   const navigate = useNavigate()
// // // // //   const location = useLocation()
// // // // //   const [formData, setFormData] = useState({
// // // // //     name: "",
// // // // //     email: "",
// // // // //     company: "",
// // // // //     phone: "",
// // // // //     message: "",
// // // // //   })
// // // // //   const [errors, setErrors] = useState({})
// // // // //   const [loading, setLoading] = useState(false)
// // // // //   const [singleProductMode, setSingleProductMode] = useState(false)
// // // // //   const [singleProduct, setSingleProduct] = useState(null)

// // // // //   const cartTotal = calculateSubtotal()

// // // // //   useEffect(() => {
// // // // //     if (location.state?.product) {
// // // // //       setSingleProductMode(true)
// // // // //       setSingleProduct(location.state.product)
// // // // //     }
// // // // //   }, [location])

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target
// // // // //     setFormData((prev) => ({ ...prev, [name]: value }))
// // // // //     if (errors[name]) {
// // // // //       setErrors((prev) => ({ ...prev, [name]: "" }))
// // // // //     }
// // // // //   }

// // // // //   const validateForm = () => {
// // // // //     const newErrors = {}

// // // // //     if (!formData.name.trim()) newErrors.name = "Name is required"
// // // // //     if (!formData.email.trim()) {
// // // // //       newErrors.email = "Email is required"
// // // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // // //       newErrors.email = "Email is invalid"
// // // // //     }
// // // // //     if (!formData.company.trim()) newErrors.company = "Company is required"
// // // // //     if (!formData.phone.trim()) newErrors.phone = "Phone is required"

// // // // //     setErrors(newErrors)
// // // // //     return Object.keys(newErrors).length === 0
// // // // //   }

// // // // //   useEffect(() => {
// // // // //     window.scrollTo(0, 0)
// // // // //   }, [])

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault()

// // // // //     if (!validateForm()) return

// // // // //     setLoading(true)

// // // // //     try {
// // // // //       const requestData = {
// // // // //         ...formData,
// // // // //         products: singleProductMode
// // // // //           ? [
// // // // //             {
// // // // //               id: singleProduct.id,
// // // // //               name: singleProduct.name,
// // // // //               quantity: 1,
// // // // //               price: singleProduct.price,
// // // // //               category: singleProduct.categoryName || singleProduct.category,
// // // // //             },
// // // // //           ]
// // // // //           : cart,
// // // // //         totalAmount: singleProductMode ? singleProduct.price : cartTotal,
// // // // //       }

// // // // //       await axios.post(`${process.env.REACT_APP_API_URL}/requests`, requestData)

// // // // //       if (!singleProductMode) clearCart()
// // // // //       navigate("/request-success")
// // // // //     } catch (error) {
// // // // //       console.error("Error submitting request:", error)
// // // // //       setErrors({ submit: "Failed to submit request. Please try again." })
// // // // //     } finally {
// // // // //       setLoading(false)
// // // // //     }
// // // // //   }

// // // // //   const RequiredMark = () => <span className="text-red-600 ml-1">*</span>

// // // // //   if (!singleProductMode && (!cart || cart.length === 0)) {
// // // // //     return (
// // // // //       <div className="container mx-auto px-4 py-16 bg-gray-50">
// // // // //         <div className="max-w-2xl mx-auto text-center">
// // // // //           <h1 className="text-3xl font-bold text-red-700 mb-4">Request Quote</h1>
// // // // //           <div className="bg-white border border-red-100 rounded-lg p-6 mb-6 shadow-md">
// // // // //             <p className="text-gray-700">
// // // // //               Your cart is empty. Please add products to your cart before requesting a quote.
// // // // //             </p>
// // // // //           </div>
// // // // //           <button
// // // // //             onClick={() => navigate("/products")}
// // // // //             className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition duration-300"
// // // // //           >
// // // // //             Browse Products
// // // // //           </button>
// // // // //         </div>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   return (
// // // // //     <div className="bg-gray-50 min-h-screen p-36">
// // // // //       <div className="container mx-auto px-4 py-8">
// // // // //         <div className="max-w-4xl mx-auto">
// // // // //           <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Request Quote</h1>

// // // // //           <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
// // // // //             <div className="p-6">
// // // // //               <h2 className="text-xl font-semibold text-red-600 mb-4 border-b border-red-100 pb-2">Products in Your Request</h2>

// // // // //               <div className="overflow-x-auto">
// // // // //                 <table className="min-w-full divide-y divide-gray-200">
// // // // //                   <thead className="bg-red-50">
// // // // //                     <tr>
// // // // //                       <th
// // // // //                         scope="col"
// // // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // // //                       >
// // // // //                         Product
// // // // //                       </th>
// // // // //                       <th
// // // // //                         scope="col"
// // // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // // //                       >
// // // // //                         Category
// // // // //                       </th>
// // // // //                       <th
// // // // //                         scope="col"
// // // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // // //                       >
// // // // //                         Quantity
// // // // //                       </th>
// // // // //                       <th
// // // // //                         scope="col"
// // // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // // //                       >
// // // // //                         Price
// // // // //                       </th>
// // // // //                     </tr>
// // // // //                   </thead>
// // // // //                   <tbody className="bg-white divide-y divide-gray-200">
// // // // //                     {singleProductMode ? (
// // // // //                       <tr>
// // // // //                         <td className="px-6 py-4 whitespace-nowrap">
// // // // //                           <div className="flex items-center">
// // // // //                             <div className="flex-shrink-0 h-10 w-10">
// // // // //                               <img
// // // // //                                 className="h-10 w-10 rounded-md object-cover"
// // // // //                                 src={singleProduct.images?.[0] || singleProduct.image || "/placeholder.svg"}
// // // // //                                 alt={singleProduct.name}
// // // // //                               />
// // // // //                             </div>
// // // // //                             <div className="ml-4">
// // // // //                               <div className="text-sm font-medium text-gray-900">{singleProduct.name}</div>
// // // // //                             </div>
// // // // //                           </div>
// // // // //                         </td>
// // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // //                           {singleProduct.categoryName || singleProduct.category}
// // // // //                         </td>
// // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
// // // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // // // //                           ${singleProduct.price.toFixed(2)}
// // // // //                         </td>
// // // // //                       </tr>
// // // // //                     ) : (
// // // // //                       cart && cart.map((item) => (
// // // // //                         <tr key={item.id || item.model} className="hover:bg-red-50 transition-colors">
// // // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // // //                             <div className="flex items-center">
// // // // //                               <div className="flex-shrink-0 h-12 w-12 border border-gray-200 rounded-md overflow-hidden">
// // // // //                                 <img
// // // // //                                   className="h-full w-full object-cover"
// // // // //                                   src={(item.images && item.images[0]) || item.image || "/placeholder.svg"}
// // // // //                                   alt={item.name}
// // // // //                                 />
// // // // //                               </div>
// // // // //                               <div className="ml-4">
// // // // //                                 <div className="text-sm font-medium text-gray-900">{item.name}</div>
// // // // //                               </div>
// // // // //                             </div>
// // // // //                           </td>
// // // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // // //                             {item.categoryName || item.category}
// // // // //                           </td>
// // // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
// // // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // // // //                             ${((item.price || 0) * item.quantity).toFixed(2)}
// // // // //                           </td>
// // // // //                         </tr>
// // // // //                       ))
// // // // //                     )}
// // // // //                   </tbody>
// // // // //                   <tfoot className="bg-red-50">
// // // // //                     <tr>
// // // // //                       <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
// // // // //                         Total:
// // // // //                       </td>
// // // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-700">
// // // // //                         ${(singleProductMode ? singleProduct.price : cartTotal).toFixed(2)}
// // // // //                       </td>
// // // // //                     </tr>
// // // // //                   </tfoot>
// // // // //                 </table>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
// // // // //             <div className="p-6">
// // // // //               <h2 className="text-xl font-semibold text-red-600 mb-6 border-b border-red-100 pb-2">Contact Information</h2>

// // // // //               <form onSubmit={handleSubmit} className="space-y-6">
// // // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // // //                   <div>
// // // // //                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// // // // //                       Full Name <RequiredMark />
// // // // //                     </label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       id="name"
// // // // //                       name="name"
// // // // //                       value={formData.name}
// // // // //                       onChange={handleChange}
// // // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // // //                         }`}
// // // // //                       placeholder="Name"
// // // // //                     />
// // // // //                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// // // // //                   </div>

// // // // //                   <div>
// // // // //                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// // // // //                       Email Address <RequiredMark />
// // // // //                     </label>
// // // // //                     <input
// // // // //                       type="email"
// // // // //                       id="email"
// // // // //                       name="email"
// // // // //                       value={formData.email}
// // // // //                       onChange={handleChange}
// // // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // // //                         }`}
// // // // //                       placeholder="email"
// // // // //                     />
// // // // //                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // // // //                   </div>

// // // // //                   <div>
// // // // //                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
// // // // //                       Company Name <RequiredMark />
// // // // //                     </label>
// // // // //                     <input
// // // // //                       type="text"
// // // // //                       id="company"
// // // // //                       name="company"
// // // // //                       value={formData.company}
// // // // //                       onChange={handleChange}
// // // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // // //                         }`}
// // // // //                       placeholder="Acme Inc."
// // // // //                     />
// // // // //                     {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
// // // // //                   </div>

// // // // //                   <div>
// // // // //                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// // // // //                       Phone Number <RequiredMark />
// // // // //                     </label>
// // // // //                     <input
// // // // //                       type="tel"
// // // // //                       id="phone"
// // // // //                       name="phone"
// // // // //                       value={formData.phone}
// // // // //                       onChange={handleChange}
// // // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // // //                         }`}
// // // // //                       placeholder="(123) 456-7890"
// // // // //                     />
// // // // //                     {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 <div>
// // // // //                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// // // // //                     Additional Information
// // // // //                   </label>
// // // // //                   <textarea
// // // // //                     id="message"
// // // // //                     name="message"
// // // // //                     rows="4"
// // // // //                     value={formData.message}
// // // // //                     onChange={handleChange}
// // // // //                     className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // // //                       }`}
// // // // //                     placeholder="Please include any specific requirements or questions about the products."
// // // // //                   ></textarea>
// // // // //                 </div>

// // // // //                 {errors.submit && (
// // // // //                   <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
// // // // //                     <p>{errors.submit}</p>
// // // // //                   </div>
// // // // //                 )}

// // // // //                 <div className="flex justify-center pt-4">
// // // // //                   <button
// // // // //                     type="submit"
// // // // //                     disabled={loading}
// // // // //                     className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center justify-center shadow-md w-full md:w-auto min-w-[200px]"
// // // // //                   >
// // // // //                     {loading ? (
// // // // //                       <>
// // // // //                         <svg
// // // // //                           className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
// // // // //                           xmlns="http://www.w3.org/2000/svg"
// // // // //                           fill="none"
// // // // //                           viewBox="0 0 24 24"
// // // // //                         >
// // // // //                           <circle
// // // // //                             className="opacity-25"
// // // // //                             cx="12"
// // // // //                             cy="12"
// // // // //                             r="10"
// // // // //                             stroke="currentColor"
// // // // //                             strokeWidth="4"
// // // // //                           ></circle>
// // // // //                           <path
// // // // //                             className="opacity-75"
// // // // //                             fill="currentColor"
// // // // //                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // // //                           ></path>
// // // // //                         </svg>
// // // // //                         Processing...
// // // // //                       </>
// // // // //                     ) : (
// // // // //                       "Submit Request"
// // // // //                     )}
// // // // //                   </button>
// // // // //                 </div>

// // // // //                 <div className="text-center text-gray-500 text-sm">
// // // // //                   <p>Fields marked with <span className="text-red-600">*</span> are required</p>
// // // // //                 </div>
// // // // //               </form>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default RequestPage


// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import { useNavigate, useLocation } from "react-router-dom"
// // // import { useCart } from "../contexts/CartContext"
// // // import axios from "axios"

// // // const RequestPage = () => {
// // //   const { cart, calculateSubtotal, clearCart } = useCart()
// // //   const navigate = useNavigate()
// // //   const location = useLocation()
// // //   const [formData, setFormData] = useState({
// // //     name: "",
// // //     email: "",
// // //     company: "",
// // //     phone: "",
// // //     message: "",
// // //   })
// // //   const [errors, setErrors] = useState({})
// // //   const [loading, setLoading] = useState(false)
// // //   const [singleProductMode, setSingleProductMode] = useState(false)
// // //   const [singleProduct, setSingleProduct] = useState(null)

// // //   const cartTotal = calculateSubtotal()

// // //   useEffect(() => {
// // //     if (location.state?.product) {
// // //       setSingleProductMode(true)
// // //       setSingleProduct(location.state.product)
// // //     }
// // //   }, [location])

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target
// // //     setFormData((prev) => ({ ...prev, [name]: value }))
// // //     if (errors[name]) {
// // //       setErrors((prev) => ({ ...prev, [name]: "" }))
// // //     }
// // //   }

// // //   const validateForm = () => {
// // //     const newErrors = {}

// // //     if (!formData.name.trim()) newErrors.name = "Name is required"
// // //     if (!formData.email.trim()) {
// // //       newErrors.email = "Email is required"
// // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // //       newErrors.email = "Email is invalid"
// // //     }
// // //     if (!formData.company.trim()) newErrors.company = "Company is required"
// // //     if (!formData.phone.trim()) newErrors.phone = "Phone is required"

// // //     setErrors(newErrors)
// // //     return Object.keys(newErrors).length === 0
// // //   }

// // //   useEffect(() => {
// // //     window.scrollTo(0, 0)
// // //   }, [])

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault()

// // //     if (!validateForm()) return

// // //     setLoading(true)

// // //     try {
// // //       const requestData = {
// // //         ...formData,
// // //         products: singleProductMode
// // //           ? [
// // //             {
// // //               id: singleProduct.id,
// // //               name: singleProduct.name,
// // //               quantity: 1,
// // //               price: singleProduct.price,
// // //               category: singleProduct.categoryName || singleProduct.category,
// // //               image: singleProduct.images?.[0] || singleProduct.image || "", // Include the image
// // //             },
// // //           ]
// // //           : cart.map((item) => ({
// // //             id: item.id,
// // //             name: item.name,
// // //             quantity: item.quantity,
// // //             price: item.price,
// // //             category: item.categoryName || item.category,
// // //             image: item.images?.[0] || item.image || "", // Include the image
// // //           })),
// // //         totalAmount: singleProductMode ? singleProduct.price : cartTotal,
// // //       }

// // //       await axios.post(`${process.env.REACT_APP_API_URL}/requests`, requestData)

// // //       if (!singleProductMode) clearCart()
// // //       navigate("/request-success")
// // //     } catch (error) {
// // //       console.error("Error submitting request:", error)
// // //       setErrors({ submit: "Failed to submit request. Please try again." })
// // //     } finally {
// // //       setLoading(false)
// // //     }
// // //   }

// // //   const RequiredMark = () => <span className="text-red-600 ml-1">*</span>

// // //   if (!singleProductMode && (!cart || cart.length === 0)) {
// // //     return (
// // //       <div className="container mx-auto px-4 py-16 bg-gray-50">
// // //         <div className="max-w-2xl mx-auto text-center">
// // //           <h1 className="text-3xl font-bold text-red-700 mb-4">Request Quote</h1>
// // //           <div className="bg-white border border-red-100 rounded-lg p-6 mb-6 shadow-md">
// // //             <p className="text-gray-700">
// // //               Your cart is empty. Please add products to your cart before requesting a quote.
// // //             </p>
// // //           </div>
// // //           <button
// // //             onClick={() => navigate("/products")}
// // //             className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition duration-300"
// // //           >
// // //             Browse Products
// // //           </button>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <div className="bg-gray-50 min-h-screen p-36">
// // //       <div className="container mx-auto px-4 py-8">
// // //         <div className="max-w-4xl mx-auto">
// // //           <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Request Quote</h1>

// // //           <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
// // //             <div className="p-6">
// // //               <h2 className="text-xl font-semibold text-red-600 mb-4 border-b border-red-100 pb-2">Products in Your Request</h2>

// // //               <div className="overflow-x-auto">
// // //                 <table className="min-w-full divide-y divide-gray-200">
// // //                   <thead className="bg-red-50">
// // //                     <tr>
// // //                       <th
// // //                         scope="col"
// // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // //                       >
// // //                         Product
// // //                       </th>
// // //                       <th
// // //                         scope="col"
// // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // //                       >
// // //                         Category
// // //                       </th>
// // //                       <th
// // //                         scope="col"
// // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // //                       >
// // //                         Quantity
// // //                       </th>
// // //                       <th
// // //                         scope="col"
// // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // //                       >
// // //                         Price
// // //                       </th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody className="bg-white divide-y divide-gray-200">
// // //                     {singleProductMode ? (
// // //                       <tr>
// // //                         <td className="px-6 py-4 whitespace-nowrap">
// // //                           <div className="flex items-center">
// // //                             <div className="flex-shrink-0 h-10 w-10">
// // //                               <img
// // //                                 className="h-10 w-10 rounded-md object-cover"
// // //                                 src={singleProduct.images?.[0] || singleProduct.image || "/placeholder.svg"}
// // //                                 alt={singleProduct.name}
// // //                               />
// // //                             </div>
// // //                             <div className="ml-4">
// // //                               <div className="text-sm font-medium text-gray-900">{singleProduct.name}</div>
// // //                             </div>
// // //                           </div>
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // //                           {singleProduct.categoryName || singleProduct.category}
// // //                         </td>
// // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
// // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // //                           ${singleProduct.price.toFixed(2)}
// // //                         </td>
// // //                       </tr>
// // //                     ) : (
// // //                       cart && cart.map((item) => (
// // //                         <tr key={item.id || item.model} className="hover:bg-red-50 transition-colors">
// // //                           <td className="px-6 py-4 whitespace-nowrap">
// // //                             <div className="flex items-center">
// // //                               <div className="flex-shrink-0 h-12 w-12 border border-gray-200 rounded-md overflow-hidden">
// // //                                 <img
// // //                                   className="h-full w-full object-cover"
// // //                                   src={(item.images && item.images[0]) || item.image || "/placeholder.svg"}
// // //                                   alt={item.name}
// // //                                 />
// // //                               </div>
// // //                               <div className="ml-4">
// // //                                 <div className="text-sm font-medium text-gray-900">{item.name}</div>
// // //                               </div>
// // //                             </div>
// // //                           </td>
// // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // //                             {item.categoryName || item.category}
// // //                           </td>
// // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
// // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // //                             ${((item.price || 0) * item.quantity).toFixed(2)}
// // //                           </td>
// // //                         </tr>
// // //                       ))
// // //                     )}
// // //                   </tbody>
// // //                   <tfoot className="bg-red-50">
// // //                     <tr>
// // //                       <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
// // //                         Total:
// // //                       </td>
// // //                       <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-700">
// // //                         ${(singleProductMode ? singleProduct.price : cartTotal).toFixed(2)}
// // //                       </td>
// // //                     </tr>
// // //                   </tfoot>
// // //                 </table>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
// // //             <div className="p-6">
// // //               <h2 className="text-xl font-semibold text-red-600 mb-6 border-b border-red-100 pb-2">Contact Information</h2>

// // //               <form onSubmit={handleSubmit} className="space-y-6">
// // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //                   <div>
// // //                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Full Name <RequiredMark />
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       id="name"
// // //                       name="name"
// // //                       value={formData.name}
// // //                       onChange={handleChange}
// // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // //                         }`}
// // //                       placeholder="Name"
// // //                     />
// // //                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Email Address <RequiredMark />
// // //                     </label>
// // //                     <input
// // //                       type="email"
// // //                       id="email"
// // //                       name="email"
// // //                       value={formData.email}
// // //                       onChange={handleChange}
// // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // //                         }`}
// // //                       placeholder="email"
// // //                     />
// // //                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Company Name <RequiredMark />
// // //                     </label>
// // //                     <input
// // //                       type="text"
// // //                       id="company"
// // //                       name="company"
// // //                       value={formData.company}
// // //                       onChange={handleChange}
// // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // //                         }`}
// // //                       placeholder="Acme Inc."
// // //                     />
// // //                     {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
// // //                   </div>

// // //                   <div>
// // //                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// // //                       Phone Number <RequiredMark />
// // //                     </label>
// // //                     <input
// // //                       type="tel"
// // //                       id="phone"
// // //                       name="phone"
// // //                       value={formData.phone}
// // //                       onChange={handleChange}
// // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // //                         }`}
// // //                       placeholder="(123) 456-7890"
// // //                     />
// // //                     {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// // //                   </div>
// // //                 </div>

// // //                 <div>
// // //                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// // //                     Additional Information
// // //                   </label>
// // //                   <textarea
// // //                     id="message"
// // //                     name="message"
// // //                     rows="4"
// // //                     value={formData.message}
// // //                     onChange={handleChange}
// // //                     className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // //                       }`}
// // //                     placeholder="Please include any specific requirements or questions about the products."
// // //                   ></textarea>
// // //                 </div>

// // //                 {errors.submit && (
// // //                   <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
// // //                     <p>{errors.submit}</p>
// // //                   </div>
// // //                 )}

// // //                 <div className="flex justify-center pt-4">
// // //                   <button
// // //                     type="submit"
// // //                     disabled={loading}
// // //                     className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center justify-center shadow-md w-full md:w-auto min-w-[200px]"
// // //                   >
// // //                     {loading ? (
// // //                       <>
// // //                         <svg
// // //                           className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
// // //                           xmlns="http://www.w3.org/2000/svg"
// // //                           fill="none"
// // //                           viewBox="0 0 24 24"
// // //                         >
// // //                           <circle
// // //                             className="opacity-25"
// // //                             cx="12"
// // //                             cy="12"
// // //                             r="10"
// // //                             stroke="currentColor"
// // //                             strokeWidth="4"
// // //                           ></circle>
// // //                           <path
// // //                             className="opacity-75"
// // //                             fill="currentColor"
// // //                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // //                           ></path>
// // //                         </svg>
// // //                         Processing...
// // //                       </>
// // //                     ) : (
// // //                       "Submit Request"
// // //                     )}
// // //                   </button>
// // //                 </div>

// // //                 <div className="text-center text-gray-500 text-sm">
// // //                   <p>Fields marked with <span className="text-red-600">*</span> are required</p>
// // //                 </div>
// // //               </form>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default RequestPage


// // // // "use client"

// // // // import { useState, useEffect } from "react"
// // // // import { useNavigate, useLocation } from "react-router-dom"
// // // // import { useCart } from "../contexts/CartContext"
// // // // import axios from "axios"

// // // // const RequestPage = () => {
// // // //   const { cart, calculateSubtotal, clearCart } = useCart()
// // // //   const navigate = useNavigate()
// // // //   const location = useLocation()
// // // //   const [formData, setFormData] = useState({
// // // //     name: "",
// // // //     email: "",
// // // //     company: "",
// // // //     phone: "",
// // // //     message: "",
// // // //   })
// // // //   const [errors, setErrors] = useState({})
// // // //   const [loading, setLoading] = useState(false)
// // // //   const [singleProductMode, setSingleProductMode] = useState(false)
// // // //   const [singleProduct, setSingleProduct] = useState(null)

// // // //   const cartTotal = calculateSubtotal()

// // // //   useEffect(() => {
// // // //     if (location.state?.product) {
// // // //       setSingleProductMode(true)
// // // //       setSingleProduct(location.state.product)
// // // //     }
// // // //   }, [location])

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target
// // // //     setFormData((prev) => ({ ...prev, [name]: value }))
// // // //     if (errors[name]) {
// // // //       setErrors((prev) => ({ ...prev, [name]: "" }))
// // // //     }
// // // //   }

// // // //   const validateForm = () => {
// // // //     const newErrors = {}

// // // //     if (!formData.name.trim()) newErrors.name = "Name is required"
// // // //     if (!formData.email.trim()) {
// // // //       newErrors.email = "Email is required"
// // // //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// // // //       newErrors.email = "Email is invalid"
// // // //     }
// // // //     if (!formData.company.trim()) newErrors.company = "Company is required"
// // // //     if (!formData.phone.trim()) newErrors.phone = "Phone is required"

// // // //     setErrors(newErrors)
// // // //     return Object.keys(newErrors).length === 0
// // // //   }

// // // //   useEffect(() => {
// // // //     window.scrollTo(0, 0)
// // // //   }, [])

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault()

// // // //     if (!validateForm()) return

// // // //     setLoading(true)

// // // //     try {
// // // //       const requestData = {
// // // //         ...formData,
// // // //         products: singleProductMode
// // // //           ? [
// // // //             {
// // // //               id: singleProduct.id,
// // // //               name: singleProduct.name,
// // // //               quantity: 1,
// // // //               price: singleProduct.price,
// // // //               category: singleProduct.categoryName || singleProduct.category,
// // // //               image: singleProduct.images?.[0] || singleProduct.image || "", // Include the image
// // // //             },
// // // //           ]
// // // //           : cart.map((item) => ({
// // // //             id: item.id,
// // // //             name: item.name,
// // // //             quantity: item.quantity,
// // // //             price: item.price,
// // // //             category: item.categoryName || item.category,
// // // //             image: item.images?.[0] || item.image || "", // Include the image
// // // //           })),
// // // //         totalAmount: singleProductMode ? singleProduct.price : cartTotal,
// // // //       }

// // // //       await axios.post(`${process.env.REACT_APP_API_URL}/requests`, requestData)

// // // //       if (!singleProductMode) clearCart()
// // // //       navigate("/request-success")
// // // //     } catch (error) {
// // // //       console.error("Error submitting request:", error)
// // // //       setErrors({ submit: "Failed to submit request. Please try again." })
// // // //     } finally {
// // // //       setLoading(false)
// // // //     }
// // // //   }

// // // //   const RequiredMark = () => <span className="text-red-600 ml-1">*</span>

// // // //   if (!singleProductMode && (!cart || cart.length === 0)) {
// // // //     return (
// // // //       <div className="container mx-auto px-4 py-16 bg-gray-50">
// // // //         <div className="max-w-2xl mx-auto text-center">
// // // //           <h1 className="text-3xl font-bold text-red-700 mb-4">Request Quote</h1>
// // // //           <div className="bg-white border border-red-100 rounded-lg p-6 mb-6 shadow-md">
// // // //             <p className="text-gray-700">
// // // //               Your cart is empty. Please add products to your cart before requesting a quote.
// // // //             </p>
// // // //           </div>
// // // //           <button
// // // //             onClick={() => navigate("/products")}
// // // //             className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition duration-300"
// // // //           >
// // // //             Browse Products
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   return (
// // // //     <div className="bg-gray-50 min-h-screen p-36">
// // // //       <div className="container mx-auto px-4 py-8">
// // // //         <div className="max-w-4xl mx-auto">
// // // //           <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Request Quote</h1>

// // // //           <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
// // // //             <div className="p-6">
// // // //               <h2 className="text-xl font-semibold text-red-600 mb-4 border-b border-red-100 pb-2">Products in Your Request</h2>

// // // //               <div className="overflow-x-auto">
// // // //                 <table className="min-w-full divide-y divide-gray-200">
// // // //                   <thead className="bg-red-50">
// // // //                     <tr>
// // // //                       <th
// // // //                         scope="col"
// // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // //                       >
// // // //                         Product
// // // //                       </th>
// // // //                       <th
// // // //                         scope="col"
// // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // //                       >
// // // //                         Category
// // // //                       </th>
// // // //                       <th
// // // //                         scope="col"
// // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // //                       >
// // // //                         Quantity
// // // //                       </th>
// // // //                       <th
// // // //                         scope="col"
// // // //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// // // //                       >
// // // //                         Price
// // // //                       </th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody className="bg-white divide-y divide-gray-200">
// // // //                     {singleProductMode ? (
// // // //                       <tr>
// // // //                         <td className="px-6 py-4 whitespace-nowrap">
// // // //                           <div className="flex items-center">
// // // //                             <div className="flex-shrink-0 h-10 w-10">
// // // //                               <img
// // // //                                 className="h-10 w-10 rounded-md object-cover"
// // // //                                 src={singleProduct.images?.[0] || singleProduct.image || "/placeholder.svg"}
// // // //                                 alt={singleProduct.name}
// // // //                               />
// // // //                             </div>
// // // //                             <div className="ml-4">
// // // //                               <div className="text-sm font-medium text-gray-900">{singleProduct.name}</div>
// // // //                             </div>
// // // //                           </div>
// // // //                         </td>
// // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // //                           {singleProduct.categoryName || singleProduct.category}
// // // //                         </td>
// // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
// // // //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // // //                           ${singleProduct.price.toFixed(2)}
// // // //                         </td>
// // // //                       </tr>
// // // //                     ) : (
// // // //                       cart && cart.map((item) => (
// // // //                         <tr key={item.id || item.model} className="hover:bg-red-50 transition-colors">
// // // //                           <td className="px-6 py-4 whitespace-nowrap">
// // // //                             <div className="flex items-center">
// // // //                               <div className="flex-shrink-0 h-12 w-12 border border-gray-200 rounded-md overflow-hidden">
// // // //                                 <img
// // // //                                   className="h-full w-full object-cover"
// // // //                                   src={(item.images && item.images[0]) || item.image || "/placeholder.svg"}
// // // //                                   alt={item.name}
// // // //                                 />
// // // //                               </div>
// // // //                               <div className="ml-4">
// // // //                                 <div className="text-sm font-medium text-gray-900">{item.name}</div>
// // // //                               </div>
// // // //                             </div>
// // // //                           </td>
// // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// // // //                             {item.categoryName || item.category}
// // // //                           </td>
// // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
// // // //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// // // //                             ${((item.price || 0) * item.quantity).toFixed(2)}
// // // //                           </td>
// // // //                         </tr>
// // // //                       ))
// // // //                     )}
// // // //                   </tbody>
// // // //                   <tfoot className="bg-red-50">
// // // //                     <tr>
// // // //                       <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
// // // //                         Total:
// // // //                       </td>
// // // //                       <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-700">
// // // //                         ${(singleProductMode ? singleProduct.price : cartTotal).toFixed(2)}
// // // //                       </td>
// // // //                     </tr>
// // // //                   </tfoot>
// // // //                 </table>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
// // // //             <div className="p-6">
// // // //               <h2 className="text-xl font-semibold text-red-600 mb-6 border-b border-red-100 pb-2">Contact Information</h2>

// // // //               <form onSubmit={handleSubmit} className="space-y-6">
// // // //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //                   <div>
// // // //                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// // // //                       Full Name <RequiredMark />
// // // //                     </label>
// // // //                     <input
// // // //                       type="text"
// // // //                       id="name"
// // // //                       name="name"
// // // //                       value={formData.name}
// // // //                       onChange={handleChange}
// // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // //                         }`}
// // // //                       placeholder="Name"
// // // //                     />
// // // //                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// // // //                   </div>

// // // //                   <div>
// // // //                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// // // //                       Email Address <RequiredMark />
// // // //                     </label>
// // // //                     <input
// // // //                       type="email"
// // // //                       id="email"
// // // //                       name="email"
// // // //                       value={formData.email}
// // // //                       onChange={handleChange}
// // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // //                         }`}
// // // //                       placeholder="email"
// // // //                     />
// // // //                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// // // //                   </div>

// // // //                   <div>
// // // //                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
// // // //                       Company Name <RequiredMark />
// // // //                     </label>
// // // //                     <input
// // // //                       type="text"
// // // //                       id="company"
// // // //                       name="company"
// // // //                       value={formData.company}
// // // //                       onChange={handleChange}
// // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // //                         }`}
// // // //                       placeholder="Acme Inc."
// // // //                     />
// // // //                     {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
// // // //                   </div>

// // // //                   <div>
// // // //                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// // // //                       Phone Number <RequiredMark />
// // // //                     </label>
// // // //                     <input
// // // //                       type="tel"
// // // //                       id="phone"
// // // //                       name="phone"
// // // //                       value={formData.phone}
// // // //                       onChange={handleChange}
// // // //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // //                         }`}
// // // //                       placeholder="(123) 456-7890"
// // // //                     />
// // // //                     {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// // // //                   </div>
// // // //                 </div>

// // // //                 <div>
// // // //                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// // // //                     Additional Information
// // // //                   </label>
// // // //                   <textarea
// // // //                     id="message"
// // // //                     name="message"
// // // //                     rows="4"
// // // //                     value={formData.message}
// // // //                     onChange={handleChange}
// // // //                     className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
// // // //                       }`}
// // // //                     placeholder="Please include any specific requirements or questions about the products."
// // // //                   ></textarea>
// // // //                 </div>

// // // //                 {errors.submit && (
// // // //                   <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
// // // //                     <p>{errors.submit}</p>
// // // //                   </div>
// // // //                 )}

// // // //                 <div className="flex justify-center pt-4">
// // // //                   <button
// // // //                     type="submit"
// // // //                     disabled={loading}
// // // //                     className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center justify-center shadow-md w-full md:w-auto min-w-[200px]"
// // // //                   >
// // // //                     {loading ? (
// // // //                       <>
// // // //                         <svg
// // // //                           className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
// // // //                           xmlns="http://www.w3.org/2000/svg"
// // // //                           fill="none"
// // // //                           viewBox="0 0 24 24"
// // // //                         >
// // // //                           <circle
// // // //                             className="opacity-25"
// // // //                             cx="12"
// // // //                             cy="12"
// // // //                             r="10"
// // // //                             stroke="currentColor"
// // // //                             strokeWidth="4"
// // // //                           ></circle>
// // // //                           <path
// // // //                             className="opacity-75"
// // // //                             fill="currentColor"
// // // //                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// // // //                           ></path>
// // // //                         </svg>
// // // //                         Processing...
// // // //                       </>
// // // //                     ) : (
// // // //                       "Submit Request"
// // // //                     )}
// // // //                   </button>
// // // //                 </div>

// // // //                 <div className="text-center text-gray-500 text-sm">
// // // //                   <p>Fields marked with <span className="text-red-600">*</span> are required</p>
// // // //                 </div>
// // // //               </form>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default RequestPage

// // "use client"

// // import { useState, useEffect, useRef } from "react"
// // import { useNavigate, useLocation } from "react-router-dom"
// // import { useCart } from "../contexts/CartContext"
// // import axios from "axios"
// // import emailjs from '@emailjs/browser'

// // const RequestPage = () => {
// //   const { cart, calculateSubtotal, clearCart } = useCart()
// //   const navigate = useNavigate()
// //   const location = useLocation()
// //   const formRef = useRef() // Add ref for EmailJS form
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     company: "",
// //     phone: "",
// //     message: "",
// //   })
// //   const [errors, setErrors] = useState({})
// //   const [loading, setLoading] = useState(false)
// //   const [singleProductMode, setSingleProductMode] = useState(false)
// //   const [singleProduct, setSingleProduct] = useState(null)

// //   const cartTotal = calculateSubtotal()

// //   useEffect(() => {
// //     if (location.state?.product) {
// //       setSingleProductMode(true)
// //       setSingleProduct(location.state.product)
// //     }
// //   }, [location])

// //   const handleChange = (e) => {
// //     const { name, value } = e.target
// //     setFormData((prev) => ({ ...prev, [name]: value }))
// //     if (errors[name]) {
// //       setErrors((prev) => ({ ...prev, [name]: "" }))
// //     }
// //   }

// //   const validateForm = () => {
// //     const newErrors = {}

// //     if (!formData.name.trim()) newErrors.name = "Name is required"
// //     if (!formData.email.trim()) {
// //       newErrors.email = "Email is required"
// //     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //       newErrors.email = "Email is invalid"
// //     }
// //     if (!formData.company.trim()) newErrors.company = "Company is required"
// //     if (!formData.phone.trim()) newErrors.phone = "Phone is required"

// //     setErrors(newErrors)
// //     return Object.keys(newErrors).length === 0
// //   }

// //   useEffect(() => {
// //     window.scrollTo(0, 0)
// //   }, [])

// //   const handleSubmit = async (e) => {
// //     e.preventDefault()

// //     if (!validateForm()) return

// //     setLoading(true)

// //     try {
// //       // Prepare the request data for the API
// //       const requestData = {
// //         ...formData,
// //         products: singleProductMode
// //           ? [
// //             {
// //               id: singleProduct.id,
// //               name: singleProduct.name,
// //               quantity: 1,
// //               price: singleProduct.price,
// //               category: singleProduct.categoryName || singleProduct.category,
// //               image: singleProduct.images?.[0] || singleProduct.image || "",
// //             },
// //           ]
// //           : cart.map((item) => ({
// //             id: item.id,
// //             name: item.name,
// //             quantity: item.quantity,
// //             price: item.price,
// //             category: item.categoryName || item.category,
// //             image: item.images?.[0] || item.image || "",
// //           })),
// //         totalAmount: singleProductMode ? singleProduct.price : cartTotal,
// //       }

// //       // Send email using EmailJS
// //       const emailData = {
// //         name: formData.name,
// //         email: formData.email,
// //         company: formData.company,
// //         phone: formData.phone,
// //         message: formData.message,
// //         products: requestData.products.map(p => ({
// //           name: p.name,
// //           category: p.category,
// //           quantity: p.quantity,
// //           price: p.price,
// //         })), // Format products for EmailJS template
// //         totalAmount: requestData.totalAmount,
// //       }

// //       await emailjs.send(
// //         'service_jzabqel', // Service ID
// //         'template_21hkuep', // Template ID
// //         emailData,
// //         'xV5ImFLhCL8Hri6ps' // Public Key
// //       )

// //       // Save the request to your backend
// //       await axios.post(`${process.env.REACT_APP_API_URL}/requests`, requestData)

// //       if (!singleProductMode) clearCart()
// //       navigate("/request-success")
// //     } catch (error) {
// //       console.error("Error submitting request:", error)
// //       setErrors({ submit: "Failed to submit request. Please try again." })
// //     } finally {
// //       setLoading(false)
// //     }
// //   }

// //   const RequiredMark = () => <span className="text-red-600 ml-1">*</span>

// //   if (!singleProductMode && (!cart || cart.length === 0)) {
// //     return (
// //       <div className="container mx-auto px-4 py-16 bg-gray-50">
// //         <div className="max-w-2xl mx-auto text-center">
// //           <h1 className="text-3xl font-bold text-red-700 mb-4">Request Quote</h1>
// //           <div className="bg-white border border-red-100 rounded-lg p-6 mb-6 shadow-md">
// //             <p className="text-gray-700">
// //               Your cart is empty. Please add products to your cart before requesting a quote.
// //             </p>
// //           </div>
// //           <button
// //             onClick={() => navigate("/products")}
// //             className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition duration-300"
// //           >
// //             Browse Products
// //           </button>
// //         </div>
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="bg-gray-50 min-h-screen p-36">
// //       <div className="container mx-auto px-4 py-8">
// //         <div className="max-w-4xl mx-auto">
// //           <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Request Quote</h1>

// //           <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
// //             <div className="p-6">
// //               <h2 className="text-xl font-semibold text-red-600 mb-4 border-b border-red-100 pb-2">Products in Your Request</h2>

// //               <div className="overflow-x-auto">
// //                 <table className="min-w-full divide-y divide-gray-200">
// //                   <thead className="bg-red-50">
// //                     <tr>
// //                       <th
// //                         scope="col"
// //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// //                       >
// //                         Product
// //                       </th>
// //                       <th
// //                         scope="col"
// //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// //                       >
// //                         Category
// //                       </th>
// //                       <th
// //                         scope="col"
// //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// //                       >
// //                         Quantity
// //                       </th>
// //                       <th
// //                         scope="col"
// //                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
// //                       >
// //                         Price
// //                       </th>
// //                     </tr>
// //                   </thead>
// //                   <tbody className="bg-white divide-y divide-gray-200">
// //                     {singleProductMode ? (
// //                       <tr>
// //                         <td className="px-6 py-4 whitespace-nowrap">
// //                           <div className="flex items-center">
// //                             <div className="flex-shrink-0 h-10 w-10">
// //                               <img
// //                                 className="h-10 w-10 rounded-md object-cover"
// //                                 src={singleProduct.images?.[0] || singleProduct.image || "/placeholder.svg"}
// //                                 alt={singleProduct.name}
// //                               />
// //                             </div>
// //                             <div className="ml-4">
// //                               <div className="text-sm font-medium text-gray-900">{singleProduct.name}</div>
// //                             </div>
// //                           </div>
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                           {singleProduct.categoryName || singleProduct.category}
// //                         </td>
// //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
// //                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// //                           ${singleProduct.price.toFixed(2)}
// //                         </td>
// //                       </tr>
// //                     ) : (
// //                       cart && cart.map((item) => (
// //                         <tr key={item.id || item.model} className="hover:bg-red-50 transition-colors">
// //                           <td className="px-6 py-4 whitespace-nowrap">
// //                             <div className="flex items-center">
// //                               <div className="flex-shrink-0 h-12 w-12 border border-gray-200 rounded-md overflow-hidden">
// //                                 <img
// //                                   className="h-full w-full object-cover"
// //                                   src={(item.images && item.images[0]) || item.image || "/placeholder.svg"}
// //                                   alt={item.name}
// //                                 />
// //                               </div>
// //                               <div className="ml-4">
// //                                 <div className="text-sm font-medium text-gray-900">{item.name}</div>
// //                               </div>
// //                             </div>
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// //                             {item.categoryName || item.category}
// //                           </td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
// //                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
// //                             ${((item.price || 0) * item.quantity).toFixed(2)}
// //                           </td>
// //                         </tr>
// //                       ))
// //                     )}
// //                   </tbody>
// //                   <tfoot className="bg-red-50">
// //                     <tr>
// //                       <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
// //                         Total:
// //                       </td>
// //                       <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-700">
// //                         ${(singleProductMode ? singleProduct.price : cartTotal).toFixed(2)}
// //                       </td>
// //                     </tr>
// //                   </tfoot>
// //                 </table>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
// //             <div className="p-6">
// //               <h2 className="text-xl font-semibold text-red-600 mb-6 border-b border-red-100 pb-2">Contact Information</h2>

// //               <form onSubmit={handleSubmit} className="space-y-6">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                   <div>
// //                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// //                       Full Name <RequiredMark />
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="name"
// //                       name="name"
// //                       value={formData.name}
// //                       onChange={handleChange}
// //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
// //                       placeholder="Name"
// //                     />
// //                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// //                   </div>

// //                   <div>
// //                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// //                       Email Address <RequiredMark />
// //                     </label>
// //                     <input
// //                       type="email"
// //                       id="email"
// //                       name="email"
// //                       value={formData.email}
// //                       onChange={handleChange}
// //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
// //                       placeholder="email"
// //                     />
// //                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// //                   </div>

// //                   <div>
// //                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
// //                       Company Name <RequiredMark />
// //                     </label>
// //                     <input
// //                       type="text"
// //                       id="company"
// //                       name="company"
// //                       value={formData.company}
// //                       onChange={handleChange}
// //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
// //                       placeholder="Acme Inc."
// //                     />
// //                     {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
// //                   </div>

// //                   <div>
// //                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// //                       Phone Number <RequiredMark />
// //                     </label>
// //                     <input
// //                       type="tel"
// //                       id="phone"
// //                       name="phone"
// //                       value={formData.phone}
// //                       onChange={handleChange}
// //                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
// //                       placeholder="(123) 456-7890"
// //                     />
// //                     {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
// //                   </div>
// //                 </div>

// //                 <div>
// //                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// //                     Additional Information
// //                   </label>
// //                   <textarea
// //                     id="message"
// //                     name="message"
// //                     rows="4"
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
// //                     placeholder="Please include any specific requirements or questions about the products."
// //                   ></textarea>
// //                 </div>

// //                 {errors.submit && (
// //                   <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
// //                     <p>{errors.submit}</p>
// //                   </div>
// //                 )}

// //                 <div className="flex justify-center pt-4">
// //                   <button
// //                     type="submit"
// //                     disabled={loading}
// //                     className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center justify-center shadow-md w-full md:w-auto min-w-[200px]"
// //                   >
// //                     {loading ? (
// //                       <>
// //                         <svg
// //                           className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
// //                           xmlns="http://www.w3.org/2000/svg"
// //                           fill="none"
// //                           viewBox="0 0 24 24"
// //                         >
// //                           <circle
// //                             className="opacity-25"
// //                             cx="12"
// //                             cy="12"
// //                             r="10"
// //                             stroke="currentColor"
// //                             strokeWidth="4"
// //                           ></circle>
// //                           <path
// //                             className="opacity-75"
// //                             fill="currentColor"
// //                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                           ></path>
// //                         </svg>
// //                         Processing...
// //                       </>
// //                     ) : (
// //                       "Submit Request"
// //                     )}
// //                   </button>
// //                 </div>

// //                 <div className="text-center text-gray-500 text-sm">
// //                   <p>Fields marked with <span className="text-red-600">*</span> are required</p>
// //                 </div>
// //               </form>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default RequestPage


// "use client"

// import { useState, useEffect, useRef } from "react"
// import { useNavigate, useLocation } from "react-router-dom"
// import { useCart } from "../contexts/CartContext"
// import axios from "axios"
// import emailjs from '@emailjs/browser'

// const RequestPage = () => {
//   const { cart, calculateSubtotal, clearCart } = useCart()
//   const navigate = useNavigate()
//   const location = useLocation()
//   const formRef = useRef() // Add ref for EmailJS form
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     company: "",
//     phone: "",
//     message: "",
//   })
//   const [errors, setErrors] = useState({})
//   const [loading, setLoading] = useState(false)
//   const [singleProductMode, setSingleProductMode] = useState(false)
//   const [singleProduct, setSingleProduct] = useState(null)

//   const cartTotal = calculateSubtotal()

//   useEffect(() => {
//     if (location.state?.product) {
//       setSingleProductMode(true)
//       setSingleProduct(location.state.product)
//     }
//   }, [location])

//   const handleChange = (e) => {
//     const { name, value } = e.target
//     setFormData((prev) => ({ ...prev, [name]: value }))
//     if (errors[name]) {
//       setErrors((prev) => ({ ...prev, [name]: "" }))
//     }
//   }

//   const validateForm = () => {
//     const newErrors = {}

//     if (!formData.name.trim()) newErrors.name = "Name is required"
//     if (!formData.email.trim()) {
//       newErrors.email = "Email is required"
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email is invalid"
//     }
//     if (!formData.company.trim()) newErrors.company = "Company is required"
//     if (!formData.phone.trim()) newErrors.phone = "Phone is required"

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [])

//   const handleSubmit = async (e) => {
//     e.preventDefault()

//     if (!validateForm()) return

//     setLoading(true)

//     try {
//       // Prepare the request data for the API
//       const requestData = {
//         ...formData,
//         products: singleProductMode
//           ? [
//             {
//               id: singleProduct.id,
//               name: singleProduct.name,
//               quantity: 1,
//               price: singleProduct.price,
//               category: singleProduct.categoryName || singleProduct.category,
//               image: singleProduct.images?.[0] || singleProduct.image || "",
//             },
//           ]
//           : cart.map((item) => ({
//             id: item.id,
//             name: item.name,
//             quantity: item.quantity,
//             price: item.price,
//             category: item.categoryName || item.category,
//             image: item.images?.[0] || item.image || "",
//           })),
//         totalAmount: singleProductMode ? singleProduct.price : cartTotal,
//       }

//       // Send email using EmailJS
//       const emailData = {
//         name: formData.name,
//         email: formData.email,
//         company: formData.company,
//         phone: formData.phone,
//         message: formData.message,
//         products: requestData.products.map(p => ({
//           name: p.name,
//           category: p.category,
//           quantity: p.quantity,
//           image: p.image || "https://via.placeholder.com/40", // Include image with a fallback
//         })), // Removed price as per template requirement
//         totalAmount: requestData.totalAmount,
//       }

//       await emailjs.send(
//         'service_jzabqel', // Service ID
//         'template_21hkuep', // Template ID
//         emailData,
//         'xV5ImFLhCL8Hri6ps' // Public Key
//       )

//       // Save the request to your backend
//       await axios.post(`${process.env.REACT_APP_API_URL}/requests`, requestData)

//       if (!singleProductMode) clearCart()
//       navigate("/request-success")
//     } catch (error) {
//       console.error("Error submitting request:", error)
//       setErrors({ submit: "Failed to submit request. Please try again." })
//     } finally {
//       setLoading(false)
//     }
//   }

//   const RequiredMark = () => <span className="text-red-600 ml-1">*</span>

//   if (!singleProductMode && (!cart || cart.length === 0)) {
//     return (
//       <div className="container mx-auto px-4 py-16 bg-gray-50">
//         <div className="max-w-2xl mx-auto text-center">
//           <h1 className="text-3xl font-bold text-red-700 mb-4">Request Quote</h1>
//           <div className="bg-white border border-red-100 rounded-lg p-6 mb-6 shadow-md">
//             <p className="text-gray-700">
//               Your cart is empty. Please add products to your cart before requesting a quote.
//             </p>
//           </div>
//           <button
//             onClick={() => navigate("/products")}
//             className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition duration-300"
//           >
//             Browse Products
//           </button>
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen p-36">
//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-4xl mx-auto">
//           <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Request Quote</h1>

//           <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
//             <div className="p-6">
//               <h2 className="text-xl font-semibold text-red-600 mb-4 border-b border-red-100 pb-2">Products in Your Request</h2>

//               <div className="overflow-x-auto">
//                 <table className="min-w-full divide-y divide-gray-200">
//                   <thead className="bg-red-50">
//                     <tr>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
//                       >
//                         Product
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
//                       >
//                         Category
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
//                       >
//                         Quantity
//                       </th>
//                       <th
//                         scope="col"
//                         className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
//                       >
//                         Price
//                       </th>
//                     </tr>
//                   </thead>
//                   <tbody className="bg-white divide-y divide-gray-200">
//                     {singleProductMode ? (
//                       <tr>
//                         <td className="px-6 py-4 whitespace-nowrap">
//                           <div className="flex items-center">
//                             <div className="flex-shrink-0 h-10 w-10">
//                               <img
//                                 className="h-10 w-10 rounded-md object-cover"
//                                 src={singleProduct.images?.[0] || singleProduct.image || "/placeholder.svg"}
//                                 alt={singleProduct.name}
//                               />
//                             </div>
//                             <div className="ml-4">
//                               <div className="text-sm font-medium text-gray-900">{singleProduct.name}</div>
//                             </div>
//                           </div>
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                           {singleProduct.categoryName || singleProduct.category}
//                         </td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
//                         <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
//                           ${singleProduct.price.toFixed(2)}
//                         </td>
//                       </tr>
//                     ) : (
//                       cart && cart.map((item) => (
//                         <tr key={item.id || item.model} className="hover:bg-red-50 transition-colors">
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-12 w-12 border border-gray-200 rounded-md overflow-hidden">
//                                 <img
//                                   className="h-full w-full object-cover"
//                                   src={(item.images && item.images[0]) || item.image || "/placeholder.svg"}
//                                   alt={item.name}
//                                 />
//                               </div>
//                               <div className="ml-4">
//                                 <div className="text-sm font-medium text-gray-900">{item.name}</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {item.categoryName || item.category}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
//                             ${((item.price || 0) * item.quantity).toFixed(2)}
//                           </td>
//                         </tr>
//                       ))
//                     )}
//                   </tbody>
//                   <tfoot className="bg-red-50">
//                     <tr>
//                       <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
//                         Total:
//                       </td>
//                       <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-700">
//                         ${(singleProductMode ? singleProduct.price : cartTotal).toFixed(2)}
//                       </td>
//                     </tr>
//                   </tfoot>
//                 </table>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
//             <div className="p-6">
//               <h2 className="text-xl font-semibold text-red-600 mb-6 border-b border-red-100 pb-2">Contact Information</h2>

//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                       Full Name <RequiredMark />
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={formData.name}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
//                       placeholder="Name"
//                     />
//                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                   </div>

//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                       Email Address <RequiredMark />
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
//                       placeholder="email"
//                     />
//                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                   </div>

//                   <div>
//                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
//                       Company Name <RequiredMark />
//                     </label>
//                     <input
//                       type="text"
//                       id="company"
//                       name="company"
//                       value={formData.company}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
//                       placeholder="Acme Inc."
//                     />
//                     {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
//                   </div>

//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                       Phone Number <RequiredMark />
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
//                       placeholder="(123) 456-7890"
//                     />
//                     {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
//                   </div>
//                 </div>

//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                     Additional Information
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     rows="4"
//                     value={formData.message}
//                     onChange={handleChange}
//                     className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
//                     placeholder="Please include any specific requirements or questions about the products."
//                   ></textarea>
//                 </div>

//                 {errors.submit && (
//                   <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
//                     <p>{errors.submit}</p>
//                   </div>
//                 )}

//                 <div className="flex justify-center pt-4">
//                   <button
//                     type="submit"
//                     disabled={loading}
//                     className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center justify-center shadow-md w-full md:w-auto min-w-[200px]"
//                   >
//                     {loading ? (
//                       <>
//                         <svg
//                           className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 24 24"
//                         >
//                           <circle
//                             className="opacity-25"
//                             cx="12"
//                             cy="12"
//                             r="10"
//                             stroke="currentColor"
//                             strokeWidth="4"
//                           ></circle>
//                           <path
//                             className="opacity-75"
//                             fill="currentColor"
//                             d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                           ></path>
//                         </svg>
//                         Processing...
//                       </>
//                     ) : (
//                       "Submit Request"
//                     )}
//                   </button>
//                 </div>

//                 <div className="text-center text-gray-500 text-sm">
//                   <p>Fields marked with <span className="text-red-600">*</span> are required</p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RequestPage



"use client"

import { useState, useEffect, useRef } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import axios from "axios"
import emailjs from '@emailjs/browser'

const RequestPage = () => {
  const { cart, calculateSubtotal, clearCart } = useCart()
  const navigate = useNavigate()
  const location = useLocation()
  const formRef = useRef() // Add ref for EmailJS form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [singleProductMode, setSingleProductMode] = useState(false)
  const [singleProduct, setSingleProduct] = useState(null)

  const cartTotal = calculateSubtotal()

  useEffect(() => {
    if (location.state?.product) {
      setSingleProductMode(true)
      setSingleProduct(location.state.product)
    }
  }, [location])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }
    if (!formData.company.trim()) newErrors.company = "Company is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!validateForm()) return

    setLoading(true)

    try {
      // Prepare the request data for the API
      const requestData = {
        ...formData,
        products: singleProductMode
          ? [
            {
              id: singleProduct.id,
              name: singleProduct.name,
              quantity: 1,
              price: singleProduct.price,
              category: singleProduct.categoryName || singleProduct.category,
              image: singleProduct.images?.[0] || singleProduct.image || "",
            },
          ]
          : cart.map((item) => ({
            id: item.id,
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            category: item.categoryName || item.category,
            image: item.images?.[0] || item.image || "",
          })),
        totalAmount: singleProductMode ? singleProduct.price : cartTotal,
      }

      // Prepare email data for both emails
      const emailData = {
        name: formData.name,
        email: formData.email,
        company: formData.company,
        phone: formData.phone,
        message: formData.message,
        products: requestData.products.map(p => ({
          name: p.name,
          category: p.category,
          quantity: p.quantity,
          image: p.image || "https://via.placeholder.com/40",
        })),
        totalAmount: requestData.totalAmount,
      }

      // Send email to the team (existing email)
      await emailjs.send(
        'service_jzabqel',
        'template_21hkuep',
        emailData,
        'xV5ImFLhCL8Hri6ps'
      )

      // Send confirmation email to the customer (new email)
      await emailjs.send(
        'service_y4a4npb',
        'template_vu10ikd',
        emailData,
        'Qyjy-LECOP7bPgqHE'
      )

      // Save the request to your backend
      await axios.post(`${process.env.REACT_APP_API_URL}/requests`, requestData)

      if (!singleProductMode) clearCart()
      navigate("/request-success")
    } catch (error) {
      console.error("Error submitting request:", error)
      setErrors({ submit: "Failed to submit request. Please try again." })
    } finally {
      setLoading(false)
    }
  }

  const RequiredMark = () => <span className="text-red-600 ml-1">*</span>

  if (!singleProductMode && (!cart || cart.length === 0)) {
    return (
      <div className="container mx-auto px-4 py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-red-700 mb-4">Request Quote</h1>
          <div className="bg-white border border-red-100 rounded-lg p-6 mb-6 shadow-md">
            <p className="text-gray-700">
              Your cart is empty. Please add products to your cart before requesting a quote.
            </p>
          </div>
          <button
            onClick={() => navigate("/products")}
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-md font-medium transition duration-300"
          >
            Browse Products
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen p-36">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-red-700 mb-6 text-center">Request Quote</h1>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8 border border-gray-100">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-red-600 mb-4 border-b border-red-100 pb-2">Products in Your Request</h2>

              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-red-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-red-700 uppercase tracking-wider"
                      >
                        Price
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {singleProductMode ? (
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0 h-10 w-10">
                              <img
                                className="h-10 w-10 rounded-md object-cover"
                                src={singleProduct.images?.[0] || singleProduct.image || "/placeholder.svg"}
                                alt={singleProduct.name}
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">{singleProduct.name}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {singleProduct.categoryName || singleProduct.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                          ${singleProduct.price.toFixed(2)}
                        </td>
                      </tr>
                    ) : (
                      cart && cart.map((item) => (
                        <tr key={item.id || item.model} className="hover:bg-red-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="flex-shrink-0 h-12 w-12 border border-gray-200 rounded-md overflow-hidden">
                                <img
                                  className="h-full w-full object-cover"
                                  src={(item.images && item.images[0]) || item.image || "/placeholder.svg"}
                                  alt={item.name}
                                />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">{item.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {item.categoryName || item.category}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.quantity}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                            ${((item.price || 0) * item.quantity).toFixed(2)}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                  <tfoot className="bg-red-50">
                    <tr>
                      <td colSpan="3" className="px-6 py-4 text-right text-sm font-medium text-gray-900">
                        Total:
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-red-700">
                        ${(singleProductMode ? singleProduct.price : cartTotal).toFixed(2)}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-red-600 mb-6 border-b border-red-100 pb-2">Contact Information</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name <RequiredMark />
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
                      placeholder="Name"
                    />
                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address <RequiredMark />
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
                      placeholder="email"
                    />
                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name <RequiredMark />
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
                      placeholder="Acme Inc."
                    />
                    {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number <RequiredMark />
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
                      placeholder="(123) 456-7890"
                    />
                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Additional Information
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"}`}
                    placeholder="Please include any specific requirements or questions about the products."
                  ></textarea>
                </div>

                {errors.submit && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                    <p>{errors.submit}</p>
                  </div>
                )}

                <div className="flex justify-center pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center justify-center shadow-md w-full md:w-auto min-w-[200px]"
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                        Processing...
                      </>
                    ) : (
                      "Submit Request"
                    )}
                  </button>
                </div>

                <div className="text-center text-gray-500 text-sm">
                  <p>Fields marked with <span className="text-red-600">*</span> are required</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestPage