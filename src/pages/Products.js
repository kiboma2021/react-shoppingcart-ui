
import { useTitle } from '../hooks/useTitle';

import image1 from '../assets/1.avif';
import image2 from '../assets/2.avif';
import image3 from '../assets/3.avif';
import image4 from '../assets/4.avif';
import image5 from '../assets/5.avif';


export const Products = ({title}) => {

    const products=[
        {id: 145, name:"Sony Wh-Ch510 Bluetooth Wireless", price:145, image:image1},
        {id: 146, name:"boAt Rockerz 450", price:455, image:image2},
        {id: 147, name:"JBL Tune 760NC", price:145, image:image3},
        {id: 148, name:"Logitech H111 Wired", price:455, image:image4},
        {id: 149, name:"Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport", price:455, image:image5},
        {id: 150, name:"boAt Rockerz 450", price:455, image:image2},

    ]

    useTitle({title})
  return (
    <main className='flex justify-center gap-10 flex-wrap mx-40 '  >
        { products && products.map((product)=>(
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src={product.image} alt={product.name} />
            </a>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-lg tracking-tight text-gray-900 mb-2 dark:text-white">{product.name}</h5>
                </a>

                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                    <a href="/" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
            </div>
        </div>

        ))}
    </main>
  )
}
