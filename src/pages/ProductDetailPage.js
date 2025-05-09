// // // // // // "use client"

// // // // // // import { useState, useEffect } from "react"
// // // // // // import { useParams, Link } from "react-router-dom"
// // // // // // import { ShoppingCart, FileText, Download, Share2, ChevronRight, ChevronLeft } from "lucide-react"
// // // // // // import { useCart } from "../contexts/CartContext"
// // // // // // import { fetchProductById, fetchRelatedProducts } from "../services/api"
// // // // // // import ProductSpecsTable from "../components/products/ProductSpecsTable"
// // // // // // import RelatedProducts from "../components/products/RelatedProducts"

// // // // // // const ProductDetailPage = () => {
// // // // // //   const { category, id } = useParams()
// // // // // //   const [product, setProduct] = useState(null)
// // // // // //   const [relatedProducts, setRelatedProducts] = useState([])
// // // // // //   const [loading, setLoading] = useState(true)
// // // // // //   const [error, setError] = useState(null)
// // // // // //   const [quantity, setQuantity] = useState(1)
// // // // // //   const [activeTab, setActiveTab] = useState("description")
// // // // // //   const [activeImage, setActiveImage] = useState(0)
// // // // // //   const { addToCart } = useCart()

// // // // // //   useEffect(() => {
// // // // // //     const loadProduct = async () => {
// // // // // //       setLoading(true)
// // // // // //       try {
// // // // // //         const productData = await fetchProductById(id)
// // // // // //         setProduct(productData)

// // // // // //         // Load related products
// // // // // //         const related = await fetchRelatedProducts(category, id)
// // // // // //         setRelatedProducts(related)

// // // // // //         setError(null)
// // // // // //       } catch (err) {
// // // // // //         setError("Failed to load product details. Please try again later.")
// // // // // //         setProduct(null)
// // // // // //       } finally {
// // // // // //         setLoading(false)
// // // // // //       }
// // // // // //     }

// // // // // //     loadProduct()
// // // // // //     // Reset state when navigating between products
// // // // // //     setQuantity(1)
// // // // // //     setActiveTab("description")
// // // // // //     setActiveImage(0)
// // // // // //   }, [id, category])

// // // // // //   const handleAddToCart = () => {
// // // // // //     if (product) {
// // // // // //       addToCart({
// // // // // //         ...product,
// // // // // //         quantity,
// // // // // //       })
// // // // // //     }
// // // // // //   }

// // // // // //   const handleQuantityChange = (e) => {
// // // // // //     const value = Number.parseInt(e.target.value)
// // // // // //     if (value > 0) {
// // // // // //       setQuantity(value)
// // // // // //     }
// // // // // //   }

// // // // // //   const incrementQuantity = () => {
// // // // // //     setQuantity((prev) => prev + 1)
// // // // // //   }

// // // // // //   const decrementQuantity = () => {
// // // // // //     if (quantity > 1) {
// // // // // //       setQuantity((prev) => prev - 1)
// // // // // //     }
// // // // // //   }

// // // // // //   if (loading) {
// // // // // //     return (
// // // // // //       <div className="pt-24 pb-16 container mx-auto px-4">
// // // // // //         <div className="flex justify-center items-center h-64">
// // // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //     )
// // // // // //   }

// // // // // //   if (error || !product) {
// // // // // //     return (
// // // // // //       <div className="pt-24 pb-16 container mx-auto px-4">
// // // // // //         <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">{error || "Product not found"}</div>
// // // // // //         <Link to="/products" className="btn btn-primary">
// // // // // //           Back to Products
// // // // // //         </Link>
// // // // // //       </div>
// // // // // //     )
// // // // // //   }

// // // // // //   return (
// // // // // //     <div className="pt-24 pb-16">
// // // // // //       <div className="container mx-auto px-4">
// // // // // //         {/* Breadcrumb */}
// // // // // //         <div className="text-sm breadcrumbs mb-6">
// // // // // //           <ul className="flex items-center space-x-2">
// // // // // //             <li>
// // // // // //               <Link to="/" className="text-gray-500 hover:text-red-600">
// // // // // //                 Home
// // // // // //               </Link>
// // // // // //             </li>
// // // // // //             <li>
// // // // // //               <span className="text-gray-500">/</span>
// // // // // //             </li>
// // // // // //             <li>
// // // // // //               <Link to="/products" className="text-gray-500 hover:text-red-600">
// // // // // //                 Products
// // // // // //               </Link>
// // // // // //             </li>
// // // // // //             <li>
// // // // // //               <span className="text-gray-500">/</span>
// // // // // //             </li>
// // // // // //             <li>
// // // // // //               <Link to={`/products/${category}`} className="text-gray-500 hover:text-red-600">
// // // // // //                 {category
// // // // // //                   .split("-")
// // // // // //                   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// // // // // //                   .join(" ")}
// // // // // //               </Link>
// // // // // //             </li>
// // // // // //             <li>
// // // // // //               <span className="text-gray-500">/</span>
// // // // // //             </li>
// // // // // //             <li className="text-gray-900 font-medium truncate max-w-xs">{product.name}</li>
// // // // // //           </ul>
// // // // // //         </div>

// // // // // //         {/* Product Details */}
// // // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
// // // // // //           {/* Product Images */}
// // // // // //           <div>
// // // // // //             <div className="bg-white rounded-lg overflow-hidden mb-4 border">
// // // // // //               <img
// // // // // //                 src={product.images?.[activeImage] || "/images/placeholder-product.png"}
// // // // // //                 alt={product.name}
// // // // // //                 className="w-full h-80 object-contain p-4"
// // // // // //               />
// // // // // //             </div>
// // // // // //             {product.images && product.images.length > 1 && (
// // // // // //               <div className="flex space-x-2 overflow-x-auto pb-2">
// // // // // //                 {product.images.map((image, index) => (
// // // // // //                   <button
// // // // // //                     key={index}
// // // // // //                     onClick={() => setActiveImage(index)}
// // // // // //                     className={`border rounded-md overflow-hidden flex-shrink-0 ${activeImage === index ? "border-red-600" : "border-gray-200"
// // // // // //                       }`}
// // // // // //                   >
// // // // // //                     <img
// // // // // //                       src={image || "/placeholder.svg"}
// // // // // //                       alt={`${product.name} - view ${index + 1}`}
// // // // // //                       className="w-20 h-20 object-contain"
// // // // // //                     />
// // // // // //                   </button>
// // // // // //                 ))}
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>

// // // // // //           {/* Product Info */}
// // // // // //           <div>
// // // // // //             <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
// // // // // //             <p className="text-gray-600 mb-4">Model: {product.model}</p>

// // // // // //             {product.price ? (
// // // // // //               <div className="text-2xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</div>
// // // // // //             ) : (
// // // // // //               <div className="mb-6">
// // // // // //                 <span className="text-lg font-medium">Request Quote</span>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             <div className="mb-6">
// // // // // //               <h3 className="font-medium mb-2">Key Specifications:</h3>
// // // // // //               <ul className="grid grid-cols-2 gap-2">
// // // // // //                 {product.frequency && (
// // // // // //                   <li className="flex items-center text-sm">
// // // // // //                     <span className="w-32 text-gray-600">Frequency Range:</span>
// // // // // //                     <span className="font-medium">{product.frequency} GHz</span>
// // // // // //                   </li>
// // // // // //                 )}
// // // // // //                 {product.power && (
// // // // // //                   <li className="flex items-center text-sm">
// // // // // //                     <span className="w-32 text-gray-600">Power Rating:</span>
// // // // // //                     <span className="font-medium">{product.power} W</span>
// // // // // //                   </li>
// // // // // //                 )}
// // // // // //                 {product.vswr && (
// // // // // //                   <li className="flex items-center text-sm">
// // // // // //                     <span className="w-32 text-gray-600">VSWR:</span>
// // // // // //                     <span className="font-medium">{product.vswr}</span>
// // // // // //                   </li>
// // // // // //                 )}
// // // // // //                 {product.connector && (
// // // // // //                   <li className="flex items-center text-sm">
// // // // // //                     <span className="w-32 text-gray-600">Connector:</span>
// // // // // //                     <span className="font-medium">{product.connector}</span>
// // // // // //                   </li>
// // // // // //                 )}
// // // // // //               </ul>
// // // // // //             </div>

// // // // // //             <div className="mb-6">
// // // // // //               <div className="flex items-center mb-4">
// // // // // //                 <div className="flex items-center border border-gray-300 rounded-md">
// // // // // //                   <button onClick={decrementQuantity} className="px-3 py-2 border-r border-gray-300 hover:bg-gray-100">
// // // // // //                     <ChevronLeft className="h-4 w-4" />
// // // // // //                   </button>
// // // // // //                   <input
// // // // // //                     type="number"
// // // // // //                     min="1"
// // // // // //                     value={quantity}
// // // // // //                     onChange={handleQuantityChange}
// // // // // //                     className="w-16 text-center py-2 focus:outline-none"
// // // // // //                   />
// // // // // //                   <button onClick={incrementQuantity} className="px-3 py-2 border-l border-gray-300 hover:bg-gray-100">
// // // // // //                     <ChevronRight className="h-4 w-4" />
// // // // // //                   </button>
// // // // // //                 </div>
// // // // // //                 <div className="ml-4 text-sm text-gray-600">
// // // // // //                   {product.inStock ? (
// // // // // //                     <span className="text-green-600 font-medium">In Stock</span>
// // // // // //                   ) : (
// // // // // //                     <span className="text-orange-600 font-medium">Made to Order</span>
// // // // // //                   )}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <div className="flex flex-col sm:flex-row gap-4">
// // // // // //                 <button onClick={handleAddToCart} className="btn btn-primary flex items-center justify-center">
// // // // // //                   <ShoppingCart className="mr-2 h-5 w-5" />
// // // // // //                   Add to Cart
// // // // // //                 </button>
// // // // // //                 <Link to="/request" className="btn btn-outline">
// // // // // //                   Request Quote
// // // // // //                 </Link>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div className="flex flex-wrap gap-4 mb-6">
// // // // // //               {product.datasheet && (
// // // // // //                 <a
// // // // // //                   href={product.datasheet}
// // // // // //                   target="_blank"
// // // // // //                   rel="noopener noreferrer"
// // // // // //                   className="flex items-center text-sm text-gray-600 hover:text-red-600"
// // // // // //                 >
// // // // // //                   <Download className="h-4 w-4 mr-1" />
// // // // // //                   Download Datasheet
// // // // // //                 </a>
// // // // // //               )}
// // // // // //               <button className="flex items-center text-sm text-gray-600 hover:text-red-600">
// // // // // //                 <Share2 className="h-4 w-4 mr-1" />
// // // // // //                 Share Product
// // // // // //               </button>
// // // // // //               <a
// // // // // //                 href={`/contact?product=${product.id}`}
// // // // // //                 className="flex items-center text-sm text-gray-600 hover:text-red-600"
// // // // // //               >
// // // // // //                 <FileText className="h-4 w-4 mr-1" />
// // // // // //                 Technical Support
// // // // // //               </a>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Product Tabs */}
// // // // // //         <div className="mb-16">
// // // // // //           <div className="border-b border-gray-200">
// // // // // //             <nav className="flex space-x-8">
// // // // // //               <button
// // // // // //                 onClick={() => setActiveTab("description")}
// // // // // //                 className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "description"
// // // // // //                     ? "border-red-600 text-red-600"
// // // // // //                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // // // // //                   }`}
// // // // // //               >
// // // // // //                 Description
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => setActiveTab("specifications")}
// // // // // //                 className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "specifications"
// // // // // //                     ? "border-red-600 text-red-600"
// // // // // //                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // // // // //                   }`}
// // // // // //               >
// // // // // //                 Specifications
// // // // // //               </button>
// // // // // //               <button
// // // // // //                 onClick={() => setActiveTab("applications")}
// // // // // //                 className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "applications"
// // // // // //                     ? "border-red-600 text-red-600"
// // // // // //                     : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // // // // //                   }`}
// // // // // //               >
// // // // // //                 Applications
// // // // // //               </button>
// // // // // //             </nav>
// // // // // //           </div>

// // // // // //           <div className="py-6">
// // // // // //             {activeTab === "description" && (
// // // // // //               <div className="prose max-w-none">
// // // // // //                 <p>{product.description || "No description available for this product."}</p>
// // // // // //               </div>
// // // // // //             )}

// // // // // //             {activeTab === "specifications" && <ProductSpecsTable product={product} />}

// // // // // //             {activeTab === "applications" && (
// // // // // //               <div className="prose max-w-none">
// // // // // //                 <p>{product.applications || "Application information not available for this product."}</p>
// // // // // //               </div>
// // // // // //             )}
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         {/* Related Products */}
// // // // // //         {relatedProducts.length > 0 && (
// // // // // //           <div>
// // // // // //             <h2 className="text-2xl font-bold mb-6">Related Products</h2>
// // // // // //             <RelatedProducts products={relatedProducts} />
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </div>
// // // // // //     </div>
// // // // // //   )
// // // // // // }

// // // // // // export default ProductDetailPage



// // // // // "use client"

// // // // // import { useState, useEffect } from "react"
// // // // // import { useParams, Link } from "react-router-dom"
// // // // // import {
// // // // //   ShoppingCart,
// // // // //   FileText,
// // // // //   Download,
// // // // //   Share2,
// // // // //   ChevronRight,
// // // // //   ChevronLeft,
// // // // //   Star,
// // // // //   Check,
// // // // //   Info,
// // // // //   Truck,
// // // // // } from "lucide-react"
// // // // // import { useCart } from "../contexts/CartContext"
// // // // // import { fetchProductById, fetchRelatedProducts } from "../services/api"
// // // // // import ProductSpecsTable from "../components/products/ProductSpecsTable"
// // // // // import RelatedProducts from "../components/products/RelatedProducts"
// // // // // import { motion } from "framer-motion"

// // // // // const ProductDetailPage = () => {
// // // // //   const { category, id } = useParams()
// // // // //   const [product, setProduct] = useState(null)
// // // // //   const [relatedProducts, setRelatedProducts] = useState([])
// // // // //   const [loading, setLoading] = useState(true)
// // // // //   const [error, setError] = useState(null)
// // // // //   const [quantity, setQuantity] = useState(1)
// // // // //   const [activeTab, setActiveTab] = useState("description")
// // // // //   const [activeImage, setActiveImage] = useState(0)
// // // // //   const { addToCart } = useCart()
// // // // //   const [addedToCart, setAddedToCart] = useState(false)

// // // // //   useEffect(() => {
// // // // //     const loadProduct = async () => {
// // // // //       setLoading(true)
// // // // //       try {
// // // // //         const productData = await fetchProductById(id)
// // // // //         setProduct(productData)

// // // // //         // Load related products
// // // // //         const related = await fetchRelatedProducts(category, id)
// // // // //         setRelatedProducts(related)

// // // // //         setError(null)
// // // // //       } catch (err) {
// // // // //         setError("Failed to load product details. Please try again later.")
// // // // //         setProduct(null)
// // // // //       } finally {
// // // // //         setLoading(false)
// // // // //       }
// // // // //     }

// // // // //     loadProduct()
// // // // //     // Reset state when navigating between products
// // // // //     setQuantity(1)
// // // // //     setActiveTab("description")
// // // // //     setActiveImage(0)
// // // // //     setAddedToCart(false)
// // // // //   }, [id, category])

