import { useNavigate } from "react-router";
import myContext from "../../context/myContext";
import { useContext, useEffect } from "react";
import Loader from "../loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, deleteFromCart } from "../../redux/cartSlice";
import toast from "react-hot-toast";

const HomePageProductCard = () => {
    const navigate = useNavigate();
    const context = useContext(myContext);
    const { loading, getAllProduct } = context;
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    // add to cart function
    const addCart = (item) => {
        dispatch(addToCart(item));
        toast.success("Added to cart");
    };

    // delete from cart function
    const deleteCart = (item) => {
        dispatch(deleteFromCart(item));
        toast.success("Delete cart");
    };

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const handleRippleEffect = (e) => {
        const button = e.currentTarget;
        const ripple = document.createElement("span");
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        ripple.style.width = ripple.style.height = `${diameter}px`;
        ripple.style.left = `${e.clientX - (button.offsetLeft + radius)}px`;
        ripple.style.top = `${e.clientY - (button.offsetTop + radius)}px`;
        ripple.classList.add("absolute", "bg-white/50", "rounded-full", "transform", "scale-0", "animate-ripple");

        button.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
    };

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

                    .product-section {
                        background: linear-gradient(to bottom, #ffffff, #f9fafb);
                        position: relative;
                        overflow: hidden;
                        border-radius: 16px;
                        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                        border: 2px solid transparent;
                        animation: sectionGlow 3s ease-in-out infinite;
                    }

                    @keyframes sectionGlow {
                        0%, 100% {
                            border-color: rgba(236, 72, 153, 0.3);
                            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
                        }
                        50% {
                            border-color: rgba(236, 72, 153, 0.6);
                            box-shadow: 0 12px 48px rgba(236, 72, 153, 0.3);
                        }
                    }

                    .product-card {
                        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out, border-color 0.3s ease-in-out;
                        border: 2px solid transparent;
                        background: linear-gradient(to bottom, #ffffff, #f9fafb);
                        position: relative;
                        overflow: hidden;
                        border-radius: 12px;
                    }

                    .product-card:hover {
                        transform: translateY(-10px);
                        box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
                        border-color: #7c3aed;
                    }

                    .product-image {
                        transition: transform 0.5s ease-in-out, filter 0.3s ease-in-out;
                    }

                    .product-card:hover .product-image {
                        transform: scale(1.08);
                        filter: brightness(1.1);
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

                    .animate-card {
                        animation: zoomIn 0.7s ease-out forwards;
                    }

                    @keyframes zoomIn {
                        from {
                            opacity: 0;
                            transform: scale(0.9) translateY(20px);
                        }
                        to {
                            opacity: 1;
                            transform: scale(1) translateY(0);
                        }
                    }

                    .button-glow {
                        position: relative;
                        overflow: hidden;
                    }

                    .button-glow::after {
                        content: '';
                        position: absolute;
                        top: -50%;
                        left: -50%;
                        width: 200%;
                        height: 200%;
                        background: radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%);
                        transform: translateX(-100%) skewX(-45deg);
                        transition: transform 0.5s ease-in-out;
                    }

                    .button-glow:hover::after {
                        transform: translateX(100%) skewX(-45deg);
                    }

                    .highlight-text {
                        background: linear-gradient(90deg, #ec4899, #7c3aed);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                        animation: textShine 2s ease-in-out infinite;
                    }

                    @keyframes textShine {
                        0% {
                            background-position: 0% 50%;
                        }
                        100% {
                            background-position: 200% 50%;
                        }
                    }
                `}
            </style>
            <div className="mt-12 product-section py-10">
                {/* Heading */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold highlight-text mb-10">Bestselling Products</h1>
                </div>

                {/* main 1 */}
                <section className="text-gray-600 body-font">
                    {/* main 2 */}
                    <div className="container px-6 py-8 mx-auto">
                        <div className="flex justify-center">
                            {loading && <Loader />}
                        </div>
                        {/* main 3 */}
                        <div className="flex flex-wrap -m-4">
                            {getAllProduct.slice(0, 8).map((item, index) => {
                                const { id, title, price, productImageUrl } = item;
                                return (
                                    <div key={index} className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
                                        <div className="product-card h-full rounded-xl overflow-hidden shadow-xl cursor-pointer animate-card" style={{ animationDelay: `${index * 120}ms` }}>
                                            <img
                                                onClick={() => navigate(`/productinfo/${id}`)}
                                                className="product-image lg:h-64 h-80 w-full object-cover"
                                                src={productImageUrl}
                                                alt="img"
                                            />
                                            <div className="p-6 bg-transparent">
                                                <h2 className="tracking-widest text-sm font-medium text-gray-500 mb-2">
                                                    WebStore
                                                </h2>
                                                <h1 className="text-2xl font-semibold text-gray-900 mb-3">
                                                    {title.substring(0, 25)}
                                                </h1>
                                                <h1 className="text-2xl font-semibold text-gray-900 mb-4">
                                                    ₹{price}
                                                </h1>
                                                <div className="flex justify-center">
                                                    {cartItems.some((p) => p.id === item.id) ? (
                                                        <button
                                                            onClick={(e) => {
                                                                handleRippleEffect(e);
                                                                deleteCart(item);
                                                            }}
                                                            className="button-glow relative bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 w-full text-white py-3 rounded-lg font-semibold text-lg shadow-md transition-all duration-300"
                                                        >
                                                            Delete From Cart
                                                        </button>
                                                    ) : (
                                                        <button
                                                            onClick={(e) => {
                                                                handleRippleEffect(e);
                                                                addCart(item);
                                                            }}
                                                            className="button-glow relative bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 w-full text-white py-3 rounded-lg font-semibold text-lg shadow-md transition-all duration-300"
                                                        >
                                                            Add To Cart
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
};

export default HomePageProductCard;