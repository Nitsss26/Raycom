// // "use client"
// // import { useState } from "react"
// // import { motion } from "framer-motion"
// // import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

// // const ContactPage = () => {
// //     const [formData, setFormData] = useState({
// //         name: "",
// //         email: "",
// //         phone: "",
// //         company: "",
// //         subject: "",
// //         message: "",
// //     })
// //     const [errors, setErrors] = useState({})
// //     const [loading, setLoading] = useState(false)
// //     const [submitted, setSubmitted] = useState(false)

// //     const handleChange = (e) => {
// //         const { name, value } = e.target
// //         setFormData((prev) => ({
// //             ...prev,
// //             [name]: value,
// //         }))

// //         // Clear error when field is edited
// //         if (errors[name]) {
// //             setErrors((prev) => ({
// //                 ...prev,
// //                 [name]: "",
// //             }))
// //         }
// //     }

// //     const validateForm = () => {
// //         const newErrors = {}

// //         if (!formData.name.trim()) newErrors.name = "Name is required"
// //         if (!formData.email.trim()) {
// //             newErrors.email = "Email is required"
// //         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
// //             newErrors.email = "Email is invalid"
// //         }
// //         if (!formData.subject.trim()) newErrors.subject = "Subject is required"
// //         if (!formData.message.trim()) newErrors.message = "Message is required"

// //         setErrors(newErrors)
// //         return Object.keys(newErrors).length === 0
// //     }

// //     const handleSubmit = async (e) => {
// //         e.preventDefault()

// //         if (!validateForm()) return

// //         setLoading(true)
// //         // Simulate API call
// //         setTimeout(() => {
// //             setLoading(false)
// //             setSubmitted(true)
// //             // Reset form
// //             setFormData({
// //                 name: "",
// //                 email: "",
// //                 phone: "",
// //                 company: "",
// //                 subject: "",
// //                 message: "",
// //             })
// //         }, 1500)
// //     }

// //     return (
// //         <div className="pt-36 pb-16 bg-gray-100">
// //             <div className="container mx-auto px-4">
// //                 {/* Hero Section */}
// //                 <div className="text-center mb-16">
// //                     <motion.h1
// //                         className="text-3xl md:text-4xl font-bold mb-6 text-red-600"
// //                         initial={{ opacity: 0, y: 20 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.5 }}
// //                     >
// //                         Contact Us
// //                     </motion.h1>
// //                     <motion.p
// //                         className="text-xl font-semibold text-gray-800 max-w-3xl mx-auto"
// //                         initial={{ opacity: 0, y: 20 }}
// //                         animate={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.5, delay: 0.2 }}
// //                     >
// //                         Have questions about our products or services? Our team is here to help.
// //                     </motion.p>
// //                 </div>

// //                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
// //                     {/* Contact Information */}
// //                     <div className="lg:col-span-1">
// //                         <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //                             <div className="p-6 bg-red-600 text-white">
// //                                 <h2 className="text-2xl mb-2">Contact Information</h2>
// //                                 <p>Get in touch with our dedicated team today for any inquiries, support, or customized assistance you may require.</p>
// //                             </div>
// //                             <div className="p-6 space-y-6">
// //                                 <div className="flex items-start">
// //                                     <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
// //                                         <MapPin className="h-5 w-5 text-red-600" />
// //                                     </div>
// //                                     <div>
// //                                         <h3 className="font-medium mb-1">Our Location</h3>
// //                                         <p className="text-gray-600">NIT Jalandhar GT Road </p>
// //                                         <p className="text-gray-600">(Bypass), Jalandhar‑144011,</p>
// //                                         <p className="text-gray-600">Punjab, India</p>
// //                                     </div>
// //                                 </div>

// //                                 <div className="flex items-start">
// //                                     <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
// //                                         <Phone className="h-5 w-5 text-red-600" />
// //                                     </div>
// //                                     <div>
// //                                         <h3 className="font-medium mb-1">Phone</h3>
// //                                         <p className="text-gray-600">
// //                                             <a href="tel:+917999283903" className="hover:text-red-600 transition-colors">
// //                                                 +91 (799) 928-3903
// //                                             </a>
// //                                         </p>
// //                                         <p className="text-gray-600">
// //                                             <a href="tel:+917009090762" className="hover:text-red-600 transition-colors">
// //                                                 +91 (700) 909-0762
// //                                             </a>
// //                                         </p>
// //                                     </div>
// //                                 </div>

