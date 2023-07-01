import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const imgUrlHome = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'
      const homeClassName = isDarkTheme
        ? 'home-text kj-home-text'
        : 'home-text-kj'
      const homeContainer = isDarkTheme
        ? 'nav-home-container kj-home-text'
        : 'nav-home-container'
      return (
        <div className={homeContainer}>
          <Navbar />
          <div className="home-container">
            <img className="home-img" src={imgUrlHome} alt="home" />
            <h1 className={homeClassName}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
