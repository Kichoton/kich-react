import logo from '../assets/logo_kich_white.png';
import '../style/Home.css'
import { useEffect } from 'react'; 

export function Home()
{
    // Utilisez useEffect pour simuler window.onload
    useEffect(() => {
      document.getElementById("hp-container").style.height = window.innerHeight + 'px';
      
    });
  return(
      <main id="hp-container">
          <img className="hp-img" alt="Kichoton's logo" src={logo}></img>
      </main>
  );
}