"use client";

const translations = {
  es: {
    header: {
      title: "Hola, soy Gonzalo Mancebo",
      subtitle: "Desarrollador de Apps & Desarrollador Web",
      resume: "Ver mi resumen",
      linkedin: "LinkedIn",
      sections: {
        home: "Inicio",
        about: "Sobre mí",
        projects: "Proyectos",
        technologies: "Tecnologías",
        contact: "Contacto",
      },
    },
    aboutMe: {
      title: "Sobre mí",
      description1: "Hola, soy Gonzalo Mancebo. Me gradué como Técnico en Seguridad e Higiene, pero descubrí mi verdadera pasión en la programación. Por eso, decidí cambiar de rumbo y me gradué en App Developer y Web Developer en Coder House. Sin embargo, sentía que necesitaba algo más, así que también completé la carrera de Backend para enriquecer mis habilidades y darle más vida a mis aplicaciones.",
      description2: "Actualmente, estoy trabajando en proyectos personales para afianzar mis conocimientos y aprender de manera autodidacta todos los días. Estoy en busca de mi primera oportunidad profesional en el campo de la programación, con el objetivo de aplicar todo lo que he aprendido y seguir creciendo en este apasionante campo.",
    },
    projects: {
      noProjects: "No hay proyectos disponibles.",
      1: {
        name: "Ordenar Ahora",
        credential: "Usuario 1: user1 / Contraseña: User123 | Admin: Admin / Contraseña: admi123",
        description: `
          Ordenar Ahora es una aplicación intuitiva y eficiente diseñada para facilitar el trabajo simultáneo entre diferentes tipos de usuarios.
          La plataforma cuenta con un administrador, encargado de supervisar y gestionar todas las operaciones, incluyendo la administración de órdenes, monitoreo de gastos y control general de la plataforma.
          También incluye el usuario, quien toma las órdenes y realiza las gestiones diarias en tiempo real.

          La aplicación está construida con React y Next.js, ofreciendo una interfaz de usuario ágil y dinámica.
          Además, utiliza Firestore tanto para almacenar credenciales de usuarios como para gestionar toda la información relacionada con pedidos, gastos y registros en la nube, garantizando una gestión eficiente de los datos.
        `
      }
      // Otros proyectos se pueden agregar aquí
    },
    technologies: {
      title: "Tecnologías",
      description: "Formado como App Developer y Web Developer en Coder House, también completé estudios en Backend para fortalecer mis competencias técnicas.",
      intro: "A continuación, encontrarás las tecnologías que utilizo para crear aplicaciones robustas y efectivas:",
    },
    contact: {
      title: "¡Contáctame!",
      nameLabel: "Nombre",
      emailLabel: "Email",
      messageLabel: "Mensaje",
      placeholderName: "Ingresa tu nombre",
      placeholderEmail: "Ingresa tu email",
      placeholderMessage: "Escribe tu mensaje aquí",
      buttonSend: "Enviar",
      buttonSubmitting: "Enviando...",
      toastError: "Por favor, completa todos los campos antes de enviar.",
      toastSuccess: "Mensaje enviado correctamente.",
      toastErrorSending: "Error al enviar el mensaje. Inténtalo nuevamente más tarde.",
    },
    readMore: {
      readMore: "Leer más",
      readLess: "Leer menos",
    },
  },
  en: {
    header: {
      title: "Hello, I'm Gonzalo Mancebo",
      subtitle: "App Developer & Web Developer",
      resume: "View my resume",
      linkedin: "LinkedIn",
      sections: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        technologies: "Technologies",
        contact: "Contact",
      },
    },
    aboutMe: {
      title: "About Me",
      description1: "Hello, I am Gonzalo Mancebo. I graduated as a Technician in Safety and Hygiene, but I discovered my true passion in programming. That’s why I decided to change direction and graduated as an App Developer and Web Developer at Coder House. However, I felt I needed something more, so I also completed the Backend course to enrich my skills and bring more life to my applications.",
      description2: "Currently, I am working on personal projects to strengthen my knowledge and learn autodidactically every day. I am looking for my first professional opportunity in the programming field, aiming to apply everything I have learned and continue growing in this exciting field.",
    },
    projects: {
      noProjects: "No projects available.",
      1: {
        name: "Order Now",
        credential: "User 1: user1 / Password: User123 | Admin: Admin / Password: admi123",
        description: `
          Order Now is an intuitive and efficient application designed to facilitate simultaneous work among different types of users.
          The platform includes an administrator, responsible for supervising and managing all operations, including order management, expense monitoring, and overall control of the platform.
          It also includes the user, who takes orders and performs daily management in real time.

          The application is built with React and Next.js, offering a dynamic and agile user interface.
          Additionally, it uses Firestore to store user credentials and manage all information related to orders, expenses, and cloud records, ensuring efficient data management.
        `
      }
      // Other projects can be added here
    },
    technologies: {
      title: "Technologies",
      description: "Trained as an App Developer and Web Developer at Coder House, I also completed Backend studies to strengthen my technical skills.",
      intro: "Below are the technologies I use to create robust and effective applications:",
    },
    contact: {
      title: "Contact Me!",
      nameLabel: "Name",
      emailLabel: "Email",
      messageLabel: "Message",
      placeholderName: "Enter your name",
      placeholderEmail: "Enter your email",
      placeholderMessage: "Write your message here",
      buttonSend: "Send",
      buttonSubmitting: "Sending...",
      toastError: "Please fill in all fields before sending.",
      toastSuccess: "Message sent successfully.",
      toastErrorSending: "Error sending the message. Please try again later.",
    },
    readMore: {
      readMore: "Read more",
      readLess: "Read less",
    },
  },
};

export default translations;
