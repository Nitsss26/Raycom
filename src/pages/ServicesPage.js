// "use client"
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"
// import { Wrench, FileText, BarChart2, Zap, Cpu, Settings, ArrowRight, CheckCircle } from 'lucide-react'

// const ServicesPage = () => {
//     const services = [
//         {
//             id: "engineering",
//             title: "Engineering Services",
//             description:
//                 "Our team of experienced RF engineers provides comprehensive design and development services for waveguide components and systems.",
//             icon: Wrench,
//             features: [
//                 "Custom component design and optimization",
//                 "System integration support",
//                 "Performance simulation and analysis",
//                 "Design for manufacturability",
//             ],
//             image: "/images/services/engineering.jpg",
//         },
//         {
//             id: "testing",
//             title: "Testing & Validation",
//             description:
//                 "Comprehensive testing services to ensure your RF/Microwave components meet performance specifications and quality standards.",
//             icon: BarChart2,
//             features: [
//                 "RF performance testing",
//                 "Environmental testing",
//                 "Reliability testing",
//                 "Custom test protocol development",
//             ],
//             image: "/images/services/testing.jpg",
//         },
//         {
//             id: "consulting",
//             title: "Technical Consulting",
//             description:
//                 "Expert consultation on RF/Microwave system design, component selection, and performance optimization.",
//             icon: FileText,
//             features: [
//                 "System architecture review",
//                 "Component selection guidance",
//                 "Performance optimization",
//                 "Troubleshooting and problem resolution",
//             ],
//             image: "/images/services/consulting.jpg",
//         },
//         {
//             id: "prototyping",
//             title: "Rapid Prototyping",
//             description:
//                 "Quick turnaround on prototype development to help you validate designs and accelerate your product development cycle.",
//             icon: Zap,
//             features: [
//                 "Fast design iteration",
//                 "Functional prototypes",
//                 "Performance validation",
//                 "Design refinement",
//             ],
//             image: "/images/services/prototyping.jpg",
//         },
//         {
//             id: "manufacturing",
//             title: "Manufacturing Services",
//             description:
//                 "High-quality manufacturing of waveguide components and assemblies, from small batches to large production runs.",
//             icon: Settings,
//             features: [
//                 "Precision CNC machining",
//                 "Assembly and integration",
//                 "Quality control and testing",
//                 "Inventory management",
//             ],
//             image: "/images/services/manufacturing.jpg",
//         },
//         {
//             id: "repair",
//             title: "Repair & Refurbishment",
//             description:
//                 "Expert repair and refurbishment services to extend the life of your valuable RF/Microwave components and systems.",
//             icon: Cpu,
//             features: [
//                 "Component repair",
//                 "System refurbishment",
//                 "Performance restoration",
//                 "Upgrade options",
//             ],
//             image: "/images/services/repair.jpg",
//         },
//     ]

//     return (
//         <div className="pt-24 pb-16">
//             <div className="container mx-auto px-4">
//                 {/* Hero Section */}
//                 <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl overflow-hidden mb-16">
//                     <div className="absolute inset-0 overflow-hidden">
//                         <img
//                             src="/images/services/services-hero.jpg"
//                             alt="Raycom Services"
//                             className="w-full h-full object-cover opacity-20"
//                         />
//                     </div>
//                     <div className="relative py-16 px-8 md:py-24 md:px-12">
//                         <motion.div
//                             className="max-w-3xl"
//                             initial={{ opacity: 0, y: 20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.5 }}
//                         >
//                             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
//                             <p className="text-lg md:text-xl text-gray-300 mb-8">
//                                 Beyond manufacturing high-quality waveguide components, Raycom offers comprehensive services to
//                                 support your RF/Microwave projects from concept to completion.
//                             </p>
//                             <div className="flex flex-wrap gap-4">
//                                 <Link to="/contact" className="btn btn-primary">
//                                     Request Consultation
//                                 </Link>
//                                 <Link to="/application" className="btn btn-outline">
//                                     Explore Applications
//                                 </Link>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>

