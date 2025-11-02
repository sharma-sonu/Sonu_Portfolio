import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const academicProjects = [
    {
      title: "Heart Rate Monitoring System",
      description:
        "A minor IoT project using Arduino and pulse sensor for real-time heart rate detection.",
      github: "https://github.com/yourusername/heart-rate-monitor",
    },
    {
      title: "Water Level Prediction System",
      description:
        "An IoT-based project that estimates water level in storage tanks and predicts usage time.",
      github: "https://github.com/yourusername/water-level-system",
    },
  ];

  const personalProjects = [
    {
      title: "Portfolio Website",
      description:
        "My personal responsive portfolio showcasing projects, certifications, and journey.",
      github: "https://github.com/yourusername/portfolio",
    },
    {
      title: "Quiz Platform",
      description:
        "An interactive quiz web app with teacher-student interface and timer support.",
      github: "https://github.com/yourusername/quiz-platform",
    },
    {
      title: "Receipt Calculator",
      description:
        "A Java-based GUI application to generate and save customer receipts.",
      github: "https://github.com/yourusername/receipt-calculator",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">My Projects</h2>

        {/* Academic Projects */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-6">
          🎓 Academic Projects
        </h3>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {academicProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/40 transition"
            >
              <h4 className="text-2xl font-bold text-yellow-300 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition"
              >
                <FaGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>

        {/* Personal Projects */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-6">
          💻 Personal Projects
        </h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {personalProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-yellow-400/40 transition"
            >
              <h4 className="text-2xl font-bold text-yellow-300 mb-2">
                {project.title}
              </h4>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition"
              >
                <FaGithub /> View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
