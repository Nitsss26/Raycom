// import { Link } from "react-router-dom"
// import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

// const Footer = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-16 pb-8">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">About Company</h3>
//             {/* <img src="https://i.ibb.co/ffHnqf0/Screenshot-2025-04-18-185802.png" alt="Raycom" className="h-12 mb-4" /> */}
//             <p className="text-gray-400 mb-4">
//               Leading provider of high-quality waveguide components and RF/Microwave solutions for telecommunications,
//               defense, and aerospace industries.
//             </p>
//             <div className="flex space-x-4">
//               <a
//                 href="https://facebook.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Facebook size={20} />
//               </a>
//               <a
//                 href="https://twitter.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Twitter size={20} />
//               </a>
//               <a
//                 href="https://linkedin.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Linkedin size={20} />
//               </a>
//               <a
//                 href="https://instagram.com"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-gray-400 hover:text-white transition-colors"
//               >
//                 <Instagram size={20} />
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/" className="text-gray-400 hover:text-white transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
//                   Products
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
//                   Services
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
//                   Contact Us
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
//                   FAQ
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Product Categories */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Product Categories</h3>
//             <ul className="space-y-2">
//               <li>
//                 <Link to="/products/category/waveguide" className="text-gray-400 hover:text-white transition-colors">
//                   Waveguide Components
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products/category/attenuator" className="text-gray-400 hover:text-white transition-colors">
//                   WG Attenuator
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products/category/circulator" className="text-gray-400 hover:text-white transition-colors">
//                   WG Circulator
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products/cateory/isolator" className="text-gray-400 hover:text-white transition-colors">
//                   WG Isolator
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products/category/filter" className="text-gray-400 hover:text-white transition-colors">
//                   WG Filter
//                 </Link>
//               </li>
//               <li>
//                 <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
//                   View All Products
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <MapPin className="h-10 w-10 text-red-500 mr-2 mt-0.5" />
//                 <span className="text-gray-400">NIT Jalandhar GT Road (Bypass), Jalandhar‑144011, Punjab, India</span>
//               </li>

//               <li className="flex items-center">
//                 <Phone className="h-5 w-5 text-red-500 mr-2" />
//                 <li className="grid items-center">
//                   <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
//                     +91 799 928 3903
//                   </a>
//                   <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">
//                     +91 700 909 7062
//                   </a>
//                 </li>


//               </li>
//               <li className="flex items-center">
//                 <Mail className="h-5 w-5 text-red-500 mr-2" />
//                 <li className="grid items-center">
//                   <a href="mailto:info@Raycom.com" className="text-gray-400 hover:text-white transition-colors">
//                     support@Raycom.com
//                   </a>
//                   <a href="mailto:info@Raycom.com" className="text-gray-400 hover:text-white transition-colors">
//                     info@Raycom.com
//                   </a>
//                 </li>

//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="border-t border-gray-800 mt-12 pt-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm mb-4 md:mb-0">
//               &copy; {new Date().getFullYear()} Raycom. All rights reserved.
//             </p>
//             <div className="flex space-x-4">
//               <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Terms & Conditions
//               </Link>
//               {/* <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Privacy Policy
//               </Link> */}
//               <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
//                 Sitemap
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import axios from "axios";

const Footer = () => {
  const [contactInfo, setContactInfo] = useState({
    phoneNumbers: ["+91 799 928 3903", "+91 700 909 0762"],
    emailAddresses: ["info@Raycom.com", "support@Raycom.com"],
    aboutCompany:
      "Leading provider of high-quality waveguide components and RF/Microwave solutions for telecommunications, defense, and aerospace industries.",
  });

  // Fetch contact info on component mount
  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get("/contact-info");
        setContactInfo(response.data);
      } catch (error) {
        console.error("Error fetching contact info:", error);
      }
    };
    fetchContactInfo();
  }, []);

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">About Company</h3>
            <p className="text-gray-400 mb-4">{contactInfo.aboutCompany}</p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Product Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/products/category/waveguide" className="text-gray-400 hover:text-white transition-colors">
                  Waveguide Components
                </Link>
              </li>
              <li>
                <Link to="/products/category/attenuator" className="text-gray-400 hover:text-white transition-colors">
                  WG Attenuator
                </Link>
              </li>
              <li>
                <Link to="/products/category/circulator" className="text-gray-400 hover:text-white transition-colors">
                  WG Circulator
                </Link>
              </li>
              <li>
                <Link to="/products/cateory/isolator" className="text-gray-400 hover:text-white transition-colors">
                  WG Isolator
                </Link>
              </li>
              <li>
                <Link to="/products/category/filter" className="text-gray-400 hover:text-white transition-colors">
                  WG Filter
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-white transition-colors">
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-10 w-10 text-red-500 mr-2 mt-0.5" />
                <span className="text-gray-400">NIT Jalandhar GT Road (Bypass), Jalandhar‑144011, Punjab, India</span>
              </li>

              <li className="flex items-center">
                <Phone className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <a
                    href={`tel:${contactInfo.phoneNumbers[0].replace(/\s/g, "")}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {contactInfo.phoneNumbers[0]}
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href={`tel:${contactInfo.phoneNumbers[1].replace(/\s/g, "")}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {contactInfo.phoneNumbers[1]}
                  </a>
                </div>
              </li>

              <li className="flex items-center">
                <Mail className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
                <div className="flex items-center gap-3 whitespace-nowrap">
                  <a
                    href={`mailto:${contactInfo.emailAddresses[0]}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {contactInfo.emailAddresses[0]}
                  </a>
                  <span className="text-gray-400">|</span>
                  <a
                    href={`mailto:${contactInfo.emailAddresses[1]}`}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {contactInfo.emailAddresses[1]}
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Raycom Pvt.Ltd. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;