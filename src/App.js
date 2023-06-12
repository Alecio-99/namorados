import React from 'react';
import './styles.css';
import Namorado from "./img/vi1.png";
import Namorado1  from "./img/vi2.png";
import Namorado2 from "./img/vi3.png";
import Namorado3 from "./img/vi4.jpg";
import Header from "./Header/Header";
import Texto from "./Header/Texto";
import Fim from "./Header/Fim";
import YouTube from './Header/YouTube';
import Link from './Header/Link';


const App = () => { 
  return (
    <div>
      <h1 className="Feliz">Feliz Dia dos Namorados!</h1>

      <div className="photo-gallery">
       <Texto />
        <div className="photo"> 
          <img src={Namorado} alt="Foto1" title="Dia dos namorados"/>
        </div>
        <Fim />
        <div className="photo1">
          <img src = {Namorado1} alt="Foto2" title="Dia dos namados"/>
        </div>
        <Header />
        <div className="photo2">
          <img src= {Namorado2} alt="Foto3" title="Dia dos namorados"/>
        </div>
        <div className="photo3">
          <img src= {Namorado3} alt="Foto3" title="Dia dos namorados"/>
        </div>
      </div>
        <YouTube /> 
      <div className="video-container">
        <Link />
      </div>
    </div>
  );
};

export default App;

