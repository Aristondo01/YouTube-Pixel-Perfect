import './Menu.css'
import casa from '../Images/Inicio.svg'
import explorar from '../Images/explorar.svg'
import shorts from '../Images/shorts.svg'
import sub from '../Images/suscripciones.svg'
import bib from '../Images/Biblioteca.svg'
import Historial from '../Images/Historial.svg'
import Myvideos from '../Images/Mis videos.svg'
import tarde from '../Images/tarde.svg'
import liked from '../Images/Videos que me gustan.svg'
import more from '../Images/showmore.svg'
import btc from '../Images/BTC.jpg'
import chuy from '../Images/Chuy.jpg'
import enchufe from '../Images/enchufe.jpg'
import sergio from '../Images/Sergio.jpg'
/* import xn from '../Images/XN.jpg'
import xifra from '../Images/Xifra.jpg'
import grefg from '../Images/Grefg.jpg' */

const menu = [['Explorar', explorar], ['Shorts', shorts], ['Suscripciones', sub]]
const menu2 = [['Biblioteca', bib], ['Historial', Historial], ['Mis vídeos', Myvideos],
    ['Ver más tarde', tarde], ['Vídeos que me gustan', liked], ['Mostrar más', more]]
const menu3 = [['Bitcoin al dia', btc], ['Chuy Almada', chuy], ['enchufetv', enchufe],
    ['Sergio Peñuñuri', sergio]]/* , ['TheGrefg', grefg],
['Xifra Lifestyle', xifra], ['Xifra Nation', xn]] */

const Menu = () => (
    <div className="Menu-Container">
        <div className="Boton-Container">
            <div className="Icon-container" style={{ backgroundImage: `url(${casa})` }} />
            <text>Inicio</text>
        </div>
        {menu.map((obj) => (
            <div className="Boton1-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${obj[1]})` }} />
                <text>{obj[0]}</text>
            </div>
        ))}
        <hr />
        {menu2.map((obj) => (
            <div className="Boton1-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${obj[1]})` }} />
                <text>{obj[0]}</text>
            </div>
        ))}
        <hr />
        <text className="titulo">SUSCRIPCIONES</text>
        {menu3.map((obj) => (
            <div className="Boton1-Container">
                <div className="perfil-container" style={{ backgroundImage: `url(${obj[1]})` }} />
                <text className="profile-name">{obj[0]}</text>
            </div>
        ))}
    </div>
)

export default Menu
