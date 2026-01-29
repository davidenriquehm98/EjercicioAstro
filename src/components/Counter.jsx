import { useState } from "preact/hooks";

export function Counter() {
  const [counter, setCounter] = useState(0)
  return (
    <div class="flex flex-col p-2 rounded-md shadow-md bg-green-700 justify-center items-center" >
      <div class="font-bold text-green-200 text-xl" >{counter}</div>
      <button class="cursor-pointer " onClick={() => { setCounter(counter + 1) }} > click </button>
    </div>
  )
}