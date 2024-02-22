import { useState } from "react";
import useShop from "../ShopContext"
import { useEffect } from "react";
const Product=({product})=>{

 const{addToCart,removeFromCart,products} = useShop();
  const [isIncart,setIsInCart]=useState(false)
useEffect(()=>{
  const iscart=products.filter((pro)=>pro.id==product.id)
  console.log(iscart)
  if(iscart.length > 0){
    setIsInCart(true)
  }
  else{
    setIsInCart(false)
  }
},[products] )

  const handleAddToCart=()=>{
    if(isIncart){
      removeFromCart(product)
    }
    else{
      addToCart(product);

    }
   
    
   
  }
    return( 
        <div 
        className="card"
        style={{minHeight:"100%",background: ` linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1))
        ,url(${product. urlImage})`,
        backgroundSize:"cover",
        backgroundRepeat:"no-repeat"
                 
       }}>
      
         <div className="info">
            <span>{product.name}</span>
            <span>${product.price}</span>
         </div>
          <button className={`btn ${isIncart ? "btn-secondary"
          : "btn-primary"}`}
          onClick = {handleAddToCart}>
          {isIncart ? "-" :"+"}
          </button>
        </div>
    )
}
export default Product;