import { useEffect, useState } from "react"
 const Payment=()=>{
    const initialPayment={
        evc:false,
        zaad:false,
        sahal:false
    };
 const[paymentMethod, setPaymentMethod] = useState(initialPayment)
         const[updated,setUpdated]=useState(false);
         useEffect(()=>{},[updated])
 return(
    <div>
        <h2>Pay with</h2>
        <div className="payment-cards">
        <div className={`payment-card ${paymentMethod.evc &&"selected"}`}
            onClick={()=>setPaymentMethod({...initialPayment,evc:true})}>
                <h3>Evc plus </h3>  
            
        </div>
        <div className={`payment-card ${paymentMethod.zaad &&"selected"}`}
         onClick={()=>setPaymentMethod({...initialPayment,zaad:true})}>
                <h3>Zaad service</h3>
        </div>
        <div className={`payment-card ${paymentMethod.sahal &&"selected"}`}
          onClick={()=>setPaymentMethod({...initialPayment,sahal:true})} >
                <h3>Sahal</h3>
        </div>
        <form>
            <input type="text" className="form-cotrol"
            placeholder="25261...."/>
            <button className="btn-proceed">proceed!</button>
        </form>
        </div>
    </div>
 )
}
export default Payment;