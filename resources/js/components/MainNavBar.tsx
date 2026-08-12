
import {
  MegaMenu,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export function MainNavBar() {
  return (
    <div className="border-b border-gray-600 px-2 py-2.5 dark:bg-gray-900 sm:px-4">
        <MegaMenu>
            <NavbarBrand href="/">
                <div className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 dark:text-white">
                    Ticket 
                    <span className="text-blue-600 dark:text-blue-500">
                        Tracker
                    </span>
                </div>
            </NavbarBrand>
            <div className="order-2 hidden items-center md:flex">
                <a
                href="#"
                className="mr-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-800 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 md:mr-2 md:px-5 md:py-2.5 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                >
                Login
                </a>
            </div>
            <NavbarToggle />
            <NavbarCollapse>
                <NavbarLink href="#">Submit ticket</NavbarLink>
                <NavbarLink href="#">Track ticket</NavbarLink>
            </NavbarCollapse>
        </MegaMenu>
    </div>
  );
}
