import p1 from '../../img/unknown1.png';
import p2 from '../../img/unknown2.png';
import p3 from '../../img/unknown3.png';
import p4 from '../../img/unknown4.png';
import p5 from '../../img/unknown5.png';
import p6 from '../../img/unknown6.png';
import p7 from '../../img/unknown7.png';
import "./Galeria.css";
import p8 from '../../img/unknown8.png';
function Galeria(props){
    return <div className="grid-container">
       
       <img className='photo' src={p1}/>
       <img className='photo' src={p2}/>
       <img className='photo' src={p3}/>
       <img className='photo' src={p4}/>
       <img className='photo' src={p5}/>
       <img className='photo' src={p6}/>
       <img className='photo' src={p7}/>
       <img className='photo' src={p8}/>

        {/* //<img src={p8}/> */}
    </div>;
}
export default Galeria;