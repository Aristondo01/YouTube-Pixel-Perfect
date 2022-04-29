import './TitleBar.css'

const TitleBar = () => (
    <div className="Barra">
        <div className="search">
            <input type="text" placeholder="Buscar" />
            <button type="button" className="lupa">{}</button>
            <button type="button" className="micro">{}</button>
        </div>
    </div>
)

export default TitleBar
