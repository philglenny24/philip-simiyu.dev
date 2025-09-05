export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10 px-6 md:px-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left: Signature */}
        <div className="text-center md:text-left">
          <h4 className="text-lg font-semibold text-white">Philip Simiyu</h4>
          <p className="text-sm text-gray-400">
            Building scalable tech for real-world impact.
          </p>
        </div>

        {/* Center: Social Links */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://www.linkedin.com/in/philip-simiyu"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/philglenny24"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            GitHub
          </a>
        </div>

        {/* Right: Copyright */}
        <div className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Philip.Dev</p>
        </div>
      </div>
    </footer>
  );
}