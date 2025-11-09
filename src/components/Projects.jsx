import { motion } from "framer-motion"; // For animations
import { FaGithub } from "react-icons/fa"; // GitHub icon

const Projects = () => {
  // 🎓 Academic Projects (IoT + Research)
  const academicProjects = [
    {
      title: "Water Level Prediction System",
      description:
        "An IoT-based project that estimates water level in storage tanks and predicts usage time.",
      github:
        "https://github.com/sharma-sonu/Estimating-water-level-in-storage-tank-and--predicting-usage-time",
      image: "/images/EWSTPUT.jpg",
      certificate: "/pdfs/904437_Certi.pdf",
      research: "/pdfs/22988001.Estimating water level in storage tank.pdf",
      patent: "/pdfs/22988001.Estimating water level in storage tank.pdf",
    },
    {
      title: "Heart Rate Monitoring System",
      description:
        "A minor IoT project using Arduino and pulse sensor for real-time heart rate detection.",
      github:
        "https://github.com/sharma-sonu/Heartbeat-Monitoring-system-using-Arduino",
      image: "/images/HBMS.png",
      research: "/pdfs/ProjectReport.pdf",
    },
  ];

  // 💻 Personal Projects (React + Java)
  const personalProjects = [
    {
      title: "Portfolio Website",
      description:
        "My personal responsive portfolio showcasing projects, certifications, and journey.",
      github: "https://github.com/sharma-sonu/Sonu_Portfolio",
      image: "/images/portfolio.jpg",
    },
    {
      title: "Quiz Platform",
      description:
        "An interactive quiz web app with teacher-student interface and timer support.",
      github: "https://github.com/yourusername/quiz-platform",
      image: "/images/quiz-platform.jpg",
    },
    {
      title: "ATM Machine",
      description:
        "A Java-based GUI application to generate and save customer receipts.",
      github: "https://github.com/sharma-sonu/ATM-Machine",
      image: "/images/ATMMachine.jpeg",
    },
    {
      title: "Receipt Calculator",
      description:
        "Developed a receipt calculator that computes total, tax, discount, and final amount with receipt generation.",
      github: "https://github.com/sharma-sonu/Receipt_Calculator",
      image: "/images/Calculator.jpeg",
    },
  ];

  // ✨ Framer Motion Animation Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // 🔹 Card Component
  const Card = ({ title, description, image, github }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
    >
      <img
        src={image}
        alt={title}
        className="rounded-xl w-full h-56 object-cover mb-4 border border-white/20"
      />
      <div>
        <h4 className="text-2xl font-bold text-yellow-300 mb-2">{title}</h4>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">
          {description}
        </p>
      </div>
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

  // 🔹 PDF Frame Component
  const PdfFrame = ({ src, title }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white/10 backdrop-blur-md rounded-2xl p-5 shadow-lg hover:shadow-yellow-400/40 transition flex flex-col justify-between"
    >
      <iframe
        src={src}
        title={title}
        className="w-full h-64 rounded-xl border border-white/20 shadow-md"
      ></iframe>
    </motion.div>
  );

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">
          My Projects
        </h2>

        {/* 🎓 Academic Projects Section */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-6">
          🎓 Academic Projects
        </h3>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mb-16">
          {/* Water Level Project + PDFs */}
          <Card {...academicProjects[0]} />
          <PdfFrame
            src={academicProjects[0].research}
            title="Research Paper"
          />
          <PdfFrame
            src={academicProjects[0].certificate}
            title="Certificate"
          />
          <PdfFrame src={academicProjects[0].patent} title="Patent" />
        </div>

        {/* Heart Rate Monitoring System */}
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 mb-16 justify-center">
          <Card {...academicProjects[1]} />
          <PdfFrame
            src={academicProjects[1].research}
            title="Heart Rate Research Paper"
          />
        </div>

        {/* 💻 Personal Projects Section */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-6">
          💻 Personal Projects
        </h3>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8">
          {personalProjects.map((project, i) => (
            <Card key={i} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
