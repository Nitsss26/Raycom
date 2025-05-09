// // // // // "use client"
// // // // // import { Link } from "react-router-dom"
// // // // // import { motion } from "framer-motion"
// // // // // import { ShoppingCart, Eye } from "lucide-react"
// // // // // import { useCart } from "../../contexts/CartContext"

// // // // // const ProductCard = ({ product }) => {
// // // // //   const { addToCart } = useCart()

// // // // //   const handleAddToCart = (e) => {
// // // // //     e.preventDefault()
// // // // //     e.stopPropagation()
// // // // //     addToCart(product)
// // // // //   }

// // // // //   return (
// // // // //     <motion.div
// // // // //       className="bg-white rounded-lg shadow-md overflow-hidden"
// // // // //       whileHover={{ y: -5 }}
// // // // //       initial={{ opacity: 0, y: 20 }}
// // // // //       animate={{ opacity: 1, y: 0 }}
// // // // //       transition={{ duration: 0.3 }}
// // // // //     >
// // // // //       <Link to={`/products/${product.category}/${product.id}`} className="block">
// // // // //         <div className="relative overflow-hidden group">
// // // // //           <img
// // // // //             src={product.image || "/images/placeholder-product.png"}
// // // // //             alt={product.name}
// // // // //             className="w-full h-48 object-contain p-4 transition-transform duration-300 group-hover:scale-105"
// // // // //           />
// // // // //           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
// // // // //             <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// // // // //               <button
// // // // //                 onClick={handleAddToCart}
// // // // //                 className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
// // // // //               >
// // // // //                 <ShoppingCart className="h-5 w-5" />
// // // // //               </button>
// // // // //               <Link
// // // // //                 to={`/products/${product.category}/${product.id}`}
// // // // //                 className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
// // // // //               >
// // // // //                 <Eye className="h-5 w-5" />
// // // // //               </Link>
// // // // //             </div>
// // // // //           </div>
// // // // //           {product.inStock && (
// // // // //             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
// // // // //               In Stock
// // // // //             </div>
// // // // //           )}
// // // // //         </div>
// // // // //         <div className="p-4">
// // // // //           <h3 className="font-medium text-gray-900 mb-1 truncate">{product.name}</h3>
// // // // //           <p className="text-sm text-gray-500 mb-2">{product.model}</p>
// // // // //           <div className="flex items-center justify-between">
// // // // //             <span className="text-lg font-bold text-gray-900">
// // // // //               {product.price ? `$${product.price.toFixed(2)}` : "Request Quote"}
// // // // //             </span>
// // // // //             {product.frequency && (
// // // // //               <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{product.frequency} GHz</span>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </Link>
// // // // //     </motion.div>
// // // // //   )
// // // // // }

// // // // // export default ProductCard


// // // // "use client"
// // // // import { Link } from "react-router-dom"
// // // // import { motion } from "framer-motion"
// // // // import { ShoppingCart, Eye, Star } from "lucide-react"
// // // // import { useCart } from "../../contexts/CartContext"
// // // // import { useState } from "react"

// // // // const ProductCard = ({ product }) => {
// // // //   const { addToCart } = useCart()
// // // //   const [isHovered, setIsHovered] = useState(false)

// // // //   const handleAddToCart = (e) => {
// // // //     e.preventDefault()
// // // //     e.stopPropagation()
// // // //     addToCart(product)
// // // //   }

