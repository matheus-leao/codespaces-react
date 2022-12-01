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
          <img src='./Images/logo.png' alt='browser logo' />
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
      <section id='sections'>
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
            <img src='./Images/profile-image.png' alt='browser logo' />
          </div>

        </section>
        <section id='about'>
          <img id='about-image' src='./Images/profile-image.png' alt='browser logo' />
          <div id='text-about'>
            <h1> I'm a Quality Assurance Enginer </h1>
            <h2> I design and create test plans and test estrategies, to test complex system.
              I design and develop test projects to ensure quality in back end, front end and mobile.</h2>

            <div id='text-buttons'>
              <a href='https://github.com/matheus-leao'><button className='pink-button'> My Projects </button></a>
              <a href='./Images/Resume-Matheus-Leao.png' download='Resume-Matheus-Leao.png'> <button id='download-cv'> Download CV </button></a>
            </div>
          </div>
        </section>

        <section id='process'>
          <div id='text-process'>
            <h1> Work Process </h1>
            <h2> Proident amet elit quis nulla cillum enim in qui laborum consequat dolor minim laboris. Amet mollit amet esse nisi amet pariatur consequat laborum dolore fugiat tempor adipisicing amet. Enim consectetur nostrud magna minim anim eu. Dolore dolore nulla minim ea consequat sunt deserunt elit culpa magna excepteur elit. Mollit id nulla tempor nulla ex. Reprehenderit Lorem nulla irure aliquip duis dolor voluptate irure veniam adipisicing consectetur adipisicing. Sunt est officia laboris consectetur voluptate ipsum adipisicing incididunt ex eu aliqua.</h2>
          </div>
          <div id='box-works'>
            <div className='box' id='box-research'>
              <div id='icon' className='box-icon'> </div>
              <h1 className='box-title'>1. Research</h1>
              <h2 className='box-text'>Pariatur consequat cillum commodo incididunt minim.</h2>
            </div>

            <div className='box' id='box-analyze'>
              <div id='icon' className='box-icon'> </div>
              <h1 className='box-title'>2. Analyze</h1>
              <h2 className='box-text'>Pariatur consequat cillum commodo incididunt minim.</h2>
            </div>

            <div className='box' id='box-design'>
              <div id='icon' className='box-icon'> </div>
              <h1 className='box-title'>3. Design</h1>
              <h2 className='box-text'>Pariatur consequat cillum commodo incididunt minim.</h2>
            </div>

            <div className='box' id='box-launch'>
              <div id='icon' className='box-icon'> </div>
              <h1 className='box-title'>4. Launch</h1>
              <h2 className='box-text'>Pariatur consequat cillum commodo incididunt minim.</h2>
            </div>
          </div>
        </section>
        <section id='portifolio'>

        </section>
        <section id='blog'>

        </section>

        <section id='session'>

        </section>
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
