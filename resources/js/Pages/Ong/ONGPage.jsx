import React from "react";

export default function ONGPage() {
  return (
    <div className="font-sans bg-[#f9fafb] dark:bg-[#212121] dark:text-white text-[#1b2a41]">
      {/* Hero */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Comece sua jornada com o <span className="text-blue-600">Care.ly</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
              Escolha o candidato ideal para a sua iniciativa.
            </p>

            {/* Buttons */}
            <div className="mt-7 grid gap-3 w-full sm:inline-flex">
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                href="#"
              >
                Cadastre-se
                <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </a>
              <a
                className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                href="#"
              >
                Fale com nossa equipe
              </a>
            </div>
            {/* End Buttons */}
          </div>

          <div className="relative ms-4">
            <img
              className="w-full rounded-md"
              src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&h=800&q=80"
              alt="Hero"
            />
            <div className="absolute inset-0 z-[-1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6 dark:from-neutral-800 dark:via-neutral-900/0 dark:to-neutral-900/0"></div>

            <div className="absolute bottom-0 start-0">
              <svg className="w-2/3 ms-auto h-auto text-white dark:text-neutral-900" width="630" height="451" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="531" y="352" width="99" height="99" fill="currentColor"/>
                <rect x="140" y="352" width="106" height="99" fill="currentColor"/>
                <rect x="482" y="402" width="64" height="49" fill="currentColor"/>
                <rect x="433" y="402" width="63" height="49" fill="currentColor"/>
                <rect x="384" y="352" width="49" height="50" fill="currentColor"/>
                <rect x="531" y="328" width="50" height="50" fill="currentColor"/>
                <rect x="99" y="303" width="49" height="58" fill="currentColor"/>
                <rect x="99" y="352" width="49" height="50" fill="currentColor"/>
                <rect x="99" y="392" width="49" height="59" fill="currentColor"/>
                <rect x="44" y="402" width="66" height="49" fill="currentColor"/>
                <rect x="234" y="402" width="62" height="49" fill="currentColor"/>
                <rect x="334" y="303" width="50" height="49" fill="currentColor"/>
                <rect x="581" width="49" height="49" fill="currentColor"/>
                <rect x="581" width="49" height="64" fill="currentColor"/>
                <rect x="482" y="123" width="49" height="49" fill="currentColor"/>
                <rect x="507" y="124" width="49" height="24" fill="currentColor"/>
                <rect x="531" y="49" width="99" height="99" fill="currentColor"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* End Hero */}

      {/* Mood Selector */}
      <section className="py-16 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Qual voluntario seria o ideal para o seu projeto?</h3>
        <div className="inline-flex items-center border rounded-full px-4 py-2 bg-white shadow">
          <span className="text-gray-500 mr-2">Um voluntario</span>
          <input
            type="text"
            placeholder="dedicado..."
            className="outline-none text-[#1b2a41] font-semibold"
          />
        </div>
      </section>

      {/* Porque o Care.ly */}
      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="lg:w-3/4">
            <h2 className="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-neutral-200">
              Encontre pessoas interessadas em fazer seu projeto ganhar vida
            </h2>
            <p className="mt-3 text-gray-800 dark:text-neutral-400">
              Encontre toda a sua comunidade em um só lugar, divulgue, compartilhe e aproveite toda a visibilidade que seu projeto vai receber.
            </p>
            <div className="mt-5">
              <a
                className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
                href="#"
              >
                Saiba mais
                <svg className="shrink-0 size-4 transition ease-in-out group-hover:translate-x-1 group-focus:translate-x-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </a>
            </div>
          </div>

          <div className="space-y-6 lg:space-y-10">
            {/* Icon Block */}
            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200  bg-white text-gray-800 shadow-2xs mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <svg className="shrink-0 size-5" viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
              </span>
              <div className="grow ">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">Sobre o Care.ly</h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  O Care.ly nasceu da vontade de facilitar o voluntariado. Com uma interface simples e intuitiva, nosso objetivo é aproximar quem quer ajudar de quem precisa de apoio.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <svg className="shrink-0 size-5" viewBox="0 0 24 24"><path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/></svg>
              </span>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">Analise diversos perfis</h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  O usuário cria um perfil e cabe a você aprová-lo ou não.
                </p>
              </div>
            </div>

            <div className="flex gap-x-5 sm:gap-x-8">
              <span className="shrink-0 inline-flex justify-center items-center size-11 rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs mx-auto dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <svg className="shrink-0 size-5" viewBox="0 0 24 24"><path d="M7 10v12"/><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z"/></svg>
              </span>
              <div className="grow">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-neutral-200">Divulgue o seu projeto</h3>
                <p className="mt-1 text-gray-600 dark:text-neutral-400">
                  Nós não usamos algoritmos para selecionar as iniciativas mais "relevantes", afinal acreditamos que todos os projetos merecem o mesmo tratamento em nosso site.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Porque o Care.ly */}
   



      {/* EXPERT TEAM */}
      <section className="py-20 px-6 dark:bg-[#212121] dark:text-white text-center bg-white">
        <h3 className="text-2xl font-semibold mb-10">Conheça alguns dos colaboradores que confiaram no projeto</h3>
        <div className="flex justify-center flex-wrap gap-4 max-w-4xl mx-auto">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="w-[100px] h-[100px] bg-gray-200 rounded-full" />
          ))}
        </div>
        </section>
       
      {/* TESTIMONIAL */}
      <section className="py-16 px-6 text-center dark:bg-[#212121] dark:text-white  bg-[#f1f5f9]">
        <p className="text-xl font-light max-w-3xl mx-auto italic">
        "A caridade é um exercício espiritual... Quem pratica o bem, coloca em movimento as forças da alma."
        — Chico Xavier
        </p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1b2a41] dark:bg-[##313A4B] dark:text-white  text-white text-center py-8">
        <p>© 2025 Care.ly - All rights reserved</p>
      </footer>
    </div>
  );
}
