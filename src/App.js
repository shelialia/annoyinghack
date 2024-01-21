import logo from './logo.svg';
import { useState, useEffect} from 'react';
import AnnoyingTextField from './components/AnnoyingTextField';
import AnnoyingDate from './components/AnnoyingDate';
import './App.css';
import RunningCats from './components/RunningCats';

function App() {
  const [ count, setCount ] = useState(9000000);
   const [ isSwitched, setSwitch ] = useState(false);


   useEffect( () => {
       const switchButtons = () => {
       setSwitch(true);
       setTimeout(() => {
           setSwitch(false);
       }, 3000);
        };


    setTimeout(switchButtons, 5000);


    const intervalId = setInterval(switchButtons, 8000);


    return () => clearInterval(intervalId);
    }, []);


   function increase() {
       setCount(prevCount => prevCount + 1);
   };
  
   function reset() {
       setCount(9000000);
   };



  const [eqn, setEqn] = useState({first: 0, second: 0, third: 0})
  const [name, setName] = useState('')
  const [fontSizes, setFontSizes] = useState([])
  const onNameChange = (value) => {
    if (value.length > fontSizes.length) {
      const newFontSize = [];
      for(let i = 0; i < value.length - fontSizes.length; i++){
        newFontSize.push(Math.random() * 50);
      }
      
      setFontSizes([...fontSizes, ...newFontSize])
    } else {
      const newFontSize = fontSizes.slice(0, value.length);
      setFontSizes(newFontSize);
    }
  }

  const [position, setPosition] = useState({ x: 0, y: 0});
  const [buttonPosition, setButtonPosition] = useState({ left: 500, top: 500 });

  const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    useEffect(() => {
      if (Math.abs(position.y - buttonPosition.top) >= 100 || Math.abs(position.x - buttonPosition.left) >= 100) {
        return;
      }
      const distance = 5; // Adjust the distance the button should move
      const angle = Math.atan2(position.y - buttonPosition.top, position.x - buttonPosition.left);
      const deltaX = distance * Math.cos(angle);
      const deltaY = distance * Math.sin(angle);
      console.log(deltaX, deltaY)
      
      setButtonPosition({
        left: buttonPosition.left - deltaX,
        top: buttonPosition.top - deltaY,
      });
      }, [position]);

  return (
    <div class='App' onMouseMove={handleMouseMove}>
      <h1>Application form for Hack&Roll</h1>
      <div class='name'>
        <label>Name: </label>
          <input style={{width: 400}} onChange={(val) => {
            setName(val.target.value);
            onNameChange(val.target.value);
          }}/>
          <span class='name-text'>
            {name.split('').map((letter, index) => <span style={{fontSize:fontSizes[index]}}>{letter}</span>)}
          </span>
      </div>
      <div class='age'>
        <label>Age: </label>
        <input type="number" value={eqn.first} onChange={(val) => setEqn({ ...eqn, first: val.target.value})} />
         + 
        <input type="number" value={eqn.second} onChange={(val) => setEqn({...eqn, second: val.target.value})} />
         x 
        <input type="number" value={eqn.third} onChange={(val) => setEqn({...eqn, third: val.target.value})} />
         x 7
        =
        <span>{+eqn.first + eqn.second * eqn.third * 7}</span>
      </div>
      <AnnoyingDate />
      <div className = "phone-div">
           <label>HP: </label>
           <p>{count}</p>
           <div>
               <button className = {`phone-button ${isSwitched ? "" : "large-button"}`} onClick = {isSwitched ? increase : reset}> {isSwitched ? "+" : "Reset"}</button>
               <button className = {`phone-button ${isSwitched ? "large-button" : ""}`} onClick = {isSwitched ? reset : increase} onDoubleClick = {reset}> {isSwitched ? "Reset" : "+"}</button>
           </div>
       </div>

      

      
      
      <br/>
      <label>Bio: </label>
      <AnnoyingTextField />
      <button    
            style={{
                position: 'absolute',
                left: buttonPosition.left,
                top: buttonPosition.top,
            }}>
        Submit
      </button>
      <RunningCats />
    </div>
    
  
  );
}

export default App;
