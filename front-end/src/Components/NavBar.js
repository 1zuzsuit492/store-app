import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
  <div className="container">
    <div className="yawn" id="navbarNavAltMarkup">
      <div className="navbar-link">
        <Link to ="/">Home</Link>
        <Link to ="/new">New</Link>
        <Link to ="/edit">Edit</Link>
      </div>
    </div>
  </div>
</nav>

  );
}

export default NavBar;