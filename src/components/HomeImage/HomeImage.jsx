import image2 from "../../assets/hero.png";

export default function HomeImage() {
  return (
    <div className="relative h-screen md:h-[600px] overflow-hidden my-4">
      {/* Background Image */}
      <img
        src={image2}
        alt="Hero Banner"
        className="absolute inset-0 w-full h-full object-cover brightness-75"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 sm:px-12 text-white space-y-6 animate-fadeIn">
        <h4 className="uppercase text-lg text-yellow-400 font-semibold tracking-wide drop-shadow-md">
          New Arrivals 2025
        </h4>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Discover the Latest Trends <br className="hidden sm:block" /> in Fashion & Tech
        </h1>

        <p className="max-w-2xl text-base sm:text-lg text-gray-200 drop-shadow-md">
          Shop the best deals on electronics, clothing, and more. Fast delivery,
          secure checkout, and unbeatable prices – all in one place.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-400">
            Shop Now
          </button>
          <button className="px-6 py-3 bg-white hover:bg-gray-100 text-black font-semibold rounded shadow-lg transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-400">
            Explore Deals
          </button>
        </div>
      </div>
    </div>
  );
}
