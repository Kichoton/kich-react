import logo from '../assets/logo_kich_white.png';
import '../style/App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';



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

function Carousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const slides = [
    {
      title: 'Valorant',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Valorant_logo_-_pink_color_version.svg/langfr-520px-Valorant_logo_-_pink_color_version.svg.png',
      text: 'Description du Slide 1'
    },
    {
      title: 'Slide 2',
      image: 'image2.jpg',
      text: 'Description du Slide 2'
    },
    {
      title: 'Slide 3',
      image: 'image3.jpg',
      text: 'Description du Slide 3'
    },
    {
      title: 'Slide 4',
      image: 'image4.jpg',
      text: 'Description du Slide 4'
    },
    {
      title: 'Slide 5',
      image: 'image5.jpg',
      text: 'Description du Slide 5'
    }
  ];

  const goToPrevious = () => {
    console.log('prev');
    setCarouselIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    setIsExpanded(false);
  };

  const goToNext = () => {
    console.log('next');
    setCarouselIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    setIsExpanded(false);
  };

  const goToSlide = (index) => {
    setCarouselIndex(index);
    setIsExpanded(false);
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const handleSeeMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="carousel">
      <button id='carousel-prev-button' className="carousel-button" onClick={goToPrevious}>
        <i className="bi bi-arrow-left-short"></i>
      </button>
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === carouselIndex ? 'active' : ''}`}
            style={{ transform: `translateX(${(index - carouselIndex) * 100}%)` }}
          >
            <img src={slide.image} alt={slide.title} />
            <h2>
              {slide.title}
            </h2>
            
            <div className={`carousel-see-more ${isExpanded ? 'carousel-see-more-active' : ''}`}>
              <button  id={`${index === carouselIndex ? 'carousel-see-more-btn' : ''}`} onClick={handleSeeMore}>
                <i className="bi bi-plus"></i>
              </button>
              <span className='carousel-divider'></span>
              <div className='carousel-info'>
                {slide.text}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button id='carousel-next-button' className="carousel-button" onClick={goToNext}>
        <i className="bi bi-arrow-right-short"></i>
      </button>
      <div className="carousel-pagination">
        {/* Mettre les logos a la place des boutons */}
        {slides.map((slide, index) => (
          <button
            key={index}
            className={`pagination-dot ${index === carouselIndex ? 'pagination-active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
    
  );
}

function GamesPage(){

  return(
    <main className="games-container">
      <h1>Les jeux</h1>
      <Carousel />
    </main>
  )
}

function NetworkPage(){
  return(
    <main className="network-container">
      <p>réseaux</p>
    </main>
  )
}

// function GlobalButtons( {setActiveItem}) {
function GlobalButtons() {
  
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
        case "+":
          document.getElementById('carousel-see-more-btn').click();
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

  const buttons = [
    { key: 0, id: "kich", label: 'bi bi-caret-up-fill', url: '/kichoton'},
    { key: 1, id: "games", label: 'bi bi-caret-right-fill', url: '/jeux'},
    { key: 2, id: "network", label: 'bi bi-caret-left-fill', url: '/reseaux'},
    { key: 3, id: "home", label: 'bi bi-house-fill', url: '/'},
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
                </Link>
              
                {/* <Link to="/kichoton" id="kich" className="kich-btn-touch" onClick={handleNavClick}>
                    <i className="bi bi-caret-up-fill"></i>
                </Link> */}
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
          <GridBackground /> 
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/kichoton" element={<KichPage/>} />
            <Route path="/jeux" element={<GamesPage/>} />
            <Route path="/reseaux" element={<NetworkPage/>} />
          </Routes>
          
          <GlobalButtons />
        </div>
      </Router>
    );
  
  
}

export default App;
