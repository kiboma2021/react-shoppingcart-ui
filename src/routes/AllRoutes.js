import { Route, Routes } from "react-router-dom"
import { Products,Cart } from "../pages"

export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Products title="Home" />} >Home </Route>
        <Route path="cart" element={<Cart title="Cart" />} >Cart</Route>
      
    </Routes>
  )
}

