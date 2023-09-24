import "./equipo.css"

const Equipo = (props) => {

    const {colorPrimario, colorSecundario, titulo} = props.datos

    const styleH3 =  {borderColor: colorPrimario}

    const colorSec = {
        backgroundColor: colorSecundario
    }

    
    return <section className="equipo" style={ colorSec }>
        <h3 style={styleH3}>{titulo}</h3>
        <div className="colaboradores"></div>
    </section>
}

export default Equipo