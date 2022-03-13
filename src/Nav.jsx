/* eslint-disable max-len */
import React, { useState } from "react";
import { useEffect } from "react/cjs/react.production.min";

function Nav() {
  const [dropDown, setDropDown] = useState(false);
  const drop = () => {
    setDropDown((current) => !current);
  };

  // useEffect(() => {
  //   dropDown;
  // });

  return (
    <header className="bg-teal-400">
      <nav className="flex w-full justify-between bg-slate-500 p-4 text-white">
        <a href="/">
          <span className="text-xl font-semibold tracking-tight">Title</span>
        </a>
        <div className="flex md:w-auto md:items-center">
          <div className="hidden md:flex">
            <a className="mr-4 block md:text-white" href="/link">
              Home
            </a>
            <a className="mr-4 block md:text-white" href="/link">
              About
            </a>
            <a className="mr-4 block md:text-white" href="/link">
              Contact
            </a>
          </div>
          <div className=" hidden text-sm md:flex " v-else>
            <a
              className="ml-2 rounded border border-gray-100 bg-white p-2 font-semibold leading-none text-teal-500 hover:border-transparent hover:bg-gray-100"
              href="/auth/signin"
            >
              Login
            </a>
            <a
              className="ml-2 rounded border border-teal-600 bg-teal-500 p-2 font-semibold leading-none text-gray-100 hover:border-transparent hover:bg-teal-600"
              href="/auth/signup"
            >
              Sign up
            </a>
          </div>
          <div className="flex w-full flex-col">
            <button
              className="flex justify-end md:hidden "
              type="button"
              onClick={drop}
            >
              <div className="space-y-2">
                <span className="block h-0.5 w-8 animate-pulse bg-gray-700" />
                <span className="block h-0.5 w-8 animate-pulse bg-gray-700" />
                <span className="block h-0.5 w-8 animate-pulse bg-gray-700" />
              </div>
            </button>
            <div className="w-full md:hidden">
              {dropDown && (
                <div className="w-full rounded-md bg-white px-2 py-2 shadow">
                  <a
                    className="  mt-2 block rounded-lg bg-transparent bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                    href="#"
                  >
                    Link #1
                  </a>
                  <a
                    className=" mt-2 block rounded-lg bg-transparent bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                    href="#"
                  >
                    Link #2
                  </a>
                  <a
                    className="d mt-2 block rounded-lg bg-transparent bg-gray-200 px-4 py-2 text-sm font-semibold text-gray-900 focus:bg-gray-200 focus:text-gray-900 focus:outline-none md:mt-0"
                    href="#"
                  >
                    Link #3
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default Nav;
