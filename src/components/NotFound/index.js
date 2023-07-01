import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const background = isDarkTheme
        ? 'nav-home-container-not kj-not-found'
        : 'nav-home-container-not'
      return (
        <div className={background}>
          <Navbar />
          <div className="home-container-not">
            <img
              className="home-img-not"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className="home-text-not">Lost your Way</h1>
            <p className="home-para-not">
              We can not seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
