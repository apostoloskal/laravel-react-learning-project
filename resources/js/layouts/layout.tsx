import { MainFooter } from '@/components/MainFooter';
import { MainNavBar } from '@/components/MainNavBar';
import { PropsWithChildren } from 'react';

export default function Layout({ children }: PropsWithChildren) {
    return (
        <div className="flex-1 flex flex-col min-h-screen">
            <div className="px-2 py-2.5 bg-amber-200 dark:bg-gray-900 sm:px-4">
                <MainNavBar />
            </div>

            <main className="p-8 max-w-4xl mx-auto">
                {children}
            </main>

            <div className="px-2 py-2.5 bg-amber-200 dark:bg-gray-900 sm:px-4 mt-auto">
                <MainFooter />
            </div>
        </div>
    );
}