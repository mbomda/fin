import * as React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <header
      className="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full before:absolute before:inset-0 before:max-w-[66rem] before:mx-2 
    before:lg:mx-auto before:rounded-[26px] before:bg-blue-800 before:backdrop-blur-md"
    >
      <nav className="relative max-w-[66rem] w-full py-2.5 ps-5 pe-2 md:flex md:items-center md:justify-between md:py-0 mx-2 lg:mx-auto">
        <div className="flex items-center justify-between">
          <Link
            className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none focus:opacity-10"
            href="GLOPCOF"
            aria-label="Glopcof"
          >
            <svg
              className="w-28 h-auto"
              width="116"
              height="32"
              viewBox="0 0 116 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="stroke-blue"
                stroke="currentColor"
                stroke-width="2"
              />
            </svg>
          </Link>

          <div className="md:hidden">
            <button
              type="button"
              className="hs-collapse-toggle size-8 flex justify-center items-center text-sm font-semibold rounded-full bg-neutral-800 text-white disabled:opacity-50 
            disabled:pointer-events-none"
              id="hs-navbar-floating-dark-collapse"
              aria-expanded="false"
              aria-controls="hs-navbar-floating-dark"
              aria-label="Toggle navigation"
              data-hs-collapse="#hs-navbar-floating-dark"
            >
              <svg
                className="hs-collapse-open:hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="3" x2="21" y1="6" y2="6" />
                <line x1="3" x2="21" y1="12" y2="12" />
                <line x1="3" x2="21" y1="18" y2="18" />
              </svg>
              <svg
                className="hs-collapse-open:block hidden shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div
          id="hs-navbar-floating-dark"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
          aria-labelledby="hs-navbar-floating-dark-collapse"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-end py-2 md:py-0 md:ps-7">
            <Link
              className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
              href="http://localhost:3000/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
              href="produits"
            >
              Prduits
            </Link>
            <Link
              className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
              href=" services"
            >
              Services
            </Link>
            <Link
              className="p-3 ps-px sm:px-3 md:py-4 text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
              href=""
            >
              Menu
            </Link>

            <div className="hs-dropdown [--strategy:static] md:[--strategy:fixed] [--adaptive:none] [--is-collapse:true] md:[--is-collapse:false] p-3 ps-px sm:px-3 md:py-4">
              <div
                className="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-48 hidden z-10 bg-neutral-800 md:shadow-md rounded-lg before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="hs-dropdown-floating-dark"
              >
                <div className="py-1 md:px-1 space-y-1">
                  <Link
                    className="flex items-center gap-x-3.5 py-2 md:px-3 rounded-lg text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                    href="about"
                  >
                    About
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Link
                className="flex items-center gap-x-3.5 py-2 md:px-3 rounded-lg text-sm text-white hover:text-neutral-300 focus:outline-none focus:text-neutral-300"
                href="about"
              >
                About
              </Link>
            </div>

            <div>
              <Link
                className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#00ff62] font-medium text-sm text-neutral-800 rounded-full focus:outline-none"
                href="contact"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
