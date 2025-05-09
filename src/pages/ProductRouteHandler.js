import { useParams } from "react-router-dom";
import ProductDetailPage from "./ProductDetailPage";
import ProductCategoryPage from "./ProductCategoryPage";

// Regex to match a MongoDB ObjectId (24-character hexadecimal string)
const objectIdRegex = /^[0-9a-fA-F]{24}$/;

const ProductRouteHandler = () => {
    const { param } = useParams(); // Get the dynamic parameter from the URL

    // Check if the parameter matches a MongoDB ObjectId
    if (objectIdRegex.test(param)) {
        // If it's an ObjectId, render the ProductDetailPage with the id
        return <ProductDetailPage />;
    } else {
        // Otherwise, treat it as a category and render the ProductCategoryPage
        return <ProductCategoryPage />;
    }
};

export default ProductRouteHandler;