import "./campoTexto.css"

const CampoTexto = (props) => {
    const placeholderModificado = `${props.placeholder}...`
    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado}
        ></input>
    </div>
}

export default CampoTexto