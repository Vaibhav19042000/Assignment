import React, { useEffect, useState } from "react";

const Navbar = ({icon}) => {
  const [navbarData, setNavbarData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => setNavbarData(data.navbar))
      .catch((error) => {
        console.error("Error fetching navbar data:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <nav className=" p-4">
      {/**
      here I have created a data.json file to fetch the static data for the dropdown in the navbar
      
      */}
      <div className="flex">
        {navbarData.map((item, index) => (
          <div key={index} className="relative group">
            <button className="text-white px-4 py-2 focus:outline-none">
              {item.name} {icon}
            </button>
            <div className="absolute left-0 hidden mt-2 w-48 bg-gray-700 group-hover:block">
              {item.dropdown.map((dropdownItem, dropdownIndex) => (
                <a
                  key={dropdownIndex}
                  href="#"
                  className="block px-4 py-2 text-white hover:bg-gray-600"
                >
                  {dropdownItem.name}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
