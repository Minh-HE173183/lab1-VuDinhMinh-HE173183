import { useState } from 'react'
import StudentProfileCard from './components/StudentProfileCard'
import './styles/darkmode.css'
import './styles/profile-card.css'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const appClassName = isDarkMode
    ? 'app-layout dark-mode'
    : 'app-layout light-mode'

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev)
  }

  return (
    <div className={appClassName}>
      <main className="app-page">
        <div className="app-page__controls">
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={handleToggleDarkMode}
          >
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
        <StudentProfileCard isDarkMode={isDarkMode} />
      </main>
    </div>
  )
}

export default App
