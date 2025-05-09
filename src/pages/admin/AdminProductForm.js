"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import AdminLayout from "../../components/admin/AdminLayout"

const AdminProductForm = () => {
    const { productId } = useParams()
    const navigate = useNavigate()
    const isEditMode = !!productId

    const [formData, setFormData] = useState({
        name: "",
        category: "",
        description: "",
        price: "",
        frequency: "",
        power: "",
        connector: "",
        inStock: true,
        featured: false,
        images: [],
    })

    const [loading, setLoading] = useState(isEditMode)
    const [submitting, setSubmitting] = useState(false)
    const [error, setError] = useState(null)
    const [imagePreview, setImagePreview] = useState(null)

    const categories = [
        { id: "waveguide-straight", name: "Waveguide Straight" },
        { id: "waveguide-twist", name: "Waveguide Twist" },
        { id: "waveguide-to-coaxial-adapter", name: "Waveguide to Coaxial Adapter" },
        { id: "waveguide-bend", name: "Waveguide Bend" },
        { id: "directional-coupler", name: "Directional Coupler" },
        { id: "waveguide-termination", name: "Waveguide Termination" },
    ]

    // Mock product data for edit mode
    const mockProduct = {
        id: "1",
        name: "WR-90 Straight Waveguide Section",
        category: "waveguide-straight",
        description: "Precision machined WR-90 straight waveguide section for X-band applications.",
        price: "195.00",
        frequency: "8.2 - 12.4 GHz",
        power: "1000W",
        connector: "UG-39/U",
        inStock: true,
        featured: true,
        images: ["/images/waveguide-components/waveguide-straight.jpg"],
    }

    useEffect(() => {
        if (isEditMode) {
            // In a real application, you would fetch the product data
            // const fetchProduct = async () => {
            //   try {
            //     const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/admin/products/${productId}`);
            //     setFormData(response.data);
            //   } catch (err) {
            //     console.error('Error fetching product:', err);
            //     setError('Failed to load product data. Please try again later.');
            //   } finally {
            //     setLoading(false);
            //   }
            // };
            // fetchProduct();

            // Using mock data for demonstration
            setFormData(mockProduct)
            setImagePreview(mockProduct.images[0])
            setLoading(false)
        }
    }, [productId, isEditMode])

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            // In a real application, you would upload the file to your server or cloud storage
            // For demonstration, we'll just create a local URL
            const imageUrl = URL.createObjectURL(file)
            setImagePreview(imageUrl)
            setFormData((prev) => ({
                ...prev,
                images: [imageUrl],
            }))
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSubmitting(true)
        setError(null)

        try {
            // Validate form
            if (!formData.name || !formData.category || !formData.price) {
                throw new Error("Please fill in all required fields")
            }

            // In a real application, you would send the data to your API
            // const response = await axios({
            //   method: isEditMode ? 'put' : 'post',
            //   url: isEditMode
            //     ? `${process.env.REACT_APP_API_URL}/api/admin/products/${productId}`
            //     : `${process.env.REACT_APP_API_URL}/api/admin/products`,
            //   data: formData
            // });

            // Show success message
            alert(`Product ${isEditMode ? "updated" : "created"} successfully!`)

            // Redirect to products list
            navigate("/admin/products")
        } catch (err) {
            console.error("Error submitting product:", err)
            setError(err.message || `Failed to ${isEditMode ? "update" : "create"} product. Please try again.`)
        } finally {
            setSubmitting(false)
        }
    }

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex justify-center items-center h-64">
                    <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-900 border-r-transparent"></div>
                    <p className="ml-2 text-gray-600">Loading product data...</p>
                </div>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            <div className="mb-6">
                <div className="flex items-center gap-2 mb-1">
                    <button onClick={() => navigate("/admin/products")} className="text-blue-900 hover:text-blue-700">
                        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                    </button>
                    <h1 className="text-2xl font-bold text-gray-800">{isEditMode ? "Edit Product" : "Add New Product"}</h1>
                </div>
            </div>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                    <p>{error}</p>
                </div>
            )}

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <form onSubmit={handleSubmit}>
                    <div className="p-6">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Left Column - Basic Info */}
                            <div className="lg:col-span-2 space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        Product Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                                        Category *
                                    </label>
                                    <select
                                        id="category"
                                        name="category"
                                        value={formData.category}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="">Select a category</option>
                                        {categories.map((category) => (
                                            <option key={category.id} value={category.id}>
                                                {category.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                    ></textarea>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                                            Price ($) *
                                        </label>
                                        <input
                                            type="number"
                                            id="price"
                                            name="price"
                                            value={formData.price}
                                            onChange={handleChange}
                                            step="0.01"
                                            min="0"
                                            required
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="frequency" className="block text-sm font-medium text-gray-700 mb-1">
                                            Frequency Range
                                        </label>
                                        <input
                                            type="text"
                                            id="frequency"
                                            name="frequency"
                                            value={formData.frequency}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="power" className="block text-sm font-medium text-gray-700 mb-1">
                                            Power Rating
                                        </label>
                                        <input
                                            type="text"
                                            id="power"
                                            name="power"
                                            value={formData.power}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="connector" className="block text-sm font-medium text-gray-700 mb-1">
                                            Connector Type
                                        </label>
                                        <input
                                            type="text"
                                            id="connector"
                                            name="connector"
                                            value={formData.connector}
                                            onChange={handleChange}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </div>
                                </div>

                                <div className="flex items-center space-x-6">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="inStock"
                                            name="inStock"
                                            checked={formData.inStock}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="inStock" className="ml-2 block text-sm text-gray-700">
                                            In Stock
                                        </label>
                                    </div>

                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="featured"
                                            name="featured"
                                            checked={formData.featured}
                                            onChange={handleChange}
                                            className="h-4 w-4 text-blue-900 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
                                            Featured Product
                                        </label>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Image Upload */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Product Image</label>
                                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                    <div className="space-y-1 text-center">
                                        {imagePreview ? (
                                            <div>
                                                <img
                                                    src={imagePreview || "/placeholder.svg"}
                                                    alt="Product preview"
                                                    className="mx-auto h-64 w-full object-cover rounded-md"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => {
                                                        setImagePreview(null)
                                                        setFormData((prev) => ({ ...prev, images: [] }))
                                                    }}
                                                    className="mt-2 inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ) : (
                                            <>
                                                <svg
                                                    className="mx-auto h-12 w-12 text-gray-400"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    viewBox="0 0 48 48"
                                                    aria-hidden="true"
                                                >
                                                    <path
                                                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                                        strokeWidth={2}
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="image-upload"
                                                        className="relative cursor-pointer bg-white rounded-md font-medium text-blue-900 hover:text-blue-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input
                                                            id="image-upload"
                                                            name="image-upload"
                                                            type="file"
                                                            accept="image/*"
                                                            className="sr-only"
                                                            onChange={handleImageChange}
                                                        />
                                                    </label>
                                                    <p className="pl-1">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex justify-end">
                        <button
                            type="button"
                            onClick={() => navigate("/admin/products")}
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 mr-3"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="bg-blue-900 hover:bg-blue-800 text-white py-2 px-4 rounded-md flex items-center"
                        >
                            {submitting ? (
                                <>
                                    <svg
                                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                                    Saving...
                                </>
                            ) : (
                                `${isEditMode ? "Update" : "Create"} Product`
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </AdminLayout>
    )
}

export default AdminProductForm
