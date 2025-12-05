import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ItemPage from './pages/ItemPage';
import NotFound from './pages/NotFound';
import { useEffect, useState } from 'react';
import { getLocalStorage } from './utils/shared';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState(getLocalStorage());

  const fetchData = async (url) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error('Could not fetch the data');
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData('https://fakestoreapi.com/products');
  }, []);

  const addToCart = (item) => {
    setCartItems((prevCart) => {
      // Check if the item already exists
      const existingItem = prevCart.find((i) => i.id === item.id);

      let updatedCart;

      if (existingItem) {
        // Item exists, increment count
        updatedCart = prevCart.map((i) => (i.id === item.id ? { ...i, count: i.count + 1 } : i));
      } else {
        // Item doesn't exist - add it with count 1
        updatedCart = [...prevCart, { ...item, count: 1 }];
      }
      localStorage.setItem('myCart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (item) => {
    setCartItems((prevCart) => {
      // Check if the item already exists
      const existingItem = prevCart.find((i) => i.id === item.id);
      if (!existingItem) return prevCart;

      let updatedCart;

      if (existingItem.count > 1) {
        // Decrement count
        updatedCart = prevCart.map((i) => (i.id === item.id ? { ...i, count: i.count - 1 } : i));
      } else {
        // Remove item completely (count would be 0)
        updatedCart = prevCart.filter((i) => i.id !== item.id);
      }
      localStorage.setItem('myCart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  return (
    <BrowserRouter>
      <Navbar cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Home
                products={products}
                cartItems={cartItems}
                loading={loading}
                error={error}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            }
          />
          <Route
            path="cart"
            element={
              <Cart cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
            }
          />
          <Route path="product/:id" element={<ItemPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

/*

- Homepage
  - list of all products as cards
      - link to the product category
*/
