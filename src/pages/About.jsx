import profileImage from "../assets/profile.jpg";

export default function About() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-extrabold text-orange-500">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            I'm <span className="text-white font-semibold">Philip Simiyu</span>,
            a fullstack developer based in Kenya, building scalable tech for
            agriculture and sustainability. I specialize in{" "}
            <span className="text-orange-400">
              Python, Django, React, Tailwind CSS, Supabase
            </span>
            , and architect resilient systems that thrive in real-world
            conditions.
          </p>
          <p className="text-gray-400">
            My work blends backend precision with frontend clarity — from
            dynamic model loading and protocol negotiation to modular UI/UX and
            reproducible deployment. I troubleshoot edge-case integrations,
            optimize developer workflows, and design field-ready dashboards that
            empower users across roles.
          </p>

          {/* Tech Stack Badges */}
          <div className="flex flex-wrap gap-3 mt-6">
            {[
              "Python",
              "Django",
              "React",
              "Tailwind CSS",
              "Supabase",
              "Haystack",
              "Streamlit",
              "Git",
              "WSL",
              "REST APIs",
            ].map((tech) => (
              <span
                key={tech}
                className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right: Stats + Highlights */}
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">
              Tech Highlights
            </h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li> Dynamic backend pipelines with Haystack & FastAPI</li>
              <li> Reproducible environments using virtualenv & pip</li>
              <li> Modular React components with Tailwind styling</li>
              <li> Secure authentication & session hydration</li>
              <li> Git workflows optimized for field deployment</li>
              <li> Streamlit dashboards for real-time insights</li>
              <li> Outreach-ready repo structures for collaboration</li>
            </ul>
          </div>

          <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-orange-400 mb-4">
              Mission
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              I build tech that’s not just functional — it’s field-tested,
              community-driven, and future-proof. My goal is to make complex
              systems intuitive, accessible, and impactful for real-world users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
