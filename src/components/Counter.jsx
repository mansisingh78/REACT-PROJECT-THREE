import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);
  const resetCount = () => setCount(0);
  return (
    <>
      <div className="ml-[500px] my-60 bg-[#0B666A] text-black w-96 h-60 rounded-2xl border-2 border-[#1A3636] border-solid counter ">
        <h1 className="ml-28 pb-12 pt-16 text-2xl">counter value : {count}</h1>
        <div className=" text-white pt-10 btn ">
          <button
            onClick={increaseCount}
            className="bg-[#FF5F00] px-6 py-2 rounded-3xl ml-6 mr-2 "
          >
            increase
          </button>
          <button
            onClick={decreaseCount}
            className="bg-yellow-600 px-6 py-2 rounded-3xl   mr-2"
          >
            decrease
          </button>
          <button
            onClick={resetCount}
            className="bg-lime-600 px-6 py-2 rounded-3xl mr-2"
          >
            reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
