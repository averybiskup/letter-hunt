import { useEffect, useState } from 'react'
import Link from 'next/link'

const LetterList = (props) => {

  const cols1 = props.width - props.rCol
  const cols2 = props.width - cols1 - 1

  console.log(props.width, props.rCol, cols1, cols2)


  let str = '';

  if (props.num === 1 && cols1 > 0 && cols2 > 0) {
    str = <div className='letter-row'>{props.letter.repeat(cols1)}<Link href='/test'><a>{props.hunt}</a></Link>{props.letter.repeat(cols2)}</div>
  } else {
    str = <div className='letter-row'>{props.letter.repeat(props.width)}</div>
  }
  
  return (
    str
  )
}

const hunt = () => {

  const [height, setHeight] = useState(0)
  const [width, setWidth] = useState(0)
  
  const letterWidth  = 7.2;
  const letterHeight = 15;
  
  const numRows = Math.floor(height / letterHeight);
  const numCols = Math.floor(width  / letterWidth);

  const randRow = Math.floor(Math.random() * numRows);
  const randCol = Math.floor(Math.random() * numCols);

  const arr = new Array(numRows).fill(0);

  const baseLetter = "t";
  const huntLetter = "a";

  arr[randRow] = 1;

  useEffect(() => {
    setHeight(window.innerHeight)
    setWidth(window.innerWidth)
    
  }, [])
  
  return (
    <div className='hunt-container'>
      {
        arr.map((val) => 
          <LetterList letter={baseLetter} hunt={huntLetter} width={numCols} num={val} rCol={randCol} />
        )
      }
    </div>  
  )
}

export default hunt
