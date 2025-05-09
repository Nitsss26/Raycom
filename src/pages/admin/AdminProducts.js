// // "use client";
// // import { useState, useEffect } from "react";
// // import {
// //     Plus,
// //     Search,
// //     Edit,
// //     Trash2,
// //     Filter,
// //     ChevronLeft,
// //     ChevronRight,
// //     X,
// // } from "lucide-react";
// // import AdminLayout from "../../components/admin/AdminLayout";
// // import axios from "axios";

// // // Configure axios base URL
// // axios.defaults.baseURL = "https://raycom-backend.onrender.com/api";

// // // Define ProductForm as a separate component
// // const ProductForm = ({
// //     product,
// //     setProduct,
// //     onSubmit,
// //     isEdit,
// //     removeImageField,
// //     removeSpecificationField,
// //     addImageField,
// //     addSpecificationField,
// //     setShowEditModal,
// //     setShowAddModal,
// // }) => {
// //     const handleInputChange = (field, value) => {
// //         setProduct((prev) => ({ ...prev, [field]: value }));
// //     };

// //     const handleImageChange = (index, value) => {
// //         setProduct((prev) => {
// //             const newImages = [...prev.images];
// //             newImages[index] = value;
// //             return { ...prev, images: newImages };
// //         });
// //     };

// //     const handleSpecChange = (index, field, value) => {
// //         setProduct((prev) => {
// //             const newSpecs = [...prev.specifications];
// //             newSpecs[index] = { ...newSpecs[index], [field]: value };
// //             return { ...prev, specifications: newSpecs };
// //         });
// //     };

// //     return (
// //         <div className="space-y-6">
// //             {/* General Information */}
// //             <div className="bg-white shadow sm:rounded-lg">
// //                 <div className="px-4 py-5 sm:p-6">
// //                     <h3 className="text-lg font-medium text-gray-900">General Information</h3>
// //                     <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Name</label>
// //                             <input
// //                                 type="text"
// //                                 value={product.name}
// //                                 onChange={(e) => handleInputChange("name", e.target.value)}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                                 required
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Model</label>
// //                             <input
// //                                 type="text"
// //                                 value={product.model}
// //                                 onChange={(e) => handleInputChange("model", e.target.value)}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                                 required
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Category</label>
// //                             <input
// //                                 type="text"
// //                                 value={product.category}
// //                                 onChange={(e) => handleInputChange("category", e.target.value)}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                                 required
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Price</label>
// //                             <input
// //                                 type="number"
// //                                 value={product.price}
// //                                 onChange={(e) => handleInputChange("price", e.target.value)}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
// //                             <input
// //                                 type="number"
// //                                 value={product.stockQuantity}
// //                                 onChange={(e) => handleInputChange("stockQuantity", e.target.value)}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                                 min="0"
// //                             />
// //                         </div>
// //                         <div className="flex items-center">
// //                             <input
// //                                 type="checkbox"
// //                                 checked={product.inStock}
// //                                 onChange={(e) => handleInputChange("inStock", e.target.checked)}
// //                                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// //                             />
// //                             <label className="ml-2 text-sm text-gray-900">In Stock</label>
// //                         </div>
// //                         <div className="flex items-center">
// //                             <input
// //                                 type="checkbox"
// //                                 checked={product.featured}
// //                                 onChange={(e) => handleInputChange("featured", e.target.checked)}
// //                                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// //                             />
// //                             <label className="ml-2 text-sm text-gray-900">Featured</label>
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Technical Specifications */}
// //             <div className="bg-white shadow sm:rounded-lg">
// //                 <div className="px-4 py-5 sm:p-6">
// //                     <h3 className="text-lg font-medium text-gray-900">Technical Specifications</h3>
// //                     <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Frequency</label>
// //                             <input
// //                                 type="text"
// //                                 value={product.frequency}
// //                                 onChange={(e) => handleInputChange("frequency", e.target.value)}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Power</label>
// //                             <input
// //                                 type="text"
// //                                 value={product.power}
// //                                 onChange={(e) => handleInputChange("power", e.target.value)}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">VSWR</label>
// //                             <input
// //                                 type="text"
// //                                 value={product.vswr}
// //                                 onChange={(e) => handleInputChange("vswr", e.target.value)}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Connector</label>
// //                             <input
// //                                 type="text"
// //                                 value={product.connector}
// //                                 onChange={(e) => handleInputChange("connector", e.target.value)}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Peak Power</label>
// //                             <input
// //                                 type="text"
// //                                 value={product.peakPower}
// //                                 onChange={(e) => handleInputChange("peakPower", e.target.value)}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                             />
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Description and Applications */}
// //             <div className="bg-white shadow sm:rounded-lg">
// //                 <div className="px-4 py-5 sm:p-6">
// //                     <h3 className="text-lg font-medium text-gray-900">Description and Applications</h3>
// //                     <div className="mt-5 space-y-4">
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Description</label>
// //                             <textarea
// //                                 value={product.description}
// //                                 onChange={(e) => handleInputChange("description", e.target.value)}
// //                                 rows={4}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                             />
// //                         </div>
// //                         <div>
// //                             <label className="block text-sm font-medium text-gray-700">Applications</label>
// //                             <textarea
// //                                 value={product.applications}
// //                                 onChange={(e) => handleInputChange("applications", e.target.value)}
// //                                 rows={4}
// //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                             />
// //                         </div>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Images */}
// //             <div className="bg-white shadow sm:rounded-lg">
// //                 <div className="px-4 py-5 sm:p-6">
// //                     <h3 className="text-lg font-medium text-gray-900">Images</h3>
// //                     <div className="mt-5 space-y-4">
// //                         {product.images.map((image, index) => (
// //                             <div key={index} className="flex items-center space-x-2">
// //                                 <input
// //                                     type="text"
// //                                     value={image}
// //                                     onChange={(e) => handleImageChange(index, e.target.value)}
// //                                     className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                                     placeholder="Image URL"
// //                                 />
// //                                 <button
// //                                     type="button"
// //                                     onClick={() => removeImageField(index, isEdit)}
// //                                     className="text-red-600 hover:text-red-900"
// //                                 >
// //                                     <X className="h-5 w-5" />
// //                                 </button>
// //                             </div>
// //                         ))}
// //                         <button
// //                             type="button"
// //                             onClick={() => addImageField(isEdit)}
// //                             className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
// //                         >
// //                             Add Image
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Datasheet */}
// //             <div className="bg-white shadow sm:rounded-lg">
// //                 <div className="px-4 py-5 sm:p-6">
// //                     <h3 className="text-lg font-medium text-gray-900">Datasheet</h3>
// //                     <div className="mt-5">
// //                         <input
// //                             type="text"
// //                             value={product.datasheet || ""}
// //                             onChange={(e) => handleInputChange("datasheet", e.target.value)}
// //                             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                             placeholder="Datasheet URL"
// //                         />
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Specifications */}
// //             <div className="bg-white shadow sm:rounded-lg">
// //                 <div className="px-4 py-5 sm:p-6">
// //                     <h3 className="text-lg font-medium text-gray-900">Specifications</h3>
// //                     <div className="mt-5 space-y-4">
// //                         {product.specifications.map((spec, index) => (
// //                             <div key={index} className="flex items-center space-x-2">
// //                                 <input
// //                                     type="text"
// //                                     placeholder="Name"
// //                                     value={spec.name}
// //                                     onChange={(e) => handleSpecChange(index, "name", e.target.value)}
// //                                     className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                                 />
// //                                 <input
// //                                     type="text"
// //                                     placeholder="Value"
// //                                     value={spec.value}
// //                                     onChange={(e) => handleSpecChange(index, "value", e.target.value)}
// //                                     className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// //                                 />
// //                                 <button
// //                                     type="button"
// //                                     onClick={() => removeSpecificationField(index, isEdit)}
// //                                     className="text-red-600 hover:text-red-900"
// //                                 >
// //                                     <X className="h-5 w-5" />
// //                                 </button>
// //                             </div>
// //                         ))}
// //                         <button
// //                             type="button"
// //                             onClick={() => addSpecificationField(isEdit)}
// //                             className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
// //                         >
// //                             Add Specification
// //                         </button>
// //                     </div>
// //                 </div>
// //             </div>

// //             {/* Form Actions */}
// //             <div className="flex justify-end space-x-3">
// //                 <button
// //                     type="button"
// //                     onClick={onSubmit}
// //                     className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// //                 >
// //                     {isEdit ? "Update Product" : "Add Product"}
// //                 </button>
// //                 <button
// //                     type="button"
// //                     onClick={() => (isEdit ? setShowEditModal(false) : setShowAddModal(false))}
// //                     className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// //                 >
// //                     Cancel
// //                 </button>
// //             </div>
// //         </div>
// //     );
// // };

// // const AdminProducts = () => {
// //     const [products, setProducts] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [searchQuery, setSearchQuery] = useState("");
// //     const [categoryFilter, setCategoryFilter] = useState("all");
// //     const [currentPage, setCurrentPage] = useState(1);
// //     const [itemsPerPage] = useState(10);
// //     const [showAddModal, setShowAddModal] = useState(false);
// //     const [showEditModal, setShowEditModal] = useState(false);
// //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// //     const [selectedProduct, setSelectedProduct] = useState(null);
// //     const [newProduct, setNewProduct] = useState({
// //         name: "",
// //         model: "",
// //         category: "",
// //         price: "",
// //         frequency: "",
// //         power: "",
// //         vswr: "",
// //         connector: "",
// //         peakPower: "",
// //         inStock: true,
// //         stockQuantity: 0,
// //         description: "",
// //         applications: "",
// //         images: [""],
// //         datasheet: "",
// //         specifications: [{ name: "", value: "" }],
// //         featured: false,
// //     });
// //     const [editProduct, setEditProduct] = useState(null);

// //     // Fetch products on mount
// //     useEffect(() => {
// //         const loadProducts = async () => {
// //             setLoading(true);
// //             try {
// //                 const response = await axios.get("/products");
// //                 const productsData = Array.isArray(response.data)
// //                     ? response.data
// //                     : response.data.products || [];
// //                 setProducts(productsData);
// //             } catch (err) {
// //                 setError("Failed to load products. Please try again later.");
// //                 console.error("Error fetching products:", err);
// //                 setProducts([]);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
// //         loadProducts();
// //     }, []);

// //     // Filter products with type checking
// //     const filteredProducts = Array.isArray(products)
// //         ? products.filter((product) => {
// //             if (!product) return false;
// //             const matchesSearch =
// //                 !searchQuery ||
// //                 (product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //                     product.model?.toLowerCase().includes(searchQuery.toLowerCase()));
// //             const matchesCategory =
// //                 categoryFilter === "all" || product.category === categoryFilter;
// //             return matchesSearch && matchesCategory;
// //         })
// //         : [];

// //     // Get unique categories
// //     const categories = Array.isArray(products)
// //         ? [
// //             "all",
// //             ...new Set(products.filter((p) => p && p.category).map((product) => product.category)),
// //         ]
// //         : ["all"];

// //     // Pagination
// //     const indexOfLastItem = currentPage * itemsPerPage;
// //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// //     const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
// //     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

// //     const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //     // CRUD Handlers
// //     const handleAddProduct = async () => {
// //         try {
// //             const response = await axios.post("/products", newProduct, {
// //                 headers: { "Content-Type": "application/json" },
// //             });
// //             setProducts([...products, response.data]);
// //             setShowAddModal(false);
// //             setNewProduct({
// //                 name: "",
// //                 model: "",
// //                 category: "",
// //                 price: "",
// //                 frequency: "",
// //                 power: "",
// //                 vswr: "",
// //                 connector: "",
// //                 peakPower: "",
// //                 inStock: true,
// //                 stockQuantity: 0,
// //                 description: "",
// //                 applications: "",
// //                 images: [""],
// //                 datasheet: "",
// //                 specifications: [{ name: "", value: "" }],
// //                 featured: false,
// //             });
// //         } catch (error) {
// //             console.error("Error adding product:", error);
// //             setError(
// //                 error.response?.data?.message || "Failed to add product. Please try again."
// //             );
// //         }
// //     };

// //     const handleEditProduct = async () => {
// //         if (!editProduct?._id) {
// //             setError("No product selected for update.");
// //             return;
// //         }
// //         try {
// //             const response = await axios.put(`/products/${editProduct._id}`, editProduct, {
// //                 headers: { "Content-Type": "application/json" },
// //             });
// //             setProducts(
// //                 products.map((p) => (p._id === editProduct._id ? response.data : p))
// //             );
// //             setShowEditModal(false);
// //             setEditProduct(null);
// //         } catch (error) {
// //             console.error("Error updating product:", error);
// //             setError(
// //                 error.response?.data?.message || "Failed to update product. Please try again."
// //             );
// //         }
// //     };

// //     const handleDeleteClick = (product) => {
// //         setSelectedProduct(product);
// //         setShowDeleteModal(true);
// //     };

// //     const confirmDelete = async () => {
// //         if (!selectedProduct) return;
// //         try {
// //             await axios.delete(`/products/${selectedProduct._id}`);
// //             setProducts(products.filter((p) => p._id !== selectedProduct._id));
// //             setShowDeleteModal(false);
// //             setSelectedProduct(null);
// //         } catch (err) {
// //             console.error("Error deleting product:", err);
// //             setError(
// //                 err.response?.data?.message || "Failed to delete product. Please try again."
// //             );
// //         }
// //     };

// //     // Form Helpers
// //     const openEditModal = (product) => {
// //         setEditProduct({
// //             ...product,
// //             images: product.images?.length ? [...product.images] : [""],
// //             specifications: product.specifications?.length
// //                 ? [...product.specifications]
// //                 : [{ name: "", value: "" }],
// //             price: product.price || "",
// //             stockQuantity: product.stockQuantity || 0,
// //             datasheet: product.datasheet || "",
// //         });
// //         setShowEditModal(true);
// //     };

// //     const addImageField = (isEdit) => {
// //         if (isEdit) {
// //             setEditProduct((prev) => ({ ...prev, images: [...prev.images, ""] }));
// //         } else {
// //             setNewProduct((prev) => ({ ...prev, images: [...prev.images, ""] }));
// //         }
// //     };

// //     const removeImageField = (index, isEdit) => {
// //         if (isEdit) {
// //             setEditProduct((prev) => ({
// //                 ...prev,
// //                 images: prev.images.filter((_, i) => i !== index),
// //             }));
// //         } else {
// //             setNewProduct((prev) => ({
// //                 ...prev,
// //                 images: prev.images.filter((_, i) => i !== index),
// //             }));
// //         }
// //     };

// //     const addSpecificationField = (isEdit) => {
// //         if (isEdit) {
// //             setEditProduct((prev) => ({
// //                 ...prev,
// //                 specifications: [...prev.specifications, { name: "", value: "" }],
// //             }));
// //         } else {
// //             setNewProduct((prev) => ({
// //                 ...prev,
// //                 specifications: [...prev.specifications, { name: "", value: "" }],
// //             }));
// //         }
// //     };

// //     const removeSpecificationField = (index, isEdit) => {
// //         if (isEdit) {
// //             setEditProduct((prev) => ({
// //                 ...prev,
// //                 specifications: prev.specifications.filter((_, i) => i !== index),
// //             }));
// //         } else {
// //             setNewProduct((prev) => ({
// //                 ...prev,
// //                 specifications: prev.specifications.filter((_, i) => i !== index),
// //             }));
// //         }
// //     };

// //     return (
// //         <AdminLayout>
// //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// //                 {/* Header */}
// //                 <div className="sm:flex sm:items-center sm:justify-between">
// //                     <div>
// //                         <p className="mt-2 text-3xl text-gray-900">Manage your product inventory</p>
// //                     </div>
// //                     <div className="mt-4 sm:mt-0">
// //                         <button
// //                             type="button"
// //                             className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// //                             onClick={() => setShowAddModal(true)}
// //                         >
// //                             <Plus className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
// //                             Add Product
// //                         </button>
// //                     </div>
// //                 </div>

// //                 {/* Error Display */}
// //                 {error && (
// //                     <div className="mt-4 bg-red-100 text-red-700 p-4 rounded-md">{error}</div>
// //                 )}

