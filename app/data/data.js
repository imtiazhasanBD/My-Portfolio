import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

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
  