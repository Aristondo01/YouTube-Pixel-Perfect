import { createRoot } from 'react-dom/client'
import TitleBar from './components/TitleBar.jsx'
import Menu from './components/Menu.jsx'
import Carrusel from './components/Carrusel.jsx'
import './index.css'

const App = () => (

    <div className="indexs">
        <TitleBar />
        <div className="cuerpo">
            <Menu />
            <Carrusel />
        </div>
    </div>
)

const root = createRoot(document.getElementById('root'))
root.render(<App />)
