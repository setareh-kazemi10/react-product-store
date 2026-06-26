import Product from "./Product.jsx";
import {useContext} from "react";
import {MyContext} from "../../App.jsx";

const Products = ()=>{
    const {products} = useContext(MyContext)
    return(
        <>
            {products && products.map((element)=>{
                return <Product key={element.id} product = {element} />
            })}
        </>
    )
}

export default Products;