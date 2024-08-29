
const Button =({text,onclick})=>{
    return (
        
        <div className="button" >
        <button onClick={onclick}>
        <span class="edge"></span>
        <span class="front text"> {text}
        </span>
      </button>
     
     
      </div>
    
   )
}
export default Button