import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <nav> 
        {/* menu fixo, deve continuar na tela */}
        {/* logo */}
        <img src='Images/logo.png' alt='browser logo'/>
        {/* ancora */}
        <a href="#main-profile"> <button>Home</button></a>
        <a href="#about"> <button>About</button></a>
        <a href="#process"> <button>Process</button></a>
        <a href="#portifolio"> <button>Portifolio</button></a>
        <a href="#blog"> <button>Blog</button></a>
      </nav>

      <section id='main-profile'>
        <h1>Hello, I'm Matheus Leão.</h1>
        <h2>I'm a Software Quality enthusiast, with experience in e2e Testing, Unit, Integration, API, and Performance Testing.</h2>
      </section>
      <section id='about'>

      </section>

      <section id='process'>

      </section>
      <section id='portifolio'>

      </section>
      <section id='blog'>

      </section>

      <section id='session'>

      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
