import { Head, Link, useForm } from '@inertiajs/react';
import PrimaryButton from '../../Components/PrimaryButton';
import InputLabel from '../../Components/InputLabel';
import TextInput from '../../Components/TextInput';
import InputError from '../../Components/InputError';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <>
            <Head title="Registro" />
            <div className="bg-gray-50 text-black dark:bg-black dark:text-white min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md px-6 py-12 bg-white rounded-lg shadow dark:bg-zinc-900 dark:text-white">
                    <header className="mb-8 text-center">
                        <h1 className="text-2xl font-bold text-black dark:text-white">Registro</h1>
                    </header>
                    <form onSubmit={submit}>
                        <div>
                            <InputLabel htmlFor="name" value="Nombre" className="text-black dark:text-white" />
                            <TextInput
                                id="name"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full text-black dark:text-white"
                                autoComplete="name"
                                isFocused={true}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            <InputError message={errors.name} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Correo electrónico" className="text-black dark:text-white" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full text-black dark:text-white"
                                autoComplete="username"
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            <InputError message={errors.email} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="password" value="Contraseña" className="text-black dark:text-white" />
                            <TextInput
                                id="password"
                                type="password"
                                name="password"
                                value={data.password}
                                className="mt-1 block w-full text-black dark:text-white"
                                autoComplete="new-password"
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            <InputError message={errors.password} className="mt-2" />
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="password_confirmation" value="Confirmar contraseña" className="text-black dark:text-white" />
                            <TextInput
                                id="password_confirmation"
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                className="mt-1 block w-full text-black dark:text-white"
                                autoComplete="new-password"
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            <InputError message={errors.password_confirmation} className="mt-2" />
                        </div>
                        <div className="mt-4 flex items-center justify-end">
                            <Link
                                href={route('login')}
                                className="text-sm text-gray-600 underline hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                            >
                                ¿Ya tienes cuenta?
                            </Link>
                            <PrimaryButton className="ms-4" disabled={processing}>
                                Registrarse
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
