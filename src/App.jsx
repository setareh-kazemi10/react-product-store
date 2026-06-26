import React, {useEffect} from "react";
import Wrapper from "./components/wrapper/Wrapper.jsx";
import {useState} from "react";
export let MyContext = React.createContext()

const App = ()=>{
    const [products , setProducts] = useState(null);
    const fetchProducts = async ()=>{
        try {
            let data = await fetch(`https://fakestoreapi.com/products`)
            let result =await data.json();
            setProducts(result)
        }
        catch (error){
            console.log(error.message)
        }
    }
    useEffect(()=>{
        fetchProducts()
    } , [])
    return(
      <MyContext.Provider value={{products}}>
          <Wrapper />
      </MyContext.Provider>
    );
}
export default App;