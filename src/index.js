import {createRoot} from "react-dom/client"
import styles from './style.js'
const App = () => {
    return(
        
        <div css={styles.indexs}>
        </div>)
}

const root = createRoot(document.getElementById('root'))
root.render(<App/>)