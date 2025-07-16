import { useNavigate } from "react-router";

// category 
const category = [
    {
        image: 'https://cdn-icons-png.flaticon.com/256/4359/4359963.png',
        name: 'fashion'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11833/11833323.png',
        name: 'shirt'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/8174/8174424.png',
        name: 'jacket'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/7648/7648246.png',
        name: 'mobile'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12142/12142416.png',
        name: 'laptop'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/10686/10686553.png',
        name: 'shoes'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/12114/12114279.png',
        name: 'home'
    },
    {
        image: 'https://cdn-icons-png.flaticon.com/256/11946/11946316.png',
        name: 'books'
    }
];

const Category = () => {
    const navigate = useNavigate();

    return (
        <>
            <style>
                {`
                    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

                    .category-container {
                        background: linear-gradient(135deg, #f9e2eb, #e0f2fe);
                        position: relative;
                        overflow: hidden;
                    }

                    .category-container::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        bottom: 0;
                        background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="%23ec4899" d="M10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0-2a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/></svg>') repeat;
                        background-size: 40px 40px;
                        opacity: 0.15;
                        animation: flowerBlink 4s ease-in-out infinite;
                    }

                    .category-item {
                        transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
                        position: relative;
                        animation: slideIn 0.6s ease-out forwards;
                    }

                    .category-item:hover {
                        transform: scale(1.15);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }

                    .category-circle {
                        transition: background-color 0.3s ease-in-out, transform 0.3s ease-in-out;
                        position: relative;
                        overflow: hidden;
                    }

                    .category-circle::after {
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

                    .category-circle:hover::after {
                        transform: translateX(100%) skewX(-45deg);
                    }

                    .category-image {
                        transition: transform 0.4s ease-in-out;
                    }

                    .category-item:hover .category-image {
                        transform: scale(1.1);
                    }

                    .hide-scroll-bar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }

                    .hide-scroll-bar::-webkit-scrollbar {
                        display: none;
                    }

                    @keyframes flowerBlink {
                        0%, 100% {
                            opacity: 0.15;
                            transform: scale(1);
                        }
                        50% {
                            opacity: 0.3;
                            transform: scale(1.2);
                        }
                    }

                    @keyframes slideIn {
                        from {
                            opacity: 0;
                            transform: translateX(20px);
                        }
                        to {
                            opacity: 1;
                            transform: translateX(0);
                        }
                    }
                `}
            </style>
            <div className="category-container mt-8 py-6">
                <div className="flex flex-col">
                    {/* main 1 */}
                    <div className="flex overflow-x-scroll lg:justify-center hide-scroll-bar">
                        {/* main 2 */}
                        <div className="flex">
                            {/* category */}
                            {category.map((item, index) => {
                                return (
                                    <div key={index} className="category-item px-4 lg:px-12" style={{ animationDelay: `${index * 100}ms` }}>
                                        {/* Image */}
                                        <div
                                            onClick={() => navigate(`/category/${item.name}`)}
                                            className="category-circle w-20 h-20 lg:w-28 lg:h-28 max-w-xs rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 cursor-pointer mb-2 flex justify-center items-center"
                                        >
                                            <img src={item.image} alt={item.name} className="category-image w-12 h-12 lg:w-16 lg:h-16" />
                                        </div>
                                        {/* Name Text */}
                                        <h1 className="text-base lg:text-xl text-center font-semibold text-gray-900 first-letter:uppercase">
                                            {item.name}
                                        </h1>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Category;