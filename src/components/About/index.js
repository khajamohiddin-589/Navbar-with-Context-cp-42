import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrlAbout = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
      const aboutClassName = isDarkTheme
        ? 'about-text kj-about-text'
        : 'about-text-kj'
      const aboutContainer = isDarkTheme
        ? 'nav-about-container kj-about-text'
        : 'nav-about-container'
      return (
        <div className={aboutContainer}>
          <Navbar />
          <div className="about-container">
            <img className="about-img" src={imgUrlAbout} alt="about" />
            <h1 className={aboutClassName}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
