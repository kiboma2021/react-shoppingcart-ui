//import { Link, NavLink } from 'react-router-dom'
import LogoImg from '../assets/logo.jpeg'

export const Header = () => {
  return (
    <header className='flex justify-around flex-wrap items-center'>
        <div className='flex justify-around flex-wrap items-center'>
            <img src={LogoImg} alt="Logo" />
            <p className='text-2xl' >Shopping Cart</p>
        </div>
        <div className='text-2xl '>
            <span className='mx-2'>Home</span>
            <span className='mx-2'>Cart</span>
        </div>
        <div className='text-2xl'>
            <span>Cart:2</span>
        </div>

    </header>
  )
}

