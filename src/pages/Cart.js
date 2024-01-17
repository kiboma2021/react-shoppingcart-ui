import image1 from '../assets/1.avif';
import image2 from '../assets/2.avif';

export const Cart = () => {
  return (
    <div className='mx-40 '>
        <div className='flex flex-wrap justify-around m-5 p-5 border-4 border-gray-200 items-center'>
            <div className='w-32'  >
                <img src={image1} alt="Cart" />
            </div>
            <p className='m-5'>Sony Wh-Ch510 Bluetooth Wireless</p>
            <p className='m-5'>$145</p>
            <div>
                <span className='bg-red-600 p-2 m-2 rounded'>Remove</span>
            </div>
        </div>

        <div className='flex flex-wrap justify-around m-5 p-5 border-4 border-gray-200 items-center'>
            <div className='w-32'  >
                <img src={image2} alt="Cart" />
            </div>
            <p className='m-5'>boAt Rockerz 450</p>
            <p className='m-5'>$145</p>
            <div>
                <span className='bg-red-600 p-2 m-2 rounded'>Remove</span>
            </div>
        </div>






    </div>
  )
}

