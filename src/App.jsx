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
    <div className="scene">
      <div className="calculator">
        <div className="lisa"></div>

        <input type="text" value={value} readOnly />

        <div className="buttons">
          {/* fila 1 */}
          <button className="num" onClick={() => addInput("7")}>7</button>
          <button className="num" onClick={() => addInput("8")}>8</button>
          <button className="num" onClick={() => addInput("9")}>9</button>
          <button className="op" onClick={() => addInput("/")}>÷</button>

          {/* fila 2 */}
          <button className="num" onClick={() => addInput("4")}>4</button>
          <button className="num" onClick={() => addInput("5")}>5</button>
          <button className="num" onClick={() => addInput("6")}>6</button>
          <button className="op" onClick={() => addInput("*")}>×</button>

          {/* fila 3 */}
          <button className="num" onClick={() => addInput("1")}>1</button>
          <button className="num" onClick={() => addInput("2")}>2</button>
          <button className="num" onClick={() => addInput("3")}>3</button>
          <button className="op" onClick={() => addInput("-")}>−</button>

          {/* fila 4 */}
          <button className="clear" onClick={clear}>C</button>
          <button className="num" onClick={() => addInput("0")}>0</button>
          <button className="equal" onClick={calculate}>=</button>
          <button className="op" onClick={() => addInput("+")}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