// // // // //   const handleAddToCart = () => {
// // // // //     if (product) {
// // // // //       addToCart({
// // // // //         ...product,
// // // // //         quantity,
// // // // //       })
// // // // //       setAddedToCart(true)

// // // // //       // Reset added to cart status after 3 seconds
// // // // //       setTimeout(() => {
// // // // //         setAddedToCart(false)
// // // // //       }, 3000)
// // // // //     }
// // // // //   }

// // // // //   const handleQuantityChange = (e) => {
// // // // //     const value = Number.parseInt(e.target.value)
// // // // //     if (value > 0) {
// // // // //       setQuantity(value)
// // // // //     }
// // // // //   }

// // // // //   const incrementQuantity = () => {
// // // // //     setQuantity((prev) => prev + 1)
// // // // //   }

// // // // //   const decrementQuantity = () => {
// // // // //     if (quantity > 1) {
// // // // //       setQuantity((prev) => prev - 1)
// // // // //     }
// // // // //   }

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="pt-24 pb-16 container mx-auto px-4">
// // // // //         <div className="flex justify-center items-center h-64">
// // // // //           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // // //         </div>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   if (error || !product) {
// // // // //     return (
// // // // //       <div className="pt-24 pb-16 container mx-auto px-4">
// // // // //         <div className="bg-red-100 text-red-700 p-4 rounded-lg mb-6">{error || "Product not found"}</div>
// // // // //         <Link to="/products" className="btn btn-primary">
// // // // //           Back to Products
// // // // //         </Link>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   return (
// // // // //     <div className="pt-24 pb-16">
// // // // //       <div className="container mx-auto px-4">
// // // // //         {/* Breadcrumb */}
// // // // //         <div className="text-sm breadcrumbs mb-6">
// // // // //           <ul className="flex items-center space-x-2">
// // // // //             <li>
// // // // //               <Link to="/" className="text-gray-500 hover:text-red-600">
// // // // //                 Home
// // // // //               </Link>
// // // // //             </li>
// // // // //             <li>
// // // // //               <span className="text-gray-500">/</span>
// // // // //             </li>
// // // // //             <li>
// // // // //               <Link to="/products" className="text-gray-500 hover:text-red-600">
// // // // //                 Products
// // // // //               </Link>
// // // // //             </li>
// // // // //             <li>
// // // // //               <span className="text-gray-500">/</span>
// // // // //             </li>
// // // // //             <li>
// // // // //               <Link to={`/products/${category}`} className="text-gray-500 hover:text-red-600">
// // // // //                 {category
// // // // //                   .split("-")
// // // // //                   .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
// // // // //                   .join(" ")}
// // // // //               </Link>
// // // // //             </li>
// // // // //             <li>
// // // // //               <span className="text-gray-500">/</span>
// // // // //             </li>
// // // // //             <li className="text-gray-900 font-medium truncate max-w-xs">{product.name}</li>
// // // // //           </ul>
// // // // //         </div>

// // // // //         {/* Product Details */}
// // // // //         <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
// // // // //           {/* Product Images */}
// // // // //           <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
// // // // //             <div className="bg-white rounded-lg overflow-hidden mb-4 border">
// // // // //               <div className="relative h-80 flex items-center justify-center bg-gray-50 p-8">
// // // // //                 <img
// // // // //                   src={product.images?.[activeImage] || "/images/placeholder-product.png"}
// // // // //                   alt={product.name}
// // // // //                   className="max-h-full max-w-full object-contain"
// // // // //                 />

// // // // //                 {product.images && product.images.length > 1 && (
// // // // //                   <>
// // // // //                     <button
// // // // //                       onClick={() => setActiveImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1))}
// // // // //                       className="absolute left-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
// // // // //                       aria-label="Previous image"
// // // // //                     >
// // // // //                       <ChevronLeft className="h-5 w-5 text-gray-700" />
// // // // //                     </button>
// // // // //                     <button
// // // // //                       onClick={() => setActiveImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1))}
// // // // //                       className="absolute right-2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
// // // // //                       aria-label="Next image"
// // // // //                     >
// // // // //                       <ChevronRight className="h-5 w-5 text-gray-700" />
// // // // //                     </button>
// // // // //                   </>
// // // // //                 )}
// // // // //               </div>
// // // // //             </div>
// // // // //             {product.images && product.images.length > 1 && (
// // // // //               <div className="flex space-x-2 overflow-x-auto pb-2">
// // // // //                 {product.images.map((image, index) => (
// // // // //                   <button
// // // // //                     key={index}
// // // // //                     onClick={() => setActiveImage(index)}
// // // // //                     className={`border rounded-md overflow-hidden flex-shrink-0 transition-all ${activeImage === index
// // // // //                       ? "border-red-600 ring-2 ring-red-200"
// // // // //                       : "border-gray-200 hover:border-gray-300"
// // // // //                       }`}
// // // // //                   >
// // // // //                     <img
// // // // //                       src={image || "/placeholder.svg?height=80&width=80"}
// // // // //                       alt={`${product.name} - view ${index + 1}`}
// // // // //                       className="w-20 h-20 object-contain"
// // // // //                     />
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //             )}
// // // // //           </motion.div>

// // // // //           {/* Product Info */}
// // // // //           <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
// // // // //             <div className="bg-white rounded-lg shadow-sm p-6">
// // // // //               <div className="mb-4">
// // // // //                 <div className="flex items-center mb-2">
// // // // //                   <span className="text-xs px-2 py-1 bg-gray-100 text-gray-800 rounded-full mr-2">
// // // // //                     {category.charAt(0).toUpperCase() + category.slice(1)}
// // // // //                   </span>
// // // // //                   <div className="flex items-center">
// // // // //                     <div className="flex">
// // // // //                       {[...Array(5)].map((_, i) => (
// // // // //                         <Star
// // // // //                           key={i}
// // // // //                           className={`h-4 w-4 ${i < 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
// // // // //                         />
// // // // //                       ))}
// // // // //                     </div>
// // // // //                     <span className="text-xs text-gray-500 ml-1">(4.0)</span>
// // // // //                   </div>
// // // // //                 </div>
// // // // //                 <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
// // // // //                 <p className="text-gray-600 mb-4">
// // // // //                   Model: <span className="font-medium">{product.model}</span>
// // // // //                 </p>
// // // // //               </div>

// // // // //               {product.price ? (
// // // // //                 <div className="text-3xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</div>
// // // // //               ) : (
// // // // //                 <div className="mb-6">
// // // // //                   <span className="text-xl font-medium">Request Quote</span>
// // // // //                 </div>
// // // // //               )}

// // // // //               <div className="mb-6">
// // // // //                 <h3 className="font-medium mb-3">Key Specifications:</h3>
// // // // //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 bg-gray-50 p-4 rounded-lg">
// // // // //                   {product.frequency && (
// // // // //                     <div className="flex items-center">
// // // // //                       <Check className="h-4 w-4 text-green-500 mr-2" />
// // // // //                       <span className="text-sm">
// // // // //                         <span className="text-gray-600">Frequency Range:</span>{" "}
// // // // //                         <span className="font-medium">{product.frequency} GHz</span>
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   )}
// // // // //                   {product.power && (
// // // // //                     <div className="flex items-center">
// // // // //                       <Check className="h-4 w-4 text-green-500 mr-2" />
// // // // //                       <span className="text-sm">
// // // // //                         <span className="text-gray-600">Power Rating:</span>{" "}
// // // // //                         <span className="font-medium">{product.power} W</span>
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   )}
// // // // //                   {product.vswr && (
// // // // //                     <div className="flex items-center">
// // // // //                       <Check className="h-4 w-4 text-green-500 mr-2" />
// // // // //                       <span className="text-sm">
// // // // //                         <span className="text-gray-600">VSWR:</span> <span className="font-medium">{product.vswr}</span>
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   )}
// // // // //                   {product.connector && (
// // // // //                     <div className="flex items-center">
// // // // //                       <Check className="h-4 w-4 text-green-500 mr-2" />
// // // // //                       <span className="text-sm">
// // // // //                         <span className="text-gray-600">Connector:</span>{" "}
// // // // //                         <span className="font-medium">{product.connector}</span>
// // // // //                       </span>
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="mb-6">
// // // // //                 <div className="flex items-center mb-4">
// // // // //                   <div className="flex items-center border border-gray-300 rounded-md">
// // // // //                     <button
// // // // //                       onClick={decrementQuantity}
// // // // //                       className="px-3 py-2 border-r border-gray-300 hover:bg-gray-100 transition-colors"
// // // // //                     >
// // // // //                       <ChevronLeft className="h-4 w-4" />
// // // // //                     </button>
// // // // //                     <input
// // // // //                       type="number"
// // // // //                       min="1"
// // // // //                       value={quantity}
// // // // //                       onChange={handleQuantityChange}
// // // // //                       className="w-16 text-center py-2 focus:outline-none"
// // // // //                     />
// // // // //                     <button
// // // // //                       onClick={incrementQuantity}
// // // // //                       className="px-3 py-2 border-l border-gray-300 hover:bg-gray-100 transition-colors"
// // // // //                     >
// // // // //                       <ChevronRight className="h-4 w-4" />
// // // // //                     </button>
// // // // //                   </div>
// // // // //                   <div className="ml-4 flex items-center">
// // // // //                     {product.inStock ? (
// // // // //                       <span className="text-green-600 font-medium flex items-center">
// // // // //                         <Check className="h-4 w-4 mr-1" />
// // // // //                         In Stock
// // // // //                       </span>
// // // // //                     ) : (
// // // // //                       <span className="text-orange-600 font-medium flex items-center">
// // // // //                         <Info className="h-4 w-4 mr-1" />
// // // // //                         Made to Order
// // // // //                       </span>
// // // // //                     )}
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 <div className="flex flex-col sm:flex-row gap-4">
// // // // //                   <button
// // // // //                     onClick={handleAddToCart}
// // // // //                     className={`btn ${addedToCart ? "bg-green-600 hover:bg-green-700" : "btn-primary"} flex items-center justify-center`}
// // // // //                     disabled={addedToCart}
// // // // //                   >
// // // // //                     {addedToCart ? (
// // // // //                       <>
// // // // //                         <Check className="mr-2 h-5 w-5" />
// // // // //                         Added to Cart
// // // // //                       </>
// // // // //                     ) : (
// // // // //                       <>
// // // // //                         <ShoppingCart className="mr-2 h-5 w-5" />
// // // // //                         Add to Cart
// // // // //                       </>
// // // // //                     )}
// // // // //                   </button>
// // // // //                   <Link to="/request" className="btn btn-outline">
// // // // //                     Request Quote
// // // // //                   </Link>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="flex flex-wrap gap-4 mb-6 border-t border-b border-gray-200 py-4">
// // // // //                 {product.datasheet && (
// // // // //                   <a
// // // // //                     href={product.datasheet}
// // // // //                     target="_blank"
// // // // //                     rel="noopener noreferrer"
// // // // //                     className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors"
// // // // //                   >
// // // // //                     <Download className="h-4 w-4 mr-1" />
// // // // //                     Download Datasheet
// // // // //                   </a>
// // // // //                 )}
// // // // //                 <button className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors">
// // // // //                   <Share2 className="h-4 w-4 mr-1" />
// // // // //                   Share Product
// // // // //                 </button>
// // // // //                 <a
// // // // //                   href={`/contact?product=${product.id}`}
// // // // //                   className="flex items-center text-sm text-gray-600 hover:text-red-600 transition-colors"
// // // // //                 >
// // // // //                   <FileText className="h-4 w-4 mr-1" />
// // // // //                   Technical Support
// // // // //                 </a>
// // // // //               </div>

// // // // //               <div className="bg-gray-50 p-4 rounded-lg">
// // // // //                 <div className="flex items-center text-sm text-gray-600 mb-2">
// // // // //                   <Truck className="h-4 w-4 mr-2 text-gray-500" />
// // // // //                   <span>Free shipping on orders over $500</span>
// // // // //                 </div>
// // // // //                 <div className="flex items-center text-sm text-gray-600">
// // // // //                   <Info className="h-4 w-4 mr-2 text-gray-500" />
// // // // //                   <span>
// // // // //                     Need help?{" "}
// // // // //                     <a href="/contact" className="text-red-600 hover:underline">
// // // // //                       Contact our team
// // // // //                     </a>
// // // // //                   </span>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </div>

// // // // //         {/* Product Tabs */}
// // // // //         <div className="mb-16">
// // // // //           <div className="border-b border-gray-200">
// // // // //             <nav className="flex space-x-8">
// // // // //               <button
// // // // //                 onClick={() => setActiveTab("description")}
// // // // //                 className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "description"
// // // // //                   ? "border-red-600 text-red-600"
// // // // //                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // // // //                   }`}
// // // // //               >
// // // // //                 Description
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => setActiveTab("specifications")}
// // // // //                 className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "specifications"
// // // // //                   ? "border-red-600 text-red-600"
// // // // //                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // // // //                   }`}
// // // // //               >
// // // // //                 Specifications
// // // // //               </button>
// // // // //               <button
// // // // //                 onClick={() => setActiveTab("applications")}
// // // // //                 className={`py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "applications"
// // // // //                   ? "border-red-600 text-red-600"
// // // // //                   : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
// // // // //                   }`}
// // // // //               >
// // // // //                 Applications
// // // // //               </button>
// // // // //             </nav>
// // // // //           </div>

// // // // //           <div className="py-6">
// // // // //             {activeTab === "description" && (
// // // // //               <motion.div
// // // // //                 className="prose max-w-none"
// // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ duration: 0.3 }}
// // // // //               >
// // // // //                 <p>{product.description || "No description available for this product."}</p>
// // // // //               </motion.div>
// // // // //             )}

// // // // //             {activeTab === "specifications" && (
// // // // //               <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
// // // // //                 <ProductSpecsTable product={product} />
// // // // //               </motion.div>
// // // // //             )}

// // // // //             {activeTab === "applications" && (
// // // // //               <motion.div
// // // // //                 className="prose max-w-none"
// // // // //                 initial={{ opacity: 0, y: 20 }}
// // // // //                 animate={{ opacity: 1, y: 0 }}
// // // // //                 transition={{ duration: 0.3 }}
// // // // //               >
// // // // //                 <p>{product.applications || "Application information not available for this product."}</p>
// // // // //               </motion.div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Related Products */}
// // // // //         {relatedProducts.length > 0 && (
// // // // //           <div>
// // // // //             <h2 className="text-2xl font-bold mb-6">Related Products</h2>
// // // // //             <RelatedProducts products={relatedProducts} />
// // // // //           </div>
// // // // //         )}
// // // // //       </div>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default ProductDetailPage

// // // // // "use client"

// // // // // import { useState, useEffect } from "react"
// // // // // import { useParams, Link } from "react-router-dom"
// // // // // import { useCart } from "../contexts/CartContext"
// // // // // import ProductSpecsTable from "../components/products/ProductSpecsTable"
// // // // // import RelatedProducts from "../components/products/RelatedProducts"

// // // // // const ProductDetailPage = () => {
// // // // //   const { productSlug } = useParams()
// // // // //   const { addToCart } = useCart()
// // // // //   const [product, setProduct] = useState(null)
// // // // //   const [loading, setLoading] = useState(true)
// // // // //   const [error, setError] = useState(null)
// // // // //   const [quantity, setQuantity] = useState(1)
// // // // //   const [activeTab, setActiveTab] = useState("description")
// // // // //   const [activeImage, setActiveImage] = useState(0)

