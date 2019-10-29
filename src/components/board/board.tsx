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
        currentSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(currentSquares);
        setXIsNext(!xIsNext);
    }

    function calculateWinner(squares: Array<any>) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }
    const [ squares, setSquares ] = useState<any[]>([]);
    const [ xIsNext, setXIsNext ] = useState<boolean>(true);

    //start render
    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = "Winner Found!!!";
    } else {
        status = `Next player: ${xIsNext ? 'X' : 'O'}`;
    }
 
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