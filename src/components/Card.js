import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Card = ({product}) => {
  const {id,image, name, price } = product;
  const { cartList,addToCart,removeFromCart } = useCart();

  const [isInCart, setIsInCart]= useState(false);

  useEffect(() => {
    const checkCartItems=cartList.find(item=> item.id === id);
    if (checkCartItems){
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  },[cartList,id]);

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <Link href="/">
        <img className="p-8 rounded-t-lg" src={image} alt={name} />
    </Link>
    <div className="px-5 pb-5">
        <NavLink href="/">
            <h5 className="text-lg tracking-tight text-gray-900 mb-2 dark:text-white">{name}</h5>
        </NavLink>

        <div className="flex items-center justify-between">
            <span className="text-3xl font-bold text-gray-900 dark:text-white">${price}</span>
            { isInCart ? (
              <span onClick={()=>removeFromCart(product)} className='bg-red-600 p-2 m-2 rounded text-white'>Remove</span>
            ):(
              <span onClick={()=>addToCart(product) } className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</span>
            )}
            
        </div>
    </div>
  </div>
  )
}