// //                                 <div className="flex items-start">
// //                                     <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
// //                                         <Mail className="h-5 w-5 text-red-600" />
// //                                     </div>
// //                                     <div>
// //                                         <h3 className="font-medium mb-1">Email</h3>
// //                                         <p className="text-gray-600">
// //                                             <a href="mailto: info@Raycom.com" className="hover:text-red-600 transition-colors">
// //                                                 info@Raycom.com
// //                                             </a>
// //                                         </p>
// //                                         <p className="text-gray-600">
// //                                             <a href="mailto:support@Raycom.com" className="hover:text-red-600 transition-colors">
// //                                                 support@Raycom.com
// //                                             </a>
// //                                         </p>
// //                                     </div>
// //                                 </div>

// //                                 <div className="flex items-start">
// //                                     <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
// //                                         <Clock className="h-5 w-5 text-red-600" />
// //                                     </div>
// //                                     <div>
// //                                         <h3 className="font-medium mb-1">Business Hours</h3>
// //                                         <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
// //                                         <p className="text-gray-600">Saturday - Sunday: Closed</p>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>

// //                     {/* Contact Form */}
// //                     <div className="lg:col-span-2">
// //                         <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //                             <div className="p-6">
// //                                 {submitted ? (
// //                                     <motion.div
// //                                         className="text-center py-12"
// //                                         initial={{ opacity: 0, scale: 0.8 }}
// //                                         animate={{ opacity: 1, scale: 1 }}
// //                                         transition={{ duration: 0.5 }}
// //                                     >
// //                                         <div className="flex justify-center mb-6">
// //                                             <div className="bg-green-100 rounded-full p-3">
// //                                                 <CheckCircle className="h-12 w-12 text-green-600" />
// //                                             </div>
// //                                         </div>
// //                                         <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
// //                                         <p className="text-gray-600 mb-6">
// //                                             Your message has been sent successfully. We'll get back to you as soon as possible.
// //                                         </p>
// //                                         <button
// //                                             onClick={() => setSubmitted(false)}
// //                                             className="btn btn-primary"
// //                                         >
// //                                             Send Another Message
// //                                         </button>
// //                                     </motion.div>
// //                                 ) : (
// //                                     <>
// //                                         <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
// //                                         <form onSubmit={handleSubmit}>
// //                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
// //                                                 <div>
// //                                                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
// //                                                         Full Name <span className="text-red-500">*</span>
// //                                                     </label>
// //                                                     <input
// //                                                         type="text"
// //                                                         id="name"
// //                                                         name="name"
// //                                                         value={formData.name}
// //                                                         onChange={handleChange}
// //                                                         className={`form-control ${errors.name ? "border-red-500" : ""}`}
// //                                                     />
// //                                                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
// //                                                 </div>

// //                                                 <div>
// //                                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
// //                                                         Email Address <span className="text-red-500">*</span>
// //                                                     </label>
// //                                                     <input
// //                                                         type="email"
// //                                                         id="email"
// //                                                         name="email"
// //                                                         value={formData.email}
// //                                                         onChange={handleChange}
// //                                                         className={`form-control ${errors.email ? "border-red-500" : ""}`}
// //                                                     />
// //                                                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
// //                                                 </div>

// //                                                 <div>
// //                                                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
// //                                                         Phone Number
// //                                                     </label>
// //                                                     <input
// //                                                         type="tel"
// //                                                         id="phone"
// //                                                         name="phone"
// //                                                         value={formData.phone}
// //                                                         onChange={handleChange}
// //                                                         className="form-control"
// //                                                     />
// //                                                 </div>

// //                                                 <div>
// //                                                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
// //                                                         Company
// //                                                     </label>
// //                                                     <input
// //                                                         type="text"
// //                                                         id="company"
// //                                                         name="company"
// //                                                         value={formData.company}
// //                                                         onChange={handleChange}
// //                                                         className="form-control"
// //                                                     />
// //                                                 </div>

// //                                                 <div className="md:col-span-2">
// //                                                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
// //                                                         Subject <span className="text-red-500">*</span>
// //                                                     </label>
// //                                                     <input
// //                                                         type="text"
// //                                                         id="subject"
// //                                                         name="subject"
// //                                                         value={formData.subject}
// //                                                         onChange={handleChange}
// //                                                         className={`form-control ${errors.subject ? "border-red-500" : ""}`}
// //                                                     />
// //                                                     {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
// //                                                 </div>

