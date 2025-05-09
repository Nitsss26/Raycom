// "use client";
// import { useState, useEffect } from "react";
// import { Link, useNavigate, useParams } from "react-router-dom";
// import AdminLayout from "../../components/admin/AdminLayout";
// import { fetchUserById, updateUser } from "../../services/api";
// import { toast } from "react-toastify";

// const EditUser = () => {
//     const { id } = useParams();
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         username: "",
//         email: "",
//         firstName: "",
//         lastName: "",
//         company: "",
//         phone: "",
//         role: "user",
//     });
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         const loadUser = async () => {
//             try {
//                 const user = await fetchUserById(id);
//                 setFormData({
//                     username: user.username || "",
//                     email: user.email || "",
//                     firstName: user.firstName || "",
//                     lastName: user.lastName || "",
//                     company: user.company || "",
//                     phone: user.phone || "",
//                     role: user.role || "user",
//                 });
//                 setLoading(false);
//             } catch (err) {
//                 console.error("Error loading user:", err);
//                 setError("Failed to load user details.");
//                 setLoading(false);
//             }
//         };

//         loadUser();
//     }, [id]);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setLoading(true);

//         try {
//             await updateUser(id, formData);
//             toast.success("User updated successfully");
//             navigate("/admin/customers");
//         } catch (err) {
//             console.error("Error updating user:", err);
//             toast.error(err || "Failed to update user");
//         } finally {
//             setLoading(false);
//         }
//     };

//     if (loading) {
//         return (
//             <AdminLayout>
//                 <div className="flex justify-center items-center h-64">
//                     <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
//                 </div>
//             </AdminLayout>
//         );
//     }

//     if (error) {
//         return (
//             <AdminLayout>
//                 <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
//             </AdminLayout>
//         );
//     }

//     return (
//         <AdminLayout>
//             <div className="px-4 sm:px-6 lg:px-8 py-8">
//                 <div className="sm:flex sm:items-center sm:justify-between">
//                     <div>
//                         <h1 className="text-2xl font-bold text-gray-900">Edit User</h1>
//                         <p className="mt-2 text-sm text-gray-700">Update user details.</p>
//                     </div>
//                     <div className="mt-4 sm:mt-0">
//                         <Link
//                             to="/admin/customers"
//                             className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                         >
//                             Back to Customers
//                         </Link>
//                     </div>
//                 </div>

//                 <div className="mt-6">
//                     <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
//                         <div>
//                             <label htmlFor="username" className="block text-sm font-medium text-gray-700">
//                                 Username
//                             </label>
//                             <input
//                                 type="text"
//                                 name="username"
//                                 id="username"
//                                 value={formData.username}
//                                 onChange={handleChange}
//                                 required
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                                 Email
//                             </label>
//                             <input
//                                 type="email"
//                                 name="email"
//                                 id="email"
//                                 value={formData.email}
//                                 onChange={handleChange}
//                                 required
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
//                                 First Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="firstName"
//                                 id="firstName"
//                                 value={formData.firstName}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
//                                 Last Name
//                             </label>
//                             <input
//                                 type="text"
//                                 name="lastName"
//                                 id="lastName"
//                                 value={formData.lastName}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="company" className="block text-sm font-medium text-gray-700">
//                                 Company
//                             </label>
//                             <input
//                                 type="text"
//                                 name="company"
//                                 id="company"
//                                 value={formData.company}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                                 Phone Number
//                             </label>
//                             <input
//                                 type="tel"
//                                 name="phone"
//                                 id="phone"
//                                 value={formData.phone}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                             />
//                         </div>

//                         <div>
//                             <label htmlFor="role" className="block text-sm font-medium text-gray-700">
//                                 Role
//                             </label>
//                             <select
//                                 name="role"
//                                 id="role"
//                                 value={formData.role}
//                                 onChange={handleChange}
//                                 className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                             >
//                                 <option value="user">Customer</option>
//                                 <option value="admin">Admin</option>
//                             </select>
//                         </div>

//                         <div className="flex space-x-3">
//                             <button
//                                 type="submit"
//                                 disabled={loading}
//                                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-red-400"
//                             >
//                                 {loading ? "Updating..." : "Update User"}
//                             </button>
//                             <Link
//                                 to="/admin/customers"
//                                 className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                             >
//                                 Cancel
//                             </Link>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </AdminLayout>
//     );
// };

// export default EditUser;

"use client";
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AdminLayout from "../../components/admin/AdminLayout";
import { fetchUserById, updateUser } from "../../services/api";
import { toast } from "react-toastify";

const EditUser = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        firstName: "",
        lastName: "",
        company: "",
        phone: "",
        role: "user",
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadUser = async () => {
            try {
                const user = await fetchUserById(id);
                setFormData({
                    username: user.username || "",
                    email: user.email || "",
                    firstName: user.firstName || "",
                    lastName: user.lastName || "",
                    company: user.company || "",
                    phone: user.phone || "",
                    role: user.role || "user",
                });
                setLoading(false);
            } catch (err) {
                console.error("Error loading user:", err);
                setError(err || "Failed to load user details.");
                setLoading(false);
            }
        };

        loadUser();
    }, [id]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Remove empty strings to avoid overwriting with empty values
            const updatedData = {};
            Object.keys(formData).forEach((key) => {
                if (formData[key] !== "") {
                    updatedData[key] = formData[key];
                }
            });

            await updateUser(id, updatedData);
            toast.success("User updated successfully");
            navigate("/admin/customers");
        } catch (err) {
            console.error("Error updating user:", err);
            toast.error(err || "Failed to update user");
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <AdminLayout>
                <div className="flex justify-center items-center h-64">
                    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-red-600"></div>
                </div>
            </AdminLayout>
        );
    }

    if (error) {
        return (
            <AdminLayout>
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{error}</div>
            </AdminLayout>
        );
    }

    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">Edit User</h1>
                        <p className="mt-2 text-sm text-gray-700">Update user details.</p>
                    </div>
                    <div className="mt-4 sm:mt-0">
                        <Link
                            to="/admin/customers"
                            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                        >
                            Back to Customers
                        </Link>
                    </div>
                </div>

                <div className="mt-6">
                    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                                Username <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="text"
                                name="username"
                                id="username"
                                value={formData.username}
                                onChange={handleChange}
                                required
                                placeholder="e.g., fiueweu"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
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
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                            >
                                <option value="user">Customer</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>

                        <div className="flex space-x-3">
                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:bg-red-400"
                            >
                                {loading ? "Updating..." : "Update User"}
                            </button>
                            <Link
                                to="/admin/customers"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                            >
                                Cancel
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </AdminLayout>
    );
};

export default EditUser;