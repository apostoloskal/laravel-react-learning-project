import Layout from '@/layouts/layout';
import { Head } from '@inertiajs/react';

interface HomeProps {
    name: string;
}

export default function Home({ name }: HomeProps) {
    return (
        <Layout>
            {/* Inertia's Head component updates the <title> and <meta> tags */}
            <Head title="Homepage" />
            
            <h1 className="text-3xl font-bold">Welcome, {name}!</h1>
            <p className="mt-4">This content is being injected into the Layout's children prop.</p>
        </Layout>
    );
}