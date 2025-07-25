import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import Loading from "../../components/Card/Loading/Loading";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  async function getProducts() {
    try {
      const options = {
        url: "https://fakestoreapi.com/products",
        method: "GET",
      };
      const { data } = await axios.request(options);

      setProducts(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  // Filter products by name (case-insensitive)
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Sort products based on sortOption
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low-to-high") {
      return a.price - b.price;
    } else if (sortOption === "price-high-to-low") {
      return b.price - a.price;
    } else if (sortOption === "name-a-z") {
      return a.title.localeCompare(b.title);
    } else {
      return 0; // No sorting
    }
  });

  return (
    <>
   

      <div className="flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-3 sm:space-y-0 mb-6 px-4">
        <input
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border border-gray-300 dark:border-gray-600 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-gray-200"
        >
          <option value="">Sort By</option>
          <option value="price-low-to-high">Price (Low - High)</option>
          <option value="price-high-to-low">Price (High - Low)</option>
          <option value="name-a-z">Name (a - z)</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 p-4 space-y-4">
        {sortedProducts && sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <Card key={product.id} productInfo={product} />
          ))
        ) : (
          <div className="flex justify-center items-center w-screen h-screen ">
            <Loading />
          </div>
        )}
      </div>
    </>
  );
}
