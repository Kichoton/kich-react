import React, {useEffect} from 'react';
import '../style/Games.css'

import { Tooltip } from 'react-tooltip'

import logo_ac from '../assets/logo_games/Animal_Crossing.png'
import logo_lol from '../assets/logo_games/lol.svg'
import logo_tft from '../assets/logo_games/TFT.png'
import logo_tm from '../assets/logo_games/TM.png'
import logo_valorant from '../assets/logo_games/Valorant.png'

import logo_ea from '../assets/logo_platforms/EA.svg'
import logo_playstation from '../assets/logo_platforms/PlayStation.svg'
import logo_riot from '../assets/logo_platforms/riot.svg'
import logo_cod from '../assets/logo_platforms/COD.svg'
import logo_battle from '../assets/logo_platforms/battlenet.svg'
import logo_ubisoft from '../assets/logo_platforms/ubisoft.svg'
import logo_epic from '../assets/logo_platforms/EpicGames.svg'
import logo_xbox from '../assets/logo_platforms/Xbox.svg'
import logo_nintendo from '../assets/logo_platforms/NintendoSwitch.svg'


export function Games(){

    // Changement du titre de la page
    useEffect(() => {
      document.title = "Kichoton - Jeux";
    });

  const gamertags = [
    {
      platform: 'EA',
      logo: logo_ea,
      pseudo: 'ZbLF_MrCrofy'
    },
    {
      platform: 'PlayStation',
      logo: logo_playstation,
      pseudo: 'ZbLF_MrCrofy'
    },
    {
      platform: 'RIOT',
      logo: logo_riot,
      pseudo: 'kichoton#kich'
    },
    {
      platform: 'Activision',
      logo: logo_cod,
      pseudo: 'Kichoton#7027778'
    },
    {
      platform: 'BattleNet',
      logo: logo_battle,
      pseudo: 'sath#21830'
    },
    {
      platform: 'Ubisoft',
      logo: logo_ubisoft,
      pseudo: 'Kichoton'
    },
    {
      platform: 'Epic',
      logo: logo_epic,
      pseudo: 'Kichoton'
    },
    {
      platform: 'Xbox',
      logo: logo_xbox,
      pseudo: 'Kichoton'
    },
    {
      platform: 'Nintendo',
      logo: logo_nintendo,
      pseudo: 'Théthé'
    },
    
  ]

  const games = [
    // Valo
    {
      title: 'Valorant',
      slug: 'valorant',
      logo: logo_valorant,
      text: (
        <p>
          Valorant est un jeu vidéo free-to-play de tir à la première personne en multijoueur développé et édité par Riot Games et sorti le 2 juin 2020.
        </p>
      ),
      color: '#FD4556'
    },
    // TFT
    {
      title: 'Teamfight Tactics',
      slug: 'tft',
      logo: logo_tft,
      text: (
        <p>
          Teamfight Tactics (abrégé TFT, parfois Combat Tactique (abrégé CT) en français) est un jeu vidéo de type auto battler développé et édité par Riot Games. Il prend place dans l'univers de League of Legends et est basé sur le jeu Dota Auto Chess (en), où le joueur affronte sept adversaires en ligne, qu'il doit combattre en formant une équipe afin d'être le dernier à rester en vie.
        </p>
      ),
      color: '#DCB253'
    },
    // LOL
    {
      title: 'League Of Legends',
      slug: 'lol',
      logo: logo_lol,
      text: (
        <>
        <p>
          Le mode principal du jeu voit s'affronter deux équipes de 5 joueurs en temps réel dans des parties d'une durée d'environ une demi-heure, chaque équipe occupant et défendant sa propre base sur la carte. Chacun des dix joueurs contrôle un personnage à part entière parmi les plus de 150 qui sont proposés.
        </p>
        <h3>niveau :</h3>
        </>
      ),
      color: '#001A6C'
    },
    // TM
    {
      title: 'Trackmania',
      slug: 'trackmania',
      logo: logo_tm,
      text: (
        <p>
          TrackMania est une franchise de jeux de course atypiques typés arcade qui proposent des pistes peu conventionnelles, avec des virages très relevés, des tremplins et des loopings         
        </p>
      ),
      color: '#7DEEAE'
    },
    // AC
    {
      title: 'Animal Crossing',
      slug: 'ac',
      logo: logo_ac,
      text: (
        <p>
          Animal Crossing est une série de jeux vidéo de simulation de vie développée par Nintendo dans laquelle le joueur emménage dans un village habité par des animaux anthropomorphes.    
          La série est notable pour son système de jeu de type sandbox (sans objectif précis et faisant appel à la curiosité et à la créativité du joueur) et pour son utilisation étendue de l'horloge et du calendrier de la console qui simulent un déroulement en temps réel, ce qui modifie le contenu du jeu en fonction de l'heure, du jour de la semaine et de la date auxquels joue le joueur.        
        </p>
      ),
      color: '#c48d3f'
    },

  ];

  useEffect(() => {
    let buttonValo = document.getElementById('button-valorant');
    buttonValo.classList.add('logo-button-active');
  })

  function handleClickGames(event) {
    const game = event.currentTarget.id.replace('button-','');
    const game_article = document.getElementById('article-'+game);
    
    document.getElementsByClassName('logo-button-active')[0].classList.remove('logo-button-active');
    event.currentTarget.classList.add('logo-button-active');
    // games_info.scrollTo(0, game_article.offsetTop);
    game_article.scrollIntoView({ behavior: 'smooth' });

  }

  const copyGamerTag = (plateform, pseudo) => {
    console.log(plateform)
    navigator.clipboard.writeText(pseudo).then(function() {
      // document.getElementById('tooltip-' + plateform).innerHTML='Copié';
      document.getElementById('logo-' + plateform).setAttribute('data-tooltip-content','Copié');
      setTimeout(function() {
        document.getElementById('logo-' + plateform).setAttribute('data-tooltip-content',pseudo);
      }, 1000);
      console.log(pseudo);
    })
    .catch(function(err) {
      console.error('Erreur lors de la copie dans le presse-papier: ', err);
    });
  }

  return(
    <main id="games-container">
      <nav>
        {games.map((game) => (
          <button id={'button-' + game.slug} className='logo-button' onClick={handleClickGames}
          >
            <span 
              style={{ 
                background: `linear-gradient(90deg, `+ game.color +`55 0%, `+ game.color +` 100%)`,
                boxShadow: `10px 0px 5px`+ game.color
              }}
            ></span>
            <img alt='' src={game.logo}></img>
          </button>
        ))}
      </nav>
      <div id='games-infos'>
        {games.map((game) => (
          <article id={'article-' + game.slug} className='game-article' style={{ 
            boxShadow: `inset 5px 0 0`+ game.color
          }}>
            <h2>{game.title}</h2>
            <p>{game.text}</p>
          </article>
        ))}
      </div>
      
      <aside className='gamertags'>
      {gamertags.map((gamertag) =>(
        <React.Fragment>
          <img 
            id={'logo-' + gamertag.platform} 
            alt='' 
            src={gamertag.logo}
            onClick={() => copyGamerTag(gamertag.platform, gamertag.pseudo)}
            data-tooltip-content={gamertag.pseudo}
          />
          
          <Tooltip 
            id={'tooltip-' + gamertag.platform}
            anchorSelect={'#logo-' + gamertag.platform} 
            place="top"
            variant="light"
            // clickable
          >
            {/* {gamertag.pseudo} */}
          </Tooltip>
        </React.Fragment>
      ))}

      </aside>
    </main>
  )
}