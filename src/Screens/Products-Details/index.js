import './style.css'
import Product_Details from "../../Component/Product-Details";
import Technical from "../../Component/Technical-Details";
import Header from "../../Component/Header/Header";


function ProductDetails(){
    return(
        <>
            <Header/>
    <Product_Details/>
    <Technical/>
    </>
)

}
export default ProductDetails;