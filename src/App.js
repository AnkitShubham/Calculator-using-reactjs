import "./App.css";
import ClearScreenButton from "./components/ClearScreenButton";
import DisplayButtons from "./components/DisplayButtons";
import EvaluateButton from "./components/EvaluateButton";

function Calculator() {
  return (
    <article>
      <div className="title">
        <h1>Calculator</h1>
      </div>
      <div className="container">
        <div className="display">
          <input type="text" className="output" id="output" />
        </div>
        <div className="input-btns">
          <div className="row">
            <DisplayButtons value="7" />
            <DisplayButtons value="8" />
            <DisplayButtons value="9" />
            <DisplayButtons value="/" />
          </div>
          <div className="row">
            <DisplayButtons value="4" />
            <DisplayButtons value="5" />
            <DisplayButtons value="6" />
            <DisplayButtons value="*" />
          </div>
          <div className="row">
            <DisplayButtons value="1" />
            <DisplayButtons value="2" />
            <DisplayButtons value="3" />
            <DisplayButtons value="-" />
          </div>
          <div className="row">
            <DisplayButtons value="0" />
            <DisplayButtons value="00" />
            <DisplayButtons value="." />
            <DisplayButtons value="+" />
          </div>
          <div className="fncRow">
            <ClearScreenButton />
            <EvaluateButton />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Calculator;
