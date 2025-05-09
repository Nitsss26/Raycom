"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Radio, Satellite, Wifi, Server, Zap, Shield, ArrowRight } from 'lucide-react'

const applications = [
    {
        id: "telecom",
        title: "Telecommunications",
        icon: Radio,
        description:
            "Our waveguide components are essential for telecommunications infrastructure, providing reliable signal transmission for cellular networks, satellite communications, and broadcasting systems.",
        products: ["WG Filters", "WG Circulators", "WG Isolators", "WG Couplers"],
        image: "https://cdn.britannica.com/24/4624-050-D2CAB6B1/Radio-wave-dish-type-antennas-diameter-satellite-communications.jpg",
    },
    {
        id: "satellite",
        title: "Satellite Communications",
        icon: Satellite,
        description:
            "Raycom's high-performance components are designed to meet the demanding requirements of satellite communication systems, ensuring reliable signal transmission in space applications.",
        products: ["WG Attenuators", "WG Filters", "WG Circulators", "WG Switches"],
        image: "https://pxl-southwalesacuk.terminalfour.net/fit-in/549x549/filters:format(webp)/prod01/channel_2/media/university-of-south-wales/site-assets/images/03-courses/engineering-electronic/engineering-electronic-msc-mobile-and-satellite-communications-placeholder-01-1.png",
    },
    {
        id: "wireless",
        title: "Wireless Networks",
        icon: Wifi,
        description:
            "Our RF/Microwave solutions support wireless network infrastructure, enabling high-speed data transmission and network reliability for 5G and other wireless technologies.",
        products: ["WG Filters", "WG Diplexers", "WG Isolators", "WG Couplers"],
        image: "https://fpgainsights.com/wp-content/uploads/2024/09/5g-network-communication-speed-futuristic-5g-powered-smartphone-realtime-streaming_1280472-3191.jpg.webp",
    },
    {
        id: "radar",
        title: "Radar Systems",
        icon: Zap,
        description:
            "Raycom provides critical components for radar systems used in defense, aviation, weather monitoring, and maritime applications, ensuring precise signal processing and detection.",
        products: ["WG Circulators", "WG Isolators", "WG Filters", "WG Rotary Joints"],
        image: "https://newsmedia.tasnimnews.com/Tasnim/Uploaded/Image/139209061332413121622484.jpg",
    },
    {
        id: "defense",
        title: "Defense & Military",
        icon: Shield,
        description:
            "Our ruggedized waveguide components meet military specifications for use in defense systems, electronic warfare, and tactical communications equipment.",
        products: ["WG Attenuators", "WG Circulators", "WG Isolators", "WG Switches"],
        image: "https://img.mwrf.com/files/base/ebm/mwrf/image/2023/04/Radar_dreamstime__Kipiru__172132813promo.642c23b507bf7.png?auto=format,compress&fit=crop&q=45&h=356&height=356&w=640&width=640",
    },
    {
        id: "research",
        title: "Research & Development",
        icon: Server,
        description:
            "Raycom supports scientific research with precision-engineered components for particle accelerators, fusion research, and other advanced scientific applications.",
        products: ["WG Filters", "WG Loads", "WG Couplers", "Custom Components"],
        image: "https://www.jotrin.com/userfiles/images/techs/Attenuators%20ICs.jpg",
    },
]

