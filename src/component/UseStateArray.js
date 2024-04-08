import React, {useState} from 'react'

const UseStateArray = () => {

    const bioData = [
        {
            id:0, myName:"Vinod", age:25
        }, {
            id:1, myName:"Thapa", age:27
        }
    ]

    let [myArray, setmyArray] = useState(bioData);

    const clearArray = () =>{
        
        setmyArray([]);
    }

  return (

    <div>
        {
            myArray.map((curElm) => {
                return <h1>Name: {curElm.myName} & Age: {curElm.age}</h1>
            })
        }
        <button onClick={clearArray}>clear</button>
    </div>    
  )
}

export default UseStateArray