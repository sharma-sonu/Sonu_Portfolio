import { motion } from "framer-motion"; // Import for animation effects
import { FaGithub } from "react-icons/fa"; // GitHub icon

// Main component for Projects section
const Projects = () => {
  // 🔹 Academic Projects data (IoT + Research)
  const academicProjects = [
    {
      title: "Water Level Prediction System",
      description:
        "An IoT-based project that estimates water level in storage tanks and predicts usage time.",
      github: "https://github.com/sharma-sonu/Estimating-water-level-in-storage-tank-and--predicting-usage-time",
      image: "/src/assets/images/EWSTPUT.jpg",
      certificate: "/src/assets/pdfs/904437_Certi.pdf",
      research: "/src/assets/pdfs/22988001.Estimating water level in storage tank.pdf",
      patent: "/src/assets/pdfs/22988001.Estimating water level in storage tank.pdf",
    },
    {
      title: "Heart Rate Monitoring System",
      description:
        "A minor IoT project using Arduino and pulse sensor for real-time heart rate detection.",
      github: "https://github.com/sharma-sonu/Heartbeat-Monitoring-system-using-Arduino",
      image: "/src/assets/images/HBMS.png",
      research: "/src/assets/pdfs/ProjectReport.pdf",
    },
  ];

  // 🔹 Personal Projects data (React + Java)
  const personalProjects = [
    {
      title: "Portfolio Website",
      description:
        "My personal responsive portfolio showcasing projects, certifications, and journey.",
      github: "https://github.com/sharma-sonu/Sonu_Portfolio",
      image: "/src/assets/images/portfolio.jpg",
    },
    {
      title: "Quiz Platform",
      description:
        "An interactive quiz web app with teacher-student interface and timer support.",
      github: "https://github.com/yourusername/quiz-platform",
      image: "/src/assets/images/quiz-platform.jpg",
    },
    {
      title: "ATM Machine",
      description:
        "A Java-based GUI application to generate and save customer receipts.",
      github: "https://github.com/sharma-sonu/ATM-Machine",
      image: "/src/assets/images/ATMMachine.jpeg",
    },
      {
      title: "Receipt Calculator",
      description:
        "Developed a receipt Calculator where it Calculate, Tax price, Deduction ",
      github: "https://github.com/sharma-sonu/Receipt_Calculator",
      image: "/src/assets/images/Calculator.jpeg",
    },
  ];

  // 🔹 Animation variants for smooth appearance using Framer Motion
  const cardVariants = {
    hidden: { opacity: 0, y: 40 }, // start state (invisible and moved down)
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }, // visible state
  };

  // 🔹 Reusable Card component — used for all project cards
  const Card = ({ title, description, image, github }) => (
    <motion.div
      variants={cardVariants} // Apply animation
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }} // Animate only once when visible
      className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
    >
      {/* Project Image */}
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-56 object-cover mb-4 border border-white/20"
      />

      {/* Title and Description */}
      <div>
        <h4 className="text-2xl font-bold text-yellow-300 mb-2">{title}</h4>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{description}</p>
      </div>

      {/* GitHub Button */}
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition w-full mt-auto"
      >
        <FaGithub /> View on GitHub
      </a>
    </motion.div>
  );

  // 🔹 Reusable PDF frame component for showing PDF files (like certificate, research, patent)
  const PdfFrame = ({ src, title }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
    >
      {/* Embedded PDF viewer inside a frame */}
      <iframe
        src={src}
        title={title}
        className="w-full h-64 rounded-xl border border-white/20 shadow-md"
      ></iframe>
    </motion.div>
  );

  // 🔹 Return JSX layout for Projects section
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Main Section Heading */}
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">My Projects</h2>

        {/* 🎓 Academic Projects Section */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-6">
          🎓 Academic Projects
        </h3>

        {/* Grid for Water Level Prediction System */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mb-16">
          {/* Project card */}
          <Card {...academicProjects[0]} />
          {/* Research paper PDF */}
          <PdfFrame src={academicProjects[0].research} title="Research Paper" />
          {/* Certificate PDF */}
          <PdfFrame src={academicProjects[0].certificate} title="Certificate" />
          {/* Patent PDF */}
          <PdfFrame src={academicProjects[0].patent} title="Patent" />
        </div>

        {/* Grid for Heart Rate Monitoring System */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mb-16 justify-center">
          <Card {...academicProjects[1]} />
          <PdfFrame src={academicProjects[1].research} title="Heart Rate Research Paper" />
        </div>

        {/* 💻 Personal Projects Section */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-6">
          💻 Personal Projects
        </h3>

        {/* Grid for personal projects */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {personalProjects.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

// Export component
export default Projects;
