import React, { useState } from "react";
import {
  ChevronFirst,
  ChevronLast,
  ChevronDown,
  ChevronUp,
  Star,
  Monitor,
  ShoppingBag,
  Armchair,
  Shirt,
  Trello,
  BadgeIndianRupee,
} from "lucide-react"; // Import Lucide icons
import { MdCurrencyRupee } from "react-icons/md";

export default function ProductFilterSidebar({ onFilterChange }) {
  // States to manage filters
  const [category, setCategory] = useState([]);
  const [priceRange, setPriceRange] = useState(500000);
  const [brands, setBrands] = useState([]);
  const [ratings, setRatings] = useState(0);

  // States to manage collapse functionality
  const [categoryCollapsed, setCategoryCollapsed] = useState(false);
  const [priceCollapsed, setPriceCollapsed] = useState(false);
  const [brandsCollapsed, setBrandsCollapsed] = useState(false);
  const [ratingsCollapsed, setRatingsCollapsed] = useState(false);

  // Sidebar collapse functionality
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  // Toggle collapse state
  const toggleCollapse = (section) => {
    switch (section) {
      case "category":
        setCategoryCollapsed(!categoryCollapsed);
        break;
      case "price":
        setPriceCollapsed(!priceCollapsed);
        break;
      case "brands":
        setBrandsCollapsed(!brandsCollapsed);
        break;
      case "ratings":
        setRatingsCollapsed(!ratingsCollapsed);
        break;
      default:
        break;
    }
  };

  const toggleSidebarCollapse = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  // Filter handlers
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setCategory(
      category.includes(selectedCategory)
        ? category.filter((cat) => cat !== selectedCategory)
        : [...category, selectedCategory]
    );
  };

  const handlePriceRangeChange = (e) => setPriceRange(e.target.value);
  const handleBrandChange = (e) => {
    const selectedBrand = e.target.value;
    setBrands(
      brands.includes(selectedBrand)
        ? brands.filter((brand) => brand !== selectedBrand)
        : [...brands, selectedBrand]
    );
  };

  const handleRatingChange = (e) => setRatings(e.target.value);

  const handleClearFilters = () => {
    setCategory([]);
    setPriceRange(5000);
    setBrands([]);
    setRatings(0);
    onFilterChange({ category: [], priceRange: 5000, brands: [], ratings: 0 });
  };

  const applyFilters = () => {
    onFilterChange({ category, priceRange, brands, ratings });
  };

  return (
    <div
      className={`p-4 bg-white rounded-xl shadow-md hover:shadow-lg max-h-fit ${
        sidebarCollapsed ? "w-16" : "w-full"
      }`}
    >
      {/* Sidebar Header */}
      <div className="flex justify-between items-center mb-4">
        <h3
          className={`text-xl font-semibold ${
            sidebarCollapsed ? "hidden" : ""
          }`}
        ></h3>
        <button
          onClick={toggleSidebarCollapse}
          className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
        >
          {sidebarCollapsed ? <ChevronFirst /> : <ChevronLast />}
        </button>
      </div>

      {/* Category Filter */}
      {!sidebarCollapsed && (
        <>
          <div className="mb-4 flex flex-wrap justify-center items-center">
            <h4
              className="font-semibold mb-2 cursor-pointer flex justify-between items-center"
              onClick={() => toggleCollapse("category")}
            >
              <div className="flex items-center font-bold text-xl  text-gray-700">
                <Monitor className="w-6 h-6 mr-2 text-gray-700" />
                Category
              </div>
              <span>{categoryCollapsed ? <ChevronUp /> : <ChevronDown />}</span>
            </h4>
            {!categoryCollapsed && (
              <div className="font-serif tracking-wide text-lg text-gray-500 ">
                <label className="flex items-center">
                  <Monitor className="w-5 h-5 mr-2 text-gray-700" />
                  <input
                    type="checkbox"
                    value="Electronics"
                    onChange={handleCategoryChange}
                    checked={category.includes("Electronics")}
                    className="mr-2 h-4 w-4 "
                  />
                  Electronics
                </label>
                <label className="flex items-center">
                  <ShoppingBag className="w-5 h-5 mr-2 text-gray-700" />
                  <input
                    type="checkbox"
                    value="Footwear"
                    onChange={handleCategoryChange}
                    checked={category.includes("Footwear")}
                    className="mr-2 h-4 w-4 "
                  />
                  Footwear
                </label>
                <label className="flex items-center">
                  <Armchair className="w-5 h-5 mr-2 text-gray-700" />
                  <input
                    type="checkbox"
                    value="Furniture"
                    onChange={handleCategoryChange}
                    checked={category.includes("Furniture")}
                    className="mr-2 h-4 w-4 "
                  />
                  Furniture
                </label>
                <label className="flex items-center">
                  <Shirt className="w-5 h-5 mr-2 text-gray-700" />
                  <input
                    type="checkbox"
                    value="Clothing"
                    onChange={handleCategoryChange}
                    checked={category.includes("Clothing")}
                    className="mr-2 h-4 w-4 "
                  />
                  Clothing
                </label>
              </div>
            )}
          </div>
          <hr className="h-1 bg-gray-400" />

          {/* Price Range Filter */}
          <div className="mb-4">
            <h4
              className="font-semibold my-2 cursor-pointer flex justify-between items-center"
              onClick={() => toggleCollapse("price")}
            >
              <div className=" flex flex-wrap justify-center items-center font-serif text-gray-600">
                <BadgeIndianRupee className="w-5 h-5 mr-2 text-gray-700" />
                Price Range
              </div>
              <span>{priceCollapsed ? <ChevronUp /> : <ChevronDown />}</span>
            </h4>
            {!priceCollapsed && (
              <div>
                <input
                  type="range"
                  min="0"
                  max="500000"
                  value={priceRange}
                  onChange={handlePriceRangeChange}
                  className="w-full"
                />
                <p className="flex items-center justify-center font-semibold text-gray-600">
                  Up to <MdCurrencyRupee />
                  {priceRange}
                </p>
              </div>
            )}
          </div>
          <hr className="h-1 bg-gray-400" />

          {/* Brand Filter */}
          <div className="mb-4 flex flex-wrap justify-center items-center font-serif text-gray-600 text-md tracking-wide">
            <h4
              className="font-semibold my-2 cursor-pointer flex justify-between items-center"
              onClick={() => toggleCollapse("brands")}
            >
              <div className="flex items-center ">
                <Trello className="w-5 h-5 mr-2 text-gray-500" />
                Brand
              </div>
              <span>{brandsCollapsed ? <ChevronUp /> : <ChevronDown />}</span>
            </h4>
            {!brandsCollapsed && (
              <div>
                <div className="font-serif text-gray-700  ">
                  <h4 className="font-semibold my-2"> Footwear & Clothing </h4>
                  <label>
                    <input
                      type="checkbox"
                      value="Nike"
                      onChange={handleBrandChange}
                      checked={brands.includes("Nike")}
                      className="mr-2 h-4 w-4 "
                    />
                    Nike
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value="Adidas"
                      onChange={handleBrandChange}
                      checked={brands.includes("Adidas")}
                      className="mr-2 h-4 w-4 "
                    />
                    Adidas
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value="Under Armour"
                      onChange={handleBrandChange}
                      checked={brands.includes("Under Armour")}
                      className="mr-2 h-4 w-4 "
                    />
                    Under Armour
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value="Puma"
                      onChange={handleBrandChange}
                      checked={brands.includes("Puma")}
                      className="mr-2 h-4 w-4 "
                    />
                    Puma
                  </label>
                  <br />
                  <h4 className="font-semibold my-2">Electronics </h4>

                  <label>
                    <input
                      type="checkbox"
                      value="Samsung"
                      onChange={handleBrandChange}
                      checked={brands.includes("Samsung")}
                      className="mr-2 h-4 w-4 "
                    />
                    Samsung
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value="Apple"
                      onChange={handleBrandChange}
                      checked={brands.includes("Apple")}
                      className="mr-2 h-4 w-4 "
                    />
                    Apple
                  </label>
                  <br />

                  <label>
                    <input
                      type="checkbox"
                      value="Philips"
                      onChange={handleBrandChange}
                      checked={brands.includes("Philips")}
                      className="mr-2 h-4 w-4 "
                    />
                    Philips
                  </label>
                  <br />
                  <h4 className="font-semibold my-2"> Furniture </h4>
                  <label>
                    <input
                      type="checkbox"
                      value="Ikea"
                      onChange={handleBrandChange}
                      checked={brands.includes("Ikea")}
                      className="mr-2 h-4 w-4 "
                    />
                    Ikea
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value="Wayfair"
                      onChange={handleBrandChange}
                      checked={brands.includes("Wayfair")}
                      className="mr-2 h-4 w-4 "
                    />
                    Wayfair
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value="Target"
                      onChange={handleBrandChange}
                      checked={brands.includes("Target")}
                      className="mr-2 h-4 w-4 "
                    />
                    Target
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      value="Ashley Furniture"
                      onChange={handleBrandChange}
                      checked={brands.includes("Ashley Furniture")}
                      className="mr-2 h-4 w-4 "
                    />
                    Ashley Furniture
                  </label>
                  <br />
                </div>
              </div>
            )}
          </div>
          <hr className="h-1 bg-gray-400" />

          {/* Rating Filter */}
          <div className="mb-4 font-serif text-gray-600">
            <h4
              className="font-semibold my-2 cursor-pointer flex justify-between items-center"
              onClick={() => toggleCollapse("ratings")}
            >
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-gray-500" />
                Rating
              </div>
              <span>{ratingsCollapsed ? <ChevronUp /> : <ChevronDown />}</span>
            </h4>
            {!ratingsCollapsed && (
              <select
                value={ratings}
                onChange={handleRatingChange}
                className="w-full border p-2 rounded"
              >
                <option value={0}>Any</option>
                <option value={1}>1 star & above</option>
                <option value={2}>2 stars & above</option>
                <option value={3}>3 stars & above</option>
                <option value={4}>4 stars & above</option>
                <option value={5}>5 stars</option>
              </select>
            )}
          </div>
          <hr className="h-1 bg-gray-400" />

          {/* Buttons */}
          <button
            onClick={applyFilters}
            className="w-full mt-5 bg-gray-600 hover:bg-indigo-500 text-white py-2 font-serif text-lg hover:scale-105 transition-transform duration-300 rounded-lg mb-4"
          >
            Apply Filters
          </button>
          <button
            onClick={handleClearFilters}
            className="w-full mt-3 bg-cyan-600 hover:bg-indigo-500 text-white py-2 font-serif text-lg hover:scale-105 transition-transform duration-300 rounded-lg mb-4"
          >
            Clear All Filters
          </button>
        </>
      )}
    </div>
  );
}
