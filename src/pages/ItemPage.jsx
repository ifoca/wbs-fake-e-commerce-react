import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ItemPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchItem = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      if (!res.ok) throw new Error('Could not fetch product');
      const data = await res.json();
      setItem(data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItem();
  }, [id]);

  return (
    <div className="ml-48 mr-48 mt-12">
      {error && (
        <div className="alert alert-error bg-base-100 mb-8 text-white font-normal justify-center m-8">
          <p className="font-bold text-white text-xl p-2">{error}</p>
        </div>
      )}
      {!loading && (
        <div className="card lg:card-side bg-base-100 shadow-sm p-8 border rounded-lg">
          <figure>
            <img src={item.image} alt={item.title} />
          </figure>

          <div className="card-body">
            <h2 className="card-title">{item.title}</h2>
            <div>
              <p className="text-sm opacity-50">{item.category}</p>
              <p className="max-w-84">
                Rating: {item.rating.rate} {`(${item.rating.count} reviews)`}
              </p>
            </div>
            <p></p>
            <p className="max-w-84">{item.description}</p>

            <div className="card-actions justify-end">
              <button onClick={() => navigate(-1)} className="btn btn-primary">
                {' '}
                ← Go back
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ItemPage;
