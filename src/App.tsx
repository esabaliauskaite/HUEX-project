import "./App.css";
import { Cards } from "./Components/Cards";

function App() {
  return (
    <div className="App">
      <div className="SidePanel"></div>
      <div>
        <div className="ForecastMenu">
          <span>Today</span>&nbsp; &nbsp;&nbsp;&nbsp;
          <span>Week</span>
        </div>
        <div className="Title">
          <p>Today's Highlights</p>
        </div>
        <div className="ConditionCards">
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
          <Cards></Cards>
        </div>
      </div>
    </div>
  );
}

export default App;
