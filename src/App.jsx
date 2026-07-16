import { useState } from 'react';
import Inicio from './components/Inicio';
import Licencias from './components/Licencias';
import Instalacion from './components/Instalacion';
import Permisos from './components/Permisos';
import Paquetes from './components/Paquetes';
import Nginx from './components/Nginx';
import Prompts from './components/Prompts';

const sections = [
  { id: 'inicio', label: 'Inicio', component: Inicio },
  { id: 'licencias', label: 'Licencias', component: Licencias },
  { id: 'instalacion', label: 'Instalación', component: Instalacion },
  { id: 'permisos', label: 'Permisos', component: Permisos },
  { id: 'paquetes', label: 'Paquetes', component: Paquetes },
  { id: 'nginx', label: 'Nginx', component: Nginx },
  { id: 'prompts', label: 'Bitácora IA', component: Prompts },
];

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const ActiveComponent = sections.find((section) => section.id === activeSection)?.component || Inicio;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>Wiki Linux Server</h1>
        <p>Documentación de evaluación</p>
        <nav>
          {sections.map((section) => (
            <button
              key={section.id}
              className={activeSection === section.id ? 'nav-button active' : 'nav-button'}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </button>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <header className="topbar">
          <h2>{sections.find((section) => section.id === activeSection)?.label}</h2>
        </header>
        <ActiveComponent />
      </main>
    </div>
  );
}

export default App;
