import './Menu.css'
import casa from '../Images/casa.svg'
import explorar from '../Images/explorar.svg'
import shorts from '../Images/shorts.svg'
import sub from '../Images/suscripciones.svg'

const Menu = () => (
    <scroll className="Menu-Container">
        <div className="Boton-Container">
            <div className="Icon-container" style={{ backgroundImage: `url(${casa})` }} />
            <text>Inicio</text>
        </div>
        <div className="Boton1-Container">
            <div className="Icon-container" style={{ backgroundImage: `url(${explorar})` }} />
            <text>Explorar</text>
        </div>
        <div className="Boton1-Container">
            <div className="Icon-container" style={{ backgroundImage: `url(${shorts})` }} />
            <text>Shorts</text>
        </div>
        <div className="Boton1-Container">
            <div className="Icon-container" style={{ backgroundImage: `url(${sub})` }} />
            <text>Suscripciones</text>
        </div>
        <hr />

    </scroll>
)

export default Menu
