"use client"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import ProductCard from "./ProductCard"
import { fetchFeaturedProducts } from "../../services/api"

const FeaturedProducts = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadProducts = async () => {
            try {
                const data = await fetchFeaturedProducts()
                setProducts(data)
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

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
            </div>
        )
    }

    if (error) {
        return <div className="text-center text-red-600 py-8">{error}</div>
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
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
    )
}

export default FeaturedProducts
