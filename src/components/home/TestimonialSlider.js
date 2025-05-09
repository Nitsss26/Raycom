"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
    {
        id: 1,
        name: "Dr. Sarah Chen",
        position: "Chief Technology Officer",
        company: "Satellite Communications Inc.",
        image: "/images/testimonials/testimonial-1.jpg",
        text: "Raycom's waveguide components have consistently exceeded our expectations. Their attention to detail and precision engineering has significantly improved the performance of our satellite communication systems.",
    },
    {
        id: 2,
        name: "Michael Rodriguez",
        position: "RF Systems Engineer",
        company: "Defense Technologies Ltd.",
        image: "/images/testimonials/testimonial-2.jpg",
        text: "We've been using Raycom's products for over five years in our defense systems. The reliability and durability of their components, even in extreme conditions, is truly impressive.",
    },
    {
        id: 3,
        name: "Dr. James Wilson",
        position: "Research Director",
        company: "Advanced Radar Systems",
        image: "/images/testimonials/testimonial-3.jpg",
        text: "The technical support provided by Raycom is exceptional. Their team worked closely with us to develop custom waveguide solutions that perfectly matched our radar system requirements.",
    },
    {
        id: 4,
        name: "Emily Nakamura",
        position: "Procurement Manager",
        company: "Global Telecommunications Corp",
        image: "/images/testimonials/testimonial-4.jpg",
        text: "Raycom's quick delivery times and responsive customer service have made them our preferred supplier for RF components. Their quality control is second to none.",
    },
]

const TestimonialSlider = () => {
    const [current, setCurrent] = useState(0)
    const [autoplay, setAutoplay] = useState(true)

    const nextSlide = () => {
        setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1))
    }

    const prevSlide = () => {
        setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1))
    }

    useEffect(() => {
        let interval
        if (autoplay) {
            interval = setInterval(() => {
                nextSlide()
            }, 5000)
        }
        return () => clearInterval(interval)
    }, [autoplay, current])

    return (
        <div className="relative max-w-4xl mx-auto px-4">
            <div
                className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
            >
                <button
                    onClick={prevSlide}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all duration-300"
                    aria-label="Previous testimonial"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
            </div>

            <div
                className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10"
                onMouseEnter={() => setAutoplay(false)}
                onMouseLeave={() => setAutoplay(true)}
            >
                <button
                    onClick={nextSlide}
                    className="bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 text-white transition-all duration-300"
                    aria-label="Next testimonial"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            </div>

            <div className="overflow-hidden relative h-[400px] md:h-[300px]">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={current}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="flex justify-center mb-6">
                            <div className="relative">
                                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-white">
                                    <img
                                        src={testimonials[current].image || `/placeholder.svg?height=80&width=80`}
                                        alt={testimonials[current].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="absolute -bottom-2 -right-2 bg-red-600 rounded-full p-1">
                                    <Quote className="h-4 w-4 text-white" />
                                </div>
                            </div>
                        </div>
                        <blockquote className="text-lg md:text-xl text-white mb-6 max-w-3xl mx-auto">
                            "{testimonials[current].text}"
                        </blockquote>
                        <div className="text-white">
                            <p className="font-semibold text-lg">{testimonials[current].name}</p>
                            <p className="text-gray-300">
                                {testimonials[current].position}, {testimonials[current].company}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            setCurrent(index)
                            setAutoplay(false)
                            setTimeout(() => setAutoplay(true), 5000)
                        }}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${current === index ? "bg-white" : "bg-white bg-opacity-30"
                            }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    )
}

export default TestimonialSlider
