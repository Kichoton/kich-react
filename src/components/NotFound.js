import '../style/App.css';
import '../style/NotFound.css';
import gif_notFound from '../assets/gif/404.gif'


export function NotFound(){
    
    return (
      <div className="NotFound">
        
        <h1>404</h1>

        
        <h2>On dirait que ton gank ne s'est pas bien passé...<img alt='' src={gif_notFound}></img></h2>

      </div>
    )
}

 
