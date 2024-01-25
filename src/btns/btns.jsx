import React from 'react'
import { useStateContext } from '../context/context'

const Btns = () => {
  const { TextBtn, setTextBtn } = useStateContext()
// console.log(TextBtn)
  function btn(e) {
    
    e.preventDefault()
  setTextBtn(e.target.value)
}
  return (
    <div className='allbtners'>
      <button className='btners' onClick={btn} value={5}>5%</button>
      <button className='btners' onClick={btn} value={10}>10%</button>
      <button className='btners'onClick={btn} value={15}>15%</button>
      <button className='btners' onClick={btn} value={25}>25%</button>
      <button className='btners' onClick={btn} value={50}>50%</button>
      <input type='number' placeholder='Custom'className='btners in' value={TextBtn===""?"Custom":TextBtn} onChange={btn} />
    </div>
  )
}

export default Btns
