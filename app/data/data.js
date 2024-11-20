import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaYoutube,FaSnapchatGhost, FaPinterest, FaWhatsapp 
} from "react-icons/fa";

export const BaseInfo = {
    name: "Imtiaz Hasan",
    position: "Frontend Web Developer",
    aboutTitle: "let’s <br/> Introduce about myself",
    aboutMe:
     "Hello! My name is Imtiaz Hasan, and I am a passionate front-end developer with expertise in modern web technologies including HTML, CSS, JavaScript, Tailwind CSS, React, Redux, Firebase, Next.js, and TypeScript. I am currently pursuing a Bachelor of Science in Computer Science and Engineering (BSc in CSE) at Bangladesh University. <br/> <br/> As I near the completion of my studies, I am actively seeking job opportunities to apply my skills, contribute to impactful projects, and grow as a professional. I am dedicated to crafting dynamic, responsive, and user-friendly web experiences. Let's build something amazing together!",
    profilePic: "/images/hero.png",
    aboutPic:  "/images/IMG_20221223_231127_993.JPG"
  }

  export const skills = [
    { name: "HTML", icon: <FaHtml5 />, color: "text-orange-500", percentage: 80},
    { name: "CSS", icon: <FaCss3Alt />, color: "text-blue-500", percentage: 70},
    { name: "JavaScript", icon: <FaJs />, color: "text-yellow-500", percentage: 80},
    { name: "React", icon: <FaReact />, color: "text-blue-400", percentage: 70},
    { name: "Next.js", icon: <SiNextdotjs />, color: "text-black", percentage: 65},
    { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-teal-500", percentage: 80},
    { name: "Git", icon: <FaGitAlt />, color: "text-red-500", percentage: 70},
    { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500", percentage: 50}
  ];
  
 export const socialMedia = [
    { name: "Facebook", icon: <FaFacebook />, color: "text-blue-600" },
    { name: "Twitter", icon: <FaTwitter />, color: "text-blue-400" },
    { name: "LinkedIn", icon: <FaLinkedin />, color: "text-blue-700" },
    { name: "GitHub", icon: <FaGithub />, color: "text-gray-800" },
    { name: "Pinterest", icon: <FaWhatsapp />, color: "text-green-600" }
  ];
  

  export const projectData = [
    {
      id: 1,
      name: "Electro-mart",
      description: "An eCommerce platform built with React and Redux Toolkit, featuring a modern UI styled with Tailwind CSS. It includes secure user authentication via Firebase, real-time order storage, and seamless payment integration using Stripe.",
      image: "/images/Electro-mart.jpg",
      url: {
        live: "",
        github: "https://github.com/imtiazhasanBD/Electro-mart"
      },
      tools: ["react", "redux", "tailwind", "firebase", "stripe"]
    },
    {
      id: 2,
      name: "Disney Clone",
      description: "A static Disney+ clone built with React and styled using Tailwind CSS, showcasing a responsive and visually appealing design. This project replicates the look and feel of the Disney+ platform, focusing on clean UI and layout structure.",
      image: "/images/disney _clone.jpg",
      url: {
        live: "",
        github: "https://github.com/imtiazhasanBD/disney-clone"
      },
      tools: ["react","tailwind"]
    },
    {
      id: 3,
      name: "Ecart-mart",
      description: "My first eCommerce website, built with raw HTML, CSS, and JavaScript. It was my first step into web development, where I transformed my learning into a tangible project, igniting my passion for creating user-friendly, functional designs.",
      image: "/images/Ecart-mart.jpg",
      url: {
        live: "https://imtiazhasanbd.github.io/MyEcommerce-cart/",
        github: "https://github.com/imtiazhasanBD/MyEcommerce-cart"
      },
      tools: ["html", "css", "javascript"]
    },
  ];
  