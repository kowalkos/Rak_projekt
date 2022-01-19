import './Produkt.css';
import kokarda1 from '../../img/kokarda1.jpg';
import kokarda2 from '../../img/kokarda2.jpg';
import kokarda3 from '../../img/kokarda3.jpg';
import kokarda4 from '../../img/kokarda4.jpg';
import kokarda5 from '../../img/kokarda5.jpg';
import kokarda6 from '../../img/kokarda6.jpg';
import spinka1 from '../../img/spinka1.png';
import spinka2 from '../../img/spinka2.png';
import { Link } from 'react-router-dom';
function Produkt(props) {


    return <div className='wrapper'>
        <div className='references'>
            <h1 className='katalog'>Katalog Produktów</h1>
            <Link to='/Faq' >
                <h5 className='kupno'>Jak kupić?</h5>
            </Link>
        </div>

        <section id='kokardy'>

            <h2>Kokardy</h2>
            <div className='container'>

                <div className='items'>
                    <img src={kokarda1} />
                    <h3>Kremowa kokarda z lilią</h3>
                </div>
                <div className='items'>
                    <img src={kokarda2} />
                    <h3>Leśna kokarda</h3>
                </div>
                <div className='items'>
                    <img src={kokarda3} />
                    <h3>Kokarda czerwone róże</h3>
                </div>
                <div className='items'>
                    <img src={kokarda4} />
                    <h3>Siwa kokarda z bukietem</h3>
                </div>
                <div className='items'>
                    <img src={kokarda5} />
                    <h3>Biała kokarda z bukietem</h3>
                </div>
                <div className='items'>
                    <img src={kokarda6} />
                    <h3>Biała kokarda z kłosem</h3>
                </div>
            </div>
        </section>

        <section id='spinki'>
            <h2 className='spinki'>Spinki</h2>
            <div className='container2'>

                <div className='items'>
                    <img src={spinka1} />
                    <h3>Czerwono-zielone spinki</h3>
                </div>
                <div className='items'>
                    <img src={spinka2} />
                    <h3>Czerwone spinki z drzewami</h3>
                </div>
            </div>
        </section>
    </div>;
}
export default Produkt;