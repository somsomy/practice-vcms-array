import {useState} from 'react';
import './css/common.css';
import './css/layout.css';
import './vendor/fontawesome/css/all.min.css';

import VentDisplay from "./VentDisplay";

function App() {

  const [num, setNum] = useState(16)

  const onClick = () => {
    num === 16 ? setNum(64) : setNum(16)
  }

  return (
    <div id="wrap">
      <header id="header">
        <div className="header_top">
          <h1 className="logo"><a href="/">Yonsei Univ. <strong>MDDU</strong></a></h1>
          <div className="top_item">
            <ul>
              <li><button style={{backgroundColor: 'inherit'}} onClick={onClick}>{num}</button></li>
              <li><a href="#" className="btn_volume"><i className="fas fa-volume-down"></i>5</a></li>
              <li><a href="#"><i className="far fa-clock"></i>02/04/2021 15:00:24</a></li>
              <li><a href="#"><i className="far fa-user"></i>Guest #1234</a></li>
            </ul>
          </div>
        </div>
      </header>
      <nav id="nav">
        <div className="gnb">
          <ul>
            <li><a href="#" className="on"><i className="far fa-bell"></i> Alarm Silence (2:00)</a></li>
            <li><a href="#">Alarm Events</a></li>
            <li><a href="#">Admit New Patient</a></li>
            <li><a href="#">Auto Display</a></li>
            <li><a href="#">Display Settings</a></li>
            <li><a href="#">Network Settings</a></li>
          </ul>
        </div>
      </nav>
      <main id="main">
        <div className="layout">
          <div className="row">
            {
              [...Array(num)].map((item, idx) => {
                return <VentDisplay key={idx} num={num}/>
              })
            }
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
