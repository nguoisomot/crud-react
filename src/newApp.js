import { render } from "@testing-library/react";
import { useState } from "react";

function NewApp() {

  const [count, setCount] = useState(0);
  const [isDisplay, setIsDisplay] = useState(false);
  const [datas,setDatas] = useState([]);

  const updateCount = ()=>{
    setCount(pre => count + 1);
    setIsDisplay(!isDisplay);
    setDatas([...datas, count + 1]);
    console.log(([...datas, count + 1]))
  }
  // const updateDatas = ()=>{
  //   setDatas([...datas,count+1])
  // }
  const display = ()=>{

  }
  console.log('newApp')
  return (
    <div>
      <h1>{count}</h1>
      {
        datas.map(i => <p key={i}>{i}</p>)
      }
      
      <p>Home1</p>
      <p>Home2</p>
      <p>Home3</p>
      <p>Home4</p>
      <button onClick={updateCount}>Count</button>
      {isDisplay ? <p >adsad</p> : null}
    </div>
  )

}
export default NewApp;