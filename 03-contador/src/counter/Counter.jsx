import { useState } from "react";
function Counter() {
  const [counter, setCounter] = useState(0)
  return(
    <div>
      <p>Haz hecho click {counter} veces</p>
      <button onClick={() => {setCounter(counter+1)}}>click</button>
    </div>
  )
}
export default Counter;