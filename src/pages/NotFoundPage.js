"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Home, Search } from "lucide-react"

const NotFoundPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h1
            className="text-9xl font-bold text-red-600 mb-4"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            404
          </motion.h1>

          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-primary flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
            <Link to="/products" className="btn btn-outline flex items-center justify-center">
              <Search className="mr-2 h-5 w-5" />
              Browse Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage

