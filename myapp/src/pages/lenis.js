import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   decrement,
   increment,
   incrementByAmount,
   incrementAsync,
   selectCount,
} from '../features/counter/counterSlice';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';

function AnimatedElement() {
   const lenis = useLenis();
   
   const [opacity, setOpacity] = useState(0);
   const [scale, setScale] = useState(1);
 
   useEffect(() => {
   //   const animateOpacity = lenis.spring({ from: 0, to: 1, delay: 0.5 });
   //   const animateScale = lenis.spring({ from: 0.8, to: 1, delay: 0.3 }); // Start from a smaller scale
 
   //   setOpacity(animateOpacity);
   //   setScale(animateScale);
   }, [lenis]); // Run the effect only when lenis changes
 
   return (
     <div style={{   transform: `scale(${scale})` }}>
       This element will animate with opacity and scale.
     </div>
   );
 }
 
export default function Lenis() {


   const lenisOptions = {
      lerp: 0.1, // Controls the interpolation amount (higher for smoother scrolling)
      duration: 1.5, // Duration of the scrolling animation in seconds
   };



   return (

      <>
         <ReactLenis root options={lenisOptions}>
      <div style={{ height: '2000px' }}>  
        <AnimatedElement />
      </div>
    </ReactLenis>
         {/* <ReactLenis root options={lenisOptions}> 
            <div className='box blue mb-4' >Section 1</div><br />
            <div className='box blue mb-4' >Section 2</div><br />
            <div className='box blue mb-4' >Section 3</div><br />
         </ReactLenis> */}
         {/* <div className='container'>
            <div className='scrl' >
               <div className='box' >sad asdas</div>
               <div className='box blue' >sad asdas</div>
               <div className='box green' >sad asdas</div>
            </div>

         </div> */}
      </>
   );
}