// //                 {/* Search and Filter */}
// //                 <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// //                             <Search className="h-5 w-5 text-red-400" aria-hidden="true" />
// //                         </div>
// //                         <input
// //                             type="text"
// //                             value={searchQuery}
// //                             onChange={(e) => setSearchQuery(e.target.value)}
// //                             className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
// //                             placeholder="Search products..."
// //                         />
// //                     </div>
// //                     <div className="relative max-w-xs w-full">
// //                         <select
// //                             value={categoryFilter}
// //                             onChange={(e) => setCategoryFilter(e.target.value)}
// //                             className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                         >
// //                             {categories.map((category) => (
// //                                 <option key={category} value={category}>
// //                                     {category === "all" ? "All Categories" : category}
// //                                 </option>
// //                             ))}
// //                         </select>
// //                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// //                             <Filter className="h-4 w-4" />
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Products Table */}
// //                 <div className="mt-8 flex flex-col">
// //                     <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// //                             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// //                                 {loading ? (
// //                                     <div className="flex justify-center items-center h-64 bg-white">
// //                                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
// //                                     </div>
// //                                 ) : error ? (
// //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// //                                 ) : currentItems.length === 0 ? (
// //                                     <div className="text-center py-12 bg-white">
// //                                         <p className="text-gray-500">No products found.</p>
// //                                     </div>
// //                                 ) : (
// //                                     <table className="min-w-full divide-y divide-gray-300">
// //                                         <thead className="bg-gray-50">
// //                                             <tr>
// //                                                 <th
// //                                                     scope="col"
// //                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// //                                                 >
// //                                                     Product
// //                                                 </th>
// //                                                 <th
// //                                                     scope="col"
// //                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                                                 >
// //                                                     Category
// //                                                 </th>
// //                                                 <th
// //                                                     scope="col"
// //                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                                                 >
// //                                                     Model
// //                                                 </th>
// //                                                 <th
// //                                                     scope="col"
// //                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                                                 >
// //                                                     Price
// //                                                 </th>
// //                                                 <th
// //                                                     scope="col"
// //                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                                                 >
// //                                                     Stock Quantity
// //                                                 </th>
// //                                                 <th
// //                                                     scope="col"
// //                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// //                                                 >
// //                                                     Status
// //                                                 </th>
// //                                                 <th
// //                                                     scope="col"
// //                                                     className="relative py-3.5 pl-3 pr-4 sm:pr-6"
// //                                                 >
// //                                                     <span className="sr-only">Actions</span>
// //                                                 </th>
// //                                             </tr>
// //                                         </thead>
// //                                         <tbody className="divide-y divide-gray-200 bg-white">
// //                                             {currentItems.map((product) => (
// //                                                 <tr key={product._id}>
// //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// //                                                         <div className="flex items-center">
// //                                                             <div className="h-10 w-10 flex-shrink-0">
// //                                                                 <img
// //                                                                     className="h-10 w-10 rounded-full object-cover"
// //                                                                     src={
// //                                                                         product.images[0] ||
// //                                                                         `/placeholder.svg?height=40&width=40`
// //                                                                     }
// //                                                                     alt={product.name}
// //                                                                 />
// //                                                             </div>
// //                                                             <div className="ml-4">
// //                                                                 <div className="font-medium text-gray-900">
// //                                                                     {product.name}
// //                                                                 </div>
// //                                                             </div>
// //                                                         </div>
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
// //                                                             {product.category}
// //                                                         </span>
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         {product.model}
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         {product.price
// //                                                             ? `$${parseFloat(product.price).toFixed(2)}`
// //                                                             : "Request Quote"}
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         {product.stockQuantity}
// //                                                     </td>
// //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// //                                                         <span
// //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${product.inStock
// //                                                                 ? "bg-green-100 text-green-800"
// //                                                                 : "bg-yellow-100 text-yellow-800"
// //                                                                 }`}
// //                                                         >
// //                                                             {product.inStock ? "In Stock" : "Made to Order"}
// //                                                         </span>
// //                                                     </td>
// //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// //                                                         <div className="flex items-center justify-end space-x-3">
// //                                                             <button
// //                                                                 type="button"
// //                                                                 className="text-indigo-600 hover:text-indigo-900"
// //                                                                 onClick={() => openEditModal(product)}
// //                                                             >
// //                                                                 <Edit className="h-5 w-5" />
// //                                                             </button>
// //                                                             <button
// //                                                                 type="button"
// //                                                                 className="text-red-600 hover:text-red-900"
// //                                                                 onClick={() => handleDeleteClick(product)}
// //                                                             >
// //                                                                 <Trash2 className="h-5 w-5" />
// //                                                             </button>
// //                                                         </div>
// //                                                     </td>
// //                                                 </tr>
// //                                             ))}
// //                                         </tbody>
// //                                     </table>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 {/* Pagination */}
// //                 {!loading && !error && totalPages > 1 && (
// //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// //                         <div className="flex flex-1 justify-between sm:hidden">
// //                             <button
// //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// //                                 disabled={currentPage === 1}
// //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// //                             >
// //                                 Previous
// //                             </button>
// //                             <button
// //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// //                                 disabled={currentPage === totalPages}
// //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// //                             >
// //                                 Next
// //                             </button>
// //                         </div>
// //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// //                             <div>
// //                                 <p className="text-sm text-gray-700">
// //                                     Showing{" "}
// //                                     <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// //                                     <span className="font-medium">
// //                                         {Math.min(indexOfLastItem, filteredProducts.length)}
// //                                     </span>{" "}
// //                                     of <span className="font-medium">{filteredProducts.length}</span>{" "}
// //                                     results
// //                                 </p>
// //                             </div>
// //                             <div>
// //                                 <nav
// //                                     className="isolate inline-flex -space-x-px rounded-md shadow-sm"
// //                                     aria-label="Pagination"
// //                                 >
// //                                     <button
// //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// //                                         disabled={currentPage === 1}
// //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// //                                     >
// //                                         <span className="sr-only">Previous</span>
// //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// //                                     </button>
// //                                     {[...Array(totalPages).keys()].map((number) => (
// //                                         <button
// //                                             key={number + 1}
// //                                             onClick={() => paginate(number + 1)}
// //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// //                                                 }`}
// //                                         >
// //                                             {number + 1}
// //                                         </button>
// //                                     ))}
// //                                     <button
// //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// //                                         disabled={currentPage === totalPages}
// //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// //                                     >
// //                                         <span className="sr-only">Next</span>
// //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// //                                     </button>
// //                                 </nav>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Add Product Modal */}
// //                 {showAddModal && (
// //                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
// //                         <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
// //                             <div className="px-6 py-5">
// //                                 <div className="flex justify-between items-center">
// //                                     <h3 className="text-lg font-medium text-gray-900">Add New Product</h3>
// //                                     <button
// //                                         type="button"
// //                                         onClick={() => setShowAddModal(false)}
// //                                         className="text-gray-400 hover:text-gray-500"
// //                                     >
// //                                         <X className="h-6 w-6" />
// //                                     </button>
// //                                 </div>
// //                                 <div className="mt-5">
// //                                     <ProductForm
// //                                         product={newProduct}
// //                                         setProduct={setNewProduct}
// //                                         onSubmit={handleAddProduct}
// //                                         isEdit={false}
// //                                         removeImageField={removeImageField}
// //                                         removeSpecificationField={removeSpecificationField}
// //                                         addImageField={addImageField}
// //                                         addSpecificationField={addSpecificationField}
// //                                         setShowAddModal={setShowAddModal}
// //                                     />
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Edit Product Modal */}
// //                 {showEditModal && (
// //                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
// //                         <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
// //                             <div className="px-6 py-5">
// //                                 <div className="flex justify-between items-center">
// //                                     <h3 className="text-lg font-medium text-gray-900">Edit Product</h3>
// //                                     <button
// //                                         type="button"
// //                                         onClick={() => setShowEditModal(false)}
// //                                         className="text-gray-400 hover:text-gray-500"
// //                                     >
// //                                         <X className="h-6 w-6" />
// //                                     </button>
// //                                 </div>
// //                                 <div className="mt-5">
// //                                     <ProductForm
// //                                         product={editProduct}
// //                                         setProduct={setEditProduct}
// //                                         onSubmit={handleEditProduct}
// //                                         isEdit={true}
// //                                         removeImageField={removeImageField}
// //                                         removeSpecificationField={removeSpecificationField}
// //                                         addImageField={addImageField}
// //                                         addSpecificationField={addSpecificationField}
// //                                         setShowEditModal={setShowEditModal}
// //                                     />
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 )}

// //                 {/* Delete Confirmation Modal */}
// //                 {showDeleteModal && (
// //                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
// //                         <div className="bg-white rounded-lg shadow-xl max-w-lg w-full">
// //                             <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// //                                 <div className="sm:flex sm:items-start">
// //                                     <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// //                                         <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// //                                     </div>
// //                                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// //                                         <h3 className="text-lg leading-6 font-medium text-gray-900">
// //                                             Delete Product
// //                                         </h3>
// //                                         <div className="mt-2">
// //                                             <p className="text-sm text-gray-500">
// //                                                 Are you sure you want to delete "{selectedProduct?.name}"?
// //                                                 This action cannot be undone.
// //                                             </p>
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                             <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// //                                 <button
// //                                     type="button"
// //                                     className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// //                                     onClick={confirmDelete}
// //                                 >
// //                                     Delete
// //                                 </button>
// //                                 <button
// //                                     type="button"
// //                                     className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// //                                     onClick={() => setShowDeleteModal(false)}
// //                                 >
// //                                     Cancel
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 )}
// //             </div>
// //         </AdminLayout>
// //     );
// // };

// // export default AdminProducts;


// // // "use client";
// // // import { useState, useEffect } from "react";
// // // import {
// // //     Plus,
// // //     Search,
// // //     Edit,
// // //     Trash2,
// // //     Filter,
// // //     ChevronLeft,
// // //     ChevronRight,
// // //     X,
// // // } from "lucide-react";
// // // import AdminLayout from "../../components/admin/AdminLayout";
// // // import axios from "axios";

// // // // Configure axios base URL
// // // axios.defaults.baseURL = "https://raycom-backend.onrender.com/api";

// // // // Define ProductForm as a separate component
// // // const ProductForm = ({
// // //     product,
// // //     setProduct,
// // //     onSubmit,
// // //     isEdit,
// // //     removeImageField,
// // //     removeSpecificationField,
// // //     addImageField,
// // //     addSpecificationField,
// // //     setShowEditModal,
// // //     setShowAddModal,
// // // }) => {
// // //     const handleInputChange = (field, value) => {
// // //         setProduct((prev) => ({ ...prev, [field]: value }));
// // //     };

// // //     const handleImageChange = (index, value) => {
// // //         setProduct((prev) => {
// // //             const newImages = [...prev.images];
// // //             newImages[index] = value;
// // //             return { ...prev, images: newImages };
// // //         });
// // //     };

// // //     const handleSpecChange = (index, field, value) => {
// // //         setProduct((prev) => {
// // //             const newSpecs = [...prev.specifications];
// // //             newSpecs[index] = { ...newSpecs[index], [field]: value };
// // //             return { ...prev, specifications: newSpecs };
// // //         });
// // //     };

// // //     return (
// // //         <div className="space-y-6">
// // //             {/* General Information */}
// // //             <div className="bg-white shadow sm:rounded-lg">
// // //                 <div className="px-4 py-5 sm:p-6">
// // //                     <h3 className="text-lg font-medium text-gray-900">General Information</h3>
// // //                     <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">Name</label>
// // //                             <input
// // //                                 type="text"
// // //                                 value={product.name}
// // //                                 onChange={(e) => handleInputChange("name", e.target.value)}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                                 required
// // //                             />
// // //                         </div>
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">Model</label>
// // //                             <input
// // //                                 type="text"
// // //                                 value={product.model}
// // //                                 onChange={(e) => handleInputChange("model", e.target.value)}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                                 required
// // //                             />
// // //                         </div>
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">Category</label>
// // //                             <input
// // //                                 type="text"
// // //                                 value={product.category}
// // //                                 onChange={(e) => handleInputChange("category", e.target.value)}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                                 required
// // //                             />
// // //                         </div>
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">Price</label>
// // //                             <input
// // //                                 type="number"
// // //                                 value={product.price}
// // //                                 onChange={(e) => handleInputChange("price", e.target.value)}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                             />
// // //                         </div>
// // //                         <div className="flex items-center">
// // //                             <input
// // //                                 type="checkbox"
// // //                                 checked={product.inStock}
// // //                                 onChange={(e) => handleInputChange("inStock", e.target.checked)}
// // //                                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// // //                             />
// // //                             <label className="ml-2 text-sm text-gray-900">In Stock</label>
// // //                         </div>
// // //                         <div className="flex items-center">
// // //                             <input
// // //                                 type="checkbox"
// // //                                 checked={product.featured}
// // //                                 onChange={(e) => handleInputChange("featured", e.target.checked)}
// // //                                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
// // //                             />
// // //                             <label className="ml-2 text-sm text-gray-900">Featured</label>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Technical Specifications */}
// // //             <div className="bg-white shadow sm:rounded-lg">
// // //                 <div className="px-4 py-5 sm:p-6">
// // //                     <h3 className="text-lg font-medium text-gray-900">Technical Specifications</h3>
// // //                     <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">Frequency</label>
// // //                             <input
// // //                                 type="text"
// // //                                 value={product.frequency}
// // //                                 onChange={(e) => handleInputChange("frequency", e.target.value)}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                             />
// // //                         </div>
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">Power</label>
// // //                             <input
// // //                                 type="text"
// // //                                 value={product.power}
// // //                                 onChange={(e) => handleInputChange("power", e.target.value)}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                             />
// // //                         </div>
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">VSWR</label>
// // //                             <input
// // //                                 type="text"
// // //                                 value={product.vswr}
// // //                                 onChange={(e) => handleInputChange("vswr", e.target.value)}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                             />
// // //                         </div>
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">Connector</label>
// // //                             <input
// // //                                 type="text"
// // //                                 value={product.connector}
// // //                                 onChange={(e) => handleInputChange("connector", e.target.value)}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                             />
// // //                         </div>
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">Peak Power</label>
// // //                             <input
// // //                                 type="text"
// // //                                 value={product.peakPower}
// // //                                 onChange={(e) => handleInputChange("peakPower", e.target.value)}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                             />
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Description and Applications */}
// // //             <div className="bg-white shadow sm:rounded-lg">
// // //                 <div className="px-4 py-5 sm:p-6">
// // //                     <h3 className="text-lg font-medium text-gray-900">Description and Applications</h3>
// // //                     <div className="mt-5 space-y-4">
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">Description</label>
// // //                             <textarea
// // //                                 value={product.description}
// // //                                 onChange={(e) => handleInputChange("description", e.target.value)}
// // //                                 rows={4}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                             />
// // //                         </div>
// // //                         <div>
// // //                             <label className="block text-sm font-medium text-gray-700">Applications</label>
// // //                             <textarea
// // //                                 value={product.applications}
// // //                                 onChange={(e) => handleInputChange("applications", e.target.value)}
// // //                                 rows={4}
// // //                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                             />
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Images */}
// // //             <div className="bg-white shadow sm:rounded-lg">
// // //                 <div className="px-4 py-5 sm:p-6">
// // //                     <h3 className="text-lg font-medium text-gray-900">Images</h3>
// // //                     <div className="mt-5 space-y-4">
// // //                         {product.images.map((image, index) => (
// // //                             <div key={index} className="flex items-center space-x-2">
// // //                                 <input
// // //                                     type="text"
// // //                                     value={image}
// // //                                     onChange={(e) => handleImageChange(index, e.target.value)}
// // //                                     className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                                     placeholder="Image URL"
// // //                                 />
// // //                                 <button
// // //                                     type="button"
// // //                                     onClick={() => removeImageField(index, isEdit)}
// // //                                     className="text-red-600 hover:text-red-900"
// // //                                 >
// // //                                     <X className="h-5 w-5" />
// // //                                 </button>
// // //                             </div>
// // //                         ))}
// // //                         <button
// // //                             type="button"
// // //                             onClick={() => addImageField(isEdit)}
// // //                             className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
// // //                         >
// // //                             Add Image
// // //                         </button>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Datasheet */}
// // //             <div className="bg-white shadow sm:rounded-lg">
// // //                 <div className="px-4 py-5 sm:p-6">
// // //                     <h3 className="text-lg font-medium text-gray-900">Datasheet</h3>
// // //                     <div className="mt-5">
// // //                         <input
// // //                             type="text"
// // //                             value={product.datasheet || ""}
// // //                             onChange={(e) => handleInputChange("datasheet", e.target.value)}
// // //                             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                             placeholder="Datasheet URL"
// // //                         />
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Specifications */}
// // //             <div className="bg-white shadow sm:rounded-lg">
// // //                 <div className="px-4 py-5 sm:p-6">
// // //                     <h3 className="text-lg font-medium text-gray-900">Specifications</h3>
// // //                     <div className="mt-5 space-y-4">
// // //                         {product.specifications.map((spec, index) => (
// // //                             <div key={index} className="flex items-center space-x-2">
// // //                                 <input
// // //                                     type="text"
// // //                                     placeholder="Name"
// // //                                     value={spec.name}
// // //                                     onChange={(e) => handleSpecChange(index, "name", e.target.value)}
// // //                                     className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                                 />
// // //                                 <input
// // //                                     type="text"
// // //                                     placeholder="Value"
// // //                                     value={spec.value}
// // //                                     onChange={(e) => handleSpecChange(index, "value", e.target.value)}
// // //                                     className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
// // //                                 />
// // //                                 <button
// // //                                     type="button"
// // //                                     onClick={() => removeSpecificationField(index, isEdit)}
// // //                                     className="text-red-600 hover:text-red-900"
// // //                                 >
// // //                                     <X className="h-5 w-5" />
// // //                                 </button>
// // //                             </div>
// // //                         ))}
// // //                         <button
// // //                             type="button"
// // //                             onClick={() => addSpecificationField(isEdit)}
// // //                             className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
// // //                         >
// // //                             Add Specification
// // //                         </button>
// // //                     </div>
// // //                 </div>
// // //             </div>

// // //             {/* Form Actions */}
// // //             <div className="flex justify-end space-x-3">
// // //                 <button
// // //                     type="button"
// // //                     onClick={onSubmit}
// // //                     className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// // //                 >
// // //                     {isEdit ? "Update Product" : "Add Product"}
// // //                 </button>
// // //                 <button
// // //                     type="button"
// // //                     onClick={() => (isEdit ? setShowEditModal(false) : setShowAddModal(false))}
// // //                     className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// // //                 >
// // //                     Cancel
// // //                 </button>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // const AdminProducts = () => {
// // //     const [products, setProducts] = useState([]);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);
// // //     const [searchQuery, setSearchQuery] = useState("");
// // //     const [categoryFilter, setCategoryFilter] = useState("all");
// // //     const [currentPage, setCurrentPage] = useState(1);
// // //     const [itemsPerPage] = useState(10);
// // //     const [showAddModal, setShowAddModal] = useState(false);
// // //     const [showEditModal, setShowEditModal] = useState(false);
// // //     const [showDeleteModal, setShowDeleteModal] = useState(false);
// // //     const [selectedProduct, setSelectedProduct] = useState(null);
// // //     const [newProduct, setNewProduct] = useState({
// // //         name: "",
// // //         model: "",
// // //         category: "",
// // //         price: "",
// // //         frequency: "",
// // //         power: "",
// // //         vswr: "",
// // //         connector: "",
// // //         peakPower: "",
// // //         inStock: true,
// // //         description: "",
// // //         applications: "",
// // //         images: [""],
// // //         datasheet: "",
// // //         specifications: [{ name: "", value: "" }],
// // //         featured: false,
// // //     });
// // //     const [editProduct, setEditProduct] = useState(null);

