import { motion } from "framer-motion";

const skills = [
  { name: "React.js", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Node.js & Express.js", level: 80 },
  { name: "MySQL", level: 75 },
  { name: "Java (OOPs)", level: 70 },
  { name: "Arduino & IoT", level: 80 },
  { name: "Networking & Cybersecurity", level: 85 },
];

const Skills = ({ embedded = false }) => {
  return (
    <section
      className={`${
        embedded
          ? "py-10 bg-transparent"
          : "py-20 bg-gradient-to-b from-[#2a155f] to-[#1e0b59]"
      } text-white`}
    >
      <div className="text-center mb-10">
        <p className="text-gray-300 text-lg">
          Technical expertise and tools I work with
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="mb-6"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex justify-between mb-2">
              <span className="font-medium text-yellow-300">{skill.name}</span>
              <span className="text-gray-300">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-3">
              <motion.div
                className="h-3 rounded-full bg-gradient-to-r from-yellow-400 to-purple-500"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1.2, ease: "easeOut" }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech Tags */}
      <div className="mt-12 text-center space-x-3">
        {["Frontend", "Backend", "Database", "IoT", "Networking"].map(
          (tag, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.1 }}
              className="inline-block bg-white/10 border border-purple-500 px-4 py-2 rounded-full text-sm text-yellow-300 font-medium"
            >
              {tag}
            </motion.span>
          )
        )}
      </div>
    </section>
  );
};

export default Skills;
