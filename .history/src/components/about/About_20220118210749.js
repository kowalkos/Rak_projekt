import "./About.css"
function About(props) {
    return <div>
        <div className="blok">
            <h1 >Kontakt</h1>
            <form>
                <input className="email-input"  type="email" placeholder="jan@nowak.pl"/>
                <textarea className="mail-text" rows={6} cols={60} placeholder="Treść wiadomości"/>
                <button className="button-send">Wyślij wiadomość</button>
            </form>
        </div>
        </div>
}
export default About;