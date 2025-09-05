cat > components/DarkModeToggle.js <<'EOF'
export default function DarkModeToggle({ darkMode, setDarkMode }) {
  // If used inside Header we pass props from parent; but _app sets dark globally via localStorage
  return (
    <button
      onClick={() => {
        const current = document.documentElement.classList.contains('dark')
        if (setDarkMode) setDarkMode(!current)
        else {
          if (current) {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
          } else {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
          }
        }
      }}
      className="px-3 py-1 rounded-full bg-yellowCTA text-black font-bold"
      aria-label="Toggle dark mode"
    >
      <span className="hidden sm:inline">Theme</span>
      <span className="ml-1">⚡</span>
    </button>
  )
}
EOF
