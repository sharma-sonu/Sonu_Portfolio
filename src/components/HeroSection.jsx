import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import profilePic from "../assets/images/profile.png"; // replace with your image

const HeroSection = () => {
  return (
    <section className="h-screen w-full bg-gradient-to-b from-[#0a0130] to-[#1e0b59] text-white flex items-center justify-center relative overflow-hidden">
      {/* Background stars */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 w-full">
        {/* Left Side - Text */}
        <div className="text-center md:text-left space-y-4">
          <h2 className="text-2xl text-gray-300">Hi There 👋</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-yellow-300">
            I'm Sonu Sharma
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold text-purple-400">
            Electronics Engineer • Web Developer
          </h3>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start mt-6 space-x-6">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-yellow-200 text-black rounded-full hover:bg-yellow-300 transition"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-500 rounded-full hover:bg-blue-600 transition"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-pink-500 rounded-full hover:bg-pink-600 transition"
            >
              <FaInstagram size={22} />
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="mt-10 md:mt-0">
          <img
            src={profilePic}
            alt="Sonu Sharma"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-purple-400 shadow-2xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
