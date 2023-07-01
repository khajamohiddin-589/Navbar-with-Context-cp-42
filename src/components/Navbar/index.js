import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {toggleTheme, isDarkTheme} = value
      const onClickToggleButton = () => {
        toggleTheme()
      }
      const reqChanges = {
        darkThemeLogoUrl:
          'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png',
        darkThemeChangeLogoUrl:
          'https://assets.ccbp.in/frontend/react-js/light-theme-img.png',
      }
      const imageUrl = isDarkTheme
        ? reqChanges.darkThemeLogoUrl
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
      const containerClassName = isDarkTheme
        ? 'navbar-container kj'
        : 'navbar-container'
      const textClassName = isDarkTheme ? 'nav-text kj' : 'nav-text'
      const themeLogo = isDarkTheme
        ? reqChanges.darkThemeChangeLogoUrl
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
      return (
        <div className={containerClassName}>
          <img className="logos" src={imageUrl} alt="website logo" />
          <div className="home-about-container">
            <Link className="nav-link" to="/">
              <h1 className={textClassName}>Home</h1>
            </Link>
            <Link className="nav-link" to="/about">
              <h1 className={textClassName}>About</h1>
            </Link>
          </div>
          <button
            onClick={onClickToggleButton}
            type="button"
            className="toggle-button"
          >
            <img className="logos" src={themeLogo} alt="dark theme" />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
