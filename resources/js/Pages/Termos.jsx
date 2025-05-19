const Termos = () => {
    return (
      <div className="max-w-4xl mx-auto p-8 dark:bg-zinc-800 bg-white rounded-2xl space-y-8 shadow-lg">
        <h2 className="text-3xl font-extrabold dark:text-[#b0b0b0] text-[#313A4B]">Termos de Uso</h2>
        <p className="text-sm text-gray-500">Última atualização: 30/04/2025</p>
  
       <section className="space-y-4 dark:text-[#7A7A7A]">
          <h3 className="text-xl font-semibold  dark:text-[#b0b0b0]  text-[#313A4B]">1. Aceitação dos Termos</h3>
          <p>
            Ao utilizar os serviços e funcionalidades oferecidos pela nossa plataforma, 
            o usuário declara que leu, compreendeu e concorda com os presentes Termos de Uso 
            e com a nossa Política de Privacidade, comprometendo-se a agir sempre de acordo 
            com os princípios da boa-fé e da legalidade.
          </p>
        </section>
  
        <section className="space-y-4 dark:text-[#7A7A7A]">
          <h3 className="text-xl font-semibold  dark:text-[#b0b0b0]  text-[#313A4B]">2. Responsabilidade do Usuário</h3>
          <p>O uso da plataforma é de inteira responsabilidade do usuário. Ao acessar ou utilizar nossos serviços, o usuário compromete-se a:</p>
          <ul className="list-disc pl-6 space-y-2 dark:text-[#7a7a7a] text-gray-700">
            <li>Utilizar a plataforma de maneira ética, responsável e em conformidade com a legislação vigente;</li>
            <li>Fornecer apenas dados verídicos, exatos e atualizados;</li>
            <li>Não praticar atos ilícitos, fraudulentos ou que possam prejudicar terceiros, a empresa ou a integridade da plataforma;</li>
            <li>Manter a confidencialidade de suas credenciais de acesso.</li>
          </ul>
        </section>
  
       <section className="space-y-4 dark:text-[#7A7A7A]">
          <h3 className="text-xl font-semibold  dark:text-[#b0b0b0] text-[#313A4B]">3. Isenção de Responsabilidade</h3>
          <p>
            A plataforma atua como facilitadora de conexões, serviços ou informações e 
            não se responsabiliza por quaisquer ações realizadas pelos usuários, incluindo, mas não se limitando a:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-[#7a7a7a]">
            <li>Uso indevido, negligente ou doloso dos serviços disponibilizados;</li>
            <li>Informações falsas, imprecisas ou incompletas inseridas pelos usuários;</li>
            <li>Fraudes bancárias, golpes ou transações financeiras realizadas fora dos nossos canais oficiais;</li>
            <li>Danos, prejuízos ou perdas causados por conduta imprópria ou má-fé de terceiros.</li>
          </ul>
          <p>
            Contamos com a boa-fé dos usuários e reiteramos que cada pessoa é inteiramente responsável 
            por seus próprios atos e pelas consequências deles resultantes.
          </p>
        </section>
  
       <section className="space-y-4 dark:text-[#7A7A7A]">
          <h3 className="text-xl font-semibold  dark:text-[#b0b0b0] text-[#313A4B]">4. Proteção de Dados Pessoais (LGPD)</h3>
          <p>
            Comprometemo-nos a tratar os dados pessoais fornecidos de acordo com os princípios da LGPD. 
            Os dados serão utilizados apenas para as finalidades necessárias ao funcionamento da plataforma, 
            respeitando os direitos de privacidade, segurança e transparência.
          </p>
          <p>
            O usuário pode, a qualquer momento, solicitar a exclusão, correção ou acesso aos seus dados, 
            conforme garantido pela legislação vigente.
          </p>
        </section>
  
       <section className="space-y-4 dark:text-[#7A7A7A]">
          <h3 className="text-xl  dark:text-[#b0b0b0] font-semibold text-[#313A4B]">5. Alterações nos Termos</h3>
          <p>
            Reservamo-nos o direito de modificar estes Termos de Uso a qualquer momento. 
            As alterações entrarão em vigor a partir da data de sua publicação no site ou no aplicativo.
          </p>
          <p>
            Recomendamos que o usuário revise periodicamente este documento para se manter atualizado 
            sobre as condições vigentes.
          </p>
        </section>
  
       <section className="space-y-4 dark:text-[#7A7A7A]">
          <h3 className="text-xl  dark:text-[#b0b0b0] font-semibold text-[#313A4B]">6. Foro</h3>
          <p>
            Fica eleito o foro da comarca de [cidade/UF], com exclusão de qualquer outro, 
            por mais privilegiado que seja, para dirimir eventuais litígios oriundos deste instrumento.
          </p>
        </section>
      </div>
    );
  };
  
  export default Termos;
  