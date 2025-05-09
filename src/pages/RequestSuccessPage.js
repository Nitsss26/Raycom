// "use client"
// import { Link } from "react-router-dom"
// import { motion } from "framer-motion"
// import { CheckCircle, Home, ShoppingBag } from "lucide-react"

// const RequestSuccessPage = () => {
//   return (
//     <div className="pt-24 pb-16">
//       <div className="container mx-auto px-4">
//         <div className="max-w-2xl mx-auto text-center">
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5 }}
//             className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
//           >
//             <CheckCircle className="h-12 w-12 text-green-600" />
//           </motion.div>

//           <h1 className="text-3xl font-bold mb-4">Request Submitted Successfully!</h1>
//           <p className="text-gray-600 mb-8">
//             Thank you for your request. Our team will review it and get back to you shortly. Your request ID is{" "}
//             <span className="font-semibold">#12345</span>.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link to="/" className="btn btn-primary flex items-center justify-center">
//               <Home className="mr-2 h-5 w-5" />
//               Return to Home
//             </Link>
//             <Link to="/products" className="btn btn-outline flex items-center justify-center">
//               <ShoppingBag className="mr-2 h-5 w-5" />
//               Continue Shopping
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default RequestSuccessPage



"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { CheckCircle, Home, ShoppingBag, FileText, Mail } from "lucide-react"

const RequestSuccessPage = () => {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-gradient-to-r from-green-500 to-green-600 py-6 px-8 text-white text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center"
            >
              <CheckCircle className="h-12 w-12 text-green-500" />
            </motion.div>
            <h1 className="text-3xl font-bold">Request Submitted Successfully!</h1>
          </div>

          <div className="p-8 text-center">
            <p className="text-gray-600 text-lg mb-8">
              Thank you for your request. Our team will review your requirements and get back to you within 24-48
              business hours.
            </p>

            <div className="mb-8 bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">What happens next?</h2>
              <ol className="text-left text-gray-600 space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center text-green-600 font-medium mr-3 mt-0.5 flex-shrink-0">
                    1
                  </span>
                  <span>
                    Our team will review your request and prepare a detailed quote based on your requirements.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center text-green-600 font-medium mr-3 mt-0.5 flex-shrink-0">
                    2
                  </span>
                  <span>
                    You'll receive an email with your quote and additional information about the requested products.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-100 rounded-full w-8 h-8 flex items-center justify-center text-green-600 font-medium mr-3 mt-0.5 flex-shrink-0">
                    3
                  </span>
                  <span>
                    A Raycom representative may contact you to discuss your requirements in more detail if
                    needed.
                  </span>
                </li>
              </ol>

              <div className="flex items-center justify-center bg-green-50 p-4 rounded-lg border border-green-100">
                <Mail className="h-5 w-5 text-green-600 mr-2" />
                <p className="text-sm text-gray-700">
                  A confirmation email has been sent to the email address you provided.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="btn btn-primary flex items-center justify-center">
                <Home className="mr-2 h-5 w-5" />
                Return to Home
              </Link>
              <Link to="/products" className="btn btn-outline flex items-center justify-center">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
            </div>

            <div className="mt-6">
              <Link to="/contact" className="text-sm text-red-600 hover:text-red-700 flex items-center justify-center">
                <FileText className="h-4 w-4 mr-1" />
                Need help? Contact our support team
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default RequestSuccessPage

