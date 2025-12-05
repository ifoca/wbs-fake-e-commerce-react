import Products from '../components/Products';
import Categories from '../components/Categories';

const Home = ({ products, cartItems, loading, addToCart, removeFromCart }) => {
  return (
    <div className="p-4 m-10">
      {loading && <p className="text-center text-gray-600 font-medium">Loading...</p>}
      {!loading && <Categories products={products} />}
      {!loading && (
        <Products
          products={products}
          cartItems={cartItems}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
        />
      )}
    </div>
  );
};

export default Home;