// //                                                 <div className="md:col-span-2">
// //                                                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
// //                                                         Message <span className="text-red-500">*</span>
// //                                                     </label>
// //                                                     <textarea
// //                                                         id="message"
// //                                                         name="message"
// //                                                         rows="5"
// //                                                         value={formData.message}
// //                                                         onChange={handleChange}
// //                                                         className={`form-control ${errors.message ? "border-red-500" : ""}`}
// //                                                     ></textarea>
// //                                                     {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
// //                                                 </div>
// //                                             </div>

// //                                             <button
// //                                                 type="submit"
// //                                                 disabled={loading}
// //                                                 className="btn btn-primary w-full md:w-auto flex items-center justify-center"
// //                                             >
// //                                                 {loading ? (
// //                                                     <span className="flex items-center">
// //                                                         <svg
// //                                                             className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
// //                                                             xmlns="http://www.w3.org/2000/svg"
// //                                                             fill="none"
// //                                                             viewBox="0 0 24 24"
// //                                                         >
// //                                                             <circle
// //                                                                 className="opacity-25"
// //                                                                 cx="12"
// //                                                                 cy="12"
// //                                                                 r="10"
// //                                                                 stroke="currentColor"
// //                                                                 strokeWidth="4"
// //                                                             ></circle>
// //                                                             <path
// //                                                                 className="opacity-75"
// //                                                                 fill="currentColor"
// //                                                                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
// //                                                             ></path>
// //                                                         </svg>
// //                                                         Sending...
// //                                                     </span>
// //                                                 ) : (
// //                                                     <span className="flex items-center">
// //                                                         Send Message <Send className="ml-2 h-4 w-4" />
// //                                                     </span>
// //                                                 )}
// //                                             </button>
// //                                         </form>
// //                                     </>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Map */}
// //                 <div className="mb-16">
// //                     <div className="bg-white rounded-lg shadow-md overflow-hidden">
// //                         <div className="h-96">

// //                             <iframe
// //                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.7191459916285!2d75.53063907540061!3d31.394306774271914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51006513f7a3%3A0xf8092c31677ac38e!2sNit%20Jalandhar!5e0!3m2!1sen!2sin!4v1745012230948!5m2!1sen!2sin"
// //                                 width="100%"
// //                                 height="100%"
// //                                 style={{ border: 0 }}
// //                                 allowFullScreen=""
// //                                 loading="lazy"
// //                                 title="Raycom Location"
// //                             ></iframe>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Global Offices */}
// //                 <div>
// //                     <div className="text-center mb-12">
// //                         <h2 className="text-3xl font-bold mb-4">Our Global Offices</h2>
// //                         <p className="text-lg  text-gray-900 max-w-3xl mx-auto">
// //                             Raycom has offices around the world to serve our international customers.
// //                         </p>
// //                     </div>

// //                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
// //                         {[
// //                             {
// //                                 location: "North America",
// //                                 address: "131 Maniyoda Avenue, Dongen City, 28215, USA",
// //                                 phone: "+1 (234) 567-890",
// //                                 email: "na@Raycom.com",
// //                             },
// //                             {
// //                                 location: "Europe",
// //                                 address: "45 Signal Street, Washington Park, London, UK",
// //                                 phone: "+44 20 1234 5678",
// //                                 email: "eu@Raycom.com",
// //                             },
// //                             {
// //                                 location: "Asia Pacific",
// //                                 address: "78 RF Road, Near By Tech District, 135256, Singapore ",
// //                                 phone: "+65 6789 0123",
// //                                 email: "apac@Raycom.com",
// //                             },
// //                         ].map((office, index) => (
// //                             <motion.div
// //                                 key={office.location}
// //                                 className="bg-white rounded-lg shadow-md overflow-hidden"
// //                                 initial={{ opacity: 0, y: 20 }}
// //                                 animate={{ opacity: 1, y: 0 }}
// //                                 transition={{ duration: 0.5, delay: index * 0.1 }}
// //                                 whileHover={{ y: -5 }}
// //                             >
// //                                 <div className="p-6 border-b">
// //                                     <h3 className="text-xl font-semibold">{office.location}</h3>
// //                                 </div>
// //                                 <div className="p-6">
// //                                     <div className="flex items-start mb-4">
// //                                         <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1" />
// //                                         <p className="text-gray-600">{office.address}</p>
// //                                     </div>
// //                                     <div className="flex items-center mb-4">
// //                                         <Phone className="h-5 w-5 text-red-600 mr-3" />
// //                                         <p className="text-gray-600">{office.phone}</p>
// //                                     </div>
// //                                     <div className="flex items-center">
// //                                         <Mail className="h-5 w-5 text-red-600 mr-3" />
// //                                         <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-red-600 transition-colors">
// //                                             {office.email}
// //                                         </a>
// //                                     </div>
// //                                 </div>
// //                             </motion.div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default ContactPage


// "use client";
// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
// import axios from "axios";

// const ContactPage = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         phone: "",
//         company: "",
//         subject: "",
//         message: "",
//     });
//     const [errors, setErrors] = useState({});
//     const [loading, setLoading] = useState(false);
//     const [submitted, setSubmitted] = useState(false);
//     const [contactInfo, setContactInfo] = useState({
//         phoneNumbers: ["+91 799 928 3903", "+91 700 909 0762"],
//         emailAddresses: ["info@Raycom.com", "support@Raycom.com"],
//         availableTimings: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday - Sunday: Closed"],
//     });

//     // Fetch contact info on component mount
//     useEffect(() => {
//         const fetchContactInfo = async () => {
//             try {
//                 const response = await axios.get("/contact-info");
//                 setContactInfo(response.data);
//             } catch (error) {
//                 console.error("Error fetching contact info:", error);
//             }
//         };
//         fetchContactInfo();
//     }, []);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));

//         if (errors[name]) {
//             setErrors((prev) => ({
//                 ...prev,
//                 [name]: "",
//             }));
//         }
//     };

//     const validateForm = () => {
//         const newErrors = {};

//         if (!formData.name.trim()) newErrors.name = "Name is required";
//         if (!formData.email.trim()) {
//             newErrors.email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = "Email is invalid";
//         }
//         // if (!formData.subject.trim()) newErrors.subject = "Subject is required";
//         if (!formData.message.trim()) newErrors.message = "Message is required";

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validateForm()) return;

//         setLoading(true);
//         setTimeout(() => {
//             setLoading(false);
//             setSubmitted(true);
//             setFormData({
//                 name: "",
//                 email: "",
//                 phone: "",
//                 company: "",
//                 subject: "",
//                 message: "",
//             });
//         }, 1500);
//     };

//     return (
//         <div className="pt-36 pb-16 bg-gray-100">
//             <div className="container mx-auto px-4">
//                 {/* Hero Section */}
//                 <div className="text-center mb-16">
//                     <motion.h1
//                         className="text-3xl md:text-4xl font-bold mb-6 text-red-600"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         Contact Us
//                     </motion.h1>
//                     <motion.p
//                         className="text-xl font-semibold text-gray-800 max-w-3xl mx-auto"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         Have questions about our products or services? Our team is here to help.
//                     </motion.p>
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
//                     {/* Contact Information */}
//                     <div className="lg:col-span-1">
//                         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                             <div className="p-6 bg-red-600 text-white">
//                                 <h2 className="text-2xl mb-2">Contact Information</h2>
//                                 <p>Get in touch with our dedicated team today for any inquiries, support, or customized assistance you may require.</p>
//                             </div>
//                             <div className="p-6 space-y-6">
//                                 <div className="flex items-start">
//                                     <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
//                                         <MapPin className="h-5 w-5 text-red-600" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-medium mb-1">Our Location</h3>
//                                         <p className="text-gray-600">NIT Jalandhar GT Road </p>
//                                         <p className="text-gray-600">(Bypass), Jalandhar‑144011,</p>
//                                         <p className="text-gray-600">Punjab, India</p>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start">
//                                     <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
//                                         <Phone className="h-5 w-5 text-red-600" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-medium mb-1">Phone</h3>
//                                         <div className="grid items-center gap-3 whitespace-nowrap">
//                                             <a
//                                                 href={`tel:${contactInfo.phoneNumbers[0].replace(/\s/g, "")}`}
//                                                 className="text-gray-600 hover:text-red-600 transition-colors"
//                                             >
//                                                 {contactInfo.phoneNumbers[0]}
//                                             </a>

//                                             <a
//                                                 href={`tel:${contactInfo.phoneNumbers[1].replace(/\s/g, "")}`}
//                                                 className="text-gray-600 hover:text-red-600 transition-colors"
//                                             >
//                                                 {contactInfo.phoneNumbers[1]}
//                                             </a>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start">
//                                     <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
//                                         <Mail className="h-5 w-5 text-red-600" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-medium mb-1">Email</h3>
//                                         <div className="grid items-center gap-1 whitespace-nowrap">
//                                             <a
//                                                 href={`mailto:${contactInfo.emailAddresses[1]}`}
//                                                 className="text-gray-600 hover:text-red-600 transition-colors"
//                                             >
//                                                 {contactInfo.emailAddresses[1]}
//                                             </a>
//                                             <a
//                                                 href={`mailto:${contactInfo.emailAddresses[0]}`}
//                                                 className="text-gray-600 hover:text-red-600 transition-colors"
//                                             >
//                                                 {contactInfo.emailAddresses[0]}
//                                             </a>

//                                         </div>
//                                     </div>
//                                 </div>

//                                 <div className="flex items-start">
//                                     <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
//                                         <Clock className="h-5 w-5 text-red-600" />
//                                     </div>
//                                     <div>
//                                         <h3 className="font-medium mb-1">Business Hours</h3>
//                                         <p className="text-gray-600">{contactInfo.availableTimings[0]}</p>
//                                         <p className="text-gray-600">{contactInfo.availableTimings[1]}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Contact Form */}
//                     <div className="lg:col-span-2">
//                         <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                             <div className="p-6">
//                                 {submitted ? (
//                                     <motion.div
//                                         className="text-center py-12"
//                                         initial={{ opacity: 0, scale: 0.8 }}
//                                         animate={{ opacity: 1, scale: 1 }}
//                                         transition={{ duration: 0.5 }}
//                                     >
//                                         <div className="flex justify-center mb-6">
//                                             <div className="bg-green-100 rounded-full p-3">
//                                                 <CheckCircle className="h-12 w-12 text-green-600" />
//                                             </div>
//                                         </div>
//                                         <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
//                                         <p className="text-gray-600 mb-6">
//                                             Your message has been sent successfully. We'll get back to you as soon as possible.
//                                         </p>
//                                         <button onClick={() => setSubmitted(false)} className="btn btn-primary">
//                                             Send Another Message
//                                         </button>
//                                     </motion.div>
//                                 ) : (
//                                     <>
//                                         <h2 className="text-xl font-semibold mb-6">Send Us a Message</h2>
//                                         <form onSubmit={handleSubmit}>
//                                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
//                                                 <div>
//                                                     <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
//                                                         Full Name <span className="text-red-500">*</span>
//                                                     </label>
//                                                     <input
//                                                         type="text"
//                                                         id="name"
//                                                         name="name"
//                                                         value={formData.name}
//                                                         onChange={handleChange}
//                                                         className={`form-control ${errors.name ? "border-red-500" : ""}`}
//                                                     />
//                                                     {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
//                                                 </div>

//                                                 <div>
//                                                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                                                         Email Address <span className="text-red-500">*</span>
//                                                     </label>
//                                                     <input
//                                                         type="email"
//                                                         id="email"
//                                                         name="email"
//                                                         value={formData.email}
//                                                         onChange={handleChange}
//                                                         className={`form-control ${errors.email ? "border-red-500" : ""}`}
//                                                     />
//                                                     {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
//                                                 </div>

//                                                 <div>
//                                                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                                                         Phone Number
//                                                     </label>
//                                                     <input
//                                                         type="tel"
//                                                         id="phone"
//                                                         name="phone"
//                                                         value={formData.phone}
//                                                         onChange={handleChange}
//                                                         className="form-control"
//                                                     />
//                                                 </div>

//                                                 <div>
//                                                     <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
//                                                         Company
//                                                     </label>
//                                                     <input
//                                                         type="text"
//                                                         id="company"
//                                                         name="company"
//                                                         value={formData.company}
//                                                         onChange={handleChange}
//                                                         className="form-control"
//                                                     />
//                                                 </div>

//                                                 {/* <div className="md:col-span-2">
//                                                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
//                                                         Subject <span className="text-red-500">*</span>
//                                                     </label>
//                                                     <input
//                                                         type="text"
//                                                         id="subject"
//                                                         name="subject"
//                                                         value={formData.subject}
//                                                         onChange={handleChange}
//                                                         className={`form-control ${errors.subject ? "border-red-500" : ""}`}
//                                                     />
//                                                     {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject}</p>}
//                                                 </div> */}

