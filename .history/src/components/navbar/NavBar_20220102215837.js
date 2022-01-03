

import './NavBar.css';
function NavBar(props) {


    return <header className='primary-header flex'>
        <div style={{width:"10px",height:"20px",backgroundColor:"red"}}>

        </div>
        <nav >
            <ul className='flex'>
                <li>
                    <a href=''>
                        <span>00</span>
                    </a>
                </li>
                <li>
                    <a href=''>
                        <span>01</span>
                    </a>
                </li>
                <li>
                    <a href=''>
                        <span>02</span>
                    </a>
                </li>
                <li>
                    <a href=''>
                        <span>03</span>
                    </a>
                </li>
            </ul>
        </nav>
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
    //         </div>
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