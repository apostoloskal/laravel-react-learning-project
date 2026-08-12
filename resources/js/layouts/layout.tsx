import { MainNavBar } from '@/components/MainNavBar';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="flex-1 flex flex-col min-h-screen bg-gray-100">
            <div className="px-2 py-2.5 dark:bg-gray-900 sm:px-4">
                <MainNavBar />
            </div>

            <main className="p-8 max-w-4xl mx-auto">
                {children}
            </main>

            <footer className="mt-auto p-4 text-center text-gray-500 text-sm">
                &copy; 2026 My Laravel App
            </footer>
        </div>
    );
}