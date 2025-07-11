import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">PortWeb</a>
      </div>
      <div>
        <ul className="navbar-menu">
          <li><a href="/">Home</a></li>
          <li><a href="/projects">Projects</a></li>
          <li><a href="/about">About</a></li>
        </ul>
      </div>
      <div>
        <a href="/contact"><button className='btn'>Contact</button></a>
      </div>
    </nav>
  );
}

export default Navbar;
