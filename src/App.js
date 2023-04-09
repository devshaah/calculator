import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  const[input,set] = useState("");
  const[input2,set2] = useState("0");

  const addf = (val) => 
  {
    set2(" ");
    set(input + val);
  }

  const clearrall = () => {
    set2("0")
    set(" ")
  }

  const clearlast = () => {
    const a = input.lastIndexOf()
    set(input.slice(0,a))
  }

  let answer = () => {
try{  
  let ans = eval(input);
  set(ans);
  }
catch{
  set("Invalid")
}}


  return (
    <div className="App" class="container">
      <div  class="output screen">      
        {input2}{input}
      </div>
      <div>
      <button type="button" class="btn btn-outline-dark red" onClick={clearrall}>CLR</button>
      <button type="button" class="btn btn-outline-dark yellow" onClick={clearlast}>AC</button>
      <button type="button" class="btn btn-outline-dark yellow" onClick={()=>addf('%')}>%</button>
      <button type="button" class="btn btn-outline-dark yellow" onClick={()=>addf('/')}>/</button>
      </div>
      <div>
      <button type="button" class="btn btn-outline-dark" onClick={()=>addf(7)}>7</button>
      <button type="button" class="btn btn-outline-dark" onClick={()=>addf(8)}>8</button>
      <button type="button" class="btn btn-outline-dark" onClick={()=>addf(9)}>9</button>
      <button type="button" class="btn btn-outline-dark yellow" onClick={()=>addf('*')}>X</button>
      </div>
      <div>
      <button type="button" class="btn btn-outline-dark" onClick={()=>addf(4)}>4</button>
      <button type="button" class="btn btn-outline-dark" onClick={()=>addf(5)}>5</button>
      <button type="button" class="btn btn-outline-dark" onClick={()=>addf(6)}>6</button>
      <button type="button" class="btn btn-outline-dark yellow" onClick={()=>addf('-')}>-</button>
      </div>
      <div>
      <button type="button" class="btn btn-outline-dark" onClick={()=>addf(1)}>1</button>
      <button type="button" class="btn btn-outline-dark"  onClick={()=>addf(2)}>2</button>
      <button type="button" class="btn btn-outline-dark" onClick={()=>addf(3)}>3</button>
      <button type="button" class="btn btn-outline-dark yellow" onClick={()=>addf('+')}>+</button>
      </div>
      <div>
      <button type="button" class="btn btn-outline-dark" onClick={()=>addf(0)}>0</button>
      <button type="button" class="btn btn-outline-dark" onClick={()=>addf(".")}>.</button>
      <button type="button" class="btn btn-outline-dark equal" onClick={answer} >=</button>
      </div>

    </div>
  );
}

export default App;
