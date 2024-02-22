import { createContext, useContext, useReducer } from "react";
import shopReducer, { initialstate } from "./shopReducer";
const ShopContext=createContext(initialstate)
 export const ShopProvider=({children})=>{
   const   [state,dispatch]= useReducer(shopReducer,initialstate);
   const addToCart=(product)=>{
    const updatedProduct=state.products.concat(product);
     calculateTotal(updatedProduct)
    dispatch({
        type:"ADD_T0_CART",
        pyload :{
         products:updatedProduct 
        }  
   })

   }
const removeFromCart=(product)=>{
  const updatedProduct=state.products.filter(p=>p.id !==
    product.id
    )
    calculateTotal(updatedProduct)
    dispatch({
      type :"REMOVE_FROM_CART",
      pyload:{
        products:updatedProduct
      }
    })

}
const calculateTotal=(products)=>{
let total=0;
products.forEach(pro=>{
  total+= pro.price

})
dispatch({
  type:"CALCULATE-TOTAL-PRICE",
  pyload:total
})
}


   const values  = {
    products: state.products,
    total: state.total,
    addToCart,
    removeFromCart,
    
   };
   return <ShopContext.Provider value={values}>
         {children}
   </ShopContext.Provider>
} 
const useShop=()=>{
    const context=useContext(ShopContext);
      if(context===undefined){
        throw new Error("context must be used inside Shopcontext");
    }
    return context;
}
export default useShop; 