//                 {/* Services Grid */}
//                 <div className="mb-16">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold mb-4">Our Services</h2>
//                         <p className="text-gray-600 max-w-3xl mx-auto">
//                             Raycom offers a comprehensive range of services to support your RF/Microwave projects at every
//                             stage of development.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                         {services.map((service, index) => (
//                             <motion.div
//                                 key={service.id}
//                                 className="bg-white rounded-lg shadow-md overflow-hidden h-full"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                                 whileHover={{ y: -5 }}
//                             >
//                                 <div className="h-48 overflow-hidden">
//                                     <img
//                                         src={service.image || `/placeholder.svg?height=192&width=384`}
//                                         alt={service.title}
//                                         className="w-full h-full object-cover"
//                                     />
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="flex items-center mb-4">
//                                         <div className="bg-red-100 p-2 rounded-full mr-3">
//                                             <service.icon className="h-6 w-6 text-red-600" />
//                                         </div>
//                                         <h3 className="text-xl font-bold">{service.title}</h3>
//                                     </div>
//                                     <p className="text-gray-600 mb-4">{service.description}</p>
//                                     <ul className="space-y-2 mb-6">
//                                         {service.features.map((feature, idx) => (
//                                             <li key={idx} className="flex items-start">
//                                                 <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
//                                                 <span className="text-gray-700">{feature}</span>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                     <Link
//                                         to={`/contact?service=${service.id}`}
//                                         className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors"
//                                     >
//                                         Learn More <ArrowRight className="ml-1 h-4 w-4" />
//                                     </Link>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Service Process */}
//                 <div className="mb-16">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold mb-4">Our Service Process</h2>
//                         <p className="text-gray-600 max-w-3xl mx-auto">
//                             We follow a structured approach to ensure your project is completed efficiently and to your satisfaction.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//                         {[
//                             {
//                                 step: "1",
//                                 title: "Consultation",
//                                 description:
//                                     "We begin with a detailed consultation to understand your requirements, specifications, and project goals.",
//                             },
//                             {
//                                 step: "2",
//                                 title: "Proposal",
//                                 description:
//                                     "Our team develops a comprehensive proposal including technical specifications, timeline, and pricing.",
//                             },
//                             {
//                                 step: "3",
//                                 title: "Development",
//                                 description:
//                                     "Once approved, we proceed with design, prototyping, and development, keeping you informed at every stage.",
//                             },
//                             {
//                                 step: "4",
//                                 title: "Delivery",
//                                 description:
//                                     "After thorough testing and quality assurance, we deliver your solution with complete documentation and support.",
//                             },
//                         ].map((phase, index) => (
//                             <motion.div
//                                 key={phase.step}
//                                 className="bg-white rounded-lg shadow-md p-6 text-center relative"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                             >
//                                 <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
//                                     {phase.step}
//                                 </div>
//                                 <h3 className="text-xl font-semibold mt-6 mb-3">{phase.title}</h3>
//                                 <p className="text-gray-600">{phase.description}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Case Studies */}
//                 <div className="mb-16">
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold mb-4">Service Success Stories</h2>
//                         <p className="text-gray-600 max-w-3xl mx-auto">
//                             Learn how our services have helped clients solve complex RF/Microwave challenges.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {[
//                             {
//                                 title: "Custom Filter Design for Satellite Communications",
//                                 client: "Global Satellite Provider",
//                                 description:
//                                     "Designed and manufactured custom waveguide filters with stringent specifications for a new satellite communication system, reducing interference and improving signal quality.",
//                                 image: "/images/case-studies/satellite-filter.jpg",
//                                 results: ["50% reduction in signal interference", "30% improvement in data throughput", "On-time delivery despite challenging timeline"],
//                             },
//                             {
//                                 title: "RF System Optimization for Defense Application",
//                                 client: "Defense Contractor",
//                                 description:
//                                     "Provided comprehensive system analysis and optimization services for a critical defense radar system, identifying and resolving performance bottlenecks.",
//                                 image: "/images/case-studies/defense-radar.jpg",
//                                 results: ["40% increase in detection range", "Improved reliability in extreme conditions", "Extended system operational life by 5+ years"],
//                             },
//                         ].map((study, index) => (
//                             <motion.div
//                                 key={study.title}
//                                 className="bg-white rounded-lg shadow-md overflow-hidden"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                             >
//                                 <div className="md:flex">
//                                     <div className="md:w-2/5">
//                                         <img
//                                             src={study.image || `/placeholder.svg?height=300&width=300`}
//                                             alt={study.title}
//                                             className="w-full h-full object-cover"
//                                         />
//                                     </div>
//                                     <div className="p-6 md:w-3/5">
//                                         <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
//                                         <p className="text-sm text-red-600 mb-3">Client: {study.client}</p>
//                                         <p className="text-gray-600 mb-4">{study.description}</p>
//                                         <h4 className="font-medium mb-2">Results:</h4>
//                                         <ul className="space-y-1 mb-4">
//                                             {study.results.map((result, idx) => (
//                                                 <li key={idx} className="flex items-start">
//                                                     <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
//                                                     <span className="text-gray-700 text-sm">{result}</span>
//                                                 </li>
//                                             ))}
//                                         </ul>
//                                         <Link
//                                             to="/contact"
//                                             className="text-red-600 font-medium text-sm flex items-center hover:text-red-700 transition-colors"
//                                         >
//                                             Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
//                                         </Link>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* CTA Section */}
//                 <div className="bg-gray-900 rounded-lg overflow-hidden">
//                     <div className="grid grid-cols-1 md:grid-cols-2">
//                         <div className="p-8 md:p-12 text-white">
//                             <h2 className="text-3xl font-bold mb-4">Let's Build Something Great Together</h2>
//                             <p className="mb-6 text-gray-300">
//                                 Whether you need expert engineering support, precision manufacturing, or full-scale RF/Microwave solutions, Raycom is ready to help.
//                             </p>
//                             <div className="flex flex-wrap gap-4">
//                                 <Link to="/contact" className="btn btn-primary">
//                                     Get in Touch
//                                 </Link>
//                                 <Link to="/about" className="btn btn-outline text-white border-white hover:bg-white hover:text-gray-900 transition">
//                                     Learn More About Us
//                                 </Link>
//                             </div>
//                         </div>
//                         <div className="h-64 md:h-auto">
//                             <img
//                                 src="/images/services/cta-bg.jpg"
//                                 alt="Call to Action"
//                                 className="w-full h-full object-cover"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default ServicesPage


