// "use client"
// import { useState } from "react"
// import { motion } from "framer-motion"
// import { Save, RefreshCw, Shield, Database, Globe, Mail, Bell } from "lucide-react"
// import AdminLayout from "../../components/admin/AdminLayout"
// import { toast } from "react-toastify"

// const AdminSettings = () => {
//     // General settings
//     const [generalSettings, setGeneralSettings] = useState({
//         siteName: "Raycom",
//         siteDescription: "Premium RF/Microwave solutions for telecommunications, defense, and aerospace industries",
//         contactEmail: "info@Raycom.com",
//         contactPhone: "+1 (234) 567-890",
//         address: "123 Microwave Avenue, RF City, 12345, Country",
//     })

//     // Email settings
//     const [emailSettings, setEmailSettings] = useState({
//         smtpServer: "smtp.example.com",
//         smtpPort: "587",
//         smtpUsername: "notifications@Raycom.com",
//         smtpPassword: "",
//         senderName: "Raycom",
//         senderEmail: "notifications@Raycom.com",
//     })

//     // Notification settings
//     const [notificationSettings, setNotificationSettings] = useState({
//         newRequestEmail: true,
//         newRequestSMS: false,
//         orderStatusEmail: true,
//         orderStatusSMS: false,
//         lowInventoryEmail: true,
//         lowInventoryThreshold: "5",
//     })

//     // System settings
//     const [systemSettings, setSystemSettings] = useState({
//         maintenanceMode: false,
//         debugMode: false,
//         cacheTimeout: "3600",
//         sessionTimeout: "86400",
//         maxUploadSize: "5",
//     })

//     // Loading states
//     const [loading, setLoading] = useState({
//         general: false,
//         email: false,
//         notification: false,
//         system: false,
//     })

//     // Handle general settings change
//     const handleGeneralChange = (e) => {
//         const { name, value } = e.target
//         setGeneralSettings((prev) => ({
//             ...prev,
//             [name]: value,
//         }))
//     }

//     // Handle email settings change
//     const handleEmailChange = (e) => {
//         const { name, value } = e.target
//         setEmailSettings((prev) => ({
//             ...prev,
//             [name]: value,
//         }))
//     }

//     // Handle notification settings change
//     const handleNotificationChange = (e) => {
//         const { name, value, type, checked } = e.target
//         setNotificationSettings((prev) => ({
//             ...prev,
//             [name]: type === "checkbox" ? checked : value,
//         }))
//     }

//     // Handle system settings change
//     const handleSystemChange = (e) => {
//         const { name, value, type, checked } = e.target
//         setSystemSettings((prev) => ({
//             ...prev,
//             [name]: type === "checkbox" ? checked : value,
//         }))
//     }

//     // Save settings
//     const saveSettings = async (section) => {
//         setLoading((prev) => ({ ...prev, [section]: true }))

//         try {
//             // In a real app, this would save to the backend
//             // await axios.post(`/api/settings/${section}`, settings[section])

//             // Simulate API call
//             await new Promise((resolve) => setTimeout(resolve, 800))

//             toast.success(`${section.charAt(0).toUpperCase() + section.slice(1)} settings saved successfully`)
//         } catch (error) {
//             console.error(`Error saving ${section} settings:`, error)
//             toast.error(`Failed to save ${section} settings`)
//         } finally {
//             setLoading((prev) => ({ ...prev, [section]: false }))
//         }
//     }

//     return (
//         <AdminLayout>
//             <div className="px-4 sm:px-6 lg:px-8 py-8">
//                 <div className="mb-8">
//                     <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
//                     <p className="mt-1 text-sm text-gray-500">Manage your system settings and preferences</p>
//                 </div>

