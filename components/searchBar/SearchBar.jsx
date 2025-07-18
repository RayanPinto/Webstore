import { useContext, useState, useEffect } from "react";
import myContext from "../../context/myContext";
import { useNavigate } from "react-router";

const SearchBar = () => {
  const context = useContext(myContext);
  const { getAllProduct } = context;

  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const navigate = useNavigate();

  // Filter when search or product data changes
  useEffect(() => {
    if (getAllProduct && Array.isArray(getAllProduct)) {
      const results = getAllProduct
        .filter((obj) =>
          obj.title?.toLowerCase().includes(search.toLowerCase())
        )
        .slice(0, 8);

      setFilteredData(results);
    }
  }, [search, getAllProduct]);

  return (
    <div className="">
      {/* search input  */}
      <div className="input flex justify-center">
        <input
          type="text"
          placeholder="Search here"
          onChange={(e) => setSearch(e.target.value)}
          className="bg-gray-200 placeholder-gray-400 rounded-lg px-2 py-2 w-96 lg:w-96 md:w-96 outline-none text-black"
        />
      </div>

      {/* search drop-down  */}
      <div className="flex justify-center">
        {search && (
          <div className="block absolute bg-gray-200 w-96 md:w-96 lg:w-96 z-50 my-1 rounded-lg px-2 py-2">
            {filteredData.length > 0 ? (
              <>
                {filteredData.map((item, index) => (
                  <div
                    key={index}
                    className="py-2 px-2 cursor-pointer"
                    onClick={() => navigate(`/productinfo/${item.id}`)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className="w-10 h-10 object-cover rounded"
                        src={item.productImageUrl}
                        alt={item.title}
                      />
                      <span>{item.title}</span>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="flex justify-center">
                <img
                  className="w-20"
                  src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png"
                  alt="not found"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
