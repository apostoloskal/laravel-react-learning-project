import { createInertiaApp } from '@inertiajs/react';
import Layout from './layouts/layout';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => (title ? `${title} - ${appName}` : appName),
    progress: {
        color: '#4B5563',
    },
    resolve: (name) => {
        const pages = import.meta.glob('./pages/**/*.tsx', { eager: true });
        let page: any = pages[`./pages/${name}.tsx`];
        
        // If the page doesn't have a layout defined, apply the default one
        page.default.layout = page.default.layout || ((page: React.ReactNode) => <Layout children={page} />);
        
        return page;
    },
});
