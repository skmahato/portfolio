import { skills } from '../data/portfolio';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { SectionLabel } from './About';

const levelColors = {
  Expert: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/20',
  Advanced: 'bg-accent-500/15 text-accent-400 border-accent-500/20',
  Proficient: 'bg-purple-500/15 text-purple-400 border-purple-500/20',
  Intermediate: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  Learning: 'bg-rose-500/15 text-rose-400 border-rose-500/20',
};

const levelColorsLight = {
  Expert: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  Advanced: 'bg-sky-50 text-sky-700 border-sky-200',
  Proficient: 'bg-purple-50 text-purple-700 border-purple-200',
  Intermediate: 'bg-amber-50 text-amber-700 border-amber-200',
  Learning: 'bg-rose-50 text-rose-700 border-rose-200',
};

export default function Skills({ isDark }) {
  const ref = useScrollReveal();

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="fade-in-section max-w-4xl mx-auto">
        <SectionLabel isDark={isDark}>Skills</SectionLabel>
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-12 ${
            isDark ? 'text-dark-50' : 'text-dark-900'
          }`}
        >
          Tools & technologies I work with
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {Object.entries(skills).map(([category, items]) => (
            <div
              key={category}
              className={`rounded-xl border p-6 ${
                isDark
                  ? 'border-dark-800 bg-dark-900/50'
                  : 'border-dark-200 bg-dark-50'
              }`}
            >
              <h3
                className={`text-sm font-semibold uppercase tracking-wider mb-5 ${
                  isDark ? 'text-dark-300' : 'text-dark-700'
                }`}
              >
                {category}
              </h3>
              <div className="space-y-3">
                {items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center justify-between"
                  >
                    <span
                      className={`text-sm ${
                        isDark ? 'text-dark-300' : 'text-dark-700'
                      }`}
                    >
                      {skill.name}
                    </span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border font-medium ${
                        isDark
                          ? levelColors[skill.level]
                          : levelColorsLight[skill.level]
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
