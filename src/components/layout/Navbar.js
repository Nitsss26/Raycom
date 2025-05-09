// // // // // // "use client"

// // // // // // import { useState, useEffect } from "react"
// // // // // // import { Link, useLocation } from "react-router-dom"
// // // // // // import { motion } from "framer-motion"
// // // // // // import { useCart } from "../../contexts/CartContext"
// // // // // // import { ShoppingCart, Menu, X, Search } from "lucide-react"

// // // // // // const Navbar = () => {
// // // // // //   const [isOpen, setIsOpen] = useState(false)
// // // // // //   const [isScrolled, setIsScrolled] = useState(false)
// // // // // //   const [searchQuery, setSearchQuery] = useState("")
// // // // // //   const { cart } = useCart()
// // // // // //   const location = useLocation()

// // // // // //   const totalItems = cart?.reduce((total, item) => total + item.quantity, 0)

// // // // // //   useEffect(() => {
// // // // // //     const handleScroll = () => {
// // // // // //       if (window.scrollY > 50) {
// // // // // //         setIsScrolled(true)
// // // // // //       } else {
// // // // // //         setIsScrolled(false)
// // // // // //       }
// // // // // //     }

// // // // // //     window.addEventListener("scroll", handleScroll)
// // // // // //     return () => window.removeEventListener("scroll", handleScroll)
// // // // // //   }, [])

// // // // // //   useEffect(() => {
// // // // // //     setIsOpen(false)
// // // // // //   }, [location])

// // // // // //   const handleSearch = (e) => {
// // // // // //     e.preventDefault()
// // // // // //     // Implement search functionality
// // // // // //     console.log("Searching for:", searchQuery)
// // // // // //   }

// // // // // //   const navLinks = [
// // // // // //     { name: "Home", path: "/" },
// // // // // //     { name: "Products", path: "/products" },
// // // // // //     { name: "Services", path: "/services" },
// // // // // //     { name: "About Us", path: "/about" },
// // // // // //     { name: "Contact Us", path: "/contact" },
// // // // // //     { name: "FAQ", path: "/faq" },
// // // // // //     { name: "Application", path: "/application" },
// // // // // //     { name: "Terms & Conditions", path: "/terms" },
// // // // // //   ]

// // // // // //   return (
// // // // // //     <header
// // // // // //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1d2130] shadow-md py-2" : "bg-[#1d2130] py-0"
// // // // // //         }`}
// // // // // //     >
// // // // // //       <div className="container mx-auto px-4 ">
// // // // // //         <div className="flex items-center justify-between ">
// // // // // //           {/* Logo */}
// // // // // //           <Link to="/" className="flex items-center">
// // // // // //             <motion.div
// // // // // //               initial={{ opacity: 0, x: -20 }}
// // // // // //               animate={{ opacity: 1, x: 0 }}
// // // // // //               transition={{ duration: 0.5 }}
// // // // // //             >
// // // // // //               <img
// // // // // //                 src="https://i.ibb.co/d43CC8M6/Screenshot-2025-05-05-154412-1-1-removebg-preview-1-1.png"
// // // // // //                 alt="Raycom"
// // // // // //                 className="h-14 w-auto max-h-full sm:h-20 sm:w-auto max-w-[120px] sm:max-w-[140px] object-contain mr-3"
// // // // // //                 onError={(e) => (e.target.src = "/fallback-logo.png")} // Optional: Fallback image
// // // // // //               />
// // // // // //             </motion.div>
// // // // // //           </Link>
// // // // // //           {/* <Link to="/" className="flex items-center">
// // // // // //             <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
// // // // // //               <img src="https://i.ibb.co/d43CC8M6/Screenshot-2025-05-05-154412-1-1-removebg-preview-1-1.png" alt="Raycom" className="w-12 h-12 mr-3" />
// // // // // //             </motion.div>
// // // // // //           </Link> */}

// // // // // //           {/* Desktop Navigation */}
// // // // // //           <nav className="hidden lg:flex items-center space-x-1 ">
// // // // // //             {navLinks.map((link) => (
// // // // // //               <Link
// // // // // //                 key={link.name}
// // // // // //                 to={link.path}
// // // // // //                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? "text-red-600 font-semibold" : "text-white hover:text-red-600"}`}

// // // // // //               >
// // // // // //                 {link.name}
// // // // // //               </Link>
// // // // // //             ))}
// // // // // //           </nav>

// // // // // //           {/* Search and Cart */}
// // // // // //           <div className="hidden md:flex items-center space-x-4">
// // // // // //             <form onSubmit={handleSearch} className="relative">
// // // // // //               <input
// // // // // //                 type="text"
// // // // // //                 placeholder="Search products..."
// // // // // //                 value={searchQuery}
// // // // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // // // //                 className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // // //               />
// // // // // //               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// // // // // //             </form>
// // // // // //             <Link to="/cart" className="relative">
// // // // // //               <ShoppingCart className="h-6 w-6 text-red-600 hover:text-red-700 transition-colors duration-200" />
// // // // // //               {totalItems > 0 && (
// // // // // //                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// // // // // //                   {totalItems}
// // // // // //                 </span>
// // // // // //               )}
// // // // // //             </Link>
// // // // // //           </div>

// // // // // //           {/* Mobile Menu Button */}
// // // // // //           <div className="flex items-center lg:hidden">
// // // // // //             <Link to="/cart" className="relative mr-4">
// // // // // //               <ShoppingCart className="h-6 w-6 text-gray-700" />
// // // // // //               {totalItems > 0 && (
// // // // // //                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// // // // // //                   {totalItems}
// // // // // //                 </span>
// // // // // //               )}
// // // // // //             </Link>
// // // // // //             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none">
// // // // // //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // // // // //             </button>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Mobile Menu */}
// // // // // //       <motion.div
// // // // // //         initial={{ height: 0, opacity: 0 }}
// // // // // //         animate={{
// // // // // //           height: isOpen ? "auto" : 0,
// // // // // //           opacity: isOpen ? 1 : 0,
// // // // // //         }}
// // // // // //         transition={{ duration: 0.3 }}
// // // // // //         className="lg:hidden overflow-hidden bg-white"
// // // // // //       >
// // // // // //         <div className="container mx-auto px-4 py-2">
// // // // // //           <form onSubmit={handleSearch} className="relative mb-4">
// // // // // //             <input
// // // // // //               type="text"
// // // // // //               placeholder="Search products..."
// // // // // //               value={searchQuery}
// // // // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // // // //               className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // // //             />
// // // // // //             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// // // // // //           </form>
// // // // // //           <div className="flex flex-col space-y-2">
// // // // // //             {navLinks.map((link) => (
// // // // // //               <Link
// // // // // //                 key={link.name}
// // // // // //                 to={link.path}
// // // // // //                 className={`px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "text-red-600 bg-red-50" : "text-gray-700 hover:bg-gray-100"
// // // // // //                   }`}
// // // // // //               >
// // // // // //                 {link.name}
// // // // // //               </Link>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </motion.div>
// // // // // //     </header>
// // // // // //   )
// // // // // // }

