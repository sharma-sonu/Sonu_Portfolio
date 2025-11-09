const certifications = [
  { id: 1, image: "/src/assets/images/JavaFondationCertification.jpg" },
  { id: 2, image: "/src/assets/images/networking_internship.jpg" },
  { id: 3, image: "/src/assets/images/oasis.jpg" },
];

const certificates = [
  { id: 1, image: "/src/assets/images/C++.jpg" },
  { id: 2, image: "/src/assets/images/DBMS_1.jpg" },
  { id: 3, image: "/src/assets/images/DBMS_2.jpg" },
  { id: 4, image: "/src/assets/images/FrontenDEv.jpg" },
  { id: 5, image: "/src/assets/images/Cisco_Javascript.jpg" },
  { id: 6, image: "/src/assets/images/ReactBasics.jpg" },
  { id: 7, image: "/src/assets/images/AdvancedReact.jpg" },
  { id: 8, image: "/src/assets/images/VersionControl.jpg" },
  { id: 9, image: "/src/assets/images/CloudComputing.jpg" },
  { id: 10, image: "/src/assets/images/Cisco_networking.jpg" },
  { id: 11, image: "/src/assets/images/circuit.jpg" },
  { id: 12, image: "/src/assets/images/Essay_Writing.jpg" },
  { id: 13, image: "/src/assets/images/NCC.jpg" },
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
