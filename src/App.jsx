import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");

  const addInput = (input) => setValue(value + input);
  const clear = () => setValue("");
  const calculate = () => {
    try {
      setValue(eval(value));
    } catch {
      setValue("Error");
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={value} readOnly />

      <div className="buttons">
        <button onClick={() => addInput("7")}>7</button>
        <button onClick={() => addInput("8")}>8</button>
        <button onClick={() => addInput("9")}>9</button>
        <button onClick={() => addInput("/")}>÷</button>

        <button onClick={() => addInput("4")}>4</button>
        <button onClick={() => addInput("5")}>5</button>
        <button onClick={() => addInput("6")}>6</button>
        <button onClick={() => addInput("*")}>×</button>

        <button onClick={() => addInput("1")}>1</button>
        <button onClick={() => addInput("2")}>2</button>
        <button onClick={() => addInput("3")}>3</button>
        <button onClick={() => addInput("-")}>−</button>

        <button onClick={() => addInput("0")}>0</button>
        <button onClick={clear}>C</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => addInput("+")}>+</button>
      </div>
    </div>
  );
}

export default App;

