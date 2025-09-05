export default function Projects() {
  const projects = [
    {
      title: "FarmBotika",
      status: "Ongoing",
      description:
        "An AI-powered agricultural assistant built with Haystack, Streamlit, and Python. Designed for field deployment and local impact.",
      link: "https://github.com/philip-simiyu/farmbotika",
      support: "https://buymeacoffee.com/philipdev",
      contact: "mailto:philip.simiyu.dev@gmail.com",
    },
    {
      title: "ISP Billing System",
      status: "Ongoing",
      description:
        "A modern hotspot billing sytsem for ISPs, built with Django, React, and Tailwind. Features user management, payment integration, and analytics.",
      link: "https://philipdev.vercel.app",
      support: "https://ko-fi.com/philipdev",
      contact: "mailto:philip.simiyu.dev@gmail.com",
    },
    {
      title: "AgriData Dashboard",
      status: "Ongoing",
      description:
        "A real-time dashboard for visualizing crop data, soil metrics, and AI predictions. Built with Supabase, React, and Streamlit.",
      link: "https://github.com/philip-simiyu/agridata-dashboard",
      support: "https://patreon.com/philipdev",
      contact: "mailto:philip.simiyu.dev@gmail.com",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-orange-500 text-center mb-4">Projects</h2>
        <p className="text-gray-300 text-center text-lg mb-12">
          Explore what I’ve built and what I’m building — each project is designed for real-world impact, with ways to support and connect.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-orange-500/30 transition">
              <h3 className="text-xl font-semibold text-orange-400 mb-2">{project.title}</h3>
              <span className="text-sm text-gray-400 italic mb-2 block">{project.status}</span>
              <p className="text-gray-300 text-sm mb-4">{project.description}</p>
              <div className="space-y-2">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-orange-600 hover:bg-orange-700 text-white text-sm font-medium py-2 px-4 rounded text-center"
                >
                  View Project
                </a>
                <a
                  href={project.support}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-gray-700 hover:bg-gray-600 text-orange-400 text-sm font-medium py-2 px-4 rounded text-center"
                >
                  Support This Project
                </a>
                <a
                  href={project.contact}
                  className="block bg-gray-900 hover:bg-gray-700 text-gray-300 text-sm font-medium py-2 px-4 rounded text-center"
                >
                  Contact Me
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}