// // //     // Fetch products on mount
// // //     useEffect(() => {
// // //         const loadProducts = async () => {
// // //             setLoading(true);
// // //             try {
// // //                 const response = await axios.get("/products");
// // //                 const productsData = Array.isArray(response.data)
// // //                     ? response.data
// // //                     : response.data.products || [];
// // //                 setProducts(productsData);
// // //             } catch (err) {
// // //                 setError("Failed to load products. Please try again later.");
// // //                 console.error("Error fetching products:", err);
// // //                 setProducts([]);
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };
// // //         loadProducts();
// // //     }, []);

// // //     // Filter products with type checking
// // //     const filteredProducts = Array.isArray(products)
// // //         ? products.filter((product) => {
// // //             if (!product) return false;
// // //             const matchesSearch =
// // //                 !searchQuery ||
// // //                 (product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //                     product.model?.toLowerCase().includes(searchQuery.toLowerCase()));
// // //             const matchesCategory =
// // //                 categoryFilter === "all" || product.category === categoryFilter;
// // //             return matchesSearch && matchesCategory;
// // //         })
// // //         : [];

// // //     // Get unique categories
// // //     const categories = Array.isArray(products)
// // //         ? [
// // //             "all",
// // //             ...new Set(products.filter((p) => p && p.category).map((product) => product.category)),
// // //         ]
// // //         : ["all"];

// // //     // Pagination
// // //     const indexOfLastItem = currentPage * itemsPerPage;
// // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
// // //     const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
// // //     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

// // //     const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // //     // CRUD Handlers
// // //     const handleAddProduct = async () => {
// // //         try {
// // //             const response = await axios.post("/products", newProduct, {
// // //                 headers: { "Content-Type": "application/json" },
// // //             });
// // //             setProducts([...products, response.data]);
// // //             setShowAddModal(false);
// // //             setNewProduct({
// // //                 name: "",
// // //                 model: "",
// // //                 category: "",
// // //                 price: "",
// // //                 frequency: "",
// // //                 power: "",
// // //                 vswr: "",
// // //                 connector: "",
// // //                 peakPower: "",
// // //                 inStock: true,
// // //                 description: "",
// // //                 applications: "",
// // //                 images: [""],
// // //                 datasheet: "",
// // //                 specifications: [{ name: "", value: "" }],
// // //                 featured: false,
// // //             });
// // //         } catch (error) {
// // //             console.error("Error adding product:", error);
// // //             setError(
// // //                 error.response?.data?.message || "Failed to add product. Please try again."
// // //             );
// // //         }
// // //     };

// // //     const handleEditProduct = async () => {
// // //         if (!editProduct?._id) {
// // //             setError("No product selected for update.");
// // //             return;
// // //         }
// // //         try {
// // //             const response = await axios.put(`/products/${editProduct._id}`, editProduct, {
// // //                 headers: { "Content-Type": "application/json" },
// // //             });
// // //             setProducts(
// // //                 products.map((p) => (p._id === editProduct._id ? response.data : p))
// // //             );
// // //             setShowEditModal(false);
// // //             setEditProduct(null);
// // //         } catch (error) {
// // //             console.error("Error updating product:", error);
// // //             setError(
// // //                 error.response?.data?.message || "Failed to update product. Please try again."
// // //             );
// // //         }
// // //     };

// // //     const handleDeleteClick = (product) => {
// // //         setSelectedProduct(product);
// // //         setShowDeleteModal(true);
// // //     };

// // //     const confirmDelete = async () => {
// // //         if (!selectedProduct) return;
// // //         try {
// // //             await axios.delete(`/products/${selectedProduct._id}`);
// // //             setProducts(products.filter((p) => p._id !== selectedProduct._id));
// // //             setShowDeleteModal(false);
// // //             setSelectedProduct(null);
// // //         } catch (err) {
// // //             console.error("Error deleting product:", err);
// // //             setError(
// // //                 err.response?.data?.message || "Failed to delete product. Please try again."
// // //             );
// // //         }
// // //     };

// // //     // Form Helpers
// // //     const openEditModal = (product) => {
// // //         setEditProduct({
// // //             ...product,
// // //             images: product.images?.length ? [...product.images] : [""],
// // //             specifications: product.specifications?.length
// // //                 ? [...product.specifications]
// // //                 : [{ name: "", value: "" }],
// // //             price: product.price || "",
// // //             datasheet: product.datasheet || "",
// // //         });
// // //         setShowEditModal(true);
// // //     };

// // //     const addImageField = (isEdit) => {
// // //         if (isEdit) {
// // //             setEditProduct((prev) => ({ ...prev, images: [...prev.images, ""] }));
// // //         } else {
// // //             setNewProduct((prev) => ({ ...prev, images: [...prev.images, ""] }));
// // //         }
// // //     };

// // //     const removeImageField = (index, isEdit) => {
// // //         if (isEdit) {
// // //             setEditProduct((prev) => ({
// // //                 ...prev,
// // //                 images: prev.images.filter((_, i) => i !== index),
// // //             }));
// // //         } else {
// // //             setNewProduct((prev) => ({
// // //                 ...prev,
// // //                 images: prev.images.filter((_, i) => i !== index),
// // //             }));
// // //         }
// // //     };

// // //     const addSpecificationField = (isEdit) => {
// // //         if (isEdit) {
// // //             setEditProduct((prev) => ({
// // //                 ...prev,
// // //                 specifications: [...prev.specifications, { name: "", value: "" }],
// // //             }));
// // //         } else {
// // //             setNewProduct((prev) => ({
// // //                 ...prev,
// // //                 specifications: [...prev.specifications, { name: "", value: "" }],
// // //             }));
// // //         }
// // //     };

// // //     const removeSpecificationField = (index, isEdit) => {
// // //         if (isEdit) {
// // //             setEditProduct((prev) => ({
// // //                 ...prev,
// // //                 specifications: prev.specifications.filter((_, i) => i !== index),
// // //             }));
// // //         } else {
// // //             setNewProduct((prev) => ({
// // //                 ...prev,
// // //                 specifications: prev.specifications.filter((_, i) => i !== index),
// // //             }));
// // //         }
// // //     };

// // //     return (
// // //         <AdminLayout>
// // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // //                 {/* Header */}
// // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // //                     <div>
// // //                         <p className="mt-2 text-3xl text-gray-900">Manage your product inventory</p>
// // //                     </div>
// // //                     <div className="mt-4 sm:mt-0">
// // //                         <button
// // //                             type="button"
// // //                             className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// // //                             onClick={() => setShowAddModal(true)}
// // //                         >
// // //                             <Plus className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
// // //                             Add Product
// // //                         </button>
// // //                     </div>
// // //                 </div>

// // //                 {/* Error Display */}
// // //                 {error && (
// // //                     <div className="mt-4 bg-red-100 text-red-700 p-4 rounded-md">{error}</div>
// // //                 )}

// // //                 {/* Search and Filter */}
// // //                 <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
// // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // //                             <Search className="h-5 w-5 text-red-400" aria-hidden="true" />
// // //                         </div>
// // //                         <input
// // //                             type="text"
// // //                             value={searchQuery}
// // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // //                             className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
// // //                             placeholder="Search products..."
// // //                         />
// // //                     </div>
// // //                     <div className="relative max-w-xs w-full">
// // //                         <select
// // //                             value={categoryFilter}
// // //                             onChange={(e) => setCategoryFilter(e.target.value)}
// // //                             className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// // //                         >
// // //                             {categories.map((category) => (
// // //                                 <option key={category} value={category}>
// // //                                     {category === "all" ? "All Categories" : category}
// // //                                 </option>
// // //                             ))}
// // //                         </select>
// // //                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // //                             <Filter className="h-4 w-4" />
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Products Table */}
// // //                 <div className="mt-8 flex flex-col">
// // //                     <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // //                             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // //                                 {loading ? (
// // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // //                                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
// // //                                     </div>
// // //                                 ) : error ? (
// // //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // //                                 ) : currentItems.length === 0 ? (
// // //                                     <div className="text-center py-12 bg-white">
// // //                                         <p className="text-gray-500">No products found.</p>
// // //                                     </div>
// // //                                 ) : (
// // //                                     <table className="min-w-full divide-y divide-gray-300">
// // //                                         <thead className="bg-gray-50">
// // //                                             <tr>
// // //                                                 <th
// // //                                                     scope="col"
// // //                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // //                                                 >
// // //                                                     Product
// // //                                                 </th>
// // //                                                 <th
// // //                                                     scope="col"
// // //                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // //                                                 >
// // //                                                     Category
// // //                                                 </th>
// // //                                                 <th
// // //                                                     scope="col"
// // //                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // //                                                 >
// // //                                                     Model
// // //                                                 </th>
// // //                                                 <th
// // //                                                     scope="col"
// // //                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // //                                                 >
// // //                                                     Price
// // //                                                 </th>
// // //                                                 <th
// // //                                                     scope="col"
// // //                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
// // //                                                 >
// // //                                                     Status
// // //                                                 </th>
// // //                                                 <th
// // //                                                     scope="col"
// // //                                                     className="relative py-3.5 pl-3 pr-4 sm:pr-6"
// // //                                                 >
// // //                                                     <span className="sr-only">Actions</span>
// // //                                                 </th>
// // //                                             </tr>
// // //                                         </thead>
// // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // //                                             {currentItems.map((product) => (
// // //                                                 <tr key={product._id}>
// // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // //                                                         <div className="flex items-center">
// // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // //                                                                 <img
// // //                                                                     className="h-10 w-10 rounded-full object-cover"
// // //                                                                     src={
// // //                                                                         product.images[0] ||
// // //                                                                         `/placeholder.svg?height=40&width=40`
// // //                                                                     }
// // //                                                                     alt={product.name}
// // //                                                                 />
// // //                                                             </div>
// // //                                                             <div className="ml-4">
// // //                                                                 <div className="font-medium text-gray-900">
// // //                                                                     {product.name}
// // //                                                                 </div>
// // //                                                             </div>
// // //                                                         </div>
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
// // //                                                             {product.category}
// // //                                                         </span>
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         {product.model}
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         {product.price
// // //                                                             ? `$${parseFloat(product.price).toFixed(2)}`
// // //                                                             : "Request Quote"}
// // //                                                     </td>
// // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // //                                                         <span
// // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${product.inStock
// // //                                                                 ? "bg-green-100 text-green-800"
// // //                                                                 : "bg-yellow-100 text-yellow-800"
// // //                                                                 }`}
// // //                                                         >
// // //                                                             {product.inStock ? "In Stock" : "Made to Order"}
// // //                                                         </span>
// // //                                                     </td>
// // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // //                                                         <div className="flex items-center justify-end space-x-3">
// // //                                                             <button
// // //                                                                 type="button"
// // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // //                                                                 onClick={() => openEditModal(product)}
// // //                                                             >
// // //                                                                 <Edit className="h-5 w-5" />
// // //                                                             </button>
// // //                                                             <button
// // //                                                                 type="button"
// // //                                                                 className="text-red-600 hover:text-red-900"
// // //                                                                 onClick={() => handleDeleteClick(product)}
// // //                                                             >
// // //                                                                 <Trash2 className="h-5 w-5" />
// // //                                                             </button>
// // //                                                         </div>
// // //                                                     </td>
// // //                                                 </tr>
// // //                                             ))}
// // //                                         </tbody>
// // //                                     </table>
// // //                                 )}
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>

// // //                 {/* Pagination */}
// // //                 {!loading && !error && totalPages > 1 && (
// // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // //                         <div className="flex flex-1 justify-between sm:hidden">
// // //                             <button
// // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // //                                 disabled={currentPage === 1}
// // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // //                             >
// // //                                 Previous
// // //                             </button>
// // //                             <button
// // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // //                                 disabled={currentPage === totalPages}
// // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // //                             >
// // //                                 Next
// // //                             </button>
// // //                         </div>
// // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // //                             <div>
// // //                                 <p className="text-sm text-gray-700">
// // //                                     Showing{" "}
// // //                                     <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // //                                     <span className="font-medium">
// // //                                         {Math.min(indexOfLastItem, filteredProducts.length)}
// // //                                     </span>{" "}
// // //                                     of <span className="font-medium">{filteredProducts.length}</span>{" "}
// // //                                     results
// // //                                 </p>
// // //                             </div>
// // //                             <div>
// // //                                 <nav
// // //                                     className="isolate inline-flex -space-x-px rounded-md shadow-sm"
// // //                                     aria-label="Pagination"
// // //                                 >
// // //                                     <button
// // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // //                                         disabled={currentPage === 1}
// // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // //                                     >
// // //                                         <span className="sr-only">Previous</span>
// // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // //                                     </button>
// // //                                     {[...Array(totalPages).keys()].map((number) => (
// // //                                         <button
// // //                                             key={number + 1}
// // //                                             onClick={() => paginate(number + 1)}
// // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // //                                                 }`}
// // //                                         >
// // //                                             {number + 1}
// // //                                         </button>
// // //                                     ))}
// // //                                     <button
// // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // //                                         disabled={currentPage === totalPages}
// // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // //                                     >
// // //                                         <span className="sr-only">Next</span>
// // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // //                                     </button>
// // //                                 </nav>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 )}

// // //                 {/* Add Product Modal */}
// // //                 {showAddModal && (
// // //                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
// // //                         <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
// // //                             <div className="px-6 py-5">
// // //                                 <div className="flex justify-between items-center">
// // //                                     <h3 className="text-lg font-medium text-gray-900">Add New Product</h3>
// // //                                     <button
// // //                                         type="button"
// // //                                         onClick={() => setShowAddModal(false)}
// // //                                         className="text-gray-400 hover:text-gray-500"
// // //                                     >
// // //                                         <X className="h-6 w-6" />
// // //                                     </button>
// // //                                 </div>
// // //                                 <div className="mt-5">
// // //                                     <ProductForm
// // //                                         product={newProduct}
// // //                                         setProduct={setNewProduct}
// // //                                         onSubmit={handleAddProduct}
// // //                                         isEdit={false}
// // //                                         removeImageField={removeImageField}
// // //                                         removeSpecificationField={removeSpecificationField}
// // //                                         addImageField={addImageField}
// // //                                         addSpecificationField={addSpecificationField}
// // //                                         setShowAddModal={setShowAddModal}
// // //                                     />
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 )}

// // //                 {/* Edit Product Modal */}
// // //                 {showEditModal && (
// // //                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
// // //                         <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
// // //                             <div className="px-6 py-5">
// // //                                 <div className="flex justify-between items-center">
// // //                                     <h3 className="text-lg font-medium text-gray-900">Edit Product</h3>
// // //                                     <button
// // //                                         type="button"
// // //                                         onClick={() => setShowEditModal(false)}
// // //                                         className="text-gray-400 hover:text-gray-500"
// // //                                     >
// // //                                         <X className="h-6 w-6" />
// // //                                     </button>
// // //                                 </div>
// // //                                 <div className="mt-5">
// // //                                     <ProductForm
// // //                                         product={editProduct}
// // //                                         setProduct={setEditProduct}
// // //                                         onSubmit={handleEditProduct}
// // //                                         isEdit={true}
// // //                                         removeImageField={removeImageField}
// // //                                         removeSpecificationField={removeSpecificationField}
// // //                                         addImageField={addImageField}
// // //                                         addSpecificationField={addSpecificationField}
// // //                                         setShowEditModal={setShowEditModal}
// // //                                     />
// // //                                 </div>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 )}

// // //                 {/* Delete Confirmation Modal */}
// // //                 {showDeleteModal && (
// // //                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
// // //                         <div className="bg-white rounded-lg shadow-xl max-w-lg w-full">
// // //                             <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // //                                 <div className="sm:flex sm:items-start">
// // //                                     <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // //                                         <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // //                                     </div>
// // //                                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // //                                         <h3 className="text-lg leading-6 font-medium text-gray-900">
// // //                                             Delete Product
// // //                                         </h3>
// // //                                         <div className="mt-2">
// // //                                             <p className="text-sm text-gray-500">
// // //                                                 Are you sure you want to delete "{selectedProduct?.name}"?
// // //                                                 This action cannot be undone.
// // //                                             </p>
// // //                                         </div>
// // //                                     </div>
// // //                                 </div>
// // //                             </div>
// // //                             <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // //                                 <button
// // //                                     type="button"
// // //                                     className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// // //                                     onClick={confirmDelete}
// // //                                 >
// // //                                     Delete
// // //                                 </button>
// // //                                 <button
// // //                                     type="button"
// // //                                     className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// // //                                     onClick={() => setShowDeleteModal(false)}
// // //                                 >
// // //                                     Cancel
// // //                                 </button>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </AdminLayout>
// // //     );
// // // };

// // // export default AdminProducts;

// // // // "use client"
// // // // import { useState, useEffect } from "react"
// // // // import { motion } from "framer-motion"
// // // // import { Plus, Search, Edit, Trash2, Filter, ChevronLeft, ChevronRight, X } from 'lucide-react'
// // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // import axios from "axios"

// // // // // Configure axios base URL
// // // // axios.defaults.baseURL = "https://raycom-backend.onrender.com/api"

// // // // const AdminProducts = () => {
// // // //     const [products, setProducts] = useState([])
// // // //     const [loading, setLoading] = useState(true)
// // // //     const [error, setError] = useState(null)
// // // //     const [searchQuery, setSearchQuery] = useState("")
// // // //     const [categoryFilter, setCategoryFilter] = useState("all")
// // // //     const [currentPage, setCurrentPage] = useState(1)
// // // //     const [itemsPerPage] = useState(10)
// // // //     const [showAddModal, setShowAddModal] = useState(false)
// // // //     const [showEditModal, setShowEditModal] = useState(false)
// // // //     const [showDeleteModal, setShowDeleteModal] = useState(false)
// // // //     const [selectedProduct, setSelectedProduct] = useState(null)
// // // //     const [newProduct, setNewProduct] = useState({
// // // //         name: '',
// // // //         model: '',
// // // //         category: '',
// // // //         price: '',
// // // //         frequency: '',
// // // //         power: '',
// // // //         vswr: '',
// // // //         connector: '',
// // // //         peakPower: '',
// // // //         inStock: true,
// // // //         description: '',
// // // //         applications: '',
// // // //         images: [''],
// // // //         datasheet: '',
// // // //         specifications: [{ name: '', value: '' }],
// // // //         featured: false,
// // // //     })
// // // //     const [editProduct, setEditProduct] = useState(null)

