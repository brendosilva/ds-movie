import { ReactComponent as GithubIcon} from "assets/img/github.svg";
import "./styles.css";
function NavBar() {
  return (
    <header>
      <nav className="container">
        <div className="ds-movie-nav-content">
          <h1>DS-movie</h1>
          <a href="https://github.com/brendosilva">
            <div className="ds-movie-contact-container">
              <GithubIcon />
              <p className="ds-movie-contact-link">/brendosilva</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  )
}

export default NavBar;