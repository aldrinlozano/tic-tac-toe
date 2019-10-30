import * as React from 'react';
import { useState, useEffect } from 'react';
import { Board } from '../board'

type HistoryProps = {
    squares: any[] //figure this out later
};

export const Game : React.FC = () => {
    const [ history, setHistory ] = useState<[HistoryProps]>([{squares: []}]);
    const [ squares, setSquares ] = useState<any[]>([]);
    const [ xIsNext, setXIsNext ] = useState<boolean>(true);

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

    function handleClick(i: number): void {
        const historySet = history;
        const currentHistory = historySet[historySet.length - 1];
        const currentSquares = currentHistory.squares.slice();

        if (calculateWinner(currentSquares) || currentSquares[i]) {
            return;
        }

        currentSquares[i] = xIsNext ? 'X' : 'O';
        setSquares(currentSquares);
        setXIsNext(!xIsNext);

        //FIGURE OUT WHAT'S HAPPENING HERE
        setHistory(history.concat([{squares: currentSquares}]))
        setXIsNext(!xIsNext);
    }

    useEffect(() => {
        const init = {squares: [new Array(9).fill(null)]};
        setHistory([init]);
    }, []);

    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board 
                    currentSquares={current.squares}
                    onClick={(i: any) => handleClick(i)}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{/* TODO */}</ol>
            </div>
      </div>
    )
}