// // // //     // Fetch products on mount
// // // //     useEffect(() => {
// // // //         const loadProducts = async () => {
// // // //             setLoading(true)
// // // //             try {
// // // //                 const response = await axios.get("/products")
// // // //                 // Handle different response formats
// // // //                 const productsData = Array.isArray(response.data)
// // // //                     ? response.data
// // // //                     : response.data.products || [];
// // // //                 setProducts(productsData);
// // // //             } catch (err) {
// // // //                 setError("Failed to load products. Please try again later.")
// // // //                 console.error("Error fetching products:", err)
// // // //                 setProducts([]); // Ensure products is an array even on error
// // // //             } finally {
// // // //                 setLoading(false)
// // // //             }
// // // //         }
// // // //         loadProducts()
// // // //     }, [])

// // // //     // Filter products with type checking
// // // //     const filteredProducts = Array.isArray(products)
// // // //         ? products.filter(product => {
// // // //             if (!product) return false;
// // // //             const matchesSearch = !searchQuery || (
// // // //                 (product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // //                     product.model?.toLowerCase().includes(searchQuery.toLowerCase()))
// // // //             );
// // // //             const matchesCategory = categoryFilter === "all" || product.category === categoryFilter;
// // // //             return matchesSearch && matchesCategory;
// // // //         })
// // // //         : [];

// // // //     // Get unique categories
// // // //     const categories = Array.isArray(products)
// // // //         ? ["all", ...new Set(products.filter(p => p && p.category).map(product => product.category))]
// // // //         : ["all"];

// // // //     // Pagination
// // // //     const indexOfLastItem = currentPage * itemsPerPage
// // // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // // //     const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)
// // // //     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

// // // //     const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // // //     // CRUD Handlers
// // // //     const handleAddProduct = async () => {
// // // //         try {
// // // //             const response = await axios.post("/products", newProduct)
// // // //             setProducts([...products, response.data])
// // // //             setShowAddModal(false)
// // // //             setNewProduct({
// // // //                 name: '',
// // // //                 model: '',
// // // //                 category: '',
// // // //                 price: '',
// // // //                 frequency: '',
// // // //                 power: '',
// // // //                 vswr: '',
// // // //                 connector: '',
// // // //                 peakPower: '',
// // // //                 inStock: true,
// // // //                 description: '',
// // // //                 applications: '',
// // // //                 images: [''],
// // // //                 datasheet: '',
// // // //                 specifications: [{ name: '', value: '' }],
// // // //                 featured: false,
// // // //             })
// // // //         } catch (error) {
// // // //             console.error('Error adding product:', error)
// // // //             setError("Failed to add product. Please try again.")
// // // //         }
// // // //     }

// // // //     const handleEditProduct = async () => {
// // // //         try {
// // // //             const response = await axios.put(`/products/${editProduct._id}`, editProduct)
// // // //             setProducts(products.map(p => p._id === editProduct._id ? response.data : p))
// // // //             setShowEditModal(false)
// // // //             setEditProduct(null)
// // // //         } catch (error) {
// // // //             console.error('Error updating product:', error)
// // // //             setError("Failed to update product. Please try again.")
// // // //         }
// // // //     }

// // // //     const handleDeleteClick = (product) => {
// // // //         setSelectedProduct(product)
// // // //         setShowDeleteModal(true)
// // // //     }

// // // //     const confirmDelete = async () => {
// // // //         if (!selectedProduct) return
// // // //         try {
// // // //             await axios.delete(`/products/${selectedProduct._id}`)
// // // //             setProducts(products.filter(p => p._id !== selectedProduct._id))
// // // //             setShowDeleteModal(false)
// // // //             setSelectedProduct(null)
// // // //         } catch (err) {
// // // //             console.error("Error deleting product:", err)
// // // //             setError("Failed to delete product. Please try again.")
// // // //         }
// // // //     }

// // // //     // Form Helpers
// // // //     const openEditModal = (product) => {
// // // //         setEditProduct({ ...product, images: product.images || [''], specifications: product.specifications || [{ name: '', value: '' }] })
// // // //         setShowEditModal(true)
// // // //     }

// // // //     const addImageField = (isEdit) => {
// // // //         if (isEdit) {
// // // //             setEditProduct({ ...editProduct, images: [...editProduct.images, ''] })
// // // //         } else {
// // // //             setNewProduct({ ...newProduct, images: [...newProduct.images, ''] })
// // // //         }
// // // //     }

// // // //     const removeImageField = (index, isEdit) => {
// // // //         if (isEdit) {
// // // //             setEditProduct({ ...editProduct, images: editProduct.images.filter((_, i) => i !== index) })
// // // //         } else {
// // // //             setNewProduct({ ...newProduct, images: newProduct.images.filter((_, i) => i !== index) })
// // // //         }
// // // //     }

// // // //     const addSpecificationField = (isEdit) => {
// // // //         if (isEdit) {
// // // //             setEditProduct({ ...editProduct, specifications: [...editProduct.specifications, { name: '', value: '' }] })
// // // //         } else {
// // // //             setNewProduct({ ...newProduct, specifications: [...newProduct.specifications, { name: '', value: '' }] })
// // // //         }
// // // //     }

// // // //     const removeSpecificationField = (index, isEdit) => {
// // // //         if (isEdit) {
// // // //             setEditProduct({ ...editProduct, specifications: editProduct.specifications.filter((_, i) => i !== index) })
// // // //         } else {
// // // //             setNewProduct({ ...newProduct, specifications: newProduct.specifications.filter((_, i) => i !== index) })
// // // //         }
// // // //     }

// // // //     // Reusable Product Form Component
// // // //     const ProductForm = ({ product, setProduct, onSubmit, isEdit }) => (
// // // //         <div className="space-y-4">
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Name</label>
// // // //                 <input
// // // //                     type="text"
// // // //                     value={product.name}
// // // //                     onChange={(e) => setProduct({ ...product, name: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                     required
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Model</label>
// // // //                 <input
// // // //                     type="text"
// // // //                     value={product.model}
// // // //                     onChange={(e) => setProduct({ ...product, model: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                     required
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Category</label>
// // // //                 <input
// // // //                     type="text"
// // // //                     value={product.category}
// // // //                     onChange={(e) => setProduct({ ...product, category: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                     required
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Price</label>
// // // //                 <input
// // // //                     type="number"
// // // //                     value={product.price}
// // // //                     onChange={(e) => setProduct({ ...product, price: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Frequency</label>
// // // //                 <input
// // // //                     type="text"
// // // //                     value={product.frequency}
// // // //                     onChange={(e) => setProduct({ ...product, frequency: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Power</label>
// // // //                 <input
// // // //                     Jewish
// // // //                     type="text"
// // // //                     value={product.power}
// // // //                     onChange={(e) => setProduct({ ...product, power: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">VSWR</label>
// // // //                 <input
// // // //                     type="text"
// // // //                     value={product.vswr}
// // // //                     onChange={(e) => setProduct({ ...product, vswr: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Connector</label>
// // // //                 <input
// // // //                     type="text"
// // // //                     value={product.connector}
// // // //                     onChange={(e) => setProduct({ ...product, connector: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Peak Power</label>
// // // //                 <input
// // // //                     type="text"
// // // //                     value={product.peakPower}
// // // //                     onChange={(e) => setProduct({ ...product, peakPower: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">In Stock</label>
// // // //                 <input
// // // //                     type="checkbox"
// // // //                     checked={product.inStock}
// // // //                     onChange={(e) => setProduct({ ...product, inStock: e.target.checked })}
// // // //                     className="mt-1"
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Description</label>
// // // //                 <textarea
// // // //                     value={product.description}
// // // //                     onChange={(e) => setProduct({ ...product, description: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Applications</label>
// // // //                 <textarea
// // // //                     value={product.applications}
// // // //                     onChange={(e) => setProduct({ ...product, applications: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Images</label>
// // // //                 {product.images.map((image, index) => (
// // // //                     <div key={index} className="flex items-center space-x-2 mt-1">
// // // //                         <input
// // // //                             type="text"
// // // //                             value={image}
// // // //                             onChange={(e) => {
// // // //                                 const newImages = [...product.images]
// // // //                                 newImages[index] = e.target.value
// // // //                                 setProduct({ ...product, images: newImages })
// // // //                             }}
// // // //                             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                         />
// // // //                         <button
// // // //                             type="button"
// // // //                             onClick={() => removeImageField(index, isEdit)}
// // // //                             className="text-red-600 hover:text-red-900"
// // // //                         >
// // // //                             <X className="h-5 w-5" />
// // // //                         </button>
// // // //                     </div>
// // // //                 ))}
// // // //                 <button
// // // //                     type="button"
// // // //                     onClick={() => addImageField(isEdit)}
// // // //                     className="mt-2 text-sm text-red-600 hover:text-red-900"
// // // //                 >
// // // //                     Add Image
// // // //                 </button>
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Datasheet</label>
// // // //                 <input
// // // //                     type="text"
// // // //                     value={product.datasheet || ''}
// // // //                     onChange={(e) => setProduct({ ...product, datasheet: e.target.value })}
// // // //                     className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                 />
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Specifications</label>
// // // //                 {product.specifications.map((spec, index) => (
// // // //                     <div key={index} className="flex items-center space-x-2 mt-1">
// // // //                         <input
// // // //                             type="text"
// // // //                             placeholder="Name"
// // // //                             value={spec.name}
// // // //                             onChange={(e) => {
// // // //                                 const newSpecs = [...product.specifications]
// // // //                                 newSpecs[index].name = e.target.value
// // // //                                 setProduct({ ...product, specifications: newSpecs })
// // // //                             }}
// // // //                             className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                         />
// // // //                         <input
// // // //                             type="text"
// // // //                             placeholder="Value"
// // // //                             value={spec.value}
// // // //                             onChange={(e) => {
// // // //                                 const newSpecs = [...product.specifications]
// // // //                                 newSpecs[index].value = e.target.value
// // // //                                 setProduct({ ...product, specifications: newSpecs })
// // // //                             }}
// // // //                             className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                         />
// // // //                         <button
// // // //                             type="button"
// // // //                             onClick={() => removeSpecificationField(index, isEdit)}
// // // //                             className="text-red-600 hover:text-red-900"
// // // //                         >
// // // //                             <X className="h-5 w-5" />
// // // //                         </button>
// // // //                     </div>
// // // //                 ))}
// // // //                 <button
// // // //                     type="button"
// // // //                     onClick={() => addSpecificationField(isEdit)}
// // // //                     className="mt-2 text-sm text-red-600 hover:text-red-900"
// // // //                 >
// // // //                     Add Specification
// // // //                 </button>
// // // //             </div>
// // // //             <div>
// // // //                 <label className="block text-sm font-medium text-gray-700">Featured</label>
// // // //                 <input
// // // //                     type="checkbox"
// // // //                     checked={product.featured}
// // // //                     onChange={(e) => setProduct({ ...product, featured: e.target.checked })}
// // // //                     className="mt-1"
// // // //                 />
// // // //             </div>
// // // //             <div className="mt-4">
// // // //                 <button
// // // //                     type="button"
// // // //                     onClick={onSubmit}
// // // //                     className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
// // // //                 >
// // // //                     {isEdit ? 'Update Product' : 'Add Product'}
// // // //                 </button>
// // // //             </div>
// // // //         </div>
// // // //     )

// // // //     return (
// // // //         <AdminLayout>
// // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // //                 {/* Header */}
// // // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // // //                     <div>
// // // //                         <h1 className="text-2xl font-bold text-gray-900">Products</h1>
// // // //                         <p className="mt-2 text-sm text-gray-700">Manage your product inventory.</p>
// // // //                     </div>
// // // //                     <div className="mt-4 sm:mt-0">
// // // //                         <button
// // // //                             type="button"
// // // //                             className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
// // // //                             onClick={() => setShowAddModal(true)}
// // // //                         >
// // // //                             <Plus className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
// // // //                             Add Product
// // // //                         </button>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Search and Filter */}
// // // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // //                             <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
// // // //                         </div>
// // // //                         <input
// // // //                             type="text"
// // // //                             value={searchQuery}
// // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // //                             className="block w-full rounded-md border-gray-300 pl-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // //                             placeholder="Search products..."
// // // //                         />
// // // //                     </div>
// // // //                     <div className="relative max-w-xs w-full">
// // // //                         <select
// // // //                             value={categoryFilter}
// // // //                             onChange={(e) => setCategoryFilter(e.target.value)}
// // // //                             className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // //                         >
// // // //                             {categories.map((category) => (
// // // //                                 <option key={category} value={category}>
// // // //                                     {category === "all" ? "All Categories" : category}
// // // //                                 </option>
// // // //                             ))}
// // // //                         </select>
// // // //                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // //                             <Filter className="h-4 w-4" />
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Products Table */}
// // // //                 <div className="mt-8 flex flex-col">
// // // //                     <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // //                             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // //                                 {loading ? (
// // // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // // //                                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // //                                     </div>
// // // //                                 ) : error ? (
// // // //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // // //                                 ) : currentItems.length === 0 ? (
// // // //                                     <div className="text-center py-12 bg-white">
// // // //                                         <p className="text-gray-500">No products found.</p>
// // // //                                     </div>
// // // //                                 ) : (
// // // //                                     <table className="min-w-full divide-y divide-gray-300">
// // // //                                         <thead className="bg-gray-50">
// // // //                                             <tr>
// // // //                                                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Product</th>
// // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th>
// // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Model</th>
// // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
// // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
// // // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6"><span className="sr-only">Actions</span></th>
// // // //                                             </tr>
// // // //                                         </thead>
// // // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // // //                                             {currentItems.map((product) => (
// // // //                                                 <tr key={product._id}>
// // // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // // //                                                         <div className="flex items-center">
// // // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // // //                                                                 <img
// // // //                                                                     className="h-10 w-10 rounded-full object-cover"
// // // //                                                                     src={product.images[0] || `/placeholder.svg?height=40&width=40`}
// // // //                                                                     alt={product.name}
// // // //                                                                 />
// // // //                                                             </div>
// // // //                                                             <div className="ml-4">
// // // //                                                                 <div className="font-medium text-gray-900">{product.name}</div>
// // // //                                                             </div>
// // // //                                                         </div>
// // // //                                                     </td>
// // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // //                                                         <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">{product.category}</span>
// // // //                                                     </td>
// // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.model}</td>
// // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.price ? `$${product.price.toFixed(2)}` : "Request Quote"}</td>
// // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // //                                                         <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${product.inStock ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"}`}>
// // // //                                                             {product.inStock ? "In Stock" : "Made to Order"}
// // // //                                                         </span>
// // // //                                                     </td>
// // // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // //                                                         <div className="flex items-center justify-end space-x-3">
// // // //                                                             <button
// // // //                                                                 type="button"
// // // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // // //                                                                 onClick={() => openEditModal(product)}
// // // //                                                             >
// // // //                                                                 <Edit className="h-5 w-5" />
// // // //                                                             </button>
// // // //                                                             <button
// // // //                                                                 type="button"
// // // //                                                                 className="text-red-600 hover:text-red-900"
// // // //                                                                 onClick={() => handleDeleteClick(product)}
// // // //                                                             >
// // // //                                                                 <Trash2 className="h-5 w-5" />
// // // //                                                             </button>
// // // //                                                         </div>
// // // //                                                     </td>
// // // //                                                 </tr>
// // // //                                             ))}
// // // //                                         </tbody>
// // // //                                     </table>
// // // //                                 )}
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 </div>

// // // //                 {/* Pagination */}
// // // //                 {!loading && !error && totalPages > 1 && (
// // // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // //                         <div className="flex flex-1 justify-between sm:hidden">
// // // //                             <button
// // // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // //                                 disabled={currentPage === 1}
// // // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // //                             >
// // // //                                 Previous
// // // //                             </button>
// // // //                             <button
// // // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // //                                 disabled={currentPage === totalPages}
// // // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // //                             >
// // // //                                 Next
// // // //                             </button>
// // // //                         </div>
// // // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // //                             <div>
// // // //                                 <p className="text-sm text-gray-700">
// // // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredProducts.length)}</span> of{" "}
// // // //                                     <span className="font-medium">{filteredProducts.length}</span> results
// // // //                                 </p>
// // // //                             </div>
// // // //                             <div>
// // // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // //                                     <button
// // // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // //                                         disabled={currentPage === 1}
// // // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // //                                     >
// // // //                                         <span className="sr-only">Previous</span>
// // // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // //                                     </button>
// // // //                                     {[...Array(totalPages).keys()].map((number) => (
// // // //                                         <button
// // // //                                             key={number + 1}
// // // //                                             onClick={() => paginate(number + 1)}
// // // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // //                                                 }`}
// // // //                                         >
// // // //                                             {number + 1}
// // // //                                         </button>
// // // //                                     ))}
// // // //                                     <button
// // // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // //                                         disabled={currentPage === totalPages}
// // // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // //                                     >
// // // //                                         <span className="sr-only">Next</span>
// // // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // //                                     </button>
// // // //                                 </nav>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 )}