// // // // // // export default Navbar


// // // // // "use client"

// // // // // import { useState, useEffect, useRef } from "react"
// // // // // import { Link, useLocation, useNavigate } from "react-router-dom"
// // // // // import { motion } from "framer-motion"
// // // // // import { useCart } from "../../contexts/CartContext"
// // // // // import { ShoppingCart, Menu, X, Search } from "lucide-react"

// // // // // const Navbar = () => {
// // // // //   const [isOpen, setIsOpen] = useState(false)
// // // // //   const [isScrolled, setIsScrolled] = useState(false)
// // // // //   const [searchQuery, setSearchQuery] = useState("")
// // // // //   const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)
// // // // //   const [filteredCategories, setFilteredCategories] = useState([])
// // // // //   const { cart } = useCart()
// // // // //   const location = useLocation()
// // // // //   const navigate = useNavigate()
// // // // //   const searchRef = useRef(null)

// // // // //   const totalItems = cart?.reduce((total, item) => total + item.quantity, 0)

// // // // //   // Predefined categories
// // // // //   const categories = ["waveguide", "attenuator", "circulator", "filter", "isolator", "coupler"]

// // // // //   useEffect(() => {
// // // // //     const handleScroll = () => {
// // // // //       if (window.scrollY > 50) {
// // // // //         setIsScrolled(true)
// // // // //       } else {
// // // // //         setIsScrolled(false)
// // // // //       }
// // // // //     }

// // // // //     window.addEventListener("scroll", handleScroll)
// // // // //     return () => window.removeEventListener("scroll", handleScroll)
// // // // //   }, [])

// // // // //   useEffect(() => {
// // // // //     setIsOpen(false)
// // // // //     setIsSearchDropdownOpen(false)
// // // // //   }, [location])

// // // // //   // Filter categories based on search query
// // // // //   useEffect(() => {
// // // // //     if (searchQuery.trim() === "") {
// // // // //       setFilteredCategories([])
// // // // //       setIsSearchDropdownOpen(false)
// // // // //     } else {
// // // // //       const filtered = categories.filter(category =>
// // // // //         category.toLowerCase().includes(searchQuery.toLowerCase())
// // // // //       )
// // // // //       setFilteredCategories(filtered)
// // // // //       setIsSearchDropdownOpen(filtered.length > 0)
// // // // //     }
// // // // //   }, [searchQuery])

// // // // //   // Close search dropdown when clicking outside
// // // // //   useEffect(() => {
// // // // //     const handleClickOutside = (event) => {
// // // // //       if (searchRef.current && !searchRef.current.contains(event.target)) {
// // // // //         setIsSearchDropdownOpen(false)
// // // // //       }
// // // // //     }

// // // // //     document.addEventListener("mousedown", handleClickOutside)
// // // // //     return () => document.removeEventListener("mousedown", handleClickOutside)
// // // // //   }, [])

// // // // //   const handleSearch = (e) => {
// // // // //     e.preventDefault()
// // // // //     if (searchQuery.trim() === "") return

// // // // //     const matchedCategory = categories.find(category =>
// // // // //       category.toLowerCase() === searchQuery.toLowerCase()
// // // // //     )

// // // // //     if (matchedCategory) {
// // // // //       navigate(`/category/${matchedCategory}`)
// // // // //       setSearchQuery("")
// // // // //       setIsSearchDropdownOpen(false)
// // // // //     } else {
// // // // //       // Optionally show a message if no category matches
// // // // //       alert(`No category found for "${searchQuery}". Please try "waveguide", "attenuator", "circulator", "filter", "isolator", or "coupler".`)
// // // // //     }
// // // // //   }

// // // // //   const handleCategorySelect = (category) => {
// // // // //     navigate(`products/category/${category}`)
// // // // //     setSearchQuery("")
// // // // //     setIsSearchDropdownOpen(false)
// // // // //   }

// // // // //   const navLinks = [
// // // // //     { name: "Home", path: "/" },
// // // // //     { name: "Products", path: "/products" },
// // // // //     { name: "Services", path: "/services" },
// // // // //     { name: "About Us", path: "/about" },
// // // // //     { name: "Contact Us", path: "/contact" },
// // // // //     { name: "FAQ", path: "/faq" },
// // // // //     { name: "Application", path: "/application" },
// // // // //     { name: "Terms & Conditions", path: "/terms" },
// // // // //   ]

// // // // //   return (
// // // // //     <header
// // // // //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1d2130] shadow-md py-2" : "bg-[#1d2130] py-0"}`}
// // // // //     >
// // // // //       <div className="container mx-auto px-4">
// // // // //         <div className="flex items-center justify-between">
// // // // //           {/* Logo */}
// // // // //           <Link to="/" className="flex items-center">
// // // // //             <motion.div
// // // // //               initial={{ opacity: 0, x: -20 }}
// // // // //               animate={{ opacity: 1, x: 0 }}
// // // // //               transition={{ duration: 0.5 }}
// // // // //             >
// // // // //               <img
// // // // //                 src="https://i.ibb.co/d43CC8M6/Screenshot-2025-05-05-154412-1-1-removebg-preview-1-1.png"
// // // // //                 alt="Raycom"
// // // // //                 className="h-14 w-auto max-h-full sm:h-20 sm:w-auto max-w-[120px] sm:max-w-[140px] object-contain mr-3"
// // // // //                 onError={(e) => (e.target.src = "/fallback-logo.png")} // Optional: Fallback image
// // // // //               />
// // // // //             </motion.div>
// // // // //           </Link>

// // // // //           {/* Desktop Navigation */}
// // // // //           <nav className="hidden lg:flex items-center space-x-1">
// // // // //             {navLinks.map((link) => (
// // // // //               <Link
// // // // //                 key={link.name}
// // // // //                 to={link.path}
// // // // //                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? "text-red-600 font-semibold" : "text-white hover:text-red-600"}`}
// // // // //               >
// // // // //                 {link.name}
// // // // //               </Link>
// // // // //             ))}
// // // // //           </nav>

