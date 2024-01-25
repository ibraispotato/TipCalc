import React from 'react'
import Btns from "../btns/btns"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { useStateContext } from '../context/context'
import "./mainPage.css"
const MainPage = () => {
  const { TextBtn, setTextBtn,bills, setbills,ppls, setPpl,alls,res } = useStateContext()
  // console.log(alls)
  return (
    <div className='alls'>
      <div className='colorall'>
      {/* <h1>tip calc</h1> */}
      <div className='left'>
        <div className='bills'>
           <h2>Bill</h2>
        <input type='number' className='inputBill' placeholder='$' value={bills} onChange={(e)=>setbills(e.target.value)}/>
        </div>
        <div className='AllBtns'>
          <h2>Select Tip</h2>
          <Btns />
       </div>
        <div className='nums'>
          <h2>Number of People</h2>
            <input type='number' className='numsinput'value={ppls} onChange={(e)=>setPpl(e.target.value)} />
        </div>
      </div>
      <div className='right'>
        <div className='amountTip'>
          <div>
            <p className='tip'>Tip Amount</p>
          <p className='person'>/Person</p>
          </div>
          <div>
              <h1 className='zero'>$ {TextBtn===""?"0.00":TextBtn}</h1>
          </div>
          
        </div>
        <div className='amountTip'>
          <div>
            <p className='tip'>Total Amount</p>
          <p className='person'>/Person</p>
          </div>
          <div>
              <h2 className='zero'>$ {alls===0?"0.00":alls}</h2>
          </div>
          
          </div>
          <div>
            <button className='reset' onClick={res}>Reset</button>
          </div>
        </div>
        </div>
    </div>
  )
}

export default MainPage
