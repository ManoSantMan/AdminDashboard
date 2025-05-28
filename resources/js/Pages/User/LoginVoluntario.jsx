import { useForm } from '@inertiajs/react';
import { Link } from '@inertiajs/react';

export default function Login() {
  const { data, setData, post, errors } = useForm({
    email: '',
    senha: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/login'); // A rota precisa existir no Laravel
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="lg:mx-auto lg:w-full lg:max-w-sm">
        <img
          alt="Care.ly"
          src="/assets/Dark_left_logo.png"
          className="mx-auto h-20 rounded-lg w-auto"
        />
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          Entre na sua conta de voluntário...
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Digite seu email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                required
                className="block w-full rounded-md px-3 py-1.5 text-base"
              />
              {errors.email && (
                <div className="text-red-500 text-sm mt-1">{errors.email}</div>
              )}
            </div>
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-900">
              Senha
            </label>
            <div className="mt-2">
              <input
                id="senha"
                name="senha"
                type="password"
                value={data.senha}
                onChange={(e) => setData('senha', e.target.value)}
                required
                className="block w-full rounded-md px-3 py-1.5 text-base"
              />
              {errors.senha && (
                <div className="text-red-500 text-sm mt-1">{errors.senha}</div>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-2 rounded-md"
            >
              Logue-se
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Não possui conta?{' '}
          <Link href="/register" className="text-indigo-600 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </div>
  );
}