//                 <div className="space-y-8">
//                     {/* General Settings */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5 }}
//                         className="bg-white shadow rounded-lg overflow-hidden"
//                     >
//                         <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center">
//                             <Globe className="h-5 w-5 text-gray-500 mr-2" />
//                             <h2 className="text-lg font-medium text-gray-900">General Settings</h2>
//                         </div>
//                         <div className="p-6">
//                             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                                 <div>
//                                     <label htmlFor="siteName" className="block text-sm font-medium text-gray-700">
//                                         Site Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="siteName"
//                                         id="siteName"
//                                         value={generalSettings.siteName}
//                                         onChange={handleGeneralChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700">
//                                         Contact Email
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="contactEmail"
//                                         id="contactEmail"
//                                         value={generalSettings.contactEmail}
//                                         onChange={handleGeneralChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="contactPhone" className="block text-sm font-medium text-gray-700">
//                                         Contact Phone
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="contactPhone"
//                                         id="contactPhone"
//                                         value={generalSettings.contactPhone}
//                                         onChange={handleGeneralChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div className="sm:col-span-2">
//                                     <label htmlFor="address" className="block text-sm font-medium text-gray-700">
//                                         Address
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="address"
//                                         id="address"
//                                         value={generalSettings.address}
//                                         onChange={handleGeneralChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div className="sm:col-span-2">
//                                     <label htmlFor="siteDescription" className="block text-sm font-medium text-gray-700">
//                                         Site Description
//                                     </label>
//                                     <textarea
//                                         name="siteDescription"
//                                         id="siteDescription"
//                                         rows={3}
//                                         value={generalSettings.siteDescription}
//                                         onChange={handleGeneralChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="mt-6 flex justify-end">
//                                 <button
//                                     type="button"
//                                     onClick={() => saveSettings("general")}
//                                     disabled={loading.general}
//                                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                                 >
//                                     {loading.general ? (
//                                         <>
//                                             <RefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
//                                             Saving...
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Save className="-ml-1 mr-2 h-4 w-4" />
//                                             Save Settings
//                                         </>
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                     </motion.div>

//                     {/* Email Settings */}
//                     {/* <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.1 }}
//                         className="bg-white shadow rounded-lg overflow-hidden"
//                     >
//                         <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center">
//                             <Mail className="h-5 w-5 text-gray-500 mr-2" />
//                             <h2 className="text-lg font-medium text-gray-900">Email Settings</h2>
//                         </div>
//                         <div className="p-6">
//                             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                                 <div>
//                                     <label htmlFor="smtpServer" className="block text-sm font-medium text-gray-700">
//                                         SMTP Server
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="smtpServer"
//                                         id="smtpServer"
//                                         value={emailSettings.smtpServer}
//                                         onChange={handleEmailChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="smtpPort" className="block text-sm font-medium text-gray-700">
//                                         SMTP Port
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="smtpPort"
//                                         id="smtpPort"
//                                         value={emailSettings.smtpPort}
//                                         onChange={handleEmailChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="smtpUsername" className="block text-sm font-medium text-gray-700">
//                                         SMTP Username
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="smtpUsername"
//                                         id="smtpUsername"
//                                         value={emailSettings.smtpUsername}
//                                         onChange={handleEmailChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="smtpPassword" className="block text-sm font-medium text-gray-700">
//                                         SMTP Password
//                                     </label>
//                                     <input
//                                         type="password"
//                                         name="smtpPassword"
//                                         id="smtpPassword"
//                                         value={emailSettings.smtpPassword}
//                                         onChange={handleEmailChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="senderName" className="block text-sm font-medium text-gray-700">
//                                         Sender Name
//                                     </label>
//                                     <input
//                                         type="text"
//                                         name="senderName"
//                                         id="senderName"
//                                         value={emailSettings.senderName}
//                                         onChange={handleEmailChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="senderEmail" className="block text-sm font-medium text-gray-700">
//                                         Sender Email
//                                     </label>
//                                     <input
//                                         type="email"
//                                         name="senderEmail"
//                                         id="senderEmail"
//                                         value={emailSettings.senderEmail}
//                                         onChange={handleEmailChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="mt-6 flex justify-end">
//                                 <button
//                                     type="button"
//                                     onClick={() => saveSettings("email")}
//                                     disabled={loading.email}
//                                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                                 >
//                                     {loading.email ? (
//                                         <>
//                                             <RefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
//                                             Saving...
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Save className="-ml-1 mr-2 h-4 w-4" />
//                                             Save Settings
//                                         </>
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                     </motion.div> */}

