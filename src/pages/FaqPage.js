"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Search, Mail } from 'lucide-react'

const faqs = [
    {
        category: "Products",
        questions: [
            {
                id: "p1",
                question: "What types of waveguide components do you offer?",
                answer:
                    "Raycom offers a comprehensive range of waveguide components including attenuators, circulators, isolators, filters, couplers, loads, and custom assemblies. Our products cover various frequency bands and power specifications to meet diverse application requirements.",
            },
            {
                id: "p2",
                question: "Are your products available in custom specifications?",
                answer:
                    "Yes, we specialize in custom waveguide solutions. Our engineering team can design and manufacture components to your exact specifications, including custom frequency ranges, power handling capabilities, flange types, and materials. Contact our sales team to discuss your custom requirements.",
            },
            {
                id: "p3",
                question: "What frequency ranges do your waveguide components cover?",
                answer:
                    "Our standard waveguide components cover frequency ranges from 1 GHz to 110 GHz, including all standard waveguide bands. We also offer custom solutions for specialized frequency requirements outside these ranges.",
            },
            {
                id: "p4",
                question: "Do you provide technical datasheets for your products?",
                answer:
                    "Yes, comprehensive technical datasheets are available for all our standard products. These include detailed specifications, performance curves, mechanical drawings, and application notes. You can download these from our product pages or contact our sales team for specific information.",
            },
        ],
    },
    {
        category: "Ordering & Shipping",
        questions: [
            {
                id: "o1",
                question: "What is the typical lead time for standard products?",
                answer:
                    "Lead times for standard products typically range from 2-4 weeks, depending on the specific item and current production schedule. Custom products may require 4-8 weeks, depending on complexity. For urgent requirements, please contact our sales team to discuss expedited options.",
            },
            {
                id: "o2",
                question: "Do you ship internationally?",
                answer:
                    "Yes, Raycom ships products worldwide. We have experience with international shipping requirements and can arrange appropriate shipping methods based on your location and timeline. Please note that import duties and taxes may apply depending on your country's regulations.",
            },
            {
                id: "o3",
                question: "What payment methods do you accept?",
                answer:
                    "We accept various payment methods including credit cards, wire transfers, and purchase orders from approved accounts. For large orders, we can discuss payment terms that meet your organization's requirements.",
            },
            {
                id: "o4",
                question: "Can I request a quote before placing an order?",
                answer:
                    "Yes, we encourage customers to request quotes for their specific requirements. You can use our 'Request Quote' feature on the website, or contact our sales team directly. We'll provide a detailed quote including pricing, lead times, and shipping options.",
            },
        ],
    },
    {
        category: "Technical Support",
        questions: [
            {
                id: "t1",
                question: "Do you offer technical support for your products?",
                answer:
                    "Yes, we provide comprehensive technical support for all our products. Our team of experienced RF engineers can assist with product selection, integration issues, and troubleshooting. Technical support is available via email, phone, or scheduled video consultations.",
            },
            {
                id: "t2",
                question: "What warranty do you provide on your products?",
                answer:
                    "Raycom offers a standard 1-year warranty on all products, covering manufacturing defects and performance issues. Extended warranty options are available for select products. Please refer to our warranty policy for detailed terms and conditions.",
            },
            {
                id: "t3",
                question: "Do you provide calibration services for your products?",
                answer:
                    "Yes, we offer calibration services for our waveguide components. We can provide calibration certificates traceable to national standards. Regular calibration is recommended for critical applications to ensure continued performance accuracy.",
            },
            {
                id: "t4",
                question: "Can you help with product integration into our systems?",
                answer:
                    "Yes, our engineering team can provide consultation on integrating our components into your systems. For complex projects, we offer design review services and can work with your team to ensure optimal performance of our components in your application.",
            },
        ],
    },
    {
        category: "Waveguide Solutions",
        questions: [
            {
                id: "w1",
                question: "What frequency ranges do your waveguides support?",
                answer:
                    "Our waveguides are designed to cover a wide frequency spectrum, typically ranging from 1 GHz to 110 GHz. Custom configurations for specialized bands are also available.",
            },
            {
                id: "w2",
                question: "Can you provide flexible or twistable waveguide options?",
                answer:
                    "Yes, we offer flexible and twistable waveguide options for applications requiring bendable solutions without compromising on performance. These are ideal for tight space constraints.",
            },
            {
                id: "w3",
                question: "Do you support standard and custom flange types?",
                answer:
                    "We manufacture components compatible with standard flanges such as UG, CPR, and IEC. Custom flange configurations can be developed upon request.",
            },
            {
                id: "w4",
                question: "Are your waveguides suitable for space or defense applications?",
                answer:
                    "Absolutely. Our waveguides can be built to meet MIL-STD and space-grade specifications, including requirements for vibration, shock, and temperature extremes.",
            },
        ],
    },

    {
        category: "Custom Solutions",
        questions: [
            {
                id: "c1",
                question: "What information do you need for a custom product request?",
                answer:
                    "For custom product requests, we typically need information such as frequency range, power handling requirements, insertion loss specifications, VSWR requirements, mechanical constraints, environmental conditions, and any specific performance criteria. The more detailed information you provide, the better we can tailor our solution to your needs.",
            },
            {
                id: "c2",
                question: "Can you design complete waveguide subsystems?",
                answer:
                    "Yes, we design and manufacture complete waveguide subsystems and assemblies. Our engineering team can develop integrated solutions that combine multiple components into a single, optimized system tailored to your specific application requirements.",
            },
            {
                id: "c3",
                question: "Do you offer prototyping services before full production?",
                answer:
                    "Yes, we offer prototyping services for custom designs. This allows you to test and validate the performance of our components in your application before committing to full production. We can also make iterative improvements based on prototype testing results.",
            },
            {
                id: "c4",
                question: "What materials can be used for custom waveguide components?",
                answer:
                    "We can manufacture waveguide components using various materials including aluminum, copper, brass, and specialized alloys. For demanding applications, we also offer silver and gold plating options, as well as specialized coatings for harsh environmental conditions.",
            },
        ],
    },

]

