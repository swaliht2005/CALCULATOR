
import React, {useState} from "react";
import Button from "./button";

function Calculator() {
  const btntext = ['1', '2', '3', '+', '4','5','6','-','7','8','9','*','c','d','=','/'];
  const [value, setValue] = useState('');
  const click = (text) =>{
   
    if(text==="c"){
      setValue('');
    }else if (text === "d"){
      setValue(value.slice(0,-1));
    }else if (text === "="){
      try{
        setValue(eval(value));
      }catch{
        setValue("error");
      }
    }else{
      setValue(value + text)
    }
  };
  return (
    <div className="calculator">
      <div className="ca">
        <input className="screen" type="text" value={value} />
        {
          btntext.map((value, i) => (
            <Button key={i} text={value} onclick={()=>click(value)}/>
          ))
        }
      </div>
    </div>
  );
}

export default Calculator;