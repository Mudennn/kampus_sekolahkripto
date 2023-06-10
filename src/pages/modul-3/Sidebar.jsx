import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { RiArrowDropDownLine, RiCloseFill } from "react-icons/ri";

// Side bar untuk pengenalan Blockchain
const Sidebar = () => {
  const menus = [
    { name: "Module 3: DeFi and Token Swapping    ", path: "/modul-3/deFi-and-token-swapping" },
    { name: "Topic 8: Swapping Tokens using DApps    ", path: "/modul-3/topic-8-swapping-tokens-using-dApps" },
    { name: "Topic 9: Principles of Decentralized Finance ", path: "/modul-3/topic-9-principles-of-decentralized-finance" },
    { name: "Topic 10: Liquidity Pool and Farming    ", path: "/modul-3/topic-10-liquidity-pool-and-farming" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <div className="w-full lg:w-[300px] p-6   text-gray-100 lg:min-h-screen z-10 ">
        <div>
          <h2 className="hidden lg:block lg:text-xl font-semibold tracking-wide text-yellow-400">Modul 3</h2>
          <hr className="hidden lg:block my-2"/>
          {menus.map((menu, i) => (
            <nav key={i}>
              <ul>
                <li className=" hidden lg:block mt-3">
                  <a
                    href={menu.path}
                    className="text-gray-100 transition-colors duration-200 hover:text-yellow-400"
                  >
                    {menu.name}
                  </a>
                </li>
              </ul>
            </nav>
          ))}
          {/* Topik Button  */}
          <div className="lg:hidden flex justify-start ">
            <button
              className="p-2 transition duration-200 rounded focus:outline-none focus:shadow-outline border"
              onClick={() => setIsMenuOpen(true)}
            >
              <div className="flex items-center">
                <span className="md:text-xl sm:text-md">Topik</span>{" "}
                {/* <RiArrowDropDownLine className="text-3xl" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </div>
            </button>

            {/* Mobile Navbar  */}
            {isMenuOpen && (
              <div className="absolute top-[110px] left-0 p-5  w-full z-20 ">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between  mb-2 ">
                    <h2 className=" font-semibold tracking-wider text-yellow-400 uppercase">Blockchain</h2>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 --mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {/* <RiCloseFill className="text-gray-600 text-3xl" /> */}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <hr />
                  {menus.map((menu, i) => (
                    <nav>
                      <ul key={i}>
                        <li className=" mt-4">
                          <a
                            href={menu.path}
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-yellow-400"
                          >
                            {menu.name}
                          </a>
                        </li>
                      </ul>
                    </nav>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
