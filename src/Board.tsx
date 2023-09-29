import BoardSquare from "./BoardSquare";
import Knight from "./Knight";

function renderPiece(
  x: number,
  y: number,
  [knightX, knightY]: [number, number]
) {
  if (x === knightX && y === knightY) {
    return <Knight />;
  }
}

function renderSquare(
  i: number,
  knightPosition: [number, number],
  moveKnight: (x: number, y: number) => void
) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  return (
    <div key={i} style={{ width: "12.5%", height: "12.5%" }}>
      <BoardSquare x={x} y={y} moveKnight={moveKnight}>
        {renderPiece(x, y, knightPosition)}
      </BoardSquare>
    </div>
  );
}

function Board({
  knightPosition,
  moveKnight,
}: {
  knightPosition: [number, number];
  moveKnight: (x: number, y: number) => void;
}) {
  const squares = Array.from({ length: 64 }).map((_, i) =>
    renderSquare(i, knightPosition, moveKnight)
  );

  return (
    <div
      style={{
        border: "1px solid black",
        width: "600px",
        height: "600px",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {squares}
    </div>
  );
}

export default Board;
