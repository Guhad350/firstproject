  export const initialstate={
    products:[],
    total:0,
}
const shopReducer=(state,action)=>{
    const {type,pyload}=action
 switch(type){
    case"ADD_T0_CART":
    return {
        ...state,
        products:pyload.products,
    };
    case"REMOVE_FROM_CART":
    return {
      ...state,
      products:pyload.products,
  };
  case "CALCULATE-TOTAL-PRICE":
    return {
      ...state,
      total:pyload
    }


    default:return 
    throw new Error("unknown reducer");
 }
}
export default shopReducer;