// // // // //           {/* Search and Cart */}
// // // // //           <div className="hidden md:flex items-center space-x-4">
// // // // //             <div className="relative" ref={searchRef}>
// // // // //               <form onSubmit={handleSearch}>
// // // // //                 <input
// // // // //                   type="text"
// // // // //                   placeholder="Search products..."
// // // // //                   value={searchQuery}
// // // // //                   onChange={(e) => setSearchQuery(e.target.value)}
// // // // //                   className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // //                 />
// // // // //                 <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// // // // //               </form>
// // // // //               {/* Search Suggestions Dropdown */}
// // // // //               {isSearchDropdownOpen && (
// // // // //                 <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
// // // // //                   {filteredCategories.map((category) => (
// // // // //                     <button
// // // // //                       key={category}
// // // // //                       onClick={() => handleCategorySelect(category)}
// // // // //                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
// // // // //                     >
// // // // //                       {category.charAt(0).toUpperCase() + category.slice(1)}
// // // // //                     </button>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               )}
// // // // //             </div>
// // // // //             <Link to="/cart" className="relative">
// // // // //               <ShoppingCart className="h-6 w-6 text-red-600 hover:text-red-700 transition-colors duration-200" />
// // // // //               {totalItems > 0 && (
// // // // //                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// // // // //                   {totalItems}
// // // // //                 </span>
// // // // //               )}
// // // // //             </Link>
// // // // //           </div>

// // // // //           {/* Mobile Menu Button */}
// // // // //           <div className="flex items-center lg:hidden">
// // // // //             <Link to="/cart" className="relative mr-4">
// // // // //               <ShoppingCart className="h-6 w-6 text-gray-700" />
// // // // //               {totalItems > 0 && (
// // // // //                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// // // // //                   {totalItems}
// // // // //                 </span>
// // // // //               )}
// // // // //             </Link>
// // // // //             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none">
// // // // //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // // // //             </button>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Mobile Menu */}
// // // // //       <motion.div
// // // // //         initial={{ height: 0, opacity: 0 }}
// // // // //         animate={{
// // // // //           height: isOpen ? "auto" : 0,
// // // // //           opacity: isOpen ? 1 : 0,
// // // // //         }}
// // // // //         transition={{ duration: 0.3 }}
// // // // //         className="lg:hidden overflow-hidden bg-white"
// // // // //       >
// // // // //         <div className="container mx-auto px-4 py-2">
// // // // //           <div className="relative" ref={searchRef}>
// // // // //             <form onSubmit={handleSearch} className="relative mb-4">
// // // // //               <input
// // // // //                 type="text"
// // // // //                 placeholder="Search products..."
// // // // //                 value={searchQuery}
// // // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // // //                 className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // // //               />
// // // // //               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// // // // //             </form>
// // // // //             {/* Search Suggestions Dropdown for Mobile */}
// // // // //             {isSearchDropdownOpen && (
// // // // //               <div className="absolute top-12 left-0 mt-1 w-full bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
// // // // //                 {filteredCategories.map((category) => (
// // // // //                   <button
// // // // //                     key={category}
// // // // //                     onClick={() => handleCategorySelect(category)}
// // // // //                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200"
// // // // //                   >
// // // // //                     {category.charAt(0).toUpperCase() + category.slice(1)}
// // // // //                   </button>
// // // // //                 ))}
// // // // //               </div>
// // // // //             )}
// // // // //           </div>
// // // // //           <div className="flex flex-col space-y-2">
// // // // //             {navLinks.map((link) => (
// // // // //               <Link
// // // // //                 key={link.name}
// // // // //                 to={link.path}
// // // // //                 className={`px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "text-red-600 bg-red-50" : "text-gray-700 hover:bg-gray-100"}`}
// // // // //               >
// // // // //                 {link.name}
// // // // //               </Link>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </motion.div>
// // // // //     </header>
// // // // //   )
// // // // // }

// // // // // export default Navbar


// // // // "use client"

// // // // import { useState, useEffect, useRef } from "react"
// // // // import { Link, useLocation, useNavigate } from "react-router-dom"
// // // // import { motion } from "framer-motion"
// // // // import { useCart } from "../../contexts/CartContext"
// // // // import { ShoppingCart, Menu, X, Search } from "lucide-react"

// // // // const Navbar = () => {
// // // //   const [isOpen, setIsOpen] = useState(false)
// // // //   const [isScrolled, setIsScrolled] = useState(false)
// // // //   const [searchQuery, setSearchQuery] = useState("")
// // // //   const [searchSuggestions, setSearchSuggestions] = useState([])
// // // //   const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)
// // // //   const { cart } = useCart()
// // // //   const location = useLocation()
// // // //   const navigate = useNavigate()
// // // //   const searchRef = useRef(null)

// // // //   const totalItems = cart?.reduce((total, item) => total + item.quantity, 0)

// // // //   // List of categories for search
// // // //   const categories = [
// // // //     "waveguide",
// // // //     "attenuator",
// // // //     "circulator",
// // // //     "filter",
// // // //     "isolator",
// // // //     "coupler"
// // // //   ]

// // // //   useEffect(() => {
// // // //     const handleScroll = () => {
// // // //       if (window.scrollY > 50) {
// // // //         setIsScrolled(true)
// // // //       } else {
// // // //         setIsScrolled(false)
// // // //       }
// // // //     }

// // // //     window.addEventListener("scroll", handleScroll)
// // // //     return () => window.removeEventListener("scroll", handleScroll)
// // // //   }, [])

// // // //   useEffect(() => {
// // // //     setIsOpen(false)
// // // //     setIsSearchDropdownOpen(false)
// // // //     setSearchQuery("")
// // // //   }, [location])

// // // //   // Handle search input and suggestions
// // // //   useEffect(() => {
// // // //     if (searchQuery.trim() === "") {
// // // //       setSearchSuggestions([])
// // // //       setIsSearchDropdownOpen(false)
// // // //       return
// // // //     }

// // // //     const filteredCategories = categories.filter(category =>
// // // //       category.toLowerCase().includes(searchQuery.toLowerCase())
// // // //     )
// // // //     setSearchSuggestions(filteredCategories)
// // // //     setIsSearchDropdownOpen(filteredCategories.length > 0)
// // // //   }, [searchQuery])

// // // //   // Handle clicks outside the search dropdown to close it
// // // //   useEffect(() => {
// // // //     const handleClickOutside = (event) => {
// // // //       if (searchRef.current && !searchRef.current.contains(event.target)) {
// // // //         setIsSearchDropdownOpen(false)
// // // //       }
// // // //     }

// // // //     document.addEventListener("mousedown", handleClickOutside)
// // // //     return () => document.removeEventListener("mousedown", handleClickOutside)
// // // //   }, [])

// // // //   const handleSearch = (e) => {
// // // //     e.preventDefault()
// // // //     if (searchQuery.trim() === "") return

// // // //     const matchedCategory = categories.find(category =>
// // // //       category.toLowerCase() === searchQuery.toLowerCase()
// // // //     )

