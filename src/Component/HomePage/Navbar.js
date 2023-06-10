import React from "react";

const Navbar = () => {
  const navbarItem = (
    <>
      <li>
        <a>Item 1</a>
      </li>
      <li tabIndex={0}>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Item 3</a>
      </li>
    </>
  );

  return (
    <div className="">
      <div className="navbar bg-base-100 border-b-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end hidden lg:flex container mx-auto">
          <ul className="menu menu-horizontal font-bold text-lg px-1">
            {navbarItem}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;