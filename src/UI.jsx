import { useState } from 'react';
import './App.css'
import Square from './Square';
import calculateWinner from './Winner';



function UI() {
    const [isnext, setisnext] = useState(true)
    const [square, setsquare] = useState(Array(9).fill(null));
    const [count, setcount] = useState(0)

    function handleclick(i) {
        setcount(count+1);
        if (square[i] || calculateWinner(square)) {
            return;
        }
        const next = square.slice();
        if (isnext) {
            next[i] = "X";
            setisnext(false);
        }
        else {
            next[i] = "O";
            setisnext(true);
        }
        setsquare(next);
    }
    var w = calculateWinner(square);
    var status;
    if (w) {
        status = "Winner : " + w;
    }
    else {
        if(count==9){
               status="Draw";
        }
        else{
            status = "Next Player : " + (isnext ? "X" : "O");
        }

    }

    function reset(){
        setisnext(true);
        setsquare([""]);
        w="";
        status="";
        setcount(0);
    }

    return (
        <>
            <div>
            <button className='reset' onClick={reset}>reset</button>
            </div>
            <div className='gamebox'>
                <h1>{status}</h1>
                <div className="board-row">
                    <Square value={square[0]} onSquare={() => { handleclick(0) }} />
                    <Square value={square[1]} onSquare={() => { handleclick(1) }} />
                    <Square value={square[2]} onSquare={() => { handleclick(2) }} />
                </div>
                <div className="board-row">
                    <Square value={square[3]} onSquare={() => { handleclick(3) }} />
                    <Square value={square[4]} onSquare={() => { handleclick(4) }} />
                    <Square value={square[5]} onSquare={() => { handleclick(5) }} />
                </div>
                <div className="board-row">
                    <Square value={square[6]} onSquare={() => { handleclick(6) }} />
                    <Square value={square[7]} onSquare={() => { handleclick(7) }} />
                    <Square value={square[8]} onSquare={() => { handleclick(8) }} />
                </div>
            </div>
        </>
    )

}

export default UI;