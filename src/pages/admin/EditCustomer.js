// "use client"
// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import AdminLayout from "../../components/admin/AdminLayout";
// import { fetchUserById, updateUser } from "../../services/api";
// import { toast } from "react-toastify";

// const EditCustomer = () => {
//     const { id } = useParams();
//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         firstName: "",
//         lastName: "",
//         company: "",
//         phone: "",
//         role: "",
//     });
//     const [loading, setLoading] = useState(false);
//     const [fetching, setFetching] = useState(true);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const loadCustomer = async () => {
//             try {
//                 const token = localStorage.getItem("token");
//                 const user = await fetchUserById(id, token);
//                 setFormData({
//                     username: user.username || "",
//                     email: user.email || "",
//                     firstName: user.firstName || "",
//                     lastName: user.lastName || "",
//                     company: user.company || "",
//                     phone: user.phone || "",
//                     role: user.role || "user",
//                 });
//             } catch (err) {
//                 console.error("Error fetching customer:", err);
//                 toast.error("Failed to load customer details");
//                 navigate("/admin/customers");
//             } finally {
//                 setFetching(false);
//             }
//         };

//         loadCustomer();
//     }, [id, navigate]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const token = localStorage.getItem("token");
//             await updateUser(id, formData, token);
//             toast.success("Customer updated successfully");
//             navigate("/admin/customers");
//         } catch (err) {
//             console.error("Error updating customer:", err);
//             toast.error(err.response?.data?.message || "Failed to update customer");
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (fetching) {
//         return (
//             <AdminLayout>
//                 <div className="flex justify-center items-center h-64">
//                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
//                 </div>
//             </AdminLayout>
//         );
//     }

//     return (
//         <AdminLayout>
//             <div className="px-4 sm:px-6 lg:px-8 py-8">
//                 <div className="sm:flex sm:items-center sm:justify-between">
//                     <div>
//                         <p className="mt-2 text-3xl text-gray-900">Edit Customer</p>
//                         <p className="mt-2 text-sm text-gray-700">Update the details for this customer.</p>
//                     </div>
//                 </div>

//                 <div className="mt-6 bg-white shadow sm:rounded-lg">
//                     <form onSubmit={handleSubmit} className="p-6 space-y-6">
//                         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                             <div>
//                                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                                     Username
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="username"
//                                     id="username"
//                                     value={formData.username}
//                                     onChange={handleChange}
//                                     required
//                                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                     Email
//                                 </label>
//                                 <input
//                                     type="email"
//                                     name="email"
//                                     id="email"
//                                     value={formData.email}
//                                     onChange={handleChange}
//                                     required
//                                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//                                     First Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="firstName"
//                                     id="firstName"
//                                     value={formData.firstName}
//                                     onChange={handleChange}
//                                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//                                     Last Name
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="lastName"
//                                     id="lastName"
//                                     value={formData.lastName}
//                                     onChange={handleChange}
//                                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="company" className="block text-sm font-medium text-gray-700">
//                                     Company
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="company"
//                                     id="company"
//                                     value={formData.company}
//                                     onChange={handleChange}
//                                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                                     Phone
//                                 </label>
//                                 <input
//                                     type="text"
//                                     name="phone"
//                                     id="phone"
//                                     value={formData.phone}
//                                     onChange={handleChange}
//                                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
//                                 />
//                             </div>
//                             <div>
//                                 <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//                                     Role
//                                 </label>
//                                 <select
//                                     name="role"
//                                     id="role"
//                                     value={formData.role}
//                                     onChange={handleChange}
//                                     className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-900 focus:border-red-500 focus:ring-red-500"
//                                 >
//                                     <option value="user">Customer</option>
//                                     <option value="admin">Admin</option>
//                                 </select>
//                             </div>
//                         </div>

//                         <div className="flex justify-end space-x-3">
//                             <button
//                                 type="button"
//                                 onClick={() => navigate("/admin/customers")}
//                                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                             >
//                                 Cancel
//                             </button>
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${loading ? "opacity-50 cursor-not-allowed" : ""
//                                     }`}
//                             >
//                                 {loading ? "Updating..." : "Update Customer"}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </AdminLayout>
//     );
// };

// export default EditCustomer;

"use client"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import AdminLayout from "../../components/admin/AdminLayout"
import axios from "axios"
import { toast } from "react-toastify"

const EditCustomer = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        role: "user",
    })
    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(true)

    useEffect(() => {
        const fetchCustomer = async () => {
            try {
                const token = localStorage.getItem("token")
                const headers = token && token.trim() !== "" ? {
                    Authorization: `Bearer ${token}`
                } : {}

                const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${id}`, { headers })
                const customer = response.data
                setFormData({
                    username: customer.username || "",
                    email: customer.email || "",
                    firstName: customer.firstName || "",
                    lastName: customer.lastName || "",
                    company: customer.company || "",
                    phone: customer.phone || "",
                    role: customer.role || "user",
                })
            } catch (err) {
                console.error("Error fetching customer:", err)
                toast.error("Failed to load customer details")
            } finally {
                setFetching(false)
            }
        }

        fetchCustomer()
    }, [id])

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            const token = localStorage.getItem("token")
            const headers = token && token.trim() !== "" ? {
                Authorization: `Bearer ${token}`
            } : {}

            await axios.put(`${process.env.REACT_APP_API_URL}/users/${id}`, formData, { headers })
            toast.success("Customer updated successfully")
            navigate("/admin/customers")
        } catch (err) {
            console.error("Error updating customer:", err)
            toast.error(err.response?.data?.message || "Failed to update customer")
        } finally {
            setLoading(false)
        }
    }

    if (fetching) {
        return (
            <AdminLayout>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                </div>
            </AdminLayout>
        )
    }

    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900">Edit Customer</h1>
                    <p className="mt-2 text-sm text-gray-700">Update the details of the customer.</p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
                                required
                            />
                        </div>

                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                                Company
                            </label>
                            <input
                                type="text"
                                name="company"
                                id="company"
                                value={formData.company}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone
                            </label>
                            <input
                                type="text"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-gray-50 py-2 px-3 text-sm text-gray-500 focus:border-red-500 focus:ring-red-500 placeholder-gray-400"
                            />
                        </div>

                        <div>
                            <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                Role
                            </label>
                            <select
                                name="role"
                                id="role"
                                value={formData.role}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 text-sm focus:outline-none focus:ring-red-500 focus:border-red-500"
                            >
                                <option value="user">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <div className="flex justify-end space-x-3">
                            <button
                                type="button"
                                onClick={() => navigate("/admin/customers")}
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                Cancel
                            </button>
                            <button
                                type="submit"
                                disabled={loading}
                                className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${loading ? "opacity-50 cursor-not-allowed" : ""
                                    }`}
                            >
                                {loading ? "Updating..." : "Update Customer"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default EditCustomer