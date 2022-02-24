import { Link } from "react-router-dom";
import './NavBar.css';


function NavBar() {
  return (
    <nav className="navbar">
  <div className="container">
    <div className="yawn" id="navbarNavAltMarkup">
      <div className="navbar-link">
        <Link style={{ textDecoration: 'none', color: 'white' }} to ="/">Home</Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to ="/new">New</Link>
        <Link style={{ textDecoration: 'none', color: 'white' }} to ="/edit">Edit</Link>
      </div>
    </div>
  </div>
</nav>

  );
}

export default NavBar;