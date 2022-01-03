

import './NavBar.css';
function NavBar(props) {

    function onHoverHandle()
    {

    }
    return <div class="nav-container">
    <p style="text-align: center;">hover</p>
        <nav id = 'navbar'>
    
            <div class="link-container ">
                <a href='#' class="nav-link">Home</a>
            </div>
    
            <div class="link-container">
                <a href='#' class="nav-link">FAQ</a>
            </div>
            <div class="link-container">
                <a href='#' class="nav-link">List a Coin</a>
            </div>
    
            <div class="link-container">
                <a  class="nav-link">Contact Us</a>
            </div>
        </nav>
    </div>;
}

export default NavBar;
/*<div className='main-nav-bar' >
<div className='nav-bar__roll-down' onhover={} >
    Katalog Produktów
    <div className='nav-bar__inside'>
        Kokardy
    </div>
    <div className='nav-bar__inside'>
        Kokardy
    </div>
    <div className='nav-bar__inside'>
        Kokardy
    </div>
    <div className='nav-bar__inside'>
        Kokardy
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

</div>*/