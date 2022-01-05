import logo from '../assets/images/logo.svg'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import twitter from '../assets/images/twitter.svg'
import youtube from '../assets/images/youtube.svg'
import chihiro from '../assets/images/chihiro.svg'
import play from '../assets/images/play.svg'
import '../styles/home.scss';

export function Home(){
    return(
        <div id="page-home">
            <header>
                <img src={logo} alt="logo" className="logo"/>
                <div className="social">
                    <button><img src={facebook} alt="facebook"/></button>
                    <button><img src={instagram} alt="instagram"/></button>
                    <button><img src={twitter} alt="twitter"/></button>
                    <button><img src={youtube} alt="youtube"/></button>
                </div>
            </header>
            <main>
                <strong>HAYAO MIYAZAKI</strong>
                <h1>A VIAGEM DE CHIHIRO</h1>
                <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
                <div className="botoes">
                <button type="button" onClick={(e) => {e.preventDefault();window.open('https://www.netflix.com/br/','_blank');}} className="botao-agora"><img src={play} alt="play"/>ASSISTIR AGORA</button>
                <button type="button" onClick={(e) => {e.preventDefault();window.open('https://www.youtube.com/watch?v=ByXuk9QqQkk','_blank');}}className="botao-trailer">ASSISTA O TRAILER</button>
                </div>
            </main>
            <div className="content-ilustra">
                <img src={chihiro} alt="chihiro" className="chihiro"/>
            </div>
        </div>
    );
}

export default Home;