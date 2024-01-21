import '../style/Kich.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { TwitchEmbed } from 'react-twitch-embed';
import icon_heart from '../assets/icons/heart-straight.svg';
import icon_star from '../assets/icons/star.svg';


export function Kich(){

  const getToken = async () => {
    try {
      const response = await axios.post('https://id.twitch.tv/oauth2/token', {
        client_id: 'bvy2j0ditfmlrbgya2zkqzn4uqr8dx',
        client_secret: 'sh10nm4rdvtt5sdajtj2kai9as6ovq',
        grant_type: 'client_credentials'
      });
  
      return response.data.access_token;
    } catch (error) {
      console.error(error);
    }
  }; 

  const [subs, setSubs] = useState(0);

  useEffect(() => {
    const fetchSubs = async () => {
      // Utilisez l'API Twitch pour récupérer le nombre de subs
      const token = await getToken();
      const response = await fetch('https://api.twitch.tv/helix/subscriptions?broadcaster_id=Kichoton_', {
        headers: {
          'Client-ID': 'bvy2j0ditfmlrbgya2zkqzn4uqr8dx',
          'Authorization': 'Bearer ' + token
        }
      });
      const data = await response.json();
      setSubs(data.total);
    };

    fetchSubs();
  }, []);


  useEffect(() => {
    document.title = "Kichoton ??";
  });
    return(
      <main className="kich-container">
        <h1>Kichoton c'est ...</h1>
        <div className="kich-theo">
          <span className='triangle-theo-top'></span>
          <span className='triangle-theo-bot'></span>
          <p>... moi, Théo Saez, un streameur originaire de Bordeaux et récemment arrivé a Montréal.</p>
          <p>L'aventure a débuté en 2022 sur la plateforme Twitch et se poursuit doucement, accompagné de mes copains, avec des streams les mercredis, vendredis et dimanches.</p>
          <p>L'objectif de cette chaine est clair : <strong><u>le fun</u></strong>.</p>
          <p>Vous allez pouvoir me voir évoluer sur des jeux comme Rocket League, Call of Duty, League of Legends et pleins d'autres.</p>
          <p>Venez discuter avec nous de sujets en tout genre et pourquoi pas créer quelques événements...</p>
          <p>Passionné de jeux vidéos et de nouvelles-technologies, cette chaine sera l'occasion d'échanger, de discuter et de partager au max.</p>


          <hr></hr>
          <span className='btn-twitch-container'>

            <span id="btn-follow" className="kich-btn kich-btn-current">
              <span className="kich-btn-bg">
                  <a href='https://www.twitch.tv/kichoton_' target='_blank' rel='noreferrer' id="follow" className="kich-btn-touch" aria-label="Open">
                    <img alt='information icon' src={icon_heart}></img>&nbsp;Suivre
                  </a>
              </span>
            </span>
            <span id="btn-sub" className="kich-btn kich-btn-current">
              <span className="kich-btn-bg">
                  <a href='https://www.twitch.tv/subs/kichoton_' target='_blank' rel='noreferrer' id="sub" className="kich-btn-touch" aria-label="Open">
                    <img alt='information icon' src={icon_star}></img>&nbsp;Abonnement
                  </a>
              </span>
            </span>
          </span>
        </div>

        <div className='kich-stream'>
          <TwitchEmbed
            channel="Kichoton_"
            id="twitch-embed"
            theme="dark"
          />
        </div>




      </main>
      
    )
  }