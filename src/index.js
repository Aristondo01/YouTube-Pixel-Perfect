import { createRoot } from 'react-dom/client'
import TitleBar from './components/TitleBar.jsx'
import Menu from './components/Menu.jsx'
import './index.css'

const App = () => (

    <div className="indexs">
        <TitleBar />
        <Menu />
    </div>
)

const root = createRoot(document.getElementById('root'))
root.render(<App />)
