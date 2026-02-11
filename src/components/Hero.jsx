import { personal } from '../data/portfolio';

export default function Hero({ isDark }) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        {/* Status badge */}
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 text-sm font-medium ${
          isDark ? 'border-dark-700 text-dark-400 bg-dark-900/50' : 'border-dark-200 text-dark-500 bg-dark-50'
        }`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
          </span>
          Open to opportunities
        </div>

        {/* Name */}
        <h1
          className={`text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 ${
            isDark ? 'text-dark-50' : 'text-dark-900'
          }`}
        >
          {personal.name}
        </h1>

        {/* Role & tagline */}
        <p className={`text-xl sm:text-2xl font-medium mb-4 ${
          isDark ? 'text-accent-400' : 'text-accent-600'
        }`}>
          {personal.role}
        </p>
        <p className={`text-lg sm:text-xl mb-4 max-w-2xl mx-auto ${
          isDark ? 'text-dark-400' : 'text-dark-500'
        }`}>
          {personal.tagline}
        </p>
        <p className={`text-base max-w-2xl mx-auto leading-relaxed mb-10 ${
          isDark ? 'text-dark-500' : 'text-dark-600'
        }`}>
          {personal.summary}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="px-6 py-3 rounded-lg bg-accent-500 text-dark-950 font-semibold text-sm hover:bg-accent-400 transition-colors"
          >
            Get in Touch
          </a>
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 rounded-lg border font-semibold text-sm transition-colors ${
              isDark
                ? 'border-dark-700 text-dark-300 hover:border-dark-500 hover:text-dark-100'
                : 'border-dark-300 text-dark-700 hover:border-dark-500 hover:text-dark-900'
            }`}
          >
            GitHub
          </a>
          <a
            href={personal.resumeUrl}
            className={`px-6 py-3 rounded-lg border font-semibold text-sm transition-colors ${
              isDark
                ? 'border-dark-700 text-dark-300 hover:border-dark-500 hover:text-dark-100'
                : 'border-dark-300 text-dark-700 hover:border-dark-500 hover:text-dark-900'
            }`}
          >
            Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-16 animate-bounce ${isDark ? 'text-dark-600' : 'text-dark-400'}`}>
          <svg className="w-6 h-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