const FaqPage = () => {
    const [activeCategory, setActiveCategory] = useState(faqs[0].category)
    const [openQuestions, setOpenQuestions] = useState([])
    const [searchQuery, setSearchQuery] = useState("")

    const toggleQuestion = (id) => {
        setOpenQuestions((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        )
    }

    const filteredFaqs = searchQuery
        ? faqs.map((category) => ({
            ...category,
            questions: category.questions.filter(
                (q) =>
                    q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    q.answer.toLowerCase().includes(searchQuery.toLowerCase())
            ),
        })).filter((category) => category.questions.length > 0)
        : faqs

    return (
        <div className="pt-36 pb-16 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-12">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6 text-red-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Frequently Asked Questions
                    </motion.h1>
                    <motion.p
                        className="text-xl font-semibold text-gray-900 max-w-3xl mx-auto mb-8"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Find answers to common questions about our products, ordering process, and technical support.
                    </motion.p>

                    <motion.div
                        className="max-w-xl mx-auto relative"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <Search className="h-5 w-5 text-red-600" />
                        </div>
                        <input
                            type="text"
                            placeholder="Search for questions..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                        />
                    </motion.div>
                </div>

                {/* FAQ Content */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Category Navigation */}
                    <div className="md:col-span-1">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden sticky top-24">
                            <div className="p-4 bg-white border-b">
                                <h2 className="font-bold ml-2">Categories</h2>
                            </div>
                            <nav className="p-2">
                                {faqs.map((category) => (
                                    <button
                                        key={category.category}
                                        onClick={() => setActiveCategory(category.category)}
                                        className={`w-full text-left px-4 py-2 rounded-md transition-colors ${activeCategory === category.category
                                            ? "bg-red-50 text-red-600"
                                            : "text-gray-950 hover:bg-gray-50"
                                            }`}
                                    >
                                        {category.category}
                                    </button>
                                ))}
                            </nav>
                        </div>
                    </div>

                    {/* FAQ Questions */}
                    <div className="md:col-span-3">
                        {searchQuery ? (
                            filteredFaqs.length > 0 ? (
                                filteredFaqs.map((category) => (
                                    <div key={category.category} className="mb-8">
                                        <h2 className="text-xl font-bold mb-4 ml-3">{category.category}</h2>
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                            {category.questions.map((faq) => (
                                                <div key={faq.id} className="border-b last:border-b-0">
                                                    <button
                                                        onClick={() => toggleQuestion(faq.id)}
                                                        className="w-full text-left p-4 focus:outline-none"
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <h3 className="font-xl text-gray-950">{faq.question}</h3>
                                                            <ChevronDown
                                                                className={`h-5 w-5 text-gray-500 transition-transform ${openQuestions.includes(faq.id) ? "transform rotate-180" : ""
                                                                    }`}
                                                            />
                                                        </div>
                                                    </button>
                                                    <AnimatePresence>
                                                        {openQuestions.includes(faq.id) && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="p-4 pt-0 text-gray-600 bg-white-100 ">{faq.answer}</div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="text-center py-12 bg-white rounded-lg shadow-md">
                                    <p className="text-gray-600 mb-4">No results found for "{searchQuery}"</p>
                                    <p className="text-gray-500">Try a different search term or browse by category</p>
                                </div>
                            )
                        ) : (
                            faqs
                                .filter((category) => category.category === activeCategory)
                                .map((category) => (
                                    <div key={category.category}>
                                        <h2 className="text-xl font-bold mb-4 ml-3">{category.category}</h2>
                                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                                            {category.questions.map((faq) => (
                                                <div key={faq.id} className="border-b last:border-b-0">
                                                    <button
                                                        onClick={() => toggleQuestion(faq.id)}
                                                        className="w-full text-left p-4 focus:outline-none"
                                                    >
                                                        <div className="flex justify-between items-center">
                                                            <h3 className="font-medium text-gray-950">{faq.question}</h3>
                                                            <ChevronDown
                                                                className={`h-5 w-5 text-gray-500 transition-transform ${openQuestions.includes(faq.id) ? "transform rotate-180" : ""
                                                                    }`}
                                                            />
                                                        </div>
                                                    </button>
                                                    <AnimatePresence>
                                                        {openQuestions.includes(faq.id) && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: "auto", opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.3 }}
                                                                className="overflow-hidden"
                                                            >
                                                                <div className="p-4 pt-0 font-small text-gray-600 bg-white-100">{faq.answer}</div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))
                        )}
                    </div>
                </div>

                {/* Still Have Questions */}
                <div className="mt-16 bg-white rounded-lg p-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
                    <p className="text-gray-800 mb-6 text-medium  max-w-2xl mx-auto">
                        If you couldn't find the answer to your question, our support team is here to help. Contact us and we'll get
                        back to you as soon as possible.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center justify-center btn btn-primary"
                    >
                        <Mail className="mr-2 h-5 w-5" />
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    )
}

export default FaqPage
