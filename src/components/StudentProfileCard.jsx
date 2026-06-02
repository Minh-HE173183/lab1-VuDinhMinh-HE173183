import React from 'react'
import studentProfile from '../data/studentProfile'

class StudentProfileCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOnline: studentProfile.isOnline,
      likes: studentProfile.totalLikes,
    }
  }

  handleToggleStatus = () => {
    this.setState((prevState) => ({
      isOnline: !prevState.isOnline,
    }))
  }

  handleLike = () => {
    this.setState((prevState) => ({
      likes: prevState.likes + 1,
    }))
  }

  render() {
    const { isDarkMode = false } = this.props
    const { isOnline, likes } = this.state
    const { avatar, fullName, studentId, className, major, hobbies } =
      studentProfile

    const cardClassName = isDarkMode
      ? 'profile-card profile-card--dark'
      : 'profile-card profile-card--light'

    const hobbyList = hobbies.map((hobby, index) => (
      <li key={`${hobby}-${index}`}>
        <span className="profile-card__hobby-tag">{hobby}</span>
      </li>
    ))

    return (
      <article className={cardClassName}>
        <div className="profile-card__inner">
          <header className="profile-card__header profile-card__border">
            <div className="profile-card__avatar-wrap">
              <img
                className="profile-card__avatar"
                src={avatar}
                alt={`Avatar of ${fullName}`}
              />
              {isOnline ? (
                <span className="profile-card__status-badge profile-card__status-badge--online">
                  Online
                </span>
              ) : (
                <span className="profile-card__status-badge profile-card__status-badge--offline">
                  Offline
                </span>
              )}
            </div>
            <div>
              <h1 className="profile-card__title">{fullName}</h1>
              <h2 className="profile-card__subtitle">Student Profile Card</h2>
              <p className="profile-card__meta">
                <strong>Student ID:</strong> {studentId}
              </p>
            </div>
          </header>

          <section className="profile-card__section">
            <h3 className="profile-card__section-title">Information</h3>
            <p className="profile-card__muted">
              {fullName} ({studentId}) — class {className}, major {major}.
            </p>
            <ul className="profile-card__info-list">
              <li>
                <strong>Class:</strong> {className}
              </li>
              <li>
                <strong>Major:</strong> {major}
              </li>
            </ul>
          </section>

          <section className="profile-card__section">
            <h3 className="profile-card__section-title">Hobbies</h3>
            <ul className="profile-card__hobbies-list">{hobbyList}</ul>
          </section>

          <section className="profile-card__section">
            <h3 className="profile-card__section-title">
              Current Student Status
            </h3>
            {isOnline ? (
              <div
                className="profile-card__status-box profile-card__status-box--online"
                role="status"
              >
                <strong>Online</strong> — Student is available now.
              </div>
            ) : (
              <div
                className="profile-card__status-box profile-card__status-box--offline"
                role="status"
              >
                <strong>Offline</strong> — Student is not available now.
              </div>
            )}
            <button
              type="button"
              className="profile-card__btn profile-card__btn--status"
              onClick={this.handleToggleStatus}
            >
              {isOnline ? 'Offline' : 'Online'}
            </button>
          </section>

          <section className="profile-card__like-counter profile-card__like-box">
            <p className="profile-card__like-label">Like Counter</p>
            <p className="profile-card__like-count">{likes}</p>
            <button
              type="button"
              className="profile-card__btn profile-card__btn--like"
              onClick={this.handleLike}
            >
              Like (+1)
            </button>
          </section>
        </div>
      </article>
    )
  }
}

export default StudentProfileCard