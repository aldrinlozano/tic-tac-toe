import * as React from 'react';
import { useState } from 'react';

type SquareProps = {
    value: number,
    onClick: any
}

export const Square: React.FC<SquareProps> = ({value, onClick}) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );

}