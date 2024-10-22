import './App.css';
import { useState } from "react";

function Key({ label, clickHandler }) {
  return (
    <button className='ButtonKeys' onClick={clickHandler}>
      {label}
    </button>
  )
}

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function NameAndSection() {
  return (
    <div>
      <p>
        Cedric Jian N. Martin - IT3A
      </p>
    </div>
  );
}

function App() {
  const [disp, setDisp] = useState("10 Things That Require Zero Talent");

  const items = [
    "Being On Time",
    "Making An Effort",
    "Being High Energy",
    "Having A Positive Attitude",
    "Being Passionate",
    "Using Good Body Language",
    "Being Coachable",
    "Doing A Little Extra",
    "Being Prepared",
    "Having A Strong Work Ethic",
  ];

  const keyClickHandler = (index) => {
    if (index === "RESET") {
      setDisp("10 Things That Require Zero Talent");
    } else if (index === "NAME") {
      setDisp("Cedric Jian N. Martin".toUpperCase());
    } else {
      setDisp(items[index]);
    }
  };

  return (
    <div className="App">
      <div className='NameContainer'>
        <NameAndSection />
      </div>

      <div className="Calc">
        <div className="Disp">
          <Display display={disp} />
        </div>

        <div className="Buttons">
          {items.map((item, index) => (
            <Key key={index} label={index + 1} clickHandler={() => keyClickHandler(index)} />
          ))}
          <Key label={"RESET"} clickHandler={() => keyClickHandler("RESET")} />
          <Key label={"NAME"} clickHandler={() => keyClickHandler("NAME")} />
        </div>
      </div>
    </div>
  );
}

export default App;
