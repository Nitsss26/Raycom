"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight, Award, Truck, Shield, Clock } from "lucide-react"

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Components
import FeaturedProducts from "../components/products/FeaturedProducts"
import CategoryGrid from "../components/products/CategoryGrid"
import TestimonialSlider from "../components/home/TestimonialSlider"
import NewsletterSignup from "../components/home/NewsletterSignup.js"

const HomePage = () => {
  return (
    <div className="pt-20 bg-[#ecf0f5]">
      {/* Hero Section */}
      {/* <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <img src="/images/hero-bg.jpg" alt="Waveguide Components" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              High-Performance Waveguide Components
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8 text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Premium RF/Microwave solutions for telecommunications, defense, and aerospace industries.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/products" className="btn btn-primary flex items-center justify-center">
                Browse Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Request Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section> */}
      {/* Hero Section */}
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-16">
        {/* Background image overlay */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://media.licdn.com/dms/image/v2/D5612AQHD37PvU1rWQQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708320243714?e=2147483647&v=beta&t=BUyfekqdPc4VsYAIU6CHXNn74Aa5V0fz65EgI7YuL7U"
            alt="Waveguide Components"
            className="w-full h-full object-cover opacity-20"
          />
        </div>

        <div className="container mx-auto px-4 py-20 md:py-12 md:pb-32 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

            {/* Left content */}
            <div>
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                High-Performance<br />
                <span className="text-red-600">Microwave</span><br />
                Components
              </motion.h1>
              <motion.p
                className="text-xl mb-6 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                Premium RF/Microwave solutions for telecommunications, defense, and aerospace industries.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <Link to="/products" className="bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-6 rounded flex items-center justify-center transition-colors duration-300">
                  Browse Products <ArrowRight className="ml-2 h-5 w-5 text-white" />
                </Link>
                <Link to="/contact" className="border border-gray-400 hover:bg-white hover:text-gray-900 text-white font-medium py-3 px-6 rounded flex items-center justify-center transition-colors duration-300">
                  Request Quote
                </Link>
              </motion.div>

              {/* Feature bullets */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                {["Military Grade", "High Reliability", "Custom Solutions", "Technical Support"].map((label) => (
                  <div key={label} className="flex items-center">
                    <div className="bg-red-600 rounded-full p-1 mr-2 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                    </div>
                    <span className="text-sm">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right slider */}
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ delay: 6000, disableOnInteraction: false }}
                className="rounded-lg overflow-hidden shadow-lg"
                navigation={{ prevEl: '.swiper-button-prev', nextEl: '.swiper-button-next' }}
                pagination={{
                  clickable: true,
                  bulletClass: 'swiper-pagination-bullet inline-block h-2 w-2 rounded-full mx-1 cursor-pointer',
                  bulletActiveClass: 'swiper-pagination-bullet-active bg-red-600'
                }}
              >
                <SwiperSlide>
                  <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden">
                    <img
                      //src="https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      src="https://media.licdn.com/dms/image/v2/D5612AQHD37PvU1rWQQ/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1708320243714?e=2147483647&v=beta&t=BUyfekqdPc4VsYAIU6CHXNn74Aa5V0fz65EgI7YuL7U"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                      <h3 className="text-lg font-semibold">Custom Engineering</h3>
                      <p className="text-sm text-gray-300">Tailored to your requirements</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden">
                    <img
                      src="https://www.avalontec.com/wp-content/uploads/2024/06/electronic_manufacturing_industry_is_growing_fast_573d84ad-679e-4e29-ad3a-497b7cc791b8-800x533.png"
                      alt="RF/Microwave Solutions"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                      <h3 className="text-lg font-semibold">High-Precision Waveguides</h3>
                      <p className="text-sm text-gray-300">Military-grade performance</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="relative aspect-video bg-gray-700 rounded-lg overflow-hidden">
                    <img
                      src="https://www.shutterstock.com/image-photo/microwave-amplifier-printed-circuit-board-260nw-1934788073.jpg"
                      alt="Telecommunications Equipment"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-4">
                      <h3 className="text-lg font-semibold">RF/Microwave Components</h3>
                      <p className="text-sm text-gray-300">Telecommunications excellence</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              {/* Prev Button */}
              <div className="absolute top-1/2 left-2 -translate-y-1/2 z-10 swiper-button-prev bg-white-600 rounded-full p-7 cursor-pointer shadow-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20">
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  />
                </svg>
              </div>

              {/* Next Button */}
              <div className="absolute top-1/2 right-2 -translate-y-1/2 z-10 swiper-button-next bg-white-600 rounded-full p-7 cursor-pointer shadow-md hover:bg-red-700 transition-colors duration-300 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20">
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  />
                </svg>
              </div>

              {/* Pagination Dots */}
              <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-1">
                {[0, 1, 2].map((idx) => (
                  <span
                    key={idx}
                    className={`inline-block h-2 w-2 rounded-full transition-colors duration-300 ${idx === 0 ? 'bg-white' : 'bg-white bg-opacity-50'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Products */}
      <section className="py-16 bg-gray-150">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link to="/products" className="text-red-600 hover:text-red-700 flex items-center font-medium">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <FeaturedProducts />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 pb-10 bg-gray-150">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-medium text-center text-gray-800 mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                High-performance components built to meet the most demanding specifications.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Quick shipping and delivery to meet your project timelines.</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Reliability</h3>
              <p className="text-gray-600">Trusted by industry leaders for consistent performance and durability.</p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Support</h3>
              <p className="text-gray-600">Expert assistance available to help with your specific requirements.</p>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Product Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Product Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-xl">
              Explore our comprehensive range of waveguide components designed for various applications
            </p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">What Our Clients Say</h2>
            <p className="text-gray-300 max-w-xl mx-auto">
              Real feedback from our trusted partners.
            </p>
          </div>

          {/* Slider */}
          <div className="relative">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet !bg-white bg-opacity-50',
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-red'
              }}
              className="py-6"
            >
              {/* Sarah Chen */}
              <SwiperSlide>
                <motion.div
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Dr. Sarah Chen"
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <p className="italic text-gray-200 mb-4">
                    “Their waveguide components consistently exceed our expectations and performance.”
                  </p>
                  <h3 className="font-semibold">Dr. Sarah Chen</h3>
                  <span className="text-sm text-gray-400">CTO, Satellite Communications Inc.</span>
                </motion.div>
              </SwiperSlide>

              {/* Michael Rodriguez */}
              <SwiperSlide>
                <motion.div
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Michael Rodriguez"
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <p className="italic text-gray-200 mb-4">
                    “We've relied on their components for years—reliable even in the toughest conditions.”
                  </p>
                  <h3 className="font-semibold">Michael Rodriguez</h3>
                  <span className="text-sm text-gray-400">RF Systems Engineer, Defense Technologies Ltd.</span>
                </motion.div>
              </SwiperSlide>

              {/* James Wilson */}
              <SwiperSlide>
                <motion.div
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Dr. James Wilson"
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <p className="italic text-gray-200 mb-4">
                    “Their technical support is outstanding—custom solutions that fit our needs perfectly.”
                  </p>
                  <h3 className="font-semibold">Dr. James Wilson</h3>
                  <span className="text-sm text-gray-400">Research Director, Advanced Radar Systems</span>
                </motion.div>
              </SwiperSlide>

              {/* Emily Nakamura */}
              <SwiperSlide>
                <motion.div
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Emily Nakamura"
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <p className="italic text-gray-200 mb-4">
                    “Quick deliveries and top customer service make them our preferred supplier.”
                  </p>
                  <h3 className="font-semibold">Emily Nakamura</h3>
                  <span className="text-sm text-gray-400">Procurement Manager, Global Telecomm Corp</span>
                </motion.div>
              </SwiperSlide>

              {/* Robert Lee */}
              <SwiperSlide>
                <motion.div
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Dr. Robert Lee"
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <p className="italic text-gray-200 mb-4">
                    “Their expertise and precision helped us hit every milestone on time.”
                  </p>
                  <h3 className="font-semibold">Dr. Robert Lee</h3>
                  <span className="text-sm text-gray-400">CFO, AeroTech Solutions</span>
                </motion.div>
              </SwiperSlide>

              {/* Lisa Patel */}
              <SwiperSlide>
                <motion.div
                  className="bg-gray-800 bg-opacity-50 p-6 rounded-lg shadow-xl flex flex-col items-center text-center"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                    alt="Lisa Patel"
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <p className="italic text-gray-200 mb-4">
                    “Their quality control is impeccable—components arrive spotless and ready to use.”
                  </p>
                  <h3 className="font-semibold">Lisa Patel</h3>
                  <span className="text-sm text-gray-400">VP Engineering, Telco Solutions</span>
                </motion.div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>


      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <NewsletterSignup />
        </div>
      </section>
    </div>
  )
}

export default HomePage

