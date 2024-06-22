import logo from "./logo.svg";
import "./App.css";
import FunctionalGreetingWithProps from "./components/FunctionalGreetingWithProps";
import FunctionalGreeting from "./components/FunctionalGreeting";

function App() {
  return (
    <div className="App">
      <FunctionalGreetingWithProps greeting="This is a prop" name="from Marko" />
      <FunctionalGreeting />
    </div>
  );
}

export default App;
