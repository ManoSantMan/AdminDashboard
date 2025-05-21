import  { useState } from 'react';
import Home from './pages/Home.jsx';
import Conta from './pages/Conta.jsx';
import Admin from './pages/Admin.jsx';
import Termos from './pages/Termos.jsx';
import Ajuda from './pages/Ajuda.jsx';
import LoginONG from './pages/Ong/LoginIniciativa.tsx';
import Mensagens from './pages/Mensagens.jsx';
import ONGPage from './pages/Ong/ONGPage.jsx';
import Iniciativas from './pages/Iniciativa.jsx';
import LoginUser from './Pages/User/LoginVoluntario.jsx';


export default function MainContent({ activePage }) {
  const [isOpen, setIsOpen] = useState(true); // Estado para a sidebar de mensagens

  return (
    <div className="bg-white dark:bg-[#1a1a1a] border-2 rounded-md border-[rgba(0,0,0,0.08)] h-full p-6 shadow-sm flex-1 flex-col overflow-auto">
      {activePage === 'Home' && <Home />}
      {activePage === 'Temas' && <Temas />}
      {activePage === 'Admin' && <Admin />}
      {activePage === 'informações Pessoais' && <Conta />}
      {activePage === 'Termos de uso' && <Termos />}
      {activePage === 'Ajuda?' && <Ajuda />}
      {activePage === 'Saiba mais' && <ONGPage/>}
      {activePage === 'Entre na sua conta' && <LoginONG/>}
      {activePage === 'Iniciativas' && <Iniciativas/>}
      {activePage === 'LoginUser' && <LoginUser/>}
      {activePage === 'Mensagens' && (
        <Mensagens isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
}