// // // //   return (
// // // //     <motion.div
// // // //       className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
// // // //       whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
// // // //       initial={{ opacity: 0, y: 20 }}
// // // //       animate={{ opacity: 1, y: 0 }}
// // // //       transition={{ duration: 0.3 }}
// // // //       onMouseEnter={() => setIsHovered(true)}
// // // //       onMouseLeave={() => setIsHovered(false)}
// // // //     >
// // // //       <Link to={`/products/${product.category}/${product.id}`} className="block flex-grow">
// // // //         <div className="relative overflow-hidden group">
// // // //           <div className="h-48 flex items-center justify-center bg-gray-50 p-4">
// // // //             <img
// // // //               src={product.images[0] || "/images/placeholder-product.png"}
// // // //               alt={product.name}
// // // //               className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
// // // //             />
// // // //           </div>
// // // //           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
// // // //             <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// // // //               <button
// // // //                 onClick={handleAddToCart}
// // // //                 className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
// // // //                 aria-label="Add to cart"
// // // //               >
// // // //                 <ShoppingCart className="h-5 w-5" />
// // // //               </button>
// // // //               <Link
// // // //                 to={`/products/${product.category}/${product.id}`}
// // // //                 className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
// // // //                 aria-label="View details"
// // // //               >
// // // //                 <Eye className="h-5 w-5" />
// // // //               </Link>
// // // //             </div>
// // // //           </div>
// // // //           {product.inStock ? (
// // // //             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
// // // //               In Stock
// // // //             </div>
// // // //           ) : (
// // // //             <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
// // // //               Made to Order
// // // //             </div>
// // // //           )}
// // // //         </div>
// // // //         <div className="p-4 flex-grow flex flex-col">
// // // //           <div className="flex items-center mb-1">
// // // //             <div className="flex">
// // // //               {[...Array(5)].map((_, i) => (
// // // //                 <Star key={i} className={`h-3 w-3 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
// // // //               ))}
// // // //             </div>
// // // //             <span className="text-xs text-gray-500 ml-1">(4.0)</span>
// // // //           </div>
// // // //           <div className="mb-2">
// // // //             <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
// // // //           </div>
// // // //           <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 h-12">{product.name}</h3>
// // // //           <p className="text-sm text-gray-500 mb-2">Model: {product.model}</p>
// // // //           <div className="mt-auto flex items-center justify-between">
// // // //             <span className="text-lg font-bold text-gray-900">
// // // //               {product.price ? `$${product.price.toFixed(2)}` : "Request Quote"}
// // // //             </span>
// // // //             {product.frequency && (
// // // //               <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{product.frequency} GHz</span>
// // // //             )}
// // // //           </div>
// // // //         </div>
// // // //       </Link>
// // // //       <motion.div
// // // //         className="px-4 pb-4"
// // // //         initial={{ opacity: 0, height: 0 }}
// // // //         animate={{
// // // //           opacity: isHovered ? 1 : 0,
// // // //           height: isHovered ? "auto" : 0,
// // // //         }}
// // // //         transition={{ duration: 0.2 }}
// // // //       >
// // // //         <button
// // // //           onClick={handleAddToCart}
// // // //           className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors flex items-center justify-center"
// // // //         >
// // // //           <ShoppingCart className="h-4 w-4 mr-2" />
// // // //           Add to Cart
// // // //         </button>
// // // //       </motion.div>
// // // //     </motion.div>
// // // //   )
// // // // }

// // // // export default ProductCard



// // // "use client"
// // // import { Link } from "react-router-dom"
// // // import { motion } from "framer-motion"
// // // import { ShoppingCart, Eye, Star } from "lucide-react"
// // // import { useCart } from "../../contexts/CartContext"
// // // import { useState } from "react"

// // // const ProductCard = ({ product }) => {
// // //   const { addToCart } = useCart()
// // //   const [isHovered, setIsHovered] = useState(false)

// // //   // Make sure product has an identifier before adding to cart
// // //   const handleAddToCart = (e) => {
// // //     e.preventDefault()
// // //     e.stopPropagation()

// // //     // Create a copy of the product to ensure we don't mutate the original
// // //     const productToAdd = { ...product }

// // //     // Set the ID if it doesn't exist (using model as fallback)
// // //     if (!productToAdd.id) {
// // //       productToAdd.id = productToAdd.model || `product-${Date.now()}`
// // //     }

// // //     // Always ensure quantity starts at 1
// // //     productToAdd.quantity = 1

// // //     console.log("Adding product to cart:", productToAdd)
// // //     addToCart(productToAdd)
// // //   }

