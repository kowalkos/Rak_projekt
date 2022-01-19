import './Produkt.css';
function Produkt(props) {


    return <div className='wrapper'>
        <div className='references'>
            <a href='#kokardy'>
                <h1 >Kokardy</h1>
            </a>
            <a href='#spinki'>
                <h1 >Spinki</h1>
            </a>
        </div>

        <section id='kokardy'>

            <h2>Kokardy</h2>
            <div>
                <img src='../../img/kokarda1.jpg'></img>
                <div className='items'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada dolor commodo erat euismod, vitae imperdiet sapien sollicitudin. Aliquam pellentesque scelerisque mi, non semper leo euismod non. Sed molestie augue at mi ullamcorper, vel scelerisque massa ullamcorper. Curabitur viverra aliquam dui in aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla faucibus neque nec quam consequat, et sodales purus pellentesque. Praesent nulla quam, viverra in felis eget, ullamcorper porttitor ipsum. Maecenas id orci in lectus dapibus semper id sed ex. In vitae convallis odio, vitae commodo massa. Phasellus consequat sem justo, eget molestie neque efficitur consequat. Quisque laoreet id orci nec feugiat. Maecenas molestie purus vitae orci viverra maximus. Nulla id dapibus enim, sed tristique ligula. Curabitur ac consectetur augue.
                </div>
            </div>
        </section>

        <section id='spinki'>
            <h2>Spinki</h2>
            <div className='items'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada dolor commodo erat euismod, vitae imperdiet sapien sollicitudin. Aliquam pellentesque scelerisque mi, non semper leo euismod non. Sed molestie augue at mi ullamcorper, vel scelerisque massa ullamcorper. Curabitur viverra aliquam dui in aliquam. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla faucibus neque nec quam consequat, et sodales purus pellentesque. Praesent nulla quam, viverra in felis eget, ullamcorper porttitor ipsum. Maecenas id orci in lectus dapibus semper id sed ex. In vitae convallis odio, vitae commodo massa. Phasellus consequat sem justo, eget molestie neque efficitur consequat. Quisque laoreet id orci nec feugiat. Maecenas molestie purus vitae orci viverra maximus. Nulla id dapibus enim, sed tristique ligula. Curabitur ac consectetur augue.


            </div>
        </section>
    </div>;

}

export default Produkt;