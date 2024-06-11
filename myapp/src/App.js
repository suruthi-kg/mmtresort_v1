import React from 'react'; 
// import {useRoutes} from "react-router-dom"
import { Counter } from './features/counter/Counter.js'; 
import Lenis from './pages/lenis.js'; 
import Bird_anime from './pages/bird_anime.js';
import Contextapp from './pages/simple_context/contextapp.js';
import Backend from './backend/index.js';
import Home from './pages/home.js';
import Aos from 'aos';
import 'aos/dist/aos.css'
function App() {
  // let element = useRoutes([{
  //   path:"/",element:<Backend />,
  // }])
  return (
    <div className="App">
      <header className="App-header"> 
        {/* <Counter />  */}
        {/* <Lenis />  */}
        {/* <Bird_anime /> */}
        {/* <Contextapp /> */}
        {/* <Backend /> */}
        <Home />
      </header>
    </div>
  );
}

export default App;
