import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

// npm install react-confetti react-use
const App = () => {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti width={width} height={height} recycle={true} />

      <div className="min-h-screen flex flex-col justify-center items-center gap-4">
        <div className="flex justify-center">
          <h1 className="text-5xl bg-red-400  p-6 rounded-full text-white font-bold">
            あけおめ〜🚀
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
