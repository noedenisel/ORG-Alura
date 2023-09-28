import Colaborador from "../colaborador/colabordador"
import "./equipo.css"

const Equipo = (props) => {

    const { colorPrimario, colorSecundario, titulo } = props.datos
    const { colaboradores, eliminarColaborador } = props

    // console.log(colaboradores.length > 0);

    const styleH3 =  {borderColor: colorPrimario}

    const colorSec = {
        backgroundColor: colorSecundario
    }

    
    return <> 
        { 
            colaboradores.length > 0 &&
                <section className="equipo" style={ colorSec }>
                    <input
                        type="color"
                    
                    
                    
                    />
                    <h3 style={styleH3}>{titulo}</h3>
                    <div className="colaboradores">
                        {/* <Colaborador/> */}
                        {
                            colaboradores.map( ( colaborador, index ) => 
                                < Colaborador 
                                    datos = {colaborador} 
                                    key = {index} 
                                    colorPrimario = { colorPrimario }
                                    eliminarColaborador = { eliminarColaborador }
                                /> )
                        }

                    </div>
                </section>
        }
    </>
}

export default Equipo