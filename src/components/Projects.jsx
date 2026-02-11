import { projects } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionLabel } from './About';

function ProjectCard({ project, isDark, index }) {
  const ref = useScrollReveal(0.1);

  return (
    <div
      ref={ref}
      className="fade-in-section"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div
        className={`rounded-xl border overflow-hidden ${
          isDark ? 'border-dark-800 bg-dark-900/50' : 'border-dark-200 bg-white'
        }`}
      >
        {/* Screenshot placeholder */}
        <div
          className={`h-48 flex items-center justify-center border-b ${
            isDark
              ? 'bg-dark-800/50 border-dark-800'
              : 'bg-dark-100 border-dark-200'
          }`}
        >
          <div className="text-center">
            <svg
              className={`w-12 h-12 mx-auto mb-2 ${
                isDark ? 'text-dark-600' : 'text-dark-400'
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
              />
            </svg>
            <p
              className={`text-xs ${
                isDark ? 'text-dark-600' : 'text-dark-400'
              }`}
            >
              Screenshot placeholder
            </p>
          </div>
        </div>

        <div className="p-6">
          <h3
            className={`text-xl font-bold mb-1 ${
              isDark ? 'text-dark-50' : 'text-dark-900'
            }`}
          >
            {project.title}
          </h3>
          <p
            className={`text-sm mb-5 ${
              isDark ? 'text-dark-500' : 'text-dark-500'
            }`}
          >
            {project.subtitle}
          </p>

          {/* Problem */}
          <div className="mb-4">
            <h4
              className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                isDark ? 'text-rose-400' : 'text-rose-600'
              }`}
            >
              Problem
            </h4>
            <p
              className={`text-sm leading-relaxed ${
                isDark ? 'text-dark-400' : 'text-dark-600'
              }`}
            >
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-4">
            <h4
              className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                isDark ? 'text-accent-400' : 'text-accent-600'
              }`}
            >
              Solution
            </h4>
            <p
              className={`text-sm leading-relaxed ${
                isDark ? 'text-dark-400' : 'text-dark-600'
              }`}
            >
              {project.solution}
            </p>
          </div>

          {/* Impact */}
          <div className="mb-5">
            <h4
              className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                isDark ? 'text-emerald-400' : 'text-emerald-600'
              }`}
            >
              Impact
            </h4>
            <ul className="space-y-1.5">
              {project.impact.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500 mt-1 text-xs">&#9654;</span>
                  <span
                    className={`text-sm ${
                      isDark ? 'text-dark-400' : 'text-dark-600'
                    }`}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className={`text-xs px-2.5 py-1 rounded-md font-mono ${
                  isDark
                    ? 'bg-dark-800 text-dark-400 border border-dark-700'
                    : 'bg-dark-100 text-dark-600 border border-dark-200'
                }`}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ isDark }) {
  const ref = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="fade-in-section mb-12">
          <SectionLabel isDark={isDark}>Projects</SectionLabel>
          <h2
            className={`text-3xl sm:text-4xl font-bold ${
              isDark ? 'text-dark-50' : 'text-dark-900'
            }`}
          >
            Things I've built
          </h2>
          <p
            className={`text-base mt-3 ${
              isDark ? 'text-dark-500' : 'text-dark-500'
            }`}
          >
            Real products, real users, real complexity. Each one taught me something
            different about building software that lasts.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, i) => (
            <ProjectCard
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
