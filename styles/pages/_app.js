cat > pages/_app.js <<'EOF'
import '../styles/globals.css'
import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'

export default function MyApp({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const p = localStorage.getItem('theme')
    if (p === 'dark') setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  return (
    <>
      <Toaster />
      <Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
    </>
  )
}
EOF
