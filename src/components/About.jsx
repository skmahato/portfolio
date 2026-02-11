import { about } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About({ isDark }) {
  const ref = useScrollReveal();

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="fade-in-section max-w-4xl mx-auto">
        <SectionLabel isDark={isDark}>About</SectionLabel>
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-8 ${
            isDark ? 'text-dark-50' : 'text-dark-900'
          }`}
        >
          Engineer first. Product thinker always.
        </h2>

        <div className="space-y-5 mb-10">
          {about.paragraphs.map((p, i) => (
            <p
              key={i}
              className={`text-base leading-relaxed ${
                isDark ? 'text-dark-400' : 'text-dark-600'
              }`}
            >
              {p}
            </p>
          ))}
        </div>

        {/* Highlights */}
        <div
          className={`rounded-xl border p-6 ${
            isDark ? 'border-dark-800 bg-dark-900/50' : 'border-dark-200 bg-dark-50'
          }`}
        >
          <h3
            className={`text-sm font-semibold uppercase tracking-wider mb-4 ${
              isDark ? 'text-accent-500' : 'text-accent-600'
            }`}
          >
            What I bring to the table
          </h3>
          <ul className="space-y-3">
            {about.highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-0.5 text-emerald-500 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span
                  className={`text-sm ${
                    isDark ? 'text-dark-300' : 'text-dark-700'
                  }`}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ isDark, children }) {
  return (
    <p
      className={`text-sm font-mono font-medium uppercase tracking-widest mb-3 ${
        isDark ? 'text-accent-500' : 'text-accent-600'
      }`}
    >
      {children}
    </p>
  );
}