// // // //                 {/* Add Product Modal */}
// // // //                 {showAddModal && (
// // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // //                             <div className="fixed inset-0 bg-gray-500 opacity-75" onClick={() => setShowAddModal(false)}></div>
// // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
// // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // //                                     <h3 className="text-lg leading-6 font-medium text-gray-900">Add New Product</h3>
// // // //                                     <ProductForm
// // // //                                         product={newProduct}
// // // //                                         setProduct={setNewProduct}
// // // //                                         onSubmit={handleAddProduct}
// // // //                                         isEdit={false}
// // // //                                     />
// // // //                                 </div>
// // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // //                                     <button
// // // //                                         type="button"
// // // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray- традиция-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// // // //                                         onClick={() => setShowAddModal(false)}
// // // //                                     >
// // // //                                         Cancel
// // // //                                     </button>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 )}

// // // //                 {/* Edit Product Modal */}
// // // //                 {showEditModal && (
// // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // //                             <div className="fixed inset-0 bg-gray-500 opacity-75" onClick={() => setShowEditModal(false)}></div>
// // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
// // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // //                                     <h3 className="text-lg leading-6 font-medium text-gray-900">Edit Product</h3>
// // // //                                     <ProductForm
// // // //                                         product={editProduct}
// // // //                                         setProduct={setEditProduct}
// // // //                                         onSubmit={handleEditProduct}
// // // //                                         isEdit={true}
// // // //                                     />
// // // //                                 </div>
// // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // //                                     <button
// // // //                                         type="button"
// // // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// // // //                                         onClick={() => setShowEditModal(false)}
// // // //                                     >
// // // //                                         Cancel
// // // //                                     </button>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 )}

// // // //                 {/* Delete Confirmation Modal */}
// // // //                 {showDeleteModal && (
// // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // //                             <div className="fixed inset-0 bg-gray-500 opacity-75" onClick={() => setShowDeleteModal(false)}></div>
// // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"></span>
// // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // //                                     <div className="sm:flex sm:items-start">
// // // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // // //                                         </div>
// // // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Product</h3>
// // // //                                             <div className="mt-2">
// // // //                                                 <p className="text-sm text-gray-500">
// // // //                                                     Are you sure you want to delete "{selectedProduct?.name}"? This action cannot be undone.
// // // //                                                 </p>
// // // //                                             </div>
// // // //                                         </div>
// // // //                                     </div>
// // // //                                 </div>
// // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // //                                     <button
// // // //                                         type="button"
// // // //                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// // // //                                         onClick={confirmDelete}
// // // //                                     >
// // // //                                         Delete
// // // //                                     </button>
// // // //                                     <button
// // // //                                         type="button"
// // // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// // // //                                         onClick={() => setShowDeleteModal(false)}
// // // //                                     >
// // // //                                         Cancel
// // // //                                     </button>
// // // //                                 </div>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 )}
// // // //             </div>
// // // //         </AdminLayout>
// // // //     )
// // // // }

// // // // export default AdminProducts


// // // // // // "use client"
// // // // // // import { useState, useEffect } from "react"
// // // // // // import { motion } from "framer-motion"
// // // // // // import { Plus, Search, Edit, Trash2, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
// // // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // // import { fetchProducts, deleteProduct } from "../../services/api"

// // // // // // const AdminProducts = () => {
// // // // // //     const [products, setProducts] = useState([])
// // // // // //     const [loading, setLoading] = useState(true)
// // // // // //     const [error, setError] = useState(null)
// // // // // //     const [searchQuery, setSearchQuery] = useState("")
// // // // // //     const [categoryFilter, setCategoryFilter] = useState("all")
// // // // // //     const [currentPage, setCurrentPage] = useState(1)
// // // // // //     const [itemsPerPage] = useState(10)
// // // // // //     const [showDeleteModal, setShowDeleteModal] = useState(false)
// // // // // //     const [productToDelete, setProductToDelete] = useState(null)

// // // // // //     useEffect(() => {
// // // // // //         const loadProducts = async () => {
// // // // // //             setLoading(true)
// // // // // //             try {
// // // // // //                 const data = await fetchProducts()
// // // // // //                 setProducts(data)
// // // // // //                 setError(null)
// // // // // //             } catch (err) {
// // // // // //                 console.error("Error loading products:", err)
// // // // // //                 setError("Failed to load products. Please try again later.")
// // // // // //             } finally {
// // // // // //                 setLoading(false)
// // // // // //             }
// // // // // //         }

// // // // // //         loadProducts()
// // // // // //     }, [])

// // // // // //     // Filter products based on search query and category
// // // // // //     const filteredProducts = products?.filter((product) => {
// // // // // //         const matchesSearch =
// // // // // //             product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // // //             product.model.toLowerCase().includes(searchQuery.toLowerCase())

// // // // // //         const matchesCategory = categoryFilter === "all" || product.category === categoryFilter

// // // // // //         return matchesSearch && matchesCategory
// // // // // //     })

// // // // // //     // Get unique categories for filter dropdown
// // // // // //     const categories = ["all", ...new Set(products.map((product) => product.category))]

// // // // // //     // Pagination
// // // // // //     const indexOfLastItem = currentPage * itemsPerPage
// // // // // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // // // // //     const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)
// // // // // //     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

// // // // // //     const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // // // // //     const handleDeleteClick = (product) => {
// // // // // //         setProductToDelete(product)
// // // // // //         setShowDeleteModal(true)
// // // // // //     }

// // // // // //     const confirmDelete = async () => {
// // // // // //         if (!productToDelete) return

// // // // // //         try {
// // // // // //             await deleteProduct(productToDelete.id)
// // // // // //             setProducts(products?.filter((p) => p.id !== productToDelete.id))
// // // // // //             setShowDeleteModal(false)
// // // // // //             setProductToDelete(null)
// // // // // //         } catch (err) {
// // // // // //             console.error("Error deleting product:", err)
// // // // // //             // Show error notification
// // // // // //         }
// // // // // //     }

// // // // // //     const getCategoryLabel = (category) => {
// // // // // //         return category.charAt(0).toUpperCase() + category.slice(1)
// // // // // //     }

// // // // // //     return (
// // // // // //         <AdminLayout>
// // // // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // // // // //                     <div>
// // // // // //                         <h1 className="text-2xl font-bold text-gray-900">Products</h1>
// // // // // //                         <p className="mt-2 text-sm text-gray-700">A list of all products in your inventory.</p>
// // // // // //                     </div>
// // // // // //                     <div className="mt-4 sm:mt-0">
// // // // // //                         <button
// // // // // //                             type="button"
// // // // // //                             className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
// // // // // //                         >
// // // // // //                             <Plus className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
// // // // // //                             Add Product
// // // // // //                         </button>
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // // // // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // // //                             <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
// // // // // //                         </div>
// // // // // //                         <input
// // // // // //                             type="text"
// // // // // //                             value={searchQuery}
// // // // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // // // //                             className="block w-full rounded-md border-gray-300 pl-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // // // //                             placeholder="Search products..."
// // // // // //                         />
// // // // // //                     </div>

// // // // // //                     <div className="relative max-w-xs w-full">
// // // // // //                         <select
// // // // // //                             value={categoryFilter}
// // // // // //                             onChange={(e) => setCategoryFilter(e.target.value)}
// // // // // //                             className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // // //                         >
// // // // // //                             {categories.map((category) => (
// // // // // //                                 <option key={category} value={category}>
// // // // // //                                     {category === "all" ? "All Categories" : getCategoryLabel(category)}
// // // // // //                                 </option>
// // // // // //                             ))}
// // // // // //                         </select>
// // // // // //                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // // //                             <Filter className="h-4 w-4" />
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 <div className="mt-8 flex flex-col">
// // // // // //                     <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // // // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // // //                             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // // //                                 {loading ? (
// // // // // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // // // // //                                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // // // //                                     </div>
// // // // // //                                 ) : error ? (
// // // // // //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // // // // //                                 ) : currentItems.length === 0 ? (
// // // // // //                                     <div className="text-center py-12 bg-white">
// // // // // //                                         <p className="text-gray-500">No products found.</p>
// // // // // //                                     </div>
// // // // // //                                 ) : (
// // // // // //                                     <table className="min-w-full divide-y divide-gray-300">
// // // // // //                                         <thead className="bg-gray-50">
// // // // // //                                             <tr>
// // // // // //                                                 <th
// // // // // //                                                     scope="col"
// // // // // //                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // // // //                                                 >
// // // // // //                                                     Product
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // //                                                     Category
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // //                                                     Model
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // //                                                     Price
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // // //                                                     Status
// // // // // //                                                 </th>
// // // // // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // // //                                                     <span className="sr-only">Actions</span>
// // // // // //                                                 </th>
// // // // // //                                             </tr>
// // // // // //                                         </thead>
// // // // // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // // // // //                                             {currentItems.map((product) => (
// // // // // //                                                 <tr key={product.id}>
// // // // // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // // // // //                                                         <div className="flex items-center">
// // // // // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // // // // //                                                                 <img
// // // // // //                                                                     className="h-10 w-10 rounded-full object-cover"
// // // // // //                                                                     src={product.image || `/placeholder.svg?height=40&width=40`}
// // // // // //                                                                     alt={product.name}
// // // // // //                                                                 />
// // // // // //                                                             </div>
// // // // // //                                                             <div className="ml-4">
// // // // // //                                                                 <div className="font-medium text-gray-900">{product.name}</div>
// // // // // //                                                             </div>
// // // // // //                                                         </div>
// // // // // //                                                     </td>
// // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // //                                                         <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
// // // // // //                                                             {getCategoryLabel(product.category)}
// // // // // //                                                         </span>
// // // // // //                                                     </td>
// // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.model}</td>
// // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // //                                                         {product.price ? `$${product.price.toFixed(2)}` : "Request Quote"}
// // // // // //                                                     </td>
// // // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // // //                                                         <span
// // // // // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${product.inStock
// // // // // //                                                                 ? "bg-green-100 text-green-800"
// // // // // //                                                                 : "bg-yellow-100 text-yellow-800"
// // // // // //                                                                 }`}
// // // // // //                                                         >
// // // // // //                                                             {product.inStock ? "In Stock" : "Made to Order"}
// // // // // //                                                         </span>
// // // // // //                                                     </td>
// // // // // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // // //                                                         <div className="flex items-center justify-end space-x-3">
// // // // // //                                                             <button
// // // // // //                                                                 type="button"
// // // // // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // // // // //                                                                 onClick={() => console.log("Edit product", product.id)}
// // // // // //                                                             >
// // // // // //                                                                 <Edit className="h-5 w-5" />
// // // // // //                                                             </button>
// // // // // //                                                             <button
// // // // // //                                                                 type="button"
// // // // // //                                                                 className="text-red-600 hover:text-red-900"
// // // // // //                                                                 onClick={() => handleDeleteClick(product)}
// // // // // //                                                             >
// // // // // //                                                                 <Trash2 className="h-5 w-5" />
// // // // // //                                                             </button>
// // // // // //                                                         </div>
// // // // // //                                                     </td>
// // // // // //                                                 </tr>
// // // // // //                                             ))}
// // // // // //                                         </tbody>
// // // // // //                                     </table>
// // // // // //                                 )}
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 </div>

// // // // // //                 {/* Pagination */}
// // // // // //                 {!loading && !error && totalPages > 1 && (
// // // // // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // // //                         <div className="flex flex-1 justify-between sm:hidden">
// // // // // //                             <button
// // // // // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // //                                 disabled={currentPage === 1}
// // // // // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // //                             >
// // // // // //                                 Previous
// // // // // //                             </button>
// // // // // //                             <button
// // // // // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // //                                 disabled={currentPage === totalPages}
// // // // // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // // //                             >
// // // // // //                                 Next
// // // // // //                             </button>
// // // // // //                         </div>
// // // // // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // // //                             <div>
// // // // // //                                 <p className="text-sm text-gray-700">
// // // // // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredProducts.length)}</span> of{" "}
// // // // // //                                     <span className="font-medium">{filteredProducts.length}</span> results
// // // // // //                                 </p>
// // // // // //                             </div>
// // // // // //                             <div>
// // // // // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // // //                                     <button
// // // // // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // // //                                         disabled={currentPage === 1}
// // // // // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // //                                     >
// // // // // //                                         <span className="sr-only">Previous</span>
// // // // // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // // //                                     </button>
// // // // // //                                     {[...Array(totalPages).keys()].map((number) => (
// // // // // //                                         <button
// // // // // //                                             key={number + 1}
// // // // // //                                             onClick={() => paginate(number + 1)}
// // // // // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // //                                                 }`}
// // // // // //                                         >
// // // // // //                                             {number + 1}
// // // // // //                                         </button>
// // // // // //                                     ))}
// // // // // //                                     <button
// // // // // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // // //                                         disabled={currentPage === totalPages}
// // // // // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // // //                                     >
// // // // // //                                         <span className="sr-only">Next</span>
// // // // // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // // //                                     </button>
// // // // // //                                 </nav>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 )}

// // // // // //                 {/* Delete Confirmation Modal */}
// // // // // //                 {showDeleteModal && (
// // // // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // // // //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// // // // // //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// // // // // //                             </div>

// // // // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
// // // // // //                                 &#8203;
// // // // // //                             </span>

// // // // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // // // //                                     <div className="sm:flex sm:items-start">
// // // // // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // // // // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // // // // //                                         </div>
// // // // // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // // // // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Product</h3>
// // // // // //                                             <div className="mt-2">
// // // // // //                                                 <p className="text-sm text-gray-500">
// // // // // //                                                     Are you sure you want to delete this product? This action cannot be undone.
// // // // // //                                                 </p>
// // // // // //                                             </div>
// // // // // //                                         </div>
// // // // // //                                     </div>
// // // // // //                                 </div>
// // // // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // // // //                                     <button
// // // // // //                                         type="button"
// // // // // //                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// // // // // //                                         onClick={confirmDelete}
// // // // // //                                     >
// // // // // //                                         Delete
// // // // // //                                     </button>
// // // // // //                                     <button
// // // // // //                                         type="button"
// // // // // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// // // // // //                                         onClick={() => setShowDeleteModal(false)}
// // // // // //                                     >
// // // // // //                                         Cancel
// // // // // //                                     </button>
// // // // // //                                 </div>
// // // // // //                             </div>
// // // // // //                         </div>
// // // // // //                     </div>
// // // // // //                 )}
// // // // // //             </div>
// // // // // //         </AdminLayout>
// // // // // //     )
// // // // // // }

// // // // // // export default AdminProducts


// // // // // "use client"
// // // // // import { useState, useEffect } from "react"
// // // // // import { motion } from "framer-motion"
// // // // // import { Plus, Search, Edit, Trash2, Filter, ChevronLeft, ChevronRight } from 'lucide-react'
// // // // // import AdminLayout from "../../components/admin/AdminLayout"
// // // // // import { fetchProducts, deleteProduct } from "../../services/api"

// // // // // const AdminProducts = () => {
// // // // //     const [products, setProducts] = useState([])
// // // // //     const [loading, setLoading] = useState(true)
// // // // //     const [error, setError] = useState(null)
// // // // //     const [searchQuery, setSearchQuery] = useState("")
// // // // //     const [categoryFilter, setCategoryFilter] = useState("all")
// // // // //     const [currentPage, setCurrentPage] = useState(1)
// // // // //     const [itemsPerPage] = useState(10)
// // // // //     const [showDeleteModal, setShowDeleteModal] = useState(false)
// // // // //     const [productToDelete, setProductToDelete] = useState(null)

// // // // //     useEffect(() => {
// // // // //         const loadProducts = async () => {
// // // // //             setLoading(true)
// // // // //             try {
// // // // //                 const data = await fetchProducts()
// // // // //                 console.log("API Response:", data) // Debug: Log the API response

// // // // //                 // Check if data is an array or if it has a specific property that contains the array
// // // // //                 if (Array.isArray(data)) {
// // // // //                     setProducts(data)
// // // // //                 } else if (data && typeof data === 'object') {
// // // // //                     // If data is wrapped in an object (like {products: [...]} or {data: [...]})
// // // // //                     const productsArray = data.products || data.data || Object.values(data).find(Array.isArray)
// // // // //                     if (productsArray && Array.isArray(productsArray)) {
// // // // //                         setProducts(productsArray)
// // // // //                     } else {
// // // // //                         console.error("Could not find products array in response:", data)
// // // // //                         setError("Invalid data format received from server.")
// // // // //                     }
// // // // //                 } else {
// // // // //                     console.error("Unexpected response format:", data)
// // // // //                     setError("Invalid data format received from server.")
// // // // //                 }
// // // // //             } catch (err) {
// // // // //                 console.error("Error loading products:", err)
// // // // //                 setError("Failed to load products. Please try again later.")
// // // // //             } finally {
// // // // //                 setLoading(false)
// // // // //             }
// // // // //         }

// // // // //         loadProducts()
// // // // //     }, [])

// // // // //     // Debug: Log current state of products
// // // // //     useEffect(() => {
// // // // //         console.log("Current products state:", products)
// // // // //     }, [products])

// // // // //     // Filter products based on search query and category
// // // // //     const filteredProducts = products && Array.isArray(products)
// // // // //         ? products.filter((product) => {
// // // // //             if (!product) return false

// // // // //             const matchesSearch = !searchQuery || (
// // // // //                 (product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // // // //                     product.model?.toLowerCase().includes(searchQuery.toLowerCase()))
// // // // //             )

// // // // //             const matchesCategory = categoryFilter === "all" || product.category === categoryFilter

// // // // //             return matchesSearch && matchesCategory
// // // // //         })
// // // // //         : []

// // // // //     // Debug: Log filtered products
// // // // //     useEffect(() => {
// // // // //         console.log("Filtered products:", filteredProducts)
// // // // //     }, [filteredProducts, searchQuery, categoryFilter])

// // // // //     // Get unique categories for filter dropdown
// // // // //     const categories = ["all", ...new Set(Array.isArray(products)
// // // // //         ? products
// // // // //             .filter(p => p && p.category) // Make sure product and category exist
// // // // //             .map(product => product.category)
// // // // //         : [])]

// // // // //     // Pagination
// // // // //     const indexOfLastItem = currentPage * itemsPerPage
// // // // //     const indexOfFirstItem = indexOfLastItem - itemsPerPage
// // // // //     const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)
// // // // //     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

