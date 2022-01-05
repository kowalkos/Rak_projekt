
import { Link } from 'react-router-dom';
import logo from '../../img/logoso.png';
import './NavBar.css';
function NavBar(props) {


    function toggle() {
        const primaryNav = document.querySelector('.primary-navigation');
        const navToggle = document.querySelector('.mobile-nav-toggle');
        console.log(primaryNav);
        console.log(navToggle);

        const visibility = primaryNav.getAttribute('data-visible');
        if (visibility === "false") {
            primaryNav.setAttribute('data-visible', true);
            navToggle.setAttribute('aria-expanded', true);
        }
        else if (visibility === "true") {
            primaryNav.setAttribute('data-visible', false);
            navToggle.setAttribute('aria-expanded', false);
        }
        console.log(visibility);
    }
    return <header className='primary-header'>

        
        <button className='mobile-nav-toggle'
            aria-controls='primary-navigation'
            onClick={toggle} >
            <span className='sr-only'></span>
        </button>

        <nav>
            <ul id='primary-navigation' aria-expanded="false" data-visible="false" className='primary-navigation flex'>
                {/* <li>
                    <Link to='/' >
                        <span aria-hidden="true">00</span>
                        Strona główna
                    </Link>
                </li> */}
                <li>
                    <Link to='/produkty' >
                        <span aria-hidden="true">01</span>
                        Katalog Produktów
                    </Link>
                </li>
                <li>
                    <Link to='/galeria' >
                        <span aria-hidden="true">02</span>
                        Galeria
                    </Link>
                </li>
                <li>
                    <Link to='/Faq' >
                        <span aria-hidden="true">03</span>
                        FAQ
                    </Link>
                </li>
                <li>
                    <Link to='/about' >
                        <span aria-hidden="true">04</span>
                        Kontakt
                    </Link>
                </li>
            </ul>
        </nav>
        <div className='logo'>
        <Link to='/' >
            <img  src={logo} alt='Logo'></img>
            </Link>
        </div>

    </header>;

    // return <div className='main-nav-bar' >
    //     <div className='nav-bar__roll-down' onhover={onHoverHandle} >
    //         Katalog Produktów
    //         <div id='nav-bar__inside'>
    //             Kokardy
    //         </div>
    //         <div id='nav-bar__inside'>
    //             Kokardy
    //         </div>
    //         <div id='nav-bar__inside'>
    //             Kokardy
    //         </div>
    //         <div id='nav-bar__inside'>
    //             Kokardy
    //         </div>height:"20px";width
    //     </div >
    //     <div className='nav-bar'>
    //         O mnie
    //     </div>
    //     <div className='nav-bar'>
    //         FAQ
    //     </div>
    //     <div className='nav-bar'>
    //         Kontakt
    //     </div>

    // </div>;
}

export default NavBar;