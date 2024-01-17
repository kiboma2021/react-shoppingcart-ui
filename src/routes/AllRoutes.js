import { Route, Routes } from "react-router-dom"


export const AllRoutes = () => {
  return (
    <Route>
        <Routes path="/" element={<Products title="/" />} >Home </Routes>
        <Routes path="cart" element={<Cart title="cart" />} >Cart</Routes>
      
    </Route>
  )
}

