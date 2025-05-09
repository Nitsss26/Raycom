"use client"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from 'lucide-react'
import { fetchFeaturedProducts } from "../services/api"
import CategoryGrid from "../components/products/CategoryGrid"
import ProductCard from "../components/products/ProductCard"

const ProductsPage = () => {
    const [featuredProducts, setFeaturedProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchFeaturedProducts()
                setFeaturedProducts(data)
                setError(null)
            } catch (err) {
                console.error("Error loading featured products:", err)
                setError("Failed to load featured products")
            } finally {
                setLoading(false)
            }
        }

        loadProducts()
    }, [])

    return (
        <div className="pt-36 pb-16 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl overflow-hidden mb-16">
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src="https://png.pngtree.com/thumb_back/fh260/background/20230704/pngtree-3d-futuristic-microprocessor-in-blue-hue-image_3752640.jpg"
                            alt="Waveguide Components"
                            className="w-full h-full object-cover opacity-20"
                        />
                    </div>
                    <div className="relative py-16 px-8 md:py-24 md:px-12">
                        <motion.div
                            className="max-w-3xl"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Products</h1>
                            <p className="text-lg md:text-xl text-white mb-8">
                                Explore our comprehensive range of high-quality waveguide components and RF/Microwave solutions designed
                                for optimal performance in demanding applications.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/products/waveguide" className="btn btn-primary">
                                    Browse Waveguide Components
                                </Link>
                                <Link to="/contact" className="btn btn-outline">
                                    Request Custom Solution
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Product Categories */}
                <div className="mb-16">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">Product Categories</h2>
                    </div>
                    <CategoryGrid />
                </div>

                {/* Featured Products */}
                <div className="mb-16">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold">Featured Products</h2>
                    </div>

                    {loading ? (
                        <div className="flex justify-center items-center h-64">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                        </div>
                    ) : error ? (
                        <div className="text-center text-red-600 py-8">{error}</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featuredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Product Finder */}
                {/* <div className="bg-white rounded-lg p-8 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Need Help Finding the Right Product?</h2>
                            <p className="text-gray-600 mb-6">
                                Our product finder tool can help you identify the perfect waveguide components for your specific
                                application requirements. Simply answer a few questions about your project, and we'll recommend the most
                                suitable products.
                            </p>
                            <Link to="/application" className="btn btn-primary flex items-center w-fit">
                                Try Product Finder <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHKr6qghkaEh30XKy3LGAX3eGne6kMjlckSQ&s"
                                alt="Product Finder"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div> */}

                {/* Custom Solutions */}
                <div className="mb-16">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-red-500">Custom Solutions</h2>
                        <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                            Can't find exactly what you need? Our engineering team can design and manufacture custom waveguide
                            components to meet your specific requirements.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Custom Design",
                                description:
                                    "Our experienced engineers work closely with you to design waveguide components that meet your exact specifications.",
                                image: "https://www.deskera.com/blog/content/images/2022/12/blaz-erzetic-g5f0BJq-FRs-unsplash--1-.jpg",
                            },
                            {
                                title: "Rapid Prototyping",
                                description:
                                    "We offer quick turnaround on prototypes, allowing you to test and validate designs before full production.",
                                image: "https://d1k7ad08k3erkk.cloudfront.net/wp-content/uploads/2023/10/The-Electronics-Manufacturing-Ecosystem-Hero-image.webp?x83903",
                            },
                            {
                                title: "Specialized Materials",
                                description:
                                    "We can manufacture components using specialized materials and coatings for extreme environments.",
                                image: "https://asiaone.co.in/wp-content/uploads/2025/03/Technology-India-Approves-2.7-Billion-Plan-to-Strengthen-Electronics-Component-Manufacturing.jpg",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={item.title}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={item.image || `/placeholder.svg?height=192&width=384`}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                                    <p className="text-gray-600 mb-4">{item.description}</p>
                                    <Link
                                        to="/contact"
                                        className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors"
                                    >
                                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Quality Assurance */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Quality Assurance</h2>
                            <p className="text-gray-900 mb-4">
                                At Raycom, quality is our top priority. Every product undergoes rigorous testing to ensure it
                                meets our high standards and your specific requirements.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-start">
                                    <span className="bg-red-100 rounded-full p-1 mr-2 mt-1">
                                        <ArrowRight className="h-3 w-3 text-red-600" />
                                    </span>
                                    <span>100% testing of all products before shipment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-red-100 rounded-full p-1 mr-2 mt-1">
                                        <ArrowRight className="h-3 w-3 text-red-600" />
                                    </span>
                                    <span>Comprehensive quality management system</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-red-100 rounded-full p-1 mr-2 mt-1">
                                        <ArrowRight className="h-3 w-3 text-red-600" />
                                    </span>
                                    <span>ISO 9001:2015 certified manufacturing processes</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="bg-red-100 rounded-full p-1 mr-2 mt-1">
                                        <ArrowRight className="h-3 w-3 text-red-600" />
                                    </span>
                                    <span>Detailed test reports and certificates available</span>
                                </li>
                            </ul>
                            <Link to="/about" className="btn btn-primary">
                                Learn About Our Process
                            </Link>
                        </div>
                        <div className="bg-white flex items-center justify-center p-8 mr-36">
                            <img
                                src="https://img.freepik.com/free-vector/iso-certification-illustration-with-people-notepad_23-2148689291.jpg"
                                alt="Quality Assurance"
                                className="max-h-80 object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductsPage
