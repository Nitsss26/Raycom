"use client"
import { motion } from "framer-motion"
import { Award, Users, Clock, Globe, CheckCircle } from 'lucide-react'

const AboutPage = () => {
    return (
        <div className="pt-36 pb-16 bg-gray-100">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="relative bg-gray-900 rounded-xl overflow-hidden mb-16">
                    {/* Background image overlay */}
                    <div className="absolute inset-0">
                        <img
                            src="https://t4.ftcdn.net/jpg/13/37/30/41/360_F_1337304120_KgR9KPCY63ftPqonOr2M7FT4C1gnHZun.jpg"
                            alt="About Raycom"
                            className="w-full h-full object-cover opacity-30"
                        />
                    </div>

                    {/* Content wrapper */}
                    <div className="relative py-16 px-8 md:py-24 md:px-12 text-center">

                        {/* Main heading */}
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            About Raycom Pvt. Ltd.
                        </motion.h1>

                        {/* Startup India & DPIIT Badges */}
                        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                            <div className="flex items-center space-x-2">
                                <img
                                    src="https://getlogo.net/wp-content/uploads/2019/12/startup-india-hub-logo-vector.png"
                                    alt="Startup India Logo"
                                    className="h-14"
                                />
                                <span className="text-sm text-white font-semibold">Recognized by Startup India</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img
                                    src="https://www.livelaw.in/h-upload/2023/07/27/1500x900_483231-dpiit.webp"
                                    alt="DPIIT Logo"
                                    className="h-14"
                                />
                                <span className="text-sm text-white font-semibold">DPIIT No. : 12345/2323</span>
                            </div>
                        </div>



                        {/* Subtitle paragraph */}
                        <motion.p
                            className="text-lg md:text-xl text-white max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Leading provider of high-quality waveguide components and RF/Microwave solutions for telecommunications,
                            defense, and aerospace industries.
                        </motion.p>
                    </div>
                </div>
                {/* <div className="relative bg-gray-900 rounded-xl overflow-hidden mb-16">
                    <div className="absolute inset-0">
                        <img
                            // src="https://www.repsol.com/content/dam/repsol-corporate/es/energia-e-innovacion/transistores-semiconductores.jpg"
                            // src="https://t4.ftcdn.net/jpg/10/89/45/81/360_F_1089458105_m8mI0wt9ohFvXgTSmNwzMFfM48n5ZLaZ.jpg"
                            src="https://t4.ftcdn.net/jpg/13/37/30/41/360_F_1337304120_KgR9KPCY63ftPqonOr2M7FT4C1gnHZun.jpg"
                            alt="About Raycom"
                            className="w-full h-full object-cover opacity-30"
                        />
                    </div>
                    <div className="relative py-16 px-8 md:py-24 md:px-12 text-center">
                        <motion.h1
                            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            About Raycom Pvt. Ltd.
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl text-white max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            Leading provider of high-quality waveguide components and RF/Microwave solutions for telecommunications,
                            defense, and aerospace industries.
                        </motion.p>
                    </div>
                </div> */}

                {/* Our Story */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                            <div className="flex items-start mb-4">
                                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-950 font-semibold">
                                    Founded in 2015, Raycom has grown from a small workshop to a leading manufacturer of waveguide
                                    components and RF/Microwave solutions. Our journey began with a simple mission: to provide high-quality,
                                    reliable components for the telecommunications industry.
                                </p>
                            </div>
                            <div className="flex items-start mb-4">
                                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-950 font-semibold">
                                    Over the years, we've expanded our product range and expertise to serve defense, aerospace, and research
                                    institutions worldwide. Our commitment to precision engineering, innovation, and customer satisfaction
                                    has remained unwavering throughout our growth.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3 mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <p className="text-gray-950 font-semibold">
                                    Today, Raycom is recognized globally for its exceptional product quality, technical expertise,
                                    and responsive customer service. We continue to invest in advanced manufacturing technologies and talent
                                    to stay at the forefront of the RF/Microwave industry.
                                </p>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="rounded-lg overflow-hidden shadow-lg"
                        >
                            <img
                                src="https://investinholland.com/wp-content/uploads/2024/01/Semicon-Netherlands-2-1024x574.jpeg"
                                alt="Raycom History"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                </div>

                {/* Our Values */}
                <div className="mb-16">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl text-gray-950 font-bold mb-4">Our Values</h2>
                        <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                            At Raycom, our core values guide everything we do, from product development to customer service.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl text-gray-950 font-semibold mb-2">Excellence</h3>
                            <p className="text-gray-900">
                                We strive for excellence in everything we do, from product design to customer support.
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-950 mb-2">Reliability</h3>
                            <p className="text-gray-900">
                                Customers rely on our products for critical applications. We deliver trusted reliability
                            </p>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-gray-950">Innovation</h3>
                            <p className="text-gray-900">
                                We continuously innovate to develop cutting-edge solutions that meet industry needs.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Our Team */}
                <div className="mb-16">
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl text-gray-950 font-bold mb-4">Our Leadership Team</h2>
                        <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                            Meet the experienced professionals who lead Raycom's innovation and growth.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "Nitesh Kashyap",
                                position: "Founder & CEO",
                                image: "https://www.nitj.ac.in/images/faculty/22012667314.jpg",
                                bio: "With over 15 years of experience in RF engineering, Nitesh Kashyap leads Raycom's strategic vision.",
                            },
                            {
                                name: "Sarah Johnson",
                                position: "VP of Operations",
                                image: "https://iimk.ac.in/uploads/admission_application/medium/PGP_26_399.jpg",
                                bio: "Sarah ensures our manufacturing processes meet the highest quality standards.",
                            },
                            {
                                name: "Nitesh",
                                position: "Chief Technology Officer",
                                image: "https://www.infodreameducation.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdxgxzfn32%2Fimage%2Fupload%2Fv1720225543%2Fpsexcegjz173uuunk3da.png&w=256&q=75",
                                bio: "Nitesh leads the vision and execution of all things tech—turning ideas into scalable digital solutions.",
                            },
                            {
                                name: "Emily Nakamura",
                                position: "VP of Sales",
                                image: "https://iimk.ac.in/uploads/admission_application/medium/PGPLSM_03_002.jpg",
                                bio: "Emily leads our global sales team with a customer-centric approach to business development.",
                            },
                        ].map((member, index) => (
                            <motion.div
                                key={member.name}
                                className="bg-white rounded-lg overflow-hidden shadow-md"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * index }}
                                whileHover={{ y: -5 }}
                            >
                                <img
                                    src={member.image || `/placeholder.svg?height=300&width=300`}
                                    alt={member.name}
                                    className="w-full h-64  "
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                                    <p className="text-lg font-semibold text-red-600 text-sm mb-2">{member.position}</p>
                                    <p className=" text-gray-950 text-sm">{member.bio}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Stats */}
                <div className="bg-white rounded-lg p-8 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">25+</h3>
                            <p className="text-gray-900 font-semibold">Years of Experience</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Globe className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">50+</h3>
                            <p className="text-gray-900 font-semibold">Countries Served</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">500+</h3>
                            <p className="text-gray-900 font-semibold">Products</p>
                        </motion.div>

                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-8 w-8 text-red-600" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2">1000+</h3>
                            <p className="text-gray-900 font-semibold">Happy Clients</p>
                        </motion.div>
                    </div>
                </div>

                {/* Certifications */}
                <div>
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl text-gray-950 font-bold mb-4">Our Certifications</h2>
                        <p className="text-xl text-gray-900 max-w-3xl mx-auto">
                            Raycom maintains the highest industry standards with these certifications.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0 }}
                        >
                            <div className="bg-white rounded-full p-4 w-200 h-200 flex items-center justify-center mx-auto mb-4">
                                <img
                                    src="https://5.imimg.com/data5/UU/AC/MY-30937658/iso-9001-3a-2015-500x500.jpg"
                                    alt="ISO 9001:2015"
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                            <h3 className="font-semibold">ISO 9001:2015</h3>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                        >
                            <div className="bg-white rounded-full p-4 w-200 h-200 flex items-center justify-center mx-auto mb-4">
                                <img
                                    src="https://5.imimg.com/data5/SELLER/Default/2022/9/SR/NG/OV/3353330/as-9100-certification-services-500x500.jpg"
                                    alt="AS9100D"
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                            <h3 className="font-semibold">AS9100D</h3>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 }}
                        >
                            <div className="bg-white rounded-full p-4 w-200 h-200 flex items-center justify-center mx-auto mb-4">
                                <img
                                    src="https://tsaglobaliso.com/wp-content/uploads/2024/09/14001.png"
                                    alt="ISO 14001"
                                    className="w-20 h-20 object-contain"
                                />
                            </div>
                            <h3 className="font-semibold">ISO 14001</h3>
                        </motion.div>

                        <motion.div
                            className="bg-white p-6 rounded-lg shadow-md text-center"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            <div className="bg-white rounded-full p-4 w-200 h-200 flex items-center justify-center mx-auto mb-4">
                                <img
                                    src="https://coastalmachinesupply.com/wp-content/uploads/QMS-ITAR-Registered.png"
                                    alt="ITAR Registered"
                                    className="w-20 h-20 object-contain bg-white"
                                />
                            </div>
                            <h3 className="font-semibold">ITAR Registered</h3>
                        </motion.div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutPage
