// "use client"
// import { motion } from "framer-motion"
// import { Link } from "react-router-dom"

// const TermsPage = () => {
//     return (
//         <div className="pt-24 pb-16 bg-gray-200">
//             <div className="container mx-auto px-4">
//                 {/* Hero Section */}
//                 <div className="text-center mb-12">
//                     <motion.h1
//                         className="text-3xl md:text-4xl font-bold mb-6"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         Terms & Conditions
//                     </motion.h1>
//                     <motion.p
//                         className="text-xl text-gray-600 max-w-3xl mx-auto"
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                     >
//                         Please read these terms and conditions carefully before using our website or purchasing our products.
//                     </motion.p>
//                 </div>

//                 {/* Terms Content */}
//                 <motion.div
//                     className="bg-white rounded-lg shadow-md p-8"
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.5, delay: 0.3 }}
//                 >
//                     <div className="prose max-w-none">
//                         <h2>1. Introduction</h2>
//                         <p>
//                             These Terms and Conditions ("Terms") govern your use of the Raycom website and the purchase of
//                             products and services from Raycom ("we," "us," or "our"). By accessing our website or purchasing
//                             our products, you agree to be bound by these Terms.
//                         </p>

//                         <h2>2. Products and Services</h2>
//                         <p>
//                             2.1. <strong>Product Information:</strong> We make every effort to ensure that product information on our
//                             website is accurate and up-to-date. However, we do not warrant that product descriptions or other content
//                             is accurate, complete, reliable, current, or error-free.
//                         </p>
//                         <p>
//                             2.2. <strong>Custom Products:</strong> For custom-designed products, specifications will be agreed upon in
//                             writing before production begins. Any changes to specifications must be approved in writing and may result
//                             in additional charges and extended delivery times.
//                         </p>

//                         <h2>3. Orders and Payment</h2>
//                         <p>
//                             3.1. <strong>Order Acceptance:</strong> All orders are subject to acceptance by Raycom. We reserve
//                             the right to refuse any order for any reason.
//                         </p>
//                         <p>
//                             3.2. <strong>Pricing:</strong> Prices are subject to change without notice. The price applicable to your
//                             order will be the price in effect at the time your order is placed.
//                         </p>
//                         <p>
//                             3.3. <strong>Payment Terms:</strong> Payment terms will be specified in your order confirmation. For
//                             standard products, payment is typically required before shipment. For custom products, a deposit may be
//                             required before production begins.
//                         </p>
//                         <p>
//                             3.4. <strong>Taxes:</strong> Prices do not include taxes, duties, or other governmental charges, which are
//                             the responsibility of the customer.
//                         </p>

//                         <h2>4. Shipping and Delivery</h2>
//                         <p>
//                             4.1. <strong>Delivery Times:</strong> Delivery times are estimates only and are not guaranteed. We are not
//                             responsible for delays caused by shipping carriers or customs.
//                         </p>
//                         <p>
//                             4.2. <strong>Risk of Loss:</strong> Risk of loss passes to the customer upon delivery to the shipping
//                             carrier.
//                         </p>
//                         <p>
//                             4.3. <strong>Inspection:</strong> Customers should inspect products upon receipt and report any damage or
//                             discrepancies within 5 business days.
//                         </p>

//                         <h2>5. Warranty and Returns</h2>
//                         <p>
//                             5.1. <strong>Warranty:</strong> Raycom warrants that products will be free from defects in
//                             materials and workmanship for a period of one year from the date of delivery. This warranty does not cover
//                             damage resulting from misuse, abuse, or improper installation.
//                         </p>
//                         <p>
//                             5.2. <strong>Exclusive Remedy:</strong> Raycom's sole obligation under this warranty is to repair
//                             or replace defective products at our option.
//                         </p>
//                         <p>
//                             5.3. <strong>Returns:</strong> Returns must be authorized in writing by Raycom. Custom products
//                             are not returnable unless defective.
//                         </p>

//                         <h2>6. Intellectual Property</h2>
//                         <p>
//                             6.1. <strong>Ownership:</strong> All intellectual property rights in our products, website, and content
//                             belong to Raycom or our licensors.
//                         </p>
//                         <p>
//                             6.2. <strong>Use Restrictions:</strong> You may not copy, modify, distribute, sell, or lease any part of
//                             our website or content without our written permission.
//                         </p>

//                         <h2>7. Limitation of Liability</h2>
//                         <p>
//                             7.1. <strong>Limitation:</strong> Raycom's liability for any claim arising out of or in connection
//                             with these Terms shall not exceed the purchase price of the products giving rise to the claim.
//                         </p>
//                         <p>
//                             7.2. <strong>Exclusion:</strong> In no event shall Raycom be liable for any indirect, incidental,
//                             special, consequential, or punitive damages, including lost profits, even if advised of the possibility of
//                             such damages.
//                         </p>

//                         <h2>8. Privacy</h2>
//                         <p>
//                             Our collection and use of personal information is governed by our{" "}
//                             <Link to="/privacy" className="text-red-600 hover:text-red-700">
//                                 Privacy Policy
//                             </Link>
//                             .
//                         </p>

//                         <h2>9. Governing Law</h2>
//                         <p>
//                             These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
//                             Raycom is incorporated, without giving effect to any principles of conflicts of law.
//                         </p>

//                         <h2>10. Changes to Terms</h2>
//                         <p>
//                             We reserve the right to modify these Terms at any time. Changes will be effective when posted on our
//                             website. Your continued use of our website or purchase of our products after any changes indicates your
//                             acceptance of the new Terms.
//                         </p>

//                         <h2>11. Contact Information</h2>
//                         <p>
//                             If you have any questions about these Terms, please contact us at{" "}
//                             <a href="mailto:legal@Raycom.com" className="text-red-600 hover:text-red-700">
//                                 legal@Raycom.com
//                             </a>
//                             .
//                         </p>

//                         <p className="text-sm text-gray-500 mt-8">Last updated: April 5, 2023</p>
//                     </div>
//                 </motion.div>
//             </div>
//         </div>
//     )
// }

// export default TermsPage


"use client"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const TermsPage = () => {
    return (
        <div className="pt-36 pb-16 bg-gray-100 font-[Baskerville] text-[17px] text-gray-800 leading-relaxed">
            <div className="container mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-14">
                    <motion.h1
                        className="text-3xl md:text-5xl font-bold  mb-4 font-[Times New Roman] text-red-600"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Terms & Conditions
                    </motion.h1>
                    <motion.p
                        className="text-2xl font-bold text-gray-600 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Please read these terms and conditions carefully before using our website or purchasing our products.
                    </motion.p>
                </div>

                {/* Terms Content */}
                <motion.div
                    className="bg-white rounded-2xl shadow-xl px-8 py-10 md:px-12 md:py-14"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="space-y-10">
                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">1. <span className="font-semibold text-gray-800">Introduction</span></h2>
                            <p>
                                These Terms and Conditions ("Terms") govern your use of the Raycom website and the purchase of products and services from Raycom ("we," "us," or "our"). By accessing our website or purchasing our products, you agree to be bound by these Terms.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">2. <span className="font-semibold text-gray-800">Products and Services</span></h2>
                            <ul className="space-y-3 pl-5 list-disc">
                                <li><strong>2.1. Product Information:</strong> We strive to ensure that all product information is accurate, but we do not guarantee it is error-free or up-to-date.</li>
                                <li><strong>2.2. Custom Products:</strong> Specifications must be confirmed in writing. Any changes may incur extra charges and extended delivery time.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">3. <span className="font-semibold text-gray-800">Orders and Payment</span></h2>
                            <ul className="space-y-3 pl-5 list-disc">
                                <li><strong>3.1. Order Acceptance:</strong> We reserve the right to refuse any order.</li>
                                <li><strong>3.2. Pricing:</strong> Prices are subject to change and the applicable price is the one at the time of order.</li>
                                <li><strong>3.3. Payment Terms:</strong> Standard products require prepayment; custom orders may require deposits.</li>
                                <li><strong>3.4. Taxes:</strong> Taxes and duties are the customer’s responsibility.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">4. <span className="font-semibold text-gray-800">Shipping and Delivery</span></h2>
                            <ul className="space-y-3 pl-5 list-disc">
                                <li><strong>4.1. Delivery Times:</strong> Estimated only; delays may occur.</li>
                                <li><strong>4.2. Risk of Loss:</strong> Transfers upon shipment.</li>
                                <li><strong>4.3. Inspection:</strong> Notify us of any issues within 5 business days.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">5. <span className="font-semibold text-gray-800">Warranty and Returns</span></h2>
                            <ul className="space-y-3 pl-5 list-disc">
                                <li><strong>5.1. Warranty:</strong> One-year coverage for defects not caused by misuse.</li>
                                <li><strong>5.2. Exclusive Remedy:</strong> We will repair or replace at our discretion.</li>
                                <li><strong>5.3. Returns:</strong> Custom items cannot be returned unless defective.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">6. <span className="font-semibold text-gray-800">Intellectual Property</span></h2>
                            <ul className="space-y-3 pl-5 list-disc">
                                <li><strong>6.1. Ownership:</strong> All IP remains with Raycom or its licensors.</li>
                                <li><strong>6.2. Use Restrictions:</strong> Do not copy, sell, or modify content without permission.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">7. <span className="font-semibold text-gray-800">Limitation of Liability</span></h2>
                            <ul className="space-y-3 pl-5 list-disc">
                                <li><strong>7.1. Limitation:</strong> Maximum liability is the product purchase price.</li>
                                <li><strong>7.2. Exclusion:</strong> We are not liable for indirect or consequential damages.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">8. <span className="font-semibold text-gray-800">Privacy</span></h2>
                            <p>
                                Our use of personal data is outlined in our{" "}
                                <Link to="/privacy" className="text-red-500 underline hover:text-[#2ad7c5]">
                                    Privacy Policy
                                </Link>
                                .
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">9. <span className="font-semibold text-gray-800">Governing Law</span></h2>
                            <p>
                                These Terms are governed by the laws of the jurisdiction where Raycom is incorporated.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">10. <span className="font-semibold text-gray-800">Changes to Terms</span></h2>
                            <p>
                                We may update these Terms at any time. Continued use of the site after updates implies acceptance.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-[#fa6767] mb-4">11. <span className="font-semibold text-gray-800">Contact Information</span></h2>
                            <p>
                                If you have any questions, email us at{" "}
                                <a href="mailto:legal@Raycom.com" className="text-red-500 underline hover:text-[#2ad7c5]">
                                    legal@Raycom.com
                                </a>
                                .
                            </p>
                        </div>

                        <p className="text-sm text-gray-500 mt-10 italic">Last updated: April 5, 2023</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default TermsPage
