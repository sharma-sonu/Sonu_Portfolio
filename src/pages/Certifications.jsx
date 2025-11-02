import { motion } from "framer-motion";

const certifications = [
  { id: 1, image: "/images/cisco1.png" },
  { id: 2, image: "/images/coursera1.png" },
  { id: 3, image: "/images/nptel.png" },
  { id: 4, image: "/images/freecodecamp.png" },
];

const certificates = [
  { id: 1, image: "/images/cert1.jpg" },
  { id: 2, image: "/images/cert2.jpg" },
  { id: 3, image: "/images/cert3.jpg" },
  { id: 4, image: "/images/cert4.jpg" },
  { id: 5, image: "/images/cert5.jpg" },
];

const Certifications = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">
          My Certifications
        </h2>

        {/* === 1️⃣ CERTIFICATION SECTION === */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-8">
          🎓 Certifications
        </h3>

        <div className="overflow-hidden relative w-full mb-20">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 40,
              ease: "linear",
            }}
          >
            {[...certifications, ...certifications].map((item, index) => (
              <div
                key={index}
                className="min-w-[220px] bg-white/10 rounded-xl border border-white/20 p-4 shadow-lg hover:shadow-yellow-400/30 transition"
              >
                <img
                  src={item.image}
                  alt={`Certification ${index + 1}`}
                  className="w-full h-40 object-contain rounded-lg bg-white/5"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* === 2️⃣ CERTIFICATE IMAGES SECTION === */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-8">
          🏆 Certificates
        </h3>

        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex gap-8"
            animate={{ x: ["-100%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 50,
              ease: "linear",
            }}
          >
            {[...certificates, ...certificates].map((cert, index) => (
              <div
                key={index}
                className="min-w-[260px] bg-white/10 rounded-2xl overflow-hidden border border-white/20 shadow-lg"
              >
                <img
                  src={cert.image}
                  alt={`Certificate ${index + 1}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