// // // //     if (matchedCategory) {
// // // //       navigate(`/products/category/${matchedCategory}`)
// // // //       setSearchQuery("")
// // // //       setIsSearchDropdownOpen(false)
// // // //     } else {
// // // //       // If no exact match, redirect to the first suggestion or a default category page
// // // //       if (searchSuggestions.length > 0) {
// // // //         navigate(`/products/category/${searchSuggestions[0]}`)
// // // //         setSearchQuery("")
// // // //         setIsSearchDropdownOpen(false)
// // // //       }
// // // //     }
// // // //   }

// // // //   const handleSuggestionClick = (category) => {
// // // //     navigate(`/products/category/${category}`)
// // // //     setSearchQuery("")
// // // //     setIsSearchDropdownOpen(false)
// // // //   }

// // // //   const navLinks = [
// // // //     { name: "Home", path: "/" },
// // // //     { name: "Products", path: "/products" },
// // // //     { name: "Services", path: "/services" },
// // // //     { name: "About Us", path: "/about" },
// // // //     { name: "Contact Us", path: "/contact" },
// // // //     { name: "FAQ", path: "/faq" },
// // // //     { name: "Application", path: "/application" },
// // // //     { name: "Terms & Conditions", path: "/terms" },
// // // //   ]

// // // //   return (
// // // //     <header
// // // //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1d2130] shadow-md py-2" : "bg-[#1d2130] py-0"
// // // //         }`}
// // // //     >
// // // //       <div className="container mx-auto px-4">
// // // //         <div className="flex items-center justify-between">
// // // //           {/* Logo */}
// // // //           <Link to="/" className="flex items-center">
// // // //             <motion.div
// // // //               initial={{ opacity: 0, x: -20 }}
// // // //               animate={{ opacity: 1, x: 0 }}
// // // //               transition={{ duration: 0.5 }}
// // // //             >
// // // //               <img
// // // //                 src="https://i.ibb.co/d43CC8M6/Screenshot-2025-05-05-154412-1-1-removebg-preview-1-1.png"
// // // //                 alt="Raycom"
// // // //                 className="h-14 w-auto max-h-full sm:h-20 sm:w-auto max-w-[120px] sm:max-w-[140px] object-contain mr-3"
// // // //                 onError={(e) => (e.target.src = "/fallback-logo.png")} // Optional: Fallback image
// // // //               />
// // // //             </motion.div>
// // // //           </Link>

// // // //           {/* Desktop Navigation */}
// // // //           <nav className="hidden lg:flex items-center space-x-1">
// // // //             {navLinks.map((link) => (
// // // //               <Link
// // // //                 key={link.name}
// // // //                 to={link.path}
// // // //                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? "text-red-600 font-semibold" : "text-white hover:text-red-600"
// // // //                   }`}
// // // //               >
// // // //                 {link.name}
// // // //               </Link>
// // // //             ))}
// // // //           </nav>

// // // //           {/* Search and Cart */}
// // // //           <div className="hidden md:flex items-center space-x-4 relative" ref={searchRef}>
// // // //             <form onSubmit={handleSearch} className="relative">
// // // //               <input
// // // //                 type="text"
// // // //                 placeholder="Search products..."
// // // //                 value={searchQuery}
// // // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // // //                 className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // //               />
// // // //               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// // // //               {/* Search Suggestions Dropdown */}
// // // //               {isSearchDropdownOpen && (
// // // //                 <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
// // // //                   {searchSuggestions.map((category) => (
// // // //                     <button
// // // //                       key={category}
// // // //                       onClick={() => handleSuggestionClick(category)}
// // // //                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 capitalize"
// // // //                     >
// // // //                       {category}
// // // //                     </button>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </form>
// // // //             <Link to="/cart" className="relative">
// // // //               <ShoppingCart className="h-6 w-6 text-red-600 hover:text-red-700 transition-colors duration-200" />
// // // //               {totalItems > 0 && (
// // // //                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// // // //                   {totalItems}
// // // //                 </span>
// // // //               )}
// // // //             </Link>
// // // //           </div>

// // // //           {/* Mobile Menu Button */}
// // // //           <div className="flex items-center lg:hidden">
// // // //             <Link to="/cart" className="relative mr-4">
// // // //               <ShoppingCart className="h-6 w-6 text-gray-700" />
// // // //               {totalItems > 0 && (
// // // //                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// // // //                   {totalItems}
// // // //                 </span>
// // // //               )}
// // // //             </Link>
// // // //             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none">
// // // //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // // //             </button>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       {/* Mobile Menu */}
// // // //       <motion.div
// // // //         initial={{ height: 0, opacity: 0 }}
// // // //         animate={{
// // // //           height: isOpen ? "auto" : 0,
// // // //           opacity: isOpen ? 1 : 0,
// // // //         }}
// // // //         transition={{ duration: 0.3 }}
// // // //         className="lg:hidden overflow-hidden bg-white"
// // // //       >
// // // //         <div className="container mx-auto px-4 py-2" ref={searchRef}>
// // // //           <form onSubmit={handleSearch} className="relative mb-4">
// // // //             <input
// // // //               type="text"
// // // //               placeholder="Search products..."
// // // //               value={searchQuery}
// // // //               onChange={(e) => setSearchQuery(e.target.value)}
// // // //               className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // // //             />
// // // //             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// // // //             {/* Search Suggestions Dropdown for Mobile */}
// // // //             {isSearchDropdownOpen && (
// // // //               <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
// // // //                 {searchSuggestions.map((category) => (
// // // //                   <button
// // // //                     key={category}
// // // //                     onClick={() => handleSuggestionClick(category)}
// // // //                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 capitalize"
// // // //                   >
// // // //                     {category}
// // // //                   </button>
// // // //                 ))}
// // // //               </div>
// // // //             )}
// // // //           </form>
// // // //           <div className="flex flex-col space-y-2">
// // // //             {navLinks.map((link) => (
// // // //               <Link
// // // //                 key={link.name}
// // // //                 to={link.path}
// // // //                 className={`px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "text-red-600 bg-red-50" : "text-gray-700 hover:bg-gray-100"
// // // //                   }`}
// // // //               >
// // // //                 {link.name}
// // // //               </Link>
// // // //             ))}
// // // //           </div>
// // // //         </div>
// // // //       </motion.div>
// // // //     </header>
// // // //   )
// // // // }

// // // // export default Navbar

// // // "use client"

// // // import { useState, useEffect, useRef } from "react"
// // // import { Link, useLocation, useNavigate } from "react-router-dom"
// // // import { motion } from "framer-motion"
// // // import { useCart } from "../../contexts/CartContext"
// // // import { ShoppingCart, Menu, X, Search } from "lucide-react"

// // // const Navbar = () => {
// // //   const [isOpen, setIsOpen] = useState(false)
// // //   const [isScrolled, setIsScrolled] = useState(false)
// // //   const [searchQuery, setSearchQuery] = useState("")
// // //   const [searchSuggestions, setSearchSuggestions] = useState([])
// // //   const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)
// // //   const { cart } = useCart()
// // //   const location = useLocation()
// // //   const navigate = useNavigate()
// // //   const searchRef = useRef(null)

