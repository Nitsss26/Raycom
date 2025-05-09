// // // "use client"

// // // import { useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import AdminLayout from "../../components/admin/AdminLayout";
// // // import axios from "axios";
// // // import { toast } from "react-toastify";

// // // const AddAdmin = () => {
// // //     const [formData, setFormData] = useState({
// // //         username: "",
// // //         email: "",
// // //         phone: "",
// // //         firstName: "",
// // //         lastName: "",
// // //         company: "",
// // //         role: "admin",
// // //     });
// // //     const [error, setError] = useState(null);
// // //     const navigate = useNavigate();

// // //     const handleChange = (e) => {
// // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             const token = localStorage.getItem("token");
// // //             await axios.post(`${process.env.REACT_APP_API_URL}/customers/add-admin`, formData, {
// // //                 headers: { Authorization: `Bearer ${token}` },
// // //             });
// // //             toast.success("Admin added successfully");
// // //             navigate("/admin/customers");
// // //         } catch (err) {
// // //             console.error("Error adding admin:", err);
// // //             setError("Failed to add admin. Please try again.");
// // //             toast.error("Failed to add admin");
// // //         }
// // //     };

// // //     return (
// // //         <AdminLayout>
// // //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// // //                 <h1 className="text-3xl font-bold text-gray-900">Add Admin</h1>
// // //                 <div className="mt-6 bg-white shadow rounded-lg p-6">
// // //                     {error && (
// // //                         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// // //                             {error}
// // //                         </div>
// // //                     )}
// // //                     <form onSubmit={handleSubmit}>
// // //                         <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
// // //                             <div>
// // //                                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">
// // //                                     Username
// // //                                 </label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="username"
// // //                                     id="username"
// // //                                     value={formData.username}
// // //                                     onChange={handleChange}
// // //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // //                                     required
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// // //                                     Email
// // //                                 </label>
// // //                                 <input
// // //                                     type="email"
// // //                                     name="email"
// // //                                     id="email"
// // //                                     value={formData.email}
// // //                                     onChange={handleChange}
// // //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // //                                     required
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
// // //                                     Phone
// // //                                 </label>
// // //                                 <input
// // //                                     type="tel"
// // //                                     name="phone"
// // //                                     id="phone"
// // //                                     value={formData.phone}
// // //                                     onChange={handleChange}
// // //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // //                                     required
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
// // //                                     First Name
// // //                                 </label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="firstName"
// // //                                     id="firstName"
// // //                                     value={formData.firstName}
// // //                                     onChange={handleChange}
// // //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // //                                     required
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
// // //                                     Last Name
// // //                                 </label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="lastName"
// // //                                     id="lastName"
// // //                                     value={formData.lastName}
// // //                                     onChange={handleChange}
// // //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // //                                     required
// // //                                 />
// // //                             </div>
// // //                             <div>
// // //                                 <label htmlFor="company" className="block text-sm font-medium text-gray-700">
// // //                                     Company
// // //                                 </label>
// // //                                 <input
// // //                                     type="text"
// // //                                     name="company"
// // //                                     id="company"
// // //                                     value={formData.company}
// // //                                     onChange={handleChange}
// // //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// // //                                 />
// // //                             </div>
// // //                         </div>
// // //                         <div className="mt-6 flex justify-end space-x-3">
// // //                             <Link
// // //                                 to="/admin/customers"
// // //                                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
// // //                             >
// // //                                 Cancel
// // //                             </Link>
// // //                             <button
// // //                                 type="submit"
// // //                                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
// // //                             >
// // //                                 Add Admin
// // //                             </button>
// // //                         </div>
// // //                     </form>
// // //                 </div>
// // //             </div>
// // //         </AdminLayout>
// // //     );
// // // };

// // // export default AddAdmin;


// // "use client"

// // import { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import AdminLayout from "../../components/admin/AdminLayout";
// // import axios from "axios";
// // import { toast } from "react-toastify";

// // const AddAdmin = () => {
// //     const [formData, setFormData] = useState({
// //         username: "",
// //         email: "",
// //         password: "",
// //         phone: "",
// //         firstName: "",
// //         lastName: "",
// //         company: "",
// //         role: "admin",
// //     });
// //     const [error, setError] = useState(null);
// //     const navigate = useNavigate();

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const token = localStorage.getItem("token");
// //             await axios.post(`${process.env.REACT_APP_API_URL}/users/add-admin`, formData, {
// //                 headers: { Authorization: `Bearer ${token}` },
// //             });
// //             toast.success("Admin added successfully");
// //             navigate("/admin/users");
// //         } catch (err) {
// //             console.error("Error adding admin:", err);
// //             setError("Failed to add admin. Please try again.");
// //             toast.error("Failed to add admin");
// //         }
// //     };

