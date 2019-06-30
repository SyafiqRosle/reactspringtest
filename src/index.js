import React from 'react';
import ReactDOM from 'react-dom';
import {useSpring,animated} from 'react-spring';
import './index.css';
import Earth from './earth.png';
import Hina from './hina.png';
import Circle from './circle.png';
import Cafe from './cafe.png';
import Sayo from './sayo.png';

const calc=(x,y)=>[x - window.innerWidth/2, y - window.innerWidth/2];
const trans1 = (x,y)=>`translate3d(${x/9}px,${y/10}px,0)`;
const trans2 =(x,y)=>`translate3d(${x/8+35}px,${y/8-230}px,0)`;
const trans3 =(x,y)=>`translate3d(${x/6-250}px,${y/6-200}px,0)`;
const trans4 =(x,y)=>`translate3d(${x/3.5}px,${y/3.5}px,0)`;
const trans5 =(x,y)=>`translate3d(${x/5+35}px,${y/5-230}px,0)`;
function Parallax(){
    const [props,set] = useSpring(()=>({xy:[0,0], config:{mass:10, tension:550, friction:140}}));

   return(
       
       <div class="container" onMouseMove={({clientX:x, clientY:y})=>set({xy:calc(x,y)})}>
           <h1>Hina's Universe</h1>
           <animated.div class="bg" style={{transform:props.xy.interpolate(trans1)}}>
               <img class="earth" src={Earth} alt=""></img>
           </animated.div>

           <animated.div class="circle" style={{transform:props.xy.interpolate(trans2)}}>
               <img class="circle" src={Circle} alt=""></img>
           </animated.div>

           <animated.div class="icon" style={{transform:props.xy.interpolate(trans5)}}>
               <img class="sayo" src={Sayo} alt=""></img>
           </animated.div>

           <animated.div class="cafe" style={{transform:props.xy.interpolate(trans3)}}>
               <img class="cafe" src={Cafe} alt=""></img>
           </animated.div>

           <animated.div class="hina" style={{transform:props.xy.interpolate(trans4)}}>
               <img class="hina"src={Hina} alt=""></img>
           </animated.div>

       </div>
       ) 
}


ReactDOM.render(<Parallax />, document.getElementById('root'));

