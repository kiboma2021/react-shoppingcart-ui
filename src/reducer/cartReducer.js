export const cartReducer =(state,action)=>{
    const { type, payload } = action;

    switch(type){
        case "ADD_TO_CART":
            return { ...state, cartList: payload.cart_items}

        case "REMOVE_FROM_CART":
            return { ...state, cartList: payload.cart_items}
        
        default:
            throw new Error("No case found in cartReducer")

    }



}