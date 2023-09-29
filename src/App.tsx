import { useState } from "react";
import Board from "./Board";

export const App = () => {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  const moveKnight = (x: number, y: number) => {
    setPosition([x, y]);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Board knightPosition={position} moveKnight={moveKnight} />
    </div>
  );
};
