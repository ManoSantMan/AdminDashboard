import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link } from '@inertiajs/react';
import { useState } from 'react';
import axios from 'axios';

export default function Register() {
    const [data, setData] = useState({
        nm_usuario: '',
        email: '',
        senha: '',
        cpf: '',
        imagem: null,
    });

    const [errors, setErrors] = useState({});
    const [processing, setProcessing] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === 'imagem') {
            setData({ ...data, imagem: files[0] });
        } else {
            setData({ ...data, [name]: value });
        }
    };

    const submit = async (e) => {
        e.preventDefault();
        setProcessing(true);
        setErrors({});

        try {
            const formData = new FormData();
            formData.append('nm_usuario', data.nm_usuario);
            formData.append('email', data.email);
            formData.append('senha', data.senha);
            formData.append('cpf', data.cpf);
            if (data.imagem) {
                formData.append('imagem', data.imagem);
            }

            await axios.post('http://localhost:8000/api/usuarios', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            alert('Usuário cadastrado com sucesso!');
        } catch (error) {
            if (error.response && error.response.data && error.response.data.errors) {
                setErrors(error.response.data.errors);
            } else {
                alert('Erro ao registrar usuário.');
            }
        } finally {
            setProcessing(false);
        }
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit} encType="multipart/form-data">
                {/* Nome do Usuário */}
                <div>
                    <InputLabel htmlFor="nm_usuario" value="Nome do Usuário" />
                    <TextInput
                        id="nm_usuario"
                        name="nm_usuario"
                        value={data.nm_usuario}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={handleChange}
                        required
                    />
                    <InputError message={errors.nm_usuario} className="mt-2" />
                </div>

                {/* Email */}
                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={handleChange}
                        required
                    />
                    <InputError message={errors.email} className="mt-2" />
                </div>

                {/* Senha */}
                <div className="mt-4">
                    <InputLabel htmlFor="senha" value="Senha" />
                    <TextInput
                        id="senha"
                        type="password"
                        name="senha"
                        value={data.senha}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={handleChange}
                        required
                    />
                    <InputError message={errors.senha} className="mt-2" />
                </div>

                {/* CPF */}
                <div className="mt-4">
                    <InputLabel htmlFor="cpf" value="CPF" />
                    <TextInput
                        id="cpf"
                        name="cpf"
                        value={data.cpf}
                        className="mt-1 block w-full"
                        onChange={handleChange}
                        required
                    />
                    <InputError message={errors.cpf} className="mt-2" />
                </div>

                {/* Imagem */}
                <div className="mt-4">
                    <InputLabel htmlFor="imagem" value="Imagem (opcional)" />
                    <input
                        id="imagem"
                        type="file"
                        name="imagem"
                        accept="image/*"
                        className="mt-1 block w-full text-sm text-gray-700"
                        onChange={handleChange}
                    />
                    <InputError message={errors.imagem} className="mt-2" />
                </div>

                {/* Botões */}
                <div className="mt-4 flex items-center justify-end">
                    <Link
                        href={route('login')}
                        className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Já possui uma conta?
                    </Link>

                    <PrimaryButton className="ms-4" disabled={processing}>
                        Registrar
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