//                     {/* Notification Settings */}
//                     {/* <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.2 }}
//                         className="bg-white shadow rounded-lg overflow-hidden"
//                     >
//                         <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center">
//                             <Bell className="h-5 w-5 text-gray-500 mr-2" />
//                             <h2 className="text-lg font-medium text-gray-900">Notification Settings</h2>
//                         </div>
//                         <div className="p-6">
//                             <div className="space-y-6">
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         name="newRequestEmail"
//                                         id="newRequestEmail"
//                                         checked={notificationSettings.newRequestEmail}
//                                         onChange={handleNotificationChange}
//                                         className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="newRequestEmail" className="ml-3 block text-sm font-medium text-gray-700">
//                                         Email notification for new requests
//                                     </label>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         name="newRequestSMS"
//                                         id="newRequestSMS"
//                                         checked={notificationSettings.newRequestSMS}
//                                         onChange={handleNotificationChange}
//                                         className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="newRequestSMS" className="ml-3 block text-sm font-medium text-gray-700">
//                                         SMS notification for new requests
//                                     </label>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         name="orderStatusEmail"
//                                         id="orderStatusEmail"
//                                         checked={notificationSettings.orderStatusEmail}
//                                         onChange={handleNotificationChange}
//                                         className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="orderStatusEmail" className="ml-3 block text-sm font-medium text-gray-700">
//                                         Email notification for order status changes
//                                     </label>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         name="orderStatusSMS"
//                                         id="orderStatusSMS"
//                                         checked={notificationSettings.orderStatusSMS}
//                                         onChange={handleNotificationChange}
//                                         className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="orderStatusSMS" className="ml-3 block text-sm font-medium text-gray-700">
//                                         SMS notification for order status changes
//                                     </label>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         name="lowInventoryEmail"
//                                         id="lowInventoryEmail"
//                                         checked={notificationSettings.lowInventoryEmail}
//                                         onChange={handleNotificationChange}
//                                         className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="lowInventoryEmail" className="ml-3 block text-sm font-medium text-gray-700">
//                                         Email notification for low inventory
//                                     </label>
//                                 </div>
//                                 <div className="sm:w-1/2">
//                                     <label htmlFor="lowInventoryThreshold" className="block text-sm font-medium text-gray-700">
//                                         Low Inventory Threshold
//                                     </label>
//                                     <input
//                                         type="number"
//                                         name="lowInventoryThreshold"
//                                         id="lowInventoryThreshold"
//                                         value={notificationSettings.lowInventoryThreshold}
//                                         onChange={handleNotificationChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="mt-6 flex justify-end">
//                                 <button
//                                     type="button"
//                                     onClick={() => saveSettings("notification")}
//                                     disabled={loading.notification}
//                                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                                 >
//                                     {loading.notification ? (
//                                         <>
//                                             <RefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
//                                             Saving...
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Save className="-ml-1 mr-2 h-4 w-4" />
//                                             Save Settings
//                                         </>
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                     </motion.div> */}

//                     {/* System Settings */}
//                     {/* <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.3 }}
//                         className="bg-white shadow rounded-lg overflow-hidden"
//                     >
//                         <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center">
//                             <Database className="h-5 w-5 text-gray-500 mr-2" />
//                             <h2 className="text-lg font-medium text-gray-900">System Settings</h2>
//                         </div>
//                         <div className="p-6">
//                             <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         name="maintenanceMode"
//                                         id="maintenanceMode"
//                                         checked={systemSettings.maintenanceMode}
//                                         onChange={handleSystemChange}
//                                         className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="maintenanceMode" className="ml-3 block text-sm font-medium text-gray-700">
//                                         Maintenance Mode
//                                     </label>
//                                 </div>
//                                 <div className="flex items-center">
//                                     <input
//                                         type="checkbox"
//                                         name="debugMode"
//                                         id="debugMode"
//                                         checked={systemSettings.debugMode}
//                                         onChange={handleSystemChange}
//                                         className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                                     />
//                                     <label htmlFor="debugMode" className="ml-3 block text-sm font-medium text-gray-700">
//                                         Debug Mode
//                                     </label>
//                                 </div>
//                                 <div>
//                                     <label htmlFor="cacheTimeout" className="block text-sm font-medium text-gray-700">
//                                         Cache Timeout (seconds)
//                                     </label>
//                                     <input
//                                         type="number"
//                                         name="cacheTimeout"
//                                         id="cacheTimeout"
//                                         value={systemSettings.cacheTimeout}
//                                         onChange={handleSystemChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="sessionTimeout" className="block text-sm font-medium text-gray-700">
//                                         Session Timeout (seconds)
//                                     </label>
//                                     <input
//                                         type="number"
//                                         name="sessionTimeout"
//                                         id="sessionTimeout"
//                                         value={systemSettings.sessionTimeout}
//                                         onChange={handleSystemChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="maxUploadSize" className="block text-sm font-medium text-gray-700">
//                                         Max Upload Size (MB)
//                                     </label>
//                                     <input
//                                         type="number"
//                                         name="maxUploadSize"
//                                         id="maxUploadSize"
//                                         value={systemSettings.maxUploadSize}
//                                         onChange={handleSystemChange}
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="mt-6 flex justify-end">
//                                 <button
//                                     type="button"
//                                     onClick={() => saveSettings("system")}
//                                     disabled={loading.system}
//                                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                                 >
//                                     {loading.system ? (
//                                         <>
//                                             <RefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
//                                             Saving...
//                                         </>
//                                     ) : (
//                                         <>
//                                             <Save className="-ml-1 mr-2 h-4 w-4" />
//                                             Save Settings
//                                         </>
//                                     )}
//                                 </button>
//                             </div>
//                         </div>
//                     </motion.div> */}

