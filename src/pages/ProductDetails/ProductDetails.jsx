import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
    const [data, setData] = useState({})
    const { id } = useParams();
   async function fetchProductDetails(id) {
       try {
         const options= {
            url: `https://fakestoreapi.com/products/${id}`,
            method: 'GET',
        }
        const {data} = await axios.request(options)
        setData(data)
         
        console.log(data)
       } catch (error) {
              console.error("Error fetching product details:", error)
       }
    }
    useEffect(()=>{
       fetchProductDetails(id)
    } , [])
  return (
   <>
  <h1 className="text-3xl sm:text-4xl font-extrabold dark:text-white  text-gray-800 text-center my-6">
    🛍️ Product Details
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-12 gap-2 px-4 py-6">
    {/* Product Image */}
    <div className="md:col-span-5 flex justify-center items-start">
      <img
        src={data.image}
        alt={data.title}
        className="w-72 h-96 object-cover rounded-xl shadow-xl border"
      />
    </div>

    {/* Product Info */}
    <div className="md:col-span-7 space-y-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{data.title}</h2>

      <p className="text-gray-700 text-base leading-relaxed dark:text-gray-300">
        {data.description}
      </p>

      <p className="text-xl text-green-600 font-semibold">
        💵 Price: ${data.price}
      </p>

      <p className="text-gray-700 dark:text-gray-300">
        🗂️ Category: <span className="capitalize font-medium">{data.category}</span>
      </p>

      <p className="text-yellow-600 font-medium">
        ⭐ Rating: {data.rating?.rate} / 5 ({data.rating?.count} reviews)
      </p>

      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow transition-all duration-200">
        Add to Cart
      </button>
    </div>
  </div>
</>

   

  )
}