// // // // //   // Mock data for demonstration
// // // // //   const mockProducts = [
// // // // //     {
// // // // //       id: 1,
// // // // //       name: "WR-90 Straight Waveguide Section",
// // // // //       slug: "wr-90-straight-waveguide-section",
// // // // //       category: "waveguide-straight",
// // // // //       categoryName: "Waveguide Straight",
// // // // //       images: [
// // // // //         "/images/waveguide-components/waveguide-straight.jpg",
// // // // //         "/images/waveguide-components/waveguide-straight.jpg",
// // // // //         "/images/waveguide-components/waveguide-straight.jpg",
// // // // //       ],
// // // // //       price: 195.0,
// // // // //       frequency: "8.2 - 12.4 GHz",
// // // // //       power: "1000W",
// // // // //       connector: "UG-39/U",
// // // // //       description:
// // // // //         "Precision machined WR-90 straight waveguide section for X-band applications. Manufactured from high-quality aluminum with excellent surface finish for low insertion loss and high power handling capability.",
// // // // //       specifications: {
// // // // //         "Waveguide Size": "WR-90",
// // // // //         "Frequency Range": "8.2 - 12.4 GHz",
// // // // //         "Flange Type": "UG-39/U",
// // // // //         Material: "Aluminum",
// // // // //         Finish: "Iridite",
// // // // //         Length: "6 inches (152.4 mm)",
// // // // //         VSWR: "1.05:1 max",
// // // // //         "Insertion Loss": "0.1 dB max",
// // // // //         "Power Handling": "1000W CW",
// // // // //         "Temperature Range": "-55°C to +125°C",
// // // // //       },
// // // // //       applications: [
// // // // //         "Satellite communications",
// // // // //         "Radar systems",
// // // // //         "Test and measurement equipment",
// // // // //         "Military communications",
// // // // //         "Research and development",
// // // // //       ],
// // // // //       features: [
// // // // //         "Low insertion loss",
// // // // //         "High power handling capability",
// // // // //         "Excellent VSWR performance",
// // // // //         "Precision machined",
// // // // //         "Compatible with standard flanges",
// // // // //       ],
// // // // //       inStock: true,
// // // // //       leadTime: "1-2 weeks",
// // // // //       minOrderQuantity: 1,
// // // // //     },
// // // // //     {
// // // // //       id: 7,
// // // // //       name: "WR-90 E-Plane Bend",
// // // // //       slug: "wr-90-e-plane-bend",
// // // // //       category: "waveguide-bend",
// // // // //       categoryName: "Waveguide Bend",
// // // // //       images: [
// // // // //         "/images/waveguide-components/waveguide-bend.jpg",
// // // // //         "/images/waveguide-components/waveguide-bend.jpg",
// // // // //         "/images/waveguide-components/waveguide-bend.jpg",
// // // // //       ],
// // // // //       price: 245.0,
// // // // //       frequency: "8.2 - 12.4 GHz",
// // // // //       power: "1000W",
// // // // //       connector: "UG-39/U",
// // // // //       description:
// // // // //         "WR-90 E-plane 90° bend for X-band applications. Designed for optimal performance with minimal signal degradation around corners in waveguide systems.",
// // // // //       specifications: {
// // // // //         "Waveguide Size": "WR-90",
// // // // //         "Frequency Range": "8.2 - 12.4 GHz",
// // // // //         "Flange Type": "UG-39/U",
// // // // //         Material: "Aluminum",
// // // // //         Finish: "Iridite",
// // // // //         "Bend Angle": "90 degrees",
// // // // //         "Bend Plane": "E-Plane",
// // // // //         VSWR: "1.10:1 max",
// // // // //         "Insertion Loss": "0.15 dB max",
// // // // //         "Power Handling": "1000W CW",
// // // // //         "Temperature Range": "-55°C to +125°C",
// // // // //       },
// // // // //       applications: [
// // // // //         "Satellite communications",
// // // // //         "Radar systems",
// // // // //         "Space-constrained installations",
// // // // //         "Military communications",
// // // // //         "Research and development",
// // // // //       ],
// // // // //       features: [
// // // // //         "Low VSWR",
// // // // //         "Minimal insertion loss",
// // // // //         "Precision machined",
// // // // //         "Compatible with standard flanges",
// // // // //         "Compact design",
// // // // //       ],
// // // // //       inStock: true,
// // // // //       leadTime: "1-2 weeks",
// // // // //       minOrderQuantity: 1,
// // // // //     },
// // // // //   ]
// // // // //   useEffect(() => {
// // // // //     const fetchProduct = async () => {
// // // // //       setLoading(true)
// // // // //       try {
// // // // //         // Simulated fetch from mock data
// // // // //         const foundProduct = mockProducts.find((p) => p.slug === productSlug)
// // // // //         setProduct(foundProduct || mockProducts[0]) // Always fallback to first demo product
// // // // //         setError(null)
// // // // //       } catch (err) {
// // // // //         console.error("Error fetching product:", err)
// // // // //         setError("Failed to load product. Please try again later.")
// // // // //       } finally {
// // // // //         setLoading(false)
// // // // //       }
// // // // //     }

// // // // //     fetchProduct()
// // // // //     setActiveImage(0)
// // // // //   }, [productSlug])

// // // // //   // useEffect(() => {
// // // // //   //   const fetchProduct = async () => {
// // // // //   //     setLoading(true)
// // // // //   //     try {
// // // // //   //       // In a real application, you would fetch from your API
// // // // //   //       // const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${productSlug}`);
// // // // //   //       // setProduct(response.data);

// // // // //   //       // Using mock data for demonstration
// // // // //   //       const foundProduct = mockProducts.find((p) => p.slug === productSlug)
// // // // //   //       if (foundProduct) {
// // // // //   //         setProduct(foundProduct)
// // // // //   //       } else {
// // // // //   //         setError("Product not found")
// // // // //   //       }

// // // // //   //       setLoading(false)
// // // // //   //     } catch (err) {
// // // // //   //       console.error("Error fetching product:", err)
// // // // //   //       setError("Failed to load product. Please try again later.")
// // // // //   //       setLoading(false)
// // // // //   //     }
// // // // //   //   }

// // // // //   //   fetchProduct()
// // // // //   //   // Reset active image when product changes
// // // // //   //   setActiveImage(0)
// // // // //   // }, [productSlug])

// // // // //   const handleQuantityChange = (e) => {
// // // // //     const value = Number.parseInt(e.target.value)
// // // // //     if (value > 0) {
// // // // //       setQuantity(value)
// // // // //     }
// // // // //   }

// // // // //   const handleAddToCart = () => {
// // // // //     if (product) {
// // // // //       addToCart({
// // // // //         id: product.id,
// // // // //         name: product.name,
// // // // //         price: product.price,
// // // // //         image: product.images[0],
// // // // //         quantity,
// // // // //         category: product.categoryName,
// // // // //       })

// // // // //       // Show success message or notification here
// // // // //       alert(`Added ${quantity} ${product.name} to cart`)
// // // // //     }
// // // // //   }

// // // // //   if (loading) {
// // // // //     return (
// // // // //       <div className="container mx-auto px-4 py-16">
// // // // //         <div className="text-center">
// // // // //           <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-900 border-r-transparent"></div>
// // // // //           <p className="mt-2 text-gray-600">Loading product details...</p>
// // // // //         </div>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   if (error || !product) {
// // // // //     return (
// // // // //       <div className="container mx-auto px-4 py-16">
// // // // //         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
// // // // //           <p>{error || "Product not found"}</p>
// // // // //         </div>
// // // // //         <div className="mt-6">
// // // // //           <Link
// // // // //             to="/products"
// // // // //             className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800"
// // // // //           >
// // // // //             Back to Products
// // // // //           </Link>
// // // // //         </div>
// // // // //       </div>
// // // // //     )
// // // // //   }

// // // // //   return (
// // // // //     <div className="container mx-auto px-4 py-8">
// // // // //       {/* Breadcrumb */}
// // // // //       <div className="text-sm text-gray-500 mb-6">
// // // // //         <Link to="/" className="hover:text-blue-900">
// // // // //           Home
// // // // //         </Link>
// // // // //         <span className="mx-2">/</span>
// // // // //         <Link to="/products" className="hover:text-blue-900">
// // // // //           Products
// // // // //         </Link>
// // // // //         <span className="mx-2">/</span>
// // // // //         <Link to={`/products/category/${product.category}`} className="hover:text-blue-900">
// // // // //           {product.categoryName}
// // // // //         </Link>
// // // // //         <span className="mx-2">/</span>
// // // // //         <span className="text-gray-700">{product.name}</span>
// // // // //       </div>

// // // // //       <div className="bg-white rounded-lg shadow-md overflow-hidden">
// // // // //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
// // // // //           {/* Product Images */}
// // // // //           <div>
// // // // //             <div className="mb-4 rounded-lg overflow-hidden border border-gray-200">
// // // // //               <img
// // // // //                 src={product.images[activeImage] || "/placeholder.svg"}
// // // // //                 alt={product.name}
// // // // //                 className="w-full h-80 object-contain"
// // // // //               />
// // // // //             </div>
// // // // //             <div className="grid grid-cols-3 gap-2">
// // // // //               {product.images.map((image, index) => (
// // // // //                 <button
// // // // //                   key={index}
// // // // //                   onClick={() => setActiveImage(index)}
// // // // //                   className={`border rounded-md overflow-hidden ${activeImage === index ? "border-blue-900" : "border-gray-200"
// // // // //                     }`}
// // // // //                 >
// // // // //                   <img
// // // // //                     src={image || "/placeholder.svg"}
// // // // //                     alt={`${product.name} - View ${index + 1}`}
// // // // //                     className="w-full h-20 object-cover"
// // // // //                   />
// // // // //                 </button>
// // // // //               ))}
// // // // //             </div>
// // // // //           </div>

// // // // //           {/* Product Info */}
// // // // //           <div>
// // // // //             <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
// // // // //             <div className="text-sm text-gray-500 mb-4">{product.categoryName}</div>

// // // // //             <div className="text-2xl font-bold text-gray-900 mb-4">${product.price.toFixed(2)}</div>

// // // // //             <div className="mb-6">
// // // // //               <div className="flex items-center mb-2">
// // // // //                 <span className="text-gray-700 font-medium mr-2">Availability:</span>
// // // // //                 {product.inStock ? (
// // // // //                   <span className="text-green-600 font-medium">In Stock</span>
// // // // //                 ) : (
// // // // //                   <span className="text-gray-600">Made to Order ({product.leadTime})</span>
// // // // //                 )}
// // // // //               </div>

// // // // //               <div className="flex items-center mb-2">
// // // // //                 <span className="text-gray-700 font-medium mr-2">Frequency Range:</span>
// // // // //                 <span className="text-gray-600">{product.frequency}</span>
// // // // //               </div>

// // // // //               <div className="flex items-center mb-2">
// // // // //                 <span className="text-gray-700 font-medium mr-2">Power Rating:</span>
// // // // //                 <span className="text-gray-600">{product.power}</span>
// // // // //               </div>

// // // // //               <div className="flex items-center mb-4">
// // // // //                 <span className="text-gray-700 font-medium mr-2">Flange Type:</span>
// // // // //                 <span className="text-gray-600">{product.connector}</span>
// // // // //               </div>
// // // // //             </div>

// // // // //             <div className="mb-6">
// // // // //               <div className="flex items-center mb-4">
// // // // //                 <label htmlFor="quantity" className="text-gray-700 font-medium mr-4">
// // // // //                   Quantity:
// // // // //                 </label>
// // // // //                 <div className="flex items-center">
// // // // //                   <button
// // // // //                     onClick={() => quantity > 1 && setQuantity(quantity - 1)}
// // // // //                     className="bg-gray-200 text-gray-600 hover:bg-gray-300 h-10 w-10 rounded-l-md flex items-center justify-center"
// // // // //                   >
// // // // //                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
// // // // //                     </svg>
// // // // //                   </button>
// // // // //                   <input
// // // // //                     type="number"
// // // // //                     id="quantity"
// // // // //                     value={quantity}
// // // // //                     onChange={handleQuantityChange}
// // // // //                     min="1"
// // // // //                     className="h-10 w-16 border-y border-gray-300 text-center"
// // // // //                   />
// // // // //                   <button
// // // // //                     onClick={() => setQuantity(quantity + 1)}
// // // // //                     className="bg-gray-200 text-gray-600 hover:bg-gray-300 h-10 w-10 rounded-r-md flex items-center justify-center"
// // // // //                   >
// // // // //                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
// // // // //                     </svg>
// // // // //                   </button>
// // // // //                 </div>
// // // // //               </div>

// // // // //               <div className="flex flex-col sm:flex-row gap-4">
// // // // //                 <button
// // // // //                   onClick={handleAddToCart}
// // // // //                   className="flex-1 bg-blue-900 hover:bg-blue-800 text-white py-3 px-6 rounded-md font-semibold transition duration-300 flex items-center justify-center"
// // // // //                 >
// // // // //                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                     <path
// // // // //                       strokeLinecap="round"
// // // // //                       strokeLinejoin="round"
// // // // //                       strokeWidth="2"
// // // // //                       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
// // // // //                     />
// // // // //                   </svg>
// // // // //                   Add to Cart
// // // // //                 </button>
// // // // //                 <Link
// // // // //                   to="/request"
// // // // //                   state={{ product: product }}
// // // // //                   className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-semibold transition duration-300 flex items-center justify-center"
// // // // //                 >
// // // // //                   <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // // //                     <path
// // // // //                       strokeLinecap="round"
// // // // //                       strokeLinejoin="round"
// // // // //                       strokeWidth="2"
// // // // //                       d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
// // // // //                     />
// // // // //                   </svg>
// // // // //                   Request Quote
// // // // //                 </Link>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>

// // // // //         {/* Product Tabs */}
// // // // //         <div className="border-t border-gray-200">
// // // // //           <div className="flex border-b border-gray-200">
// // // // //             <button
// // // // //               onClick={() => setActiveTab("description")}
// // // // //               className={`py-4 px-6 font-medium text-sm focus:outline-none ${activeTab === "description"
// // // // //                 ? "text-blue-900 border-b-2 border-blue-900"
// // // // //                 : "text-gray-500 hover:text-gray-700"
// // // // //                 }`}
// // // // //             >
// // // // //               Description
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => setActiveTab("specifications")}
// // // // //               className={`py-4 px-6 font-medium text-sm focus:outline-none ${activeTab === "specifications"
// // // // //                 ? "text-blue-900 border-b-2 border-blue-900"
// // // // //                 : "text-gray-500 hover:text-gray-700"
// // // // //                 }`}
// // // // //             >
// // // // //               Specifications
// // // // //             </button>
// // // // //             <button
// // // // //               onClick={() => setActiveTab("applications")}
// // // // //               className={`py-4 px-6 font-medium text-sm focus:outline-none ${activeTab === "applications"
// // // // //                 ? "text-blue-900 border-b-2 border-blue-900"
// // // // //                 : "text-gray-500 hover:text-gray-700"
// // // // //                 }`}
// // // // //             >
// // // // //               Applications
// // // // //             </button>
// // // // //           </div>

// // // // //           <div className="p-6">
// // // // //             {activeTab === "description" && (
// // // // //               <div>
// // // // //                 <p className="text-gray-700 mb-4">{product.description}</p>
// // // // //                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Key Features</h3>
// // // // //                 <ul className="list-disc pl-5 text-gray-700 space-y-1">
// // // // //                   {product.features.map((feature, index) => (
// // // // //                     <li key={index}>{feature}</li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             )}

