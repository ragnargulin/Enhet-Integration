import CounterButton from "./components/CounterButton";
import ScoreDisplay from "./components/ScoreDisplay";
import ScoreButton from "./components/ScoreButton";
import { useState } from "react";


function App() {
    const [score, setScore] = useState(0);

  return (
    <div>
      <h1>Vite + React</h1>

      <CounterButton />
      <ScoreDisplay score={score} />
      <ScoreButton onClick={() => setScore(score + 1)} />
    </div>
  );
}

export default App;
