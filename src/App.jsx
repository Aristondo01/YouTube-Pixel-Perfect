import TitleBar from './components/TitleBar.jsx'
import Menu from './components/Menu.jsx'
import Carrusel from './components/Carrusel.jsx'
import Video from './components/Video.jsx'

import './index.css'
/* Sebastian Aristondo Pérez
   Fecha de finalización 12/5/2022
   Recreación Youtube
*/
const App = () => (

    <div className="indexs">
        <TitleBar />
        <div className="cuerpo">
            <Menu />
            <div className="videos">
                <Carrusel />
                <Video />
            </div>
        </div>
    </div>
)

export default App
