import React, { ReactNode } from "react";

interface ISquareProps {
  black: boolean;
  children: ReactNode;
}

export default function Square({ black, children }: ISquareProps) {
  return (
    <div
      style={{
        backgroundColor: black ? "black" : "white",
        color: black ? "white" : "black",
        width: "100%",
        height: "100%",
      }}
    >
      {children}
    </div>
  );
}
