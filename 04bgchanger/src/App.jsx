import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-16 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-2xl bg-white px-4 py-2 rounded-3xl ">
          <button className="outline-none px-3 rounded-2xl py-1 text-white shadow-lg" style={{backgroundColor: "red"}} onClick={()=>setColor("red")}>Red</button>
          <button className="outline-none px-3 rounded-2xl py-1 text-white shadow-lg" style={{backgroundColor: "green"}} onClick={()=>setColor("green")}>Green </button>
          <button className="outline-none px-3 rounded-2xl py-1 text-white shadow-lg" style={{backgroundColor: "blue"}} onClick={()=>setColor("blue")}>Blue</button>
          <button className="outline-none px-3 rounded-2xl py-1 text-black shadow-lg" style={{backgroundColor: "yellow"}} onClick={()=>setColor("yellow")}>Yellow</button>
          <button className="outline-none px-3 rounded-2xl py-1 text-white shadow-lg" style={{backgroundColor: "purple"}} onClick={()=>setColor("purple")}>Purple</button>
          <button className="outline-none px-3 rounded-2xl py-1 text-black shadow-lg" style={{backgroundColor: "lavender"}} onClick={()=>setColor("Lavender")}>Lavender</button>
          <button className="outline-none px-3 rounded-2xl py-1 text-black shadow-lg" style={{backgroundColor: "white"}} onClick={()=>setColor("white")}>White</button>
          <button className="outline-none px-3 rounded-2xl py-1 text-white shadow-lg" style={{backgroundColor: "black"}} onClick={()=>setColor("black")}>Black</button>
        

        </div>
      </div>
    </div>
  );
}

export default App;
