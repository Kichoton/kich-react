import '../style/Kich.css'
import { useEffect } from 'react'


export function Kich(){
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
      </main>
    )
  }