export function MainFooter() {
    return (
        <footer className="sticky z-50 flex items-center justify-between px-4 py-4 mt-auto
        bg-amber-200 sm:px-6 lg:px-8 
        dark:bg-gray-900 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="border-t border-slate-800/80 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <p>&copy; {new Date().getFullYear()} Ticket Tracker Inc. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-slate-400 transition">Privacy</a>
                        <a href="#" className="hover:text-slate-400 transition">Terms</a>
                        <a href="#" className="hover:text-slate-400 transition">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}