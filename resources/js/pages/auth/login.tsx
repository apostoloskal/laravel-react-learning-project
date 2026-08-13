import { Form, Head, router, usePage } from "@inertiajs/react";
import { Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";

import { store as loginRoute } from "@/actions/App/Http/Controllers/Auth/LoginController";

export default function Login() {
    const { errors } = usePage().props;

    const [values, setValues] = useState({
        username: "",
        password: "",
    });

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setValues((values) => ({
        ...values,
        [e.target.id]: e.target.value,
        }));
    }

    function handleSubmit(e: React.SubmitEvent<HTMLFormElement>) {
        e.preventDefault();
        router.post(loginRoute().url, values);
    }

    return (
        <div className="flex w-lg items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Head title="Login" />
            <Card className="w-full bg-amber-200 dark:bg-gray-900">
            <h1 className="text-2xl text-center font-bold text-gray-900 dark:text-white mb-4">Login</h1>
            <Form method="post" onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="username">Username</Label>
                    </div>
                    <TextInput id="username" name="username" type="text" placeholder="Username" required 
                    value={values.username}
                    onChange={handleChange}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password">Password</Label>
                    </div>
                    <TextInput id="password" name="password" type="password" placeholder="Password" required 
                    value={values.password}
                    onChange={handleChange}
                    />
                </div>
                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                <button 
                type="submit" 
                className="bg-amber-500 dark:bg-cyan-600 text-white font-medium text-center h-10 rounded-2xl cursor-pointer disabled:opacity-50"
                >
                    Login
                </button>
            </Form>
            </Card>
        </div>
  );
}