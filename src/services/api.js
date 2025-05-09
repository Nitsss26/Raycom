// // // // // Mock API service for demonstration purposes
// // // // // In a real application, this would make actual API calls to your backend

// // // // // Sample data
// // // // const sampleProducts = [
// // // //   {
// // // //     id: "1",
// // // //     name: "WG Attenuator DC-4",
// // // //     model: "VT040CHPL1000N",
// // // //     category: "attenuator",
// // // //     price: 299.99,
// // // //     frequency: "DC-4",
// // // //     power: "1000",
// // // //     vswr: "1.4",
// // // //     connector: "N/7/16,L27",
// // // //     peakPower: "10",
// // // //     inStock: true,
// // // //     description:
// // // //       "High-performance waveguide attenuator designed for DC-4 GHz frequency range with 1000W power handling capability.",
// // // //     applications:
// // // //       "Ideal for telecommunications, defense systems, and radar applications requiring precise signal attenuation.",
// // // //     images: ["/images/products/attenuator-1.jpg", "/images/products/attenuator-2.jpg"],
// // // //   },
// // // //   {
// // // //     id: "2",
// // // //     name: "WG Circulator DC-2",
// // // //     model: "VT020CHPL2000N",
// // // //     category: "circulator",
// // // //     price: 449.99,
// // // //     frequency: "DC-2",
// // // //     power: "2000",
// // // //     vswr: "1.3",
// // // //     connector: "N/7/16,L27",
// // // //     peakPower: "50",
// // // //     inStock: true,
// // // //     description: "Premium waveguide circulator with excellent isolation characteristics for DC-2 GHz applications.",
// // // //     applications: "Suitable for high-power RF systems, communication networks, and laboratory testing environments.",
// // // //     images: ["/images/products/circulator-1.jpg"],
// // // //   },
// // // //   {
// // // //     id: "3",
// // // //     name: "WG Isolator DC-2",
// // // //     model: "VT020CHPL3000L27",
// // // //     category: "isolator",
// // // //     price: 399.99,
// // // //     frequency: "DC-2",
// // // //     power: "3000",
// // // //     vswr: "1.5",
// // // //     connector: "N/7/16,L27",
// // // //     peakPower: "50",
// // // //     inStock: false,
// // // //     description: "High-isolation waveguide isolator providing excellent protection for sensitive RF components.",
// // // //     applications:
// // // //       "Used in radar systems, satellite communications, and high-power transmitters to prevent signal reflection.",
// // // //     images: ["/images/products/isolator-1.jpg", "/images/products/isolator-2.jpg", "/images/products/isolator-3.jpg"],
// // // //   },
// // // //   {
// // // //     id: "4",
// // // //     name: "WG Filter DC-1",
// // // //     model: "VT010CHPL5000L27",
// // // //     category: "filter",
// // // //     price: 599.99,
// // // //     frequency: "DC-1",
// // // //     power: "5000",
// // // //     vswr: "1.4",
// // // //     connector: "L27,7/16,L52",
// // // //     peakPower: "100",
// // // //     inStock: true,
// // // //     description: "Precision waveguide filter with sharp cutoff characteristics and high power handling capability.",
// // // //     applications: "Essential for frequency selection in communication systems, radar, and scientific instrumentation.",
// // // //     images: ["/images/products/filter-1.jpg"],
// // // //   },
// // // // ]

// // // // const sampleRequests = [
// // // //   {
// // // //     id: "1001",
// // // //     name: "John Smith",
// // // //     email: "john.smith@example.com",
// // // //     phone: "555-123-4567",
// // // //     company: "Tech Solutions Inc.",
// // // //     date: "2023-05-15T10:30:00Z",
// // // //     status: "pending",
// // // //     items: [
// // // //       { id: "1", name: "WG Attenuator DC-4", model: "VT040CHPL1000N", quantity: 2 },
// // // //       { id: "3", name: "WG Isolator DC-2", model: "VT020CHPL3000L27", quantity: 1 },
// // // //     ],
// // // //   },
// // // //   {
// // // //     id: "1002",
// // // //     name: "Sarah Johnson",
// // // //     email: "sarah.j@example.com",
// // // //     phone: "555-987-6543",
// // // //     company: "Communications Corp",
// // // //     date: "2023-05-10T14:45:00Z",
// // // //     status: "approved",
// // // //     items: [{ id: "2", name: "WG Circulator DC-2", model: "VT020CHPL2000N", quantity: 3 }],
// // // //   },
// // // //   {
// // // //     id: "1003",
// // // //     name: "Michael Brown",
// // // //     email: "michael.b@example.com",
// // // //     phone: "555-456-7890",
// // // //     company: "Defense Systems Ltd",
// // // //     date: "2023-05-05T09:15:00Z",
// // // //     status: "completed",
// // // //     items: [
// // // //       { id: "4", name: "WG Filter DC-1", model: "VT010CHPL5000L27", quantity: 1 },
// // // //       { id: "1", name: "WG Attenuator DC-4", model: "VT040CHPL1000N", quantity: 2 },
// // // //     ],
// // // //   },
// // // // ]

// // // // // Simulate API delay
// // // // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// // // // // API functions
// // // // export const fetchProducts = async () => {
// // // //   await delay(800)
// // // //   return [...sampleProducts]
// // // // }

// // // // export const fetchProductsByCategory = async (category) => {
// // // //   await delay(800)
// // // //   return sampleProducts.filter((product) => product.category === category)
// // // // }

// // // // export const fetchProductById = async (id) => {
// // // //   await delay(600)
// // // //   const product = sampleProducts.find((product) => product.id === id)
// // // //   if (!product) {
// // // //     throw new Error("Product not found")
// // // //   }
// // // //   return product
// // // // }

// // // // export const fetchRelatedProducts = async (category, currentProductId) => {
// // // //   await delay(800)
// // // //   return sampleProducts
// // // //     .filter((product) => product.category === category && product.id !== currentProductId)
// // // //     .slice(0, 4)
// // // // }

// // // // export const fetchRequests = async () => {
// // // //   await delay(1000)
// // // //   return [...sampleRequests]
// // // // }

// // // // export const submitRequest = async (requestData) => {
// // // //   await delay(1500)
// // // //   // In a real app, this would send the data to your backend
// // // //   console.log("Request submitted:", requestData)
// // // //   return {
// // // //     id: Math.floor(1000 + Math.random() * 9000).toString(),
// // // //     date: new Date().toISOString(),
// // // //     status: "pending",
// // // //     ...requestData,
// // // //   }
// // // // }

// // // // export const updateRequestStatus = async (requestId, newStatus) => {
// // // //   await delay(800)
// // // //   // In a real app, this would update the status in your backend
// // // //   console.log(`Request ${requestId} status updated to ${newStatus}`)
// // // //   return { success: true }
// // // // }



// // // // Mock API service for demonstration purposes
// // // // In a real application, this would make actual API calls to your backend

