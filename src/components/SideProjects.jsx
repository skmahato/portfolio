import { sideProjects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionLabel } from './About';

export default function SideProjects({ isDark }) {
  const ref = useScrollReveal();

  return (
    <section id="experiments" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="fade-in-section mb-12">
          <SectionLabel isDark={isDark}>Experiments</SectionLabel>
          <h2
            className={`text-3xl sm:text-4xl font-bold ${
              isDark ? 'text-dark-50' : 'text-dark-900'
            }`}
          >
            Side projects & explorations
          </h2>
          <p
            className={`text-base mt-3 ${
              isDark ? 'text-dark-500' : 'text-dark-500'
            }`}
          >
            Smaller things I build to explore ideas, learn new tech, or solve
            problems I find interesting.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {sideProjects.map((project, i) => (
            <SideProjectCard
              key={project.title}
              project={project}
              isDark={isDark}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function SideProjectCard({ project, isDark, index }) {
  const ref = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className="fade-in-section"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div
        className={`rounded-xl border p-5 h-full flex flex-col transition-colors ${
          isDark
            ? 'border-dark-800 bg-dark-900/50 hover:border-dark-700'
            : 'border-dark-200 bg-white hover:border-dark-300'
        }`}
      >
        <div className="flex items-start gap-3 mb-3">
          <svg
            className={`w-5 h-5 mt-0.5 shrink-0 ${
              isDark ? 'text-accent-500' : 'text-accent-600'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
          <h3
            className={`font-semibold text-sm ${
              isDark ? 'text-dark-100' : 'text-dark-900'
            }`}
          >
            {project.title}
          </h3>
        </div>

        <p
          className={`text-sm leading-relaxed mb-4 flex-1 ${
            isDark ? 'text-dark-400' : 'text-dark-600'
          }`}
        >
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className={`text-xs px-2 py-0.5 rounded font-mono ${
                isDark
                  ? 'bg-dark-800 text-dark-500'
                  : 'bg-dark-100 text-dark-500'
              }`}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
