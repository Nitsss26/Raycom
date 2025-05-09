// const ProductSpecsTable = ({ product }) => {
//   // Define specifications based on product category
//   const getSpecifications = () => {
//     const baseSpecs = [
//       { name: "Model", value: product.model },
//       { name: "Frequency Range", value: product.frequency ? `${product.frequency} GHz` : "N/A" },
//       { name: "VSWR", value: product.vswr || "N/A" },
//       { name: "Connector Type", value: product.connector || "N/A" },
//       { name: "Average Power", value: product.power ? `${product.power} W` : "N/A" },
//       { name: "Peak Power", value: product.peakPower ? `${product.peakPower} kW` : "N/A" },
//     ]

//     // Add category-specific specs
//     switch (product.category) {
//       case "waveguide":
//         return [
//           ...baseSpecs,
//           { name: "Material", value: product.material || "Aluminum" },
//           { name: "Flange Type", value: product.flange || "Standard" },
//           { name: "Length", value: product.length ? `${product.length} mm` : "N/A" },
//         ]
//       case "attenuator":
//         return [
//           ...baseSpecs,
//           { name: "Attenuation Range", value: product.attenuationRange || "N/A" },
//           { name: "Insertion Loss", value: product.insertionLoss || "N/A" },
//         ]
//       case "circulator":
//         return [
//           ...baseSpecs,
//           { name: "Isolation", value: product.isolation || "N/A" },
//           { name: "Insertion Loss", value: product.insertionLoss || "N/A" },
//         ]
//       default:
//         return baseSpecs
//     }
//   }

//   const specifications = getSpecifications()

//   return (
//     <div className="overflow-x-auto">
//       <table className="min-w-full divide-y divide-gray-200">
//         <thead className="bg-gray-50">
//           <tr>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Specification
//             </th>
//             <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//               Value
//             </th>
//           </tr>
//         </thead>
//         <tbody className="bg-white divide-y divide-gray-200">
//           {specifications.map((spec, index) => (
//             <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
//               <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{spec.name}</td>
//               <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{spec.value}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default ProductSpecsTable

const ProductSpecsTable = ({ specifications }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Specification
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
              Value
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {Object.entries(specifications).map(([key, value], index) => (
            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{key}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ProductSpecsTable