//                                                 <div className="md:col-span-2">
//                                                     <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
//                                                         Message <span className="text-red-500">*</span>
//                                                     </label>
//                                                     <textarea
//                                                         id="message"
//                                                         name="message"
//                                                         rows="5"
//                                                         value={formData.message}
//                                                         onChange={handleChange}
//                                                         className={`form-control ${errors.message ? "border-red-500" : ""}`}
//                                                     ></textarea>
//                                                     {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
//                                                 </div>
//                                             </div>

//                                             <button
//                                                 type="submit"
//                                                 disabled={loading}
//                                                 className="btn btn-primary w-full md:w-auto flex items-center justify-center"
//                                             >
//                                                 {loading ? (
//                                                     <span className="flex items-center">
//                                                         <svg
//                                                             className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
//                                                             xmlns="http://www.w3.org/2000/svg"
//                                                             fill="none"
//                                                             viewBox="0 0 24 24"
//                                                         >
//                                                             <circle
//                                                                 className="opacity-25"
//                                                                 cx="12"
//                                                                 cy="12"
//                                                                 r="10"
//                                                                 stroke="currentColor"
//                                                                 strokeWidth="4"
//                                                             ></circle>
//                                                             <path
//                                                                 className="opacity-75"
//                                                                 fill="currentColor"
//                                                                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                                                             ></path>
//                                                         </svg>
//                                                         Sending...
//                                                     </span>
//                                                 ) : (
//                                                     <span className="flex items-center">
//                                                         Send Message <Send className="ml-2 h-4 w-4" />
//                                                     </span>
//                                                 )}
//                                             </button>
//                                         </form>
//                                     </>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Map */}
//                 <div className="mb-16">
//                     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//                         <div className="h-96">
//                             <iframe
//                                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.7191459916285!2d75.53063907540061!3d31.394306774271914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51006513f7a3%3A0xf8092c31677ac38e!2sNit%20Jalandhar!5e0!3m2!1sen!2sin!4v1745012230948!5m2!1sen!2sin"
//                                 width="100%"
//                                 height="100%"
//                                 style={{ border: 0 }}
//                                 allowFullScreen=""
//                                 loading="lazy"
//                                 title="Raycom Location"
//                             ></iframe>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Global Offices */}
//                 <div>
//                     <div className="text-center mb-12">
//                         <h2 className="text-3xl font-bold mb-4">Our Global Offices</h2>
//                         <p className="text-lg text-gray-900 max-w-3xl mx-auto">
//                             Raycom has offices around the world to serve our international customers.
//                         </p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                         {[
//                             {
//                                 location: "North America",
//                                 address: "131 Maniyoda Avenue, Dongen City, 28215, USA",
//                                 phone: "+1 (234) 567-890",
//                                 email: "na@Raycom.com",
//                             },
//                             {
//                                 location: "Europe",
//                                 address: "45 Signal Street, Washington Park, London, UK",
//                                 phone: "+44 20 1234 5678",
//                                 email: "eu@Raycom.com",
//                             },
//                             {
//                                 location: "Asia Pacific",
//                                 address: "78 RF Road, Near By Tech District, 135256, Singapore ",
//                                 phone: "+65 6789 0123",
//                                 email: "apac@Raycom.com",
//                             },
//                         ].map((office, index) => (
//                             <motion.div
//                                 key={office.location}
//                                 className="bg-white rounded-lg shadow-md overflow-hidden"
//                                 initial={{ opacity: 0, y: 20 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                                 whileHover={{ y: -5 }}
//                             >
//                                 <div className="p-6 border-b">
//                                     <h3 className="text-xl font-semibold">{office.location}</h3>
//                                 </div>
//                                 <div className="p-6">
//                                     <div className="flex items-start mb-4">
//                                         <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1" />
//                                         <p className="text-gray-600">{office.address}</p>
//                                     </div>
//                                     <div className="flex items-center mb-4">
//                                         <Phone className="h-5 w-5 text-red-600 mr-3" />
//                                         <p className="text-gray-600">{office.phone}</p>
//                                     </div>
//                                     <div className="flex items-center">
//                                         <Mail className="h-5 w-5 text-red-600 mr-3" />
//                                         <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-red-600 transition-colors">
//                                             {office.email}
//                                         </a>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ContactPage;


