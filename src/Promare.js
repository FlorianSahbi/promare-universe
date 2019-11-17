import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  let demos = [];

  const cloudsuit = {
    one: {
      bg: "http://caraujo_pens.surge.sh/images/ZnkfwAR.jpg",
      bm: "none"
    },
    two: {
      bg: "http://caraujo_pens.surge.sh/images/ONBXKkS.jpg",
      bm: "lighten"
    },
    three: {
      bg: "http://caraujo_pens.surge.sh/images/qKNpn9G.png",
      bm: "multiply"
    }
  }
  demos.push(cloudsuit);

  const urbansky = {
    one: {
      bg: "http://caraujo_pens.surge.sh/images/l1MS7kk.jpg",
      bm: "none"
    },
    two: {
      bg: "http://caraujo_pens.surge.sh/images/6QBLNy6.jpg",
      bm: "multiply"
    },
    three: {
      bg: "http://caraujo_pens.surge.sh/images/bmnzJRs.png",
      bm: "none"
    }
  }

  demos.push(urbansky);

  const knowledge = {
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
  demos.push(knowledge);


  const [demo, setDemo] = useState(2);
  const [active, setActive] = useState(1);

  useEffect(() => {
    var container = document.getElementById("container");
    applyDemo(demo, container);
  })


  const applyDemo = (number, ctn) => {
    let go = demos[number - 1];
    console.log(active)
    ctn.innerHTML = "";


    const f1 = document.createElement("div");
    f1.setAttribute("id", "f1");
    const style1 = "background-image: url(" + go.one.bg + "); mix-blend-mode: " + go.one.bm + ";";
    f1.setAttribute("style", style1);
    ctn.appendChild(f1);


    const f2 = document.createElement("div");
    f2.setAttribute("id", "f2");
    const style2 = "background-image: url(" + go.two.bg + "); mix-blend-mode: " + go.two.bm + ";";
    f2.setAttribute("style", style2);
    ctn.appendChild(f2);

    const f3 = document.createElement("div");
    f3.setAttribute("id", "f3");
    const style3 = "background-image: url(" + go.three.bg + "); mix-blend-mode: " + go.three.bm + ";";
    f3.setAttribute("style", style3);
    ctn.appendChild(f3);
    setActive(number);


  }



  const handleClick = (e, value) => {
    e.preventDefault();
    document.body.setAttribute("data-demo", value);
    setDemo(value)
  }

  return (
    <>
      <div className="changer">
        <div className="demos">
          <a onClick={(e) => handleClick(e, 1)} href="https://www.google.com">Galo</a>
          <a onClick={(e) => handleClick(e, 2)} href="https://www.google.com">Lio</a>
          <a onClick={(e) => handleClick(e, 3)} href="https://www.google.com">knowledge</a>
        </div>
      </div>
      <div id="container"></div>
    </>
  );
}

export default App;
