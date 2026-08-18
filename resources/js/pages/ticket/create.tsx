import { useForm, usePage } from "@inertiajs/react";

import { store as submitTicketRoute } from "@/actions/App/Http/Controllers/Ticket/TicketController";

interface CreateTicketProps {
    categories: App.Enums.TicketCategory[];
}

export default function CreateTicket({ categories }: CreateTicketProps) {
    const { globalErrors } = usePage().props;

    const { data, setData, post, errors } = useForm({
        title: "",
        description: "",
        category: "",
        email: "",
    })
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(submitTicketRoute().url);
    }

    return (
        <div className="mt-2 max-w-3xl mx-auto p-6 bg-orange-200 dark:bg-gray-800 
        rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Submit a Support Ticket</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Please describe your issue in detail. Our team typically responds within 24 hours.
                </p>
            </div>
            <form method="POST" onSubmit={handleSubmit} autoComplete="off" encType="multipart/form-data" className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        value={data.title}
                        required
                        autoFocus
                        placeholder="Brief summary of the issue"
                        className="w-full rounded-lg px-3 py-2 text-gray-900 dark:text-white 
                        bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                        focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:outline-none 
                        focus:ring-2 transition-colors duration-200"
                        onChange={(e) => setData('title', e.target.value)}
                    />
                    { errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p> }
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                        name="description" 
                        id="description" 
                        rows={6}
                        value={data.description}
                        required
                        placeholder="Provide as much detail as possible, including steps to reproduce any errors..."
                        className="w-full rounded-lg px-3 py-2 text-gray-900 dark:text-white 
                        bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                        focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:outline-none 
                        focus:ring-2 transition-colors duration-200"
                        onChange={(e) => setData('description', e.target.value)}
                    />
                    { errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p> }
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <select 
                        name="category" 
                        id="category" 
                        value={data.category}
                        required
                        onChange={(e) => setData('category', e.target.value)}
                        className="w-full rounded-lg px-3 py-2 text-gray-900 dark:text-white 
                        bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                        focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:outline-none 
                        focus:ring-2 transition-colors duration-200"
                    >
                        <option value="" disabled>
                            Select a category
                        </option>

                        {categories.map((category) => (
                            <option key={category} value={category} >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                    { errors.category && <p className="text-red-500 text-sm mt-1">{errors.category}</p> }
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your email <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={data.email}
                        required
                        placeholder="you@example.com"
                        onChange={(e) => setData('email', e.target.value)}
                        className="w-full rounded-lg px-3 py-2 text-gray-900 dark:text-white bg-white 
                        dark:bg-gray-900 border border-gray-300 dark:border-gray-600 focus:ring-indigo-500 
                        focus:border-indigo-500 shadow-sm focus:outline-none focus:ring-2 transition-colors duration-200"
                    />
                    { errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p> }
                </div>

                <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button 
                        type="submit" 
                        className="inline-flex items-center justify-center px-6 py-2.5 
                        bg-amber-500 hover:bg-amber-600 text-gray-800 
                        dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:text-white font-medium 
                        text-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 
                        focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                    >
                        Submit Ticket
                    </button>
                </div>
            </form>
        </div>
    );
}