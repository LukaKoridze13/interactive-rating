import './Reset.css';
import './App.css';
import './responsive.css'
import Rate from './Components/Rate';
import { useState } from 'react';
import Result from './Components/Result';
function App() {
  const [rate, setRate] = useState(null)
  const [rated, setRated] = useState(false)
  function submit(){
    if(rate!==null){
      setRated(true)
    }
  }
  return (
    <div className="App">
      {!rated && <Rate submit={submit} rate={setRate} />}
      {rated && <Result rate={rate} />}
    </div>
  );
}

export default App;