// // //   const totalItems = cart?.reduce((total, item) => total + item.quantity, 0)

// // //   // List of categories for search
// // //   const categories = [
// // //     "waveguide",
// // //     "attenuator",
// // //     "circulator",
// // //     "filter",
// // //     "isolator",
// // //     "coupler"
// // //   ]

// // //   useEffect(() => {
// // //     const handleScroll = () => {
// // //       if (window.scrollY > 50) {
// // //         setIsScrolled(true)
// // //       } else {
// // //         setIsScrolled(false)
// // //       }
// // //     }

// // //     window.addEventListener("scroll", handleScroll)
// // //     return () => window.removeEventListener("scroll", handleScroll)
// // //   }, [])

// // //   useEffect(() => {
// // //     setIsOpen(false)
// // //     setIsSearchDropdownOpen(false)
// // //     setSearchQuery("")
// // //   }, [location])

// // //   // Handle search input and suggestions
// // //   useEffect(() => {
// // //     if (searchQuery.trim() === "") {
// // //       setSearchSuggestions([])
// // //       setIsSearchDropdownOpen(false)
// // //       return
// // //     }

// // //     const filteredCategories = categories.filter(category =>
// // //       category.toLowerCase().includes(searchQuery.toLowerCase())
// // //     )
// // //     setSearchSuggestions(filteredCategories)
// // //     setIsSearchDropdownOpen(filteredCategories.length > 0)
// // //   }, [searchQuery])

// // //   // Handle clicks outside the search dropdown to close it
// // //   useEffect(() => {
// // //     const handleClickOutside = (event) => {
// // //       if (searchRef.current && !searchRef.current.contains(event.target)) {
// // //         setIsSearchDropdownOpen(false)
// // //       }
// // //     }

// // //     document.addEventListener("mousedown", handleClickOutside)
// // //     return () => document.removeEventListener("mousedown", handleClickOutside)
// // //   }, [])

// // //   const handleSearch = (e) => {
// // //     e.preventDefault()
// // //     if (searchQuery.trim() === "") return

// // //     const matchedCategory = categories.find(category =>
// // //       category.toLowerCase() === searchQuery.toLowerCase()
// // //     )

// // //     if (matchedCategory) {
// // //       navigate(`/products/category/${matchedCategory}`)
// // //       setSearchQuery("")
// // //       setIsSearchDropdownOpen(false)
// // //     } else {
// // //       // If no exact match, redirect to the first suggestion or a default category page
// // //       if (searchSuggestions.length > 0) {
// // //         navigate(`/products/category/${searchSuggestions[0]}`)
// // //         setSearchQuery("")
// // //         setIsSearchDropdownOpen(false)
// // //       }
// // //     }
// // //   }

// // //   const handleSuggestionClick = (category) => {
// // //     navigate(`/products/category/${category}`)
// // //     setSearchQuery("")
// // //     setIsSearchDropdownOpen(false)
// // //   }

// // //   const navLinks = [
// // //     { name: "Home", path: "/" },
// // //     { name: "Products", path: "/products" },
// // //     { name: "Services", path: "/services" },
// // //     { name: "About Us", path: "/about" },
// // //     { name: "Contact Us", path: "/contact" },
// // //     { name: "FAQ", path: "/faq" },
// // //     { name: "Application", path: "/application" },
// // //     { name: "Terms & Conditions", path: "/terms" },
// // //   ]

// // //   return (
// // //     <header
// // //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1d2130] shadow-md py-2" : "bg-[#1d2130] py-0"
// // //         }`}
// // //     >
// // //       <div className="container mx-auto px-4">
// // //         <div className="flex items-center justify-between">
// // //           {/* Logo */}
// // //           <Link to="/" className="flex items-center">
// // //             <motion.div
// // //               initial={{ opacity: 0, x: -20 }}
// // //               animate={{ opacity: 1, x: 0 }}
// // //               transition={{ duration: 0.5 }}
// // //             >
// // //               <img
// // //                 src="https://i.ibb.co/d43CC8M6/Screenshot-2025-05-05-154412-1-1-removebg-preview-1-1.png"
// // //                 alt="Raycom"
// // //                 className="h-14 w-auto max-h-full sm:h-20 sm:w-auto max-w-[120px] sm:max-w-[140px] object-contain mr-3"
// // //                 onError={(e) => (e.target.src = "/fallback-logo.png")} // Optional: Fallback image
// // //               />
// // //             </motion.div>
// // //           </Link>

// // //           {/* Desktop Navigation */}
// // //           <nav className="hidden lg:flex items-center space-x-1">
// // //             {navLinks.map((link) => (
// // //               <Link
// // //                 key={link.name}
// // //                 to={link.path}
// // //                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? "text-red-600 font-semibold" : "text-white hover:text-red-600"
// // //                   }`}
// // //               >
// // //                 {link.name}
// // //               </Link>
// // //             ))}
// // //           </nav>

// // //           {/* Search and Cart */}
// // //           <div className="hidden md:flex items-center space-x-4 relative" ref={searchRef}>
// // //             <form onSubmit={handleSearch} className="relative">
// // //               <input
// // //                 type="text"
// // //                 placeholder="Search products..."
// // //                 value={searchQuery}
// // //                 onChange={(e) => setSearchQuery(e.target.value)}
// // //                 className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // //               />
// // //               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// // //               {/* Search Suggestions Dropdown */}
// // //               {isSearchDropdownOpen && (
// // //                 <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
// // //                   {searchSuggestions.map((category) => (
// // //                     <button
// // //                       key={category}
// // //                       onClick={() => handleSuggestionClick(category)}
// // //                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 capitalize"
// // //                     >
// // //                       {category}
// // //                     </button>
// // //                   ))}
// // //                 </div>
// // //               )}
// // //             </form>
// // //             <Link to="/cart" className="relative">
// // //               <ShoppingCart className="h-6 w-6 text-red-600 hover:text-red-700 transition-colors duration-200" />
// // //               {totalItems > 0 && (
// // //                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// // //                   {totalItems}
// // //                 </span>
// // //               )}
// // //             </Link>
// // //           </div>

