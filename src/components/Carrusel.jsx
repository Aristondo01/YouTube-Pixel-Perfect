import './Carrusel.css'

const opciones = ['Barra', 'Equimapiento de ejercicio', 'Hollow Knight', 'Clash Royale', 'Mixes', 'El Rubius', 'Jedis'] /* ,
    'Calistenia', 'Cine de ciencia ficción', 'Arte', 'Musica', 'Bitcoin', 'Franco Escamilla',
    'Personajes', 'Programación', 'Videojuego de sigilo', 'Subidas recientes',
    'En directo', 'Visto', 'Novedad para ti'] */
const Carrusel = () => (
    <div>
        <hr className="hr-carrusel" />
        <div className="Contenido">
            <div className="boton-carruselw">Todo</div>
            {
                opciones.map((op) => (
                    <div className="boton-carruselb">{op}</div>
                ))

            }
        </div>
        <hr className="hr-carrusel" />
    </div>
)
export default Carrusel
