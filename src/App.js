import React, {useState} from 'react';
import RulesHook from './component/RulesHook';
import UseStateArray from './component/UseStateArray';

const App = () => {
  
  // console.log(useState('thapa technical'));
  // var val = "technical thapa";

  // const [myName, setMyName] = useState('technical thapa subs')

  // const changeName = () =>{
  //   // val = "vinod thapa";
  //   // console.log(val); 
  //   let val = myName;

    // if (val === 'technical thapa subs' ) {
    //   setMyName('Vinod Thapa');
    // } else {
    //   setMyName('technical thapa subs');
    // }
    
  // }
   
    // console.log(myName);

  return (
    <div>
      {/* <RulesHook/> */}
      <UseStateArray/>
      {/* <h1>{myName}</h1>
      <button className='btn' onClick={changeName}>Click Here</button> */}
    </div>
  )
}

export default App