// // //   return (
// // //     <motion.div
// // //       className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
// // //       whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
// // //       initial={{ opacity: 0, y: 20 }}
// // //       animate={{ opacity: 1, y: 0 }}
// // //       transition={{ duration: 0.3 }}
// // //       onMouseEnter={() => setIsHovered(true)}
// // //       onMouseLeave={() => setIsHovered(false)}
// // //     >
// // //       <Link to={`/products/${product._id}`} className="block flex-grow">
// // //         <div className="relative overflow-hidden group">
// // //           <div className="h-48 flex items-center justify-center bg-gray-50 p-4">
// // //             <img
// // //               src={product.images?.[0] || "/images/placeholder-product.png"}
// // //               alt={product.name}
// // //               className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
// // //             />
// // //           </div>
// // //           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
// // //             <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// // //               <button
// // //                 onClick={handleAddToCart}
// // //                 className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
// // //                 aria-label="Add to cart"
// // //               >
// // //                 <ShoppingCart className="h-5 w-5" />
// // //               </button>
// // //               <Link
// // //                 to={`/products/${product.category}/${product.id || product.model}`}
// // //                 className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
// // //                 aria-label="View details"
// // //               >
// // //                 <Eye className="h-5 w-5" />
// // //               </Link>
// // //             </div>
// // //           </div>
// // //           {product.inStock ? (
// // //             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
// // //               In Stock
// // //             </div>
// // //           ) : (
// // //             <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
// // //               Made to Order
// // //             </div>
// // //           )}
// // //         </div>
// // //         <div className="p-4 flex-grow flex flex-col">
// // //           <div className="flex items-center mb-1">
// // //             <div className="flex">
// // //               {[...Array(5)].map((_, i) => (
// // //                 <Star key={i} className={`h-3 w-3 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
// // //               ))}
// // //             </div>
// // //             <span className="text-xs text-gray-500 ml-1">(4.0)</span>
// // //           </div>
// // //           <div className="mb-2">
// // //             <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
// // //           </div>
// // //           <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 h-12">{product.name}</h3>
// // //           <p className="text-sm text-gray-500 mb-2">Model: {product.model}</p>
// // //           <div className="mt-auto flex items-center justify-between">
// // //             <span className="text-lg font-bold text-gray-900">
// // //               {product.price ? `$${product.price.toFixed(2)}` : "Request Quote"}
// // //             </span>
// // //             {product.frequency && (
// // //               <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{product.frequency} GHz</span>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </Link>
// // //       <motion.div
// // //         className="px-4 pb-4"
// // //         initial={{ opacity: 0, height: 0 }}
// // //         animate={{
// // //           opacity: isHovered ? 1 : 0,
// // //           height: isHovered ? "auto" : 0,
// // //         }}
// // //         transition={{ duration: 0.2 }}
// // //       >
// // //         <button
// // //           onClick={handleAddToCart}
// // //           className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors flex items-center justify-center"
// // //         >
// // //           <ShoppingCart className="h-4 w-4 mr-2" />
// // //           Add to Cart
// // //         </button>
// // //       </motion.div>
// // //     </motion.div>
// // //   )
// // // }

// // // export default ProductCard

// // "use client"
// // import { Link } from "react-router-dom"
// // import { motion } from "framer-motion"
// // import { ShoppingCart, Eye, Star } from "lucide-react"
// // import { useCart } from "../../contexts/CartContext"
// // import { useState } from "react"

// // const ProductCard = ({ product }) => {
// //   const { addToCart } = useCart()
// //   const [isHovered, setIsHovered] = useState(false)

// //   // Make sure product has an identifier before adding to cart
// //   const handleAddToCart = (e) => {
// //     e.preventDefault()
// //     e.stopPropagation()

// //     // Create a copy of the product to ensure we don't mutate the original
// //     const productToAdd = { ...product }

// //     // Set the ID using _id
// //     productToAdd.id = productToAdd._id

// //     // Always ensure quantity starts at 1
// //     productToAdd.quantity = 1

// //     console.log("Adding product to cart:", productToAdd)
// //     addToCart(productToAdd)
// //   }

