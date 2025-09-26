import Child from "./Child";
import { useState } from "react";
import Listitem from "./component/Listitem";
import Login from "./pages/Login";

function App() {
  const [count, setCount] = useState(0);
  console.log(count);

  let list = [
    { id: 0, name: "ali" },
    { id: 1, name: "asif" },
    { id: 2, name: "aqib" },
    { id: 3, name: "adeel" },
    { id: 4, name: "awais" },
  ];

  // let std = "ali";
  let std = {
    name: "ali",
    rollno: 23,
  };

  // const Clickme = (name) => {
  //   alert(`my first App ${name}`);
  // };

  return (
    <>
      {/* <h3>Count {count}</h3>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <button onClick={() => setCount(0)}>reset</button>

      {/* my name is */}
      {/* <div>{name}</div> */}
      {/* <Child std={std} list={list} /> */}
      <Login />
      {/* <Listitem /> */}
    </>
  );
}

export default App;
