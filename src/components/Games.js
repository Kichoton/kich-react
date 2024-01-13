import React, {useEffect, useState} from 'react';
import '../style/Games.css'

import logo_ac from '../assets/logo_games/Animal_Crossing.png'
import logo_lol from '../assets/logo_games/lol.svg'
import logo_tft from '../assets/logo_games/TFT.png'
import logo_tm from '../assets/logo_games/TM.png'
import logo_valorant from '../assets/logo_games/Valorant.png'

import icon_right from '../assets/icons/arrow-fat-right.svg';
import icon_left from '../assets/icons/arrow-fat-left.svg';
import icon_plus from '../assets/icons/plus.svg';
import icon_minus from '../assets/icons/minus.svg';



export function Carousel() {

  // keyboard carousel event
    useEffect(() => {
      const handleKeyDown = (event) => {
        // Gestion des btn de la page des jeux 
          switch (event.key) {
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
            case "ArrowRight":
                document.getElementById('carousel-next-button').click();
              break;
            case "ArrowLeft":
                document.getElementById('carousel-prev-button').click();
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

    const [carouselIndex, setCarouselIndex] = useState(0);
    const slides = [
      {
        title: 'Valorant',
        image: logo_valorant,
        text: (
          <p>
            Valorant est un jeu vidéo free-to-play de tir à la première personne en multijoueur développé et édité par Riot Games et sorti le 2 juin 2020.
          </p>
        ),
        color: '#FD4556'
      },
      {
        title: 'Teamfight Tactics',
        image: logo_tft,
        text: (
          <p>
            Teamfight Tactics (abrégé TFT, parfois Combat Tactique (abrégé CT) en français) est un jeu vidéo de type auto battler développé et édité par Riot Games. Il prend place dans l'univers de League of Legends et est basé sur le jeu Dota Auto Chess (en), où le joueur affronte sept adversaires en ligne, qu'il doit combattre en formant une équipe afin d'être le dernier à rester en vie.
          </p>
        ),
        color: '#DCB253'
      },
      {
        title: 'League Of Legends',
        image: logo_lol,
        text: (
          <p>
            Le mode principal du jeu voit s'affronter deux équipes de 5 joueurs en temps réel dans des parties d'une durée d'environ une demi-heure, chaque équipe occupant et défendant sa propre base sur la carte. Chacun des dix joueurs contrôle un personnage à part entière parmi les plus de 150 qui sont proposés.
          </p>
        ),
        color: '#001A6C'
      },
      {
        title: 'Trackmania',
        image: logo_tm,
        text: (
          <p>
            TrackMania est une franchise de jeux de course atypiques typés arcade qui proposent des pistes peu conventionnelles, avec des virages très relevés, des tremplins et des loopings         
          </p>
        ),
        color: '#7DEEAE'
      },
      {
        title: 'Animal Crossing',
        image: logo_ac,
        text: (
          <p>
            Animal Crossing est une série de jeux vidéo de simulation de vie développée par Nintendo dans laquelle le joueur emménage dans un village habité par des animaux anthropomorphes.    
            La série est notable pour son système de jeu de type sandbox (sans objectif précis et faisant appel à la curiosité et à la créativité du joueur) et pour son utilisation étendue de l'horloge et du calendrier de la console qui simulent un déroulement en temps réel, ce qui modifie le contenu du jeu en fonction de l'heure, du jour de la semaine et de la date auxquels joue le joueur.        
          </p>
        ),
        color: '#c48d3f'
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
        document.getElementById('carousel-see-more-btn').innerHTML = '<img alt="" src='+icon_plus+'></img>';
      }else{
        console.log(isExpanded)
        document.getElementById('carousel-see-more-btn').innerHTML = '<img alt="" src='+icon_minus+'></img>';
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
                <img className='carousel-img' src={slide.image} alt={slide.title} />
                <h2>
                  {slide.title}
                </h2>
                
                <div className={`carousel-see-more ${isExpanded ? 'carousel-see-more-active' : ''}`}>
                  <button  id={`${index === carouselIndex ? 'carousel-see-more-btn' : ''}`} onClick={handleSeeMore}>
                    {/* <i className="bi bi-plus"></i> */}
                    <img alt="" src={icon_plus} ></img>
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
            <img alt='' src={icon_left}></img>
          </button>

          <button id='carousel-next-button' className="carousel-button" onClick={goToNext}>
            <img alt='' src={icon_right}></img>
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

  useEffect(() => {
    document.title = "Kichoton - Jeux";
  });

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