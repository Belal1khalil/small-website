export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold mb-3">MyStore</h2>
          <p className="text-sm text-gray-400">Your one-stop shop for the best products online. Fast delivery, secure payments, and great deals daily!</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "Shop", "About Us", "Contact"].map((label, index) => (
              <li key={index}>
                <a
                  href="/"
                  className="inline-block hover:text-white transition transform hover:translate-x-1 duration-300"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            {["FAQ", "Shipping & Returns", "Privacy Policy", "Terms & Conditions"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="inline-block hover:text-white transition transform hover:translate-x-1 duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-white transition hover:-translate-y-1 duration-300">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-white transition hover:-translate-y-1 duration-300">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-white transition hover:-translate-y-1 duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition hover:-translate-y-1 duration-300">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-sm text-gray-500 mt-8">
        &copy; {new Date().getFullYear()} MyStore. All rights reserved.
      </div>
    </footer>
  );
}
