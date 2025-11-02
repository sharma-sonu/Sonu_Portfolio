// src/components/JourneyTimeline.jsx
import { motion } from "framer-motion";
import { useState } from "react";

const JourneyTimeline = () => {
  const [activeSubTab, setActiveSubTab] = useState("education");

  const journeyData = {
    education: [
      {
        year: "2021 - 2025",
        title: "Bachelor of Technology (ECE)",
        place: "Oriental Institute of Science & Technology, Bhopal",
        desc: "Pursuing B.Tech in Electronics and Communication Engineering.",
      },
      {
        year: "2018 - 2020",
        title: "Intermediate (12th)",
        place: "M.K. College, Darbhanga",
        desc: "Secured 74% in PCM stream.",
      },
      {
        year: "2017 - 2018",
        title: "Matric (10th)",
        place: "M.K.J. High School, Darbhanga",
        desc: "Completed 10th with 79% marks.",
      },
    ],
    experience: [
      {
        year: "2024",
        title: "Virtual Internship",
        place: "Cisco Networking Academy",
        desc: "Completed virtual internships in Networking and Cybersecurity.",
      },
      {
        year: "2025",
        title: "NSS Coordinator",
        place: "National Service Scheme, OIST Bhopal",
        desc: "Organized community service and campus initiatives.",
      },
    ],
    technical: [
      {
        year: "2023 - 2025",
        title: "Tech Stack",
        place: "Frontend & Backend Development",
        desc: "React, Node.js, Express.js, MySQL, Java, Arduino projects.",
      },
      {
        year: "2024",
        title: "Certifications",
        place: "Cisco | Coursera | LinkedIn Learning",
        desc: "Completed multiple courses in Networking, Web Dev, and IoT.",
      },
    ],
    project: [
      {
        year: "2025",
        title: "Quiz Platform App",
        place: "MERN Stack Project",
        desc: "Developed live quiz app with authentication and dashboard.",
      },
      {
        year: "2024",
        title: "Receipt Calculator",
        place: "Java Swing Project",
        desc: "Built a calculator with billing and print functionality.",
      },
      {
        year: "2023",
        title: "Heart Rate Monitoring System",
        place: "Arduino Project",
        desc: "Designed IoT system for health monitoring.",
      },
    ],
  };

  return (
    <div className="mt-8">
      {/* Sub Tabs */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {[
          { id: "education", label: "Educational Journey" },
          { id: "experience", label: "Experience Journey" },
          { id: "technical", label: "Technical Journey" },
          { id: "project", label: "Project Journey" },
        ].map((tab) => (
          <motion.button
            key={tab.id}
            onClick={() => setActiveSubTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeSubTab === tab.id
                ? "bg-yellow-400 text-black"
                : "bg-white/10 text-white hover:bg-white/20"
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-yellow-400 to-purple-500 h-full rounded-full"></div>

        {journeyData[activeSubTab].map((item, index) => (
          <motion.div
            key={index}
            className={`mb-12 flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            } w-full`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="bg-purple-900/70 border border-purple-400 rounded-xl shadow-lg text-left w-[90%] md:w-[45%] p-6 relative">
              <h3 className="text-lg font-semibold text-yellow-300">
                {item.title}
              </h3>
              <h4 className="text-white font-medium mt-1">{item.place}</h4>
              <p className="text-gray-300 mt-2">{item.desc}</p>
              <span className="absolute text-sm text-gray-400 right-4 top-4">
                {item.year}
              </span>
              <div className="absolute top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-yellow-400 border-4 border-purple-900 left-[100%] md:left-auto md:right-[-13px] flex items-center justify-center">
                <span className="text-purple-900 font-bold">★</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default JourneyTimeline;
