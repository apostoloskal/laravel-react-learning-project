import { create as loginRoute, destroy as logoutRoute } from "@/actions/App/Http/Controllers/Auth/LoginController";
import { home as homeRoute } from "@/routes/index";
import { usePage } from "@inertiajs/react";

export function MainNavBar() {
    const { auth } = usePage().props;
    const user = auth.user;

  return (
    <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-4 
        bg-amber-200 shadow-sm sm:px-6 lg:px-8 dark:bg-gray-900">
        <a href={homeRoute().url} className="flex items-center gap-2 text-2xl font-extrabold text-gray-900 dark:text-white">
            Ticket<span className="text-amber-600 dark:text-blue-500">Tracker</span>
        </a>
        <ul className="hidden list-none items-center gap-8 md:flex">
            <li><a href="#">Create ticket</a></li>
            <li><a href="#">Search ticket</a></li>
            {user &&
                <li><a href="#">Dashboard</a></li>
            }
        </ul>
        {user ? (
            <div className="flex items-center gap-4">
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    Hello, {user.full_name}!
                </span>
                <form method="POST" action={logoutRoute().url} className="inline">
                    <button type="submit" className="flex items-center w-full px-4 py-2.5 text-sm font-medium text-red-600 transition-colors duration-200 rounded-lg hover:bg-red-50 dark:text-red-400 dark:hover:bg-gray-800 cursor-pointer">
                        <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Log Out
                    </button>
                </form>
            </div>
        ) : (
            <div className="flex items-center gap-4">
                <a href={loginRoute().url} className="px-5 py-2.5 text-sm font-semibold 
                rounded-lg transition-all duration-200 
                focus:outline-none focus:ring-2 
                focus:ring-offset-2 dark:focus:ring-offset-gray-900
                bg-transparent border border-transparent 
                text-gray-700 dark:text-gray-200 dark:hover:text-blue-400 
                hover:bg-amber-400 dark:hover:bg-blue-900/30"
                >
                    Log In
                </a>
            </div>
        )}
    </header>
  );
}
