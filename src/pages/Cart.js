import { useTitle } from '../hooks/useTitle';
import { useCart } from '../context/CartContext';
import image1 from '../assets/1.avif';
import image2 from '../assets/2.avif';

export const Cart = ({title}) => {
    useTitle({title});
    const { total } = useCart();

    const cart_products=[
        {id: 145, name:"Sony Wh-Ch510 Bluetooth Wireless", price:145, image:image1},
        {id: 149, name:"boAt Rockerz 450", price:455, image:image2},
    ]
  return (

    <main>
        <div className='flex justify-center my-8'>
            <p className='text-2xl font-bold'>Cart Items: {total} | Kes 2,542  </p>
        </div>

        <div className='mx-40 '>
            
                { cart_products && cart_products.map((product)=>(
                    <div key={product.id} className='flex flex-wrap justify-around m-5 p-5 border-4 border-gray-200 items-center'>
                        <div className='w-32'>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <p className='m-5'>{product.name}</p>
                        <p className='m-5'>{product.price}</p>
                        <div>
                            <span className='bg-red-600 p-2 m-2 rounded'>Remove</span>
                        </div>
                    </div>
                )) }
        </div>

    </main>



  )
}

