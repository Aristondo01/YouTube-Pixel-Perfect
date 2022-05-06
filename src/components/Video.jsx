import './Video.css'
import videosYT from '../../public/videos.json'

const randomvideos = videosYT.sort(() => 0.5 - Math.random())

const Video = () => (
    <div className="video-contenedor">
        {
            randomvideos.map((video) => (
                <div key={video.titulo} className="video-contenido">
                    <div className="video-imagen" style={{ backgroundImage: `url(${video.imagen})` }}>
                        <div className="time">
                            <div className="texto-time">{video.tiempo}</div>
                        </div>
                    </div>
                    <div className="footer-videos">
                        <div className="perfilimagen" style={{ backgroundImage: `url(${video.perfil})` }} />
                        <div className="footer-texto">
                            <div className="titulo-video">{video.titulo}</div>
                            <div className="footer-videos">
                                <div className="creador-contenido">{video.creador}</div>
                                { video.verificado && <div className="verificatedimg" />}
                            </div>
                            <div className="vistas-contenido">{video.vistas}</div>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
)

export default Video
