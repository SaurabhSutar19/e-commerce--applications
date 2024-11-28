import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import ProductFilterSidebar from "./components/ProductFilterSidebar";
import ShoppingCartPreview from "./components/ShoppingCartPreview";
import Wishlist from "./components/Wishlist";
import OrderConfirmationModal from "./components/OrderConfirmationModal";
import CheckoutForm from "./components/CheckoutForm";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

const App = () => {
  const products = [
    // Footwear - Nike
    {
      id: 1,
      title: "Air Max 270",
      category: "Footwear",
      price: 50000,
      brand: "Nike",
      rating: 4,
      thumbnailImg: "https://example.com/thumbnails/air-max-270.png",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/104f53b2-834e-4d67-8d19-553bfcb611f4/W+AIR+MAX+270.png",
    },
    {
      id: 2,
      title: "Running Shoes",
      category: "Footwear",
      price: 63000,
      brand: "Nike",
      rating: 4.9,
      thumbnailImg: "https://example.com/thumbnails/running-shoes.png",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/c2ccbe71-8edd-4744-90fa-62a24f7bee84/ZOOM+FLY+6+EK.png",
    },
    {
      id: 3,
      title: "Nike Sports Cap",
      category: "Footwear",
      price: 20000,
      brand: "Nike",
      rating: 3,
      thumbnailImg: "https://example.com/thumbnails/nike-sports-cap.png",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/bcd21605-4d19-482d-a639-08703502d095/U+NK+CLUB+CAP+U+CB+FUT+WSH+L.png",
    },

    // Footwear - Adidas
    {
      id: 4,
      title: "Running Shorts",
      category: "Footwear",
      price: 40000,
      brand: "Adidas",
      rating: 4.9,
      thumbnailImg: "https://example.com/thumbnails/running-shorts.png",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSPP-m2LxPvjyJ8y2Hx5DOK-WYAkzOlCFRE7mLstYK_XMORbrCpR5txU2DlnwqDsrq1TdDdZWqyZfTDuisVUt5j1EWbpv1c1LhZms53uDMC",
    },
    {
      id: 5,
      title: "Gym Leggings",
      category: "Footwear",
      price: 45000,
      brand: "Adidas",
      rating: 3.5,
      thumbnailImg: "https://example.com/thumbnails/gym-leggings.png",
      image:
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/g/l/gl0633_2_9af9b99e.jpg?rnd=20200526195200&tr=w-256",
    },
    {
      id: 6,
      title: "Basketball Shoes",
      category: "Footwear",
      price: 10000,
      brand: "Adidas",
      rating: 5,
      thumbnailImg: "https://example.com/thumbnails/basketball-shoes.png",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/857ad38ffc93422eb07cbfbbf6f727c7_9366/Own_the_Game_3_Shoes_White_IF4565_04_standard.jpg",
    },

    // Footwear - Puma
    {
      id: 7,
      title: "Running Shoes",
      category: "Footwear",
      price: 9000,
      brand: "Puma",
      rating: 4.5,
      thumbnailImg: "https://example.com/thumbnails/puma-running-shoes.png",
      image:
        "https://img.tatacliq.com/images/i18//658Wx734H/MP000000022732642_658Wx734H_202406281637301.jpeg",
    },
    {
      id: 8,
      title: "Sports Bag",
      category: "Footwear",
      price: 4500,
      brand: "Puma",
      rating: 3.5,
      thumbnailImg: "https://example.com/thumbnails/puma-sports-bag.png",
      image:
        "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSkRCpH6A1Lx3k2HK412njKqVKEAUggpKSnkJCuMNWY7bh20kWQUmgFuYbfFHDwvQhStsOd8A54f0UNO-uRhmjWxUI9kmJgZg",
    },
    {
      id: 9,
      title: "Puma Sneakers",
      category: "Footwear",
      price: 8000,
      brand: "Puma",
      rating: 4.9,
      thumbnailImg: "https://example.com/thumbnails/puma-sneakers.png",
      image:
        "https://img.tatacliq.com/images/i12/1316Wx1468H/MP000000018805042_1316Wx1468H_202308181740174.jpeg",
    },

    // Clothing - Nike
    {
      id: 10,
      title: "Hoddie",
      category: "Clothing",
      price: 1500,
      brand: "Nike",
      rating: 5,
      thumbnailImg: "https://example.com/thumbnails/air-max-270.png",
      image:
        "https://limitededt.in/cdn/shop/files/FB7922-063_1.jpg?v=1721130465&width=800",
    },
    {
      id: 11,
      title: "T-Shirt",
      category: "Clothing",
      price: 600,
      brand: "Nike",
      rating: 4.5,
      thumbnailImg: "https://example.com/thumbnails/running-shoes.png",
      image: "https://m.media-amazon.com/images/I/61EEX+BC2+L._SY741_.jpg",
    },
    {
      id: 12,
      title: "Nike Sports Jacket",
      category: "Clothing",
      price: 2000,
      brand: "Nike",
      rating: 4.4,
      thumbnailImg: "https://example.com/thumbnails/nike-sports-cap.png",
      image:
        "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQnFp6qyvtaN9frvFf7duZ9UaFq7cy9iCLL6_HXD-SA4P-bvRspzY7oX_sbqitam2pbdx_EoU-RyA_Rfe7ZStdWR2g18gJPaUVkOyaflC0G",
    },

    // Clothing - Adidas
    {
      id: 13,
      title: "Running Track ",
      category: "Clothing",
      price: 4000,
      brand: "Adidas",
      rating: 4.5,
      thumbnailImg: "https://example.com/thumbnails/running-shorts.png",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/75be4a66236e4434b5d843edaa76bcf5_9366/Adizero_Running_Pants_Black_IM8547_HM1.jpg",
    },
    {
      id: 14,
      title: "Gym tights",
      category: "Clothing",
      price: 4500,
      brand: "Adidas",
      rating: 4,
      thumbnailImg: "https://example.com/thumbnails/gym-leggings.png",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/b900a55d6d3946e6b3685cfa0e354772_9366/Adizero_Essentials_Running_Short_Tights_Black_IY5511_HM1.jpg",
    },
    {
      id: 15,
      title: "T-shirt",
      category: "Clothing",
      price: 1000,
      brand: "Adidas",
      rating: 3.5,
      thumbnailImg: "https://example.com/thumbnails/basketball-shoes.png",
      image:
        "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/624f2250b8e443bea6acad1b0053a6c5_9366/AEROREADY_Sereno_Logo_Tee_Black_H28926_01_laydown.jpg",
    },

    // Clothing - Under Armour
    {
      id: 16,
      title: "Gym Shorts",
      category: "Clothing",
      price: 3500,
      brand: "Under Armour",
      rating: 3,
      thumbnailImg: "https://example.com/thumbnails/gym-shorts.png",
      image:
        "https://img.tatacliq.com/images/i14/437Wx649H/MP000000019887868_437Wx649H_202310311336111.jpeg",
    },
    {
      id: 17,
      title: "Running Jacket",
      category: "Clothing",
      price: 6000,
      brand: "Under Armour",
      rating: 4,
      thumbnailImg: "https://example.com/thumbnails/running-jacket.png",
      image:
        "https://www.underarmour.in/media/catalog/product/cache/a6c9600f6d89dc76028bfa07e5e1eb9a/1/3/1376795-320241021171813865.jpg",
    },
    {
      id: 18,
      title: "Compression Tights",
      category: "Clothing",
      price: 5000,
      brand: "Under Armour",
      rating: 3.5,
      thumbnailImg: "https://example.com/thumbnails/compression-tights.png",
      image:
        "https://www.underarmour.in/media/catalog/product/cache/a6c9600f6d89dc76028bfa07e5e1eb9a/1/3/1361596-420230707124100943.jpeg",
    },

    // Electronics - Apple
    {
      id: 19,
      title: "iPhone Charger",
      category: "Electronics",
      price: 2500,
      brand: "Apple",
      rating: 5,
      thumbnailImg: "https://example.com/thumbnails/iphone-charger.png",
      image: "https://m.media-amazon.com/images/I/51Jb6t9L1JL._SY450_.jpg",
    },
    {
      id: 20,
      title: "Apple EarPods",
      category: "Electronics",
      price: 3000,
      brand: "Apple",
      rating: 4.4,
      thumbnailImg: "https://example.com/thumbnails/apple-earpods.png",
      image: "https://m.media-amazon.com/images/I/61oCISLE+PL._AC_UL320_.jpg",
    },
    {
      id: 21,
      title: "Smart Thermostat",
      category: "Electronics",
      price: 1800,
      brand: "Apple",
      rating: 4.5,
      thumbnailImg: "https://example.com/thumbnails/smart-thermostat.png",
      image:
        "https://www.networkhardwares.com/cdn/shop/files/1073571264_1900x.jpg?v=1719962969",
    },

    // Electronics - Samsung
    {
      id: 22,
      title: "Galaxy Earphones",
      category: "Electronics",
      price: 1200,
      brand: "Samsung",
      rating: 5,
      thumbnailImg: "https://example.com/thumbnails/galaxy-buds.png",
      image:
        "https://m.media-amazon.com/images/I/31zxlEQr98L._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 23,
      title: "Wireless Earbuds",
      category: "Electronics",
      price: 1500,
      brand: "Samsung",
      rating: 4.9,
      thumbnailImg: "https://example.com/thumbnails/wireless-earbuds.png",
      image:
        "https://m.media-amazon.com/images/I/419OgEePURL._SX300_SY300_QL70_FMwebp_.jpg",
    },
    {
      id: 24,
      title: "Portable Charger",
      category: "Electronics",
      price: 6000,
      brand: "Samsung",
      rating: 4.5,
      thumbnailImg:
        "https://example.com/thumbnails/samsung-portable-charger.png",
      image: "https://m.media-amazon.com/images/I/61Tw27Q8G0L._SX569_.jpg",
    },

    // Electronics - Philips
    {
      id: 25,
      title: "Smart Light Bulb",
      category: "Electronics",
      price: 2000,
      brand: "Philips",
      rating: 3.9,
      thumbnailImg: "https://example.com/thumbnails/smart-light-bulb.png",
      image:
        "https://static1.industrybuying.com/products/led-lights/light-bulbs/smart-led-bulbs/LED.LED.96221181_1668252950424.webp",
    },
    {
      id: 26,
      title: "USB-C Hub",
      category: "Electronics",
      price: 5000,
      brand: "Philips",
      rating: 4.5,
      thumbnailImg: "https://example.com/thumbnails/usb-c-hub.png",
      image: "https://m.media-amazon.com/images/I/71IBVDefxfL._AC_SL1500_.jpg",
    },
    {
      id: 27,
      title: "Philips Sound System",
      category: "Electronics",
      price: 200000,
      brand: "Philips",
      rating: 3.5,
      thumbnailImg: "https://example.com/thumbnails/philips-sound-system.png",
      image: "https://m.media-amazon.com/images/I/716Nt20kFfL._SY450_.jpg",
    },

    // Furniture - Ikea
    {
      id: 28,
      title: "Wooden Nightstand",
      category: "Furniture",
      price: 40000,
      brand: "Ikea",
      rating: 4,
      thumbnailImg: "https://example.com/thumbnails/wooden-nightstand.png",
      image:
        "https://www.ikea.com/in/en/images/products/kullen-chest-of-2-drawers-black-brown__0651177_pe706789_s5.jpg?f=s",
    },
    {
      id: 29,
      title: "Foldable Coffee Table",
      category: "Furniture",
      price: 12000,
      brand: "Ikea",
      rating: 4.9,
      thumbnailImg: "https://example.com/thumbnails/foldable-coffee-table.png",
      image:
        "https://www.ikea.com/in/en/images/products/oestavall-adjustable-coffee-table-black__1213707_pe911231_s5.jpg?f=s",
    },
    {
      id: 30,
      title: "Bookshelf",
      category: "Furniture",
      price: 15000,
      brand: "Ikea",
      rating: 3.9,
      thumbnailImg: "https://example.com/thumbnails/bookshelf.png",
      image:
        "https://www.ikea.com/in/en/images/products/billy-bookcase-combination-brown-walnut-effect__1266281_pe928091_s5.jpg?f=s",
    },

    // Furniture - Wayfair
    {
      id: 31,
      title: "Storage Cabinet",
      category: "Furniture",
      price: 25000,
      brand: "Wayfair",
      rating: 5,
      thumbnailImg: "https://example.com/thumbnails/storage-cabinet.png",
      image:
        "https://assets.wfcdn.com/im/11177686/resize-h800-w800%5Ecompr-r85/2429/242971961/Miliah+47.24%27%27+Kitchen+Pantry%2C+White.jpg",
    },
    {
      id: 32,
      title: "Recliner Chair",
      category: "Furniture",
      price: 22000,
      brand: "Wayfair",
      rating: 4.4,
      thumbnailImg: "https://example.com/thumbnails/recliner-chair.png",
      image:
        "https://assets.wfcdn.com/im/50839128/resize-h800-w800%5Ecompr-r85/3107/310781607/Havemeyer+40.9%22+Wide+Microsuede+Heated+Massage+Power+Recliner+With+USB+Charging+Port%2C+Taupe.jpg",
    },
    {
      id: 33,
      title: "Modern Floor Lamp",
      category: "Furniture",
      price: 10000,
      brand: "Wayfair",
      rating: 3,
      thumbnailImg: "https://example.com/thumbnails/floor-lamp.png",
      image:
        "https://assets.wfcdn.com/im/3090334/resize-h800-w800%5Ecompr-r85/2617/261789004/Jodanna+63%22+Dimmable+Brown+Tripod+Floor+Lamp+with+Remote+%26+Included+LED+Bulb%2C+6500K%2C+1.jpg",
    },

    // Furniture - Target
    {
      id: 34,
      title: "Study Desk",
      category: "Furniture",
      price: 18000,
      brand: "Target",
      rating: 3.5,
      thumbnailImg: "https://example.com/thumbnails/study-desk.png",
      image:
        "https://target.scene7.com/is/image/Target/GUEST_b43ac631-ab6c-40ba-81bc-756b61695805?wid=1200&hei=1200&qlt=80&fmt=webp",
    },
    {
      id: 35,
      title: "Wooden Dining Chair",
      category: "Furniture",
      price: 30000,
      brand: "Target",
      rating: 4.9,
      thumbnailImg: "https://example.com/thumbnails/wooden-dining-chair.png",
      image:
        "https://target.scene7.com/is/image/Target/GUEST_74a293bb-6cef-4cc5-9430-94617d9d222c?wid=1200&hei=1200&qlt=80&fmt=webp",
    },
    {
      id: 36,
      title: "Office Chair",
      category: "Furniture",
      price: 15000,
      brand: "Target",
      rating: 4.5,
      thumbnailImg: "https://example.com/thumbnails/office-chair.png",
      image:
        "https://target.scene7.com/is/image/Target/GUEST_a0e3fe6a-44a9-41df-bc9c-9cf74b6b9788?wid=1200&hei=1200&qlt=80&fmt=webp",
    },

    // Furniture - Ashley Furniture
    {
      id: 37,
      title: "Sofa Set",
      category: "Furniture",
      price: 50000,
      brand: "Ashley Furniture",
      rating: 5,
      thumbnailImg: "https://example.com/thumbnails/sofa-set.png",
      image: "https://cdn.rencdn.com/ashley/high/31901-38-SW-P1-KO.jpg",
    },
    {
      id: 38,
      title: "End Table",
      category: "Furniture",
      price: 35000,
      brand: "Ashley Furniture",
      rating: 4.4,
      thumbnailImg: "https://example.com/thumbnails/end-table.png",
      image: "https://cdn.rencdn.com/ashley-master/T776-3-ANGLE-SW-P1-KO.jpg",
    },
  ];

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleFilterChange = (filters) => {
    setFilteredProducts(
      products.filter((product) => {
        // Apply category filter
        const categoryMatch = filters.category.length
          ? filters.category.includes(product.category)
          : true;

        // Apply price filter
        const priceMatch = product.price <= filters.priceRange;

        // Apply brand filter
        const brandMatch = filters.brands.length
          ? filters.brands.includes(product.brand)
          : true;

        // Apply rating filter
        const ratingMatch = product.rating >= filters.ratings;

        return categoryMatch && priceMatch && brandMatch && ratingMatch;
      })
    );
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const itemIndex = prevCart.findIndex((item) => item.id === product.id);
      if (itemIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[itemIndex].quantity += 1;
        return updatedCart;
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const handleAddToWishlist = (product) => {
    // Prevent duplicate items in wishlist
    if (!wishlist.some((item) => item.id === product.id)) {
      const updatedWishlist = [...wishlist, product];
      setWishlist(updatedWishlist);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    }
  };

  const handleRemoveFromWishlist = (id) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} wishlistCount={wishlist.length} />

      <div className="flex-1 p-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex">
                <ProductFilterSidebar onFilterChange={handleFilterChange} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-32">
                  {filteredProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onAddToCart={addToCart}
                      onAddToWishlist={handleAddToWishlist}
                    />
                  ))}
                </div>
              </div>
            }
          />
          <Route
            path="/cart"
            element={<ShoppingCartPreview cart={cart} setCart={setCart} />}
          />
          <Route
            path="/wishlist"
            element={
              <Wishlist
                wishlist={wishlist}
                onRemove={handleRemoveFromWishlist}
                onAddToCart={addToCart}
              />
            }
          />
          <Route path="/checkout" element={<CheckoutForm cart={cart} />} />
          <Route
            path="/order-confirmation"
            element={
              <OrderConfirmationModal
                cart={cart}
                calculateTotal={calculateTotal}
                isOpen={false}
                onClose={() => {}}
              />
            }
          />
        </Routes>
      </div>

      <Footer />
    </Router>
  );
};

export default App;
