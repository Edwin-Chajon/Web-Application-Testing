import React, {useState} from 'react';
import './App.css';

function App() {
  const [balls, setBalls] = useState(0)
  const [strikes, setStrikes] = useState(0)

  let toggleBalls = () => setBalls(balls+1)
  let toggleStrikes = () => setStrikes(strikes+1)
  let toggleHit = () => {return setBalls(0), setStrikes(0)}
  
  let limitBalls = (e) => {
    if (balls >= 4) {
      return setBalls(0)
    } return e
  }

  let limitStrikes = (e) => {
    if (strikes >= 3) {
      return setStrikes(0)
    } return e
  }

  let newFoul = (e) => {
    if (strikes === 1){
      return setStrikes(strikes+2)
    } else if (strikes === 0){
      return setStrikes(strikes+1)
    } else if ( strikes === 2){
      return e
    }
  }

  return (
    <div className="App">
      <h2>{balls}</h2>
      <h2>{strikes}</h2>
      <button onClick={()=>{toggleBalls(); limitBalls()}}>Ball</button>
      <button onClick={()=>{toggleStrikes(); limitStrikes()}}>Strike</button>
      <button onClick={newFoul}>Foul</button>
      <button onClick={toggleHit}>Hit</button>
    </div>
  );
}

export default App;