// // // // Sample data
// // // const sampleProducts = [
// // //   {
// // //     id: "1",
// // //     name: "WG Attenuator DC-4",
// // //     model: "VT040CHPL1000N",
// // //     category: "attenuator",
// // //     price: 299.99,
// // //     frequency: "DC-4",
// // //     power: "1000",
// // //     vswr: "1.4",
// // //     connector: "N/7/16,L27",
// // //     peakPower: "10",
// // //     inStock: true,
// // //     description:
// // //       "High-performance waveguide attenuator designed for DC-4 GHz frequency range with 1000W power handling capability. Features precision machined components and gold-plated contacts for superior performance and reliability.",
// // //     applications:
// // //       "Ideal for telecommunications, defense systems, and radar applications requiring precise signal attenuation. Commonly used in satellite ground stations, cellular base stations, and military communication systems.",
// // //     images: ["/images/products/attenuator-1.jpg", "/images/products/attenuator-2.jpg"],
// // //   },
// // //   {
// // //     id: "2",
// // //     name: "WG Circulator DC-2",
// // //     model: "VT020CHPL2000N",
// // //     category: "circulator",
// // //     price: 449.99,
// // //     frequency: "DC-2",
// // //     power: "2000",
// // //     vswr: "1.3",
// // //     connector: "N/7/16,L27",
// // //     peakPower: "50",
// // //     inStock: true,
// // //     description: "Premium waveguide circulator with excellent isolation characteristics for DC-2 GHz applications. Engineered with high-quality ferrite materials for optimal performance across the entire frequency band.",
// // //     applications: "Suitable for high-power RF systems, communication networks, and laboratory testing environments. Provides essential signal routing in radar systems, satellite communications, and broadcast transmitters.",
// // //     images: ["/images/products/circulator-1.jpg"],
// // //   },
// // //   {
// // //     id: "3",
// // //     name: "WG Isolator DC-2",
// // //     model: "VT020CHPL3000L27",
// // //     category: "isolator",
// // //     price: 399.99,
// // //     frequency: "DC-2",
// // //     power: "3000",
// // //     vswr: "1.5",
// // //     connector: "N/7/16,L27",
// // //     peakPower: "50",
// // //     inStock: false,
// // //     description: "High-isolation waveguide isolator providing excellent protection for sensitive RF components. Features advanced ferrite technology for superior isolation performance and low insertion loss.",
// // //     applications:
// // //       "Used in radar systems, satellite communications, and high-power transmitters to prevent signal reflection. Essential for protecting expensive amplifiers and oscillators from harmful reflected power.",
// // //     images: ["/images/products/isolator-1.jpg", "/images/products/isolator-2.jpg", "/images/products/isolator-3.jpg"],
// // //   },
// // //   {
// // //     id: "4",
// // //     name: "WG Filter DC-1",
// // //     model: "VT010CHPL5000L27",
// // //     category: "filter",
// // //     price: 599.99,
// // //     frequency: "DC-1",
// // //     power: "5000",
// // //     vswr: "1.4",
// // //     connector: "L27,7/16,L52",
// // //     peakPower: "100",
// // //     inStock: true,
// // //     description: "Precision waveguide filter with sharp cutoff characteristics and high power handling capability. Engineered with advanced cavity design for superior stopband rejection and minimal passband insertion loss.",
// // //     applications: "Essential for frequency selection in communication systems, radar, and scientific instrumentation. Used in satellite earth stations, broadcast transmitters, and defense electronic systems.",
// // //     images: ["/images/products/filter-1.jpg"],
// // //   },
// // //   {
// // //     id: "5",
// // //     name: "WG Coupler DC-4",
// // //     model: "VT040CPLD2000N",
// // //     category: "coupler",
// // //     price: 349.99,
// // //     frequency: "DC-4",
// // //     power: "2000",
// // //     vswr: "1.3",
// // //     connector: "N/7/16",
// // //     peakPower: "40",
// // //     inStock: true,
// // //     description: "High-directivity waveguide coupler for precise power sampling and monitoring applications. Features precision-machined coupling slots for accurate and consistent coupling performance across the frequency band.",
// // //     applications: "Used in telecommunications, radar systems, and laboratory testing for signal monitoring. Essential for power measurement, system monitoring, and signal distribution in high-power RF systems.",
// // //     images: ["/images/products/coupler-1.jpg"],
// // //   },
// // //   {
// // //     id: "6",
// // //     name: "WG Load DC-2",
// // //     model: "VT020LOAD5000N",
// // //     category: "waveguide",
// // //     price: 199.99,
// // //     frequency: "DC-2",
// // //     power: "5000",
// // //     vswr: "1.2",
// // //     connector: "N",
// // //     peakPower: "100",
// // //     inStock: true,
// // //     description: "High-power waveguide load designed for terminating waveguide systems with minimal reflection. Features advanced thermal management for reliable operation under continuous high-power conditions.",
// // //     applications: "Ideal for high-power testing, system termination, and laboratory applications. Used in broadcast transmitters, radar systems, and high-energy physics research facilities.",
// // //     images: ["/images/products/load-1.jpg"],
// // //   },
// // //   {
// // //     id: "7",
// // //     name: "WG Attenuator DC-8",
// // //     model: "VT080CHPL500N",
// // //     category: "attenuator",
// // //     price: 399.99,
// // //     frequency: "DC-8",
// // //     power: "500",
// // //     vswr: "1.5",
// // //     connector: "N/7/16",
// // //     peakPower: "5",
// // //     inStock: true,
// // //     description: "Precision waveguide attenuator for higher frequency applications with excellent VSWR characteristics. Features resistive film technology for flat attenuation response across the entire frequency range.",
// // //     applications: "Suitable for satellite communications, high-frequency radar, and millimeter-wave systems. Used in research laboratories, defense electronics, and advanced communication networks.",
// // //     images: ["/images/products/attenuator-3.jpg"],
// // //   },
// // //   {
// // //     id: "8",
// // //     name: "WG Circulator DC-4",
// // //     model: "VT040CIRC1500N",
// // //     category: "circulator",
// // //     price: 549.99,
// // //     frequency: "DC-4",
// // //     power: "1500",
// // //     vswr: "1.4",
// // //     connector: "N/7/16",
// // //     peakPower: "30",
// // //     inStock: true,
// // //     description: "High-performance waveguide circulator for DC-4 GHz applications with excellent port-to-port isolation. Features temperature-stabilized ferrite material for consistent performance across a wide temperature range.",
// // //     applications: "Used in radar systems, communication networks, and high-power RF testing. Essential for duplexing in radar transmitters and receivers, and for protecting sensitive components in high-power systems.",
// // //     images: ["/images/products/circulator-2.jpg"],
// // //   },
// // //   {
// // //     id: "9",
// // //     name: "WG Filter DC-8",
// // //     model: "VT080FLTR1000N",
// // //     category: "filter",
// // //     price: 699.99,
// // //     frequency: "DC-8",
// // //     power: "1000",
// // //     vswr: "1.5",
// // //     connector: "N/7/16",
// // //     peakPower: "20",
// // //     inStock: true,
// // //     description: "High-frequency waveguide filter with excellent selectivity and low insertion loss. Features precision-machined resonant cavities for sharp cutoff characteristics and high rejection in the stopband.",
// // //     applications: "Ideal for satellite communications, radar systems, and millimeter-wave applications. Used in electronic warfare systems, point-to-point microwave links, and advanced research facilities.",
// // //     images: ["/images/products/filter-2.jpg"],
// // //   },
// // //   {
// // //     id: "10",
// // //     name: "WG Isolator DC-4",
// // //     model: "VT040ISOL2000N",
// // //     category: "isolator",
// // //     price: 499.99,
// // //     frequency: "DC-4",
// // //     power: "2000",
// // //     vswr: "1.3",
// // //     connector: "N/7/16",
// // //     peakPower: "40",
// // //     inStock: true,
// // //     description: "High-power waveguide isolator with excellent isolation and low insertion loss. Features advanced ferrite technology and efficient thermal management for reliable operation in demanding applications.",
// // //     applications: "Used in high-power transmitters, radar systems, and communication networks. Essential for protecting expensive RF components from reflected power in mismatched systems.",
// // //     images: ["/images/products/isolator-4.jpg"],
// // //   },
// // //   {
// // //     id: "11",
// // //     name: "WG Coupler DC-2",
// // //     model: "VT020CPLD1000N",
// // //     category: "coupler",
// // //     price: 299.99,
// // //     frequency: "DC-2",
// // //     power: "1000",
// // //     vswr: "1.2",
// // //     connector: "N",
// // //     peakPower: "20",
// // //     inStock: true,
// // //     description: "Precision waveguide directional coupler with high directivity and flat coupling. Features multi-hole coupling design for superior performance across the entire frequency band.",
// // //     applications: "Used for power monitoring, signal sampling, and network analysis in RF systems. Essential for system monitoring in broadcast transmitters, radar systems, and communication networks.",
// // //     images: ["/images/products/coupler-2.jpg"],
// // //   },
// // //   {
// // //     id: "12",
// // //     name: "WG Switch DC-4",
// // //     model: "VT040SWTC500N",
// // //     category: "waveguide",
// // //     price: 649.99,
// // //     frequency: "DC-4",
// // //     power: "500",
// // //     vswr: "1.4",
// // //     connector: "N/7/16",
// // //     peakPower: "10",
// // //     inStock: false,
// // //     description: "High-speed waveguide switch with excellent isolation and low insertion loss. Features reliable electromechanical actuation for long operational life and consistent performance.",
// // //     applications: "Used for signal routing, redundancy switching, and system reconfiguration in RF networks. Essential for satellite ground stations, radar systems, and communication networks.",
// // //     images: ["/images/products/switch-1.jpg"],
// // //   },
// // //   {
// // //     id: "13",
// // //     name: "WG Diplexer DC-2/DC-4",
// // //     model: "VT024DPLX1000N",
// // //     category: "filter",
// // //     price: 799.99,
// // //     frequency: "DC-2/DC-4",
// // //     power: "1000",
// // //     vswr: "1.5",
// // //     connector: "N/7/16",
// // //     peakPower: "20",
// // //     inStock: true,
// // //     description: "Dual-band waveguide diplexer for separating or combining DC-2 and DC-4 GHz signals. Features precision-machined filter sections for sharp channel separation and low insertion loss.",
// // //     applications: "Used in multi-band communication systems, satellite ground stations, and radar systems. Essential for frequency band separation in complex RF systems with multiple operating bands.",
// // //     images: ["/images/products/diplexer-1.jpg"],
// // //   },
// // //   {
// // //     id: "14",
// // //     name: "WG Attenuator DC-1",
// // //     model: "VT010CHPL2000N",
// // //     category: "attenuator",
// // //     price: 249.99,
// // //     frequency: "DC-1",
// // //     power: "2000",
// // //     vswr: "1.2",
// // //     connector: "N",
// // //     peakPower: "40",
// // //     inStock: true,
// // //     description: "Low-frequency high-power waveguide attenuator with excellent VSWR characteristics. Features robust construction for reliable operation in high-power applications.",
// // //     applications: "Ideal for broadcast transmitters, high-power communication systems, and industrial RF applications. Used for power level adjustment and system calibration in high-power RF systems.",
// // //     images: ["/images/products/attenuator-4.jpg"],
// // //   },
// // //   {
// // //     id: "15",
// // //     name: "WG Phase Shifter DC-2",
// // //     model: "VT020PHSH500N",
// // //     category: "waveguide",
// // //     price: 549.99,
// // //     frequency: "DC-2",
// // //     power: "500",
// // //     vswr: "1.4",
// // //     connector: "N/7/16",
// // //     peakPower: "10",
// // //     inStock: true,
// // //     description: "Precision waveguide phase shifter with linear phase response and low insertion loss. Features micrometer adjustment for precise phase control and excellent repeatability.",
// // //     applications: "Used in phased array antennas, radar systems, and laboratory testing. Essential for beam steering, system calibration, and phase-critical applications in RF systems.",
// // //     images: ["/images/products/phase-shifter-1.jpg"],
// // //   },
// // //   {
// // //     id: "16",
// // //     name: "WG Termination DC-4",
// // //     model: "VT040TERM2000N",
// // //     category: "waveguide",
// // //     price: 199.99,
// // //     frequency: "DC-4",
// // //     power: "2000",
// // //     vswr: "1.1",
// // //     connector: "N/7/16",
// // //     peakPower: "40",
// // //     inStock: true,
// // //     description: "High-power waveguide termination with excellent VSWR characteristics. Features advanced thermal management for reliable operation under continuous high-power conditions.",
// // //     applications: "Used for terminating unused ports in waveguide systems, load testing, and system calibration. Essential for laboratory testing, system integration, and power measurement applications.",
// // //     images: ["/images/products/termination-1.jpg"],
// // //   }
// // // ];

