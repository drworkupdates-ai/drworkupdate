import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;