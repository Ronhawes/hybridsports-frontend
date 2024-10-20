import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Make sure to import this
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { close, menu, tour12, tour13 } from "../assets";
import { navLinks } from "../constants";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to handle search logic
  const handleSearch = (nav) => {
    if (searchQuery.trim() === "") return true; // Show all results if no query
    const pageTitle = nav.title.toLowerCase();
    const searchQueryLower = searchQuery.toLowerCase();
    return pageTitle.includes(searchQueryLower);
  };

  // Function to handle toggling of search and menu
  const handleSearchToggle = () => {
    setSearch(!search);
    setToggle(false);  // Close menu when search is opened
  };

  // Function to handle menu toggle
  const handleMenuToggle = () => {
    setToggle(!toggle);
    setSearch(false); // Close search when menu is opened
    setSearchQuery(""); // Reset search query
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex py-3 justify-between items-center navbar z-50 bg-slate-500 bg-opacity-45 ">
      <div className="flex items-center justify-center">
        <img src={tour12} alt="Tournament Icon" className="text-blue-800 mr-2 w-36 h-34 rounded-2xl" />
        <span className=" font-bold text-3xl">Hybrid Sports </span>
      </div>

      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <FontAwesomeIcon
          icon={faSearch}
          className="text-blue-800 text-xl cursor-pointer"
          onClick={handleSearchToggle}
        />
        
        {/* Search Input */}
        {search && (
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search..."
            className="py-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-[200px]"
          />
        )}
      </div>

      <div className="flex items-center">
        {/* Mobile Menu Button */}
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-2 cursor-pointer"
          onClick={handleMenuToggle}
        />

        {/* Mobile Menu */}
        {toggle && (
          <div className="absolute top-20 right-2 pr-2 ml-2 mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-black-gradient">
            <ul className="list-none flex justify-start items-start flex-1 flex-col">
              {navLinks.filter(handleSearch).map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px]  ${
                    active === nav.title ? "text-white" : "text-dimWhite"
                  } ${index === navLinks.length - 1 ? "mb-1" : "mb-4"}`}
                  onClick={() => {
                    setActive(nav.title);
                    setToggle(false);
                    setSearch(false);
                    setSearchQuery("");
                  }}
                >
                  <Link to={nav.link}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
