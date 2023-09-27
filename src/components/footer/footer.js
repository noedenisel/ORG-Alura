import "./footer.css"

const Footer = () => {
    return <footer className="footer" style={{ backgroundImage: "url(/img/footer.png)"}}>
                <div className="redes">
                    <a href="https://www.linkedin.com/in/noedenisel">
                        <img src="/img/linkedin.png" alt="logo linkedin"/>
                    </a>
                </div>
                {/* <img src="/img/Logo.png"/> */}
                <strong>Desarrollado por Noedenisel by Alura Latam G5</strong>

    </footer>
}

export default Footer