// //     return (
// //         <AdminLayout>
// //             <div className="px-4 sm:px-6 lg:px-8 py-8">
// //                 <h1 className="text-3xl font-bold text-gray-900">Add Admin</h1>
// //                 <div className="mt-6 bg-white shadow rounded-lg p-6">
// //                     {error && (
// //                         <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
// //                             {error}
// //                         </div>
// //                     )}
// //                     <form onSubmit={handleSubmit}>
// //                         <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
// //                             <div>
// //                                 <label htmlFor="username" className="block text-sm font-medium text-gray-700">
// //                                     Username
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     name="username"
// //                                     id="username"
// //                                     value={formData.username}
// //                                     onChange={handleChange}
// //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //                                     Email
// //                                 </label>
// //                                 <input
// //                                     type="email"
// //                                     name="email"
// //                                     id="email"
// //                                     value={formData.email}
// //                                     onChange={handleChange}
// //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
// //                                     Password
// //                                 </label>
// //                                 <input
// //                                     type="password"
// //                                     name="password"
// //                                     id="password"
// //                                     value={formData.password}
// //                                     onChange={handleChange}
// //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
// //                                     Phone
// //                                 </label>
// //                                 <input
// //                                     type="tel"
// //                                     name="phone"
// //                                     id="phone"
// //                                     value={formData.phone}
// //                                     onChange={handleChange}
// //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
// //                                     First Name
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     name="firstName"
// //                                     id="firstName"
// //                                     value={formData.firstName}
// //                                     onChange={handleChange}
// //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
// //                                     Last Name
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     name="lastName"
// //                                     id="lastName"
// //                                     value={formData.lastName}
// //                                     onChange={handleChange}
// //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// //                                     required
// //                                 />
// //                             </div>
// //                             <div>
// //                                 <label htmlFor="company" className="block text-sm font-medium text-gray-700">
// //                                     Company
// //                                 </label>
// //                                 <input
// //                                     type="text"
// //                                     name="company"
// //                                     id="company"
// //                                     value={formData.company}
// //                                     onChange={handleChange}
// //                                     className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-gray-900 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
// //                                 />
// //                             </div>
// //                         </div>
// //                         <div className="mt-6 flex justify-end space-x-3">
// //                             <Link
// //                                 to="/admin/users"
// //                                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
// //                             >
// //                                 Cancel
// //                             </Link>
// //                             <button
// //                                 type="submit"
// //                                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition duration-300"
// //                             >
// //                                 Add Admin
// //                             </button>
// //                         </div>
// //                     </form>
// //                 </div>
// //             </div>
// //         </AdminLayout>
// //     );
// // };

// // export default AddAdmin;

// "use client"
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import AdminLayout from "../../components/admin/AdminLayout";
// import { addAdmin } from "../../services/api";
// import { toast } from "react-toastify";

// const AddAdmin = () => {
//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         password: "",
//         firstName: "",
//         lastName: "",
//         company: "",
//         phone: "",
//         role: "admin",
//     });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             const token = localStorage.getItem("token");
//             await addAdmin(formData, token);
//             toast.success("Admin added successfully");
//             navigate("/admin/customers");
//         } catch (err) {
//             console.error("Error adding admin:", err);
//             toast.error(err.response?.data?.message || "Failed to add admin");
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <AdminLayout>
//             <div className="px-4 sm:px-6 lg:px-8 py-8">
//                 <div className="sm:flex sm:items-center sm:justify-between">
//                     <div>
//                         <p className="mt-2 text-3xl text-gray-900">Add New Admin</p>
//                         <p className="mt-2 text-sm text-gray-700">Fill in the details to add a new admin user.</p>
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
//                                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//                                     Password
//                                 </label>
//                                 <input
//                                     type="password"
//                                     name="password"
//                                     id="password"
//                                     value={formData.password}
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
//                                 {loading ? "Adding..." : "Add Admin"}
//                             </button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </AdminLayout>
//     );
// };

// export default AddAdmin;

"use client"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import AdminLayout from "../../components/admin/AdminLayout"
import axios from "axios"
import { toast } from "react-toastify"

const AddAdmin = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        role: "admin",
    })
    const [loading, setLoading] = useState(false)

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

            await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, formData, { headers })
            toast.success("Admin added successfully")
            navigate("/admin/customers")
        } catch (err) {
            console.error("Error adding admin:", err)
            toast.error(err.response?.data?.message || "Failed to add admin")
        } finally {
            setLoading(false)
        }
    }

    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="max-w-2xl mx-auto">
                    <h1 className="text-3xl font-bold text-gray-900">Add New Admin</h1>
                    <p className="mt-2 text-sm text-gray-700">Fill in the details to add a new admin to the system.</p>

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
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                name="password"
                                id="password"
                                value={formData.password}
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
                                <option value="admin">Admin</option>
                                <option value="user">Customer</option>
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
                                {loading ? "Adding..." : "Add Admin"}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AddAdmin