// // //           {/* Mobile Menu Button */}
// // //           <div className="flex items-center lg:hidden">
// // //             <Link to="/cart" className="relative mr-4">
// // //               <ShoppingCart className="h-6 w-6 text-gray-700" />
// // //               {totalItems > 0 && (
// // //                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// // //                   {totalItems}
// // //                 </span>
// // //               )}
// // //             </Link>
// // //             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none">
// // //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       <motion.div
// // //         initial={{ height: 0, opacity: 0 }}
// // //         animate={{
// // //           height: isOpen ? "auto" : 0,
// // //           opacity: isOpen ? 1 : 0,
// // //         }}
// // //         transition={{ duration: 0.3 }}
// // //         className="lg:hidden overflow-hidden bg-white"
// // //       >
// // //         <div className="container mx-auto px-4 py-2" ref={searchRef}>
// // //           <form onSubmit={handleSearch} className="relative mb-4">
// // //             <input
// // //               type="text"
// // //               placeholder="Search products..."
// // //               value={searchQuery}
// // //               onChange={(e) => setSearchQuery(e.target.value)}
// // //               className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// // //             />
// // //             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// // //             {/* Search Suggestions Dropdown for Mobile */}
// // //             {isSearchDropdownOpen && (
// // //               <div className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
// // //                 {searchSuggestions.map((category) => (
// // //                   <button
// // //                     key={category}
// // //                     onClick={() => handleSuggestionClick(category)}
// // //                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 capitalize"
// // //                   >
// // //                     {category}
// // //                   </button>
// // //                 ))}
// // //               </div>
// // //             )}
// // //           </form>
// // //           <div className="flex flex-col space-y-2">
// // //             {navLinks.map((link) => (
// // //               <Link
// // //                 key={link.name}
// // //                 to={link.path}
// // //                 className={`px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "text-red-600 bg-red-50" : "text-gray-700 hover:bg-gray-100"
// // //                   }`}
// // //               >
// // //                 {link.name}
// // //               </Link>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </motion.div>
// // //     </header>
// // //   )
// // // }

// // // export default Navbar

// // "use client"

// // import { useState, useEffect, useRef } from "react"
// // import { Link, useLocation, useNavigate } from "react-router-dom"
// // import { motion } from "framer-motion"
// // import { useCart } from "../../contexts/CartContext"
// // import { ShoppingCart, Menu, X, Search } from "lucide-react"

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false)
// //   const [isScrolled, setIsScrolled] = useState(false)
// //   const [searchQuery, setSearchQuery] = useState("")
// //   const [searchSuggestions, setSearchSuggestions] = useState([])
// //   const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)
// //   const { cart } = useCart()
// //   const location = useLocation()
// //   const navigate = useNavigate()
// //   const searchRef = useRef(null)

// //   const totalItems = cart?.reduce((total, item) => total + item.quantity, 0)

// //   // List of categories for search
// //   const categories = [
// //     "waveguide",
// //     "attenuator",
// //     "circulator",
// //     "filter",
// //     "isolator",
// //     "coupler"
// //   ]

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       if (window.scrollY > 50) {
// //         setIsScrolled(true)
// //       } else {
// //         setIsScrolled(false)
// //       }
// //     }

// //     window.addEventListener("scroll", handleScroll)
// //     return () => window.removeEventListener("scroll", handleScroll)
// //   }, [])

// //   useEffect(() => {
// //     setIsOpen(false)
// //     setIsSearchDropdownOpen(false)
// //     setSearchQuery("")
// //   }, [location])

// //   // Handle search input and suggestions
// //   useEffect(() => {
// //     if (searchQuery.trim() === "") {
// //       setSearchSuggestions([])
// //       setIsSearchDropdownOpen(false)
// //       return
// //     }

// //     const filteredCategories = categories.filter(category =>
// //       category.toLowerCase().includes(searchQuery.toLowerCase())
// //     )
// //     setSearchSuggestions(filteredCategories)
// //     setIsSearchDropdownOpen(filteredCategories.length > 0)
// //   }, [searchQuery])

// //   // Handle clicks outside the search dropdown to close it
// //   useEffect(() => {
// //     const handleClickOutside = (event) => {
// //       if (searchRef.current && !searchRef.current.contains(event.target)) {
// //         setIsSearchDropdownOpen(false)
// //       }
// //     }

// //     document.addEventListener("mousedown", handleClickOutside)
// //     return () => document.removeEventListener("mousedown", handleClickOutside)
// //   }, [])

// //   const handleSearch = (e) => {
// //     e.preventDefault()
// //     if (searchQuery.trim() === "") return

// //     const matchedCategory = categories.find(category =>
// //       category.toLowerCase() === searchQuery.toLowerCase())
// //     if (matchedCategory) {
// //       navigate(`/products/category/${matchedCategory}`)
// //       setSearchQuery("")
// //       setIsSearchDropdownOpen(false)
// //     } else {
// //       // If no exact match, redirect to the first suggestion or a default category page
// //       if (searchSuggestions.length > 0) {
// //         navigate(`/products/category/${searchSuggestions[0]}`)
// //         setSearchQuery("")
// //         setIsSearchDropdownOpen(false)
// //       }
// //     }
// //   }

// //   const handleSuggestionClick = (category) => {
// //     console.log("Clicked category:", category) // Debug log
// //     setSearchQuery("")
// //     setIsSearchDropdownOpen(false)
// //     // Add a slight delay to ensure state updates before navigation
// //     setTimeout(() => {
// //       navigate(`/products/category/${category}`)
// //     }, 100)
// //   }

// //   const navLinks = [
// //     { name: "Home", path: "/" },
// //     { name: "Products", path: "/products" },
// //     { name: "Services", path: "/services" },
// //     { name: "About Us", path: "/about" },
// //     { name: "Contact Us", path: "/contact" },
// //     { name: "FAQ", path: "/faq" },
// //     { name: "Application", path: "/application" },
// //     { name: "Terms & Conditions", path: "/terms" },
// //   ]

// //   return (
// //     <header
// //       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1d2130] shadow-md py-2" : "bg-[#1d2130] py-0"
// //         }`}
// //     >
// //       <div className="container mx-auto px-4">
// //         <div className="flex items-center justify-between">
// //           {/* Logo */}
// //           <Link to="/" className="flex items-center">
// //             <motion.div
// //               initial={{ opacity: 0, x: -20 }}
// //               animate={{ opacity: 1, x: 0 }}
// //               transition={{ duration: 0.5 }}
// //             >
// //               <img
// //                 src="https://i.ibb.co/d43CC8M6/Screenshot-2025-05-05-154412-1-1-removebg-preview-1-1.png"
// //                 alt="Raycom"
// //                 className="h-14 w-auto max-h-full sm:h-20 sm:w-auto max-w-[120px] sm:max-w-[140px] object-contain mr-3"
// //                 onError={(e) => (e.target.src = "/fallback-logo.png")} // Optional: Fallback image
// //               />
// //             </motion.div>
// //           </Link>

// //           {/* Desktop Navigation */}
// //           <nav className="hidden lg:flex items-center space-x-1">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 to={link.path}
// //                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? "text-red-600 font-semibold" : "text-white hover:text-red-600"
// //                   }`}
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </nav>

// //           {/* Search and Cart */}
// //           <div className="hidden md:flex items-center space-x-4 relative" ref={searchRef}>
// //             <form onSubmit={handleSearch} className="relative">
// //               <input
// //                 type="text"
// //                 placeholder="Search products..."
// //                 value={searchQuery}
// //                 onChange={(e) => setSearchQuery(e.target.value)}
// //                 className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// //               />
// //               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// //               {/* Search Suggestions Dropdown */}
// //               {isSearchDropdownOpen && (
// //                 <ul className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
// //                   {searchSuggestions.map((category) => (
// //                     <li
// //                       key={category}
// //                       onClick={() => handleSuggestionClick(category)}
// //                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 capitalize cursor-pointer"
// //                     >
// //                       {category}
// //                     </li>
// //                   ))}
// //                 </ul>
// //               )}
// //             </form>
// //             <Link to="/cart" className="relative">
// //               <ShoppingCart className="h-6 w-6 text-red-600 hover:text-red-700 transition-colors duration-200" />
// //               {totalItems > 0 && (
// //                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// //                   {totalItems}
// //                 </span>
// //               )}
// //             </Link>
// //           </div>

// //           {/* Mobile Menu Button */}
// //           <div className="flex items-center lg:hidden">
// //             <Link to="/cart" className="relative mr-4">
// //               <ShoppingCart className="h-6 w-6 text-gray-700" />
// //               {totalItems > 0 && (
// //                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
// //                   {totalItems}
// //                 </span>
// //               )}
// //             </Link>
// //             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none">
// //               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Mobile Menu */}
// //       <motion.div
// //         initial={{ height: 0, opacity: 0 }}
// //         animate={{
// //           height: isOpen ? "auto" : 0,
// //           opacity: isOpen ? 1 : 0,
// //         }}
// //         transition={{ duration: 0.3 }}
// //         className="lg:hidden overflow-hidden bg-white"
// //       >
// //         <div className="container mx-auto px-4 py-2" ref={searchRef}>
// //           <form onSubmit={handleSearch} className="relative mb-4">
// //             <input
// //               type="text"
// //               placeholder="Search products..."
// //               value={searchQuery}
// //               onChange={(e) => setSearchQuery(e.target.value)}
// //               className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
// //             />
// //             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
// //             {/* Search Suggestions Dropdown for Mobile */}
// //             {isSearchDropdownOpen && (
// //               <ul className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
// //                 {searchSuggestions.map((category) => (
// //                   <li
// //                     key={category}
// //                     onClick={() => handleSuggestionClick(category)}
// //                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 capitalize cursor-pointer"
// //                   >
// //                     {category}
// //                   </li>
// //                 ))}
// //               </ul>
// //             )}
// //           </form>
// //           <div className="flex flex-col space-y-2">
// //             {navLinks.map((link) => (
// //               <Link
// //                 key={link.name}
// //                 to={link.path}
// //                 className={`px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "text-red-600 bg-red-50" : "text-gray-700 hover:bg-gray-100"
// //                   }`}
// //               >
// //                 {link.name}
// //               </Link>
// //             ))}
// //           </div>
// //         </div>
// //       </motion.div>
// //     </header>
// //   )
// // }

// // export default Navbar


// "use client"

// import { useState, useEffect, useRef } from "react"
// import { Link, useLocation, useNavigate } from "react-router-dom"
// import { motion } from "framer-motion"
// import { useCart } from "../../contexts/CartContext"
// import { ShoppingCart, Menu, X, Search } from "lucide-react"

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isScrolled, setIsScrolled] = useState(false)
//   const [searchQuery, setSearchQuery] = useState("")
//   const [searchSuggestions, setSearchSuggestions] = useState([])
//   const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)
//   const { cart } = useCart()
//   const location = useLocation()
//   const navigate = useNavigate()
//   const searchRef = useRef(null)

