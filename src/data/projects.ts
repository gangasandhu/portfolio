// src/data/projects.ts

// src/types/Project.ts
export interface Project {
    name: string;
    title: string; // Unique identifier for routing
    image: string;
    description: string;
    liveDemo: string; // URL to the live demo
    repository: string; // URL to the GitHub repository
    technologies: string[];
    detailedDescription: string; // Extended description for the detail page
    features: string[]; // List of key features
    screenshots: string[]; // Array of screenshot URLs
    video?: string; // Optional video URL or embed link
  }
  
  
  export const projects: Project[] = [
    {
      name: "Devlink",
      title: "devlink",
      image: "https://github.com/gangasandhu/devlink/blob/main/showcase/Home.png?raw=true",
      description:
        "A comprehensive platform for developers, content creators, and tech enthusiasts. Features include blog management, online coding, and social networking capabilities.",
      liveDemo: "http://ec2-34-201-150-93.compute-1.amazonaws.com/", // Replace with your actual live demo URL
      repository: "https://github.com/gangasandhu/devlink", // Replace with your actual repository URL
      technologies: ["JavaScript", "React", "Node.js", "GitHub"],
      detailedDescription:
        "Devlink is designed to be a one-stop solution for developers and tech enthusiasts. It offers robust blog management tools, an integrated online code editor, and social networking features to foster community engagement. The platform is built with scalability and performance in mind, leveraging modern technologies to ensure a seamless user experience.",
      features: [
        "Blog management system with rich text editing",
        "Integrated online code editor with real-time collaboration",
        "Social networking features including user profiles and messaging",
        "Responsive and intuitive user interface",
      ],
      screenshots: [
        "https://github.com/gangasandhu/devlink/blob/main/showcase/Home.png?raw=true",
        // Add more screenshot URLs as needed
      ],
      video: "https://www.youtube.com/embed/APwXcWPrQFg?si=EwNRZ_jIJSf9lcoR",
    },
    {
      name: "SmartScript",
      title: "smartscript",
      image: "https://github.com/gangasandhu/smart-script/blob/main/showcase/compile.png?raw=true",
      description:
        "An AI-assisted code-learning platform with an integrated code editor, compiler, and AI assistant. Built to provide an interactive and engaging experience for coding enthusiasts.",
      liveDemo: "https://gangasandhu.github.io/smart-script/", // Replace with your actual live demo URL
      repository: "https://github.com/gangasandhu/smart-script", // Replace with your actual repository URL
      technologies: ["React", "JavaScript", "GitHub", "CI/CD"],
      detailedDescription:
        "SmartScript revolutionizes the way individuals learn to code by integrating AI assistance into the learning process. Users can write and compile code within the platform, receive real-time feedback from the AI assistant, and track their progress through personalized learning paths. The platform emphasizes interactivity and engagement, making coding education accessible and enjoyable.",
      features: [
        "AI-assisted real-time code feedback and suggestions",
        "Integrated code editor and compiler supporting multiple languages",
        "Personalized learning paths and progress tracking",
        "Seamless CI/CD pipeline for continuous integration and deployment",
      ],
      screenshots: [
        "https://github.com/gangasandhu/smart-script/blob/main/showcase/compile.png?raw=true",
        "https://github.com/gangasandhu/smart-script/blob/main/showcase/compile-light.png?raw=true",
        "https://github.com/gangasandhu/smart-script/blob/main/showcase/ai-chat.png?raw=true"
        // Add more screenshot URLs as needed
      ],
      video: "https://www.youtube.com/embed/ybYCRZT-MQ8?si=EDmWFWRLYvDyaVNW",
    },
    {
      name: "Chess Game",
      title: "chess-game",
      image: "https://github.com/gangasandhu/2650Project/blob/main/showcase/game.png?raw=true",
      description:
        "A real-time chess game application with user authentication, game history, and live gameplay. Leveraged Redis for caching and Socket.io for real-time functionality.",
      liveDemo: "https://chessgame-live-demo.com", // Replace with your actual live demo URL
      repository: "https://github.com/gangasandhu/2650Project", // Replace with your actual repository URL
      technologies: ["Node.js", "React", "JavaScript", "AWS"],
      detailedDescription:
        "Chess Game is a feature-rich application that allows users to engage in real-time chess matches with friends or AI opponents. It includes secure user authentication, detailed game history logs, and live gameplay capabilities. The backend is optimized with Redis caching for improved performance, and Socket.io facilitates seamless real-time interactions.",
      features: [
        "Real-time multiplayer chess matches",
        "Secure user authentication and profile management",
        "Comprehensive game history and statistics",
        "AI opponent integration for solo play",
        "Optimized backend with Redis caching",
        "Scalable deployment on AWS",
      ],
      screenshots: [
        "https://github.com/gangasandhu/2650Project/blob/main/showcase/home.png?raw=true",
        "https://github.com/gangasandhu/2650Project/blob/main/showcase/game.png?raw=true",
        "https://github.com/gangasandhu/2650Project/blob/main/showcase/game_history.png?raw=true",
        // Add more screenshot URLs as needed
      ],
      video: "https://www.youtube.com/embed/hp9say788Jw?si=4qGX6QodgGcXxHD7"
    },
  ];
  