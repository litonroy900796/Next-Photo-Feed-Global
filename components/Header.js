"use client";
import React, { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-4 md:py-6 border-b">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/">
          <img
            className="max-w-25 md:max-w-41.25"
            src="/lws_logo.png"
            alt="Lws"
          />
        </a>

        <div className="flex gap-4 items-center">
          <div className="relative">
            {/* Button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-2"
            >
              <img className="max-w-8" src="/images/bd.png" alt="bangla" />
              Bangla
            </button>

            {/* Dropdown */}
            {open && (
              <ul className="absolute right-0 top-full mt-2 w-40 rounded-md bg-white p-2 z-10 shadow-lg">
                <li
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                >
                  <img className="max-w-8" src="/images/bd.png" alt="bangla" />
                  Bangla
                </li>

                <li
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-md cursor-pointer hover:bg-gray-100"
                >
                  <img
                    className="max-w-8"
                    src="/images/usa.png"
                    alt="english"
                  />
                  English
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
