import javaCert from "../assets/images/JavaFondationCertification.jpg";
import networkingCert from "../assets/images/networking_internship.jpg";
import oasisCert from "../assets/images/oasis.jpg";

import cppCert from "../assets/images/C++.jpg";
import dbms1 from "../assets/images/DBMS_1.jpg";
import dbms2 from "../assets/images/DBMS_2.jpg";
import frontendDev from "../assets/images/FrontenDEv.jpg";
import jsCert from "../assets/images/Cisco_Javascript.jpg";
import reactBasics from "../assets/images/ReactBasics.jpg";
import advancedReact from "../assets/images/AdvancedReact.jpg";
import versionControl from "../assets/images/VersionControl.jpg";
import cloudComputing from "../assets/images/CloudComputing.jpg";
import networking from "../assets/images/Cisco_networking.jpg";
import circuit from "../assets/images/circuit.jpg";
import essayWriting from "../assets/images/Essay_Writing.jpg";
import ncc from "../assets/images/NCC.jpg";

const certifications = [
  { id: 1, image: javaCert },
  { id: 2, image: networkingCert },
  { id: 3, image: oasisCert },
];

const certificates = [
  { id: 1, image: cppCert },
  { id: 2, image: dbms1 },
  { id: 3, image: dbms2 },
  { id: 4, image: frontendDev },
  { id: 5, image: jsCert },
  { id: 6, image: reactBasics },
  { id: 7, image: advancedReact },
  { id: 8, image: versionControl },
  { id: 9, image: cloudComputing },
  { id: 10, image: networking },
  { id: 11, image: circuit },
  { id: 12, image: essayWriting },
  { id: 13, image: ncc },
];

const Certifications = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1e0b59] to-[#2a155f] py-20 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-yellow-300 mb-12">
          My Certifications
        </h2>

        {/* === Certifications Section === */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-8">
          🎓 Certifications
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 mb-20">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 rounded-xl border border-white/20 p-4 shadow-lg hover:shadow-yellow-400/30 transition"
            >
              <img
                src={item.image}
                alt={`Certification ${item.id}`}
                className="w-full h-40 object-contain rounded-lg bg-white/5"
              />
            </div>
          ))}
        </div>

        {/* === Certificates Section === */}
        <h3 className="text-3xl font-semibold text-purple-300 mb-8">
          🏆 Certificates
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white/10 rounded-2xl overflow-hidden border border-white/20 shadow-lg"
            >
              <img
                src={cert.image}
                alt={`Certificate ${cert.id}`}
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
