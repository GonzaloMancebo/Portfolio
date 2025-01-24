// projectsData.js

import { faReact, faAndroid, faCss3Alt, faHtml5, faNodeJs, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const initialProjects = [
  {
    id: 1,
    name: "Order Now",
    credential: "User 1: user1 / Contraseña: User123 | Admin: Admin / Contraseña: admi123",
    description: `
    Order Now es una aplicación intuitiva y eficiente diseñada para facilitar el trabajo simultáneo entre diferentes tipos de usuarios.
    La plataforma cuenta con un administrador, encargado de supervisar y gestionar todas las operaciones, incluyendo la administración de órdenes, monitoreo de gastos y control general de la plataforma.
    También incluye el usuario, quien toma las órdenes y realiza las gestiones diarias en tiempo real.
  
    La aplicación está construida con React y Next.js, ofreciendo una interfaz de usuario ágil y dinámica.
    Además, utiliza Firestore tanto para almacenar credenciales de usuarios como para gestionar toda la información relacionada con pedidos, gastos y registros en la nube, garantizando una gestión eficiente de los datos.
  `,
    imageUrl: "/proyecto1_image.png",
    technologies: ["React", "Tailwind CSS", "Next.js", "Vercel",  "Firebase"],
    url: "https://order-now-sigma.vercel.app/",
    githubUrl: "https://github.com/GonzaloMancebo/OrderNow"
  },
  {
    id: 2,
    name: "Movie Searcher",
    description: "Una app para buscar películas usando la API de TMDB. Permite ver detalles de películas y añadirlas a una lista de favoritos.",
    imageUrl: "/proyecto2_image.png",
    technologies: ["React", "CSS", "TMDB API", "Node.js"],
    url: "https://movie-searcher.vercel.app/",
    githubUrl: "https://github.com/GonzaloMancebo/MovieSearcher"
  },
  {
    id: 3,
    name: "Task Manager",
    description: "Aplicación para gestionar tareas y proyectos, con capacidad de añadir, editar y eliminar tareas.",
    imageUrl: "/proyecto3_image.png",
    technologies: ["React", "MongoDB", "Node.js", "Express"],
    url: "https://task-manager.vercel.app/",
    githubUrl: "https://github.com/GonzaloMancebo/TaskManager"
  }
];

const technologies = [
  { id: 1, icon: faReact, color: 'text-cyan-600' },    
  { id: 2, icon: faAndroid, color: 'text-green-500' },  
  { id: 3, icon: faCss3Alt, color: 'text-blue-400' },   
  { id: 4, icon: faHtml5, color: 'text-orange-500' },   
  { id: 5, icon: faNodeJs, color: 'text-green-600' },  
  { id: 6, icon: faGithub, color: 'text-white-800' },    
  { id: 7, icon: faDatabase, color: 'text-purple-600' }   
];

export default initialProjects;
export { technologies };
