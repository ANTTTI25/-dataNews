import React from "react";
import './App.css';
import nav from './asserts/nav.png';
import Title from './components/Title/index.jsx';
import Part1 from './components/Part1/index.jsx';
import Part2 from "./components/Part2";
import Part3 from "./components/Part3";
import Part4 from "./components/Part4";
import Part5 from "./components/Part5";
import Part6 from "./components/Part6";
import Part7 from "./components/Part7";
import End from "./components/End";
import PoemSwiper from "./components/PoemSwiper";
import line3 from './asserts/3-3.png';
import img3_1 from './asserts/3-1.svg';
import img3_2 from './asserts/3-2.svg';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <img src={nav} className="nav-img" />
      </div>
      <div>
        <Title />
        <Part1 />
        <Part2 />
        <PoemSwiper />
        <img src={line3} className="line3" />
        <Part3 />
        <img src={img3_1} className="img3_1" />
        <img src={img3_2} className="img3_2" />
        <Part4 />
        <img src={line3} className="line3" />
        <Part5 />
        <img src={img3_1} className="img3_1" />
        <img src={img3_2} className="img3_2" />
        <Part6 />
        <img src={line3} className="line3" />
        <Part7 />
        <img src={img3_1} className="img3_1" />
        <img src={img3_2} className="img3_2" />
        <End />
      </div>
    </div>
  );
}

export default App;