// // // // //             {activeTab === "specifications" && <ProductSpecsTable specifications={product.specifications} />}

// // // // //             {activeTab === "applications" && (
// // // // //               <div>
// // // // //                 <h3 className="text-lg font-semibold text-gray-800 mb-2">Recommended Applications</h3>
// // // // //                 <ul className="list-disc pl-5 text-gray-700 space-y-1">
// // // // //                   {product.applications.map((application, index) => (
// // // // //                     <li key={index}>{application}</li>
// // // // //                   ))}
// // // // //                 </ul>
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Related Products */}
// // // // //       <section className="mt-12">
// // // // //         <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Products</h2>
// // // // //         <RelatedProducts currentProductId={product.id} category={product.category} />
// // // // //       </section>
// // // // //     </div>
// // // // //   )
// // // // // }

// // // // // export default ProductDetailPage


// // // // "use client"

// // // // import { useState, useEffect } from "react"
// // // // import { useParams, Link } from "react-router-dom"
// // // // import { useCart } from "../contexts/CartContext"
// // // // import ProductSpecsTable from "../components/products/ProductSpecsTable"
// // // // import RelatedProducts from "../components/products/RelatedProducts"

// // // // const ProductDetailPage = () => {
// // // //   const { productSlug } = useParams()
// // // //   const { addToCart } = useCart()
// // // //   const [product, setProduct] = useState(null)
// // // //   const [loading, setLoading] = useState(true)
// // // //   const [error, setError] = useState(null)
// // // //   const [quantity, setQuantity] = useState(1)
// // // //   const [activeTab, setActiveTab] = useState("description")
// // // //   const [activeImage, setActiveImage] = useState(0)
// // // //   const [showNotification, setShowNotification] = useState(false)

// // // //   // Mock data for demonstration
// // // //   const mockProducts = [
// // // //     {
// // // //       id: 1,
// // // //       name: "WR-90 Straight Waveguide Section",
// // // //       slug: "wr-90-straight-waveguide-section",
// // // //       category: "waveguide-straight",
// // // //       categoryName: "Waveguide Straight",
// // // //       images: [
// // // //         "/images/waveguide-components/waveguide-straight.jpg",
// // // //         "/images/waveguide-components/waveguide-straight.jpg",
// // // //         "/images/waveguide-components/waveguide-straight.jpg",
// // // //       ],
// // // //       price: 195.0,
// // // //       frequency: "8.2 - 12.4 GHz",
// // // //       power: "1000W",
// // // //       connector: "N/7/16,L30",
// // // //       description:
// // // //         "Precision machined WR-90 straight waveguide section for X-band applications. Manufactured from high-quality aluminum with excellent surface finish for low insertion loss and high power handling capability.",
// // // //       specifications: {
// // // //         "Waveguide Size": "WR-90",
// // // //         "Frequency Range": "8.2 - 12.4 GHz",
// // // //         "Flange Type": "N/7/16,L30",
// // // //         Material: "Aluminum",
// // // //         Finish: "Iridite",
// // // //         Length: "6 inches (152.4 mm)",
// // // //         VSWR: "1.05:1 max",
// // // //         "Insertion Loss": "0.1 dB max",
// // // //         "Power Handling": "1000W CW",
// // // //         "Temperature Range": "-55°C to +125°C",
// // // //       },
// // // //       applications: [
// // // //         "Satellite communications",
// // // //         "Radar systems",
// // // //         "Test and measurement equipment",
// // // //         "Military communications",
// // // //         "Research and development",
// // // //       ],
// // // //       features: [
// // // //         "Low insertion loss",
// // // //         "High power handling capability",
// // // //         "Excellent VSWR performance",
// // // //         "Precision machined",
// // // //         "Compatible with standard flanges",
// // // //       ],
// // // //       inStock: true,
// // // //       leadTime: "1-2 weeks",
// // // //       minOrderQuantity: 1,
// // // //     },
// // // //     {
// // // //       id: 7,
// // // //       name: "WR-90 E-Plane Bend",
// // // //       slug: "wr-90-e-plane-bend",
// // // //       category: "waveguide-bend",
// // // //       categoryName: "Waveguide Bend",
// // // //       images: [
// // // //         "/images/waveguide-components/waveguide-bend.jpg",
// // // //         "/images/waveguide-components/waveguide-bend.jpg",
// // // //         "/images/waveguide-components/waveguide-bend.jpg",
// // // //       ],
// // // //       price: 245.0,
// // // //       frequency: "8.2 - 12.4 GHz",
// // // //       power: "1000W",
// // // //       connector: "N/7/16,L30",
// // // //       description:
// // // //         "WR-90 E-plane 90° bend for X-band applications. Designed for optimal performance with minimal signal degradation around corners in waveguide systems.",
// // // //       specifications: {
// // // //         "Waveguide Size": "WR-90",
// // // //         "Frequency Range": "8.2 - 12.4 GHz",
// // // //         "Flange Type": "N/7/16,L30",
// // // //         Material: "Aluminum",
// // // //         Finish: "Iridite",
// // // //         "Bend Angle": "90 degrees",
// // // //         "Bend Plane": "E-Plane",
// // // //         VSWR: "1.10:1 max",
// // // //         "Insertion Loss": "0.15 dB max",
// // // //         "Power Handling": "1000W CW",
// // // //         "Temperature Range": "-55°C to +125°C",
// // // //       },
// // // //       applications: [
// // // //         "Satellite communications",
// // // //         "Radar systems",
// // // //         "Space-constrained installations",
// // // //         "Military communications",
// // // //         "Research and development",
// // // //       ],
// // // //       features: [
// // // //         "Low VSWR",
// // // //         "Minimal insertion loss",
// // // //         "Precision machined",
// // // //         "Compatible with standard flanges",
// // // //         "Compact design",
// // // //       ],
// // // //       inStock: true,
// // // //       leadTime: "1-2 weeks",
// // // //       minOrderQuantity: 1,
// // // //     },
// // // //   ]

// // // //   // Fallback product for related products
// // // //   const dummyRelatedProduct = {
// // // //     id: 99,
// // // //     name: "WR-90 Waveguide Termination",
// // // //     slug: "wr-90-waveguide-termination",
// // // //     category: "waveguide-termination",
// // // //     categoryName: "Waveguide Termination",
// // // //     images: [
// // // //       "/images/waveguide-components/waveguide-termination.jpg"
// // // //     ],
// // // //     price: 175.0,
// // // //     frequency: "8.2 - 12.4 GHz",
// // // //     inStock: true
// // // //   }

// // // //   useEffect(() => {
// // // //     const fetchProduct = async () => {
// // // //       setLoading(true)
// // // //       try {
// // // //         // Simulated fetch from mock data
// // // //         const foundProduct = mockProducts.find((p) => p.slug === productSlug)
// // // //         setProduct(foundProduct || mockProducts[0]) // Always fallback to first demo product
// // // //         setError(null)
// // // //       } catch (err) {
// // // //         console.error("Error fetching product:", err)
// // // //         setError("Failed to load product. Please try again later.")
// // // //       } finally {
// // // //         setLoading(false)
// // // //       }
// // // //     }

// // // //     fetchProduct()
// // // //     setActiveImage(0)
// // // //   }, [productSlug])

// // // //   // This is the actual fetch implementation for when you connect to your API
// // // //   // useEffect(() => {
// // // //   //   const fetchProduct = async () => {
// // // //   //     setLoading(true)
// // // //   //     try {
// // // //   //       // In a real application, you would fetch from your API
// // // //   //       // const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/products/${productSlug}`);
// // // //   //       // setProduct(response.data);
// // // //   //       
// // // //   //       // Using mock data for demonstration
// // // //   //       const foundProduct = mockProducts.find((p) => p.slug === productSlug)
// // // //   //       if (foundProduct) {
// // // //   //         setProduct(foundProduct)
// // // //   //       } else {
// // // //   //         setError("Product not found")
// // // //   //       }
// // // //   //
// // // //   //       setLoading(false)
// // // //   //     } catch (err) {
// // // //   //       console.error("Error fetching product:", err)
// // // //   //       setError("Failed to load product. Please try again later.")
// // // //   //       setLoading(false)
// // // //   //     }
// // // //   //   }
// // // //   //
// // // //   //   fetchProduct()
// // // //   //   // Reset active image when product changes
// // // //   //   setActiveImage(0)
// // // //   // }, [productSlug])

// // // //   const handleQuantityChange = (e) => {
// // // //     const value = Number.parseInt(e.target.value)
// // // //     if (value > 0) {
// // // //       setQuantity(value)
// // // //     }
// // // //   }

// // // //   const handleAddToCart = () => {
// // // //     if (product) {
// // // //       addToCart({
// // // //         id: product.id,
// // // //         name: product.name,
// // // //         price: product.price,
// // // //         image: product.images[0],
// // // //         quantity,
// // // //         category: product.categoryName,
// // // //       })

// // // //       // Show temporary notification instead of alert
// // // //       setShowNotification(true)
// // // //       setTimeout(() => {
// // // //         setShowNotification(false)
// // // //       }, 3000)
// // // //     }
// // // //   }

// // // //   // Enhanced LoadingSpinner component
// // // //   const LoadingSpinner = () => (
// // // //     <div className="container mx-auto px-4 py-16">
// // // //       <div className="flex flex-col items-center justify-center">
// // // //         <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-red-600 border-r-transparent"></div>
// // // //         <p className="mt-4 text-gray-700 font-medium">Loading product details...</p>
// // // //       </div>
// // // //     </div>
// // // //   )

// // // //   if (loading) {
// // // //     return <LoadingSpinner />
// // // //   }

// // // //   if (error || !product) {
// // // //     return (
// // // //       <div className="container mx-auto px-4 py-16">
// // // //         <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-sm">
// // // //           <p className="font-medium">{error || "Product not found"}</p>
// // // //         </div>
// // // //         <div className="mt-6">
// // // //           <Link
// // // //             to="/products"
// // // //             className="inline-flex items-center px-5 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
// // // //           >
// // // //             Back to Products
// // // //           </Link>
// // // //         </div>
// // // //       </div>
// // // //     )
// // // //   }

// // // //   // Custom modular components
// // // //   const ProductImageGallery = ({ product, activeImage, setActiveImage }) => (
// // // //     <div>
// // // //       <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 bg-white shadow-md">
// // // //         <img
// // // //           src={false || "https://www.atmmicrowave.com/wp-content/uploads/wave-attenuator-cva.jpg"}
// // // //           alt={product.name}
// // // //           className="w-full h-80 object-contain p-4"
// // // //         />
// // // //       </div>
// // // //       <div className="grid grid-cols-3 gap-3">
// // // //         {product.images.map((image, index) => (
// // // //           <button
// // // //             key={index}
// // // //             onClick={() => setActiveImage(index)}
// // // //             className={`border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow ${activeImage === index ? "border-red-600 ring-2 ring-red-200" : "border-gray-200"
// // // //               }`}
// // // //           >
// // // //             <img
// // // //               src={false || "https://5.imimg.com/data5/SELLER/Default/2024/6/427178864/FX/XL/QF/23940133/microwave-components-variable-attenuator-500x500.jpg"}
// // // //               alt={`${product.name} - View ${index + 1}`}
// // // //               className="w-full h-20 object-cover"
// // // //             />
// // // //           </button>
// // // //         ))}
// // // //       </div>
// // // //     </div>
// // // //   )

// // // //   const ProductTabs = ({ activeTab, setActiveTab, product }) => (
// // // //     <div className="border-t border-gray-200">
// // // //       <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
// // // //         <button
// // // //           onClick={() => setActiveTab("description")}
// // // //           className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "description"
// // // //             ? "text-red-600 border-b-2 border-red-600"
// // // //             : "text-gray-500 hover:text-gray-700"
// // // //             }`}
// // // //         >
// // // //           Description
// // // //         </button>
// // // //         <button
// // // //           onClick={() => setActiveTab("specifications")}
// // // //           className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "specifications"
// // // //             ? "text-red-600 border-b-2 border-red-600"
// // // //             : "text-gray-500 hover:text-gray-700"
// // // //             }`}
// // // //         >
// // // //           Specifications
// // // //         </button>
// // // //         <button
// // // //           onClick={() => setActiveTab("applications")}
// // // //           className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "applications"
// // // //             ? "text-red-600 border-b-2 border-red-600"
// // // //             : "text-gray-500 hover:text-gray-700"
// // // //             }`}
// // // //         >
// // // //           Applications
// // // //         </button>
// // // //       </div>

// // // //       <div className="p-6">
// // // //         {activeTab === "description" && (
// // // //           <div>
// // // //             <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
// // // //             <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
// // // //             <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
// // // //               {product.features.map((feature, index) => (
// // // //                 <li key={index} className="flex items-start">
// // // //                   <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
// // // //                     <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // // //                   </svg>
// // // //                   <span className="text-gray-700">{feature}</span>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>
// // // //         )}

// // // //         {activeTab === "specifications" && (
// // // //           <div className="bg-white rounded-lg overflow-hidden">
// // // //             <ProductSpecsTable specifications={product.specifications} />
// // // //           </div>
// // // //         )}

// // // //         {activeTab === "applications" && (
// // // //           <div>
// // // //             <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended Applications</h3>
// // // //             <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
// // // //               {product.applications.map((application, index) => (
// // // //                 <li key={index} className="flex items-start">
// // // //                   <svg className="w-5 h-5 text-red-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
// // // //                     <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
// // // //                   </svg>
// // // //                   <span className="text-gray-700">{application}</span>
// // // //                 </li>
// // // //               ))}
// // // //             </ul>
// // // //           </div>
// // // //         )}
// // // //       </div>
// // // //     </div>
// // // //   )

// // // //   // Modified RelatedProducts component to ensure at least one product
// // // //   const EnhancedRelatedProducts = ({ currentProductId, category }) => {
// // // //     // This would be your actual implementation in the RelatedProducts component
// // // //     const relatedProducts = [
// // // //       // We always include our dummy product to ensure at least one item shows
// // // //       dummyRelatedProduct,
// // // //       // Plus your actual related products would be fetched here
// // // //     ]

// // // //     return (
// // // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // // //         {relatedProducts.map(product => (
// // // //           <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
// // // //             <Link to={`/products/${product.slug}`} className="block">
// // // //               <div className="h-48 overflow-hidden">
// // // //                 <img
// // // //                   src={product.images?.[1] || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPr3jZK1GmDLFv8h01JPmfcggRfJ4UMyUV3A&s"}
// // // //                   alt={product.name}
// // // //                   className="w-full h-full object-cover transition-transform hover:scale-105"
// // // //                 />
// // // //               </div>
// // // //               <div className="p-4">
// // // //                 <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
// // // //                 <p className="text-sm text-gray-500 mb-2">{product.categoryName}</p>
// // // //                 <div className="flex justify-between items-center">
// // // //                   <span className="text-lg font-bold text-red-600">${product.price.toFixed(2)}</span>
// // // //                   <span className={`px-2 py-1 text-xs rounded-full ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>
// // // //                     {product.inStock ? 'In Stock' : 'Made to Order'}
// // // //                   </span>
// // // //                 </div>
// // // //               </div>
// // // //             </Link>
// // // //           </div>
// // // //         ))}
// // // //       </div>
// // // //     )
// // // //   }

