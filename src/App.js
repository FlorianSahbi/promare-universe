import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import pro from "./static/img/promare.png"
import logo from "./static/img/Logo_Promare.png"
import sound from "./static/sounds/nexus.mp3"


const demos = [
  {
    one: {
      bg: "http://caraujo_pens.surge.sh/images/ZnkfwAR.jpg",
      bm: "none"
    },
    two: {
      bg: "http://caraujo_pens.surge.sh/images/ONBXKkS.jpg",
      bm: "none"
    },
    three: {
      bg: "http://caraujo_pens.surge.sh/images/qKNpn9G.png",
      bm: "none"
    }
  },
  {
    one: {
      bg: pro,
      bm: "none"
    },
    two: {
      bg: pro,
      bm: "multiply"
    },
    three: {
      bg: pro,
      bm: "multiply"
    }
  },
  {
    one: {
      bg: "http://caraujo_pens.surge.sh/images/YpTSfYD.jpg",
      bm: "none"
    },
    two: {
      bg: "http://caraujo_pens.surge.sh/images/ziAdjNM.jpg",
      bm: "multiply"
    },
    three: {
      bg: "http://caraujo_pens.surge.sh/images/dnfONso.png",
      bm: "none"
    }
  }
];

function App() {

  let timer = 0;
  const [demo, setDemo] = useState(demos[1]);
  const [active, setActive] = useState(0);
  setInterval(() => {
    timer++
    console.log(timer)
  }, 1000);

  const ref = useRef(null)

  useEffect(() => {
    ref.current.currentTime = timer;
    ref.current.play();
  }, [])

  document.body.setAttribute("data-demo", 2);


  const handleClick = (e, value) => {
    e.preventDefault();
    setDemo(demos[value])
    setActive(value);
    document.body.setAttribute("data-demo", value + 1);
  }

  const start = (e) => {
    e.preventDefault();
    ref.current.currentTime = timer;
    ref.current.play();
    ref.current.muted = false;
    e.target.style.display = "none";
  }

  return (
    <>
      <div className="changer">
        <img src={logo} id="title" alt="bla" style={{ width: "100%" }} />
        <div className="demos">
          {/* <a onClick={(e) => handleClick(e, 0)} data-go="1" href="https://www.google.com">Galo</a>
          <a onClick={(e) => handleClick(e, 1)} data-go="2" href="https://www.google.com">Lio</a>
          <a onClick={(e) => handleClick(e, 2)} data-go="3" href="https://www.google.com">knowledge</a> */}
          <a onClick={(e) => start(e)} data-go="2" href="https://www.google.com">Start</a>

        </div>
      </div>
      <div id="container">
        <div id="f1" style={{ backgroundImage: `url(${demo.one.bg})`, mixBlendMode: `${demo.one.bm}` }}></div>
        {/* <div id="f2" style={{ backgroundImage: `url(${demo.two.bg})`, mixBlendMode: `${demo.two.bm}` }}></div>
        <div id="f3" style={{ backgroundImage: `url(${demo.three.bg})`, mixBlendMode: `${demo.three.bm}` }}></div> */}
      </div>
      <audio src={sound} ref={ref} autoPlay muted controls />
    </>
  );
}

export default App;
