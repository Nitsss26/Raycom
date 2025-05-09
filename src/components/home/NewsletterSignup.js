"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from 'lucide-react'

const NewsletterSignup = () => {
    const [email, setEmail] = useState("")
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")

        if (!email) {
            setError("Please enter your email address")
            return
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            setError("Please enter a valid email address")
            return
        }

        setLoading(true)

        // Simulate API call
        setTimeout(() => {
            setLoading(false)
            setSubmitted(true)
            setEmail("")
        }, 1500)
    }

    return (
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
                {!submitted ? (
                    <>
                        <motion.h2
                            className="text-3xl font-bold mb-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Stay Updated with Our Latest Products
                        </motion.h2>
                        <motion.p
                            className="text-gray-600 mb-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Subscribe to our newsletter to receive updates on new products, technical resources, and industry insights.
                        </motion.p>
                        <motion.form
                            onSubmit={handleSubmit}
                            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="flex-grow">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`w-full px-4 py-3 rounded-md border ${error ? "border-red-500" : "border-gray-300"
                                        } focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent`}
                                />
                                {error && <p className="mt-1 text-sm text-red-600 text-left">{error}</p>}
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="btn btn-primary py-3 px-6 flex items-center justify-center"
                            >
                                {loading ? (
                                    <span className="flex items-center">
                                        <svg
                                            className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                                        Subscribing...
                                    </span>
                                ) : (
                                    <span className="flex items-center">
                                        Subscribe <Send className="ml-2 h-4 w-4" />
                                    </span>
                                )}
                            </button>
                        </motion.form>
                    </>
                ) : (
                    <motion.div
                        className="text-center py-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="flex justify-center mb-4">
                            <CheckCircle className="h-16 w-16 text-green-500" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Thank You for Subscribing!</h3>
                        <p className="text-gray-600">
                            You've been added to our newsletter. We'll keep you updated with the latest news and product information.
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    )
}

export default NewsletterSignup
