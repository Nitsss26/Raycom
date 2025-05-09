// "use client"

// import { useState, useEffect } from "react"
// import { useParams, Link } from "react-router-dom"
// import { motion } from "framer-motion"
// import { ChevronDown, X, SlidersHorizontal } from "lucide-react"
// import ProductCard from "../components/products/ProductCard"
// import { fetchProductsByCategory } from "../services/api"

// const ProductCategoryPage = () => {
//   const { category } = useParams()
//   const [products, setProducts] = useState([])
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [filters, setFilters] = useState({
//     frequency: [],
//     power: [],
//     connector: [],
//   })
//   const [showFilters, setShowFilters] = useState(false)
//   const [sortBy, setSortBy] = useState("featured")

//   useEffect(() => {
//     const loadProducts = async () => {
//       setLoading(true)
//       try {
//         const data = await fetchProductsByCategory(category)
//         setProducts(data)
//         setError(null)
//       } catch (err) {
//         setError("Failed to load products. Please try again later.")
//         setProducts([])
//       } finally {
//         setLoading(false)
//       }
//     }

//     loadProducts()
//   }, [category])

//   const handleFilterChange = (filterType, value) => {
//     setFilters((prev) => {
//       const updatedFilters = { ...prev }
//       if (updatedFilters[filterType].includes(value)) {
//         updatedFilters[filterType] = updatedFilters[filterType].filter((item) => item !== value)
//       } else {
//         updatedFilters[filterType] = [...updatedFilters[filterType], value]
//       }
//       return updatedFilters
//     })
//   }

//   const clearFilters = () => {
//     setFilters({
//       frequency: [],
//       power: [],
//       connector: [],
//     })
//   }

//   const toggleFilters = () => {
//     setShowFilters(!showFilters)
//   }

//   const handleSortChange = (e) => {
//     setSortBy(e.target.value)
//   }

//   // Filter products based on selected filters
//   const filteredProducts = products.filter((product) => {
//     // Apply filters logic here
//     return true // Placeholder - will implement actual filtering logic
//   })

//   // Sort products based on selected sort option
//   const sortedProducts = [...filteredProducts].sort((a, b) => {
//     switch (sortBy) {
//       case "price-low":
//         return a.price - b.price
//       case "price-high":
//         return b.price - a.price
//       case "newest":
//         return new Date(b.createdAt) - new Date(a.createdAt)
//       default:
//         return 0 // featured
//     }
//   })

//   const getCategoryTitle = () => {
//     return category
//       .split("-")
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(" ")
//   }

//   return (
//     <div className="pt-24 pb-16">
//       <div className="container mx-auto px-4">
//         {/* Breadcrumb */}
//         <div className="text-sm breadcrumbs mb-6">
//           <ul className="flex items-center space-x-2">
//             <li>
//               <Link to="/" className="text-gray-500 hover:text-red-600">
//                 Home
//               </Link>
//             </li>
//             <li>
//               <span className="text-gray-500">/</span>
//             </li>
//             <li>
//               <Link to="/products" className="text-gray-500 hover:text-red-600">
//                 Products
//               </Link>
//             </li>
//             <li>
//               <span className="text-gray-500">/</span>
//             </li>
//             <li className="text-gray-900 font-medium">{getCategoryTitle()}</li>
//           </ul>
//         </div>

//         {/* Category Header */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold mb-2">{getCategoryTitle()}</h1>
//           <p className="text-gray-600">
//             Explore our range of high-quality {getCategoryTitle()} designed for optimal performance in various
//             applications.
//           </p>
//         </div>

//         {/* Filters and Products */}
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Horizontal Filter Bar (Modern UI approach instead of sidebar) */}
//           <div className="w-full bg-white rounded-lg shadow-sm p-4 mb-6">
//             <div className="flex flex-wrap items-center justify-between gap-4">
//               <div className="flex items-center">
//                 <button
//                   onClick={toggleFilters}
//                   className="flex items-center text-gray-700 hover:text-red-600 font-medium"
//                 >
//                   <SlidersHorizontal className="h-5 w-5 mr-2" />
//                   Filters
//                   <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showFilters ? "rotate-180" : ""}`} />
//                 </button>
//                 {Object.values(filters).some((arr) => arr.length > 0) && (
//                   <button
//                     onClick={clearFilters}
//                     className="ml-4 text-sm text-red-600 hover:text-red-700 flex items-center"
//                   >
//                     <X className="h-4 w-4 mr-1" /> Clear All
//                   </button>
//                 )}
//               </div>

//               <div className="flex items-center">
//                 <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
//                   Sort by:
//                 </label>
//                 <select
//                   id="sort"
//                   value={sortBy}
//                   onChange={handleSortChange}
//                   className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
//                 >
//                   <option value="featured">Featured</option>
//                   <option value="newest">Newest</option>
//                   <option value="price-low">Price: Low to High</option>
//                   <option value="price-high">Price: High to Low</option>
//                 </select>
//               </div>
//             </div>

//             {/* Expandable Filter Options */}
//             <motion.div
//               initial={{ height: 0, opacity: 0 }}
//               animate={{
//                 height: showFilters ? "auto" : 0,
//                 opacity: showFilters ? 1 : 0,
//               }}
//               transition={{ duration: 0.3 }}
//               className="overflow-hidden"
//             >
//               <div className="pt-4 mt-4 border-t">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                   {/* Frequency Range Filter */}
//                   <div>
//                     <h3 className="font-medium mb-2">Frequency Range</h3>
//                     <div className="space-y-2">
//                       {["DC-1", "DC-2", "DC-4", "DC-8"].map((freq) => (
//                         <label key={freq} className="flex items-center">
//                           <input
//                             type="checkbox"
//                             checked={filters.frequency.includes(freq)}
//                             onChange={() => handleFilterChange("frequency", freq)}
//                             className="rounded text-red-600 focus:ring-red-500 mr-2"
//                           />
//                           <span className="text-sm">{freq} GHz</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Power Rating Filter */}
//                   <div>
//                     <h3 className="font-medium mb-2">Power Rating</h3>
//                     <div className="space-y-2">
//                       {["1000", "2000", "3000", "5000", "10000"].map((power) => (
//                         <label key={power} className="flex items-center">
//                           <input
//                             type="checkbox"
//                             checked={filters.power.includes(power)}
//                             onChange={() => handleFilterChange("power", power)}
//                             className="rounded text-red-600 focus:ring-red-500 mr-2"
//                           />
//                           <span className="text-sm">{power} W</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>

//                   {/* Connector Type Filter */}
//                   <div>
//                     <h3 className="font-medium mb-2">Connector Type</h3>
//                     <div className="space-y-2">
//                       {["N", "N/7/16", "L27,7/16", "N/7/16,L27"].map((conn) => (
//                         <label key={conn} className="flex items-center">
//                           <input
//                             type="checkbox"
//                             checked={filters.connector.includes(conn)}
//                             onChange={() => handleFilterChange("connector", conn)}
//                             className="rounded text-red-600 focus:ring-red-500 mr-2"
//                           />
//                           <span className="text-sm">{conn}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           </div>

//           {/* Products Grid */}
//           <div className="w-full">
//             {loading ? (
//               <div className="flex justify-center items-center h-64">
//                 <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
//               </div>
//             ) : error ? (
//               <div className="bg-red-100 text-red-700 p-4 rounded-lg">{error}</div>
//             ) : sortedProducts.length === 0 ? (
//               <div className="text-center py-12">
//                 <h3 className="text-xl font-medium mb-2">No products found</h3>
//                 <p className="text-gray-600 mb-4">Try adjusting your filters or browse our other categories.</p>
//                 <Link to="/products" className="btn btn-primary">
//                   View All Products
//                 </Link>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//                 {sortedProducts.map((product) => (
//                   <ProductCard key={product.id} product={product} />
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProductCategoryPage


"use client"

import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ChevronDown, X, SlidersHorizontal, List } from "lucide-react"
import ProductCard from "../components/products/ProductCard"
import { fetchProductsByCategory } from "../services/api"

