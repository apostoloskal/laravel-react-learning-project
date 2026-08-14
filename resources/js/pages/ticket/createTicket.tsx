import { router } from "@inertiajs/react";
import { useState } from "react";

import { store as submitTicketRoute } from "@/actions/App/Http/Controllers/Ticket/TicketController";

interface CreateTicketProps {
    categories: App.Enums.TicketCategory[];
}

export default function CreateTicket({ categories }: CreateTicketProps) {
    const [values, setValues] = useState({
        title: "",
        description: "",
        category: "",
    });

    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.post(submitTicketRoute().url, values);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    return (
        <div className="mt-2 max-w-3xl mx-auto p-6 bg-zinc-200 dark:bg-gray-800 
        rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Submit a Support Ticket</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    Please describe your issue in detail. Our team typically responds within 24 hours.
                </p>
            </div>
            <form action="#" method="POST" onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
                <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Title <span className="text-red-500">*</span>
                    </label>
                    <input 
                        type="text" 
                        name="title" 
                        id="title" 
                        value={values.title}
                        required
                        autoFocus
                        placeholder="Brief summary of the issue"
                        className="w-full rounded-lg px-3 py-2 text-gray-900 dark:text-white 
                        bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                        focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:outline-none 
                        focus:ring-2 transition-colors duration-200"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Description <span className="text-red-500">*</span>
                    </label>
                    <textarea 
                        name="description" 
                        id="description" 
                        rows={6}
                        value={values.description}
                        required
                        placeholder="Provide as much detail as possible, including steps to reproduce any errors..."
                        className="w-full rounded-lg px-3 py-2 text-gray-900 dark:text-white 
                        bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                        focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:outline-none 
                        focus:ring-2 transition-colors duration-200"
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Category <span className="text-red-500">*</span>
                    </label>
                    <select 
                        name="category" 
                        id="category" 
                        required
                        onChange={handleChange}
                        className="w-full rounded-lg px-3 py-2 text-gray-900 dark:text-white 
                        bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                        focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:outline-none 
                        focus:ring-2 transition-colors duration-200"
                    >
                        <option value="" disabled selected={values.category === ""}>
                            Select a category
                        </option>

                        {categories.map((category) => (
                            <option key={category} value={category} selected={values.category === category}>
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>


                <div className="flex items-center justify-end space-x-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                    <button 
                        type="submit" 
                        className="inline-flex items-center justify-center px-6 py-2.5 
                        bg-indigo-600 hover:bg-indigo-700 text-white font-medium 
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