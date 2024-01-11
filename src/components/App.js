import '../style/App.css';
import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import { GridBackground, ColoredBackground } from './Background';
import { Home } from './Home';
import { Kich } from './Kich';
import { Games } from './Games';
import { Network } from './Network';
import { NotFound } from './NotFound';


// function GlobalButtons( {setActiveItem}) {
function GlobalButtons()  {

  const location = useLocation();
  const currentURL = location.pathname;

  const navigator = window.navigator;
  const languages = navigator.languages;
  const currentLanguage = languages[0];

  // keyboard global event
  useEffect(() => {
    const handleKeyDown = (event) => {

      // Gestion du btn du footer
      switch (event.key) {
        case "i":
          document.getElementById('footer').click();
          break;
        default:
          break;
      }
      
      // Gestion des btn de navigation en fonction de la langue du clavier
      if (currentLanguage === "fr-FR") {
        switch (event.key) {
          case "z":
            document.getElementById('kich').click();
            break;
          case "s":
            document.getElementById('home').click();
            break;
          case "d":
            document.getElementById('games').click();
            break;
          case "q":
            document.getElementById('network').click();
            break;
            default:
            break;
        }
      }else{
        switch (event.key) {
          case "w":
            document.getElementById('kich').click();
            break;
          case "s":
            document.getElementById('home').click();
            break;
          case "d":
            document.getElementById('games').click();
            break;
          case "a":
            document.getElementById('network').click();
            break;
            default:
              break;
          }
      } 
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });
  
  //  Btn globaux (Nav = footer)
  let navBtns = document.getElementsByClassName('kich-nav');
  
  // Appartition du footer
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

  // Event de clique pour les 4 btns de nav 
  function handleNavClick(event){
    // Decalage de la navbar pour la page network
    if(event.currentTarget.id === "network" ){
      document.getElementById("AppButtons").classList.add('NavChangedActive');
    }else{
      if (document.getElementById("AppButtons").classList.contains('NavChangedActive')) {
        document.getElementById("AppButtons").classList.remove('NavChangedActive')
      }
    }

    // Ajout de l'effet de Press
    for (let i = 0; i < navBtns.length; i++){
      if(navBtns[i].classList.contains('kich-btn-active')){
        navBtns[i].classList.remove('kich-btn-active');
      }
    }
    
    let btnNavClicked = document.getElementById(event.currentTarget.id);
    btnNavClicked.parentElement.parentElement.classList.add('kich-btn-active');    
  }
  
  // Initialisation de la taille mini pour le changement dynamique des icons
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);
  // Creation initial des btn
  const [icons, setIcons] = useState({
    kich: '',
    games: '',
    network: '',
    home: '',
  });
  
  // Logique du changement d'icones en fonction de la taille de la page
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
    updateIcons(isSmallScreen);
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSmallScreen]);

  // Assignation des contenus du bouton en fonction de la taille de la page 
  const updateIcons = (isSmallScreen) => {
    if (isSmallScreen) {
      setIcons({
        kich: '<i class="bi bi-person-vcard"></i>',
        games: '<i class="bi bi-controller"></i>',
        network: '<i class="bi bi-link"></i>',
        home: '<i class="bi bi-house-fill"></i>'
      });
    } else {
      if (currentLanguage === "fr-FR") {
        setIcons({
          // z q s d
          kich: '<span class="kich-btn-letter">Z</span>',
          games: '<span class="kich-btn-letter">D</span>',
          network: '<span class="kich-btn-letter">Q</span>',
          home: '<span class="kich-btn-letter">S</span>'
        });
      } else {
        // le clavier est en anglais ou une autre langue
        setIcons({
          // w a s d
          kich: '<span class="kich-btn-letter">W</span>',
          games: '<span class="kich-btn-letter">D</span>',
          network: '<span class="kich-btn-letter">A</span>',
          home: '<span class="kich-btn-letter">S</span>',
        });
      }
    }
  };

  // Définition des 4 btn de nav
  const buttons = [
    { key: 0, id: "kich", title: "Kichoton", label: icons.kich,  url: '/kichoton'},
    { key: 1, id: "games", title: "Games", label: icons.games,  url: '/jeux'},
    { key: 2, id: "network", title: "Réseaux", label: icons.network,  url: '/reseaux'},
    { key: 3, id: "home", title: "", label: icons.home,  url: '/'},
  ]; 

  // Utilisez useEffect pour simuler window.onload pour lancer les fonction quand la fenetre est load
  useEffect(() => {
    if(currentURL === "/reseaux" ){
      document.getElementById("AppButtons").classList.add('NavChangedActive');
    }else{
      if (document.getElementById("AppButtons").classList.contains('NavChangedActive')) {
        document.getElementById("AppButtons").classList.remove('NavChangedActive')
      }
    }

    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerHTML = buttons[i].id;
      let button = document.getElementById(buttons[i].id);
      button.innerHTML = buttons[i].label
    }

  });

  return(
    <div id="AppButtons">

      <div id='footer-container' className="">
        <p>développé par <i className="fa fa-home"></i> <a href="https://theosaez.com">Théo Saez</a></p>
       

        <span className="triangle-footer"></span>
      </div>

      <span id="footer-btn" className="kich-btn">
          <span className="kich-btn-bg">
              <button id="footer" className="kich-btn-touch" onClick={handleFooterClick} aria-label="Open footer">
                <i className="bi bi-info-lg"></i>
              </button>
          </span>
      </span>

      <nav className="nav-btn-container">

        {buttons.map((button) => (
          <span id={`nav-btn-${button.id}`} className={`kich-btn kich-nav ${currentURL === button.url ? 'kich-btn-active' : ''}`}>
            <span className="kich-btn-bg">
              
                <Link
                  id={button.id}
                  key={button.key}
                  to={button.url}
                  className="kich-btn-touch"
                  onClick={handleNavClick}
                >
                

                </Link>
            </span>
            <p className="kich-btn-title">{button.title}</p>
          </span>
        ))}
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
            <Route path="/" element={<Home/>} />
            <Route path="/kichoton" element={<Kich/>} />
            <Route path="/jeux" element={<Games/>} />
            <Route path="/reseaux" element={<Network/>} />
            {/* Page 404 */}
            <Route path="*" element={<NotFound/>} />
          </Routes>
          
          <GlobalButtons />
        </div>
      </Router>
    );
}

export default App;
