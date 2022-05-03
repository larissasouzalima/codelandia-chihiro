import logo from '../assets/images/logo.svg'
import facebook from '../assets/images/facebook.svg'
import instagram from '../assets/images/instagram.svg'
import twitter from '../assets/images/twitter.svg'
import youtube from '../assets/images/youtube.svg'
import ilustracao from '../assets/images/ilustracao.png'
import play from '../assets/images/play.svg'
import '../styles/home.scss';

export function Home(){
    return(
        <>
            <header className="cabecalho">
                <img src={logo} alt="logo" className="logo"/>
                <div className="social">
                    <a href='#'>
                        <span><img src={facebook} alt="facebook"/></span>
                        <span><img src={instagram} alt="instagram"/></span>
                        <span><img src={twitter} alt="twitter"/></span>
                        <span><img src={youtube} alt="youtube"/></span>
                    </a>
                </div>
            </header>
            <div className="principal">
            <aside>
                <strong>HAYAO MIYAZAKI</strong>
                <h1>A VIAGEM DE CHIHIRO</h1>
                <p>Chihiro chega a um mundo mágico dominado por uma bruxa. Aqueles que a desobedecem são transformados em animais.</p>
                <div className="botoes">
                    <button type="button" onClick={(e) => {e.preventDefault();window.open('https://www.netflix.com/br/','_blank');}} className="botao-agora"><img src={play} alt="play"/>ASSISTIR AGORA</button>
                    <button type="button" onClick={(e) => {e.preventDefault();window.open('https://www.youtube.com/watch?v=ByXuk9QqQkk','_blank');}}className="botao-trailer">ASSISTA O TRAILER</button>
                </div>
            </aside>
                <img src={ilustracao} alt="ilustracao" className="ilustracao"/>
        </div>
        </>
    );
}

export default Home;