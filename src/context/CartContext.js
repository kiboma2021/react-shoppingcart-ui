import { createContext } from "react"

const initialState = {
    cartList: [],
    total: 0,
}

const CartContext = createContext(initialState);
