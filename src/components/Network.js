import { useEffect } from 'react'

import logo_tiktok from '../assets/logo_networks/tiktok-logo.png'
import logo_insta from '../assets/logo_networks/instagram.png'
import logo_x from '../assets/logo_networks/x-logo.png'
import logo_twitch from '../assets/logo_networks/twitch.png'
import logo_kick from '../assets/logo_networks/kick.png'
import logo_discord from '../assets/logo_networks/discord.svg'

import '../style/Network.css'

export function Network(){

  useEffect(() => {
    document.title = "Kichoton - Réseaux";
  });
    
  useEffect(() => {
    document.getElementById("network-container").style.height = window.innerHeight + 'px';
    
  });
  
  const networks = [
    {
      index: 0,
      title: 'Tiktok',
      logo: logo_tiktok,
      url: 'https://www.tiktok.com/@kichoton',
      color: '#040404'
    },
    {
      index: 1,
      title: 'Insta',
      logo: logo_insta,
      url: 'https://www.instagram.com/theosaez_/',
      color: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)'
    },
    {
      index: 2,
      title: 'X',
      logo: logo_x,
      url: 'https://twitter.com/kich_oton',
      color: '#111'
    },
    {
      index: 3,
      title: 'Twitch',
      logo: logo_twitch,
      url: 'https://twitch.tv/kichoton_',
      color: '#6441a5'
    },
    {
      index: 4,
      title: 'Kick',
      logo: logo_kick,
      url: 'https://kick.com/kichoton',
      color: '#000'
    },
    {
      index: 5,
      title: 'Discord',
      logo: logo_discord,
      url: 'https://discord.gg/KuXbYdVKZC',
      color: '#5865F2'
    },

  ];
  return(
    <main id="network-container">
      <h1>réseaux</h1>
        {networks.map((network) => (
          <a
            key={network.index}
            href={network.url}
            target='_blank'
            rel="noreferrer"
            className={'network-div'}
            style={{  
              background: network.color
              }}
          >
            <img className='network-logo' alt={network.title} src={network.logo} ></img>

          </a>
        ))}

    </main>
  )
}