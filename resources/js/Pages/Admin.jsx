


export default function Admin() {
    return (
      <>
      
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="lg:mx-auto lg:w-full lg:max-w-sm">
            <img
              alt="Care.ly"
              src="./src/assets/Dark_left_logo.png"
              className="mx-auto h-20 rounded-lg w-auto"
            />
            <h2 className="mt-10 dark:text-sky-900 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
             Entre na sua conta de admin...
            </h2>
          </div>
  
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block dark:text-gray-400 text-sm/6 font-medium text-gray-900">
                  Digite seu email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="senha" className="block dark:text-gray-400 text-sm/6 font-medium text-gray-900">
                   Senha
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold dark:text-gray-400 text-indigo-600 hover:text-indigo-500">
                      Esqueceu a senha?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="senha"
                    name="senha"
                    type="senha"
                    required
                    autoComplete="current-senha"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Logue-se
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Não é admin?{' '}
              <a href="https://forms.gle/fBq5DidVhCL5jQV46" className="font-semibold color:#313A4B  hover:text-indigo-500">
               Solicite suas credenciais com nossa equipe!
              </a>
            </p>
          </div>
        </div>
      </>
    )
  }