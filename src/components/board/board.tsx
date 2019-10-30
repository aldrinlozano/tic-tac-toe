import * as React from 'react';
import { Square } from '../square';

type BoardProps = {
    currentSquares: any,
    onClick: any
};

export const Board: React.FC<BoardProps> = ({currentSquares, onClick}) => {
    function renderSquare(i: number): React.ReactElement {
      return (
        <Square value={currentSquares[i]} onClick={() => onClick(i)}/>
      );
    }

    return (
    <div>
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
    </div>
    );
    
}