
import HeyReactWorld from "./components/HeyReactWorld";

import './App.css';

function App() {

  const saygoodbye = "See You In The Coding Lab Number";
  const number = 26;
  const num = 27;
  const name = 'Source: Javascript';
  const runtime = '0.0000sec';
  return (
    <div className="App">
      <HeyReactWorld numberprop={num} name={name} runtime={runtime}/>
      <div>{saygoodbye} {number * number + number}</div>
      <div>Exitting React Application at Runtime: {runtime}</div>
      <div className="myStyle1">This is CSS App</div>
      
      

    </div>
  );
}

export default App;
