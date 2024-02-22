import { FaTimes } from "react-icons/fa"
import useShop from "../ShopContext";

const CartProducts=()=>{
    const {products,removeFromCart,total}=useShop();
    return(
        <div className="cart-products">
            <h2> cart products</h2>

            {products.map((product) =>(
                <div className="cart-prod">
                    <div className="cart-title-img">
                        <img src={product.urlImage} alt=""/>
                        <span>{product.name}</span>
                    </div>
                    <h5>${product.price}</h5>
                    <span className="delete"
                    onClick={()=>removeFromCart(product)}>
                    < FaTimes/>
                    </span>
                </div>
                ))}
                <div className="total-price">
                    <h2>Total price:${total}</h2>

                </div>
        </div>

    )

}
export default CartProducts;