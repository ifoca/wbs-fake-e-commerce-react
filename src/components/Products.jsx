import ProductItem from '../components/ProductItem';

const Products = ({ products, cartItems, addToCart, removeFromCart }) => {
  return (
    <div>
      <div className="font-bold text-xl p-2 mt-10 mb-5">
        <p>Discover our products:</p>
      </div>
      <div className="grid grid-cols-3 gap-y-8 m-2 justify-items-center">
        {products.map((p) => {
          const cartItem = cartItems.find((i) => i.id === p.id);
          return (
            <ProductItem
              key={p.id}
              product={p}
              cartItem={cartItem}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
