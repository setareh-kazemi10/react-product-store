import Products from "../Products/Products.jsx";
const Wrapper = ()=>{
    return(
       <>
           <div className="container-fluid">
               <div className="row justify-content-between p-2">
                  <Products />
               </div>
           </div>
       </>
    )
}
export default Wrapper;