// // // const sampleRequests = [
// // //   {
// // //     id: "1001",
// // //     name: "John Smith",
// // //     email: "john.smith@example.com",
// // //     phone: "555-123-4567",
// // //     company: "Tech Solutions Inc.",
// // //     date: "2023-05-15T10:30:00Z",
// // //     status: "pending",
// // //     items: [
// // //       { id: "1", name: "WG Attenuator DC-4", model: "VT040CHPL1000N", quantity: 2 },
// // //       { id: "3", name: "WG Isolator DC-2", model: "VT020CHPL3000L27", quantity: 1 },
// // //     ],
// // //   },
// // //   {
// // //     id: "1002",
// // //     name: "Sarah Johnson",
// // //     email: "sarah.j@example.com",
// // //     phone: "555-987-6543",
// // //     company: "Communications Corp",
// // //     date: "2023-05-10T14:45:00Z",
// // //     status: "approved",
// // //     items: [{ id: "2", name: "WG Circulator DC-2", model: "VT020CHPL2000N", quantity: 3 }],
// // //   },
// // //   {
// // //     id: "1003",
// // //     name: "Michael Brown",
// // //     email: "michael.b@example.com",
// // //     phone: "555-456-7890",
// // //     company: "Defense Systems Ltd",
// // //     date: "2023-05-05T09:15:00Z",
// // //     status: "completed",
// // //     items: [
// // //       { id: "4", name: "WG Filter DC-1", model: "VT010CHPL5000L27", quantity: 1 },
// // //       { id: "1", name: "WG Attenuator DC-4", model: "VT040CHPL1000N", quantity: 2 },
// // //     ],
// // //   },
// // //   {
// // //     id: "1004",
// // //     name: "Emily Chen",
// // //     email: "emily.chen@example.com",
// // //     phone: "555-222-3333",
// // //     company: "Satellite Systems International",
// // //     date: "2023-05-18T11:20:00Z",
// // //     status: "pending",
// // //     items: [
// // //       { id: "5", name: "WG Coupler DC-4", model: "VT040CPLD2000N", quantity: 1 },
// // //       { id: "8", name: "WG Circulator DC-4", model: "VT040CIRC1500N", quantity: 2 },
// // //     ],
// // //   },
// // //   {
// // //     id: "1005",
// // //     name: "Robert Wilson",
// // //     email: "robert.w@example.com",
// // //     phone: "555-777-8888",
// // //     company: "Advanced Research Labs",
// // //     date: "2023-05-20T15:10:00Z",
// // //     status: "approved",
// // //     items: [
// // //       { id: "9", name: "WG Filter DC-8", model: "VT080FLTR1000N", quantity: 1 },
// // //       { id: "13", name: "WG Diplexer DC-2/DC-4", model: "VT024DPLX1000N", quantity: 1 },
// // //     ],
// // //   },
// // // ];