//                     {/* Security Settings */}
//                     {/* <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         animate={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.5, delay: 0.4 }}
//                         className="bg-white shadow rounded-lg overflow-hidden"
//                     >
//                         <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center">
//                             <Shield className="h-5 w-5 text-gray-500 mr-2" />
//                             <h2 className="text-lg font-medium text-gray-900">Security Settings</h2>
//                         </div>
//                         <div className="p-6">
//                             <div className="space-y-6">
//                                 <div>
//                                     <h3 className="text-sm font-medium text-gray-700">Password Policy</h3>
//                                     <div className="mt-2 space-y-4">
//                                         <div className="flex items-center">
//                                             <input
//                                                 type="checkbox"
//                                                 id="requireUppercase"
//                                                 checked={true}
//                                                 className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                                             />
//                                             <label htmlFor="requireUppercase" className="ml-3 block text-sm text-gray-700">
//                                                 Require at least one uppercase letter
//                                             </label>
//                                         </div>
//                                         <div className="flex items-center">
//                                             <input
//                                                 type="checkbox"
//                                                 id="requireNumber"
//                                                 checked={true}
//                                                 className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                                             />
//                                             <label htmlFor="requireNumber" className="ml-3 block text-sm text-gray-700">
//                                                 Require at least one number
//                                             </label>
//                                         </div>
//                                         <div className="flex items-center">
//                                             <input
//                                                 type="checkbox"
//                                                 id="requireSpecialChar"
//                                                 checked={false}
//                                                 className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
//                                             />
//                                             <label htmlFor="requireSpecialChar" className="ml-3 block text-sm text-gray-700">
//                                                 Require at least one special character
//                                             </label>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div>
//                                     <label htmlFor="minPasswordLength" className="block text-sm font-medium text-gray-700">
//                                         Minimum Password Length
//                                     </label>
//                                     <input
//                                         type="number"
//                                         id="minPasswordLength"
//                                         value="8"
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="passwordExpiry" className="block text-sm font-medium text-gray-700">
//                                         Password Expiry (days, 0 for never)
//                                     </label>
//                                     <input
//                                         type="number"
//                                         id="passwordExpiry"
//                                         value="90"
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                                 <div>
//                                     <label htmlFor="maxLoginAttempts" className="block text-sm font-medium text-gray-700">
//                                         Max Login Attempts Before Lockout
//                                     </label>
//                                     <input
//                                         type="number"
//                                         id="maxLoginAttempts"
//                                         value="5"
//                                         className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
//                                     />
//                                 </div>
//                             </div>
//                             <div className="mt-6 flex justify-end">
//                                 <button
//                                     type="button"
//                                     className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                                 >
//                                     <Save className="-ml-1 mr-2 h-4 w-4" />
//                                     Save Settings
//                                 </button>
//                             </div>
//                         </div>
//                     </motion.div> */}
//                 </div>
//             </div>
//         </AdminLayout>
//     )
// }

// export default AdminSettings



"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Save, RefreshCw, Globe } from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout";
import { toast } from "react-toastify";
import axios from "axios";

