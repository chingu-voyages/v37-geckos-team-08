/* eslint-disable max-len */
import React from 'react';

function Nav() {
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
          <div className=" hidden md:flex text-sm " v-else>
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
          <div className="flex md:hidden">
            <div className="space-y-2">
              <span className="block w-8 h-0.5 bg-gray-700 animate-pulse" />
              <span className="block w-8 h-0.5 bg-gray-700 animate-pulse" />
              <span className="block w-8 h-0.5 bg-gray-700 animate-pulse" />
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
}
export default Nav;
