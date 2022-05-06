import './Carrusel.css'

const opciones = ['Barra', 'Equimapiento de ejercicio', 'Hollow Knight', 'Clash Royale', 'Mixes', 'El Rubius', 'Jedis',
    'Calistenia', 'Cine de ciencia ficción', 'Arte', 'Musica', 'Bitcoin', 'Franco Escamilla',
    'Personajes', 'Programación', 'Videojuego de sigilo', 'Subidas recientes',
    'En directo', 'Visto', 'Novedades para ti']

const opcionesshuffle = opciones.sort(() => 0.5 - Math.random())
const Carrusel = () => (
    <div>
        <hr className="hr-carrusel" />
        <div className="Contenido">
            <div className="boton-carruselw">
                <div className="cat1">Todo</div>
            </div>
            {
                opcionesshuffle.map((op) => (
                    <div key={op} className="boton-carruselb">
                        <div className="cat">{op}</div>
                    </div>
                ))

            }
        </div>
        <hr className="hr-carrusel" />
    </div>
)
export default Carrusel
