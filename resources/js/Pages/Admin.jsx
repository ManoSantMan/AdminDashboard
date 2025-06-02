import { useState, useEffect } from "react";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("admin_token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

const handleSubmit = (e) => {
    e.preventDefault();

   post('/login/admin', {
  onSuccess: () => {
    window.location.href = '/admin/dashboard';
  },
  onError: (errors) => {
    console.log('Erro:', errors);
  },
});
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setIsAuthenticated(false);
  };

  if (isAuthenticated) {
    return (
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Painel do Administrador</h1>
        <p>Bem-vindo ao painel de administração de instituições!</p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
        >
          Sair
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="lg:mx-auto lg:w-full lg:max-w-sm">
        <img
          alt="Care.ly"
          src="https://i.postimg.cc/NjVmBH7g/Dark-left-logo.png"
          className="mx-auto h-20 rounded-lg w-auto"
        />
        <h2 className="mt-10 dark:text-sky-900 text-center text-2xl font-bold tracking-tight text-gray-900">
          Entre na sua conta de admin...
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Digite seu email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-md px-3 py-1.5 text-base"
            />
          </div>

          <div>
            <label htmlFor="senha" className="block text-sm font-medium text-gray-900">
              Senha
            </label>
            <input
              id="senha"
              name="senha"
              type="password"
              required
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="block w-full rounded-md px-3 py-1.5 text-base"
            />
          </div>

          {error && <div className="text-red-600 text-sm">{error}</div>}

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-md"
          >
            Logue-se
          </button>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Não é admin?{" "}
          <a
            href="https://forms.gle/fBq5DidVhCL5jQV46"
            className="text-indigo-600 hover:underline"
          >
            Solicite suas credenciais com nossa equipe!
          </a>
        </p>
      </div>
    </div>
  );
}