// // // // Simulate API delay
// // // const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// // // // API functions
// // // export const fetchProducts = async () => {
// // //   await delay(800);
// // //   return [...sampleProducts];
// // // };

// // // export const fetchAllProducts = async () => {
// // //   await delay(800);
// // //   return [...sampleProducts];
// // // };

// // // export const fetchProductsByCategory = async (category) => {
// // //   await delay(800);
// // //   return sampleProducts.filter((product) => product.category === category);
// // // };

// // // export const fetchProductById = async (id) => {
// // //   await delay(600);
// // //   const product = sampleProducts.find((product) => product.id === id);
// // //   if (!product) {
// // //     throw new Error("Product not found");
// // //   }
// // //   return product;
// // // };

// // // export const fetchRelatedProducts = async (category, currentProductId) => {
// // //   await delay(800);
// // //   return sampleProducts
// // //     .filter((product) => product.category === category && product.id !== currentProductId)
// // //     .slice(0, 4);
// // // };

// // // export const fetchFeaturedProducts = async () => {
// // //   await delay(800);
// // //   // Return a mix of products from different categories
// // //   return sampleProducts.filter((_, index) => index % 4 === 0 || index % 5 === 0).slice(0, 8);
// // // };

// // // export const fetchRequests = async () => {
// // //   await delay(1000);
// // //   return [...sampleRequests];
// // // };

// // // export const fetchRecentRequests = async () => {
// // //   await delay(800);
// // //   return [...sampleRequests].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
// // // };

// // // export const fetchDashboardStats = async () => {
// // //   await delay(800);
// // //   return {
// // //     totalRequests: sampleRequests.length,
// // //     pendingRequests: sampleRequests.filter(req => req.status === 'pending').length,
// // //     totalProducts: sampleProducts.length,
// // //     totalCustomers: 24, // Mock value
// // //   };
// // // };

// // // export const submitRequest = async (requestData) => {
// // //   await delay(1500);
// // //   // In a real app, this would send the data to your backend
// // //   console.log("Request submitted:", requestData);

// // //   // Add the new request to our sample data (this would normally be done by the backend)
// // //   const newRequest = {
// // //     id: Math.floor(1000 + Math.random() * 9000).toString(),
// // //     date: new Date().toISOString(),
// // //     status: "pending",
// // //     ...requestData,
// // //   };

// // //   sampleRequests.push(newRequest);

// // //   return newRequest;
// // // };

// // // export const updateRequestStatus = async (requestId, newStatus) => {
// // //   await delay(800);
// // //   // In a real app, this would update the status in your backend
// // //   console.log(`Request ${requestId} status updated to ${newStatus}`);

// // //   // Update the request in our sample data (this would normally be done by the backend)
// // //   const request = sampleRequests.find(req => req.id === requestId);
// // //   if (request) {
// // //     request.status = newStatus;
// // //   }

// // //   return { success: true };
// // // };

// // // export const deleteProduct = async (productId) => {
// // //   await delay(800);
// // //   // In a real app, this would delete the product in your backend
// // //   console.log(`Product ${productId} deleted`);

// // //   // Remove the product from our sample data (this would normally be done by the backend)
// // //   const index = sampleProducts.findIndex(product => product.id === productId);
// // //   if (index !== -1) {
// // //     sampleProducts.splice(index, 1);
// // //   }

// // //   return { success: true };
// // // };



// // // import axios from "axios"

// // // // Set base URL for API requests
// // // axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000/api"

// // // // Add token to requests if available
// // // const token = localStorage.getItem("token")
// // // if (token) {
// // //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
// // // }

// // // // Products API
// // // export const fetchProducts = async (params = {}) => {
// // //   try {
// // //     const response = await axios.get("/products", { params })
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error fetching products:", error)
// // //     throw error
// // //   }
// // // }

// // // export const fetchProductCategories = async () => {
// // //   try {
// // //     const response = await axios.get("/products/categories")
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error fetching product categories:", error)
// // //     throw error
// // //   }
// // // }

// // // export const fetchProductsByCategory = async (category, params = {}) => {
// // //   try {
// // //     const response = await axios.get(`/products/category/${category}`, { params })
// // //     return response.data
// // //   } catch (error) {
// // //     console.error(`Error fetching products in category ${category}:`, error)
// // //     throw error
// // //   }
// // // }

// // // export const fetchProductById = async (id) => {
// // //   try {
// // //     const response = await axios.get(`/products/${id}`)
// // //     return response.data
// // //   } catch (error) {
// // //     console.error(`Error fetching product ${id}:`, error)
// // //     throw error
// // //   }
// // // }

// // // export const fetchRelatedProducts = async (productId) => {
// // //   try {
// // //     const response = await axios.get(`/products/related/${productId}`)
// // //     return response.data
// // //   } catch (error) {
// // //     console.error(`Error fetching related products for ${productId}:`, error)
// // //     throw error
// // //   }
// // // }

// // // export const fetchFeaturedProducts = async () => {
// // //   try {
// // //     const response = await axios.get("/products/featured")
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error fetching featured products:", error)
// // //     throw error
// // //   }
// // // }

// // // export const createProduct = async (productData) => {
// // //   try {
// // //     const response = await axios.post("/products", productData)
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error creating product:", error)
// // //     throw error
// // //   }
// // // }

// // // export const updateProduct = async (id, productData) => {
// // //   try {
// // //     const response = await axios.put(`/products/${id}`, productData)
// // //     return response.data
// // //   } catch (error) {
// // //     console.error(`Error updating product ${id}:`, error)
// // //     throw error
// // //   }
// // // }

// // // export const deleteProduct = async (id) => {
// // //   try {
// // //     const response = await axios.delete(`/products/${id}`)
// // //     return response.data
// // //   } catch (error) {
// // //     console.error(`Error deleting product ${id}:`, error)
// // //     throw error
// // //   }
// // // }

// // // // Requests API
// // // export const fetchRequests = async (params = {}) => {
// // //   try {
// // //     const response = await axios.get("/requests", { params })
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error fetching requests:", error)
// // //     throw error
// // //   }
// // // }

