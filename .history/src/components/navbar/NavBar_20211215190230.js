

import './NavBar.css';
function NavBar(props) {

    return <div className='main-nav-bar' >
        <div className='nav-bar__roll-down'>
            Katalog Produktów
            <div className='nav-bar__inside'>

            </div>
        </div >
        <div className='nav-bar'>
            O mnie
        </div>
        <div className='nav-bar'>
            FAQ
        </div>
        <div className='nav-bar'>
            Kontakt
        </div>

    </div>;
}

export default NavBar;