const AdminSettings = () => {
    // Contact info settings
    const [contactInfo, setContactInfo] = useState({
        phoneNumbers: ["+91 799 928 3903", "+91 700 909 0762"],
        emailAddresses: ["info@Raycom.com", "support@Raycom.com"],
        availableTimings: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday - Sunday: Closed"],
        aboutCompany:
            "Leading provider of high-quality waveguide components and RF/Microwave solutions for telecommunications, defense, and aerospace industries.",
    });

    // Loading state
    const [loading, setLoading] = useState(false);

    // Fetch contact info on component mount
    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const response = await axios.get("/contact-info");
                setContactInfo(response.data);
            } catch (error) {
                console.error("Error fetching contact info:", error);
                toast.error("Failed to load contact info");
            }
        };
        fetchContactInfo();
    }, []);

    // Handle changes for array fields (phoneNumbers, emailAddresses, availableTimings)
    const handleArrayChange = (e, field, index) => {
        const { value } = e.target;
        setContactInfo((prev) => {
            const updatedArray = [...prev[field]];
            updatedArray[index] = value;
            return { ...prev, [field]: updatedArray };
        });
    };

    // Handle about company change
    const handleAboutCompanyChange = (e) => {
        const { value } = e.target;
        setContactInfo((prev) => ({
            ...prev,
            aboutCompany: value,
        }));
    };

    // Save contact info
    const saveContactInfo = async () => {
        setLoading(true);
        try {
            await axios.post("/contact-info", contactInfo);
            toast.success("Contact info saved successfully");
        } catch (error) {
            console.error("Error saving contact info:", error);
            toast.error("Failed to save contact info");
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminLayout>
            <div className="px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8">
                    {/* <h1 className="text-2xl font-bold text-gray-900">Settings</h1> */}
                    <p className="mt-1 text-3xl text-gray-900">Manage your system settings and preferences</p>
                </div>

                <div className="space-y-8">
                    {/* Contact Info Settings */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white shadow rounded-lg overflow-hidden"
                    >
                        <div className="px-6 py-4 border-b border-gray-200 bg-gray-50 flex items-center">
                            <Globe className="h-5 w-5 text-gray-500 mr-2" />
                            <h2 className="text-lg font-medium text-gray-900">Contact Information Settings</h2>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                                {/* Phone Numbers */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Phone Numbers</label>
                                    <input
                                        type="text"
                                        name="phoneNumbers1"
                                        value={contactInfo.phoneNumbers[0]}
                                        onChange={(e) => handleArrayChange(e, "phoneNumbers", 0)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                                    />
                                    <input
                                        type="text"
                                        name="phoneNumbers2"
                                        value={contactInfo.phoneNumbers[1]}
                                        onChange={(e) => handleArrayChange(e, "phoneNumbers", 1)}
                                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                                    />
                                </div>

                                {/* Email Addresses */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-900">Email Addresses</label>
                                    <input
                                        type="email"
                                        name="emailAddresses1"
                                        value={contactInfo.emailAddresses[0]}
                                        onChange={(e) => handleArrayChange(e, "emailAddresses", 0)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                                    />
                                    <input
                                        type="email"
                                        name="emailAddresses2"
                                        value={contactInfo.emailAddresses[1]}
                                        onChange={(e) => handleArrayChange(e, "emailAddresses", 1)}
                                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                                    />
                                </div>

                                {/* Available Timings */}
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-900">Available Timings</label>
                                    <input
                                        type="text"
                                        name="availableTimings1"
                                        value={contactInfo.availableTimings[0]}
                                        onChange={(e) => handleArrayChange(e, "availableTimings", 0)}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                                    />
                                    <input
                                        type="text"
                                        name="availableTimings2"
                                        value={contactInfo.availableTimings[1]}
                                        onChange={(e) => handleArrayChange(e, "availableTimings", 1)}
                                        className="mt-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                                    />
                                </div>

                                {/* About Company */}
                                <div className="sm:col-span-2">
                                    <label className="block text-sm font-medium text-gray-900">About Company</label>
                                    <textarea
                                        name="aboutCompany"
                                        rows={3}
                                        value={contactInfo.aboutCompany}
                                        onChange={handleAboutCompanyChange}
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button
                                    type="button"
                                    onClick={saveContactInfo}
                                    disabled={loading}
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    {loading ? (
                                        <>
                                            <RefreshCw className="animate-spin -ml-1 mr-2 h-4 w-4" />
                                            Saving...
                                        </>
                                    ) : (
                                        <>
                                            <Save className="-ml-1 mr-2 h-4 w-4" />
                                            Save Contact Info
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </AdminLayout>
    );
};

export default AdminSettings;