import Card from "./Card";
import Container from "../Shared/Container";
import Heading from "../Shared/Heading";
import LoadingSpinner from "../Shared/LoadingSpinner";
import { useEffect, useState } from "react";
import axios from "axios";

const category = [
  "Gaming Phones",
  "Smartphones",
  "Rugged Phones",
  "Photography Phones",
  "Foldable Phones",
];
const brand = [
  "Apple",
  "Samsung",
  "Google",
  "OnePlus",
  "Sony",
  "Motorola",
  "Xiaomi",
  "Huawei",
  "Asus",
  "Nokia",
  "Realme",
  "Oppo",
  "Vivo",
  "ZTE",
  "Poco",
];
const Phones = () => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [filter, setFilter] = useState("");
  const [filterByBand, setFilterByBand] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  useEffect(() => {
    // fetch("/phone.json")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     // const c=data.map(d=>console.log(d.category)
    //     const c = data.map((d) => d.brand);
    //     // console.log(c);
    //     const uniqueArray = [...new Set(c)];

    //     console.log(uniqueArray);
    //     c.map((d) => {});
    //   });

    const getData = async () => {
      setLoading(true);
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/all-phones?page=${currentPage}&size=${itemsPerPage}&filterByBand=${filterByBand}&filter=${filter}&sort=${sort}&search=${search}&minPrice=${
          priceRange[0]
        }&maxPrice=${priceRange[1]}`
      );
      // console.log(data);

      setPhones(data);
      setLoading(false);
    };
    getData();
  }, [currentPage, filter, itemsPerPage, search, sort, priceRange,filterByBand]);
  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
  };
  // console.log(phones);
  useEffect(() => {
    const getCount = async () => {
      const { data } = await axios(
        `${
          import.meta.env.VITE_API_URL
        }/phones-count?filter=${filter}&search=${search}&minPrice=${
          priceRange[0]
        }&maxPrice=${priceRange[1]}`
      );
      // console.log(data);

      setCount(data.count);
    };
    getCount();
  }, [filter, search, priceRange]);

  // console.log(count);
  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()].map((element) => element + 1);

  //  handle pagination button
  const handlePaginationButton = (value) => {
    console.log(value);
    setCurrentPage(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    setSearch(searchText);
  };

  // console.log(search);

  // const { data: rooms = [], isLoading } = useQuery({
  //   queryKey: ["rooms", category],
  //   queryFn: async () => {
  //     const { data } = await axiosCommon.get(`/rooms?category=${category}`);
  //     return data;
  //   },
  // });

  return (
    <Container>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
          <div>
            <select
              onChange={(e) => {
                setFilterByBand(e.target.value);
                setCurrentPage(1);
              }}
              value={filterByBand}
              name="filterByBand"
              id="filterByBand"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Brand</option>
              {brand.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>
          <div>
            <select
              onChange={(e) => {
                setFilter(e.target.value);
                setCurrentPage(1);
              }}
              value={filter}
              name="category"
              id="category"
              className="border p-4 rounded-lg"
            >
              <option value="">Filter By Category</option>
              {category.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
                type="text"
                onChange={(e) => setSearchText(e.target.value)}
                value={searchText}
                name="search"
                placeholder="Enter product name"
                aria-label="Enter product name"
              />

              <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              onChange={(e) => {
                setSort(e.target.value);
                setCurrentPage(1);
              }}
              value={sort}
              name="sort"
              id="sort"
              className="border p-4 rounded-md"
            >
              <option value="">Sorting</option>
              <option value="dsc">Price: High to Low</option>
              <option value="asc">Price: Low to High</option>
              <option value="Newest first">Date: Newest first</option>
            </select>
          </div>
          <div>
            <label className="md:text-xl font-bold">
              Price range: {priceRange[0]} - {priceRange[1]}
            </label>
            <div className="flex flex-col md:gap-2 mt-1">
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[0]}
                onChange={(e) =>
                  handlePriceChange(Number(e.target.value), priceRange[1])
                }
              />
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange[1]}
                onChange={(e) =>
                  handlePriceChange(priceRange[0], Number(e.target.value))
                }
              />
            </div>
          </div>
        </div>
      </div>
      {loading ? (
        <LoadingSpinner />
      ) : phones && phones.length > 0 ? (
        <div className="min-h-[calc(100vh-390px)] ">
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
          {phones.map((phone, i) => (
            <Card key={i} phone={phone} />
          ))}
        </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-[calc(100vh-300px)]">
          <Heading
            center={true}
            title="No Phones Available In This Category!"
            subtitle="Please Select Other Categories."
          />
        </div>
      )}
      {/* Pagination Section */}
      <div className="flex justify-center my-12">
        {/* Previous Button */}
        <button
          disabled={currentPage === 1}
          onClick={() => handlePaginationButton(currentPage - 1)}
          className="px-4 py-2 mx-1 text-gray-700 disabled:text-gray-500 capitalize bg-gray-200 rounded-md disabled:cursor-not-allowed disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:bg-blue-500  hover:text-white"
        >
          <div className="flex items-center -mx-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 16l-4-4m0 0l4-4m-4 4h18"
              />
            </svg>

            <span className="mx-1">previous</span>
          </div>
        </button>
        {/* Numbers */}
        {pages.map((btnNum) => (
          <button
            onClick={() => handlePaginationButton(btnNum)}
            key={btnNum}
            className={`hidden ${
              currentPage === btnNum ? "bg-blue-500 text-white" : ""
            } px-4 py-2 mx-1 transition-colors duration-300 transform  rounded-md sm:inline hover:bg-blue-500  hover:text-white`}
          >
            {btnNum}
          </button>
        ))}
        {/* Next Button */}
        <button
          disabled={currentPage === numberOfPages}
          onClick={() => handlePaginationButton(currentPage + 1)}
          className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md hover:bg-blue-500 disabled:hover:bg-gray-200 disabled:hover:text-gray-500 hover:text-white disabled:cursor-not-allowed disabled:text-gray-500"
        >
          <div className="flex items-center -mx-1">
            <span className="mx-1">Next</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 mx-1 rtl:-scale-x-100"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </button>
      </div>
    </Container>
  );
};

export default Phones;
