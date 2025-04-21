import { Outlet } from 'react-router-dom';
import Logo from './Logo';

function Layout() {
  return (
    <div className="app-container">
      <Logo />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
