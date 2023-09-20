import '../style/App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { GridBackground, ColoredBackground } from './Background';
import { Home } from './Home';
import { Kich } from './Kich';
import { Games } from './Games';
import { Network } from './Network';


// function GlobalButtons( {setActiveItem}) {
function GlobalButtons()  {
  
  // keyboard event

  // TODO :
  // Changer les fleches pas zqsd et voir si oon peut avoir l'info sur la langue du clavier (afficher la langue du clavier dans la console)
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          document.getElementById('kich').click();
          break;
          case "ArrowDown":
          document.getElementById('home').click();
          break;
          case "ArrowRight":
          document.getElementById('games').click();
          break;
        case "ArrowLeft":
          document.getElementById('network').click();
          break;
        case "i":
          document.getElementById('footer').click();
          break;
        case "+":
          if(!document.getElementById('carousel-see-more-btn').parentElement.classList.contains('carousel-see-more-active')){
            document.getElementById('carousel-see-more-btn').click();
          };
          break;
        case "-":
          if(document.getElementById('carousel-see-more-btn').parentElement.classList.contains('carousel-see-more-active')){
            document.getElementById('carousel-see-more-btn').click();
          };
          break;
        default:
          break;
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);
  
  let navBtns = document.getElementsByClassName('kich-nav');
  
  function handleFooterClick(event){
    let footerBtn = document.getElementById(event.currentTarget.id);
    let footerContainer = document.getElementById("footer-container");

    if(footerBtn.parentElement.parentElement.classList.contains('kich-btn-active')){
      footerContainer.classList.remove("footer-active");
      footerBtn.parentElement.parentElement.classList.remove('kich-btn-active');
    }else{
      footerContainer.classList.add("footer-active");
      footerBtn.parentElement.parentElement.classList.add('kich-btn-active');
    }
  }

  function handleNavClick(event){

    if(event.currentTarget.id === "network" ){
      document.getElementById("AppButtons").classList.add('NavChangedActive');
    }else{
      if (document.getElementById("AppButtons").classList.contains('NavChangedActive')) {
        document.getElementById("AppButtons").classList.remove('NavChangedActive')
      }
    }


    // Ajout du press sur le btn cliqué
    for (let i = 0; i < navBtns.length; i++){
      if(navBtns[i].classList.contains('kich-btn-active')){
        navBtns[i].classList.remove('kich-btn-active');
      }
    }
    
    let btnNavClicked = document.getElementById(event.currentTarget.id);
    btnNavClicked.parentElement.parentElement.classList.add('kich-btn-active');    
  }

  const location = useLocation();
  const currentURL = location.pathname;


  
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);
  const [icons, setIcons] = useState({
    kich: '',
    games: '',
    network: '',
    home: '',
  });
  
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const newIsSmallScreen = screenWidth <= 500;

      if (newIsSmallScreen !== isSmallScreen) {
        setIsSmallScreen(newIsSmallScreen);
        updateIcons(newIsSmallScreen);
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isSmallScreen]);


  useEffect(() => {
    updateIcons(isSmallScreen);
  }, [isSmallScreen]);

  const updateIcons = (isSmallScreen) => {
    if (isSmallScreen) {
      setIcons({
        kich: 'bi bi-person-vcard',
        games: 'bi bi-controller',
        network: 'bi bi-link',
        home: 'bi bi-house-fill'
      });
    } else {
      setIcons({
        kich: 'bi bi-caret-up-fill',
        games: 'bi bi-caret-right-fill',
        network: 'bi bi-caret-left-fill',
        home: 'bi bi-house-fill'
      });
    }
  };

  const buttons = [
    { key: 0, id: "kich", label: icons.kich, url: '/kichoton'},
    { key: 1, id: "games", label: icons.games, url: '/jeux'},
    { key: 2, id: "network", label: icons.network, url: '/reseaux'},
    { key: 3, id: "home", label: icons.home, url: '/'},
  ];

  return(
    <div id="AppButtons">

      <div id='footer-container' className="">
        <p>développé par <a href="https://theosaez.com">Théo Saez</a></p>
        <span className="triangle-footer"></span>
      </div>

      <span id="footer-btn" className="kich-btn">
          <span className="kich-btn-bg">
              <button id="footer" className="kich-btn-touch" onClick={handleFooterClick}>
                <i className="bi bi-info-lg"></i>
              </button>
          </span>
      </span>

      <nav className="nav-btn-container">
        <span id="nav-btn-kich" className={`kich-btn kich-nav ${currentURL === buttons[0].url ? 'kich-btn-active' : ''}`}>
            <span className="kich-btn-bg">
              
                <Link
                  key={buttons[0].key}
                  id={buttons[0].id}
                  to={buttons[0].url}
                  className="kich-btn-touch"
                  onClick={handleNavClick}
                >
                  <i className={buttons[0].label}></i>
                  {/* {buttons[0].label} */}
                </Link>
              
                {/* 
                  <Link to="/kichoton" id="kich" className="kich-btn-touch" onClick={handleNavClick}>
                      <i className="bi bi-caret-up-fill"></i>
                  </Link>
                 */}
            </span>
            <p className="kich-btn-title">Kichoton</p>
        </span>
        <span id="nav-btn-games" className={`kich-btn kich-nav ${currentURL === buttons[1].url ? 'kich-btn-active' : ''}`}>
            <span className="kich-btn-bg">
                {/* <button id="games" className="kich-btn-touch" onClick={() => setActiveItem('games')}> */}
                {/* <button id="games" className="kich-btn-touch" onClick={handleNavClick}> */}
                {/* <Link to="/jeux" id="games" className="kich-btn-touch" onClick={handleNavClick}>
                    <i className="bi bi-caret-right-fill"></i>
                </Link> */}
                 <Link
                  key={buttons[1].key}
                  id={buttons[1].id}
                  to={buttons[1].url}
                  className="kich-btn-touch"
                  onClick={handleNavClick}
                >
                  <i className={buttons[1].label}></i>
                </Link>
            </span>
            <p className="kich-btn-title">Jeux</p>
        </span>
        <span id="nav-btn-network" className={`kich-btn kich-nav ${currentURL === buttons[2].url ? 'kich-btn-active' : ''}`}>
            <span className="kich-btn-bg">
                {/* <button id="network" className="kich-btn-touch" onClick={() => setActiveItem('network')}> */}
                {/* <Link to="/reseaux" id="network" className="kich-btn-touch" onClick={handleNavClick}>
                    <i className="bi bi-caret-left-fill"></i>
                </Link> */}
                <Link
                  key={buttons[2].key}
                  id={buttons[2].id}
                  to={buttons[2].url}
                  className="kich-btn-touch"
                  onClick={handleNavClick}
                >
                  <i className={buttons[2].label}></i>
                </Link>
            </span>
            <p className="kich-btn-title">Réseaux</p>
        </span>
        <span id="nav-btn-home" className={`kich-btn kich-nav ${currentURL === buttons[3].url ? 'kich-btn-active' : ''}`}>
            <span className="kich-btn-bg">
                {/* <button id="home" className="kich-btn-touch" onClick={() => setActiveItem('home')}> */}
                {/* <Link to="/" id="home" className="kich-btn-touch" onClick={handleNavClick}>
                  <i className="bi bi-house-down-fill"></i>
                </Link> */}
                <Link
                  key={buttons[3].key}
                  id={buttons[3].id}
                  to={buttons[3].url}
                  className="kich-btn-touch"
                  onClick={handleNavClick}
                >
                  <i className={buttons[3].label}></i>
                </Link>
            </span>
            {/* <p className="kich-btn-title">Accueil</p> */}
        </span>
      </nav>

    </div>
  )
}

function App() {


  
  
    return (
      // Doc : https://reactrouter.com/en/main
      <Router>
        <div className="App">
        
          <ColoredBackground/>
          <GridBackground/>

          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="/kichoton" element={<Kich/>} />
            <Route path="/jeux" element={<Games/>} />
            <Route path="/reseaux" element={<Network/>} />
          </Routes>
          
          <GlobalButtons />
        </div>
      </Router>
    );
  
  
}

export default App;
