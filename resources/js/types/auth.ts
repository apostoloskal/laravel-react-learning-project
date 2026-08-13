export type User = {
    id: number;
    username: string;
    email: string;
    role: string;
    full_name: string;
    job_title: string;
    department: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
};

export type Auth = {
    user: User;
};