// //   return (
// //     <motion.div
// //       className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
// //       whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
// //       initial={{ opacity: 0, y: 20 }}
// //       animate={{ opacity: 1, y: 0 }}
// //       transition={{ duration: 0.3 }}
// //       onMouseEnter={() => setIsHovered(true)}
// //       onMouseLeave={() => setIsHovered(false)}
// //     >
// //       <Link to={`/products/${product._id}`} className="block flex-grow">
// //         <div className="relative overflow-hidden group">
// //           <div className="h-48 flex items-center justify-center bg-gray-50 p-4">
// //             <img
// //               src={product.images?.[0] || "/images/placeholder-product.png"}
// //               alt={product.name}
// //               className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
// //             />
// //           </div>
// //           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
// //             <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
// //               <button
// //                 onClick={handleAddToCart}
// //                 className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
// //                 aria-label="Add to cart"
// //               >
// //                 <ShoppingCart className="h-5 w-5" />
// //               </button>
// //               <Link
// //                 to={`/products/${product._id}`}
// //                 className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
// //                 aria-label="View details"
// //               >
// //                 <Eye className="h-5 w-5" />
// //               </Link>
// //             </div>
// //           </div>
// //           {product.inStock ? (
// //             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
// //               In Stock
// //             </div>
// //           ) : (
// //             <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
// //               Made to Order
// //             </div>
// //           )}
// //         </div>
// //         <div className="p-4 flex-grow flex flex-col">
// //           <div className="flex items-center mb-1">
// //             <div className="flex">
// //               {[...Array(5)].map((_, i) => (
// //                 <Star key={i} className={`h-3 w-3 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
// //               ))}
// //             </div>
// //             <span className="text-xs text-gray-500 ml-1">(4.0)</span>
// //           </div>
// //           <div className="mb-2">
// //             <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
// //           </div>
// //           <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 h-12">{product.name}</h3>
// //           <p className="text-sm text-gray-500 mb-2">Model: {product.model}</p>
// //           <div className="mt-auto flex items-center justify-between">
// //             <span className="text-lg font-bold text-gray-900">
// //               {product.price ? `$${product.price.toFixed(2)}` : "Request Quote"}
// //             </span>
// //             {product.frequency && (
// //               <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{product.frequency} GHz</span>
// //             )}
// //           </div>
// //         </div>
// //       </Link>
// //       <motion.div
// //         className="px-4 pb-4"
// //         initial={{ opacity: 0, height: 0 }}
// //         animate={{
// //           opacity: isHovered ? 1 : 0,
// //           height: isHovered ? "auto" : 0,
// //         }}
// //         transition={{ duration: 0.2 }}
// //       >
// //         <button
// //           onClick={handleAddToCart}
// //           className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors flex items-center justify-center"
// //         >
// //           <ShoppingCart className="h-4 w-4 mr-2" />
// //           Add to Cart
// //         </button>
// //       </motion.div>
// //     </motion.div>
// //   )
// // }

// // export default ProductCard

// "use client"
// import { Link } from "react-router-dom"
// import { motion } from "framer-motion"
// import { ShoppingCart, Eye, Star } from "lucide-react"
// import { useCart } from "../../contexts/CartContext"
// import { useState } from "react"

// const ProductCard = ({ product }) => {
//   const { addToCart } = useCart()
//   const [isHovered, setIsHovered] = useState(false)

//   // Make sure product has an identifier before adding to cart
//   const handleAddToCart = (e) => {
//     e.preventDefault()
//     e.stopPropagation()

//     // Create a copy of the product to ensure we don't mutate the original
//     const productToAdd = { ...product }

//     // Ensure the ID is set to _id
//     productToAdd.id = productToAdd._id

//     // Always ensure quantity starts at 1
//     productToAdd.quantity = 1

//     console.log("Adding product to cart:", productToAdd)
//     addToCart(productToAdd)
//   }

