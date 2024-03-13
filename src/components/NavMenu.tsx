import { useEffect, useState } from "react";
import { Dialog } from "@headlessui/react";
import NextLink from "next/link";
import MobileMenu from "./MobileMenu";
import NavItem from "./NavItem";
import { useRouter } from "next/router";

export const navItems = [
  {
    href: "/",
    text: "Home",
  },
  {
    href: "/events",
    text: "Event",
  },
  {
    href: "/calender",
    text: "Calender",
  },
  {
    href: "/ourteam",
    text: "Our Team",
  },
  {
    href: "/sponsors",
    text: "Sponsors",
  },
  {
    href: "/developer",
    text: "developer",
  },
];

const NavMenu = () => {
  let [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className=" text-white">
      <div className="flex items-center justify-between max-w-6xl lg:max-w-[72rem] xl:max-w-6xl px-4 py-6 mx-auto sm:px-6">
        <div className="flex justify-start lg:w-0  transition whitespace-nowrap hover:transition duration-300 text-xl font-bold cursor-pointer  ">
          <span className="sr-only">Logo</span>
          <NextLink href="/" passHref>
            <span className=" opacity-100 hover:text-lightGreen dark:hover:text-lightGreen ">
              ANANTYA-2k24
            </span>
          </NextLink>
        </div>
        <div className="-my-2 -mr-2 lg:hidden" onClick={() => handleClick()}>
          <MobileMenu />
        </div>
        <nav className="hidden space-x-6 text-lg justify-center lg:flex ">
          {navItems.map(({ href, text }, index) => (
            <NavItem href={href} text={text} />
          ))}
        </nav>
      </div>
      {isOpen && (
        <Dialog
          open={isOpen}
          onClose={() => setIsOpen(false)}
          className="fixed inset-0 z-50 lg:hidden"
        >
          <Dialog.Overlay className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-gray-900/80" />

          <div className="fixed w-full max-w-xs p-6 text-base font-semibold text-gray-900 bg-white rounded-lg shadow-lg top-4 right-4 dark:bg-gray-800 dark:text-gray-400 dark:highlight-white/5">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute flex items-center justify-center w-8 h-8 text-gray-500 top-5 right-5 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
            >
              <span className="sr-only">Close navigation</span>
              <svg
                viewBox="0 0 10 10"
                className="w-2.5 h-2.5 overflow-visible"
                aria-hidden="true"
              >
                <path
                  d="M0 0L10 10M10 0L0 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                ></path>
              </svg>
            </button>
            <ul className="space-y-6">
              {navItems.map(({ href, text }) => (
                <li>
                  <NextLink
                    href={{
                      pathname: href,
                      query: { showNav: text !== "Home" ? true : false },
                    }}
                  >
                    <p className="hover:text-lightGreen dark:hover:text-yellow-500">
                      {text}
                    </p>
                  </NextLink>
                </li>
              ))}
            </ul>
          </div>
        </Dialog>
      )}
    </div>
  );
};

export default NavMenu;
