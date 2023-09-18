import { useState } from "react";

import "./miOrg.css"


const MiOrg = () => {

    //console.log(useState());

    const [mostrar, actualizarMostrar] = useState(true)
    const [nombre, actualizarNombre] = useState()

    const manejarClick = () => {
        console.log("mostrar/ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar)
    }


    return <section className="orgSection">
                <h3 className="title"> Mi Organizacion {nombre}</h3>
                <img src="/img/add.png" alt="img Add" onClick={manejarClick}></img>
            </section>
}

export default MiOrg