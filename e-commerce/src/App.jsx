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
  return (
    <Router>
      <Navbar cartCount={cart.length} wishlistCount={wishlist.length} />

      <div className="flex-1 p-6">
        <Routes>
          <Route
            path="/"
            element={
              <div className="flex">
                <ProductFilterSidebar />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-32">
                  <ProductCard />
                </div>
              </div>
            }
          />
          <Route path="/cart" element={<ShoppingCartPreview />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmationModal />}
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