// // // export const fetchRequestById = async (id) => {
// // //   try {
// // //     const response = await axios.get(`/requests/${id}`)
// // //     return response.data
// // //   } catch (error) {
// // //     console.error(`Error fetching request ${id}:`, error)
// // //     throw error
// // //   }
// // // }

// // // export const fetchRequestStats = async () => {
// // //   try {
// // //     const response = await axios.get("/requests/stats")
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error fetching request stats:", error)
// // //     throw error
// // //   }
// // // }

// // // export const submitRequest = async (requestData) => {
// // //   try {
// // //     const response = await axios.post("/requests", requestData)
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error submitting request:", error)
// // //     throw error
// // //   }
// // // }

// // // export const updateRequestStatus = async (id, status, note) => {
// // //   try {
// // //     const response = await axios.put(`/requests/${id}/status`, { status, note })
// // //     return response.data
// // //   } catch (error) {
// // //     console.error(`Error updating request ${id} status:`, error)
// // //     throw error
// // //   }
// // // }

// // // export const cancelRequest = async (id, reason) => {
// // //   try {
// // //     const response = await axios.put(`/requests/${id}/cancel`, { reason })
// // //     return response.data
// // //   } catch (error) {
// // //     console.error(`Error cancelling request ${id}:`, error)
// // //     throw error
// // //   }
// // // }

// // // // User API
// // // export const fetchUserProfile = async () => {
// // //   try {
// // //     const response = await axios.get("/users/me")
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error fetching user profile:", error)
// // //     throw error
// // //   }
// // // }

// // // export const updateUserProfile = async (userData) => {
// // //   try {
// // //     const response = await axios.put("/users/me", userData)
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error updating user profile:", error)
// // //     throw error
// // //   }
// // // }

// // // export const fetchAllUsers = async () => {
// // //   try {
// // //     const response = await axios.get("/users")
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error fetching users:", error)
// // //     throw error
// // //   }
// // // }

// // // // Dashboard API
// // // export const fetchDashboardStats = async () => {
// // //   try {
// // //     // Combine requests stats and other data
// // //     const [requestStats, productCategories] = await Promise.all([
// // //       axios.get("/requests/stats"),
// // //       axios.get("/products/categories"),
// // //     ])

// // //     return {
// // //       requests: requestStats.data,
// // //       productCategories: productCategories.data,
// // //       totalProducts: 0, // This would come from a real API
// // //       totalCustomers: 0, // This would come from a real API
// // //     }
// // //   } catch (error) {
// // //     console.error("Error fetching dashboard stats:", error)
// // //     throw error
// // //   }
// // // }

// // // export const fetchRecentRequests = async () => {
// // //   try {
// // //     const response = await axios.get("/requests", {
// // //       params: { limit: 5, sort: "newest" },
// // //     })
// // //     return response.data.requests
// // //   } catch (error) {
// // //     console.error("Error fetching recent requests:", error)
// // //     throw error
// // //   }
// // // }


// // import axios from "axios"

// // // Set base URL for API requests
// // axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000/api"

// // // Add token to requests if available
// // const token = localStorage.getItem("token")
// // if (token) {
// //   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
// // }

// // // Add request interceptor to set token for each request
// // axios.interceptors.request.use(
// //   (config) => {
// //     const token = localStorage.getItem("token")
// //     if (token) {
// //       config.headers["Authorization"] = `Bearer ${token}`
// //     }
// //     return config
// //   },
// //   (error) => {
// //     return Promise.reject(error)
// //   }
// // )

// // // Add response interceptor to handle errors
// // axios.interceptors.response.use(
// //   (response) => {
// //     return response
// //   },
// //   (error) => {
// //     // Handle errors globally
// //     console.error("API Error:", error.response?.data?.message || error.message)
// //     return Promise.reject(error)
// //   }
// // )

// // // Products API
// // export const fetchProducts = async () => {
// //   try {
// //     const response = await axios.get("/products")
// //     return response.data
// //   } catch (error) {
// //     console.error("Error fetching products:", error)
// //     throw error
// //   }
// // }


// // export const fetchProductCategories = async () => {
// //   try {
// //     const response = await axios.get("/products/categories")
// //     return response.data
// //   } catch (error) {
// //     console.error("Error fetching product categories:", error)
// //     throw error
// //   }
// // }

// // export const fetchProductsByCategory = async (category, params = {}) => {
// //   try {
// //     const response = await axios.get(`/products/category/${category}`, { params })
// //     return response.data.products
// //   } catch (error) {
// //     console.error(`Error fetching products in category ${category}:`, error)
// //     throw error
// //   }
// // }

// // export const fetchProductById = async (id) => {
// //   try {
// //     const response = await axios.get(`/products/${id}`)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error fetching product ${id}:`, error)
// //     throw error
// //   }
// // }

// // export const fetchRelatedProducts = async (category, id) => {
// //   try {
// //     const response = await axios.get(`/products/related/${id}`)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error fetching related products for ${id}:`, error)
// //     throw error
// //   }
// // }

// // export const fetchFeaturedProducts = async () => {
// //   try {
// //     const response = await axios.get("/products/featured")
// //     return response.data
// //   } catch (error) {
// //     console.error("Error fetching featured products:", error)
// //     throw error
// //   }
// // }

// // export const createProduct = async (productData) => {
// //   try {
// //     const response = await axios.post("/products", productData)
// //     return response.data
// //   } catch (error) {
// //     console.error("Error creating product:", error)
// //     throw error
// //   }
// // }

// // export const updateProduct = async (id, productData) => {
// //   try {
// //     const response = await axios.put(`/products/${id}`, productData)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error updating product ${id}:`, error)
// //     throw error
// //   }
// // }

// // export const deleteProduct = async (id) => {
// //   try {
// //     const response = await axios.delete(`/products/${id}`)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error deleting product ${id}:`, error)
// //     throw error
// //   }
// // }

// // // Requests API
// // // export const fetchRequests = async (params = {}) => {
// // //   try {
// // //     const response = await axios.get("/requests", { params })
// // //     return response.data
// // //   } catch (error) {
// // //     console.error("Error fetching requests:", error)
// // //     throw error
// // //   }
// // // }
// // export const fetchRequests = async () => {
// //   try {
// //     const response = await axios.get("/requests");
// //     return response.data;
// //   } catch (error) {
// //     console.error("Error fetching requests:", error);

// //     throw error;

// //   }
// // };


// // export const fetchRequestById = async (id) => {
// //   try {
// //     const response = await axios.get(`/requests/${id}`)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error fetching request ${id}:`, error)
// //     throw error
// //   }
// // }

// // export const fetchRequestStats = async () => {
// //   try {
// //     const response = await axios.get("/requests/stats")
// //     return response.data
// //   } catch (error) {
// //     console.error("Error fetching request stats:", error)
// //     throw error
// //   }
// // }

// // export const submitRequest = async (requestData) => {
// //   try {
// //     const response = await axios.post("/requests", requestData)
// //     return response.data
// //   } catch (error) {
// //     console.error("Error submitting request:", error)
// //     throw error
// //   }
// // }

