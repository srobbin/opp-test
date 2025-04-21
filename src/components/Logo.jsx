import { Link } from 'react-router-dom';

function Logo() {
  return (
    <div className="logo-container">
      <Link to="/">
        {/* Placeholder logo - replace with your own */}
        <div className="logo">LOGO</div>
      </Link>
    </div>
  );
}

export default Logo;
