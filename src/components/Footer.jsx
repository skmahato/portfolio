export default function Footer({ isDark }) {
  return (
    <footer
      className={`py-8 px-6 border-t ${
        isDark ? 'border-dark-800' : 'border-dark-200'
      }`}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p
          className={`text-sm ${isDark ? 'text-dark-600' : 'text-dark-400'}`}
        >
          Built with React & Tailwind CSS
        </p>
        <p
          className={`text-sm font-mono ${
            isDark ? 'text-dark-700' : 'text-dark-300'
          }`}
        >
          &copy; {new Date().getFullYear()} Sourav Kumar Mahato
        </p>
      </div>
    </footer>
  );
}