// // export const updateRequestStatus = async (id, status, note) => {
// //   try {
// //     const response = await axios.put(`/requests/${id}/status`, { status, note })
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error updating request ${id} status:`, error)
// //     throw error
// //   }
// // }

// // export const updateRequest = async (id, requestData) => {
// //   try {
// //     const response = await axios.put(`/requests/${id}`, requestData)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error updating request ${id}:`, error)
// //     throw error
// //   }
// // }

// // export const cancelRequest = async (id, reason) => {
// //   try {
// //     const response = await axios.put(`/requests/${id}/cancel`, { reason })
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error cancelling request ${id}:`, error)
// //     throw error
// //   }
// // }

// // export const deleteRequest = async (id) => {
// //   try {
// //     const response = await axios.delete(`/requests/${id}`)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error deleting request ${id}:`, error)
// //     throw error
// //   }
// // }

// // // User API
// // export const registerUser = async (userData) => {
// //   try {
// //     const response = await axios.post("/users/register", userData)
// //     return response.data
// //   } catch (error) {
// //     console.error("Error registering user:", error)
// //     throw error
// //   }
// // }

// // export const loginUser = async (credentials) => {
// //   try {
// //     const response = await axios.post("/users/login", credentials)
// //     return response.data
// //   } catch (error) {
// //     console.error("Error logging in:", error)
// //     throw error
// //   }
// // }

// // export const fetchUserProfile = async () => {
// //   try {
// //     const response = await axios.get("/users/me")
// //     return response.data
// //   } catch (error) {
// //     console.error("Error fetching user profile:", error)
// //     throw error
// //   }
// // }

// // export const updateUserProfile = async (userData) => {
// //   try {
// //     const response = await axios.put("/users/me", userData)
// //     return response.data
// //   } catch (error) {
// //     console.error("Error updating user profile:", error)
// //     throw error
// //   }
// // }

// // export const changePassword = async (passwordData) => {
// //   try {
// //     const response = await axios.put("/users/password", passwordData)
// //     return response.data
// //   } catch (error) {
// //     console.error("Error changing password:", error)
// //     throw error
// //   }
// // }

// // export const forgotPassword = async (email) => {
// //   try {
// //     const response = await axios.post("/users/forgot-password", { email })
// //     return response.data
// //   } catch (error) {
// //     console.error("Error requesting password reset:", error)
// //     throw error
// //   }
// // }

// // export const resetPassword = async (token, password) => {
// //   try {
// //     const response = await axios.post(`/users/reset-password/${token}`, { password })
// //     return response.data
// //   } catch (error) {
// //     console.error("Error resetting password:", error)
// //     throw error
// //   }
// // }

// // export const fetchAllUsers = async () => {
// //   try {
// //     const response = await axios.get("/users")
// //     return response.data
// //   } catch (error) {
// //     console.error("Error fetching users:", error)
// //     throw error
// //   }
// // }

// // export const fetchUserById = async (id) => {
// //   try {
// //     const response = await axios.get(`/users/${id}`)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error fetching user ${id}:`, error)
// //     throw error
// //   }
// // }

// // export const updateUser = async (id, userData) => {
// //   try {
// //     const response = await axios.put(`/users/${id}`, userData)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error updating user ${id}:`, error)
// //     throw error
// //   }
// // }

// // export const deleteUser = async (id) => {
// //   try {
// //     const response = await axios.delete(`/users/${id}`)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error deleting user ${id}:`, error)
// //     throw error
// //   }
// // }

// // // Dashboard API
// // export const fetchDashboardStats = async () => {
// //   try {
// //     // Combine requests stats and other data
// //     const requestStats = await fetchRequestStats()
// //     const productCategories = await fetchProductCategories()
// //     const productsData = await fetchProducts()
// //     const usersData = await fetchAllUsers()

// //     return {
// //       totalRequests: requestStats.stats.total || 0,
// //       pendingRequests: requestStats.stats.byStatus.pending || 0,
// //       totalProducts: productsData.products?.length || 0,
// //       totalCustomers: usersData?.length || 0,
// //       recentRequests: requestStats.recentRequests || [],
// //       requestsByStatus: requestStats.stats.byStatus || {},
// //       productCategories: productCategories || [],
// //     }
// //   } catch (error) {
// //     console.error("Error fetching dashboard stats:", error)
// //     throw error
// //   }
// // }

// // export const fetchRecentRequests = async () => {
// //   try {
// //     const response = await fetchRequests({
// //       limit: 5,
// //       sort: "newest",
// //     })
// //     return response.requests || []
// //   } catch (error) {
// //     console.error("Error fetching recent requests:", error)
// //     throw error
// //   }
// // }


// import axios from "axios"

// // Set base URL for API requests
// axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000/api"

// const api = axios.create({
//   baseURL: "http://localhost:5000/api",
// });

// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Fetch all users
// export const fetchAllUsers = async () => {
//   try {
//     const response = await api.get("/users");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Create a new user (admin or customer)
// export const createUser = async (userData) => {
//   try {
//     const response = await api.post("/users/register", userData);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data?.message || "Error creating user";
//   }
// };

// // Update a user
// export const updateUser = async (userId, userData) => {
//   try {
//     const response = await api.put(`/users/${userId}`, userData);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data?.message || "Error updating user";
//   }
// };



// // Delete a user
// export const deleteUser = async (userId) => {
//   try {
//     const response = await api.delete(`/users/${userId}`);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data?.message || "Error deleting user";
//   }
// };

// // Fetch a user by ID
// export const fetchUserById = async (userId) => {
//   try {
//     const response = await api.get(`/users/${userId}`);
//     return response.data;
//   } catch (error) {
//     throw error.response?.data?.message || "Error fetching user";
//   }
// };

// // export const fetchAllUsers = async (token) => {
// //   try {
// //     const response = await axios.get(`/users`, {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// // Fetch user by ID
// // export const fetchUserById = async (id, token) => {
// //   try {
// //     const response = await axios.get(`/users/${id}`, {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// // Add a new admin
// export const addAdmin = async (adminData, token) => {
//   try {
//     const response = await axios.post(`/users/add-admin`, adminData, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Update a user
// // export const updateUser = async (id, userData, token) => {
// //   try {
// //     const response = await axios.put(`users/${id}`, userData, {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// // // Delete a user
// // export const deleteUser = async (id, token) => {
// //   try {
// //     const response = await axios.delete(`/users/${id}`, {
// //       headers: {
// //         Authorization: `Bearer ${token}`,
// //       },
// //     });
// //     return response.data;
// //   } catch (error) {
// //     throw error;
// //   }
// // };

// // Add token to requests if available
// const token = localStorage.getItem("token")
// if (token) {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
// }

// // Add request interceptor to set token for each request
// axios.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token")
//     if (token) {
//       config.headers["Authorization"] = `Bearer ${token}`
//     }
//     return config
//   },
//   (error) => {
//     return Promise.reject(error)
//   },
// )

// // Add response interceptor to handle errors
// axios.interceptors.response.use(
//   (response) => {
//     return response
//   },
//   (error) => {
//     // Handle errors globally
//     console.error("API Error:", error.response?.data?.message || error.message)
//     return Promise.reject(error)
//   },
// )





// // Products API
// export const fetchProducts = async (params = {}) => {
//   try {
//     const response = await axios.get("/products", { params })
//     return response.data
//   } catch (error) {
//     console.error("Error fetching products:", error)
//     throw error
//   }
// }

