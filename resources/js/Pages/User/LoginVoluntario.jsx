import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login2() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Lógica de envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulando autenticação (substitua com sua lógica real)
    if (email === "voluntario@exemplo.com" && senha === "senha123") {
      // Se a autenticação for bem-sucedida, redireciona para o dashboard
      navigate("/dashboard");
    } else {
      // Se falhar, mostra uma mensagem de erro
      setError("Credenciais inválidas. Tente novamente.");
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="lg:mx-auto lg:w-full lg:max-w-sm">
          {/* Logo */}
          <img
            alt="Care.ly"
            src="./src/assets/Dark_left_logo.png" // Se necessário, ajuste o caminho ou use importação
            className="mx-auto h-20 rounded-lg w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
            Entre na sua conta de voluntário...
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          {/* Formulário de login */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Campo de email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                Digite seu email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  aria-label="Email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Campo de senha */}
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="senha" className="block text-sm font-medium text-gray-900">
                  Senha
                </label>
                <div className="text-sm">
                  <Link to="/recuperar-senha" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Esqueceu a senha?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                  autoComplete="current-password"
                  aria-label="Senha"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {/* Exibição de erro se houver */}
            {error && (
              <div className="text-red-500 text-sm text-center mt-2">
                {error}
              </div>
            )}

            {/* Botão de login */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600"
              >
                Logue-se
              </button>
            </div>
          </form>

          {/* Link de cadastro */}
          <p className="mt-10 text-center text-sm text-gray-500">
            Não possui conta?{' '}
            <Link to="/CadastroUser" className="font-semibold text-[#313A4B] hover:text-indigo-500">
              Cadastre-se e faça parte da mudança!!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
