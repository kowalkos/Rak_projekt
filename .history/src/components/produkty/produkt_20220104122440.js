import './Produkt.css';
function Produkt(props) {


    return <div>
        <div className='references'>
        <a href='#kokardy'>
            <h1 >Kokardy</h1>
        </a>
        <a href='#spinki'>
            <h1 >Spinki</h1>
        </a>
        </div>
        <div style={{height:"1000px"}}></div>
        <section id='klasa'>
            <h1>jakaś sekcja</h1>
        </section>
    </div>;

}

export default Produkt;