// export const fetchProductCategories = async () => {
//   try {
//     const response = await axios.get("/products/categories")
//     return response.data
//   } catch (error) {
//     console.error("Error fetching product categories:", error)
//     throw error
//   }
// }

// export const fetchProductsByCategory = async (category, params = {}) => {
//   try {
//     const response = await axios.get(`/products/category/${category}`, { params })
//     return response.data.products
//   } catch (error) {
//     console.error(`Error fetching products in category ${category}:`, error)
//     throw error
//   }
// }

// export const fetchProductById = async (id) => {
//   try {
//     const response = await axios.get(`/products/${id}`)
//     return response.data
//   } catch (error) {
//     console.error(`Error fetching product ${id}:`, error)
//     throw error
//   }
// }

// export const fetchRelatedProducts = async (category, id) => {
//   try {
//     const response = await axios.get(`/products/related/${id}`)
//     return response.data
//   } catch (error) {
//     console.error(`Error fetching related products for ${id}:`, error)
//     throw error
//   }
// }

// export const fetchFeaturedProducts = async () => {
//   try {
//     const response = await axios.get("/products/featured")
//     return response.data
//   } catch (error) {
//     console.error("Error fetching featured products:", error)
//     throw error
//   }
// }

// export const createProduct = async (productData) => {
//   try {
//     const response = await axios.post("/products", productData)
//     return response.data
//   } catch (error) {
//     console.error("Error creating product:", error)
//     throw error
//   }
// }

// export const updateProduct = async (id, productData) => {
//   try {
//     const response = await axios.put(`/products/${id}`, productData)
//     return response.data
//   } catch (error) {
//     console.error(`Error updating product ${id}:`, error)
//     throw error
//   }
// }

// export const deleteProduct = async (id) => {
//   try {
//     const response = await axios.delete(`/products/${id}`)
//     return response.data
//   } catch (error) {
//     console.error(`Error deleting product ${id}:`, error)
//     throw error
//   }
// }

// // Requests API
// export const fetchRequests = async (params = {}) => {
//   try {
//     const response = await axios.get("/requests", { params })
//     return response.data
//   } catch (error) {
//     console.error("Error fetching requests:", error)
//     throw error
//   }
// }

// export const fetchRequestById = async (id) => {
//   try {
//     const response = await axios.get(`/requests/${id}`)
//     return response.data
//   } catch (error) {
//     console.error(`Error fetching request ${id}:`, error)
//     throw error
//   }
// }

// export const fetchRequestStats = async () => {
//   try {
//     const response = await axios.get("/requests/stats")
//     return response.data
//   } catch (error) {
//     console.error("Error fetching request stats:", error)
//     throw error
//   }
// }

// export const submitRequest = async (requestData) => {
//   try {
//     const response = await axios.post("/requests", requestData)
//     return response.data
//   } catch (error) {
//     console.error("Error submitting request:", error)
//     throw error
//   }
// }

// export const updateRequestStatus = async (id, status, note) => {
//   try {
//     const response = await axios.put(`/requests/${id}/status`, { status, note })
//     return response.data
//   } catch (error) {
//     console.error(`Error updating request ${id} status:`, error)
//     throw error
//   }
// }

// export const updateRequest = async (id, requestData) => {
//   try {
//     const response = await axios.put(`/requests/${id}`, requestData)
//     return response.data
//   } catch (error) {
//     console.error(`Error updating request ${id}:`, error)
//     throw error
//   }
// }

// export const cancelRequest = async (id, reason) => {
//   try {
//     const response = await axios.put(`/requests/${id}/cancel`, { reason })
//     return response.data
//   } catch (error) {
//     console.error(`Error cancelling request ${id}:`, error)
//     throw error
//   }
// }

// export const deleteRequest = async (id) => {
//   try {
//     const response = await axios.delete(`/requests/${id}`)
//     return response.data
//   } catch (error) {
//     console.error(`Error deleting request ${id}:`, error)
//     throw error
//   }
// }

// // User API
// export const registerUser = async (userData) => {
//   try {
//     const response = await axios.post("/users/register", userData)
//     return response.data
//   } catch (error) {
//     console.error("Error registering user:", error)
//     throw error
//   }
// }

// export const loginUser = async (credentials) => {
//   try {
//     const response = await axios.post("/users/login", credentials)
//     return response.data
//   } catch (error) {
//     console.error("Error logging in:", error)
//     throw error
//   }
// }

// export const fetchUserProfile = async () => {
//   try {
//     const response = await axios.get("/users/me")
//     return response.data
//   } catch (error) {
//     console.error("Error fetching user profile:", error)
//     throw error
//   }
// }

// export const updateUserProfile = async (userData) => {
//   try {
//     const response = await axios.put("/users/me", userData)
//     return response.data
//   } catch (error) {
//     console.error("Error updating user profile:", error)
//     throw error
//   }
// }

// export const changePassword = async (passwordData) => {
//   try {
//     const response = await axios.put("/users/password", passwordData)
//     return response.data
//   } catch (error) {
//     console.error("Error changing password:", error)
//     throw error
//   }
// }

// export const forgotPassword = async (email) => {
//   try {
//     const response = await axios.post("/users/forgot-password", { email })
//     return response.data
//   } catch (error) {
//     console.error("Error requesting password reset:", error)
//     throw error
//   }
// }

// export const resetPassword = async (token, password) => {
//   try {
//     const response = await axios.post(`/users/reset-password/${token}`, { password })
//     return response.data
//   } catch (error) {
//     console.error("Error resetting password:", error)
//     throw error
//   }
// }

// // export const fetchAllUsers = async () => {
// //   try {
// //     const response = await axios.get("/users")
// //     return response.data
// //   } catch (error) {
// //     console.error("Error fetching users:", error)
// //     throw error
// //   }
// // }

// // export const fetchUserById = async (id) => {
// //   try {
// //     const response = await axios.get(`/users/${id}`)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error fetching user ${id}:`, error)
// //     throw error
// //   }
// // }

// // export const updateUser = async (id, userData) => {
// //   try {
// //     const response = await axios.put(`/users/${id}`, userData)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error updating user ${id}:`, error)
// //     throw error
// //   }
// // }

// // export const deleteUser = async (id) => {
// //   try {
// //     const response = await axios.delete(`/users/${id}`)
// //     return response.data
// //   } catch (error) {
// //     console.error(`Error deleting user ${id}:`, error)
// //     throw error
// //   }
// // }

// // Dashboard API
// export const fetchDashboardStats = async () => {
//   try {
//     // Combine requests stats and other data
//     const requestStats = await fetchRequestStats()
//     const productCategories = await fetchProductCategories()
//     const productsData = await fetchProducts()
//     const usersData = await fetchAllUsers()

//     return {
//       totalRequests: requestStats.stats.total || 0,
//       pendingRequests: requestStats.stats.byStatus.pending || 0,
//       totalProducts: productsData.products?.length || 0,
//       totalCustomers: usersData?.length || 0,
//       recentRequests: requestStats.recentRequests || [],
//       requestsByStatus: requestStats.stats.byStatus || {},
//       productCategories: productCategories || [],
//     }
//   } catch (error) {
//     console.error("Error fetching dashboard stats:", error)
//     throw error
//   }
// }

