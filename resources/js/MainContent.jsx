import  { useState } from 'react';
import Home from '../js/Pages/Home';
import Conta from './Pages/Conta.jsx';
import Admin from './pages/Admin.jsx';
import Termos from './pages/Termos.jsx';
import Ajuda from './Pages/Ajuda.jsx';
import LoginForm from './pages/Ong/LoginIniciativa.tsx';
import Login2 from './pages/User/LoginVoluntario.jsx';
import Mensagens from './pages/Mensagens.jsx';
import ONGPage from './pages/Ong/ONGPage.jsx';
import Iniciativas from './pages/Iniciativa.jsx';




export default function MainContent({ activePage }) {
  const [isOpen, setIsOpen] = useState(true); // Estado para a sidebar de mensagens

  return (
    <div className="bg-white dark:bg-[#1a1a1a] border-2 rounded-md border-[rgba(0,0,0,0.08)] h-full p-6 shadow-sm flex-1 flex-col overflow-auto">
      {activePage === 'Home' && <Home />}
      {activePage === 'Admin' && <Admin />}
      {activePage === 'informações Pessoais' && <Conta />}
      {activePage === 'Termos de uso' && <Termos />}
      {activePage === 'Ajuda?' && <Ajuda />}
      {activePage === 'Sou um voluntário' && <Login2 />}
      {activePage === 'Saiba mais' && <ONGPage/>}
      {activePage === 'Entre na sua conta' && <LoginForm/>}
      {activePage === 'Iniciativas' && <Iniciativas/>}
      {activePage === 'Mensagens' && (
        <Mensagens isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
    </div>
  );
}
