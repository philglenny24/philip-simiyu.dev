export default function Services() {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-orange-500 text-center mb-4">Services</h2>
        <p className="text-gray-300 text-center text-lg mb-12">
          I design and deploy fullstack solutions that are modular, scalable, and built for real-world impact.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Backend Engineering */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-orange-500/30 transition">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">Backend Engineering</h3>
            <p className="text-gray-300 text-sm mb-4">
              APIs, pipelines, and secure systems using Python, Django, FastAPI, and Haystack. Built for reproducibility and scale.
            </p>
            <div className="bg-gray-700 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full w-[95%]"></div>
            </div>
          </div>

          {/* Frontend Development */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-orange-500/30 transition">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">Frontend Development</h3>
            <p className="text-gray-300 text-sm mb-4">
              React + Tailwind interfaces, dashboard flows, and polished UI/UX for outreach, analytics, and field use.
            </p>
            <div className="bg-gray-700 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full w-[88%]"></div>
            </div>
          </div>

          {/* Deployment & DevOps */}
          <div className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-orange-500/30 transition">
            <h3 className="text-xl font-semibold text-orange-400 mb-2">Deployment & DevOps</h3>
            <p className="text-gray-300 text-sm mb-4">
              Git workflows, CI/CD, reproducible environments, and repo structures optimized for collaboration and field deployment.
            </p>
            <div className="bg-gray-700 rounded-full h-2">
              <div className="bg-orange-500 h-2 rounded-full w-[90%]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}