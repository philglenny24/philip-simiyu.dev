export default function Skills() {
  const skills = [
    { name: "Python & Django", level: "95%" },
    { name: "React & Tailwind CSS", level: "90%" },
    { name: "Supabase & Streamlit", level: "85%" },
    { name: "Git & DevOps", level: "88%" },
    { name: "REST APIs & Integration", level: "92%" },
  ];

  const certificates = [
    {
      title: "Fullstack Development",
      file: "/certificates/fullstack.pdf",
    },
    {
      title: "AI Integration with Haystack",
      file: "/certificates/haystack-ai.pdf",
    },
    {
      title: "AgriTech Systems Design",
      file: "/certificates/agritech.pdf",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-orange-500 text-center mb-4">Skills & Certifications</h2>
        <p className="text-gray-300 text-center text-lg mb-12">
          My technical journey — from backend pipelines to frontend polish — backed by real-world certifications and open-source contributions.
        </p>

        {/* Skill Progress Bars */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-orange-400 mb-2">{skill.name}</h3>
              <div className="bg-gray-700 rounded-full h-2">
                <div
                  className="bg-orange-500 h-2 rounded-full"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Certificates */}
        <h3 className="text-2xl font-bold text-orange-400 mb-6">My Certifications</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-orange-500/30 transition">
              <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
              <div className="flex gap-4">
                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-600 text-white px-4 py-2 rounded text-sm hover:bg-orange-700 transition"
                >
                  View
                </a>
                <a
                  href={cert.file}
                  download
                  className="bg-gray-700 text-orange-400 px-4 py-2 rounded text-sm hover:bg-gray-600 transition"
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-orange-400 mb-4">Connect with Me</h3>
          <div className="flex justify-center space-x-6 text-xl text-gray-300">
            <a
              href="https://www.linkedin.com/philip-simiyu"
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/philglenny24"
              className="bg-orange-600 text-white px-4 py-2 rounded hover:bg-orange-400 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}