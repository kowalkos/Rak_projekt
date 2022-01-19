import "./About.css"
function About(props) {
    return <div>
                   <h1 >Kontakt</h1>
        <div className="blok">
 
            <form>
                <div className="email-input"><h4>Podaj email:</h4>
                <input   type="email" placeholder="jan@nowak.pl"/></div>
                <textarea className="mail-text" rows={6} cols={60} placeholder="Treść wiadomości"/>
                <button className="button-send">Wyślij wiadomość</button>
            </form>
        </div>
        </div>
}
export default About;