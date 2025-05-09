// "use client"
// import { Link } from "react-router-dom"
// import { motion } from "framer-motion"

// const categories = [
//     {
//         id: "waveguide",
//         name: "Waveguide Components",
//         description: "Standard and custom waveguide components for various applications",
//         image: "https://www.pasternack.com/pages/rf-microwave-and-millimeter-wave-products/images/straight-waveguide-sections-lp-500x500-crop-u91126.png?crc=3973762733",
//         count: 24,
//     },
//     {
//         id: "attenuator",
//         name: "WG Attenuators",
//         description: "Fixed and variable waveguide attenuators with high power handling",
//         image: "https://www.fairviewmicrowave.com/content/dam/infinite-electronics/images/fairview-microwave/promotional-images/FM-Broadband-Calibrated-Noise-Sources-765x565.png",
//         count: 18,
//     },
//     {
//         id: "circulator",
//         name: "WG Circulators",
//         description: "High-performance waveguide circulators for signal routing",
//         image: "https://www.pasternack.com/Images/Topic/PE_Waveguide-Circulators-and-Isolators_765x565_HP.png",
//         count: 12,
//     },
//     {
//         id: "isolator",
//         name: "WG Isolators",
//         description: "Waveguide isolators providing excellent protection for RF components",
//         image: "https://www.vidarf.com/Portals/0/EasyDNNNews/62/600600p411EDNmainWaveguide_Isolator_Circulators.jpg",
//         count: 15,
//     },
//     {
//         id: "filter",
//         name: "WG Filters",
//         description: "Precision waveguide filters with sharp cutoff characteristics",
//         image: "https://www.bq-microwave.de/wp-content/uploads/2023/08/Waveguide-Bandpassfilters-WR12-WR10-1024x691.png",
//         count: 20,
//     },
//     {
//         id: "coupler",
//         name: "WG Couplers",
//         description: "Directional couplers for more power sampling and monitoring",
//         image: "https://www.pasternack.com/pages/RF-Microwave-and-Millimeter-Wave-Products/images/commercial-band-waveguide-couplers-2-crop-u80181.png?crc=4189246348",
//         count: 16,
//     },
// ]

// const CategoryGrid = () => {
//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {categories.map((category, index) => (
//                 <motion.div
//                     key={category.id}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.1 }}
//                     whileHover={{ y: -5 }}
//                     className="group"
//                 >
//                     <Link to={`/products/category/${category.id}`} className="block">
//                         <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
//                             <div className="relative h-48 overflow-hidden">
//                                 <img
//                                     src={category.image || `/placeholder.svg?height=192&width=384`}
//                                     alt={category.name}
//                                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                                 />
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
//                                 <div className="absolute bottom-4 left-4 right-4">
//                                     <h3 className="text-white text-xl font-bold">{category.name}</h3>
//                                     <p className="text-white text-sm opacity-80">{category.count} products</p>
//                                 </div>
//                             </div>
//                             <div className="p-4">
//                                 <p className="text-gray-600 text-sm font-semibold">{category.description}</p>
//                                 <div className="mt-4 flex justify-between items-center">
//                                     <span className="text-red-600 font-medium text-sm group-hover:text-red-700 transition-colors">
//                                         View Products
//                                     </span>
//                                     <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
//                                         {category.count} items
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>
//                     </Link>
//                 </motion.div>
//             ))}
//         </div>
//     )
// }

// export default CategoryGrid


"use client";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";

