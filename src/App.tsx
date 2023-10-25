import './App.scss'
import { Arrow } from './components/Arrow'
import Logo from './components/logo'

function App() {
  return (
    <main>
      <header className='header-container'>
        <Logo />
        <nav className="menu-options">
          <a href="">What we offer</a>
          <a href="">How it works</a>
          <a href="">Portifolio</a>
        </nav>
        <button>
          <div className="btn-face-white">
          Contact us
          <Arrow />
          </div>
          <div className="btn-face-purple">
          Contact us
          <Arrow />
          </div>
          
        </button>
      </header>
      <div className="content-container">
          <h1>
          Lets grow your your social presence
          </h1>
          <div className="bubble target">
            🎯
          </div>
          <div className="bubble shop">
            🛍️
          </div>
          <div className="bubble rocket">
            🚀
          </div>
          <div className="bubble fire">
            🔥
          </div>
      </div>
    </main>
  )
}

export default App