//   const totalItems = cart?.reduce((total, item) => total + item.quantity, 0)

//   // List of categories for search
//   const categories = [
//     "waveguide",
//     "attenuator",
//     "circulator",
//     "filter",
//     "isolator",
//     "coupler"
//   ]

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsScrolled(true)
//       } else {
//         setIsScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   useEffect(() => {
//     setIsOpen(false)
//     setIsSearchDropdownOpen(false)
//     setSearchQuery("")
//   }, [location])

//   // Handle search input and suggestions
//   useEffect(() => {
//     if (searchQuery.trim() === "") {
//       setSearchSuggestions([])
//       setIsSearchDropdownOpen(false)
//       return
//     }

//     const filteredCategories = categories.filter(category =>
//       category.toLowerCase().includes(searchQuery.toLowerCase())
//     )
//     setSearchSuggestions(filteredCategories)
//     setIsSearchDropdownOpen(filteredCategories.length > 0)
//   }, [searchQuery])

//   // Handle clicks outside the search dropdown to close it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (searchRef.current && !searchRef.current.contains(event.target)) {
//         setIsSearchDropdownOpen(false)
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside)
//     return () => document.removeEventListener("mousedown", handleClickOutside)
//   }, [])

//   const handleSearch = (e) => {
//     e.preventDefault()
//     if (searchQuery.trim() === "") return

//     const matchedCategory = categories.find(category =>
//       category.toLowerCase() === searchQuery.toLowerCase())
//     if (matchedCategory) {
//       navigate(`/products/category/${matchedCategory}`)
//       setSearchQuery("")
//       setIsSearchDropdownOpen(false)
//     } else {
//       if (searchSuggestions.length > 0) {
//         navigate(`/products/category/${searchSuggestions[0]}`)
//         setSearchQuery("")
//         setIsSearchDropdownOpen(false)
//       }
//     }
//   }

//   const handleSuggestionClick = (category) => {
//     console.log("Attempting to navigate to:", `/products/category/${category}`)
//     // Try using navigate first
//     navigate(`/products/category/${category}`)
//     // Fallback to window.location.href if navigate doesn't work
//     setTimeout(() => {
//       if (window.location.pathname !== `/products/category/${category}`) {
//         console.log("Falling back to window.location.href")
//         window.location.href = `/products/category/${category}`
//       }
//     }, 500)
//     // Update state after navigation
//     setSearchQuery("")
//     setIsSearchDropdownOpen(false)
//   }

//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/products" },
//     { name: "Services", path: "/services" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact Us", path: "/contact" },
//     { name: "FAQ", path: "/faq" },
//     { name: "Application", path: "/application" },
//     { name: "Terms & Conditions", path: "/terms" },
//   ]

