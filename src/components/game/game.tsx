import * as React from 'react';
import { Board } from '../board'

export const Game : React.FC = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
      </div>
    )
}