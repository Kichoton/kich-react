import logo from '../assets/logo_kich_white.png';
import '../style/Home.css'

export function Home()
{
  return(
      <main className="hp-container">
          <img className="hp-img" alt="Kichoton's logo" src={logo}></img>
      </main>
  );
}