//   return (
//     <header
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1d2130] shadow-md py-2" : "bg-[#1d2130] py-0"
//         }`}
//     >
//       <div className="container mx-auto px-4">
//         <div className="flex items-center justify-between">
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <img
//                 src="https://i.ibb.co/d43CC8M6/Screenshot-2025-05-05-154412-1-1-removebg-preview-1-1.png"
//                 alt="Raycom"
//                 className="h-14 w-auto max-h-full sm:h-20 sm:w-auto max-w-[120px] sm:max-w-[140px] object-contain mr-3"
//                 onError={(e) => (e.target.src = "/fallback-logo.png")} // Optional: Fallback image
//               />
//             </motion.div>
//           </Link>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:flex items-center space-x-1">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? "text-red-600 font-semibold" : "text-white hover:text-red-600"
//                   }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Search and Cart */}
//           <div className="hidden md:flex items-center space-x-4 relative" ref={searchRef}>
//             <form onSubmit={handleSearch} className="relative">
//               <input
//                 type="text"
//                 placeholder="Search products..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//               />
//               <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//               {/* Search Suggestions Dropdown */}
//               {isSearchDropdownOpen && (
//                 <ul className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
//                   {searchSuggestions.map((category) => (
//                     <li
//                       key={category}
//                       onClick={() => handleSuggestionClick(category)}
//                       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 capitalize cursor-pointer"
//                     >
//                       {category}
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </form>
//             <Link to="/cart" className="relative">
//               <ShoppingCart className="h-6 w-6 text-red-600 hover:text-red-700 transition-colors duration-200" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <div className="flex items-center lg:hidden">
//             <Link to="/cart" className="relative mr-4">
//               <ShoppingCart className="h-6 w-6 text-gray-700" />
//               {totalItems > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
//                   {totalItems}
//                 </span>
//               )}
//             </Link>
//             <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none">
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <motion.div
//         initial={{ height: 0, opacity: 0 }}
//         animate={{
//           height: isOpen ? "auto" : 0,
//           opacity: isOpen ? 1 : 0,
//         }}
//         transition={{ duration: 0.3 }}
//         className="lg:hidden overflow-hidden bg-white"
//       >
//         <div className="container mx-auto px-4 py-2" ref={searchRef}>
//           <form onSubmit={handleSearch} className="relative mb-4">
//             <input
//               type="text"
//               placeholder="Search products..."
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
//             />
//             <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
//             {/* Search Suggestions Dropdown for Mobile */}
//             {isSearchDropdownOpen && (
//               <ul className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
//                 {searchSuggestions.map((category) => (
//                   <li
//                     key={category}
//                     onClick={() => handleSuggestionClick(category)}
//                     className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 capitalize cursor-pointer"
//                   >
//                     {category}
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </form>
//           <div className="flex flex-col space-y-2">
//             {navLinks.map((link) => (
//               <Link
//                 key={link.name}
//                 to={link.path}
//                 className={`px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "text-red-600 bg-red-50" : "text-gray-700 hover:bg-gray-100"
//                   }`}
//               >
//                 {link.name}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </motion.div>
//     </header>
//   )
// }

// export default Navbar


"use client"

import { useState, useEffect, useRef } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion } from "framer-motion"
import { useCart } from "../../contexts/CartContext"
import { ShoppingCart, Menu, X, Search } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [searchSuggestions, setSearchSuggestions] = useState([])
  const [isSearchDropdownOpen, setIsSearchDropdownOpen] = useState(false)
  const { cart } = useCart()
  const location = useLocation()
  const navigate = useNavigate()
  const searchRef = useRef(null)

  const totalItems = cart?.reduce((total, item) => total + item.quantity, 0)

  // List of categories for search
  const categories = [
    "waveguide",
    "attenuator",
    "circulator",
    "filter",
    "isolator",
    "coupler"
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setIsSearchDropdownOpen(false)
    setSearchQuery("")
  }, [location])

  // Handle search input and suggestions
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setSearchSuggestions([])
      setIsSearchDropdownOpen(false)
      return
    }

    const filteredCategories = categories.filter(category =>
      category.toLowerCase().includes(searchQuery.toLowerCase())
    )
    setSearchSuggestions(filteredCategories)
    setIsSearchDropdownOpen(filteredCategories.length > 0)
  }, [searchQuery])

  // Handle clicks outside the search dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim() === "") return

    const matchedCategory = categories.find(category =>
      category.toLowerCase() === searchQuery.toLowerCase())
    if (matchedCategory) {
      navigate(`/products/category/${matchedCategory}`)
      setSearchQuery("")
      setIsSearchDropdownOpen(false)
    } else {
      if (searchSuggestions.length > 0) {
        navigate(`/products/category/${searchSuggestions[0]}`)
        setSearchQuery("")
        setIsSearchDropdownOpen(false)
      }
    }
  }

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
    { name: "FAQ", path: "/faq" },
    { name: "Application", path: "/application" },
    { name: "Terms & Conditions", path: "/terms" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-[#1d2130] shadow-md py-2" : "bg-[#1d2130] py-0"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="https://i.ibb.co/d43CC8M6/Screenshot-2025-05-05-154412-1-1-removebg-preview-1-1.png"
                alt="Raycom"
                className="h-14 w-auto max-h-full sm:h-20 sm:w-auto max-w-[120px] sm:max-w-[140px] object-contain mr-3"
                onError={(e) => (e.target.src = "/fallback-logo.png")} // Optional: Fallback image
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${location.pathname === link.path ? "text-red-600 font-semibold" : "text-white hover:text-red-600"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="hidden md:flex items-center space-x-4 relative" ref={searchRef}>
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              {/* Search Suggestions Dropdown */}
              {isSearchDropdownOpen && (
                <ul className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-50 border border-gray-200 max-h-60 overflow-y-auto">
                  {searchSuggestions.map((category) => (
                    <li key={category}>
                      <Link
                        to={`/products/category/${category}`}
                        onClick={() => {
                          setSearchQuery("")
                          setIsSearchDropdownOpen(false)
                        }}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 capitalize cursor-pointer"
                      >
                        {category}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </form>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-red-600 hover:text-red-700 transition-colors duration-200" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center lg:hidden">
            <Link to="/cart" className="relative mr-4">
              <ShoppingCart className="h-6 w-6 text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700 hover:text-red-600 focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="lg:hidden overflow-hidden bg-white"
      >
        <div className="container mx-auto px-4 py-2" ref={searchRef}>
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            {/* Search Suggestions Dropdown for Mobile */}
            {isSearchDropdownOpen && (
              <ul className="absolute top-full left-0 mt-2 w-full bg-white rounded-md shadow-lg z-500 border border-gray-200 max-h-60 overflow-y-auto">
                {searchSuggestions.map((category) => (
                  <li key={category}>
                    <Link
                      to={`/products/category/${category}`}
                      onClick={() => {
                        setSearchQuery("")
                        setIsSearchDropdownOpen(false)
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors duration-200 capitalize cursor-pointer"
                    >
                      {category}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </form>
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.path ? "text-red-600 bg-red-50" : "text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  )
}

export default Navbar