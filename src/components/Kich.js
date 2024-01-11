import '../style/Kich.css'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { TwitchEmbed } from 'react-twitch-embed';


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
           <p>... moi, Théo Saez, un streameur Francais, recemment arrivé a Montréal.</p>
          <p>L'aventure Twitch débute en 2022 sur la plateforme Twitch.</p>
          <p>L'objectif de cette chaine est de se détendre, jouer entre amis, se détendre grace a des mates tous aussi drole, serieux, tryhardeur les uns que les autres.</p>
          <hr></hr>
  
          <p>Passionné de jeux vidéos, le streaming permet de partager cet amour, mais également de partager ou faire découvrir d'autre centres d'interets tel que le BMX</p>
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