import { useState } from "react";
import Card from "./components/Card";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);
  let myObj={
    username:"hotesh",
    age:23
  }
  let newarr=[23,4,5]
  return (
    <div className="w-90 h-40">
      <h1 className="bg-green-400 text-black p-4 rounded-xl text-center text-4xl">
        Tailwind TEst
      </h1>
      <Card username="chai aur code" someObject={newarr} btnText="Click me" />
      <Card username="nippi"/>
      
    </div>
  );
}

export default App;
