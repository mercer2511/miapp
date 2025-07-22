import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-black">
            <div className="mb-6">
                <Link href="/">
                    <ApplicationLogo className="h-20 w-20 fill-current text-gray-500 dark:text-gray-300" />
                </Link>
            </div>
            <div className="w-full max-w-md px-6 py-12 bg-white rounded-lg shadow dark:bg-zinc-900 dark:text-white">
                {children}
            </div>
        </div>
    );
}
