import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import resumePDF from "/pdfs/Resume_IT.pdf";

const Resume = () => {
  // Framer Motion animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] flex flex-col items-center justify-center text-white px-4 py-20">
      {/* Title */}
      <motion.h2
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="text-4xl font-bold text-yellow-300 mb-10 text-center"
      >
        My Resume
      </motion.h2>

      {/* Resume PDF Viewer */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition"
      >
        <iframe
          src={`${resumePDF}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
          title="Sonu Sharma Resume"
          className="w-full h-[80vh] rounded-xl border border-white/20 shadow-md"
        ></iframe>
      </motion.div>

      {/* Download Button */}
      <motion.a
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        href={resumePDF}
        download="Sonu_Sharma_Resume.pdf"
        className="mt-8 inline-flex items-center justify-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg"
      >
        <FaDownload /> Download Resume
      </motion.a>
    </section>
  );
};

export default Resume;