// Initial categories array with placeholder counts
const initialCategories = [
    {
        id: "waveguide",
        name: "Waveguide Components",
        description: "Standard and custom waveguide components for various applications",
        image: "https://rf-design.co.za/wp-content/uploads/2021/03/New-Waveguide-Components-Include-WRD-180-WRD-650-and-WRD-750-Sizes.jpg",
        // "https://www.pasternack.com/pages/rf-microwave-and-millimeter-wave-products/images/straight-waveguide-sections-lp-500x500-crop-u91126.png?crc=3973762733",
        count: 0, // Placeholder, will be updated dynamically
    },
    {
        id: "attenuator",
        name: "WG Attenuators",
        description: "Fixed and variable waveguide attenuators with high power handling",
        image: "https://cdn11.bigcommerce.com/s-a1x7hg2jgk/images/stencil/1280x1280/products/41872/424211/HP-J382A-Waveguide-Variable-Attenuator-53-82-GHz-0-50-dB_200537__11931.1708413721.jpg?c=2?imbypass=on",
        // "https://www.fairviewmicrowave.com/content/dam/infinite-electronics/images/fairview-microwave/promotional-images/FM-Broadband-Calibrated-Noise-Sources-765x565.png",
        count: 0,
    },
    {
        id: "circulator",
        name: "WG Circulators",
        description: "High-performance waveguide circulators for signal routing",
        image: "https://www.microwavetechniques.com/wp-content/uploads/2023/07/Waveguide-Circulators-High-Power-1.png",
        // "https://www.pasternack.com/Images/Topic/PE_Waveguide-Circulators-and-Isolators_765x565_HP.png",
        count: 0,
    },
    {
        id: "isolator",
        name: "WG Isolators",
        description: "Waveguide isolators providing excellent protection for RF components",
        image: "https://cdn.globalso.com/rftyt/waveguide-isolator.jpg",
        // "https://www.vidarf.com/Portals/0/EasyDNNNews/62/600600p411EDNmainWaveguide_Isolator_Circulators.jpg",
        count: 0,
    },
    {
        id: "filter",
        name: "WG Filters",
        description: "Precision waveguide filters with sharp cutoff characteristics",
        image: "https://www.microwavetechniques.com/wp-content/uploads/2024/03/RF-Waveguide-Filters.jpg",
        // "https://www.bq-microwave.de/wp-content/uploads/2023/08/Waveguide-Bandpassfilters-WR12-WR10-1024x691.png",
        count: 0,
    },
    {
        id: "coupler",
        name: "WG Couplers",
        description: "Directional couplers for more power sampling and monitoring",
        image: "https://www.microwavetechniques.com/wp-content/uploads/2023/07/featured-coupler-waveguide.png",
        // "https://www.pasternack.com/pages/RF-Microwave-and-Millimeter-Wave-Products/images/commercial-band-waveguide-couplers-2-crop-u80181.png?crc=4189246348",
        count: 0,
    },
];

const CategoryGrid = () => {
    const [categories, setCategories] = useState(initialCategories);

    // Fetch product counts for each category on component mount
    useEffect(() => {
        const fetchProductCounts = async () => {
            try {
                // Map over categories and fetch counts for each
                const updatedCategories = await Promise.all(
                    initialCategories.map(async (category) => {
                        try {
                            const response = await axios.get(
                                `https://raycom-backend.onrender.com/api/products/category/${category.id}`
                            );
                            const count = response.data.pagination.total || 0; // Extract total count from pagination
                            return { ...category, count };
                        } catch (error) {
                            console.error(`Error fetching count for category ${category.id}:`, error);
                            return { ...category, count: 0 }; // Fallback to 0 if fetch fails
                        }
                    })
                );
                setCategories(updatedCategories);
            } catch (error) {
                console.error("Error fetching product counts:", error);
            }
        };

        fetchProductCounts();
    }, []);

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
                <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group"
                >
                    <Link to={`/products/category/${category.id}`} className="block">
                        <div className="bg-white rounded-lg overflow-hidden shadow-md h-full">
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={category.image || `/placeholder.svg?height=192&width=384`}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                <div className="absolute bottom-4 left-4 right-4">
                                    <h3 className="text-white text-xl font-bold">{category.name}</h3>
                                    <p className="text-white text-sm opacity-80">{category.count} products</p>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="text-gray-600 text-sm font-semibold">{category.description}</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-red-600 font-medium text-sm group-hover:text-red-700 transition-colors">
                                        View Products
                                    </span>
                                    <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                                        {category.count} items
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
        </div>
    );
};

export default CategoryGrid;