import { useState } from "react";

import "./miOrg.css"


const MiOrg = (props) => {

    //console.log(useState());

    const [mostrar, actualizarMostrar] = useState(true)


    const manejarClick = () => {
        console.log("mostrar/ocultar elemento", !mostrar);
        actualizarMostrar(!mostrar)
    }


    return <section className="orgSection">
                <h3 className="title"> Mi Organizacion</h3>
                <img src="/img/add.png" alt="img Add" onClick={props.cambiarMostrar}></img>
            </section>
}

export default MiOrg