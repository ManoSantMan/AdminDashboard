import '../../css/index.css';
import '../bootstrap';
import { useState } from 'react';
import Sidebar from '../Sidebar';
import MainContent from '../MainContent';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});

export default function App() {
  const [isOpen, setIsOpen] = useState(true);          
  const [activePage, setActivePage] = useState('Home'); 
  return (
    <div className="flex h-screen">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} setActivePage={setActivePage} />
      <MainContent activePage={activePage} />
    </div>
  );
}