const ApplicationPage = () => {
    const [activeApp, setActiveApp] = useState(applications[0])

    return (
        <div className="pt-36 pb-16 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <motion.h1
                        className="text-3xl md:text-4xl font-bold mb-6 text-red-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Applications
                    </motion.h1>
                    <motion.p
                        className="text-xl font-semibold text-gray-900 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Raycom's waveguide components and RF/Microwave solutions are used in a wide range of industries and
                        applications.
                    </motion.p>
                </div>

                {/* Application Selector */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-4 bg-gray-50 border-b">
                                <h2 className="text-xl font-semibold text-gray-900">Industries & Applications</h2>
                            </div>
                            <div className="divide-y">
                                {applications.map((app) => (
                                    <button
                                        key={app.id}
                                        onClick={() => setActiveApp(app)}
                                        className={`w-full text-left px-4 py-3 flex items-center transition-colors ${activeApp.id === app.id
                                            ? "bg-red-50 text-red-600"
                                            : "text-gray-900 hover:bg-gray-50"
                                            }`}
                                    >
                                        <app.icon className={`h-5 w-5 mr-3 ${activeApp.id === app.id ? "text-red-600" : "text-gray-500"}`} />
                                        <span className="font-medium">{app.title}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        <motion.div
                            key={activeApp.id}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white rounded-lg shadow-md overflow-hidden h-full"
                        >
                            <div className="h-64 overflow-hidden">
                                <img
                                    src={activeApp.image || `/placeholder.svg?height=256&width=768`}
                                    alt={activeApp.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <div className="bg-red-100 p-2 rounded-full mr-3">
                                        <activeApp.icon className="h-6 w-6 text-red-600" />
                                    </div>
                                    <h2 className="text-2xl font-bold">{activeApp.title}</h2>
                                </div>
                                <p className="text-gray-950 mb-6">{activeApp.description}</p>
                                <div>
                                    <h3 className="font-semibold mb-2">Recommended Products:</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                        {activeApp.products.map((product) => (
                                            <li key={product} className="flex items-center text-gray-950">
                                                <span className="bg-gray-100 rounded-full p-1 mr-2">
                                                    <ArrowRight className="h-3 w-3 text-red-600" />
                                                </span>
                                                {product}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Case Studies */}
                {/* <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto">
                            Learn how our waveguide components have been used in real-world applications.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                title: "5G Network Infrastructure",
                                client: "Major Telecommunications Provider",
                                description:
                                    "Supplied custom waveguide filters and circulators for a nationwide 5G network deployment, improving signal quality and reducing interference.",
                                image: "/images/case-studies/5g-network.jpg",
                            },
                            {
                                title: "Weather Radar Upgrade",
                                client: "National Weather Service",
                                description:
                                    "Provided high-performance waveguide components for weather radar systems, enhancing detection accuracy and reliability in severe weather conditions.",
                                image: "/images/case-studies/weather-radar.jpg",
                            },
                            {
                                title: "Satellite Ground Station",
                                client: "Global Communications Company",
                                description:
                                    "Delivered a complete suite of waveguide components for satellite ground stations, enabling reliable high-bandwidth communications across continents.",
                                image: "/images/case-studies/satellite-ground.jpg",
                            },
                        ].map((study, index) => (
                            <motion.div
                                key={study.title}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={study.image || `/placeholder.svg?height=192&width=384`}
                                        alt={study.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                                    <p className="text-sm text-red-600 mb-3">Client: {study.client}</p>
                                    <p className="text-gray-600 text-sm">{study.description}</p>
                                    <button className="mt-4 text-red-600 font-medium text-sm flex items-center hover:text-red-700 transition-colors">
                                        Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div> */}

                {/* Custom Solutions */}
                <div className="bg-white rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Need a Custom Solution?</h2>
                            <p className="text-gray-900 font-semibold mb-6">
                                Our engineering team can design and manufacture custom waveguide components to meet your specific
                                requirements. With decades of experience in RF/Microwave engineering, we can help you solve your most
                                challenging technical problems.
                            </p>
                            <ul className="space-y-2 mb-6">
                                <li className="flex items-center text-gray-900 font-semibold">
                                    <span className="bg-red-100 rounded-full p-1 mr-2">
                                        <ArrowRight className="h-3 w-3 text-red-600" />
                                    </span>
                                    Custom frequency ranges and power specifications
                                </li>
                                <li className="flex items-center text-gray-900 font-semibold">
                                    <span className="bg-red-100 rounded-full p-1 mr-2">
                                        <ArrowRight className="h-3 w-3 text-red-600" />
                                    </span>
                                    Special materials and coatings for extreme environments
                                </li>
                                <li className="flex items-center text-gray-900 font-semibold">
                                    <span className="bg-red-100 rounded-full p-1 mr-2">
                                        <ArrowRight className="h-3 w-3 text-red-600" />
                                    </span>
                                    Complex integrated assemblies and subsystems
                                </li>
                                <li className="flex items-center text-gray-900 font-semibold">
                                    <span className="bg-red-100 rounded-full p-1 mr-2">
                                        <ArrowRight className="h-3 w-3 text-red-600" />
                                    </span>
                                    Rapid prototyping and production
                                </li>
                            </ul>
                            <button className="btn btn-primary">Contact Our Engineering Team</button>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://images.wondershare.com/pdfelement/pdf-business-tips/customized-solution.png"
                                alt="Custom Engineering Solutions"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ApplicationPage
