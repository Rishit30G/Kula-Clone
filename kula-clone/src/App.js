import "./App.css";
import ResponsiveAppBar from "./Pages/Navbar";
import { HomePage } from "./Pages/Homepage";
import Scrollpage from "./Pages/Scrollpage";



function App() {
  return (
    <div className="App">
      <ResponsiveAppBar/>
      <div>
        <HomePage />
      </div>
      <div id="bottom-div">
      </div>
      <div>
        <Scrollpage />
      </div>
    </div>
  );
}

export default App;