"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Wrench, FileText, BarChart2, Zap, Cpu, Settings, ArrowRight, CheckCircle } from "lucide-react"

const ServicesPage = () => {
    const services = [
        {
            id: "engineering",
            title: "Engineering Services",
            description:
                "Our team of experienced RF engineers provides comprehensive design and development services for waveguide components and systems.",
            icon: Wrench,
            features: [
                "Custom component design and optimization",
                "System integration support",
                "Performance simulation and analysis",
                "Design for manufacturability",
            ],
            image: "https://img.freepik.com/premium-vector/production-line-with-workers-automation-user-interface-concept_566886-12851.jpg?semt=ais_hybrid&w=740",
        },
        {
            id: "testing",
            title: "Testing & Validation",
            description:
                "Comprehensive testing services to ensure your RF/Microwave components meet performance specifications and quality standards.",
            icon: BarChart2,
            features: [
                "RF performance testing",
                "Environmental testing",
                "Reliability testing",
                "Custom test protocol development",
            ],
            image: "https://miro.medium.com/v2/resize:fit:1252/0*kPO00V7kKr9qSY9h",
        },
        {
            id: "consulting",
            title: "Technical Consulting",
            description:
                "Expert consultation on RF/Microwave system design, component selection, and performance optimization.",
            icon: FileText,
            features: [
                "System architecture review",
                "Component selection guidance",
                "Performance optimization",
                "Troubleshooting and problem resolution",
            ],
            image: "https://img.freepik.com/free-vector/online-consulting-concept-illustration_114360-9658.jpg",
        },
        {
            id: "prototyping",
            title: "Rapid Prototyping",
            description:
                "Quick turnaround on prototype development to help you validate designs and accelerate your product development cycle.",
            icon: Zap,
            features: ["Fast design iteration", "Functional prototypes", "Performance validation", "Design refinement"],
            image: "https://img.freepik.com/free-vector/interaction-design-concept-illustration_114360-1442.jpg?semt=ais_hybrid&w=740",
        },
        {
            id: "manufacturing",
            title: "Manufacturing Services",
            description:
                "High-quality manufacturing of waveguide components and assemblies, from small batches to large production runs.",
            icon: Settings,
            features: [
                "Precision CNC machining",
                "Assembly and integration",
                "Quality control and testing",
                "Inventory management",
            ],
            image: "https://img.freepik.com/free-vector/production-line-concept-illustration_114360-26658.jpg?semt=ais_hybrid&w=740",
        },
        {
            id: "repair",
            title: "Repair & Refurbishment",
            description:
                "Expert repair and refurbishment services to extend the life of your valuable RF/Microwave components and systems.",
            icon: Cpu,
            features: ["Component repair", "System refurbishment", "Performance restoration", "Upgrade options"],
            image: "https://img.freepik.com/free-vector/repair-household-appliances-abstract-concept-illustration_335657-2213.jpg?semt=ais_hybrid&w=740",
        },
    ]

    return (
        <div className="pt-36 pb-16 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-xl overflow-hidden mb-16">
                    <div className="absolute inset-0 overflow-hidden">
                        <img
                            src="https://i0.wp.com/www.kudan.io/wp-content/uploads/2024/03/%E7%94%BB%E5%83%8F%EF%BC%91.png?resize=505%2C505&ssl=1"
                            alt="Raycom Services"
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
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Our Services</h1>
                            <p className="text-lg md:text-xl text-white mb-8">
                                Beyond manufacturing high-quality waveguide components, Raycom Pvt. Ltd. offers comprehensive services to
                                support your RF/Microwave projects from concept to completion.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Link to="/contact" className="btn btn-primary">
                                    Request Consultation
                                </Link>
                                <Link to="/application" className="btn btn-outline">
                                    Explore Applications
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl text-red-500 font-bold mb-4">Our Services</h2>
                        <p className="text-xl font-semibold text-gray-900  max-w-3xl mx-auto">
                            Raycom offers a comprehensive range of services to support your RF/Microwave projects at every
                            stage of development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="bg-white rounded-lg shadow-md overflow-hidden h-full"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={service.image || `/placeholder.svg?height=192&width=384`}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <div className="bg-red-100 p-2 rounded-full mr-3">
                                            <service.icon className="h-6 w-6 text-red-600" />
                                        </div>
                                        <h3 className="text-xl font-bold">{service.title}</h3>
                                    </div>
                                    <p className="text-gray-600 mb-4">{service.description}</p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start">
                                                <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                                                <span className="text-gray-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        to={`/contact?service=${service.id}`}
                                        className="text-red-600 font-medium flex items-center hover:text-red-700 transition-colors"
                                    >
                                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Service Process */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-red-500 mb-4">Our Service Process</h2>
                        <p className="text-xl font-semibold text-gray-900 max-w-3xl mx-auto">
                            We follow a structured approach to ensure your project is completed efficiently and to your satisfaction.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "1",
                                title: "Consultation",
                                description:
                                    "We begin with a detailed consultation to understand your requirements, specifications, and project goals.",
                            },
                            {
                                step: "2",
                                title: "Proposal",
                                description:
                                    "Our team develops a comprehensive proposal including technical specifications, timeline, and pricing.",
                            },
                            {
                                step: "3",
                                title: "Development",
                                description:
                                    "Once approved, we proceed with design, prototyping, and development, keeping you informed at every stage.",
                            },
                            {
                                step: "4",
                                title: "Delivery",
                                description:
                                    "After thorough testing and quality assurance, we deliver your solution with complete documentation and support.",
                            },
                        ].map((phase, index) => (
                            <motion.div
                                key={phase.step}
                                className="bg-white rounded-lg shadow-md p-6 text-center relative"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-red-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg">
                                    {phase.step}
                                </div>
                                <h3 className="text-xl font-semibold mt-6 mb-3">{phase.title}</h3>
                                <p className="text-gray-600">{phase.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Case Studies */}
                <div className="mb-16">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-red-500 mb-4">Service Success Stories</h2>
                        <p className="text-md font-semibold text-gray-900 max-w-3xl mx-auto">
                            Learn how our services have helped clients solve complex RF/Microwave challenges.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Custom Filter Design for Satellite Communications",
                                client: "Global Satellite Provider",
                                description:
                                    "Designed and manufactured custom waveguide filters with stringent specifications for a new satellite communication system, reducing interference and improving signal quality.",
                                image: "https://saabrds.com/wp-content/uploads/image-3-1.jpg",
                                results: [
                                    "50% reduction in signal interference",
                                    "30% improvement in data throughput",
                                    "On-time delivery despite challenging timeline",
                                ],
                            },
                            {
                                title: "RF System Optimization for Defense Application",
                                client: "Defense Contractor",
                                description:
                                    "Provided comprehensive system analysis and optimization services for a critical defense radar system, identifying and resolving performance bottlenecks.",
                                image: "https://www.army-technology.com/wp-content/uploads/sites/3/2016/12/rheinmetall-AD-lead-1.jpg",
                                results: [
                                    "40% increase in detection range",
                                    "Improved reliability in extreme conditions",
                                    "Extended system operational life by 5+ years",
                                ],
                            },
                        ].map((study, index) => (
                            <motion.div
                                key={study.title}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="md:flex">
                                    <div className="md:w-2/5">
                                        <img
                                            src={study.image || `/placeholder.svg?height=300&width=300`}
                                            alt={study.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="p-6 md:w-3/5">
                                        <h3 className="text-xl font-semibold mb-2">{study.title}</h3>
                                        <p className="text-sm text-red-600 mb-3">Client: {study.client}</p>
                                        <p className="text-gray-600 mb-4">{study.description}</p>
                                        <h4 className="font-medium mb-2">Results:</h4>
                                        <ul className="space-y-1 mb-4">
                                            {study.results.map((result, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5" />
                                                    <span className="text-gray-700 text-sm">{result}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            to="/contact"
                                            className="text-red-600 font-medium text-sm flex items-center hover:text-red-700 transition-colors"
                                        >
                                            Read Full Case Study <ArrowRight className="ml-1 h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-8 md:p-12 flex items-center">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h2>
                                <p className="text-gray-300 mb-6">
                                    Contact our team today to discuss your RF/Microwave project requirements and discover how our services
                                    can help you achieve your goals.
                                </p>
                                <Link to="/contact" className="btn btn-primary">
                                    Request Consultation
                                </Link>
                            </div>
                        </div>
                        <div className="relative h-64 md:h-auto">
                            <img
                                src="https://i.ibb.co/5XwfLJWV/Screenshot-2025-04-20-023551-removebg-preview-1-1.png"
                                alt="RF Engineering Services"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesPage

