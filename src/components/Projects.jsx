import { motion } from "framer-motion";
import { FaGithub, FaDownload } from "react-icons/fa";

// ✅ Import images (keep these in src/assets)
import Estimating from "../assets/images/Estimating.jpg";
import Heart from "../assets/images/Heart.png";
import portfolioImg from "../assets/images/portfolio.png";
import calculator from "../assets/images/Calculator.jpeg";

// ✅ PDF paths (served from public folder)
const waterCert = "/pdfs/904437_Certi.pdf";
const waterResearch = "/pdfs/22988001.Estimating-water-level-in-storage-tank.pdf";
const waterPatent = "/pdfs/22988001.Estimating-water-level-in-storage-tank.pdf";
const heartResearch = "/pdfs/ProjectReport.pdf";

const Projects = () => {
  // 🔹 Academic Projects
  const academicProjects = [
    {
      title: "Water Level Prediction System",
      description:
        "An IoT-based project that estimates water level in storage tanks and predicts usage time.",
      github:
        "https://github.com/sharma-sonu/Estimating-water-level-in-storage-tank-and--predicting-usage-time",
      image: Estimating,
      certificate: waterCert,
      research: waterResearch,
      patent: waterPatent,
    },
    {
      title: "Heart Rate Monitoring System",
      description:
        "A minor IoT project using Arduino and a pulse sensor for real-time heart rate detection.",
      github:
        "https://github.com/sharma-sonu/Heartbeat-Monitoring-system-using-Arduino",
      image: Heart,
      research: heartResearch,
    },
  ];

  // 🔹 Personal Projects
  const personalProjects = [
    {
      title: "Portfolio Website",
      description:
        "A personal responsive portfolio showcasing projects, certifications, and journey.",
      github: "https://github.com/sharma-sonu/Sonu_Portfolio",
      image: portfolioImg,
    },
    {
      title: "Receipt Calculator",
      description:
        "Developed a receipt calculator that computes total, tax, and discount with receipt generation.",
      github: "https://github.com/sharma-sonu/Receipt_Calculator",
      image: calculator,
    },
  ];

  // 🔹 Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // 🔹 Project Card Component
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
        loading="lazy"
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
        src={`${src}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
        title={title}
        className="w-full h-64 md:h-72 rounded-xl border border-white/20 shadow-md mb-4"
      ></iframe>

      <a
        href={src}
        download
        className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-medium hover:bg-yellow-300 transition"
      >
        <FaDownload /> Download PDF
      </a>
    </motion.div>
  );

  // 🔹 Layout
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] py-20 text-white">
      <div className="container mx-auto px-4 md:px-10 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">My Projects</h2>

        {/* 🎓 Academic Projects Section */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-6">
          🎓 Academic Projects
        </h3>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
          <Card {...academicProjects[0]} />
          <PdfFrame src={academicProjects[0].research} title="Research Paper" />
          <PdfFrame src={academicProjects[0].certificate} title="Certificate" />
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mb-16">
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

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {personalProjects.map((p, i) => (
            <Card key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