// // // // //     const paginate = (pageNumber) => setCurrentPage(pageNumber)

// // // // //     const handleDeleteClick = (product) => {
// // // // //         setProductToDelete(product)
// // // // //         setShowDeleteModal(true)
// // // // //     }

// // // // //     const confirmDelete = async () => {
// // // // //         if (!productToDelete) return

// // // // //         try {
// // // // //             await deleteProduct(productToDelete.id)
// // // // //             setProducts(products?.filter((p) => p.id !== productToDelete.id))
// // // // //             setShowDeleteModal(false)
// // // // //             setProductToDelete(null)
// // // // //         } catch (err) {
// // // // //             console.error("Error deleting product:", err)
// // // // //             // Show error notification
// // // // //         }
// // // // //     }

// // // // //     const getCategoryLabel = (category) => {
// // // // //         if (!category) return 'Uncategorized'
// // // // //         return category.charAt(0).toUpperCase() + category.slice(1)
// // // // //     }

// // // // //     return (
// // // // //         <AdminLayout>
// // // // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // // // //                 <div className="sm:flex sm:items-center sm:justify-between">
// // // // //                     <div>
// // // // //                         <h1 className="text-2xl font-bold text-gray-900">Products</h1>
// // // // //                         <p className="mt-2 text-sm text-gray-700">A list of all products in your inventory.</p>
// // // // //                         {/* Debug info */}
// // // // //                         <p className="text-xs text-gray-500">Total products: {Array.isArray(products) ? products.length : 'N/A'}</p>
// // // // //                     </div>
// // // // //                     <div className="mt-4 sm:mt-0">
// // // // //                         <button
// // // // //                             type="button"
// // // // //                             className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
// // // // //                         >
// // // // //                             <Plus className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
// // // // //                             Add Product
// // // // //                         </button>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
// // // // //                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
// // // // //                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
// // // // //                             <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
// // // // //                         </div>
// // // // //                         <input
// // // // //                             type="text"
// // // // //                             value={searchQuery}
// // // // //                             onChange={(e) => setSearchQuery(e.target.value)}
// // // // //                             className="block w-full rounded-md border-gray-300 pl-10 focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // // // //                             placeholder="Search products..."
// // // // //                         />
// // // // //                     </div>

// // // // //                     <div className="relative max-w-xs w-full">
// // // // //                         <select
// // // // //                             value={categoryFilter}
// // // // //                             onChange={(e) => setCategoryFilter(e.target.value)}
// // // // //                             className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // // //                         >
// // // // //                             {categories.map((category) => (
// // // // //                                 <option key={category} value={category}>
// // // // //                                     {category === "all" ? "All Categories" : getCategoryLabel(category)}
// // // // //                                 </option>
// // // // //                             ))}
// // // // //                         </select>
// // // // //                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
// // // // //                             <Filter className="h-4 w-4" />
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 <div className="mt-8 flex flex-col">
// // // // //                     <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
// // // // //                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
// // // // //                             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
// // // // //                                 {loading ? (
// // // // //                                     <div className="flex justify-center items-center h-64 bg-white">
// // // // //                                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
// // // // //                                     </div>
// // // // //                                 ) : error ? (
// // // // //                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
// // // // //                                 ) : currentItems.length === 0 ? (
// // // // //                                     <div className="text-center py-12 bg-white">
// // // // //                                         <p className="text-gray-500">No products found.</p>
// // // // //                                         {/* Debug info */}
// // // // //                                         <p className="text-xs text-gray-400 mt-2">
// // // // //                                             Filter active: {searchQuery ? 'Yes' : 'No'} |
// // // // //                                             Category filter: {categoryFilter} |
// // // // //                                             Raw data count: {Array.isArray(products) ? products.length : 'N/A'}
// // // // //                                         </p>
// // // // //                                     </div>
// // // // //                                 ) : (
// // // // //                                     <table className="min-w-full divide-y divide-gray-300">
// // // // //                                         <thead className="bg-gray-50">
// // // // //                                             <tr>
// // // // //                                                 <th
// // // // //                                                     scope="col"
// // // // //                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
// // // // //                                                 >
// // // // //                                                     Product
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // //                                                     Category
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // //                                                     Model
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // //                                                     Price
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
// // // // //                                                     Status
// // // // //                                                 </th>
// // // // //                                                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
// // // // //                                                     <span className="sr-only">Actions</span>
// // // // //                                                 </th>
// // // // //                                             </tr>
// // // // //                                         </thead>
// // // // //                                         <tbody className="divide-y divide-gray-200 bg-white">
// // // // //                                             {currentItems.map((product) => (
// // // // //                                                 <tr key={product.id}>
// // // // //                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
// // // // //                                                         <div className="flex items-center">
// // // // //                                                             <div className="h-10 w-10 flex-shrink-0">
// // // // //                                                                 <img
// // // // //                                                                     className="h-10 w-10 rounded-full object-cover"
// // // // //                                                                     src={product.images[0] || `/placeholder.svg?height=40&width=40`}
// // // // //                                                                     alt={product.name}
// // // // //                                                                 />
// // // // //                                                             </div>
// // // // //                                                             <div className="ml-4">
// // // // //                                                                 <div className="font-medium text-gray-900">{product.name}</div>
// // // // //                                                             </div>
// // // // //                                                         </div>
// // // // //                                                     </td>
// // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // //                                                         <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
// // // // //                                                             {getCategoryLabel(product.category)}
// // // // //                                                         </span>
// // // // //                                                     </td>
// // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{product.model}</td>
// // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // //                                                         {product.price ? `$${product.price.toFixed(2)}` : "Request Quote"}
// // // // //                                                     </td>
// // // // //                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
// // // // //                                                         <span
// // // // //                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${product.inStock
// // // // //                                                                 ? "bg-green-100 text-green-800"
// // // // //                                                                 : "bg-yellow-100 text-yellow-800"
// // // // //                                                                 }`}
// // // // //                                                         >
// // // // //                                                             {product.inStock ? "In Stock" : "Made to Order"}
// // // // //                                                         </span>
// // // // //                                                     </td>
// // // // //                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
// // // // //                                                         <div className="flex items-center justify-end space-x-3">
// // // // //                                                             <button
// // // // //                                                                 type="button"
// // // // //                                                                 className="text-indigo-600 hover:text-indigo-900"
// // // // //                                                                 onClick={() => console.log("Edit product", product.id)}
// // // // //                                                             >
// // // // //                                                                 <Edit className="h-5 w-5" />
// // // // //                                                             </button>
// // // // //                                                             <button
// // // // //                                                                 type="button"
// // // // //                                                                 className="text-red-600 hover:text-red-900"
// // // // //                                                                 onClick={() => handleDeleteClick(product)}
// // // // //                                                             >
// // // // //                                                                 <Trash2 className="h-5 w-5" />
// // // // //                                                             </button>
// // // // //                                                         </div>
// // // // //                                                     </td>
// // // // //                                                 </tr>
// // // // //                                             ))}
// // // // //                                         </tbody>
// // // // //                                     </table>
// // // // //                                 )}
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 </div>

// // // // //                 {/* Pagination */}
// // // // //                 {!loading && !error && totalPages > 1 && (
// // // // //                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
// // // // //                         <div className="flex flex-1 justify-between sm:hidden">
// // // // //                             <button
// // // // //                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // //                                 disabled={currentPage === 1}
// // // // //                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // //                             >
// // // // //                                 Previous
// // // // //                             </button>
// // // // //                             <button
// // // // //                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // //                                 disabled={currentPage === totalPages}
// // // // //                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
// // // // //                             >
// // // // //                                 Next
// // // // //                             </button>
// // // // //                         </div>
// // // // //                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
// // // // //                             <div>
// // // // //                                 <p className="text-sm text-gray-700">
// // // // //                                     Showing <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
// // // // //                                     <span className="font-medium">{Math.min(indexOfLastItem, filteredProducts.length)}</span> of{" "}
// // // // //                                     <span className="font-medium">{filteredProducts.length}</span> results
// // // // //                                 </p>
// // // // //                             </div>
// // // // //                             <div>
// // // // //                                 <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
// // // // //                                     <button
// // // // //                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
// // // // //                                         disabled={currentPage === 1}
// // // // //                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // //                                     >
// // // // //                                         <span className="sr-only">Previous</span>
// // // // //                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
// // // // //                                     </button>
// // // // //                                     {[...Array(totalPages).keys()].map((number) => (
// // // // //                                         <button
// // // // //                                             key={number + 1}
// // // // //                                             onClick={() => paginate(number + 1)}
// // // // //                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
// // // // //                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
// // // // //                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // //                                                 }`}
// // // // //                                         >
// // // // //                                             {number + 1}
// // // // //                                         </button>
// // // // //                                     ))}
// // // // //                                     <button
// // // // //                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
// // // // //                                         disabled={currentPage === totalPages}
// // // // //                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
// // // // //                                     >
// // // // //                                         <span className="sr-only">Next</span>
// // // // //                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
// // // // //                                     </button>
// // // // //                                 </nav>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 )}

// // // // //                 {/* Delete Confirmation Modal */}
// // // // //                 {showDeleteModal && (
// // // // //                     <div className="fixed inset-0 z-50 overflow-y-auto">
// // // // //                         <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
// // // // //                             <div className="fixed inset-0 transition-opacity" aria-hidden="true">
// // // // //                                 <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
// // // // //                             </div>

// // // // //                             <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
// // // // //                                 &#8203;
// // // // //                             </span>

// // // // //                             <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
// // // // //                                 <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
// // // // //                                     <div className="sm:flex sm:items-start">
// // // // //                                         <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
// // // // //                                             <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
// // // // //                                         </div>
// // // // //                                         <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
// // // // //                                             <h3 className="text-lg leading-6 font-medium text-gray-900">Delete Product</h3>
// // // // //                                             <div className="mt-2">
// // // // //                                                 <p className="text-sm text-gray-500">
// // // // //                                                     Are you sure you want to delete this product? This action cannot be undone.
// // // // //                                                 </p>
// // // // //                                             </div>
// // // // //                                         </div>
// // // // //                                     </div>
// // // // //                                 </div>
// // // // //                                 <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
// // // // //                                     <button
// // // // //                                         type="button"
// // // // //                                         className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
// // // // //                                         onClick={confirmDelete}
// // // // //                                     >
// // // // //                                         Delete
// // // // //                                     </button>
// // // // //                                     <button
// // // // //                                         type="button"
// // // // //                                         className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
// // // // //                                         onClick={() => setShowDeleteModal(false)}
// // // // //                                     >
// // // // //                                         Cancel
// // // // //                                     </button>
// // // // //                                 </div>
// // // // //                             </div>
// // // // //                         </div>
// // // // //                     </div>
// // // // //                 )}
// // // // //             </div>
// // // // //         </AdminLayout>
// // // // //     )
// // // // // }

// // // // // export default AdminProducts


// "use client";
// import { useState, useEffect } from "react";
// import {
//     Plus,
//     Search,
//     Edit,
//     Trash2,
//     Filter,
//     ChevronLeft,
//     ChevronRight,
//     X,
// } from "lucide-react";
// import AdminLayout from "../../components/admin/AdminLayout";
// import axios from "axios";

// // Configure axios base URL
// axios.defaults.baseURL = "https://raycom-backend.onrender.com/api";

// // Define ProductForm as a separate component
// const ProductForm = ({
//     product,
//     setProduct,
//     onSubmit,
//     isEdit,
//     removeImageField,
//     removeSpecificationField,
//     addImageField,
//     addSpecificationField,
//     setShowEditModal,
//     setShowAddModal,
// }) => {
//     const handleInputChange = (field, value) => {
//         setProduct((prev) => ({ ...prev, [field]: value }));
//     };

//     const handleImageChange = (index, value) => {
//         setProduct((prev) => {
//             const newImages = [...prev.images];
//             newImages[index] = value;
//             return { ...prev, images: newImages };
//         });
//     };

//     const handleSpecChange = (index, field, value) => {
//         setProduct((prev) => {
//             const newSpecs = [...prev.specifications];
//             newSpecs[index] = { ...newSpecs[index], [field]: value };
//             return { ...prev, specifications: newSpecs };
//         });
//     };

//     return (
//         <div className="space-y-6">
//             {/* General Information */}
//             <div className="bg-white shadow sm:rounded-lg">
//                 <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">General Information</h3>
//                     <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Name</label>
//                             <input
//                                 type="text"
//                                 value={product.name}
//                                 onChange={(e) => handleInputChange("name", e.target.value)}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Model</label>
//                             <input
//                                 type="text"
//                                 value={product.model}
//                                 onChange={(e) => handleInputChange("model", e.target.value)}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Category</label>
//                             <input
//                                 type="text"
//                                 value={product.category}
//                                 onChange={(e) => handleInputChange("category", e.target.value)}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                 required
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Price</label>
//                             <input
//                                 type="number"
//                                 value={product.price}
//                                 onChange={(e) => handleInputChange("price", e.target.value)}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
//                             <input
//                                 type="number"
//                                 value={product.stockQuantity}
//                                 onChange={(e) => handleInputChange("stockQuantity", e.target.value)}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                 min="0"
//                             />
//                         </div>
//                         <div className="flex items-center">
//                             <input
//                                 type="checkbox"
//                                 checked={product.inStock}
//                                 onChange={(e) => handleInputChange("inStock", e.target.checked)}
//                                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                             />
//                             <label className="ml-2 text-sm text-gray-900">In Stock</label>
//                         </div>
//                         <div className="flex items-center">
//                             <input
//                                 type="checkbox"
//                                 checked={product.featured}
//                                 onChange={(e) => handleInputChange("featured", e.target.checked)}
//                                 className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
//                             />
//                             <label className="ml-2 text-sm text-gray-900">Featured</label>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Technical Specifications */}
//             <div className="bg-white shadow sm:rounded-lg">
//                 <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">Technical Specifications</h3>
//                     <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Frequency</label>
//                             <input
//                                 type="text"
//                                 value={product.frequency}
//                                 onChange={(e) => handleInputChange("frequency", e.target.value)}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Power</label>
//                             <input
//                                 type="text"
//                                 value={product.power}
//                                 onChange={(e) => handleInputChange("power", e.target.value)}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">VSWR</label>
//                             <input
//                                 type="text"
//                                 value={product.vswr}
//                                 onChange={(e) => handleInputChange("vswr", e.target.value)}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Connector</label>
//                             <input
//                                 type="text"
//                                 value={product.connector}
//                                 onChange={(e) => handleInputChange("connector", e.target.value)}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Peak Power</label>
//                             <input
//                                 type="text"
//                                 value={product.peakPower}
//                                 onChange={(e) => handleInputChange("peakPower", e.target.value)}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Description and Applications */}
//             <div className="bg-white shadow sm:rounded-lg">
//                 <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">Description and Applications</h3>
//                     <div className="mt-5 space-y-4">
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Description</label>
//                             <textarea
//                                 value={product.description}
//                                 onChange={(e) => handleInputChange("description", e.target.value)}
//                                 rows={4}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                             />
//                         </div>
//                         <div>
//                             <label className="block text-sm font-medium text-gray-700">Applications</label>
//                             <textarea
//                                 value={product.applications}
//                                 onChange={(e) => handleInputChange("applications", e.target.value)}
//                                 rows={4}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                             />
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Images */}
//             <div className="bg-white shadow sm:rounded-lg">
//                 <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">Images</h3>
//                     <div className="mt-5 space-y-4">
//                         {product.images.map((image, index) => (
//                             <div key={index} className="flex items-center space-x-2">
//                                 <input
//                                     type="text"
//                                     value={image}
//                                     onChange={(e) => handleImageChange(index, e.target.value)}
//                                     className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                     placeholder="Image URL"
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => removeImageField(index, isEdit)}
//                                     className="text-red-600 hover:text-red-900"
//                                 >
//                                     <X className="h-5 w-5" />
//                                 </button>
//                             </div>
//                         ))}
//                         <button
//                             type="button"
//                             onClick={() => addImageField(isEdit)}
//                             className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
//                         >
//                             Add Image
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Datasheet */}
//             <div className="bg-white shadow sm:rounded-lg">
//                 <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
//                     <div className="mt-5">
//                         <input
//                             type="text"
//                             value={product.datasheet || ""}
//                             onChange={(e) => handleInputChange("datasheet", e.target.value)}
//                             className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                             placeholder="Datasheet URL"
//                         />
//                     </div>
//                 </div>
//             </div>

//             {/* Specifications */}
//             <div className="bg-white shadow sm:rounded-lg">
//                 <div className="px-4 py-5 sm:p-6">
//                     <h3 className="text-lg font-medium text-gray-900">Specifications</h3>
//                     <div className="mt-5 space-y-4">
//                         {product.specifications.map((spec, index) => (
//                             <div key={index} className="flex items-center space-x-2">
//                                 <input
//                                     type="text"
//                                     placeholder="Name"
//                                     value={spec.name}
//                                     onChange={(e) => handleSpecChange(index, "name", e.target.value)}
//                                     className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                 />
//                                 <input
//                                     type="text"
//                                     placeholder="Value"
//                                     value={spec.value}
//                                     onChange={(e) => handleSpecChange(index, "value", e.target.value)}
//                                     className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
//                                 />
//                                 <button
//                                     type="button"
//                                     onClick={() => removeSpecificationField(index, isEdit)}
//                                     className="text-red-600 hover:text-red-900"
//                                 >
//                                     <X className="h-5 w-5" />
//                                 </button>
//                             </div>
//                         ))}
//                         <button
//                             type="button"
//                             onClick={() => addSpecificationField(isEdit)}
//                             className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
//                         >
//                             Add Specification
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Form Actions */}
//             <div className="flex justify-end space-x-3">
//                 <button
//                     type="button"
//                     onClick={onSubmit}
//                     className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                     {isEdit ? "Update Product" : "Add Product"}
//                 </button>
//                 <button
//                     type="button"
//                     onClick={() => (isEdit ? setShowEditModal(false) : setShowAddModal(false))}
//                     className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                 >
//                     Cancel
//                 </button>
//             </div>
//         </div>
//     );
// };

