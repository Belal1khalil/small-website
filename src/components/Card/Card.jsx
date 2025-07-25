import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Card({ productInfo }) {
  const {
    id = "0",
    title = "Untitled Product",
    category = "Uncategorized",
    description = "No description available.",
    image,
    price = "N/A",
    rating = { rate: "0", count: 0 },
  } = productInfo || {};

  return (
    <div className=" md:w-80 sm:w-96 bg-white dark:bg-gray-800 shadow-xl rounded-xl overflow-hidden transition-transform transform hover:scale-105 duration-300">
      <img
        src={image}
        alt={`Image of ${title}`}
        className="w-full h-48 object-cover"
      />

      <div className="p-4 space-y-3">
        <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 truncate ">{title}</h2>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-0.5 rounded-full capitalize">
            {category}
          </span>
          <span className="text-yellow-500 dark:text-yellow-400 font-medium">
            {rating.count} reviews
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">{description}</p>

        <div className="flex items-center justify-between font-semibold">
          <span className="text-lg text-primary dark:text-primary">${price}</span>
          <span className="text-yellow-500 dark:text-yellow-400">
            {rating.rate} <span className="text-sm">★</span>
          </span>
        </div>

        <Link
          to={`/product/${id}`}
          className="bg-green-500 dark:bg-green-600 rounded-md py-2 text-white font-bold w-full mt-2 hover:bg-green-600 dark:hover:bg-green-700 transition-all duration-200 block text-center"
        >
          Learn More
        </Link>
      </div>
    </div>
  );
}
