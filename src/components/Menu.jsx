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
import xn from '../Images/XN.jpg'
import xifra from '../Images/Xifra.jpg'
import grefg from '../Images/Grefg.jpg'
import ytp from '../Images/YTP.svg'
import vg from '../Images/videogames.svg'
import directo from '../Images/directo.svg'
import learn from '../Images/learn.svg'
import sport from '../Images/sport.svg'
import config from '../Images/config.svg'
import denuncia from '../Images/historiald.svg'
import ayuda from '../Images/Ayuda.svg'
import sugerencia from '../Images/sugerencia.svg'

const menu = [['Explorar', explorar], ['Shorts', shorts], ['Suscripciones', sub]]

const menu2 = [['Biblioteca', bib], ['Historial', Historial], ['Mis vídeos', Myvideos],
    ['Ver más tarde', tarde], ['Vídeos que me gustan', liked], ['Mostrar más', more]]

const Suscripciones = [['Bitcoin al dia', btc], ['Chuy Almada', chuy], ['enchufetv', enchufe],
    ['Sergio Peñuñuri', sergio], ['TheGrefg', grefg], ['Xifra Lifestyle', xifra],
    ['Xifra Nation', xn]]

const moreYT = [['YouTube Premium', ytp], ['Videojuegos', vg], ['Directo', directo],
    ['Aprendizaje', learn], ['Deportes', sport]]

const extras = [['Configuración', config], ['Historial de denuncias', denuncia], ['Ayuda', ayuda],
    ['Enviar sugerencia', sugerencia]]

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
        {Suscripciones.map((obj) => (
            <div className="Boton1-Container">
                <div className="perfil-container" style={{ backgroundImage: `url(${obj[1]})` }} />
                <text className="profile-name">{obj[0]}</text>
            </div>
        ))}
        <div className="Boton1-Container">
            <div className="Icon-container" style={{ backgroundImage: `url(${more})` }} />
            <text className="profile-name">Mostrar 2 más</text>
        </div>
        <hr />
        <text className="titulo">MÁS DE YOUTUBE</text>
        {moreYT.map((obj) => (
            <div className="Boton1-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${obj[1]})` }} />
                <text>{obj[0]}</text>
            </div>
        ))}
        <hr />
        {extras.map((obj) => (
            <div className="Boton1-Container">
                <div className="Icon-container" style={{ backgroundImage: `url(${obj[1]})` }} />
                <text>{obj[0]}</text>
            </div>
        ))}
        <hr />
        <div className="condiciones">Información Prensa</div>
        <div className="condiciones">Derechos de autor Contactar</div>
        <div className="condiciones">Creadores Publicidad</div>
        <div className="condiciones">Desarrolladores</div>
        <div className="espacio">s</div>
        <div className="condiciones">Términos Provacidad</div>
        <div className="condiciones">Políticas y seguridad</div>
        <div className="condiciones">Cómo funciona YouTube</div>
        <div className="condiciones">Probar funciones nuevas</div>
        <div className="espacio">s</div>
        <div className="registro">© 2022 Google LLC</div>
        <div className="espacio">s</div>

    </div>
)

export default Menu
