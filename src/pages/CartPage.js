// "use client"
// import { Link } from "react-router-dom"
// import { motion } from "framer-motion"
// import { Trash2, ShoppingCart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
// import { useCart } from "../contexts/CartContext"

// const CartPage = () => {
//   const { cart, updateQuantity, removeFromCart, clearCart } = useCart()

//   const calculateSubtotal = () => {
//     return cart?.reduce((total, item) => {
//       return total + (item.price || 0) * item.quantity
//     }, 0)
//   }

//   const handleQuantityChange = (id, newQuantity) => {
//     if (newQuantity > 0) {
//       updateQuantity(id, newQuantity)
//     }
//   }

//   const incrementQuantity = (id, currentQuantity) => {
//     updateQuantity(id, currentQuantity + 1)
//   }

//   const decrementQuantity = (id, currentQuantity) => {
//     if (currentQuantity > 1) {
//       updateQuantity(id, currentQuantity - 1)
//     }
//   }
//   window.scrollTo(0, 0);
//   return (
//     <div className="pt-24 pb-16">
//       <div className="container mx-auto px-4">
//         <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

//         {cart?.length === 0 ? (
//           <div className="text-center py-16">
//             <div className="flex justify-center mb-4">
//               <ShoppingCart className="h-16 w-16 text-gray-400" />
//             </div>
//             <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
//             <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
//             <Link to="/products" className="btn btn-primary">
//               Browse Products
//             </Link>
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-lg shadow-sm overflow-hidden">
//                 <div className="overflow-x-auto">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Product
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Price
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Quantity
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           Total
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                         >
//                           <span className="sr-only">Actions</span>
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {cart.map((item) => (
//                         <motion.tr
//                           key={item.id}
//                           initial={{ opacity: 0 }}
//                           animate={{ opacity: 1 }}
//                           exit={{ opacity: 0 }}
//                         >
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <div className="flex-shrink-0 h-16 w-16 mr-4">
//                                 <img
//                                   src={item.images[0] || "/images/placeholder-product.png"}
//                                   alt={item.name}
//                                   className="h-16 w-16 object-contain"
//                                 />
//                               </div>
//                               <div>
//                                 <div className="text-sm font-medium text-gray-900">{item.name}</div>
//                                 <div className="text-sm text-gray-500">{item.model}</div>
//                               </div>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {item.price ? `$${item.price.toFixed(2)}` : "Request Quote"}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center">
//                               <button
//                                 onClick={() => decrementQuantity(item.id, item.quantity)}
//                                 className="p-1 rounded-md hover:bg-gray-100"
//                               >
//                                 <ChevronLeft className="h-4 w-4" />
//                               </button>
//                               <input
//                                 type="number"
//                                 min="1"
//                                 value={item.quantity}
//                                 onChange={(e) => handleQuantityChange(item.id, Number.parseInt(e.target.value))}
//                                 className="w-12 text-center mx-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
//                               />
//                               <button
//                                 onClick={() => incrementQuantity(item.id, item.quantity)}
//                                 className="p-1 rounded-md hover:bg-gray-100"
//                               >
//                                 <ChevronRight className="h-4 w-4" />
//                               </button>
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
//                             {item.price ? `$${(item.price * item.quantity).toFixed(2)}` : "Request Quote"}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                             <button onClick={() => removeFromCart(item.id)} className="text-red-600 hover:text-red-900">
//                               <Trash2 className="h-5 w-5" />
//                             </button>
//                           </td>
//                         </motion.tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>

//               <div className="flex justify-between mt-6">
//                 <Link to="/products" className="flex items-center text-red-600 hover:text-red-700">
//                   <ChevronLeft className="h-4 w-4 mr-1" />
//                   Continue Shopping
//                 </Link>
//                 <button onClick={clearCart} className="text-gray-600 hover:text-gray-800">
//                   Clear Cart
//                 </button>
//               </div>
//             </div>

//             <div className="lg:col-span-1">
//               <div className="bg-white rounded-lg shadow-sm p-6">
//                 <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
//                 <div className="space-y-4">
//                   <div className="flex justify-between">
//                     <span className="text-gray-600">Subtotal</span>
//                     <span className="font-medium">${calculateSubtotal().toFixed(2)}</span>
//                   </div>
//                   <div className="border-t border-gray-200 pt-4">
//                     <div className="flex justify-between font-semibold">
//                       <span>Total</span>
//                       <span>${calculateSubtotal().toFixed(2)}</span>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-6">
//                   <Link to="/request" className="btn btn-primary w-full flex items-center justify-center">
//                     Raise a Request <ArrowRight className="ml-2 h-5 w-5" />
//                   </Link>
//                   <p className="text-xs text-gray-500 mt-2 text-center">
//                     By proceeding, you agree to our Terms and Conditions
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default CartPage


"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Trash2, ShoppingCart, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useCart } from "../contexts/CartContext"
import { useEffect } from "react"

const CartPage = () => {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const calculateSubtotal = () => {
    return cart?.reduce((total, item) => {
      return total + (item.price || 0) * item.quantity
    }, 0)
  }

  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity)
    }
  }

  const incrementQuantity = (id, currentQuantity) => {
    updateQuantity(id, currentQuantity + 1)
  }

  const decrementQuantity = (id, currentQuantity) => {
    if (currentQuantity > 1) {
      updateQuantity(id, currentQuantity - 1)
    }
  }

  // For debugging
  useEffect(() => {
    console.log("Current cart contents:", cart)
  }, [cart])

  return (
    <div className="pt-24 pb-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {!cart || cart.length === 0 ? (
          <div className="text-center py-16">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="h-16 w-16 text-gray-400" />
            </div>
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
            <Link to="/products" className="btn btn-primary">
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-red-600">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-bold font-medium text-white uppercase tracking-wider"
                        >
                          Product
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-bold font-medium text-white  uppercase tracking-wider"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-bold font-medium text-white  uppercase tracking-wider"
                        >
                          Quantity
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-bold font-medium text-white  uppercase tracking-wider"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          <span className="sr-only">Actions</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cart.map((item) => {
                        const itemId = item.id || item.model;
                        return (
                          <motion.tr
                            key={itemId}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-16 w-16 mr-4">
                                  <img
                                    src={(item.images && item.images[0]) || "/images/placeholder-product.png"}
                                    alt={item.name}
                                    className="h-16 w-16 object-contain"
                                  />
                                </div>
                                <div>
                                  <div className="text-sm font-medium text-gray-900">{item.name}</div>
                                  <div className="text-sm text-gray-500">{item.model}</div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                              {!item.price ? `$${item.price.toFixed(2)}` : "Request Quote"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <button
                                  onClick={() => decrementQuantity(itemId, item.quantity)}
                                  className="p-1 rounded-md hover:bg-gray-100"
                                >
                                  <ChevronLeft className="h-4 w-4" />
                                </button>
                                <input
                                  type="number"
                                  min="1"
                                  value={item.quantity}
                                  onChange={(e) => handleQuantityChange(itemId, Number.parseInt(e.target.value))}
                                  className="w-12 text-center mx-1 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-red-500"
                                />
                                <button
                                  onClick={() => incrementQuantity(itemId, item.quantity)}
                                  className="p-1 rounded-md hover:bg-gray-100"
                                >
                                  <ChevronRight className="h-4 w-4" />
                                </button>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 font-medium">
                              {!item.price ? `$${(item.price * item.quantity).toFixed(2)}` : "Request Quote"}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              <button onClick={() => removeFromCart(itemId)} className="text-red-600 hover:text-red-900">
                                <Trash2 className="h-5 w-5" />
                              </button>
                            </td>
                          </motion.tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <Link to="/products" className="flex items-center text-red-600 hover:text-red-700">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Continue Shopping
                </Link>
                <button onClick={clearCart} className="text-gray-600 hover:text-gray-800">
                  Clear Cart
                </button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    {/* <span className="font-medium">${calculateSubtotal().toFixed(2)}</span> */}
                    <span className="font-medium">XXXXXX</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex justify-between font-semibold">
                      <span>Total</span>
                      {/* <span>${calculateSubtotal().toFixed(2)}</span> */}
                      <span>XXXXXX.XX</span>
                    </div>
                  </div>
                </div>
                <div className="mt-6">
                  <Link to="/request" className="btn btn-primary w-full flex items-center justify-center">
                    Raise a Request <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    By proceeding, you agree to our Terms and Conditions
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CartPage