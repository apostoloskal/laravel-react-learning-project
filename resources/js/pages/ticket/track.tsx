import { useForm, usePage } from "@inertiajs/react";
import { track as showTicketRoute } from "@/routes/ticket";

export default function TrackTicket() {
    const { errors: globalErrors } = usePage().props;

    const { data, setData, post, processing, errors } = useForm({
        tracking_code: "",
        email: ""
    });
    
    const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        post(showTicketRoute().url);
    }
    
        
    return (
        <div className="max-w-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="bg-amber-200 dark:bg-gray-800 rounded-xl 
            shadow-sm border border-gray-100 
            dark:border-gray-700 overflow-hidden">
                <div className="p-6 sm:p-8">

                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Track Your Ticket</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                            Enter your tracking code below to check the status of your support request.
                        </p>
                    </div>

                    <form method="POST" onSubmit={handleSubmit} autoComplete="off" className="space-y-6">                        
                        <div>
                            <label htmlFor="tracking_code" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Tracking Code <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                
                                <input 
                                    type="text" 
                                    name="tracking_code" 
                                    id="tracking_code" 
                                    value={data.tracking_code}
                                    required
                                    autoFocus
                                    placeholder="TKT-XXXXXX"
                                    onChange={(e) => setData('tracking_code', e.target.value)}
                                    className="w-full pl-10 rounded-lg px-3 py-2 text-gray-900 dark:text-white 
                                    bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 
                                    focus:ring-indigo-500 focus:border-indigo-500 shadow-sm focus:outline-none 
                                    focus:ring-2 transition-colors duration-200"
                                />
                            </div>
                            {errors.tracking_code && (
                                <p className="text-red-500 text-sm mt-1">{errors.tracking_code}</p>
                            )}
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                Your Email <span className="text-red-500">*</span>
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M11.89 4.111a5.5 5.5 0 1 0 0 7.778.75.75 0 1 1 1.06 1.061A7 7 0 1 1 15 8a2.5 2.5 0 0 1-4.083 1.935A3.5 3.5 0 1 1 11.5 8a1 1 0 0 0 2 0 5.48 5.48 0 0 0-1.61-3.889ZM10 8a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                
                                <input 
                                    type="email" 
                                    name="email" 
                                    id="email" 
                                    value={data.email}
                                    required
                                    placeholder="you@email.com"
                                    onChange={(e) => setData('email', e.target.value)}
                                    className="w-full pl-10 rounded-lg px-3 py-2 text-gray-900 
                                    dark:text-white bg-white dark:bg-gray-900 border border-gray-300 
                                    dark:border-gray-600 focus:ring-indigo-500 focus:border-indigo-500 
                                    shadow-sm focus:outline-none focus:ring-2 transition-colors duration-200"
                                />
                            </div>

                            {errors.email && (
                                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                            )}
                        </div>

                        { globalErrors && <p className="text-red-500 text-sm mt-1">{globalErrors.message}</p> }

                        <div className="pt-2">
                            <button 
                                type="submit" 
                                disabled={processing}
                                className="w-full flex justify-center items-center 
                                px-4 py-2.5 bg-indigo-600 hover:bg-indigo-700 
                                text-white font-medium text-sm rounded-lg shadow-sm 
                                focus:outline-none focus:ring-2 focus:ring-offset-2 
                                focus:ring-indigo-500 transition-colors duration-200"
                            >
                                Find Ticket
                            </button>
                        </div>
                    </form>
                    
                </div>
            </div>
        </div>
    );
}