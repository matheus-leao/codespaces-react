import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <nav id='nav'> 
        {/* menu fixo, deve continuar na tela */}
        {/* logo */}
        <div id='nav-logo'>
          <img src='./Images/logo.png' alt='browser logo'/>
        </div>
        
        {/* ancora */}
        <div id='nav-menus'>
          <a href="#main-profile"> <button>Home</button></a>
          <a href="#about"> <button>About</button></a>
          <a href="#process"> <button>Process</button></a>
          <a href="#portifolio"> <button>Portifolio</button></a>
          <a href="#blog"> <button className='pink-button' >Blog</button></a>
        </div>
        
      </nav>

      <section id='main-profile'>
        <div id='main-profile-text'>
          <h1>Hello, I'm Matheus Leão.</h1>
          <h2>I'm a Software Quality enthusiast, with experience in e2e Testing, Unit, Integration, API, and Performance Testing.</h2>
          <button className='pink-button'> Say Hello </button>
          {/* <div id='stats'>
            5Y.
            experience
          </div> */}
        </div>
        <div id='profile-image'>
        <img src='./Images/profile-image.png' alt='browser logo'/>
        </div>

      </section>
      <section id='about'>
        <img src='./Images/profile-image.png' alt='browser logo'/>
        <h1> I'm a Quality Assurance Enginer </h1>
        <h2> I design and create test plans and test estrategies, to test complex system.</h2>
        <h2> I design and develop test projects to ensure quality in back end, front end and mobile.</h2>
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
