function About(props) {
    return <div>
        <div className="blok">
            <form>
                <input className="email-input"  type="email" placeholder="jan@nowak.pl"/>
                <textarea className="mail-text" rows={6} cols={60} placeholder="Treść wiadomości"/>
            </form>
        </div>
        </div>
}
export default About;