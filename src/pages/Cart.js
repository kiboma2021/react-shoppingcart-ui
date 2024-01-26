import { useTitle } from '../hooks/useTitle';
import { useCart } from '../context/CartContext';

export const Cart = ({title}) => {
    useTitle({title});
    const { cartList,removeFromCart,total } = useCart();

  return (

    <main>
        <div className='flex justify-center my-8'>
            <p className='text-2xl font-bold'>Cart Items: {cartList.length} | Kes {total} </p>
        </div>

        <div className='mx-40 '>
            
                { cartList && cartList.map((product)=>(
                    <div key={product.id} className='flex flex-wrap justify-around m-5 p-5 border-4 border-gray-200 items-center'>
                        <div className='w-32'>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <p className='m-5'>{product.name}</p>
                        <p className='m-5'>{product.price}</p>
                        <div>
                            <span onClick={()=>removeFromCart(product)} className='bg-red-600 p-2 m-2 rounded'>Remove</span>
                        </div>
                    </div>
                )) }
        </div>

    </main>



  )
}