"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import axios from "axios";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
    });
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [contactInfo, setContactInfo] = useState({
        phoneNumbers: ["+91 799 928 3903", "+91 700 909 0762"],
        emailAddresses: ["info@Raycom.com", "support@Raycom.com"],
        availableTimings: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday - Sunday: Closed"],
    });

    // Fetch contact info on component mount
    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const response = await axios.get("/contact-info"); // Fixed the endpoint URL
                setContactInfo(response.data);
            } catch (error) {
                console.error("Error fetching contact info:", error);
            }
        };
        fetchContactInfo();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({
                ...prev,
                [name]: "",
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = "Email is invalid";
        }
        if (!formData.company.trim()) newErrors.company = "Company is required";
        if (!formData.phone.trim()) newErrors.phone = "Phone is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);

        try {
            // Prepare the request data for the API
            const requestData = {
                ...formData,
                products: [
                    {
                        id: "0", // Dummy value to avoid null exception
                        name: "N/A",
                        quantity: 0,
                        price: 0,
                        category: "N/A",
                        image: "",
                    },
                ],
                totalAmount: 0, // Dummy value to avoid null exception
            };

            // Prepare email data for both emails
            const emailData = {
                name: formData.name,
                email: formData.email,
                company: formData.company,
                phone: formData.phone,
                message: formData.message || "No additional message provided.",
                products: requestData.products.map((p) => ({
                    name: p.name,
                    category: p.category,
                    quantity: p.quantity,
                    image: p.image || "https://via.placeholder.com/40",
                })),
                totalAmount: requestData.totalAmount,
            };

            // Send email to the team
            await emailjs.send("service_jzabqel", "template_21hkuep", emailData, "xV5ImFLhCL8Hri6ps");

            // Send confirmation email to the customer
            await emailjs.send("service_y4a4npb", "template_vu10ikd", emailData, "Qyjy-LECOP7bPgqHE");

            // Save the request to your backend
            await axios.post(`${process.env.REACT_APP_API_URL}/requests`, requestData);

            setSubmitted(true);
            navigate("/request-success");
        } catch (error) {
            console.error("Error submitting contact form:", error);
            setErrors({ submit: "Failed to submit message. Please try again." });
        } finally {
            setLoading(false);
        }
    };

    const RequiredMark = () => <span className="text-red-600 ml-1">*</span>;

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
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-xl font-semibold text-gray-800 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Have questions about our products or services? Our team is here to help.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Information */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="p-6 bg-red-600 text-white">
                                <h2 className="text-2xl mb-2">Contact Information</h2>
                                <p>Get in touch with our dedicated team today for any inquiries, support, or customized assistance you may require.</p>
                            </div>
                            <div className="p-6 space-y-6">
                                <div className="flex items-start">
                                    <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                                        <MapPin className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Our Location</h3>
                                        <p className="text-gray-600">NIT Jalandhar GT Road </p>
                                        <p className="text-gray-600">(Bypass), Jalandhar‑144011,</p>
                                        <p className="text-gray-600">Punjab, India</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                                        <Phone className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Phone</h3>
                                        <div className="grid items-center gap-3 whitespace-nowrap">
                                            <a
                                                href={`tel:${contactInfo.phoneNumbers[0].replace(/\s/g, "")}`}
                                                className="text-gray-600 hover:text-red-600 transition-colors"
                                            >
                                                {contactInfo.phoneNumbers[0]}
                                            </a>
                                            <a
                                                href={`tel:${contactInfo.phoneNumbers[1].replace(/\s/g, "")}`}
                                                className="text-gray-600 hover:text-red-600 transition-colors"
                                            >
                                                {contactInfo.phoneNumbers[1]}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                                        <Mail className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Email</h3>
                                        <div className="grid items-center gap-1 whitespace-nowrap">
                                            <a
                                                href={`mailto:${contactInfo.emailAddresses[1]}`}
                                                className="text-gray-600 hover:text-red-600 transition-colors"
                                            >
                                                {contactInfo.emailAddresses[1]}
                                            </a>
                                            <a
                                                href={`mailto:${contactInfo.emailAddresses[0]}`}
                                                className="text-gray-600 hover:text-red-600 transition-colors"
                                            >
                                                {contactInfo.emailAddresses[0]}
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="bg-red-100 rounded-full p-2 mr-4 mt-1">
                                        <Clock className="h-5 w-5 text-red-600" />
                                    </div>
                                    <div>
                                        <h3 className="font-medium mb-1">Business Hours</h3>
                                        <p className="text-gray-600">{contactInfo.availableTimings[0]}</p>
                                        <p className="text-gray-600">{contactInfo.availableTimings[1]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                            <div className="p-6">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
                                        <p className="text-gray-600 mb-6">
                                            Your message has been sent successfully. We'll get back to you as soon as possible.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-xl font-semibold text-red-600 mb-6 border-b border-red-100 pb-2">Send Us a Message</h2>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div>
                                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Full Name <RequiredMark />
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                        className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.name ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
                                                            }`}
                                                        placeholder="Name"
                                                    />
                                                    {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
                                                </div>

                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Email Address <RequiredMark />
                                                    </label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                        className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.email ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
                                                            }`}
                                                        placeholder="email"
                                                    />
                                                    {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                                                </div>

                                                <div>
                                                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Company Name <RequiredMark />
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="company"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleChange}
                                                        className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.company ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
                                                            }`}
                                                        placeholder="Acme Inc."
                                                    />
                                                    {errors.company && <p className="mt-1 text-sm text-red-600">{errors.company}</p>}
                                                </div>

                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                                        Phone Number <RequiredMark />
                                                    </label>
                                                    <input
                                                        type="tel"
                                                        id="phone"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleChange}
                                                        className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.phone ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
                                                            }`}
                                                        placeholder="(123) 456-7890"
                                                    />
                                                    {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                                    Message
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    rows="5" // Increased rows to match height
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    className={`w-full px-4 py-3 border rounded-md outline-none focus:ring-2 focus:ring-red-300 focus:border-red-500 transition-colors ${errors.message ? "border-red-500 bg-red-50" : "border-gray-300 hover:border-red-300"
                                                        }`}
                                                    placeholder="Please include any specific requirements or questions."
                                                ></textarea>
                                            </div>

                                            {errors.submit && (
                                                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">
                                                    <p>{errors.submit}</p>
                                                </div>
                                            )}

                                            <div className="flex justify-center pt-4">
                                                <button
                                                    type="submit"
                                                    disabled={loading}
                                                    className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md font-semibold transition duration-300 flex items-center justify-center shadow-md w-full md:w-auto min-w-[200px]"
                                                >
                                                    {loading ? (
                                                        <>
                                                            <svg
                                                                className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
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
                                                            Sending...
                                                        </>
                                                    ) : (
                                                        "Send Message"
                                                    )}
                                                </button>
                                            </div>

                                            <div className="text-center text-gray-500 text-sm">
                                                <p>
                                                    Fields marked with <span className="text-red-600">*</span> are required
                                                </p>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Map */}
                <div className="mb-16">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                        <div className="h-96">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.7191459916285!2d75.53063907540061!3d31.394306774271914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a51006513f7a3%3A0xf8092c31677ac38e!2sNit%20Jalandhar!5e0!3m2!1sen!2sin!4v1745012230948!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Raycom Location"
                            ></iframe>
                        </div>
                    </div>
                </div>

                {/* Global Offices */}
                <div>
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Our Global Offices</h2>
                        <p className="text-lg text-gray-900 max-w-3xl mx-auto">
                            Raycom has offices around the world to serve our international customers.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                location: "North America",
                                address: "131 Maniyoda Avenue, Dongen City, 28215, USA",
                                phone: "+1 (234) 567-890",
                                email: "na@Raycom.com",
                            },
                            {
                                location: "Europe",
                                address: "45 Signal Street, Washington Park, London, UK",
                                phone: "+44 20 1234 5678",
                                email: "eu@Raycom.com",
                            },
                            {
                                location: "Asia Pacific",
                                address: "78 RF Road, Near By Tech District, 135256, Singapore ",
                                phone: "+65 6789 0123",
                                email: "apac@Raycom.com",
                            },
                        ].map((office, index) => (
                            <motion.div
                                key={office.location}
                                className="bg-white rounded-lg shadow-md overflow-hidden"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                            >
                                <div className="p-6 border-b">
                                    <h3 className="text-xl font-semibold">{office.location}</h3>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start mb-4">
                                        <MapPin className="h-5 w-5 text-red-600 mr-3 mt-1" />
                                        <p className="text-gray-600">{office.address}</p>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <Phone className="h-5 w-5 text-red-600 mr-3" />
                                        <p className="text-gray-600">{office.phone}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Mail className="h-5 w-5 text-red-600 mr-3" />
                                        <a href={`mailto:${office.email}`} className="text-gray-600 hover:text-red-600 transition-colors">
                                            {office.email}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;