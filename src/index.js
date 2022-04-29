import { createRoot } from 'react-dom/client'
import TitleBar from './components/TitleBar.jsx'
import './index.css'

const App = () => (

    <div className="indexs">
        <TitleBar />
    </div>
)

const root = createRoot(document.getElementById('root'))
root.render(<App />)
