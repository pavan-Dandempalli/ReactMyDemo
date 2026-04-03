import React, {useEffect} from 'react'
import "./Ticktok.css";
import Square from './Square';

const Ticktok = () => {
   const [board, setBoard] = React.useState(Array(9).fill(null));
   const [isXNext, setIsXNext] = React.useState(true);
   const [winner, setWinner] = React.useState(null);



   const handleClick = (index) => {
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);   

   }

   useEffect(() => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
      else if (!board.includes(null)) {
        setWinner("It's a draw!");
        return;
      }else{
        setWinner(null);
      }
        
    }


  }, [board]); 


   
  return (
    <div>
      <p>Ticktok</p>
      <div>
         {
            winner?<p>Winner:{winner}</p>:
            <>
             <div className='form-row'>
            <Square value={board[0]} onClick={() => handleClick(0)} />
            <Square value={board[1]} onClick={() => handleClick(1)} />
            <Square value={board[2]} onClick={() => handleClick(2)} />        
        </div>
        <div className='form-row'>
            <Square value={board[3]} onClick={() => handleClick(3)} />
            <Square value={board[4]} onClick={() => handleClick(4)} />
            <Square value={board[5]} onClick={() => handleClick(5)} />
        </div>
        <div className='form-row'>
            <Square value={board[6]} onClick={() => handleClick(6)} />
            <Square value={board[7]} onClick={() => handleClick(7)} />
            <Square value={board[8]} onClick={() => handleClick(8)} />
        </div>
            </>
         }
       
      </div>
      
    </div>
  )
}

export default Ticktok