// // // //   return (
// // // //     <div className="bg-gray-50 min-h-screen p-24">
// // // //       <div className="container mx-auto px-4 py-8">
// // // //         {/* Notification */}
// // // //         {showNotification && (
// // // //           <div className="fixed top-6 right-6 z-50 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg max-w-md animated fadeIn">
// // // //             <div className="flex items-center">
// // // //               <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
// // // //               </svg>
// // // //               <p><span className="font-medium">Success!</span> Added {quantity} {product.name} to cart</p>
// // // //             </div>
// // // //           </div>
// // // //         )}

// // // //         {/* Breadcrumb */}
// // // //         <div className="text-sm text-gray-500 mb-6 bg-white p-3 rounded-lg shadow-sm">
// // // //           <Link to="/" className="hover:text-red-600 transition-colors">
// // // //             Home
// // // //           </Link>
// // // //           <span className="mx-2">/</span>
// // // //           <Link to="/products" className="hover:text-red-600 transition-colors">
// // // //             Products
// // // //           </Link>
// // // //           <span className="mx-2">/</span>
// // // //           <Link to={`/products/category/${product.category}`} className="hover:text-red-600 transition-colors">
// // // //             {product.categoryName}
// // // //           </Link>
// // // //           <span className="mx-2">/</span>
// // // //           <span className="text-gray-700 font-medium">{product.name}</span>
// // // //         </div>

// // // //         <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
// // // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
// // // //             {/* Product Images */}
// // // //             <ProductImageGallery product={product} activeImage={activeImage} setActiveImage={setActiveImage} />

// // // //             {/* Product Info */}
// // // //             <div>
// // // //               <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
// // // //               <div className="text-sm text-gray-500 mb-4 pb-2 border-b border-gray-100">VT060CHPL1500N</div>

// // // //               <div className="text-2xl font-bold text-red-600 mb-4">${product.price.toFixed(2)}</div>

// // // //               <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
// // // //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // // //                   <div className="flex items-center">
// // // //                     <span className="text-gray-700 font-medium mr-2">Availability:</span>
// // // //                     {product.inStock ? (
// // // //                       <span className="text-green-600 font-medium flex items-center">
// // // //                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
// // // //                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
// // // //                         </svg>
// // // //                         In Stock
// // // //                       </span>
// // // //                     ) : (
// // // //                       <span className="text-gray-600">Made to Order ({product.leadTime})</span>
// // // //                     )}
// // // //                   </div>

// // // //                   <div className="flex items-center">
// // // //                     <span className="text-gray-700 font-medium mr-2">Frequency:</span>
// // // //                     <span className="text-gray-600">{product.frequency}</span>
// // // //                   </div>

// // // //                   <div className="flex items-center">
// // // //                     <span className="text-gray-700 font-medium mr-2">Power Rating:</span>
// // // //                     <span className="text-gray-600">{product.power}</span>
// // // //                   </div>

// // // //                   <div className="flex items-center">
// // // //                     <span className="text-gray-700 font-medium mr-2">Connector Type:</span>
// // // //                     <span className="text-gray-600">{product.connector}</span>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>

// // // //               <div className="mb-6">
// // // //                 <div className="flex items-center mb-4">
// // // //                   <label htmlFor="quantity" className="text-gray-700 font-medium mr-4">
// // // //                     Quantity:
// // // //                   </label>
// // // //                   <div className="flex items-center">
// // // //                     <button
// // // //                       onClick={() => quantity > 1 && setQuantity(quantity - 1)}
// // // //                       className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-10 w-10 rounded-l-md flex items-center justify-center border border-gray-300 border-r-0 transition-colors outline-none focus:ring-2 focus:ring-red-300"
// // // //                     >
// // // //                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
// // // //                       </svg>
// // // //                     </button>
// // // //                     <input
// // // //                       type="number"
// // // //                       id="quantity"
// // // //                       value={quantity}
// // // //                       onChange={handleQuantityChange}
// // // //                       min="1"
// // // //                       className="h-10 w-16 border border-gray-300 text-center outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300"
// // // //                     />
// // // //                     <button
// // // //                       onClick={() => setQuantity(quantity + 1)}
// // // //                       className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-10 w-10 rounded-r-md flex items-center justify-center border border-gray-300 border-l-0 transition-colors outline-none focus:ring-2 focus:ring-red-300"
// // // //                     >
// // // //                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
// // // //                       </svg>
// // // //                     </button>
// // // //                   </div>
// // // //                 </div>

// // // //                 <div className="flex flex-col sm:flex-row gap-4 mt-6">
// // // //                   <button
// // // //                     onClick={handleAddToCart}
// // // //                     className="flex-1 bg-white border-2 border-red-600 hover:bg-red-50 text-red-600 py-3 px-6 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center shadow-sm"
// // // //                   >
// // // //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                       <path
// // // //                         strokeLinecap="round"
// // // //                         strokeLinejoin="round"
// // // //                         strokeWidth="2"
// // // //                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
// // // //                       />
// // // //                     </svg>
// // // //                     Add to Cart
// // // //                   </button>
// // // //                   <Link
// // // //                     to="/request"
// // // //                     state={{ product: product }}
// // // //                     className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center shadow-sm"
// // // //                   >
// // // //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // // //                       <path
// // // //                         strokeLinecap="round"
// // // //                         strokeLinejoin="round"
// // // //                         strokeWidth="2"
// // // //                         d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
// // // //                       />
// // // //                     </svg>
// // // //                     Request Quote
// // // //                   </Link>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Product Tabs */}
// // // //           <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} product={product} />
// // // //         </div>

// // // //         {/* Related Products */}
// // // //         <section className="mt-12">
// // // //           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// // // //             <span className="w-1.5 h-6 bg-red-600 rounded-sm mr-2 inline-block"></span>
// // // //             Related Products
// // // //           </h2>
// // // //           <EnhancedRelatedProducts currentProductId={product.id} category={product.category} />
// // // //         </section>
// // // //       </div>
// // // //     </div>
// // // //   )
// // // // }

// // // // export default ProductDetailPage


// // // "use client"

// // // import { useState, useEffect } from "react"
// // // import { useParams, Link } from "react-router-dom"
// // // import { useCart } from "../contexts/CartContext"
// // // import ProductSpecsTable from "../components/products/ProductSpecsTable"
// // // import RelatedProducts from "../components/products/RelatedProducts"
// // // import axios from "axios"

// // // // Configure axios base URL
// // // axios.defaults.baseURL = "http://localhost:5000/api"

// // // const ProductDetailPage = () => {
// // //   const { id } = useParams() // Changed from productSlug to id to match the route /products/:id
// // //   const { addToCart } = useCart()
// // //   const [product, setProduct] = useState(null)
// // //   const [relatedProducts, setRelatedProducts] = useState([])
// // //   const [loading, setLoading] = useState(true)
// // //   const [error, setError] = useState(null)
// // //   const [quantity, setQuantity] = useState(1)
// // //   const [activeTab, setActiveTab] = useState("description")
// // //   const [activeImage, setActiveImage] = useState(0)
// // //   const [showNotification, setShowNotification] = useState(false)

// // //   useEffect(() => {
// // //     const fetchProduct = async () => {
// // //       setLoading(true)
// // //       try {
// // //         // Fetch product details by ID
// // //         const response = await axios.get(`/products/${id}`)
// // //         const productData = response.data

// // //         // Transform the API data to match the frontend's expected structure
// // //         const transformedProduct = {
// // //           id: productData._id,
// // //           name: productData.name,
// // //           model: productData.model,
// // //           category: productData.category,
// // //           categoryName: productData.category
// // //             .split("-")
// // //             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// // //             .join(" "), // Convert "waveguide-straight" to "Waveguide Straight"
// // //           images: productData.images || [],
// // //           price: productData.price || "Request Quote",
// // //           frequency: productData.frequency,
// // //           power: productData.power,
// // //           connector: productData.connector,
// // //           description: productData.description,
// // //           specifications: productData.specifications?.reduce((acc, spec) => {
// // //             acc[spec.name] = spec.value
// // //             return acc
// // //           }, {}) || {}, // Convert array of {name, value} to object
// // //           applications: productData.applications?.split(", ").filter(app => app) || [], // Split comma-separated string into array
// // //           features: productData.datasheet?.split(", ").filter(feature => feature) || [], // Map datasheet to features
// // //           inStock: productData.inStock,
// // //           leadTime: productData.inStock ? "1-2 weeks" : "3-4 weeks", // Hardcoding leadTime since not in API
// // //           minOrderQuantity: 1, // Hardcoding since not in API
// // //         }

// // //         setProduct(transformedProduct)
// // //         setError(null)

// // //         // Fetch related products
// // //         const relatedResponse = await axios.get(`/products/related/${id}`)
// // //         const relatedData = relatedResponse.data.map(item => ({
// // //           id: item._id,
// // //           name: item.name,
// // //           slug: item._id, // Using _id as slug for navigation
// // //           category: item.category,
// // //           categoryName: item.category
// // //             .split("-")
// // //             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// // //             .join(" "),
// // //           images: item.images || [],
// // //           price: item.price || "Request Quote",
// // //           frequency: item.frequency,
// // //           inStock: item.inStock,
// // //         }))
// // //         setRelatedProducts(relatedData.length ? relatedData : [])
// // //       } catch (err) {
// // //         console.error("Error fetching product:", err)
// // //         setError("Failed to load product. Please try again later.")
// // //         setProduct(null)
// // //       } finally {
// // //         setLoading(false)
// // //       }
// // //     }

// // //     fetchProduct()
// // //     setActiveImage(0)
// // //   }, [id])

// // //   const handleQuantityChange = (e) => {
// // //     const value = Number.parseInt(e.target.value)
// // //     if (value > 0) {
// // //       setQuantity(value)
// // //     }
// // //   }

// // //   const handleAddToCart = () => {
// // //     if (product) {
// // //       addToCart({
// // //         id: product.id,
// // //         name: product.name,
// // //         price: product.price,
// // //         image: product.images[0] || "https://via.placeholder.com/150",
// // //         quantity,
// // //         category: product.categoryName,
// // //       })

// // //       // Show temporary notification
// // //       setShowNotification(true)
// // //       setTimeout(() => {
// // //         setShowNotification(false)
// // //       }, 3000)
// // //     }
// // //   }

// // //   // LoadingSpinner component
// // //   const LoadingSpinner = () => (
// // //     <div className="container mx-auto px-4 py-16">
// // //       <div className="flex flex-col items-center justify-center">
// // //         <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-red-600 border-r-transparent"></div>
// // //         <p className="mt-4 text-gray-700 font-medium">Loading product details...</p>
// // //       </div>
// // //     </div>
// // //   )

// // //   if (loading) {
// // //     return <LoadingSpinner />
// // //   }

// // //   if (error || !product) {
// // //     return (
// // //       <div className="container mx-auto px-4 py-16">
// // //         <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-sm">
// // //           <p className="font-medium">{error || "Product not found"}</p>
// // //         </div>
// // //         <div className="mt-6">
// // //           <Link
// // //             to="/products"
// // //             className="inline-flex items-center px-5 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
// // //           >
// // //             Back to Products
// // //           </Link>
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   // ProductImageGallery component with conditional thumbnail display
// // //   const ProductImageGallery = ({ product, activeImage, setActiveImage }) => (
// // //     <div>
// // //       <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 bg-white shadow-md">
// // //         <img
// // //           src={product.images[activeImage] || "https://via.placeholder.com/300"}
// // //           alt={product.name}
// // //           className="w-full h-80 object-contain p-4"
// // //         />
// // //       </div>
// // //       {product.images.length > 1 && (
// // //         <div className="grid grid-cols-3 gap-3">
// // //           {product.images.map((image, index) => (
// // //             <button
// // //               key={index}
// // //               onClick={() => setActiveImage(index)}
// // //               className={`border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow ${activeImage === index ? "border-red-600 ring-2 ring-red-200" : "border-gray-200"
// // //                 }`}
// // //             >
// // //               <img
// // //                 src={image}
// // //                 alt={`${product.name} - View ${index + 1}`}
// // //                 className="w-full h-20 object-cover"
// // //               />
// // //             </button>
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   )

// // //   // ProductTabs component with conditional rendering
// // //   const ProductTabs = ({ activeTab, setActiveTab, product }) => {
// // //     const tabs = []
// // //     if (product.description || (product.features && product.features.length > 0)) {
// // //       tabs.push("description")
// // //     }
// // //     if (product.specifications && Object.keys(product.specifications).length > 0) {
// // //       tabs.push("specifications")
// // //     }
// // //     if (product.applications && product.applications.length > 0) {
// // //       tabs.push("applications")
// // //     }

// // //     // If no tabs are available, don't render the tabs section
// // //     if (tabs.length === 0) return null

// // //     return (
// // //       <div className="border-t border-gray-200">
// // //         <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
// // //           {tabs.includes("description") && (
// // //             <button
// // //               onClick={() => setActiveTab("description")}
// // //               className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "description"
// // //                 ? "text-red-600 border-b-2 border-red-600"
// // //                 : "text-gray-500 hover:text-gray-700"
// // //                 }`}
// // //             >
// // //               Description
// // //             </button>
// // //           )}
// // //           {tabs.includes("specifications") && (
// // //             <button
// // //               onClick={() => setActiveTab("specifications")}
// // //               className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "specifications"
// // //                 ? "text-red-600 border-b-2 border-red-600"
// // //                 : "text-gray-500 hover:text-gray-700"
// // //                 }`}
// // //             >
// // //               Specifications
// // //             </button>
// // //           )}
// // //           {tabs.includes("applications") && (
// // //             <button
// // //               onClick={() => setActiveTab("applications")}
// // //               className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "applications"
// // //                 ? "text-red-600 border-b-2 border-red-600"
// // //                 : "text-gray-500 hover:text-gray-700"
// // //                 }`}
// // //             >
// // //               Applications
// // //             </button>
// // //           )}
// // //         </div>

// // //         <div className="p-6">
// // //           {activeTab === "description" && (
// // //             <div>
// // //               {product.description && (
// // //                 <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
// // //               )}
// // //               {product.features && product.features.length > 0 && (
// // //                 <>
// // //                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
// // //                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
// // //                     {product.features.map((feature, index) => (
// // //                       <li key={index} className="flex items-start">
// // //                         <svg
// // //                           className="w-5 h-5 text-red-500 mr-2 mt-0.5"
// // //                           fill="currentColor"
// // //                           viewBox="0 0 20 20"
// // //                         >
// // //                           <path
// // //                             fillRule="evenodd"
// // //                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
// // //                             clipRule="evenodd"
// // //                           />
// // //                         </svg>
// // //                         <span className="text-gray-700">{feature}</span>
// // //                       </li>
// // //                     ))}
// // //                   </ul>
// // //                 </>
// // //               )}
// // //             </div>
// // //           )}

// // //           {activeTab === "specifications" && (
// // //             <div className="bg-white rounded-lg overflow-hidden">
// // //               <ProductSpecsTable specifications={product.specifications} />
// // //             </div>
// // //           )}

// // //           {activeTab === "applications" && (
// // //             <div>
// // //               <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended Applications</h3>
// // //               <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
// // //                 {product.applications.map((application, index) => (
// // //                   <li key={index} className="flex items-start">
// // //                     <svg
// // //                       className="w-5 h-5 text-red-500 mr-2 mt-0.5"
// // //                       fill="currentColor"
// // //                       viewBox="0 0 20 20"
// // //                     >
// // //                       <path
// // //                         fillRule="evenodd"
// // //                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
// // //                         clipRule="evenodd"
// // //                       />
// // //                     </svg>
// // //                     <span className="text-gray-700">{application}</span>
// // //                   </li>
// // //                 ))}
// // //               </ul>
// // //             </div>
// // //           )}
// // //         </div>
// // //       </div>
// // //     )
// // //   }

