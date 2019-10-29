import * as React from 'react';
import { useState, useEffect } from 'react';
import { Square } from '../square';

export const Board: React.FC = () => {
    function renderSquare(i: number): React.ReactElement {
      return (
        <Square value={squares[i]} onClick={() => handleClick(i)}/>
      );
    }

    function handleClick(i: number): void {
        let currentSquares = squares.slice();
        currentSquares[i] = 'X';
        setSquares(currentSquares);
    }
  
    const status = 'Next player: X';
    const [ squares, setSquares ] = useState<any[]>([]);

    // is this the right way?
    useEffect(() => {
        setSquares(new Array(9).fill(null));
    }, []);

    return (
    <div>
        <div className="status">{status}</div>
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