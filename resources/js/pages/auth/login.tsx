import { Form, Head, useForm, usePage } from "@inertiajs/react";

import { store as loginRoute } from "@/actions/App/Http/Controllers/Auth/LoginController";

export default function Login() {
    const { errors: globalErrors } = usePage().props;

    const {data, setData, post, errors} = useForm({
        username: "",
        password: "",
    })

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        post(loginRoute().url);
    }

    return (
        <div className="min-h-[calc(100vh-250px)] flex items-center justify-center px-4 py-12">
            <Head title="Login" />
            <div className="w-full max-w-md bg-orange-100 dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-sm border border-amber-400 dark:border-gray-700">
                <div className="flex flex-col w-full">
                    <div className="flex w-full justify-center">
                        <h1 className="text-2xl text-center font-bold text-gray-900 dark:text-white mb-4">Login</h1>
                    </div>
                    <Form method="post" onSubmit={handleSubmit} autoComplete="off" className="flex flex-col gap-4">
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Username
                                </label>
                            </div>
                            <input id="username" name="username" type="text" placeholder="Username" required autoFocus
                            value={data.username}
                            onChange={(e) => setData('username', e.target.value)}
                            className="border-gray-300 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500
                            focus:ring-amber-300 focus:border-amber-300
                            w-full rounded-lg px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-900 border
                            shadow-sm focus:outline-none focus:ring-2 transition-colors duration-200"
                            />
                        </div>
                        <div>
                            <div className="mb-2 block">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Password
                                </label>
                            </div>
                            <input id="password" name="password" type="password" placeholder="Password" required
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            className="border-gray-300 dark:border-gray-600 dark:focus:ring-indigo-500 dark:focus:border-indigo-500
                            focus:ring-amber-300 focus:border-amber-300
                            w-full rounded-lg px-3 py-2 text-gray-900 dark:text-white bg-white dark:bg-gray-900 border
                            shadow-sm focus:outline-none focus:ring-2 transition-colors duration-200"
                            />
                        </div>
                            {globalErrors.message && <p className="text-red-500 text-sm mt-1">{globalErrors.message}</p>}
                        <button 
                        type="submit" 
                        className="bg-amber-500 dark:bg-indigo-500 text-white font-medium text-center h-10 rounded-2xl cursor-pointer disabled:opacity-50"
                        >
                            Login
                        </button>
                    </Form>
                </div>
            </div>
        </div>
  );
}