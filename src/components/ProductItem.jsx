import { useNavigate } from 'react-router-dom';

const ProductItem = ({ product, cartItem, addToCart, removeFromCart }) => {
  const count = cartItem ? cartItem.count : 0;
  const navigate = useNavigate();

  const openItemPage = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="card card-xs bg-base-100 shadow-sm max-w-2xs p-2 border rounded-lg justify-center-safe">
      {count > 0 && (
        <div className="indicator self-end">
          <span className="indicator-item badge badge-primary">{count}</span>
        </div>
      )}
      <div>
        <p className="p-2 bg-primary label text-white rounded-md text-xs">
          {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
            product.price
          )}
        </p>
      </div>
      <div className="card-body items-center text-center justify-baseline">
        <h2 className="card-title font-normal">{product.title}</h2>
        <figure>
          <img src={product.image} alt={product.name} className="rounded-xl w-12 m-2" />
        </figure>
        <p className="p-2 text-xs text-justify">
          {product.description} {''}
          {/* <a href="" className="no-underline hover:underline">
            See more..
          </a> */}
          <span onClick={openItemPage} className="no-underline hover:underline text-primary">
            See more...
          </span>
        </p>
        <div className="card-actions">
          <div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
              className="btn btn-primary font-normal"
            >
              Add to cart
            </button>
            {count > 0 && (
              <span className="ml-3">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromCart(product);
                  }}
                  className="btn btn-primary font-normal"
                >
                  Remove
                </button>
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
