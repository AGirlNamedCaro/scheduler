
import React, {useState} from 'react';
export default function useVisualMode(initial) {
  // FIRST TEST: 
  //Initialize with default value aka when the appointment component loads
  //We need it to initialize as EMPTY
  //Take in an initial mode
  //Set the mode state with the initial value provided
  const [mode, setMode] = useState(initial);
  const [history,setHistory] = useState([initial]);
  //return an object with a property mode
  const transition = (mode, replace = false) => {
    if(replace) {
      //  console.log("history", history);
      //  console.log("index to be replaced: ", history.indexOf(mode));
      //  console.log('setHistory', setHistory([initial]) );
      //  console.log('updatedHistory', history);
      history.pop();
      
    }
    history.push(mode);
    setMode(mode);
  }
  const back = (mode) => {
   //we need to access the previous index in our history
   if(history.length === 1) {
     history.push(initial);
     setMode(initial);
   }
   else {

     history.pop();
     setMode(history[history.length - 1]);
   }
    

   
   
  }


  return {
    mode,
    transition,
    back
  };
  
}