const ProductCategoryPage = () => {
  const { category } = useParams()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filters, setFilters] = useState({
    frequency: [],
    power: [],
    connector: [],
  })
  const [showFilters, setShowFilters] = useState(true)
  const [sortBy, setSortBy] = useState("featured")
  const [viewMode, setViewMode] = useState("grid") // 'grid' or 'list'

  useEffect(() => {

    window.scrollTo(0, 0);
    const loadProducts = async () => {
      setLoading(true)
      try {
        const response = await fetchProductsByCategory(category)
        // Handle different API response structures
        const data = Array.isArray(response)
          ? response
          : response?.data?.products || response?.products || response?.data || []

        if (!Array.isArray(data)) {
          throw new Error("Invalid products data format")
        }

        setProducts(data)
        setError(null)
      } catch (err) {
        console.error("Error loading products:", err)
        setError("Failed to load products. Please try again later.")
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [category])

  const handleFilterChange = (filterType, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: prev[filterType].includes(value)
        ? prev[filterType].filter((item) => item !== value)
        : [...prev[filterType], value]
    }))
  }

  const clearFilters = () => {
    setFilters({
      frequency: [],
      power: [],
      connector: [],
    })
  }

  const toggleFilters = () => {
    setShowFilters(!showFilters)
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
    // Apply frequency filter
    if (filters.frequency.length > 0 && product.frequency &&
      !filters.frequency.some((f) => product.frequency.includes(f))) {
      return false
    }

    // Apply power filter
    if (filters.power.length > 0 && product.power &&
      !filters.power.includes(product.power)) {
      return false
    }

    // Apply connector filter
    if (filters.connector.length > 0 && product.connector &&
      !filters.connector.some((c) => product.connector.includes(c))) {
      return false
    }

    return true
  })

  // Sort products based on selected sort option
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-low":
        return (a.price || 0) - (b.price || 0)
      case "price-high":
        return (b.price || 0) - (a.price || 0)
      case "newest":
        return new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
      default:
        return 0 // featured
    }
  })

  const getCategoryTitle = () => {
    return category
      ?.split("-")
      ?.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      ?.join(" ") || "Products"
  }

  // Get unique values for filter options
  const getFilterOptions = (field) => {
    const values = products
      .map((product) => product[field])
      .filter((val) => val !== undefined && val !== null)

    if (field === "frequency") {
      const freqValues = new Set()
      values.forEach((val) => {
        if (typeof val === "string" && val.includes("DC-")) {
          freqValues.add(val)
        }
      })
      return Array.from(freqValues).sort()
    }

    // if (field === "connector") {
    //   const connectorValues = new Set()
    //   values.forEach((val) => {
    //     if (typeof val === "string") {
    //       if (val.includes("/") || val.includes(",")) {
    //         val.split(/[/,]/).forEach((c) => connectorValues.add(c.trim()))
    //       } else {
    //         connectorValues.add(val)
    //       }
    //     }
    //   })
    //   return Array.from(connectorValues).sort()
    // }
    if (field === "connector") {
      const connectorValues = new Set();
      values.forEach((val) => {
        if (typeof val === "string") {
          // Split only by ',' and keep the full connector names together
          const parts = val.split(",");
          parts.forEach((part) => {
            // Trim any spaces around the part and add it to the set
            connectorValues.add(part.trim());
          });
        }
      });

      return Array.from(connectorValues).sort();
    }


    return [...new Set(values)].sort()
  }

  const frequencyOptions = getFilterOptions("frequency")
  const powerOptions = getFilterOptions("power")
  const connectorOptions = getFilterOptions("connector")

  return (
    <div className="pt-24 pb-16 bg-slate-100">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm breadcrumbs mb-6">
          <ul className="flex items-center space-x-2">
            <li>
              <Link to="/" className="text-gray-500 hover:text-red-600">
                Home
              </Link>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li>
              <Link to="/products" className="text-gray-500 hover:text-red-600">
                Products
              </Link>
            </li>
            <li>
              <span className="text-gray-500">/</span>
            </li>
            <li className="text-gray-900 font-medium">{getCategoryTitle()}</li>
          </ul>
        </div>

        {/* Category Header */}
        <div className="mb-4 flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-6">
          <h1 className="text-3xl font-bold whitespace-nowrap">{getCategoryTitle()}</h1>
          <p className="text-gray-900 mt-1 ml-16 text-lg">
            Explore our range of high-quality {getCategoryTitle()} designed for optimal performance in various applications.
          </p>
        </div>


        {/* Filters and Products */}
        <div className="flex flex-col gap-8">
          {/* Horizontal Filter Bar */}
          <div className="w-full bg-white rounded-lg shadow-sm p-4 mb-2">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center">
                <button
                  onClick={toggleFilters}
                  className="flex items-center text-gray-700 hover:text-red-600 font-medium"
                >
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Filters
                  <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </button>
                {Object.values(filters).some((arr) => arr.length > 0) && (
                  <button
                    onClick={clearFilters}
                    className="ml-4 text-sm text-red-600 hover:text-red-700 flex items-center"
                  >
                    <X className="h-4 w-4 mr-1" /> Clear All
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <label htmlFor="sort" className="text-sm text-gray-600 mr-2">
                    Sort by:
                  </label>
                  <select
                    id="sort"
                    value={sortBy}
                    onChange={handleSortChange}
                    className="border border-gray-300 rounded-md px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <option value="featured">Featured</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                </div>

                <div className="flex items-center space-x-2 border-l pl-4">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-1.5 rounded ${viewMode === "grid" ? "bg-gray-100 text-red-600" : "text-gray-500 hover:text-gray-700"}`}
                    aria-label="Grid view"
                  >
                    <SlidersHorizontal className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-1.5 rounded ${viewMode === "list" ? "bg-gray-100 text-red-600" : "text-gray-500 hover:text-gray-700"}`}
                    aria-label="List view"
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Expandable Filter Options */}
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: showFilters ? "auto" : 0,
                opacity: showFilters ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 mt-4 border-t">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Frequency Range Filter */}
                  {frequencyOptions.length > 0 && (
                    <div>
                      <h3 className="font-medium mb-2">Frequency Range</h3>
                      <div className="space-y-2">
                        {frequencyOptions.map((freq) => (
                          <label key={freq} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={filters.frequency.includes(freq)}
                              onChange={() => handleFilterChange("frequency", freq)}
                              className="rounded text-red-600 focus:ring-red-500 mr-2"
                            />
                            <span className="text-sm">{freq} GHz</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Power Rating Filter */}
                  {powerOptions.length > 0 && (
                    <div>
                      <h3 className="font-medium mb-2">Power Rating</h3>
                      <div className="space-y-2">
                        {powerOptions.map((power) => (
                          <label key={power} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={filters.power.includes(power)}
                              onChange={() => handleFilterChange("power", power)}
                              className="rounded text-red-600 focus:ring-red-500 mr-2"
                            />
                            <span className="text-sm">{power} W</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Connector Type Filter */}
                  {connectorOptions.length > 0 && (
                    <div>
                      <h3 className="font-medium mb-2">Connector Type</h3>
                      <div className="space-y-2">
                        {connectorOptions.map((conn) => (
                          <label key={conn} className="flex items-center">
                            <input
                              type="checkbox"
                              checked={filters.connector.includes(conn)}
                              onChange={() => handleFilterChange("connector", conn)}
                              className="rounded text-red-600 focus:ring-red-500 mr-2"
                            />
                            <span className="text-sm">{conn}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Products Grid/List */}
          <div className="w-full">
            {loading ? (
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
              </div>
            ) : error ? (
              <div className="bg-red-100 text-red-700 p-4 rounded-lg">{error}</div>
            ) : sortedProducts.length === 0 ? (
              <div className="text-center py-12">
                <h3 className="text-xl font-medium mb-2">No products found</h3>
                <p className="text-gray-600 mb-4">Try adjusting your filters or browse our other categories.</p>
                <Link to="/products" className="btn btn-primary">
                  View All Products
                </Link>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sortedProducts.map((product) => (
                  <motion.div
                    key={product.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ y: -5 }}
                  >
                    <Link to={`/products/${product.category}/${product.id}`} className="flex">
                      <div className="w-1/4 p-4 flex items-center justify-center bg-gray-50">
                        <img
                          src={product.images[0] || "/images/placeholder-product.png"}
                          alt={product.name}
                          className="max-h-32 max-w-full object-contain"
                        />
                      </div>
                      <div className="w-3/4 p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-900 mb-1">{product.name}</h3>
                            <p className="text-sm text-gray-500 mb-2">Model: {product.model}</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                              {product.frequency && (
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                  {product.frequency} GHz
                                </span>
                              )}
                              {product.power && (
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                  {product.power} W
                                </span>
                              )}
                              {product.connector && (
                                <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded">
                                  {product.connector}
                                </span>
                              )}
                            </div>
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {product.description?.substring(0, 120)}...
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-lg font-bold text-gray-900 block mb-2">
                              {product.price ? `$${product.price.toFixed(2)}` : "Request Quote"}
                            </span>
                            <span
                              className={`inline-block px-2 py-1 rounded text-xs font-medium ${product.inStock ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"
                                }`}
                            >
                              {product.inStock ? "In Stock" : "Made to Order"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCategoryPage