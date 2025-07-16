import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useContext, useState, useEffect } from "react";
import myContext from "../../context/myContext";

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context;
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (getAllProduct && Array.isArray(getAllProduct)) {
      const results = getAllProduct
        .filter((obj) => obj.title?.toLowerCase().includes(search.toLowerCase()))
        .slice(0, 8);
      setFilteredData(results);
    }
  }, [search, getAllProduct]);

  return (
    <div className="relative">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white/90 placeholder-gray-400 rounded-full px-4 py-2.5 w-full max-w-xs sm:max-w-md lg:max-w-lg outline-none text-black shadow-md focus:ring-2 focus:ring-purple-300 transition-all duration-300 text-lg"
        />
      </div>
      {search && (
        <div className="absolute bg-white/95 w-full max-w-xs sm:max-w-md lg:max-w-lg z-50 mt-1 rounded-lg shadow-xl px-4 py-3 transform transition-all duration-300 ease-in-out opacity-0 animate-dropdown">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <div
                key={index}
                className="py-2 px-2 hover:bg-gray-100 rounded cursor-pointer transition-all duration-200"
                onClick={() => navigate(`/productinfo/${item.id}`)}
              >
                <div className="flex items-center gap-3">
                  <img
                    className="w-12 h-12 object-cover rounded"
                    src={item.productImageUrl}
                    alt={item.title}
                  />
                  <span className="text-gray-800 text-lg">{item.title}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex justify-center py-4">
              <img
                className="w-16 opacity-80"
                src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                alt="not found"
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

  const logout = () => {
    localStorage.removeItem("users");
    navigate("/login");
  };

  const handleRippleEffect = (e) => {
    const button = e.currentTarget;
    const ripple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
    ripple.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
    ripple.classList.add("absolute", "bg-white/40", "rounded-full", "transform", "scale-0", "animate-ripple");

    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  const navList = (
    <ul className="flex flex-col lg:flex-row lg:space-x-8 text-white font-semibold text-lg px-6 items-center lg:h-16 transition-all duration-500">
      <li className="nav-item opacity-100 transform rotate-0 transition-all duration-500 delay-100">
        <Link to="/" className="hover:text-purple-200 transition-all duration-300">
          Home
        </Link>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
      </li>
      <li className="nav-item opacity-0 transform -rotate-y-90 transition-all duration-500 delay-200">
        <Link to="/allproduct" className="hover:text-purple-200 transition-all duration-300">
          All Product
        </Link>
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
      </li>
      {!user && (
        <>
          <li className="nav-item opacity-0 transform -rotate-y-90 transition-all duration-500 delay-300">
            <Link to="/signup" className="hover:text-purple-200 transition-all duration-300">
              Signup
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </li>
          <li className="nav-item opacity-0 transform -rotate-y-90 transition-all duration-500 delay-400">
            <Link to="/login" className="hover:text-purple-200 transition-all duration-300">
              Login
            </Link>
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
          </li>
        </>
      )}
      {user?.role === "user" && (
        <li className="nav-item opacity-0 transform -rotate-y-90 transition-all duration-500 delay-300">
          <Link to="/user-dashboard" className="hover:text-purple-200 transition-all duration-300">
            User
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </li>
      )}
      {user?.role === "admin" && (
        <li className="nav-item opacity-0 transform -rotate-y-90 transition-all duration-500 delay-300">
          <Link to="/admin-dashboard" className="hover:text-purple-200 transition-all duration-300">
            Admin
          </Link>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
        </li>
      )}
      {user && (
        <li
          className="nav-item relative py-2 lg:py-0 px-4 opacity-0 transform -rotate-y-90 transition-all duration-500 delay-500"
          onClick={(e) => {
            handleRippleEffect(e);
            logout();
          }}
        >
          Logout
        </li>
      )}
      <li
        className="nav-item relative py-2 lg:py-0 px-4 opacity-0 transform -rotate-y-90 transition-all duration-500 delay-600"
        onClick={handleRippleEffect}
      >
        <Link to="/cart" className="hover:text-purple-200 transition-all duration-300">
          Cart ({cartItems.length})
        </Link>
      </li>
    </ul>
  );

  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            font-family: 'Inter', sans-serif;
            overflow-x: hidden;
          }

          nav {
            background: linear-gradient(45deg, #ec4899, #7c3aed, #4c1d95);
            background-size: 200% 200%;
            animation: gradientShift 8s ease infinite;
          }

          @keyframes gradientShift {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .nav-item {
            position: relative;
          }

          nav.open .nav-item,
          nav:not(.lg\\:hidden) .nav-item {
            opacity: 1;
            transform: rotateY(0deg);
          }

          .animate-ripple {
            animation: ripple 0.6s ease-out;
          }

          @keyframes ripple {
            to {
              transform: scale(2);
              opacity: 0;
            }
          }

          .animate-dropdown {
            animation: dropdown 0.3s ease-out forwards;
          }

          @keyframes dropdown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .icon {
            background: transparent;
            border: 0;
            cursor: pointer;
            height: 36px;
            width: 36px;
            position: relative;
          }

          .icon .line {
            background-color: #ffffff;
            height: 3px;
            width: 24px;
            position: absolute;
            left: 6px;
            transition: transform 0.6s ease-in-out;
          }

          .icon .line1 {
            top: 12px;
          }

          .icon .line2 {
            bottom: 12px;
          }

          @media (max-width: 1024px) {
            .mobile-menu {
              position: absolute;
              top: 100%;
              left: 0;
              right: 0;
              background: linear-gradient(to bottom, #ec4899, #7c3aed);
              transform: translateY(-100%);
              opacity: 0;
              transition: transform 0.5s ease-in-out, opacity 0.5s ease-in-out;
            }

            .mobile-menu.open {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}
      </style>
      <nav className={`bg-gradient-to-r from-pink-600 to-purple-600 sticky top-0 shadow-lg z-50 ${isOpen ? "open" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Link to="/">
                <h2 className="font-bold text-white text-3xl tracking-tight animate-pulse">WebStore</h2>
              </Link>
            </div>
            <div className="lg:hidden">
              <button
                className="icon focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <span className={`line line1 ${isOpen ? "transform rotate-[-765deg] translate-y-[6.5px]" : ""}`}></span>
                <span className={`line line2 ${isOpen ? "transform rotate-[765deg] -translate-y-[6.5px]" : ""}`}></span>
              </button>
            </div>
            <div className="hidden lg:flex lg:items-center lg:space-x-6">
              {navList}
              <SearchBar />
            </div>
          </div>
          <div className={`lg:hidden mobile-menu ${isOpen ? "open" : ""}`}>
            {navList}
            <div className="px-6 py-4">
              <SearchBar />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;