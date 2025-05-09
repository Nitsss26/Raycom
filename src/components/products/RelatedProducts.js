"use client"
import { motion } from "framer-motion"
import { useRef } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from "./ProductCard"

const RelatedProducts = ({ products }) => {
    const scrollRef = useRef(null)

    const scroll = (direction) => {
        const { current } = scrollRef
        if (current) {
            if (direction === "left") {
                current.scrollBy({ left: -300, behavior: "smooth" })
            } else {
                current.scrollBy({ left: 300, behavior: "smooth" })
            }
        }
    }

    if (!products || products.length === 0) {
        return null
    }

    return (
        <div className="relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10">
                <button
                    onClick={() => scroll("left")}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="h-6 w-6 text-gray-700" />
                </button>
            </div>

            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10">
                <button
                    onClick={() => scroll("right")}
                    className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="h-6 w-6 text-gray-700" />
                </button>
            </div>

            <div
                ref={scrollRef}
                className="flex overflow-x-auto scrollbar-hide gap-6 py-4 px-8 -mx-8 scroll-smooth"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {products.map((product, index) => (
                    <motion.div
                        key={product.id}
                        className="flex-shrink-0 w-[280px]"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <ProductCard product={product} />
                    </motion.div>
                ))}
            </div>
        </div>
    )
}

export default RelatedProducts
