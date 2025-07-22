import { Head, Link } from '@inertiajs/react';
import PrimaryButton from '../Components/PrimaryButton';

export default function Welcome({ auth }) {
    return (
        <>
            <Head title="Bienvenido" />
            {/* Navbar superior con título a la izquierda y botones a la derecha */}
            <header className="w-full bg-white dark:bg-zinc-900 shadow px-6 py-4 flex justify-between items-center">
                {/* --- INICIO TÍTULO DEL NAVBAR --- */}
                <div className="font-bold text-lg text-black dark:text-white">
                    {/* Aquí va el título del navbar */}
                    Título Navbar
                </div>
                {/* --- FIN TÍTULO DEL NAVBAR --- */}
                <nav className="flex gap-4">
                    {auth.user ? (
                        <Link href={route('dashboard')}>
                            <PrimaryButton>
                                Ir al panel
                            </PrimaryButton>
                        </Link>
                    ) : (
                        <>
                            <Link href={route('login')}>
                                <PrimaryButton>
                                    Iniciar sesión
                                </PrimaryButton>
                            </Link>
                            <Link href={route('register')}>
                                <PrimaryButton className="bg-green-600 hover:bg-green-700 focus:bg-green-700 dark:bg-green-700 dark:hover:bg-green-800 dark:focus:bg-green-800">
                                    Registrarse
                                </PrimaryButton>
                            </Link>
                        </>
                    )}
                </nav>
            </header>
            {/* Contenido principal centrado */}
            <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md px-6 py-12 bg-white rounded-lg shadow dark:bg-zinc-900">
                    <h1 className="text-2xl font-bold text-black dark:text-white text-center mb-8">Bienvenido</h1>
                    <div className="text-center py-8">
                        <p className="text-base text-gray-600 dark:text-gray-300">
                            Aquí puedes modificar el contenido principal de la página de bienvenida.<br />
                            Agrega información, imágenes, instrucciones o cualquier elemento que desees mostrar a los usuarios.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
