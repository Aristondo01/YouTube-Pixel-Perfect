import './Video.css'
import videosYT from '../../public/videos.json'

console.log(videosYT)

const Video = () => (
    <div className="video-contenedor">
        {
            videosYT.map((video) => (
                <div className="video-contenido">
                    <div key={video.titulo} className="video-imagen" style={{ backgroundImage: `url(${video.imagen})` }}>
                        <div className="time">
                            <div className="texto-time">{video.tiempo}</div>
                        </div>
                    </div>
                    <div className="perfilimagen" style={{ backgroundImage: `url(${video.perfil})` }} />
                </div>
            ))
        }
    </div>
)

export default Video
