import * as React from 'react';
import { useState } from 'react';

type SquareProps = {
    number: number
}

export const Square: React.FC<SquareProps> = ({number}) => {
    const [ value, setValue ]  = useState<number>(0);

    return (
        <button className="square" onClick={() => setValue(1)}>
            {value}
        </button>
    );

}