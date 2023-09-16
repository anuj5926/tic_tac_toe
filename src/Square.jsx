import { useState } from 'react';
import './App.css'



function Square({value ,onSquare }) {
    return (
        <>
            <button onClick={onSquare}>{value}</button>
        </>
    )

}

export default Square;