// export const fetchRecentRequests = async () => {
//   try {
//     const response = await fetchRequests({
//       limit: 5,
//       sort: "newest",
//     })
//     return response.requests || []
//   } catch (error) {
//     console.error("Error fetching recent requests:", error)
//     throw error
//   }
// }

// export const fetchAllProducts = async () => {
//   try {
//     const response = await axios.get("/products")
//     return response.data.products || []
//   } catch (error) {
//     console.error("Error fetching all products:", error)
//     throw error
//   }
// }


import axios from "axios"

// Set base URL for API requests
axios.defaults.baseURL = process.env.REACT_APP_API_URL || "http://localhost:5000/api"

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Fetch all users
export const fetchAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error fetching users";
  }
};

// Create a new user (admin or customer)
export const createUser = async (userData) => {
  try {
    const response = await api.post("/users/register", userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error creating user";
  }
};

// Update a user
export const updateUser = async (userId, userData) => {
  try {
    const response = await api.put(`/users/${userId}`, userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error updating user";
  }
};

// Delete a user
export const deleteUser = async (userId) => {
  try {
    const response = await api.delete(`/users/${userId}`);
    return response.data;
  } catch (error) {
    const message = error.response?.data?.message || "Error deleting user";
    if (error.response?.status === 401) {
      throw new Error("Unauthorized: Please log in as an admin");
    } else if (error.response?.status === 403) {
      throw new Error("Forbidden: Admin access required");
    } else if (error.response?.status === 404) {
      throw new Error("User not found");
    }
    throw new Error(message);
  }
};

// Fetch a user by ID
export const fetchUserById = async (userId) => {
  try {
    const response = await api.get(`/users/${userId}`);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Error fetching user";
  }
};

// Products API
export const fetchProducts = async (params = {}) => {
  try {
    const response = await axios.get("/products", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductCategories = async () => {
  try {
    const response = await axios.get("/products/categories");
    return response.data;
  } catch (error) {
    console.error("Error fetching product categories:", error);
    throw error;
  }
};

export const fetchProductsByCategory = async (category, params = {}) => {
  try {
    const response = await axios.get(`/products/category/${category}`, { params });
    return response.data.products;
  } catch (error) {
    console.error(`Error fetching products in category ${category}:`, error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    throw error;
  }
};

export const fetchRelatedProducts = async (category, id) => {
  try {
    const response = await axios.get(`/products/related/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching related products for ${id}:`, error);
    throw error;
  }
};

export const fetchFeaturedProducts = async () => {
  try {
    const response = await axios.get("/products/featured");
    return response.data;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    const response = await axios.post("/products", productData);
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await axios.put(`/products/${id}`, productData);
    return response.data;
  } catch (error) {
    console.error(`Error updating product ${id}:`, error);
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await axios.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting product ${id}:`, error);
    throw error;
  }
};

// Requests API
export const fetchRequests = async (params = {}) => {
  try {
    const response = await axios.get("/requests", { params });
    return response.data;
  } catch (error) {
    console.error("Error fetching requests:", error);
    throw error;
  }
};

export const fetchRequestById = async (id) => {
  try {
    const response = await axios.get(`/requests/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching request ${id}:`, error);
    throw error;
  }
};

export const fetchRequestStats = async () => {
  try {
    const response = await axios.get("/requests/stats");
    return response.data;
  } catch (error) {
    console.error("Error fetching request stats:", error);
    throw error;
  }
};

export const submitRequest = async (requestData) => {
  try {
    const response = await axios.post("/requests", requestData);
    return response.data;
  } catch (error) {
    console.error("Error submitting request:", error);
    throw error;
  }
};

export const updateRequestStatus = async (id, status, note) => {
  try {
    const response = await axios.put(`/requests/${id}/status`, { status, note });
    return response.data;
  } catch (error) {
    console.error(`Error updating request ${id} status:`, error);
    throw error;
  }
};

export const updateRequest = async (id, requestData) => {
  try {
    const response = await axios.put(`/requests/${id}`, requestData);
    return response.data;
  } catch (error) {
    console.error(`Error updating request ${id}:`, error);
    throw error;
  }
};

export const cancelRequest = async (id, reason) => {
  try {
    const response = await axios.put(`/requests/${id}/cancel`, { reason });
    return response.data;
  } catch (error) {
    console.error(`Error cancelling request ${id}:`, error);
    throw error;
  }
};

export const deleteRequest = async (id) => {
  try {
    const response = await axios.delete(`/requests/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting request ${id}:`, error);
    throw error;
  }
};

// User API
export const registerUser = async (userData) => {
  try {
    const response = await axios.post("/users/register", userData);
    return response.data;
  } catch (error) {
    console.error("Error registering user:", error);
    throw error;
  }
};

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post("/users/login", credentials);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

export const fetchUserProfile = async () => {
  try {
    const response = await axios.get("/users/me");
    return response.data;
  } catch (error) {
    console.error("Error fetching user profile:", error);
    throw error;
  }
};

export const updateUserProfile = async (userData) => {
  try {
    const response = await axios.put("/users/me", userData);
    return response.data;
  } catch (error) {
    console.error("Error updating user profile:", error);
    throw error;
  }
};

export const changePassword = async (passwordData) => {
  try {
    const response = await axios.put("/users/password", passwordData);
    return response.data;
  } catch (error) {
    console.error("Error changing password:", error);
    throw error;
  }
};

export const forgotPassword = async (email) => {
  try {
    const response = await axios.post("/users/forgot-password", { email });
    return response.data;
  } catch (error) {
    console.error("Error requesting password reset:", error);
    throw error;
  }
};

export const resetPassword = async (token, password) => {
  try {
    const response = await axios.post(`/users/reset-password/${token}`, { password });
    return response.data;
  } catch (error) {
    console.error("Error resetting password:", error);
    throw error;
  }
};

// Dashboard API
export const fetchDashboardStats = async () => {
  try {
    // Combine requests stats and other data
    const requestStats = await fetchRequestStats();
    const productCategories = await fetchProductCategories();
    const productsData = await fetchProducts();
    const usersData = await fetchAllUsers();

    return {
      totalRequests: requestStats.stats.total || 0,
      pendingRequests: requestStats.stats.byStatus.pending || 0,
      totalProducts: productsData.products?.length || 0,
      totalCustomers: usersData?.length || 0,
      recentRequests: requestStats.recentRequests || [],
      requestsByStatus: requestStats.stats.byStatus || {},
      productCategories: productCategories || [],
    };
  } catch (error) {
    console.error("Error fetching dashboard stats:", error);
    throw error;
  }
};

export const fetchRecentRequests = async () => {
  try {
    const response = await fetchRequests({
      limit: 5,
      sort: "newest",
    });
    return response.requests || [];
  } catch (error) {
    console.error("Error fetching recent requests:", error);
    throw error;
  }
};

export const fetchAllProducts = async () => {
  try {
    const response = await axios.get("/products");
    return response.data.products || [];
  } catch (error) {
    console.error("Error fetching all products:", error);
    throw error;
  }
};