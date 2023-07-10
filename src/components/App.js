import logo from '../assets/logo_kich_white.png';
import '../style/App.css';
import React, {useEffect, useState} from 'react';



function GridBackground(){
  return (
    <div className="GridBackground">
    </div>
  )
}

function ColoredBackground(){
  return (
    <div className="ColoredBackground">
    </div>
  )
}

function HomePage()
{
  return(
      <main className="hp-container">
          <img className="hp-img" src={logo}></img>
      </main>
  );
}

function KichPage(){
  return(
    <main className="kich-container">
      <h1>Kichoton c'est ...</h1>
      <div className="kich-theo">
        <span className='triangle-theo-top'></span>
        <span className='triangle-theo-bot'></span>
         <p>... moi, Théo Saez, un streameur Francais, recemment arrivé a Montréal.</p>
        <p>L'aventure Twitch débute en 2022 sur la plateforme Twitch.</p>
        <p>L'objectif de cette chaine est de se détendre, jouer entre amis, se détendre grace a des mates tous aussi drole, serieux, tryhardeur les uns que les autres.</p>
        <p>Depuis 2023, l'aventure se poursuit sur la plateforme Kick.com</p>
        <hr></hr>

        <p>Passionné de jeux vidéos, le streaming permet de partager cet amour, mais également de partager ou faire découvrir d'autre centres d'interets tel que le BMX</p>
      </div>
    </main>
  )
}


function GamesPage(){

  return(
    <main className="games-container">

    </main>
  )
}

function NetworkPage(){
  return(
    <main className="network-container">
      
    </main>
  )
}

function GlobalButtons( {setActiveItem}) {
  
  // keyboard event
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

    if(footerBtn.offsetParent.classList.contains('kich-btn-active')){
      footerContainer.classList.remove("footer-active");
      footerBtn.offsetParent.classList.remove('kich-btn-active');
    }else{
      footerContainer.classList.add("footer-active");
      footerBtn.offsetParent.classList.add('kich-btn-active');
    }
    
    
  }

  function handleNavClick(event){

    for (let i = 0; i < navBtns.length; i++){
      if(navBtns[i].classList.contains('kich-btn-active')){
        navBtns[i].classList.remove('kich-btn-active');
      }
    }
    
    let btnNavClicked = document.getElementById(event.currentTarget.id);
    btnNavClicked.offsetParent.classList.add('kich-btn-active');
      
    switch (event.currentTarget.id) {
      case 'home':
        setActiveItem('home')
        break;
      case 'kich':
        setActiveItem('kich')
        break;
      case 'games':
        setActiveItem('games')
        break;
      case 'network':
        setActiveItem('network')
        break;   
      default:
        setActiveItem('home')
        break;
    }
    
  }
  
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
        <span id="nav-btn-kich" className="kich-btn kich-nav">
            <span className="kich-btn-bg">
                <button id="kich" className="kich-btn-touch" onClick={handleNavClick}>
                    <i className="bi bi-caret-up-fill"></i>
                </button>
            </span>
            <p className="kich-btn-title">Kichoton</p>
        </span>
        <span id="nav-btn-games" className="kich-btn kich-nav">
            <span className="kich-btn-bg">
                {/* <button id="games" className="kich-btn-touch" onClick={() => setActiveItem('games')}> */}
                <button id="games" className="kich-btn-touch" onClick={handleNavClick}>
                    <i className="bi bi-caret-right-fill"></i>
                </button>
            </span>
            <p className="kich-btn-title">Jeux</p>
        </span>
        <span id="nav-btn-network" className="kich-btn kich-nav">
            <span className="kich-btn-bg">
                {/* <button id="network" className="kich-btn-touch" onClick={() => setActiveItem('network')}> */}
                <button id="network" className="kich-btn-touch" onClick={handleNavClick}>
                    <i className="bi bi-caret-left-fill"></i>
                </button>
            </span>
            <p className="kich-btn-title">Réseaux</p>
        </span>
        <span id="nav-btn-home" className="kich-btn kich-nav kich-btn-active">
            <span className="kich-btn-bg">
                {/* <button id="home" className="kich-btn-touch" onClick={() => setActiveItem('home')}> */}
                <button id="home" className="kich-btn-touch" onClick={handleNavClick}>
                <i className="bi bi-house-down-fill"></i>
                </button>
            </span>
            {/* <p className="kich-btn-title">Accueil</p> */}
        </span>
      </nav>

    </div>
  )
}

function App() {
  
  const [activeItem, setActiveItem] = useState('home');

  let contentView;

  switch (activeItem) {
    case 'home':
      contentView = <HomePage />;
      break;
    case 'kich':
      contentView = <KichPage />;
      break;
    case 'games':
      contentView = <GamesPage />;
      break;
    case 'network':
      contentView = <NetworkPage />;
      break;
    default:
      contentView = <HomePage />;
  }

  return (
      <div className="App">
          <ColoredBackground/>
          <GridBackground />
          {contentView}
          <GlobalButtons setActiveItem={setActiveItem} />
      </div>
  );
}

export default App;
