import { Link } from "react-router-dom";
import "./Faq.css";
function Faq(props) {
    return <div>
        <div className="container-faq">
            <h1 className="h1-faq">
                Jaka jest cena kokard?
            </h1>
            <p className="p-text">W zależności od wielkości kokard i haftu. Ceny oscylują w granicach od 20 do 35 zł.</p>
        </div>
        <div className="container-faq">
            <h1 className="h1-faq">
                Czy można zamówić spresonalizowaną kokardę?
            </h1>
            <p className="p-text">Tak. Wystarczy napisać maila/wiadomość prywatną by omówić szczegóły. Można zrobić to w zakładce <Link to="/about">Kontakt</Link></p>
        </div>
    </div>
}
export default Faq;