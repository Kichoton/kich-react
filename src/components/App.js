import logo from '../assets/logo_kich_white.png';
import '../style/App.css';
import React, {useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



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
        {/* Le background pourrait etre dans l'objet slide, et il pourrait comment etre transparent to la couleur chosis 
       */}
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
            {/* Ajouter du text dans le see more, qui serait dans overlfow a droite et qui se décalerait au click en meme tempsque la barre du see more se décale */}
            <div className={`carousel-see-more ${isExpanded ? 'carousel-see-more-active' : ''}`}>
              <button onClick={handleSeeMore}>
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
      
    // switch (event.currentTarget.id) {
    //   case 'home':
    //     setActiveItem('home')
    //     break;
    //   case 'kich':
    //     setActiveItem('kich')
    //     break;
    //   case 'games':
    //     setActiveItem('games')
    //     break;
    //   case 'network':
    //     setActiveItem('network')
    //     break;   
    //   default:
    //     setActiveItem('home')
    //     break;
    // }
    
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
                <Link to="/kichoton" id="kich" className="kich-btn-touch" onClick={handleNavClick}>
                    <i className="bi bi-caret-up-fill"></i>
                </Link>
            </span>
            <p className="kich-btn-title">Kichoton</p>
        </span>
        <span id="nav-btn-games" className="kich-btn kich-nav">
            <span className="kich-btn-bg">
                {/* <button id="games" className="kich-btn-touch" onClick={() => setActiveItem('games')}> */}
                {/* <button id="games" className="kich-btn-touch" onClick={handleNavClick}> */}
                <Link to="/jeux" id="games" className="kich-btn-touch" onClick={handleNavClick}>
                    <i className="bi bi-caret-right-fill"></i>
                </Link>
            </span>
            <p className="kich-btn-title">Jeux</p>
        </span>
        <span id="nav-btn-network" className="kich-btn kich-nav">
            <span className="kich-btn-bg">
                {/* <button id="network" className="kich-btn-touch" onClick={() => setActiveItem('network')}> */}
                <Link to="/réseaux" id="network" className="kich-btn-touch" onClick={handleNavClick}>
                    <i className="bi bi-caret-left-fill"></i>
                </Link>
            </span>
            <p className="kich-btn-title">Réseaux</p>
        </span>
        <span id="nav-btn-home" className="kich-btn kich-nav kich-btn-active">
            <span className="kich-btn-bg">
                {/* <button id="home" className="kich-btn-touch" onClick={() => setActiveItem('home')}> */}
                <Link to="/" id="home" className="kich-btn-touch" onClick={handleNavClick}>
                <i className="bi bi-house-down-fill"></i>
                </Link>
            </span>
            {/* <p className="kich-btn-title">Accueil</p> */}
        </span>
      </nav>

    </div>
  )
}

function App() {
  
    // const [activeItem, setActiveItem] = useState('home');

    // let contentView;

    // switch (activeItem) {
    //   case 'home':
    //     contentView = <HomePage />;
    //     break;
    //   case 'kich':
    //     contentView = <KichPage />;
    //     break;
    //   case 'games':
    //     contentView = <GamesPage />;
    //     break;
    //   case 'network':
    //     contentView = <NetworkPage />;
    //     break;
    //   default:
    //     contentView = <HomePage />;
    // }
    return (
      <Router>
        <div className="App">
        
          <ColoredBackground/>
          <GridBackground /> 
          <Routes>
            <Route exact path="/" element={<HomePage/>} />
            <Route path="/kichoton" element={<KichPage/>} />
            <Route path="/jeux" element={<GamesPage/>} />
            <Route path="/réseaux" element={<NetworkPage/>} />
          </Routes>
          {/* {contentView} */}
          {/* <GlobalButtons setActiveItem={setActiveItem} /> */}
          <GlobalButtons />
        </div>
      </Router>
    );
  
  
}

export default App;