// const AdminProducts = () => {
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [searchQuery, setSearchQuery] = useState("");
//     const [categoryFilter, setCategoryFilter] = useState("all");
//     const [currentPage, setCurrentPage] = useState(1);
//     const [itemsPerPage] = useState(10);
//     const [showAddModal, setShowAddModal] = useState(false);
//     const [showEditModal, setShowEditModal] = useState(false);
//     const [showDeleteModal, setShowDeleteModal] = useState(false);
//     const [selectedProduct, setSelectedProduct] = useState(null);
//     const [newProduct, setNewProduct] = useState({
//         name: "",
//         model: "",
//         category: "",
//         price: "",
//         frequency: "",
//         power: "",
//         vswr: "",
//         connector: "",
//         peakPower: "",
//         inStock: true,
//         stockQuantity: 0,
//         description: "",
//         applications: "",
//         images: [""],
//         datasheet: "",
//         specifications: [{ name: "", value: "" }],
//         featured: false,
//     });
//     const [editProduct, setEditProduct] = useState(null);

//     // Fetch products on mount
//     useEffect(() => {
//         const loadProducts = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get("/products");
//                 const productsData = Array.isArray(response.data)
//                     ? response.data
//                     : response.data.products || [];
//                 setProducts(productsData);
//             } catch (err) {
//                 setError("Failed to load products. Please try again later.");
//                 console.error("Error fetching products:", err);
//                 setProducts([]);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         loadProducts();
//     }, []);

//     // Filter products with type checking
//     const filteredProducts = Array.isArray(products)
//         ? products.filter((product) => {
//             if (!product) return false;
//             const matchesSearch =
//                 !searchQuery ||
//                 (product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                     product.model?.toLowerCase().includes(searchQuery.toLowerCase()));
//             const matchesCategory =
//                 categoryFilter === "all" || product.category === categoryFilter;
//             return matchesSearch && matchesCategory;
//         })
//         : [];

//     // Get unique categories
//     const categories = Array.isArray(products)
//         ? [
//             "all",
//             ...new Set(products.filter((p) => p && p.category).map((product) => product.category)),
//         ]
//         : ["all"];

//     // Pagination
//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

//     const paginate = (pageNumber) => setCurrentPage(pageNumber);

//     // CRUD Handlers
//     const handleAddProduct = async () => {
//         try {
//             const response = await axios.post("/products", newProduct, {
//                 headers: { "Content-Type": "application/json" },
//             });
//             setProducts([...products, response.data]);
//             setShowAddModal(false);
//             setNewProduct({
//                 name: "",
//                 model: "",
//                 category: "",
//                 price: "",
//                 frequency: "",
//                 power: "",
//                 vswr: "",
//                 connector: "",
//                 peakPower: "",
//                 inStock: true,
//                 stockQuantity: 0,
//                 description: "",
//                 applications: "",
//                 images: [""],
//                 datasheet: "",
//                 specifications: [{ name: "", value: "" }],
//                 featured: false,
//             });
//         } catch (error) {
//             console.error("Error adding product:", error);
//             setError(
//                 error.response?.data?.message || "Failed to add product. Please try again."
//             );
//         }
//     };

//     const handleEditProduct = async () => {
//         if (!editProduct?._id) {
//             setError("No product selected for update.");
//             return;
//         }
//         try {
//             const response = await axios.put(`/products/${editProduct._id}`, editProduct, {
//                 headers: { "Content-Type": "application/json" },
//             });
//             setProducts(
//                 products.map((p) => (p._id === editProduct._id ? response.data : p))
//             );
//             setShowEditModal(false);
//             setEditProduct(null);
//         } catch (error) {
//             console.error("Error updating product:", error);
//             setError(
//                 error.response?.data?.message || "Failed to update product. Please try again."
//             );
//         }
//     };

//     const handleDeleteClick = (product) => {
//         setSelectedProduct(product);
//         setShowDeleteModal(true);
//     };

//     const confirmDelete = async () => {
//         if (!selectedProduct) return;
//         try {
//             await axios.delete(`/products/${selectedProduct._id}`);
//             setProducts(products.filter((p) => p._id !== selectedProduct._id));
//             setShowDeleteModal(false);
//             setSelectedProduct(null);
//         } catch (err) {
//             console.error("Error deleting product:", err);
//             setError(
//                 err.response?.data?.message || "Failed to delete product. Please try again."
//             );
//         }
//     };

//     // Form Helpers
//     const openEditModal = (product) => {
//         setEditProduct({
//             ...product,
//             images: product.images?.length ? [...product.images] : [""],
//             specifications: product.specifications?.length
//                 ? [...product.specifications]
//                 : [{ name: "", value: "" }],
//             price: product.price || "",
//             stockQuantity: product.stockQuantity || 0,
//             datasheet: product.datasheet || "",
//         });
//         setShowEditModal(true);
//     };

//     const addImageField = (isEdit) => {
//         if (isEdit) {
//             setEditProduct((prev) => ({ ...prev, images: [...prev.images, ""] }));
//         } else {
//             setNewProduct((prev) => ({ ...prev, images: [...prev.images, ""] }));
//         }
//     };

//     const removeImageField = (index, isEdit) => {
//         if (isEdit) {
//             setEditProduct((prev) => ({
//                 ...prev,
//                 images: prev.images.filter((_, i) => i !== index),
//             }));
//         } else {
//             setNewProduct((prev) => ({
//                 ...prev,
//                 images: prev.images.filter((_, i) => i !== index),
//             }));
//         }
//     };

//     const addSpecificationField = (isEdit) => {
//         if (isEdit) {
//             setEditProduct((prev) => ({
//                 ...prev,
//                 specifications: [...prev.specifications, { name: "", value: "" }],
//             }));
//         } else {
//             setNewProduct((prev) => ({
//                 ...prev,
//                 specifications: [...prev.specifications, { name: "", value: "" }],
//             }));
//         }
//     };

//     const removeSpecificationField = (index, isEdit) => {
//         if (isEdit) {
//             setEditProduct((prev) => ({
//                 ...prev,
//                 specifications: prev.specifications.filter((_, i) => i !== index),
//             }));
//         } else {
//             setNewProduct((prev) => ({
//                 ...prev,
//                 specifications: prev.specifications.filter((_, i) => i !== index),
//             }));
//         }
//     };

//     return (
//         <AdminLayout>
//             <div className="px-4 sm:px-6 lg:px-8 py-8">
//                 {/* Header */}
//                 <div className="sm:flex sm:items-center sm:justify-between">
//                     <div>
//                         <p className="mt-2 text-3xl text-gray-900">Manage your product inventory</p>
//                     </div>
//                     <div className="mt-4 sm:mt-0">
//                         <button
//                             type="button"
//                             className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
//                             onClick={() => setShowAddModal(true)}
//                         >
//                             <Plus className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
//                             Add Product
//                         </button>
//                     </div>
//                 </div>

//                 {/* Error Display */}
//                 {error && (
//                     <div className="mt-4 bg-red-100 text-red-700 p-4 rounded-md">{error}</div>
//                 )}

//                 {/* Search and Filter */}
//                 <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//                     <div className="relative rounded-md shadow-sm max-w-xs w-full">
//                         <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
//                             <Search className="h-5 w-5 text-red-400" aria-hidden="true" />
//                         </div>
//                         <input
//                             type="text"
//                             value={searchQuery}
//                             onChange={(e) => setSearchQuery(e.target.value)}
//                             className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
//                             placeholder="Search products..."
//                         />
//                     </div>
//                     <div className="relative max-w-xs w-full">
//                         <select
//                             value={categoryFilter}
//                             onChange={(e) => setCategoryFilter(e.target.value)}
//                             className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         >
//                             {categories.map((category) => (
//                                 <option key={category} value={category}>
//                                     {category === "all" ? "All Categories" : category}
//                                 </option>
//                             ))}
//                         </select>
//                         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
//                             <Filter className="h-4 w-4" />
//                         </div>
//                     </div>
//                 </div>

//                 {/* Products Table */}
//                 <div className="mt-8 flex flex-col">
//                     <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
//                         <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
//                             <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
//                                 {loading ? (
//                                     <div className="flex justify-center items-center h-64 bg-white">
//                                         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
//                                     </div>
//                                 ) : error ? (
//                                     <div className="bg-red-100 text-red-700 p-4">{error}</div>
//                                 ) : currentItems.length === 0 ? (
//                                     <div className="text-center py-12 bg-white">
//                                         <p className="text-gray-500">No products found.</p>
//                                     </div>
//                                 ) : (
//                                     <table className="min-w-full divide-y divide-gray-300">
//                                         <thead className="bg-gray-50">
//                                             <tr>
//                                                 <th
//                                                     scope="col"
//                                                     className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
//                                                 >
//                                                     Product
//                                                 </th>
//                                                 <th
//                                                     scope="col"
//                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                                                 >
//                                                     Category
//                                                 </th>
//                                                 <th
//                                                     scope="col"
//                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                                                 >
//                                                     Model
//                                                 </th>
//                                                 <th
//                                                     scope="col"
//                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                                                 >
//                                                     Price (INR)
//                                                 </th>
//                                                 <th
//                                                     scope="col"
//                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                                                 >
//                                                     Stock Quantity
//                                                 </th>
//                                                 <th
//                                                     scope="col"
//                                                     className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
//                                                 >
//                                                     Status
//                                                 </th>
//                                                 <th
//                                                     scope="col"
//                                                     className="relative py-3.5 pl-3 pr-4 sm:pr-6"
//                                                 >
//                                                     <span className="sr-only">Actions</span>
//                                                 </th>
//                                             </tr>
//                                         </thead>
//                                         <tbody className="divide-y divide-gray-200 bg-white">
//                                             {currentItems.map((product) => (
//                                                 <tr key={product._id}>
//                                                     <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
//                                                         <div className="flex items-center">
//                                                             <div className="h-10 w-10 flex-shrink-0">
//                                                                 <img
//                                                                     className="h-10 w-10 rounded-full object-cover"
//                                                                     src={
//                                                                         product.images[0] ||
//                                                                         `/placeholder.svg?height=40&width=40`
//                                                                     }
//                                                                     alt={product.name}
//                                                                 />
//                                                             </div>
//                                                             <div className="ml-4">
//                                                                 <div className="font-medium text-gray-900">
//                                                                     {product.name}
//                                                                 </div>
//                                                             </div>
//                                                         </div>
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                                         <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
//                                                             {product.category}
//                                                         </span>
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                                         {product.model}
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                                         {product.price
//                                                             ? `₹${parseFloat(product.price).toFixed(2)}`
//                                                             : "Request Quote"}
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                                         {product.stockQuantity}
//                                                     </td>
//                                                     <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
//                                                         <span
//                                                             className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${product.inStock
//                                                                 ? "bg-green-100 text-green-800"
//                                                                 : "bg-yellow-100 text-yellow-800"
//                                                                 }`}
//                                                         >
//                                                             {product.inStock ? "In Stock" : "Made to Order"}
//                                                         </span>
//                                                     </td>
//                                                     <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
//                                                         <div className="flex items-center justify-end space-x-3">
//                                                             <button
//                                                                 type="button"
//                                                                 className="text-indigo-600 hover:text-indigo-900"
//                                                                 onClick={() => openEditModal(product)}
//                                                             >
//                                                                 <Edit className="h-5 w-5" />
//                                                             </button>
//                                                             <button
//                                                                 type="button"
//                                                                 className="text-red-600 hover:text-red-900"
//                                                                 onClick={() => handleDeleteClick(product)}
//                                                             >
//                                                                 <Trash2 className="h-5 w-5" />
//                                                             </button>
//                                                         </div>
//                                                     </td>
//                                                 </tr>
//                                             ))}
//                                         </tbody>
//                                     </table>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Pagination */}
//                 {!loading && !error && totalPages > 1 && (
//                     <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
//                         <div className="flex flex-1 justify-between sm:hidden">
//                             <button
//                                 onClick={() => paginate(Math.max(1, currentPage - 1))}
//                                 disabled={currentPage === 1}
//                                 className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                             >
//                                 Previous
//                             </button>
//                             <button
//                                 onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//                                 disabled={currentPage === totalPages}
//                                 className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
//                             >
//                                 Next
//                             </button>
//                         </div>
//                         <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
//                             <div>
//                                 <p className="text-sm text-gray-700">
//                                     Showing{" "}
//                                     <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
//                                     <span className="font-medium">
//                                         {Math.min(indexOfLastItem, filteredProducts.length)}
//                                     </span>{" "}
//                                     of <span className="font-medium">{filteredProducts.length}</span>{" "}
//                                     results
//                                 </p>
//                             </div>
//                             <div>
//                                 <nav
//                                     className="isolate inline-flex -space-x-px rounded-md shadow-sm"
//                                     aria-label="Pagination"
//                                 >
//                                     <button
//                                         onClick={() => paginate(Math.max(1, currentPage - 1))}
//                                         disabled={currentPage === 1}
//                                         className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                                     >
//                                         <span className="sr-only">Previous</span>
//                                         <ChevronLeft className="h-5 w-5" aria-hidden="true" />
//                                     </button>
//                                     {[...Array(totalPages).keys()].map((number) => (
//                                         <button
//                                             key={number + 1}
//                                             onClick={() => paginate(number + 1)}
//                                             className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
//                                                 ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
//                                                 : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                                                 }`}
//                                         >
//                                             {number + 1}
//                                         </button>
//                                     ))}
//                                     <button
//                                         onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
//                                         disabled={currentPage === totalPages}
//                                         className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                                     >
//                                         <span className="sr-only">Next</span>
//                                         <ChevronRight className="h-5 w-5" aria-hidden="true" />
//                                     </button>
//                                 </nav>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Add Product Modal */}
//                 {showAddModal && (
//                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
//                         <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
//                             <div className="px-6 py-5">
//                                 <div className="flex justify-between items-center">
//                                     <h3 className="text-lg font-medium text-gray-900">Add New Product</h3>
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowAddModal(false)}
//                                         className="text-gray-400 hover:text-gray-500"
//                                     >
//                                         <X className="h-6 w-6" />
//                                     </button>
//                                 </div>
//                                 <div className="mt-5">
//                                     <ProductForm
//                                         product={newProduct}
//                                         setProduct={setNewProduct}
//                                         onSubmit={handleAddProduct}
//                                         isEdit={false}
//                                         removeImageField={removeImageField}
//                                         removeSpecificationField={removeSpecificationField}
//                                         addImageField={addImageField}
//                                         addSpecificationField={addSpecificationField}
//                                         setShowAddModal={setShowAddModal}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Edit Product Modal */}
//                 {showEditModal && (
//                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
//                         <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
//                             <div className="px-6 py-5">
//                                 <div className="flex justify-between items-center">
//                                     <h3 className="text-lg font-medium text-gray-900">Edit Product</h3>
//                                     <button
//                                         type="button"
//                                         onClick={() => setShowEditModal(false)}
//                                         className="text-gray-400 hover:text-gray-500"
//                                     >
//                                         <X className="h-6 w-6" />
//                                     </button>
//                                 </div>
//                                 <div className="mt-5">
//                                     <ProductForm
//                                         product={editProduct}
//                                         setProduct={setEditProduct}
//                                         onSubmit={handleEditProduct}
//                                         isEdit={true}
//                                         removeImageField={removeImageField}
//                                         removeSpecificationField={removeSpecificationField}
//                                         addImageField={addImageField}
//                                         addSpecificationField={addSpecificationField}
//                                         setShowEditModal={setShowEditModal}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 )}

//                 {/* Delete Confirmation Modal */}
//                 {showDeleteModal && (
//                     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
//                         <div className="bg-white rounded-lg shadow-xl max-w-lg w-full">
//                             <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
//                                 <div className="sm:flex sm:items-start">
//                                     <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
//                                         <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
//                                     </div>
//                                     <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
//                                         <h3 className="text-lg leading-6 font-medium text-gray-900">
//                                             Delete Product
//                                         </h3>
//                                         <div className="mt-2">
//                                             <p className="text-sm text-gray-500">
//                                                 Are you sure you want to delete "{selectedProduct?.name}"?
//                                                 This action cannot be undone.
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
//                                 <button
//                                     type="button"
//                                     className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
//                                     onClick={confirmDelete}
//                                 >
//                                     Delete
//                                 </button>
//                                 <button
//                                     type="button"
//                                     className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
//                                     onClick={() => setShowDeleteModal(false)}
//                                 >
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </AdminLayout>
//     );
// };

// export default AdminProducts;

"use client";
import { useState, useEffect } from "react";
import {
    Plus,
    Search,
    Edit,
    Trash2,
    Filter,
    ChevronLeft,
    ChevronRight,
    X,
} from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout";
import axios from "axios";

// Configure axios base URL
axios.defaults.baseURL = "https://raycom-backend.onrender.com/api";

