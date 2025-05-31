import { useState } from "react";

export default function Admin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: senha,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Erro ao fazer login");
        return;
      }

      // Armazena o token JWT
      localStorage.setItem("token", data.token);

      // Redireciona ou exibe sucesso
      alert("Login feito com sucesso!");
      // Ex: navegação com React Router (se estiver usando):
      // navigate('/dashboard');

    } catch (error) {
      console.error("Erro ao fazer login:", error);
      setError("Erro inesperado ao conectar.");
    }
  };

  return (
    <>
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
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="email" className="block dark:text-gray-400 text-sm font-medium text-gray-900">
                Digite seu email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="senha" className="block dark:text-gray-400 text-sm font-medium text-gray-900">
                Senha
              </label>
              <div className="mt-2">
                <input
                  id="senha"
                  name="senha"
                  type="password"
                  required
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600 sm:text-sm"
                />
              </div>
            </div>

            {error && <div className="text-red-600 text-sm">{error}</div>}

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Logue-se
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Não é admin?{" "}
            <a
              href="https://forms.gle/fBq5DidVhCL5jQV46"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Solicite suas credenciais com nossa equipe!
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
