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
          <div id='profile-image' className='profile-class'>
            <img src='./Images/profile-image.png' alt='browser logo' />
          </div>

        </section>
        <section id='about'>
          <div id='about-profile-image' className='profile-class'>
            <img id='about-image' src='./Images/profile-image.png' alt='browser logo' />
          </div>

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
          <div id='content-process'>
            <div id='text-process'>
              <h1> Work Process </h1>
              <h2> Proident amet elit quis nulla cillum enim in qui laborum consequat dolor minim laboris. Amet mollit amet esse nisi amet pariatur consequat laborum dolore fugiat tempor adipisicing amet. Enim consectetur nostrud magna minim anim eu. Dolore dolore nulla minim ea consequat sunt deserunt elit culpa magna excepteur elit. Mollit id nulla tempor nulla ex. Reprehenderit Lorem nulla irure aliquip duis dolor voluptate irure veniam adipisicing consectetur adipisicing. Sunt est officia laboris consectetur voluptate ipsum adipisicing incididunt ex eu aliqua.</h2>
            </div>
            <div id='box-works'>
              <div id='box-first-line'>
                <div className='box' id='box-research'>
                  <div id='icon' className='box-icon'> <img src='./Images/research-icon.png'></img> </div>
                  <h1 className='box-title'>1. Research</h1>
                  <h2 className='box-text'>Pariatur consequat cillum commodo incididunt minim.</h2>
                </div>

                <div className='box' id='box-analyze'>
                  <div id='icon' className='box-icon'> <img src='./Images/growth-graph.png'></img> </div>
                  <h1 className='box-title'>2. Analyze</h1>
                  <h2 className='box-text'>Pariatur consequat cillum commodo incididunt minim.</h2>
                </div>
              </div>
              <div id='box-second-line'>
                <div className='box' id='box-design'>
                  <div id='icon' className='box-icon'><img src='./Images/Pencil.png'></img> </div>
                  <h1 className='box-title'>3. Design</h1>
                  <h2 className='box-text'>Pariatur consequat cillum commodo incididunt minim.</h2>
                </div>

                <div className='box' id='box-launch'>
                  <div id='icon' className='box-icon'><img src='./Images/pc-icon.png'></img> </div>
                  <h1 className='box-title'>4. Launch</h1>
                  <h2 className='box-text'>Pariatur consequat cillum commodo incididunt minim.</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id='portifolio'>
          <div id='portifolio-title'>
            <h1>Portifolio</h1>
            <h2>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</h2>
          </div>
          <div id='projects-cases'>
            <div id='first-line'>
              <div className='case-study'>
                <div className='case-logo'><img src='./Images/case-logo1.png' alt='browser logo' /></div>
                <div className='case-content'>
                  <div className='case-type'>UI-UX DESIGN</div>
                  <div className='case-title'>Product Admin Dashboard</div>
                  <div className='case-text'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</div>
                  <div className='case-study-button'><button>Case Study</button></div>
                </div>
              </div>

              <div className='case-study'>
                <div className='case-logo'><img src='./Images/case-logo2.png' alt='browser logo' /></div>
                <div className='case-content'>
                  <div className='case-type'>UI-UX DESIGN</div>
                  <div className='case-title'>Product Admin Dashboard</div>
                  <div className='case-text'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</div>
                  <div className='case-study-button'><button>Case Study</button></div>
                </div>
              </div>

              <div className='case-study'>
                <div className='case-logo'><img src='./Images/case-logo3.png' alt='browser logo' /></div>
                <div className='case-content'>
                  <div className='case-type'>UI-UX DESIGN</div>
                  <div className='case-title'>Product Admin Dashboard</div>
                  <div className='case-text'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</div>
                  <div className='case-study-button'><button>Case Study</button></div>
                </div>
              </div>
            </div>
            <div id='second-line'>
              <div className='case-study'>
                <div className='case-logo'><img src='./Images/case-logo4.png' alt='browser logo' /></div>
                <div className='case-content'>
                  <div className='case-type'>UI-UX DESIGN</div>
                  <div className='case-title'>Product Admin Dashboard</div>
                  <div className='case-text'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</div>
                  <div className='case-study-button'><button>Case Study</button></div>
                </div>
              </div>

              <div className='case-study'>
                <div className='case-logo'><img src='./Images/case-logo5.png' alt='browser logo' /></div>
                <div className='case-content'>
                  <div className='case-type'>UI-UX DESIGN</div>
                  <div className='case-title'>Product Admin Dashboard</div>
                  <div className='case-text'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</div>
                  <div className='case-study-button'><button>Case Study</button></div>
                </div>
              </div>

              <div className='case-study'>
                <div className='case-logo'><img src='./Images/case-logo6.png' alt='browser logo' /></div>
                <div className='case-content'>
                  <div className='case-type'>UI-UX DESIGN</div>
                  <div className='case-title'>Product Admin Dashboard</div>
                  <div className='case-text'>Vivamus eleifend convallis ante, non pharetra libero molestie laoreet. Donec id imperdiet lacus.</div>
                  <div className='case-study-button'><button>Case Study</button></div>
                </div>
              </div>
            </div>
          </div>
          <div id='more-projects-div'>
            <button id='more-projects-button' className='purple-button'>More Projects</button>
          </div>
        </section>

        <section id='project-idea'>
          <div id='project-idea-content'>
            <h1>Do you have Project Idea? Let's discuss your project!</h1>
            <h2>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</h2>
            <button className='purple-button'>Let's work Together</button>
          </div>
        </section>

        <section id='blog'>
          <div id='blog-content'>
            <h1>Blog</h1>
            <h2>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</h2>
            <div id='blog-boxes'>
              <div className='blog-box'>
              <div className='blog-logo'><img src='./Images/blog-logo1.png' alt='browser logo' /></div>
                <div className='blog-content'>
                  <div className='blog-date'>22 Oct, 2020 / 246 Comments</div>
                  <div className='blog-title'>Lorem ipsum dolor sit consea. Nulla purus arcu</div>
                </div>
              </div>

              <div className='blog-box'>
              <div className='blog-logo'><img src='./Images/blog-logo2.png' alt='browser logo' /></div>
                <div className='blog-content'>
                  <div className='blog-date'>22 Oct, 2020 / 246 Comments</div>
                  <div className='blog-title'>Lorem ipsum dolor sit consea. Nulla purus arcu</div>
                </div>
              </div>

              <div className='blog-box'>
              <div className='blog-logo'><img src='./Images/blog-logo3.png' alt='browser logo' /></div>
                <div className='blog-content'>
                  <div className='blog-date'>22 Oct, 2020 / 246 Comments</div>
                  <div className='blog-title'>Lorem ipsum dolor sit consea. Nulla purus arcu</div>
                </div>
              </div>

              <div className='blog-box'>
              <div className='blog-logo'><img src='./Images/blog-logo4.png' alt='browser logo' /></div>
                <div className='blog-content'>
                  <div className='blog-date'>22 Oct, 2020 / 246 Comments</div>
                  <div className='blog-title'>Lorem ipsum dolor sit consea. Nulla purus arcu</div>
                </div>
              </div>
            </div>
          </div>
            
        </section>

        <section id='what-I-do'>
          <div id='what-content'>
            <div id='what-text'>
              <h1>What I do?</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,
              </p>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non.
              </p>
              <button className='purple-button'>Say Hello</button>
            </div>
            <div id='what-boxes'>
              <div className='what-box'>
                <h1>User Experience (UX)</h1>
                <h2>Elit aliqua qui qui excepteur cillum esse in enim sit et ullamco sit labore excepteur. Reprehenderit cupidatat tempor velit do ullamco ipsum enim mollit minim proident. Nostrud ea ut incididunt veniam nostrud voluptate mollit deserunt quis pariatur ad ipsum. Ullamco aute sunt nulla non esse.</h2>
              </div>
            </div>
          </div>
        </section>
      </section>
      <footer>
      </footer>
    </div>
  );
}

export default App;
