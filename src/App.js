
import './App.css';

import { CarouselDefault } from './Components/CarouselPics';

function App() {
  return (
    <div className="App">
      <div className="flex justify-center md:justify-start"> <img className="md:absolute h-[200px] w-[200px] z-20 " src="https://www.tawojactz.org/WhatsApp%20Image%202022-11-17%20at%202.28.09%20PM.jpeg" alt="logo"/> </div>
      <div className="hidden md:flex mx-2"> <CarouselDefault /></div>
      <div className='container mt-22 md:mt-8 mx-auto'>
          <h1 className="text-3xl text-center">Website is under construction</h1>
          <p className='text-xl text-center'>For more information contacts are shared below</p>
      </div>
      <div className="mt-10 md:px-4 md:mt-3 md:my-5"><div className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center"> 
        <div>
          <h1 className="text-xl"> Executive Director</h1>
          <p className="text-lg">Neema Nchimbi</p>
          <p className="text-lg">+255 786 236 882</p>
          <p className="text-lg">tawojac.director@gmail.com</p>
        </div>
        <div>
          <h1 className="text-xl"> Project Manager</h1>
          <p className="text-lg">Elijah Malewo</p>
          <p className="text-lg">+255 692 641 337</p>
          <p className="text-lg">elijahmalewo16@gmail.com</p>
        </div>
      </div></div>
    </div>
  );
}

export default App;