// Define ProductForm as a separate component
const ProductForm = ({
    product,
    setProduct,
    onSubmit,
    isEdit,
    removeImageField,
    removeSpecificationField,
    addImageField,
    addSpecificationField,
    setShowEditModal,
    setShowAddModal,
}) => {
    const handleInputChange = (field, value) => {
        setProduct((prev) => ({ ...prev, [field]: value }));
    };

    const handleImageChange = (index, value) => {
        setProduct((prev) => {
            const newImages = [...prev.images];
            newImages[index] = value;
            return { ...prev, images: newImages };
        });
    };

    const handleSpecChange = (index, field, value) => {
        setProduct((prev) => {
            const newSpecs = [...prev.specifications];
            newSpecs[index] = { ...newSpecs[index], [field]: value };
            return { ...prev, specifications: newSpecs };
        });
    };

    return (
        <div className="space-y-6">
            {/* General Information */}
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">General Information</h3>
                    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                value={product.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Model</label>
                            <input
                                type="text"
                                value={product.model}
                                onChange={(e) => handleInputChange("model", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Category</label>
                            <input
                                type="text"
                                value={product.category}
                                onChange={(e) => handleInputChange("category", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Price (INR)</label>
                            <input
                                type="number"
                                value={product.price}
                                onChange={(e) => handleInputChange("price", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Stock Quantity</label>
                            <input
                                type="number"
                                value={product.stockQuantity}
                                onChange={(e) => handleInputChange("stockQuantity", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                min="0"
                            />
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={product.inStock}
                                onChange={(e) => handleInputChange("inStock", e.target.checked)}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-900">In Stock</label>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                checked={product.featured}
                                onChange={(e) => handleInputChange("featured", e.target.checked)}
                                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-900">Featured</label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Technical Specifications */}
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">Technical Specifications</h3>
                    <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Frequency</label>
                            <input
                                type="text"
                                value={product.frequency}
                                onChange={(e) => handleInputChange("frequency", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Power</label>
                            <input
                                type="text"
                                value={product.power}
                                onChange={(e) => handleInputChange("power", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">VSWR</label>
                            <input
                                type="text"
                                value={product.vswr}
                                onChange={(e) => handleInputChange("vswr", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Connector</label>
                            <input
                                type="text"
                                value={product.connector}
                                onChange={(e) => handleInputChange("connector", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Peak Power</label>
                            <input
                                type="text"
                                value={product.peakPower}
                                onChange={(e) => handleInputChange("peakPower", e.target.value)}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Description and Applications */}
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">Description and Applications</h3>
                    <div className="mt-5 space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea
                                value={product.description}
                                onChange={(e) => handleInputChange("description", e.target.value)}
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Applications</label>
                            <textarea
                                value={product.applications}
                                onChange={(e) => handleInputChange("applications", e.target.value)}
                                rows={4}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Images */}
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">Images</h3>
                    <div className="mt-5 space-y-4">
                        {product.images.map((image, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    value={image}
                                    onChange={(e) => handleImageChange(index, e.target.value)}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    placeholder="Image URL"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeImageField(index, isEdit)}
                                    className="text-red-600 hover:text-red-900"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addImageField(isEdit)}
                            className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                        >
                            Add Image
                        </button>
                    </div>
                </div>
            </div>

            {/* Datasheet */}
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">Key Features</h3>
                    <div className="mt-5">
                        <input
                            type="text"
                            value={product.datasheet || ""}
                            onChange={(e) => handleInputChange("datasheet", e.target.value)}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Datasheet URL"
                        />
                    </div>
                </div>
            </div>

            {/* Specifications */}
            <div className="bg-white shadow sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <h3 className="text-lg font-medium text-gray-900">Specifications</h3>
                    <div className="mt-5 space-y-4">
                        {product.specifications.map((spec, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <input
                                    type="text"
                                    placeholder="Name"
                                    value={spec.name}
                                    onChange={(e) => handleSpecChange(index, "name", e.target.value)}
                                    className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <input
                                    type="text"
                                    placeholder="Value"
                                    value={spec.value}
                                    onChange={(e) => handleSpecChange(index, "value", e.target.value)}
                                    className="block w-1/2 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                                <button
                                    type="button"
                                    onClick={() => removeSpecificationField(index, isEdit)}
                                    className="text-red-600 hover:text-red-900"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => addSpecificationField(isEdit)}
                            className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                        >
                            Add Specification
                        </button>
                    </div>
                </div>
            </div>

            {/* Form Actions */}
            <div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={onSubmit}
                    className="inline-flex justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    {isEdit ? "Update Product" : "Add Product"}
                </button>
                <button
                    type="button"
                    onClick={() => (isEdit ? setShowEditModal(false) : setShowAddModal(false))}
                    className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

const AdminProducts = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchQuery, setSearchQuery] = useState("");
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [newProduct, setNewProduct] = useState({
        name: "",
        model: "",
        category: "",
        price: "",
        frequency: "",
        power: "",
        vswr: "",
        connector: "",
        peakPower: "",
        inStock: true,
        stockQuantity: 0,
        description: "",
        applications: "",
        images: [""],
        datasheet: "",
        specifications: [{ name: "", value: "" }],
        featured: false,
    });
    const [editProduct, setEditProduct] = useState(null);
    const [currency, setCurrency] = useState("INR"); // Default to INR
    const [exchangeRate, setExchangeRate] = useState(null);

    // Fetch exchange rate on mount
    useEffect(() => {
        const fetchExchangeRate = async () => {
            const cachedData = JSON.parse(localStorage.getItem("exchangeRateData"));
            const now = Date.now();
            const twoDays = 2 * 24 * 60 * 60 * 1000;

            if (cachedData && now - cachedData.timestamp < twoDays) {
                setExchangeRate(cachedData.rate);
                return;
            }

            try {
                const response = await axios.get("https://open.er-api.com/v6/latest/USD");
                const rate = response.data.rates.INR; // 1 USD = X INR
                setExchangeRate(rate);
                localStorage.setItem("exchangeRateData", JSON.stringify({ rate, timestamp: now }));
            } catch (err) {
                console.error("Error fetching exchange rate:", err);
                setExchangeRate(83.5); // Fallback rate: 1 USD = 83.5 INR
            }
        };

        fetchExchangeRate();
    }, []);

    // Fetch products on mount
    useEffect(() => {
        const loadProducts = async () => {
            setLoading(true);
            try {
                const response = await axios.get("/products");
                const productsData = Array.isArray(response.data)
                    ? response.data
                    : response.data.products || [];
                setProducts(productsData);
            } catch (err) {
                setError("Failed to load products. Please try again later.");
                console.error("Error fetching products:", err);
                setProducts([]);
            } finally {
                setLoading(false);
            }
        };
        loadProducts();
    }, []);

    // Filter products with type checking
    const filteredProducts = Array.isArray(products)
        ? products.filter((product) => {
            if (!product) return false;
            const matchesSearch =
                !searchQuery ||
                (product.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    product.model?.toLowerCase().includes(searchQuery.toLowerCase()));
            const matchesCategory =
                categoryFilter === "all" || product.category === categoryFilter;
            return matchesSearch && matchesCategory;
        })
        : [];

    // Get unique categories
    const categories = Array.isArray(products)
        ? [
            "all",
            ...new Set(products.filter((p) => p && p.category).map((product) => product.category)),
        ]
        : ["all"];

    // Pagination
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Format price based on currency
    const formatPrice = (price) => {
        if (!price) return "Request Quote";
        if (currency === "INR") {
            return `₹${parseFloat(price).toFixed(2)}`; // Price is already in INR
        }
        if (currency === "USD" && exchangeRate) {
            return `$${(price / exchangeRate).toFixed(2)}`; // Convert INR to USD
        }
        return `₹${parseFloat(price).toFixed(2)}`; // Fallback to INR if exchange rate isn't available
    };

    // Toggle currency
    const toggleCurrency = () => {
        setCurrency(currency === "INR" ? "USD" : "INR");
    };

    // CRUD Handlers
    const handleAddProduct = async () => {
        try {
            const response = await axios.post("/products", newProduct, {
                headers: { "Content-Type": "application/json" },
            });
            setProducts([...products, response.data]);
            setShowAddModal(false);
            setNewProduct({
                name: "",
                model: "",
                category: "",
                price: "",
                frequency: "",
                power: "",
                vswr: "",
                connector: "",
                peakPower: "",
                inStock: true,
                stockQuantity: 0,
                description: "",
                applications: "",
                images: [""],
                datasheet: "",
                specifications: [{ name: "", value: "" }],
                featured: false,
            });
        } catch (error) {
            console.error("Error adding product:", error);
            setError(
                error.response?.data?.message || "Failed to add product. Please try again."
            );
        }
    };

    const handleEditProduct = async () => {
        if (!editProduct?._id) {
            setError("No product selected for update.");
            return;
        }
        try {
            const response = await axios.put(`/products/${editProduct._id}`, editProduct, {
                headers: { "Content-Type": "application/json" },
            });
            setProducts(
                products.map((p) => (p._id === editProduct._id ? response.data : p))
            );
            setShowEditModal(false);
            setEditProduct(null);
        } catch (error) {
            console.error("Error updating product:", error);
            setError(
                error.response?.data?.message || "Failed to update product. Please try again."
            );
        }
    };

    const handleDeleteClick = (product) => {
        setSelectedProduct(product);
        setShowDeleteModal(true);
    };

    const confirmDelete = async () => {
        if (!selectedProduct) return;
        try {
            await axios.delete(`/products/${selectedProduct._id}`);
            setProducts(products.filter((p) => p._id !== selectedProduct._id));
            setShowDeleteModal(false);
            setSelectedProduct(null);
        } catch (err) {
            console.error("Error deleting product:", err);
            setError(
                err.response?.data?.message || "Failed to delete product. Please try again."
            );
        }
    };

    // Form Helpers
    const openEditModal = (product) => {
        setEditProduct({
            ...product,
            images: product.images?.length ? [...product.images] : [""],
            specifications: product.specifications?.length
                ? [...product.specifications]
                : [{ name: "", value: "" }],
            price: product.price || "",
            stockQuantity: product.stockQuantity || 0,
            datasheet: product.datasheet || "",
        });
        setShowEditModal(true);
    };

    const addImageField = (isEdit) => {
        if (isEdit) {
            setEditProduct((prev) => ({ ...prev, images: [...prev.images, ""] }));
        } else {
            setNewProduct((prev) => ({ ...prev, images: [...prev.images, ""] }));
        }
    };

    const removeImageField = (index, isEdit) => {
        if (isEdit) {
            setEditProduct((prev) => ({
                ...prev,
                images: prev.images.filter((_, i) => i !== index),
            }));
        } else {
            setNewProduct((prev) => ({
                ...prev,
                images: prev.images.filter((_, i) => i !== index),
            }));
        }
    };

    const addSpecificationField = (isEdit) => {
        if (isEdit) {
            setEditProduct((prev) => ({
                ...prev,
                specifications: [...prev.specifications, { name: "", value: "" }],
            }));
        } else {
            setNewProduct((prev) => ({
                ...prev,
                specifications: [...prev.specifications, { name: "", value: "" }],
            }));
        }
    };

    const removeSpecificationField = (index, isEdit) => {
        if (isEdit) {
            setEditProduct((prev) => ({
                ...prev,
                specifications: prev.specifications.filter((_, i) => i !== index),
            }));
        } else {
            setNewProduct((prev) => ({
                ...prev,
                specifications: prev.specifications.filter((_, i) => i !== index),
            }));
        }
    };

    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                {/* Header */}
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p className="mt-2 text-3xl text-gray-900">Manage your product inventory</p>
                    </div>
                    <div className="mt-4 sm:mt-0 flex space-x-3">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setShowAddModal(true)}
                        >
                            <Plus className="-ml-1 mr-2 h-4 w-4" aria-hidden="true" />
                            Add Product
                        </button>
                        <button
                            onClick={toggleCurrency}
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Show in {currency === "INR" ? "USD" : "INR"}
                        </button>
                    </div>
                </div>

                {/* Error Display */}
                {error && (
                    <div className="mt-4 bg-red-100 text-red-700 p-4 rounded-md">{error}</div>
                )}

                {/* Search and Filter */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="relative rounded-md shadow-sm max-w-xs w-full">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <Search className="h-5 w-5 text-red-400" aria-hidden="true" />
                        </div>
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="block w-full rounded-md border border-gray-200 bg-gray-50 pl-10 pr-3 py-2 text-sm text-gray-500 focus:border-blue-500 focus:ring-blue-500 placeholder-gray-400"
                            placeholder="Search products..."
                        />
                    </div>
                    <div className="relative max-w-xs w-full">
                        <select
                            value={categoryFilter}
                            onChange={(e) => setCategoryFilter(e.target.value)}
                            className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-base focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                            {categories.map((category) => (
                                <option key={category} value={category}>
                                    {category === "all" ? "All Categories" : category}
                                </option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <Filter className="h-4 w-4" />
                        </div>
                    </div>
                </div>

                {/* Products Table */}
                <div className="mt-8 flex flex-col">
                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                {loading ? (
                                    <div className="flex justify-center items-center h-64 bg-white">
                                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
                                    </div>
                                ) : error ? (
                                    <div className="bg-red-100 text-red-700 p-4">{error}</div>
                                ) : currentItems.length === 0 ? (
                                    <div className="text-center py-12 bg-white">
                                        <p className="text-gray-500">No products found.</p>
                                    </div>
                                ) : (
                                    <table className="min-w-full divide-y divide-gray-300">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                                                >
                                                    Product
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Category
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Model
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Price ({currency})
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Stock Quantity
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                                                >
                                                    Status
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="relative py-3.5 pl-3 pr-4 sm:pr-6"
                                                >
                                                    <span className="sr-only">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-200 bg-white">
                                            {currentItems.map((product) => (
                                                <tr key={product._id}>
                                                    <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                                                        <div className="flex items-center">
                                                            <div className="h-10 w-10 flex-shrink-0">
                                                                <img
                                                                    className="h-10 w-10 rounded-full object-cover"
                                                                    src={
                                                                        product.images[0] ||
                                                                        `/placeholder.svg?height=40&width=40`
                                                                    }
                                                                    alt={product.name}
                                                                />
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="font-medium text-gray-900">
                                                                    {product.name}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <span className="inline-flex rounded-full bg-gray-100 px-2 text-xs font-semibold leading-5 text-gray-800">
                                                            {product.category}
                                                        </span>
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {product.model}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {formatPrice(product.price)}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        {product.stockQuantity}
                                                    </td>
                                                    <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                        <span
                                                            className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${product.inStock
                                                                ? "bg-green-100 text-green-800"
                                                                : "bg-yellow-100 text-yellow-800"
                                                                }`}
                                                        >
                                                            {product.inStock ? "In Stock" : "Made to Order"}
                                                        </span>
                                                    </td>
                                                    <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                        <div className="flex items-center justify-end space-x-3">
                                                            <button
                                                                type="button"
                                                                className="text-indigo-600 hover:text-indigo-900"
                                                                onClick={() => openEditModal(product)}
                                                            >
                                                                <Edit className="h-5 w-5" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="text-red-600 hover:text-red-900"
                                                                onClick={() => handleDeleteClick(product)}
                                                            >
                                                                <Trash2 className="h-5 w-5" />
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Pagination */}
                {!loading && !error && totalPages > 1 && (
                    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-4">
                        <div className="flex flex-1 justify-between sm:hidden">
                            <button
                                onClick={() => paginate(Math.max(1, currentPage - 1))}
                                disabled={currentPage === 1}
                                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                disabled={currentPage === totalPages}
                                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                            >
                                Next
                            </button>
                        </div>
                        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
                            <div>
                                <p className="text-sm text-gray-700">
                                    Showing{" "}
                                    <span className="font-medium">{indexOfFirstItem + 1}</span> to{" "}
                                    <span className="font-medium">
                                        {Math.min(indexOfLastItem, filteredProducts.length)}
                                    </span>{" "}
                                    of <span className="font-medium">{filteredProducts.length}</span>{" "}
                                    results
                                </p>
                            </div>
                            <div>
                                <nav
                                    className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                    aria-label="Pagination"
                                >
                                    <button
                                        onClick={() => paginate(Math.max(1, currentPage - 1))}
                                        disabled={currentPage === 1}
                                        className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                    {[...Array(totalPages).keys()].map((number) => (
                                        <button
                                            key={number + 1}
                                            onClick={() => paginate(number + 1)}
                                            className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${currentPage === number + 1
                                                ? "z-10 bg-red-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                                                : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                                }`}
                                        >
                                            {number + 1}
                                        </button>
                                    ))}
                                    <button
                                        onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                                        disabled={currentPage === totalPages}
                                        className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                    >
                                        <span className="sr-only">Next</span>
                                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </nav>
                            </div>
                        </div>
                    </div>
                )}

                {/* Add Product Modal */}
                {showAddModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
                        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                            <div className="px-6 py-5">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium text-gray-900">Add New Product</h3>
                                    <button
                                        type="button"
                                        onClick={() => setShowAddModal(false)}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>
                                <div className="mt-5">
                                    <ProductForm
                                        product={newProduct}
                                        setProduct={setNewProduct}
                                        onSubmit={handleAddProduct}
                                        isEdit={false}
                                        removeImageField={removeImageField}
                                        removeSpecificationField={removeSpecificationField}
                                        addImageField={addImageField}
                                        addSpecificationField={addSpecificationField}
                                        setShowAddModal={setShowAddModal}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Edit Product Modal */}
                {showEditModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
                        <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                            <div className="px-6 py-5">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-lg font-medium text-gray-900">Edit Product</h3>
                                    <button
                                        type="button"
                                        onClick={() => setShowEditModal(false)}
                                        className="text-gray-400 hover:text-gray-500"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>
                                <div className="mt-5">
                                    <ProductForm
                                        product={editProduct}
                                        setProduct={setEditProduct}
                                        onSubmit={handleEditProduct}
                                        isEdit={true}
                                        removeImageField={removeImageField}
                                        removeSpecificationField={removeSpecificationField}
                                        addImageField={addImageField}
                                        addSpecificationField={addSpecificationField}
                                        setShowEditModal={setShowEditModal}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Delete Confirmation Modal */}
                {showDeleteModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-500 bg-opacity-75">
                        <div className="bg-white rounded-lg shadow-xl max-w-lg w-full">
                            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="sm:flex sm:items-start">
                                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                        <Trash2 className="h-6 w-6 text-red-600" aria-hidden="true" />
                                    </div>
                                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                                            Delete Product
                                        </h3>
                                        <div className="mt-2">
                                            <p className="text-sm text-gray-500">
                                                Are you sure you want to delete "{selectedProduct?.name}"?
                                                This action cannot be undone.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={confirmDelete}
                                >
                                    Delete
                                </button>
                                <button
                                    type="button"
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                    onClick={() => setShowDeleteModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
};

export default AdminProducts;