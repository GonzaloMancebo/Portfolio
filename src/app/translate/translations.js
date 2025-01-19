"use client";

const translations = {
  es: {
    header: {
      title: "Hola, soy Gonzalo Mancebo",
      subtitle: "Desarrollador Web & Desarrollador de Apps Moviles",
      resume: "Descargar mi CV",
      linkedin: "LinkedIn",
      github: "GitHub",

      sections: {
        home: "Inicio",
        about: "Sobre mí",
        projects: "Proyectos",
        technologies: "Tecnologías",
        contact: "Contacto",
      },
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
      subtitle: "Web Software Developer & Mobile App Developer",
      resume: "Download my CV",
      linkedin: "LinkedIn",
      github: "GitHub",

      sections: {
        home: "Home",
        about: "About Me",
        projects: "Projects",
        technologies: "Technologies",
        contact: "Contact",
      },
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