//   return (
//     <motion.div
//       className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
//       whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.3 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Link to={`/products/${product._id}`} className="block flex-grow">
//         <div className="relative overflow-hidden group">
//           <div className="h-48 flex items-center justify-center bg-gray-50 p-4">
//             <img
//               src={product.images?.[0] || "/images/placeholder-product.png"}
//               alt={product.name}
//               className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
//             />
//           </div>
//           <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
//             <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button
//                 onClick={handleAddToCart}
//                 className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
//                 aria-label="Add to cart"
//               >
//                 <ShoppingCart className="h-5 w-5" />
//               </button>
//               <Link
//                 to={`/products/${product._id}`} // Fixed to use _id
//                 className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
//                 aria-label="View details"
//               >
//                 <Eye className="h-5 w-5" />
//               </Link>
//             </div>
//           </div>
//           {product.inStock ? (
//             <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
//               In Stock
//             </div>
//           ) : (
//             <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
//               Made to Order
//             </div>
//           )}
//         </div>
//         <div className="p-4 flex-grow flex flex-col">
//           <div className="flex items-center mb-1">
//             <div className="flex">
//               {[...Array(5)].map((_, i) => (
//                 <Star key={i} className={`h-3 w-3 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
//               ))}
//             </div>
//             <span className="text-xs text-gray-500 ml-1">(4.0)</span>
//           </div>
//           <div className="mb-2">
//             <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
//           </div>
//           <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 h-12">{product.name}</h3>
//           <p className="text-sm text-gray-500 mb-2">Model: {product.model}</p>
//           <div className="mt-auto flex items-center justify-between">
//             <span className="text-lg font-bold text-gray-900">
//               {product.price ? `$${product.price.toFixed(2)}` : "Request Quote"}
//             </span>
//             {product.frequency && (
//               <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{product.frequency} GHz</span>
//             )}
//           </div>
//         </div>
//       </Link>
//       <motion.div
//         className="px-4 pb-4"
//         initial={{ opacity: 0, height: 0 }}
//         animate={{
//           opacity: isHovered ? 1 : 0,
//           height: isHovered ? "auto" : 0,
//         }}
//         transition={{ duration: 0.2 }}
//       >
//         <button
//           onClick={handleAddToCart}
//           className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors flex items-center justify-center"
//         >
//           <ShoppingCart className="h-4 w-4 mr-2" />
//           Add to Cart
//         </button>
//       </motion.div>
//     </motion.div>
//   )
// }

// export default ProductCard


"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ShoppingCart, Eye, Star } from "lucide-react"
import { useCart } from "../../contexts/CartContext"
import { useState } from "react"

const ProductCard = ({ product }) => {
  const { addToCart } = useCart()
  const [isHovered, setIsHovered] = useState(false)

  // Ensure product has an identifier before adding to cart
  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    // Create a copy of the product to ensure we don't mutate the original
    const productToAdd = { ...product }

    // Set the ID using _id
    if (!productToAdd.id) {
      productToAdd.id = productToAdd._id
    }

    // Always ensure quantity starts at 1
    productToAdd.quantity = 1

    console.log("Adding product to cart:", productToAdd)
    addToCart(productToAdd)
  }

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/products/${product._id}`} className="block flex-grow">
        <div className="relative overflow-hidden group">
          <div className="h-48 flex items-center justify-center bg-gray-50 p-4">
            <img
              src={product.images?.[0] || "/images/placeholder-product.png"}
              alt={product.name}
              className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300 flex items-center justify-center">
            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                onClick={handleAddToCart}
                className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingCart className="h-5 w-5" />
              </button>
              <Link
                to={`/products/${product._id}`}
                className="bg-white text-gray-800 p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="View details"
              >
                <Eye className="h-5 w-5" />
              </Link>
            </div>
          </div>
          {product.inStock ? (
            <div className="absolute top-2 right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
              In Stock
            </div>
          ) : (
            <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
              Made to Order
            </div>
          )}
        </div>
        <div className="p-4 flex-grow flex flex-col">
          <div className="flex items-center mb-1">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-3 w-3 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
              ))}
            </div>
            <span className="text-xs text-gray-500 ml-1">(4.0)</span>
          </div>
          <div className="mb-2">
            <span className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</span>
          </div>
          <h3 className="font-medium text-gray-900 mb-1 line-clamp-2 h-12">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-2">Model: {product.model}</p>
          <div className="mt-auto flex items-center justify-between">
            {/* <span className="text-lg font-bold text-gray-900">
              {product.price ? `$${product.price.toFixed(2)}` : "Request Quote"}
            </span> */}
            {product.frequency && (
              <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">{product.frequency} GHz</span>
            )}
          </div>
        </div>
      </Link>
      <motion.div
        className="px-4 pb-4"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          height: isHovered ? "auto" : 0,
        }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={handleAddToCart}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-2 rounded-md transition-colors flex items-center justify-center"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </button>
      </motion.div>
    </motion.div>
  )
}

export default ProductCard