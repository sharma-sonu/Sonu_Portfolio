import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import JourneyTimeline from "./JourneyTimeline";
import Skills from "./Skills";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "journey", label: "Journey" },
    { id: "ranking", label: "Ranking" },
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    exit: { opacity: 0, y: -40, transition: { duration: 0.4 } },
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-8">
          About Section
        </h2>

        {/* --- Tabs --- */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-lg text-lg font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-yellow-400 text-black shadow-md"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* --- Tab Content --- */}
        <div className="max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {/* ABOUT TAB */}
            {activeTab === "about" && (
              <motion.div
                key="about"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-4"
              >
                <p className="text-lg text-gray-300">
                  I’m <span className="text-purple-400">Sonu Sharma</span>, an
                  Electronics and Communication Engineer passionate about{" "}
                  <span className="text-yellow-300">Web Development</span> and{" "}
                  <span className="text-yellow-300">IoT</span>.
                </p>
                <p className="text-gray-400">
                  I build projects like Quiz App, Portfolio Website, and Heart
                  Rate Monitoring System using Arduino and modern web tools.
                </p>
                <p className="text-purple-400 italic">
                  “Turning ideas into functional and elegant digital solutions.”
                </p>
              </motion.div>
            )}

            {/* SKILLS TAB */}
            {activeTab === "skills" && (
              <motion.div
                key="skills"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="rounded-xl bg-white/5 p-8 mt-6 shadow-inner"
              >
                <h3 className="text-3xl font-semibold text-yellow-300 mb-6">
                  My Skills
                </h3>
                <Skills embedded />
              </motion.div>
            )}

            {/* JOURNEY TAB */}
            {activeTab === "journey" && (
              <motion.div
                key="journey"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <h3 className="text-3xl font-semibold text-yellow-300 mb-4">
                  My Journey
                </h3>
                <JourneyTimeline />
              </motion.div>
            )}

            {/* RANKING TAB */}
            {activeTab === "ranking" && (
              <motion.div
                key="ranking"
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-6"
              >
                <h3 className="text-3xl font-semibold text-yellow-300 mb-4">
                  My Rankings & Achievements
                </h3>

                <div className="bg-purple-900/70 border border-purple-400 rounded-xl p-6 shadow-lg text-left space-y-3">
                  <p className="text-lg text-yellow-300 font-semibold">
                    🏆 Runner-Up - Circuit Designing Competition
                  </p>
                  <p className="text-gray-300">
                    Secured <span className="text-yellow-300">Runner-Up</span>{" "}
                    position in a college-level Circuit Design Challenge.
                  </p>

                  <p className="text-lg text-yellow-300 font-semibold mt-4">
                    🥇 Young India Turks (All India Rank 17238)
                  </p>
                  <p className="text-gray-300">
                    Achieved an impressive national rank showcasing innovation
                    and technical aptitude.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default About;
