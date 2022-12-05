import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 border-gray-200 p-2 sm:px-4  dark:bg-gray-900 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div
            className="hidden w-full md:block md:w-auto  items-center"
            id="navbar-default"
          >
            <ul className="flex flex-col p-3  rounded-lg bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
              <li>
                <Link
                  to="/"
                  className={
                    "block py-2 pl-3 pr-4 text-gray-700 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent "
                  }
                  aria-current="page"
                >
                  Upload docs
                </Link>
              </li>
              <li>
                <Link
                  to="/admin"
                  className={
                    "block py-2 pl-3 pr-4 text-gray-700 rounded  md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  }
                >
                  Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
