import React from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  Server, 
  Code, 
  Database, 
  Network, 
  BrainCircuit, 
  LineChart, 
  Cloud, 
  Users,
  GitBranch,
  Container,
  Workflow,
  Lock,
  Layers,
  Settings
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
              alt="Cristian Valdés"
              className="w-48 h-48 rounded-full object-cover border-4 border-white shadow-lg"
            />
            <div>
              <h1 className="text-4xl font-bold mb-2">Cristian Mauricio Valdés Vivar</h1>
              <p className="text-xl mb-4">Ingeniero de Ejecución en Computación e Informática</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  San Felipe, Valparaíso, Chile
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  cristian.valdes.v@gmail.com
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  +56 9 82056419
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* About Me */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Sobre Mí</h2>
          <p className="text-lg text-gray-700">
            Profesional con más de 16 años de experiencia en tecnologías de la información, especializado en
            administración de plataformas educativas, desarrollo web y gestión de infraestructura TI.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Habilidades Técnicas</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: 'Administración de Sistemas',
                icon: <Server className="w-8 h-8 text-blue-600" />,
                description: 'Windows Server, Linux, Active Directory, AWS'
              },
              {
                name: 'Desarrollo Web',
                icon: <Code className="w-8 h-8 text-green-600" />,
                description: 'Node.js, Express, HTML, CSS, JavaScript, WordPress'
              },
              {
                name: 'Bases de Datos',
                icon: <Database className="w-8 h-8 text-purple-600" />,
                description: 'MySQL, PostgreSQL, SQL Server, PgAdmin, ORM'
              },
              {
                name: 'DevOps & CI/CD',
                icon: <Workflow className="w-8 h-8 text-orange-600" />,
                description: 'Jenkins, Docker, AWS, CI/CD Pipelines'
              },
              {
                name: 'Control de Versiones',
                icon: <GitBranch className="w-8 h-8 text-gray-700" />,
                description: 'Git, GitHub, Control de versiones distribuido'
              },
              {
                name: 'Metodologías Ágiles',
                icon: <Settings className="w-8 h-8 text-indigo-600" />,
                description: 'Scrum, Kanban, Gestión de proyectos ágiles'
              },
              {
                name: 'API & Seguridad',
                icon: <Lock className="w-8 h-8 text-red-600" />,
                description: 'REST API, JWT Authentication, API Security'
              },
              {
                name: 'Contenedores & Orquestación',
                icon: <Container className="w-8 h-8 text-cyan-600" />,
                description: 'Docker, Contenedores, Microservicios'
              },
              {
                name: 'Cloud & Plataformas',
                icon: <Cloud className="w-8 h-8 text-sky-600" />,
                description: 'AWS, Microsoft 365, G-Suite, Teams'
              },
              {
                name: 'Arquitectura de Software',
                icon: <Layers className="w-8 h-8 text-yellow-600" />,
                description: 'Microservicios, API REST, Patrones de diseño'
              },
              {
                name: 'Redes e Infraestructura',
                icon: <Network className="w-8 h-8 text-emerald-600" />,
                description: 'LAN/WAN, TCP/IP, Switching, Routing'
              },
              {
                name: 'Gestión de Usuarios',
                icon: <Users className="w-8 h-8 text-pink-600" />,
                description: 'Soporte técnico, Capacitación, Documentación'
              }
            ].map((skill) => (
              <div key={skill.name} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-3">
                  {skill.icon}
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Proyectos Destacados</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'Instituto Abdón Cifuentes',
                url: 'www.colegioiac.cl',
                description: 'Desarrollo completo y administración continua',
              },
              {
                title: 'Turtle House',
                url: 'www.turtlehouse.cl',
                description: 'Diseño e implementación (2012)',
              },
              {
                title: 'Portal Municipalidad de San Felipe',
                url: 'www.sanfelipedeaconcagua.cl',
                description: 'Rediseño y mantención (2007-2011)',
              },
            ].map((project) => (
              <div key={project.title} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {project.url}
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6">Formación Académica</h2>
          <div className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4">Cursos Recientes</h3>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>2024-2025: Bootcamp PCF Desarrollo Backend JavaScript (DesafíoLatam - CORFO)</li>
              <li>2024: Programa ONE (Oracle Next Education) - 6 cursos completados</li>
              <li>2023: Inteligencia Artificial para el trabajo (eclass Academy)</li>
              <li>2022: Power BI Básico (Universidad de Chile)</li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4">Educación Superior</h3>
            <p className="text-lg">
              Ingeniería de Ejecución en Computación e Informática
              <br />
              Universidad de Aconcagua (2005-2007)
            </p>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-3xl font-bold mb-6">Enlaces Profesionales</h2>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="mailto:cristian.valdes.v@gmail.com"
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Email
            </a>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p>✨ Portafolio desarrollado con React y Tailwind CSS - Diseño responsive y moderno</p>
          <p>🔄 Contenido actualizado: Julio 2024</p>
        </div>
      </footer>
    </div>
  );
}

export default App;