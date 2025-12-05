import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <main>
      <div className="text-center font-semibold text-3xl m-4 p-4">
        <p>Welcome to the fake eCommerce website</p>
      </div>
      <Outlet />
    </main>
  );
};

export default MainLayout;
