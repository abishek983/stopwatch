import logo from './logo.svg';
import './App.css';
import Clock from "./components/Clock"

function App() {

  return (
    <div className="App">
      <Clock initial={75} interval={15}/>
      <Clock initial={4} interval={6}/>
      <Clock initial={9} interval={1}/>
    </div>
  );
}

export default App;