// // //   // EnhancedRelatedProducts component
// // //   const EnhancedRelatedProducts = ({ currentProductId, relatedProducts }) => {
// // //     if (!relatedProducts || relatedProducts.length === 0) return null

// // //     return (
// // //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// // //         {relatedProducts.map(product => (
// // //           <div
// // //             key={product.id}
// // //             className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
// // //           >
// // //             <Link to={`/products/${product.id}`} className="block">
// // //               <div className="h-48 overflow-hidden">
// // //                 <img
// // //                   src={product.images[0] || "https://via.placeholder.com/150"}
// // //                   alt={product.name}
// // //                   className="w-full h-full object-cover transition-transform hover:scale-105"
// // //                 />
// // //               </div>
// // //               <div className="p-4">
// // //                 <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
// // //                 <p className="text-sm text-gray-500 mb-2">{product.categoryName}</p>
// // //                 <div className="flex justify-between items-center">
// // //                   <span className="text-lg font-bold text-red-600">
// // //                     {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price}
// // //                   </span>
// // //                   <span
// // //                     className={`px-2 py-1 text-xs rounded-full ${product.inStock ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
// // //                       }`}
// // //                   >
// // //                     {product.inStock ? "In Stock" : "Made to Order"}
// // //                   </span>
// // //                 </div>
// // //               </div>
// // //             </Link>
// // //           </div>
// // //         ))}
// // //       </div>
// // //     )
// // //   }

// // //   return (
// // //     <div className="bg-gray-50 min-h-screen p-24">
// // //       <div className="container mx-auto px-4 py-8">
// // //         {/* Notification */}
// // //         {showNotification && (
// // //           <div className="fixed top-6 right-6 z-50 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg max-w-md animated fadeIn">
// // //             <div className="flex items-center">
// // //               <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
// // //               </svg>
// // //               <p>
// // //                 <span className="font-medium">Success!</span> Added {quantity} {product.name} to cart
// // //               </p>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Breadcrumb */}
// // //         <div className="text-sm text-gray-500 mb-6 bg-white p-3 rounded-lg shadow-sm">
// // //           <Link to="/" className="hover:text-red-600 transition-colors">
// // //             Home
// // //           </Link>
// // //           <span className="mx-2">/</span>
// // //           <Link to="/products" className="hover:text-red-600 transition-colors">
// // //             Products
// // //           </Link>
// // //           <span className="mx-2">/</span>
// // //           <Link
// // //             to={`/products/category/${product.category}`}
// // //             className="hover:text-red-600 transition-colors"
// // //           >
// // //             {product.categoryName}
// // //           </Link>
// // //           <span className="mx-2">/</span>
// // //           <span className="text-gray-700 font-medium">{product.name}</span>
// // //         </div>

// // //         <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
// // //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
// // //             {/* Product Images */}
// // //             <ProductImageGallery product={product} activeImage={activeImage} setActiveImage={setActiveImage} />

// // //             {/* Product Info */}
// // //             <div>
// // //               <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
// // //               <div className="text-sm text-gray-500 mb-4 pb-2 border-b border-gray-100">{product.model}</div>

// // //               <div className="text-2xl font-bold text-red-600 mb-4">
// // //                 {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price}
// // //               </div>

// // //               <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
// // //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// // //                   <div className="flex items-center">
// // //                     <span className="text-gray-700 font-medium mr-2">Availability:</span>
// // //                     {product.inStock ? (
// // //                       <span className="text-green-600 font-medium flex items-center">
// // //                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
// // //                           <path
// // //                             fillRule="evenodd"
// // //                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
// // //                             clipRule="evenodd"
// // //                           />
// // //                         </svg>
// // //                         In Stock
// // //                       </span>
// // //                     ) : (
// // //                       <span className="text-gray-600">Made to Order ({product.leadTime})</span>
// // //                     )}
// // //                   </div>

// // //                   {product.frequency && (
// // //                     <div className="flex items-center">
// // //                       <span className="text-gray-700 font-medium mr-2">Frequency:</span>
// // //                       <span className="text-gray-600">{product.frequency}</span>
// // //                     </div>
// // //                   )}

// // //                   {product.power && (
// // //                     <div className="flex items-center">
// // //                       <span className="text-gray-700 font-medium mr-2">Power Rating:</span>
// // //                       <span className="text-gray-600">{product.power}</span>
// // //                     </div>
// // //                   )}

// // //                   {product.connector && (
// // //                     <div className="flex items-center">
// // //                       <span className="text-gray-700 font-medium mr-2">Connector Type:</span>
// // //                       <span className="text-gray-600">{product.connector}</span>
// // //                     </div>
// // //                   )}
// // //                 </div>
// // //               </div>

// // //               <div className="mb-6">
// // //                 <div className="flex items-center mb-4">
// // //                   <label htmlFor="quantity" className="text-gray-700 font-medium mr-4">
// // //                     Quantity:
// // //                   </label>
// // //                   <div className="flex items-center">
// // //                     <button
// // //                       onClick={() => quantity > 1 && setQuantity(quantity - 1)}
// // //                       className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-10 w-10 rounded-l-md flex items-center justify-center border border-gray-300 border-r-0 transition-colors outline-none focus:ring-2 focus:ring-red-300"
// // //                     >
// // //                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
// // //                       </svg>
// // //                     </button>
// // //                     <input
// // //                       type="number"
// // //                       id="quantity"
// // //                       value={quantity}
// // //                       onChange={handleQuantityChange}
// // //                       min="1"
// // //                       className="h-10 w-16 border border-gray-300 text-center outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300"
// // //                     />
// // //                     <button
// // //                       onClick={() => setQuantity(quantity + 1)}
// // //                       className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-10 w-10 rounded-r-md flex items-center justify-center border border-gray-300 border-l-0 transition-colors outline-none focus:ring-2 focus:ring-red-300"
// // //                     >
// // //                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
// // //                       </svg>
// // //                     </button>
// // //                   </div>
// // //                 </div>

// // //                 <div className="flex flex-col sm:flex-row gap-4 mt-6">
// // //                   <button
// // //                     onClick={handleAddToCart}
// // //                     className="flex-1 bg-white border-2 border-red-600 hover:bg-red-50 text-red-600 py-3 px-6 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center shadow-sm"
// // //                   >
// // //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth="2"
// // //                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
// // //                       />
// // //                     </svg>
// // //                     Add to Cart
// // //                   </button>
// // //                   <Link
// // //                     to="/request"
// // //                     state={{ product: product }}
// // //                     className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center shadow-sm"
// // //                   >
// // //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //                       <path
// // //                         strokeLinecap="round"
// // //                         strokeLinejoin="round"
// // //                         strokeWidth="2"
// // //                         d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
// // //                       />
// // //                     </svg>
// // //                     Request Quote
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>

// // //           {/* Product Tabs */}
// // //           <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} product={product} />
// // //         </div>

// // //         {/* Related Products */}
// // //         <section className="mt-12">
// // //           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// // //             <span className="w-1.5 h-6 bg-red-600 rounded-sm mr-2 inline-block"></span>
// // //             Related Products
// // //           </h2>
// // //           <EnhancedRelatedProducts currentProductId={product.id} relatedProducts={relatedProducts} />
// // //         </section>
// // //       </div>
// // //     </div>
// // //   )
// // // }

// // // export default ProductDetailPage


// // "use client"

// // import { useState, useEffect } from "react"
// // import { useParams, Link } from "react-router-dom"
// // import { useCart } from "../contexts/CartContext"
// // import ProductSpecsTable from "../components/products/ProductSpecsTable"
// // import RelatedProducts from "../components/products/RelatedProducts"
// // import axios from "axios"

// // // Configure axios base URL
// // axios.defaults.baseURL = "http://localhost:5000/api"

// // const ProductDetailPage = () => {
// //   const { id } = useParams() // Route is /products/:id
// //   const { addToCart } = useCart()
// //   const [product, setProduct] = useState(null)
// //   const [relatedProducts, setRelatedProducts] = useState([])
// //   const [loading, setLoading] = useState(true)
// //   const [error, setError] = useState(null)
// //   const [quantity, setQuantity] = useState(1)
// //   const [activeTab, setActiveTab] = useState("description")
// //   const [activeImage, setActiveImage] = useState(0)
// //   const [showNotification, setShowNotification] = useState(false)

// //   useEffect(() => {
// //     const fetchProduct = async () => {
// //       setLoading(true)
// //       try {
// //         // Fetch product details by ID
// //         const response = await axios.get(`/products/${id}`)
// //         const productData = response.data

// //         // Transform the API data to match the frontend's expected structure
// //         const transformedProduct = {
// //           id: productData._id,
// //           name: productData.name,
// //           model: productData.model,
// //           category: productData.category,
// //           categoryName: productData.category
// //             .split("-")
// //             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //             .join(" "), // Convert "waveguide-straight" to "Waveguide Straight"
// //           images: productData.images || [],
// //           price: productData.price || "Request Quote",
// //           frequency: productData.frequency,
// //           power: productData.power,
// //           connector: productData.connector,
// //           description: productData.description,
// //           specifications: productData.specifications?.reduce((acc, spec) => {
// //             acc[spec.name] = spec.value
// //             return acc
// //           }, {}) || {},
// //           applications: productData.applications?.split(", ").filter(app => app) || [],
// //           features: productData.datasheet?.split(", ").filter(feature => feature) || [],
// //           inStock: productData.inStock,
// //           leadTime: productData.inStock ? "1-2 weeks" : "3-4 weeks",
// //           minOrderQuantity: 1,
// //         }

// //         setProduct(transformedProduct)
// //         setError(null)

// //         // Fetch related products
// //         const relatedResponse = await axios.get(`/products/related/${id}`)
// //         const relatedData = relatedResponse.data.map(item => ({
// //           id: item._id,
// //           name: item.name,
// //           slug: item._id,
// //           category: item.category,
// //           categoryName: item.category
// //             .split("-")
// //             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
// //             .join(" "),
// //           images: item.images || [],
// //           price: item.price || "Request Quote",
// //           frequency: item.frequency,
// //           inStock: item.inStock,
// //         }))
// //         setRelatedProducts(relatedData.length ? relatedData : [])
// //       } catch (err) {
// //         console.error("Error fetching product:", err)
// //         setError("Failed to load product. Please try again later.")
// //         setProduct(null)
// //       } finally {
// //         setLoading(false)
// //       }
// //     }

// //     fetchProduct()
// //     setActiveImage(0)
// //   }, [id])

// //   const handleQuantityChange = (e) => {
// //     const value = Number.parseInt(e.target.value)
// //     if (value > 0) {
// //       setQuantity(value)
// //     }
// //   }

// //   const handleAddToCart = () => {
// //     if (product) {
// //       addToCart({
// //         id: product.id,
// //         name: product.name,
// //         price: product.price,
// //         image: product.images[0] || "https://via.placeholder.com/150",
// //         quantity,
// //         category: product.categoryName,
// //       })

// //       // Show temporary notification
// //       setShowNotification(true)
// //       setTimeout(() => {
// //         setShowNotification(false)
// //       }, 3000)
// //     }
// //   }

// //   // LoadingSpinner component
// //   const LoadingSpinner = () => (
// //     <div className="container mx-auto px-4 py-16">
// //       <div className="flex flex-col items-center justify-center">
// //         <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-red-600 border-r-transparent"></div>
// //         <p className="mt-4 text-gray-700 font-medium">Loading product details...</p>
// //       </div>
// //     </div>
// //   )

// //   if (loading) {
// //     return <LoadingSpinner />
// //   }

// //   if (error || !product) {
// //     return (
// //       <div className="container mx-auto px-4 py-16">
// //         <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-sm">
// //           <p className="font-medium">{error || "Product not found"}</p>
// //         </div>
// //         <div className="mt-6">
// //           <Link
// //             to="/products"
// //             className="inline-flex items-center px-5 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
// //           >
// //             Back to Products
// //           </Link>
// //         </div>
// //       </div>
// //     )
// //   }

// //   // ProductImageGallery component
// //   const ProductImageGallery = ({ product, activeImage, setActiveImage }) => (
// //     <div>
// //       <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 bg-white shadow-md">
// //         <img
// //           src={product.images[activeImage] || "https://via.placeholder.com/300"}
// //           alt={product.name}
// //           className="w-full h-80 object-contain p-4"
// //         />
// //       </div>
// //       {product.images.length > 1 && (
// //         <div className="grid grid-cols-3 gap-3">
// //           {product.images.map((image, index) => (
// //             <button
// //               key={index}
// //               onClick={() => setActiveImage(index)}
// //               className={`border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow ${activeImage === index ? "border-red-600 ring-2 ring-red-200" : "border-gray-200"
// //                 }`}
// //             >
// //               <img
// //                 src={image}
// //                 alt={`${product.name} - View ${index + 1}`}
// //                 className="w-full h-20 object-cover"
// //               />
// //             </button>
// //           ))}
// //         </div>
// //       )}
// //     </div>
// //   )

// //   // ProductTabs component with conditional rendering
// //   const ProductTabs = ({ activeTab, setActiveTab, product }) => {
// //     const tabs = []
// //     if (product.description || (product.features && product.features.length > 0)) {
// //       tabs.push("description")
// //     }
// //     if (product.specifications && Object.keys(product.specifications).length > 0) {
// //       tabs.push("specifications")
// //     }
// //     if (product.applications && product.applications.length > 0) {
// //       tabs.push("applications")
// //     }

// //     if (tabs.length === 0) return null

// //     return (
// //       <div className="border-t border-gray-200">
// //         <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
// //           {tabs.includes("description") && (
// //             <button
// //               onClick={() => setActiveTab("description")}
// //               className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "description"
// //                 ? "text-red-600 border-b-2 border-red-600"
// //                 : "text-gray-500 hover:text-gray-700"
// //                 }`}
// //             >
// //               Description
// //             </button>
// //           )}
// //           {tabs.includes("specifications") && (
// //             <button
// //               onClick={() => setActiveTab("specifications")}
// //               className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "specifications"
// //                 ? "text-red-600 border-b-2 border-red-600"
// //                 : "text-gray-500 hover:text-gray-700"
// //                 }`}
// //             >
// //               Specifications
// //             </button>
// //           )}
// //           {tabs.includes("applications") && (
// //             <button
// //               onClick={() => setActiveTab("applications")}
// //               className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "applications"
// //                 ? "text-red-600 border-b-2 border-red-600"
// //                 : "text-gray-500 hover:text-gray-700"
// //                 }`}
// //             >
// //               Applications
// //             </button>
// //           )}
// //         </div>

// //         <div className="p-6">
// //           {activeTab === "description" && (
// //             <div>
// //               {product.description && (
// //                 <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
// //               )}
// //               {product.features && product.features.length > 0 && (
// //                 <>
// //                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
// //                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
// //                     {product.features.map((feature, index) => (
// //                       <li key={index} className="flex items-start">
// //                         <svg
// //                           className="w-5 h-5 text-red-500 mr-2 mt-0.5"
// //                           fill="currentColor"
// //                           viewBox="0 0 20 20"
// //                         >
// //                           <path
// //                             fillRule="evenodd"
// //                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
// //                             clipRule="evenodd"
// //                           />
// //                         </svg>
// //                         <span className="text-gray-700">{feature}</span>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </>
// //               )}
// //             </div>
// //           )}

