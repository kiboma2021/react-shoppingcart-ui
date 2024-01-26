import { createContext, useContext,useReducer } from "react"
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
    cartList: [],
    total: 10,
}

const CartContext = createContext(initialState);


export const CartProvider = ({children}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState); 
    const value={
        total: state.total,
        cartList: state.cartList
    }
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart =() => {
    const context = useContext(CartContext);
    return context;

}