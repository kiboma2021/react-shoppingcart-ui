
import { useTitle } from '../hooks/useTitle';
import { Card } from '../components';

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
            <Card key={product.id} product={product} />
        ))}
    </main>
  )
}