// //           {activeTab === "specifications" && (
// //             <div className="bg-white rounded-lg overflow-hidden">
// //               <ProductSpecsTable specifications={product.specifications} />
// //             </div>
// //           )}

// //           {activeTab === "applications" && (
// //             <div>
// //               <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended Applications</h3>
// //               <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
// //                 {product.applications.map((application, index) => (
// //                   <li key={index} className="flex items-start">
// //                     <svg
// //                       className="w-5 h-5 text-red-500 mr-2 mt-0.5"
// //                       fill="currentColor"
// //                       viewBox="0 0 20 20"
// //                     >
// //                       <path
// //                         fillRule="evenodd"
// //                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
// //                         clipRule="evenodd"
// //                       />
// //                     </svg>
// //                     <span className="text-gray-700">{application}</span>
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           )}
// //         </div>
// //       </div>
// //     )
// //   }

// //   // EnhancedRelatedProducts component
// //   const EnhancedRelatedProducts = ({ currentProductId, relatedProducts }) => {
// //     if (!relatedProducts || relatedProducts.length === 0) return null

// //     return (
// //       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {relatedProducts.map(product => (
// //           <div
// //             key={product.id}
// //             className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
// //           >
// //             <Link to={`/products/${product.id}`} className="block">
// //               <div className="h-48 overflow-hidden">
// //                 <img
// //                   src={product.images[0] || "https://via.placeholder.com/150"}
// //                   alt={product.name}
// //                   className="w-full h-full object-cover transition-transform hover:scale-105"
// //                 />
// //               </div>
// //               <div className="p-4">
// //                 <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
// //                 <p className="text-sm text-gray-500 mb-2">{product.categoryName}</p>
// //                 <div className="flex justify-between items-center">
// //                   <span className="text-lg font-bold text-red-600">
// //                     {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price}
// //                   </span>
// //                   <span
// //                     className={`px-2 py-1 text-xs rounded-full ${product.inStock ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
// //                       }`}
// //                   >
// //                     {product.inStock ? "In Stock" : "Made to Order"}
// //                   </span>
// //                 </div>
// //               </div>
// //             </Link>
// //           </div>
// //         ))}
// //       </div>
// //     )
// //   }

// //   return (
// //     <div className="bg-gray-50 min-h-screen p-24">
// //       <div className="container mx-auto px-4 py-8">
// //         {/* Notification */}
// //         {showNotification && (
// //           <div className="fixed top-6 right-6 z-50 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg max-w-md animated fadeIn">
// //             <div className="flex items-center">
// //               <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
// //               </svg>
// //               <p>
// //                 <span className="font-medium">Success!</span> Added {quantity} {product.name} to cart
// //               </p>
// //             </div>
// //           </div>
// //         )}

// //         {/* Breadcrumb */}
// //         <div className="text-sm text-gray-500 mb-6 bg-white p-3 rounded-lg shadow-sm">
// //           <Link to="/" className="hover:text-red-600 transition-colors">
// //             Home
// //           </Link>
// //           <span className="mx-2">/</span>
// //           <Link to="/products" className="hover:text-red-600 transition-colors">
// //             Products
// //           </Link>
// //           <span className="mx-2">/</span>
// //           <Link
// //             to={`/products/category/${product.category}`}
// //             className="hover:text-red-600 transition-colors"
// //           >
// //             {product.categoryName}
// //           </Link>
// //           <span className="mx-2">/</span>
// //           <span className="text-gray-700 font-medium">{product.name}</span>
// //         </div>

// //         <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
// //             {/* Product Images */}
// //             <ProductImageGallery product={product} activeImage={activeImage} setActiveImage={setActiveImage} />

// //             {/* Product Info */}
// //             <div>
// //               <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
// //               <div className="text-sm text-gray-500 mb-4 pb-2 border-b border-gray-100">{product.model}</div>

// //               <div className="text-2xl font-bold text-red-600 mb-4">
// //                 {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price}
// //               </div>

// //               <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
// //                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
// //                   <div className="flex items-center">
// //                     <span className="text-gray-700 font-medium mr-2">Availability:</span>
// //                     {product.inStock ? (
// //                       <span className="text-green-600 font-medium flex items-center">
// //                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
// //                           <path
// //                             fillRule="evenodd"
// //                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
// //                             clipRule="evenodd"
// //                           />
// //                         </svg>
// //                         In Stock
// //                       </span>
// //                     ) : (
// //                       <span className="text-gray-600">Made to Order ({product.leadTime})</span>
// //                     )}
// //                   </div>

// //                   {product.frequency && (
// //                     <div className="flex items-center">
// //                       <span className="text-gray-700 font-medium mr-2">Frequency:</span>
// //                       <span className="text-gray-600">{product.frequency}</span>
// //                     </div>
// //                   )}

// //                   {product.power && (
// //                     <div className="flex items-center">
// //                       <span className="text-gray-700 font-medium mr-2">Power Rating:</span>
// //                       <span className="text-gray-600">{product.power}</span>
// //                     </div>
// //                   )}

// //                   {product.connector && (
// //                     <div className="flex items-center">
// //                       <span className="text-gray-700 font-medium mr-2">Connector Type:</span>
// //                       <span className="text-gray-600">{product.connector}</span>
// //                     </div>
// //                   )}
// //                 </div>
// //               </div>

// //               <div className="mb-6">
// //                 <div className="flex items-center mb-4">
// //                   <label htmlFor="quantity" className="text-gray-700 font-medium mr-4">
// //                     Quantity:
// //                   </label>
// //                   <div className="flex items-center">
// //                     <button
// //                       onClick={() => quantity > 1 && setQuantity(quantity - 1)}
// //                       className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-10 w-10 rounded-l-md flex items-center justify-center border border-gray-300 border-r-0 transition-colors outline-none focus:ring-2 focus:ring-red-300"
// //                     >
// //                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
// //                       </svg>
// //                     </button>
// //                     <input
// //                       type="number"
// //                       id="quantity"
// //                       value={quantity}
// //                       onChange={handleQuantityChange}
// //                       min="1"
// //                       className="h-10 w-16 border border-gray-300 text-center outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300"
// //                     />
// //                     <button
// //                       onClick={() => setQuantity(quantity + 1)}
// //                       className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-10 w-10 rounded-r-md flex items-center justify-center border border-gray-300 border-l-0 transition-colors outline-none focus:ring-2 focus:ring-red-300"
// //                     >
// //                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
// //                       </svg>
// //                     </button>
// //                   </div>
// //                 </div>

// //                 <div className="flex flex-col sm:flex-row gap-4 mt-6">
// //                   <button
// //                     onClick={handleAddToCart}
// //                     className="flex-1 bg-white border-2 border-red-600 hover:bg-red-50 text-red-600 py-3 px-6 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center shadow-sm"
// //                   >
// //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth="2"
// //                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
// //                       />
// //                     </svg>
// //                     Add to Cart
// //                   </button>
// //                   <Link
// //                     to="/request"
// //                     state={{ product: product }}
// //                     className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center shadow-sm"
// //                   >
// //                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// //                       <path
// //                         strokeLinecap="round"
// //                         strokeLinejoin="round"
// //                         strokeWidth="2"
// //                         d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
// //                       />
// //                     </svg>
// //                     Request Quote
// //                   </Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Product Tabs */}
// //           <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} product={product} />
// //         </div>

// //         {/* Related Products */}
// //         <section className="mt-12">
// //           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
// //             <span className="w-1.5 h-6 bg-red-600 rounded-sm mr-2 inline-block"></span>
// //             Related Products
// //           </h2>
// //           <EnhancedRelatedProducts currentProductId={product.id} relatedProducts={relatedProducts} />
// //         </section>
// //       </div>
// //     </div>
// //   )
// // }

// // export default ProductDetailPage



// "use client"

// import { useState, useEffect } from "react"
// import { useParams, Link } from "react-router-dom"
// import { useCart } from "../contexts/CartContext"
// import ProductSpecsTable from "../components/products/ProductSpecsTable"
// import RelatedProducts from "../components/products/RelatedProducts"
// import axios from "axios"

// // Configure axios base URL
// axios.defaults.baseURL = "http://localhost:5000/api"

// const ProductDetailPage = () => {
//   const { id } = useParams()
//   const { addToCart } = useCart()
//   const [product, setProduct] = useState(null)
//   const [relatedProducts, setRelatedProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [quantity, setQuantity] = useState(1)
//   const [activeTab, setActiveTab] = useState("description")
//   const [activeImage, setActiveImage] = useState(0)
//   const [showNotification, setShowNotification] = useState(false)

//   useEffect(() => {
//     const fetchProduct = async () => {
//       setLoading(true)
//       try {
//         // Fetch product details by ID
//         const response = await axios.get(`/products/${id}`)
//         console.log(response.data)
//         const productData = response.data

//         // Transform the API data to match the frontend's expected structure
//         const transformedProduct = {
//           id: productData._id,
//           name: productData.name,
//           model: productData.model,
//           category: productData.category,
//           categoryName: productData.category
//             .split("-")
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(" "),
//           images: productData.images || [],
//           price: productData.price || "Request Quote",
//           frequency: productData.frequency,
//           power: productData.power,
//           connector: productData.connector,
//           description: productData.description,
//           specifications: productData.specifications?.reduce((acc, spec) => {
//             acc[spec.name] = spec.value
//             return acc
//           }, {}) || {},
//           applications: productData.applications?.split(", ").filter(app => app) || [],
//           features: productData.datasheet?.split(", ").filter(feature => feature) || [],
//           inStock: productData.inStock,
//           leadTime: productData.inStock ? "1-2 weeks" : "3-4 weeks",
//           minOrderQuantity: 1,
//         }

//         setProduct(transformedProduct)
//         setError(null)

//         // Fetch related products
//         const relatedResponse = await axios.get(`/products/related/${id}`)
//         const relatedData = relatedResponse.data.map(item => ({
//           id: item._id,
//           name: item.name,
//           slug: item._id,
//           category: item.category,
//           categoryName: item.category
//             .split("-")
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(" "),
//           images: item.images || [],
//           price: item.price || "Request Quote",
//           frequency: item.frequency,
//           inStock: item.inStock,
//         }))
//         setRelatedProducts(relatedData.length ? relatedData : [])
//       } catch (err) {
//         console.error("Error fetching product:", err)
//         setError("Failed to load product. Please try again later.")
//         setProduct(null)
//       } finally {
//         setLoading(false)
//       }
//     }

//     fetchProduct()
//     setActiveImage(0)
//   }, [id])

//   const handleQuantityChange = (e) => {
//     const value = Number.parseInt(e.target.value)
//     if (value > 0) {
//       setQuantity(value)
//     }
//   }

//   const handleAddToCart = () => {
//     if (product) {
//       addToCart({
//         id: product.id,
//         name: product.name,
//         price: product.price,
//         image: product.images[0] || "https://via.placeholder.com/150",
//         quantity,
//         category: product.categoryName,
//       })

//       setShowNotification(true)
//       setTimeout(() => {
//         setShowNotification(false)
//       }, 3000)
//     }
//   }

//   const LoadingSpinner = () => (
//     <div className="container mx-auto px-4 py-16">
//       <div className="flex flex-col items-center justify-center">
//         <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-red-600 border-r-transparent"></div>
//         <p className="mt-4 text-gray-700 font-medium">Loading product details...</p>
//       </div>
//     </div>
//   )

//   if (loading) {
//     return <LoadingSpinner />
//   }

//   if (error || !product) {
//     return (
//       <div className="container mx-auto px-4 py-16">
//         <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-sm">
//           <p className="font-medium">{error || "Product not found"}</p>
//         </div>
//         <div className="mt-6">
//           <Link
//             to="/products"
//             className="inline-flex items-center px-5 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
//           >
//             Back to Products
//           </Link>
//         </div>
//       </div>
//     )
//   }

//   const ProductImageGallery = ({ product, activeImage, setActiveImage }) => (
//     <div>
//       <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 bg-white shadow-md">
//         <img
//           src={product.images[activeImage] || "https://via.placeholder.com/300"}
//           alt={product.name}
//           className="w-full h-80 object-contain p-4"
//         />
//       </div>
//       {product.images.length > 1 && (
//         <div className="grid grid-cols-3 gap-3">
//           {product.images.map((image, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveImage(index)}
//               className={`border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow ${activeImage === index ? "border-red-600 ring-2 ring-red-200" : "border-gray-200"
//                 }`}
//             >
//               <img
//                 src={image}
//                 alt={`${product.name} - View ${index + 1}`}
//                 className="w-full h-20 object-cover"
//               />
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   )

//   const ProductTabs = ({ activeTab, setActiveTab, product }) => {
//     const tabs = []
//     if (product.description || (product.features && product.features.length > 0)) {
//       tabs.push("description")
//     }
//     if (product.specifications && Object.keys(product.specifications).length > 0) {
//       tabs.push("specifications")
//     }
//     if (product.applications && product.applications.length > 0) {
//       tabs.push("applications")
//     }

//     if (tabs.length === 0) return null

//     return (
//       <div className="border-t border-gray-200">
//         <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
//           {tabs.includes("description") && (
//             <button
//               onClick={() => setActiveTab("description")}
//               className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "description"
//                 ? "text-red-600 border-b-2 border-red-600"
//                 : "text-gray-500 hover:text-gray-700"
//                 }`}
//             >
//               Description
//             </button>
//           )}
//           {tabs.includes("specifications") && (
//             <button
//               onClick={() => setActiveTab("specifications")}
//               className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "specifications"
//                 ? "text-red-600 border-b-2 border-red-600"
//                 : "text-gray-500 hover:text-gray-700"
//                 }`}
//             >
//               Specifications
//             </button>
//           )}
//           {tabs.includes("applications") && (
//             <button
//               onClick={() => setActiveTab("applications")}
//               className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "applications"
//                 ? "text-red-600 border-b-2 border-red-600"
//                 : "text-gray-500 hover:text-gray-700"
//                 }`}
//             >
//               Applications
//             </button>
//           )}
//         </div>

//         <div className="p-6">
//           {activeTab === "description" && (
//             <div>
//               {product.description && (
//                 <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
//               )}
//               {product.features && product.features.length > 0 && (
//                 <>
//                   <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
//                   <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                     {product.features.map((feature, index) => (
//                       <li key={index} className="flex items-start">
//                         <svg
//                           className="w-5 h-5 text-red-500 mr-2 mt-0.5"
//                           fill="currentColor"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             fillRule="evenodd"
//                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                         <span className="text-gray-700">{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//             </div>
//           )}

//           {activeTab === "specifications" && (
//             <div className="bg-white rounded-lg overflow-hidden">
//               <ProductSpecsTable specifications={product.specifications} />
//             </div>
//           )}

//           {activeTab === "applications" && (
//             <div>
//               <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended Applications</h3>
//               <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                 {product.applications.map((application, index) => (
//                   <li key={index} className="flex items-start">
//                     <svg
//                       className="w-5 h-5 text-red-500 mr-2 mt-0.5"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                     <span className="text-gray-700">{application}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     )
//   }

//   const EnhancedRelatedProducts = ({ currentProductId, relatedProducts }) => {
//     if (!relatedProducts || relatedProducts.length === 0) return null

