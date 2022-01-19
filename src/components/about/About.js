import "./About.css"
function About(props) {
    return <div>

        <div className="blok">
 
            <form>
                <span><h4>Podaj email:</h4>
                <input className="email-input"  type="email" placeholder="jan@nowak.pl"/></span>
                <textarea className="mail-text" rows={6} cols={60} placeholder="Treść wiadomości"/>
                <button className="button-send">Wyślij wiadomość</button>
            </form>
        </div>
        </div>
}
export default About;