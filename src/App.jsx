import React from 'react'
import StudentProfileCard from './components/StudentProfileCard'
import './styles/darkmode.css'
import './styles/profile-card.css'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDarkMode: false,
    }
  }

  handleToggleDarkMode = () => {
    this.setState((prevState) => ({
      isDarkMode: !prevState.isDarkMode,
    }))
  }

  render() {
    const { isDarkMode } = this.state

    const appClassName = isDarkMode
      ? 'app-layout dark-mode'
      : 'app-layout light-mode'

    return (
      <div className={appClassName}>
        <main className="app-page">
          <div className="app-page__controls">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={this.handleToggleDarkMode}
            >
              {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
          </div>
          <StudentProfileCard isDarkMode={isDarkMode} />
        </main>
      </div>
    )
  }
}

export default App