

import './NavBar.css';
function NavBar(props) {
    
    const primaryNav=document.querySelector('.primary-navigation');
    const navToggle=document.querySelector('.mobile-nav-toggle');
    console.log(primaryNav);
    console.log(navToggle);
    navToggle.addEventListener("click",()=>
    {
        const visibility=primaryNav.getAttribute('data-visible');
        if(visibility==="false")
        {
            primaryNav.setAttribute('data-visible',true);
            navToggle.setAttribute('aria-expanded',true);
        }
        else if(visibility==="true")
        {
            primaryNav.setAttribute('data-visible',false);
            navToggle.setAttribute('aria-expanded',false);
        }
        console.log(visibility);
    });

    return <header className='primary-header flex'>
        <div style={{ width: "10px", height: "20px", backgroundColor: "red" }}>

        </div>
        <button className='mobile-nav-toggle'
            aria-controls='primary-navigation' >
            <span className='sr-only'></span>
        </button>
        <nav >
            <ul id='primary-navigation' aria-expanded="false" data-visible="false" className='primary-navigation flex'>
                <li>
                    <a href='/'>
                        <span aria-hidden="true">00</span>
                        Katalog Produktów
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <span aria-hidden="true">01</span>
                        O mnie
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <span aria-hidden="true">02</span>
                        FAQ
                    </a>
                </li>
                <li>
                    <a href='/'>
                        <span aria-hidden="true">03</span>
                        Kontakt
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