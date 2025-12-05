import { NavLink } from 'react-router-dom';

const Navbar = ({ cartItems }) => {
  let totalCount = 0;
  cartItems.map((i) => {
    if (i.count > 0) {
      totalCount = totalCount + i.count;
    }
  });

  return (
    <nav>
      <div>
        <div className="bg-neutral text-neutral-content">
          <nav className="flex navbar navbar-center">
            <div className="px-8 mr-auto text-xl">
              <NavLink to={'/'}>eCommerce</NavLink>
            </div>
            <div className="flex content-end">
              <div className="btn btn-ghost text-xl">
                <NavLink to={'/'}>Homepage</NavLink>
              </div>
              <div className="btn btn-ghost text-xl mr-4">
                <NavLink to={'/cart'}>My Cart</NavLink>
                {totalCount > 0 && (
                  <div className="indicator ml-4 mb-6 text-lg">
                    <span className="indicator-item badge badge-primary text-sm">{totalCount}</span>
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
