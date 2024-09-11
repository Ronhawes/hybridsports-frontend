import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy, faSearch } from '@fortawesome/free-solid-svg-icons';
import { close, menu } from "../assets";
import { navLinks } from "../constants";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [search, setSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (nav) => {
    const pageTitle = nav.title.toLowerCase();
    const searchQueryLower = searchQuery.toLowerCase();
    return pageTitle.includes(searchQueryLower);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex py-6 justify-between items-center navbar z-50 bg-transparent">
      <div className="flex items-center">
        <FontAwesomeIcon icon={faTrophy} className="text-blue-800 text-xl mr-2" />
        <span className="text-dimWhite font-bold text-xl">Hybrid Sports</span>
      </div>

      <div className="flex items-center">
        <FontAwesomeIcon icon={faSearch} className="text-blue-800 text-xl mr-2" onClick={() => setSearch(!search)} />
        {search && (
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="New_Search"
            className="py-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
          />
        )}
      </div>

      <div className="flex items-center">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain mr-2"
          onClick={() => setToggle(!toggle)}
        />
        {toggle && (
          <div className="absolute top-20 right-2 pr-2 ml-2  mx-4 my-2 min-w-[140px] rounded-xl sidebar bg-black-gradient">
            <ul className="list-none flex justify-start items-start flex-1 flex-col">
              {navLinks.filter(handleSearch).map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
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