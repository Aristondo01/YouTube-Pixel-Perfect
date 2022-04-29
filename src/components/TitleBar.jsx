import './TitleBar.css'

const TitleBar = () => (
    <div className="Barra">
        <div className="left">
            <button type="button" className="lines">{}</button>
            <div className="Logo" />
            <div className="Country">GT</div>
        </div>
        <div className="search">
            <input type="text" placeholder="Buscar" />
            <button type="button" className="lupa">{}</button>
            <button type="button" className="micro">{}</button>
        </div>
        <div className="right">
            <div className="camera" />
            <div className="box" />
            <div className="bell" />
            <div className="profile" />
        </div>
    </div>
)

export default TitleBar
