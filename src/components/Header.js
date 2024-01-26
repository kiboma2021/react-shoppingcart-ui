import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../assets/logo.jpeg'
import { useCart } from '../context/CartContext'
import '../App.css'

export const Header = () => {
  const { cartList } = useCart();
  return (
    <header className='flex justify-around flex-wrap items-center'>
        <Link to="/" className='flex justify-around flex-wrap items-center'>
            <img src={LogoImg} alt="Logo" />
            <p className='text-3xl' >Shopping Cart</p>
        </Link>
        <div className='text-2xl '>
            <NavLink to="/" className='mx-2' end>Home</NavLink>
            <NavLink to="/cart" className='mx-2'>Cart</NavLink>
        </div>
        <div className='text-2xl'>
            <Link to="/cart">Cart: <span className='m-2 p-2 bg-red-500 rounded-full text-white'>{cartList.length} </span> </Link>
        </div>

    </header>
  )
}

