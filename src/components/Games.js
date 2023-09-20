import React, {useEffect, useState} from 'react';
import '../style/Games.css'


export function Carousel() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const slides = [
      {
        title: 'Valorant',
        image: 'https://logodownload.org/wp-content/uploads/2020/06/valorant-logo-1.png',
        text: (
          <p>
            Valorant est un jeu vidéo free-to-play de tir à la première personne en multijoueur développé et édité par Riot Games et sorti le 2 juin 2020.
          </p>
        ),
        color: '#FD4556'
      },
      {
        title: 'Teamfight Tactics',
        image: 'https://static.riot-esports.fr/uploads/_AUTOxAUTO_crop_center-center_75_none/tft-bug-render-gold_200507_131909.png',
        text: (
          <p>
            Teamfight Tactics (abrégé TFT, parfois Combat Tactique (abrégé CT) en français) est un jeu vidéo de type auto battler développé et édité par Riot Games. Il prend place dans l'univers de League of Legends et est basé sur le jeu Dota Auto Chess (en), où le joueur affronte sept adversaires en ligne, qu'il doit combattre en formant une équipe afin d'être le dernier à rester en vie.
          </p>
        ),
        color: '#DCB253'
      },
      {
        title: 'League Of Legends',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/LoL_icon.svg/2048px-LoL_icon.svg.png',
        text: (
          <p>
            Le mode principal du jeu voit s'affronter deux équipes de 5 joueurs en temps réel dans des parties d'une durée d'environ une demi-heure, chaque équipe occupant et défendant sa propre base sur la carte. Chacun des dix joueurs contrôle un personnage à part entière parmi les plus de 150 qui sont proposés.
          </p>
        ),
        color: '#001A6C'
      },
  
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
      if (isExpanded === true) {
        console.log(isExpanded)
        document.getElementById('carousel-see-more-btn').innerHTML = '+';
      }else{
        console.log(isExpanded)
        document.getElementById('carousel-see-more-btn').innerHTML = '-';
      }
    };

    let screenOrientationPortrait = window.matchMedia("(orientation: portrait)").matches;

    console.log(screenOrientationPortrait)
    let gradientDeg;
    if (screenOrientationPortrait === true) {
      gradientDeg = "180deg";
    } else {
      gradientDeg = "90deg";
    }
  
    return (
      <div className="carousel">
          <div className="carousel-slides">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === carouselIndex ? 'active' : ''}`}
                style={{ 
                  transform: `translateX(${(index - carouselIndex) * 100}%)`,
                  background: `linear-gradient(`+ gradientDeg +`, rgba(255,255,255,0) 0%, `+ slide.color +` 25%, #3A4651 75%)`
                }}
              >
                <img src={slide.image} alt={slide.title} />
                <h2>
                  {slide.title}
                </h2>
                
                <div className={`carousel-see-more ${isExpanded ? 'carousel-see-more-active' : ''}`}>
                  <button  id={`${index === carouselIndex ? 'carousel-see-more-btn' : ''}`} onClick={handleSeeMore}>
                    {/* <i className="bi bi-plus"></i> */}
                    +
                  </button>
                  <span className='carousel-divider'></span>
                  <div className='carousel-info'>
                    {slide.text}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button id='carousel-prev-button' className="carousel-button" onClick={goToPrevious}>
            <i className="bi bi-arrow-left-short"></i>
          </button>

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
              >
                <img src={slide.image} alt={slide.title}/>
              </button>
            ))}
          </div>
      </div>
      
    );
}
  

export function Games(){

  // Utilisez useEffect pour simuler window.onload
  useEffect(() => {
    document.getElementById("games-container").style.height = window.innerHeight + 'px'; 
  });

    return(
      <main id="games-container">
        <h1>Les jeux</h1>
        <Carousel />
      </main>
    )
  }