//     return (
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {relatedProducts.map(product => (
//           <div
//             key={product.id}
//             className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
//           >
//             <Link to={`/products/${product.id}`} className="block">
//               <div className="h-48 overflow-hidden">
//                 <img
//                   src={product.images[0] || "https://via.placeholder.com/150"}
//                   alt={product.name}
//                   className="w-full h-full object-cover transition-transform hover:scale-105"
//                 />
//               </div>
//               <div className="p-4">
//                 <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
//                 <p className="text-sm text-gray-500 mb-2">{product.categoryName}</p>
//                 <div className="flex justify-between items-center">
//                   <span className="text-lg font-bold text-red-600">
//                     {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price}
//                   </span>
//                   <span
//                     className={`px-2 py-1 text-xs rounded-full ${product.inStock ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
//                       }`}
//                   >
//                     {product.inStock ? "In Stock" : "Made to Order"}
//                   </span>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         ))}
//       </div>
//     )
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen p-24">
//       <div className="container mx-auto px-4 py-8">
//         {showNotification && (
//           <div className="fixed top-6 right-6 z-50 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg max-w-md animated fadeIn">
//             <div className="flex items-center">
//               <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//               </svg>
//               <p>
//                 <span className="font-medium">Success!</span> Added {quantity} {product.name} to cart
//               </p>
//             </div>
//           </div>
//         )}

//         {/* Updated Breadcrumb */}
//         <div className="text-sm text-gray-500 mb-6 bg-white p-3 rounded-lg shadow-sm">
//           <Link to="/" className="hover:text-red-600 transition-colors">
//             Home
//           </Link>
//           <span className="mx-2">/</span>
//           <Link to="/products" className="hover:text-red-600 transition-colors">
//             Products
//           </Link>
//           <span className="mx-2">/</span>
//           <Link
//             to={`/products/category/${product.category}`}
//             className="hover:text-red-600 transition-colors"
//           >
//             {product.categoryName}
//           </Link>
//           <span className="mx-2">/</span>
//           <span className="text-gray-700 font-medium">{product.name}</span>
//         </div>

//         {/* Updated Title and Description */}
//         <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
//         <p className="text-gray-600 mb-8">
//           Explore our range of high-quality {product.categoryName} designed for optimal performance in various applications.
//         </p>

//         <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
//             <ProductImageGallery product={product} activeImage={activeImage} setActiveImage={setActiveImage} />

//             <div>
//               <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
//               <div className="text-sm text-gray-500 mb-4 pb-2 border-b border-gray-100">{product.model}</div>

//               <div className="text-2xl font-bold text-red-600 mb-4">
//                 {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price}
//               </div>

//               <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                   <div className="flex items-center">
//                     <span className="text-gray-700 font-medium mr-2">Availability:</span>
//                     {product.inStock ? (
//                       <span className="text-green-600 font-medium flex items-center">
//                         <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
//                           <path
//                             fillRule="evenodd"
//                             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
//                             clipRule="evenodd"
//                           />
//                         </svg>
//                         In Stock
//                       </span>
//                     ) : (
//                       <span className="text-gray-600">Made to Order ({product.leadTime})</span>
//                     )}
//                   </div>

//                   {product.frequency && (
//                     <div className="flex items-center">
//                       <span className="text-gray-700 font-medium mr-2">Frequency:</span>
//                       <span className="text-gray-600">{product.frequency}</span>
//                     </div>
//                   )}

//                   {product.power && (
//                     <div className="flex items-center">
//                       <span className="text-gray-700 font-medium mr-2">Power Rating:</span>
//                       <span className="text-gray-600">{product.power}</span>
//                     </div>
//                   )}

//                   {product.connector && (
//                     <div className="flex items-center">
//                       <span className="text-gray-700 font-medium mr-2">Connector Type:</span>
//                       <span className="text-gray-600">{product.connector}</span>
//                     </div>
//                   )}
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-center mb-4">
//                   <label htmlFor="quantity" className="text-gray-700 font-medium mr-4">
//                     Quantity:
//                   </label>
//                   <div className="flex items-center">
//                     <button
//                       onClick={() => quantity > 1 && setQuantity(quantity - 1)}
//                       className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-10 w-10 rounded-l-md flex items-center justify-center border border-gray-300 border-r-0 transition-colors outline-none focus:ring-2 focus:ring-red-300"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
//                       </svg>
//                     </button>
//                     <input
//                       type="number"
//                       id="quantity"
//                       value={quantity}
//                       onChange={handleQuantityChange}
//                       min="1"
//                       className="h-10 w-16 border border-gray-300 text-center outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300"
//                     />
//                     <button
//                       onClick={() => setQuantity(quantity + 1)}
//                       className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-10 w-10 rounded-r-md flex items-center justify-center border border-gray-300 border-l-0 transition-colors outline-none focus:ring-2 focus:ring-red-300"
//                     >
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex flex-col sm:flex-row gap-4 mt-6">
//                   <button
//                     onClick={handleAddToCart}
//                     className="flex-1 bg-white border-2 border-red-600 hover:bg-red-50 text-red-600 py-3 px-6 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center shadow-sm"
//                   >
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
//                       />
//                     </svg>
//                     Add to Cart
//                   </button>
//                   <Link
//                     to="/request"
//                     state={{ product: product }}
//                     className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center shadow-sm"
//                   >
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth="2"
//                         d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
//                       />
//                     </svg>
//                     Request Quote
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} product={product} />
//         </div>

//         <section className="mt-12">
//           <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
//             <span className="w-1.5 h-6 bg-red-600 rounded-sm mr-2 inline-block"></span>
//             Related Products
//           </h2>
//           <EnhancedRelatedProducts currentProductId={product.id} relatedProducts={relatedProducts} />
//         </section>
//       </div>
//     </div>
//   )
// }

// export default ProductDetailPage


"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { useCart } from "../contexts/CartContext"
import ProductSpecsTable from "../components/products/ProductSpecsTable"
import RelatedProducts from "../components/products/RelatedProducts"
import axios from "axios"

// Configure axios base URL
axios.defaults.baseURL = "http://localhost:5000/api"

const ProductDetailPage = () => {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [product, setProduct] = useState(null)
  const [relatedProducts, setRelatedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [activeImage, setActiveImage] = useState(0)
  const [showNotification, setShowNotification] = useState(false)

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true)
      try {
        // Fetch product details by ID
        const response = await axios.get(`/products/${id}`)
        const productData = response.data

        // Transform the API data to match the frontend's expected structure
        const transformedProduct = {
          id: productData._id,
          name: productData.name,
          model: productData.model,
          category: productData.category,
          categoryName: productData.category
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          images: productData.images || [],
          price: productData.price || "Request Quote",
          frequency: productData.frequency,
          power: productData.power,
          connector: productData.connector,
          description: productData.description,
          specifications: productData.specifications?.reduce((acc, spec) => {
            acc[spec.name] = spec.value
            return acc
          }, {}) || {},
          applications: productData.applications?.split(", ").filter(app => app) || [],
          features: productData.datasheet?.split(", ").filter(feature => feature) || [],
          inStock: productData.inStock,
          leadTime: productData.inStock ? "1-2 weeks" : "3-4 weeks",
          minOrderQuantity: 1,
        }

        setProduct(transformedProduct)
        setError(null)

        // Fetch related products
        const relatedResponse = await axios.get(`/products/related/${id}`)
        const relatedData = relatedResponse.data.map(item => ({
          id: item._id,
          name: item.name,
          slug: item._id,
          category: item.category,
          categoryName: item.category
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" "),
          images: item.images || [],
          price: item.price || "Request Quote",
          frequency: item.frequency,
          inStock: item.inStock,
        }))
        setRelatedProducts(relatedData.length ? relatedData : [])
      } catch (err) {
        console.error("Error fetching product:", err)
        setError("Failed to load product. Please try again later.")
        setProduct(null)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
    setActiveImage(0)
  }, [id])

  const handleQuantityChange = (e) => {
    const value = Number.parseInt(e.target.value)
    if (value > 0) {
      setQuantity(value)
    }
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.images[0] || "https://via.placeholder.com/150",
        quantity,
        category: product.categoryName,
      })

      // Show temporary notification
      setShowNotification(true)
      setTimeout(() => {
        setShowNotification(false)
      }, 3000)
    }
  }

  // LoadingSpinner component
  const LoadingSpinner = () => (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center">
        <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-solid border-red-600 border-r-transparent"></div>
        <p className="mt-4 text-gray-700 font-medium">Loading product details...</p>
      </div>
    </div>
  )

  if (loading) {
    return <LoadingSpinner />
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-lg shadow-sm">
          <p className="font-medium">{error || "Product not found"}</p>
        </div>
        <div className="mt-6">
          <Link
            to="/products"
            className="inline-flex items-center px-5 py-2.5 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 transition-colors"
          >
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  // ProductImageGallery component with conditional thumbnail display
  const ProductImageGallery = ({ product, activeImage, setActiveImage }) => (
    <div>
      <div className="mb-4 rounded-lg overflow-hidden border border-gray-200 bg-white shadow-md">
        <img
          src={product.images[activeImage] || "https://via.placeholder.com/300"}
          alt={product.name}
          className="w-full h-80 object-contain p-4"
        />
      </div>
      {product.images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {product.images.map((image, index) => (
            <button
              key={index}
              onClick={() => setActiveImage(index)}
              className={`border rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow ${activeImage === index ? "border-red-600 ring-2 ring-red-200" : "border-gray-200"
                }`}
            >
              <img
                src={image}
                alt={`${product.name} - View ${index + 1}`}
                className="w-full h-20 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )

  // ProductTabs component with conditional rendering
  const ProductTabs = ({ activeTab, setActiveTab, product }) => {
    const tabs = []
    if (product.description || (product.features && product.features.length > 0)) {
      tabs.push("description")
    }
    if (product.specifications && Object.keys(product.specifications).length > 0) {
      tabs.push("specifications")
    }
    if (product.applications && product.applications.length > 0) {
      tabs.push("applications")
    }

    if (tabs.length === 0) return null

    return (
      <div className="border-t border-gray-200">
        <div className="flex border-b border-gray-200 overflow-x-auto scrollbar-hide">
          {tabs.includes("description") && (
            <button
              onClick={() => setActiveTab("description")}
              className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "description"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Description
            </button>
          )}
          {tabs.includes("specifications") && (
            <button
              onClick={() => setActiveTab("specifications")}
              className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "specifications"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Specifications
            </button>
          )}
          {tabs.includes("applications") && (
            <button
              onClick={() => setActiveTab("applications")}
              className={`py-4 px-6 font-medium text-sm focus:outline-none whitespace-nowrap ${activeTab === "applications"
                ? "text-red-600 border-b-2 border-red-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
            >
              Applications
            </button>
          )}
        </div>

        <div className="p-6">
          {activeTab === "description" && (
            <div>
              {product.description && (
                <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
              )}
              {product.features && product.features.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <svg
                          className="w-5 h-5 text-red-500 mr-2 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          )}

          {activeTab === "specifications" && (
            <div className="bg-white rounded-lg overflow-hidden">
              <ProductSpecsTable specifications={product.specifications} />
            </div>
          )}

          {activeTab === "applications" && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Recommended Applications</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.applications.map((application, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-red-500 mr-2 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{application}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }

  // EnhancedRelatedProducts component
  const EnhancedRelatedProducts = ({ currentProductId, relatedProducts }) => {
    if (!relatedProducts || relatedProducts.length === 0) return null

    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {relatedProducts.map(product => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <Link to={`/products/${product.id}`} className="block">
              <div className="h-48 overflow-hidden">
                <img
                  src={product.images[0] || "https://via.placeholder.com/150"}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.categoryName}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-red-600">
                    {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price}
                  </span>
                  <span
                    className={`px-2 py-1 text-xs rounded-full ${product.inStock ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                      }`}
                  >
                    {product.inStock ? "In Stock" : "Made to Order"}
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen p-24">
      <div className="container mx-auto px-4 py-8">
        {/* Notification */}
        {showNotification && (
          <div className="fixed top-6 right-6 z-50 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg max-w-md animated fadeIn">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <p>
                <span className="font-medium">Success!</span> Added {quantity} {product.name} to cart
              </p>
            </div>
          </div>
        )}

        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-6 bg-white p-3 rounded-lg shadow-sm">
          <Link to="/" className="hover:text-red-600 transition-colors">
            Home
          </Link>
          <span className="mx-2">/</span>
          <Link to="/products" className="hover:text-red-600 transition-colors">
            Products
          </Link>
          <span className="mx-2">/</span>
          <Link
            to={`/products/category/${product.category}`}
            className="hover:text-red-600 transition-colors"
          >
            {product.categoryName}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-700 font-medium">{product.name}</span>
        </div>

        {/* Page Title and Description */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
          <p className="text-gray-600">
            Explore our range of high-quality {product.categoryName} designed for optimal performance in various applications.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            {/* Product Images */}
            <ProductImageGallery product={product} activeImage={activeImage} setActiveImage={setActiveImage} />

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              <div className="text-sm text-gray-500 mb-4 pb-2 border-b border-gray-100">{product.model}</div>

              {/* <div className="text-2xl font-bold text-red-600 mb-4">
                {typeof product.price === "number" ? `$${product.price.toFixed(2)}` : product.price}
              </div> */}

              <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center">
                    <span className="text-gray-700 font-medium mr-2">Availability:</span>
                    {product.inStock ? (
                      <span className="text-green-600 font-medium flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        In Stock
                      </span>
                    ) : (
                      <span className="text-gray-600">Made to Order ({product.leadTime})</span>
                    )}
                  </div>

                  {product.frequency && (
                    <div className="flex items-center">
                      <span className="text-gray-700 font-medium mr-2">Frequency:</span>
                      <span className="text-gray-600">{product.frequency}</span>
                    </div>
                  )}

                  {product.power && (
                    <div className="flex items-center">
                      <span className="text-gray-700 font-medium mr-2">Power Rating:</span>
                      <span className="text-gray-600">{product.power}</span>
                    </div>
                  )}

                  {product.connector && (
                    <div className="flex items-center">
                      <span className="text-gray-700 font-medium mr-2">Connector Type:</span>
                      <span className="text-gray-600">{product.connector}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <label htmlFor="quantity" className="text-gray-700 font-medium mr-4">
                    Quantity:
                  </label>
                  <div className="flex items-center">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-10 w-10 rounded-l-md flex items-center justify-center border border-gray-300 border-r-0 transition-colors outline-none focus:ring-2 focus:ring-red-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
                      </svg>
                    </button>
                    <input
                      type="number"
                      id="quantity"
                      value={quantity}
                      onChange={handleQuantityChange}
                      min="1"
                      className="h-10 w-16 border border-gray-300 text-center outline-none focus:ring-2 focus:ring-red-300 focus:border-red-300"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="bg-gray-100 text-gray-600 hover:bg-gray-200 h-10 w-10 rounded-r-md flex items-center justify-center border border-gray-300 border-l-0 transition-colors outline-none focus:ring-2 focus:ring-red-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-white border-2 border-red-600 hover:bg-red-50 text-red-600 py-3 px-6 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center shadow-sm"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    Add to Cart
                  </button>
                  <Link
                    to="/request"
                    state={{ product: product }}
                    className="flex-1 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-md font-semibold transition-colors duration-300 flex items-center justify-center shadow-sm"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                    Request Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <ProductTabs activeTab={activeTab} setActiveTab={setActiveTab} product={product} />
        </div>

        {/* Related Products */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <span className="w-1.5 h-6 bg-red-600 rounded-sm mr-2 inline-block"></span>
            Related Products
          </h2>
          <EnhancedRelatedProducts currentProductId={product.id} relatedProducts={relatedProducts} />
        </section>
      </div>
    </div>
  )
}

export default ProductDetailPage