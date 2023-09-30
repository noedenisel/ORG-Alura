import Colaborador from "../colaborador/colabordador"
import hexToRgba from "hex-to-rgba"
import "./equipo.css"

const Equipo = (props) => {

    const { colorPrimario, titulo, id } = props.datos
    const { colaboradores, eliminarColaborador , actualizarColor, like} = props

    // console.log(colaboradores.length > 0);

    const styleH3 =  {borderColor: colorPrimario}

    const colorSec = {
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    
    return <> 
        { 
            colaboradores.length > 0 &&
                <section className="equipo" style={ colorSec }>
                    <input className="input-color"
                        type="color"
                        value={ hexToRgba(colorPrimario, 0.6) }
                        onChange={(event) => {
                            console.log(event.target.value);
                            actualizarColor(event.target.value, id);
                        }}
                    
                    
                    
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
                                    like = {like}
                                /> )
                        }

                    </div>
                </section>
        }
    </>
}

export default Equipo