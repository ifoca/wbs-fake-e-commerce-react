import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, addToCart, removeFromCart }) => {
  let finalTotal = 0;
  const navigate = useNavigate();

  for (let i = 0; i < cartItems.length; i++) {
    const item = cartItems[i];
    const itemTotal = item.count * item.price;
    finalTotal = finalTotal + itemTotal;
  }

  return (
    <>
      <div>
        <div className="alert alert-error bg-base-100 m-12 text-white font-normal justify-center m-8">
          <p className="font-bold text-white text-xl p-2">Your cart is empty.</p>
        </div>
        <div className="card-actions justify-end mr-12">
          <button onClick={() => navigate(-1)} className="btn btn-primary">
            {' '}
            ← Go back
          </button>
        </div>
      </div>
      {cartItems.length > 0 && (
        <div className="m-8">
          <div className="overflow-x-auto">
            <table className="table text-center">
              <thead>
                <tr>
                  <th className="text-left">Cart articles</th>
                  <th>Count</th>
                  <th>Price per item</th>
                  <th>Total</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {cartItems.map((item) => {
                  const total = item.count * item.price;
                  return (
                    <tr key={item.id}>
                      <td>
                        <div className="flex items-center gap-3">
                          <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                              <img src={item.image} alt={item.title} />
                            </div>
                          </div>
                          <div>
                            <div className="font-bold">{item.title}</div>
                            <div className="text-sm opacity-50 text-left">{item.category}</div>
                          </div>
                        </div>
                      </td>
                      <td>{item.count}</td>
                      <td>
                        {new Intl.NumberFormat('de-DE', {
                          style: 'currency',
                          currency: 'EUR',
                        }).format(item.price)}
                      </td>
                      <td>
                        {new Intl.NumberFormat('de-DE', {
                          style: 'currency',
                          currency: 'EUR',
                        }).format(total)}
                      </td>
                      <td>
                        <button
                          onClick={() => addToCart(item)}
                          className="btn btn-primary font-normal"
                        >
                          Add to cart
                        </button>
                      </td>
                      <td>
                        <button
                          onClick={() => removeFromCart(item)}
                          className="btn btn-primary font-normal"
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="divider"></div>
          <div className="text-right font-bold text-lg p-2 m-4">
            <p>
              Total: {''}
              {new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(
                finalTotal
              )}
              <span className=" ml-4 btn btn-primary font-normal">Go to Check-Out</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
