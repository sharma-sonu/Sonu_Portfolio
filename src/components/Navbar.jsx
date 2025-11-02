import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1a1a40]/70 backdrop-blur-md py-4 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-16">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
          <h1 className="text-2xl font-bold text-yellow-300">Sonu Sharma</h1>
        </div>

        {/* Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white text-lg font-medium">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/certifications">Certifications</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
