import './Produkt.css';
import kokarda1 from '../../img/kokarda1.jpg';
import kokarda2 from '../../img/kokarda2.jpg';
import kokarda3 from '../../img/kokarda3.jpg';
import kokarda4 from '../../img/kokarda4.jpg';
import kokarda5 from '../../img/kokarda5.jpg';
import kokarda6 from '../../img/kokarda6.jpg';
import spinka1 from '../../img/spinka1.png';
import spinka2 from '../../img/spinka2.png';
function Produkt(props) {


    return <div className='wrapper'>
        <div className='references'>
          <h1>Katalog Produktów</h1>
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
                    <h3>Kremowa kokarda z Bukietem</h3>
                </div>
                <div className='items'>
                    <img src={kokarda5} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className='items'>
                    <img src={kokarda6} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
        </section>

        <section id='spinki'>
            <h2 className='spinki'>Spinki</h2>
            <div className='container2'>

                <div className='items'>
                    <img src={spinka1} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
                <div className='items'>
                    <img src={spinka2} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
            </div>
        </section>
    </div>;

}

export default Produkt;