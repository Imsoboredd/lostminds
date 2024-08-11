
import './index.css';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
          
        {/*cabeçalho*/}  
          <header className='cabecalho'>

              <nav>
                  <img src="/assets/images/logopreta.png" alt="" className='img'/>
                   <div className='linha'></div>
                    <div className='txt'>
                     <Link to="/Sobre-nos" style={{textDecoration: 'none', color: 'rgb(199, 111, 11)'}}><p className='links'>Sobre nós</p></Link>
                      <p>Albuns</p>
                      <p >Lançamentos</p>
                    </div>  
                  <img src="/assets/images/ofc.png" alt="" className='logoofc' />  

                  {/*logos como insta etc*/}
                    <div className='plataformas'>
                      <img src="/assets/images/insta-icon.png.png" alt="" />
                      <img src="/assets/images/spotify-icon.png.png" alt="" />
                      <img src="/assets/images/youtube-logo.png" alt="" />
                      <img src="/assets/images/tiktok.png" alt="" />
                    </div>

              </nav>

          </header>
    </div>
  );
}

