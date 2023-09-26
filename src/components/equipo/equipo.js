import Colaborador from "../colaborador/colabordador"
import "./equipo.css"

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo} = props.datos
    const { colaboradores } = props

    const styleH3 =  {borderColor: colorPrimario}

    const colorSec = {
        backgroundColor: colorSecundario
    }

    
    return <section className="equipo" style={ colorSec }>
        <h3 style={styleH3}>{titulo}</h3>
        <div className="colaboradores">
            {/* <Colaborador/> */}
            {
                colaboradores.map( ( colaborador, index ) => <Colaborador datos = {colaborador} key = {index}/>)
            }
        
        </div>
    </section>
}

export default Equipo