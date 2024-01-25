    import React, { createContext, useState, useContext, useEffect } from "react";
    import { v4 as uuidv4 } from 'uuid'
    uuidv4()

    export const Context = createContext()

export const GetContext = ({ children }) => {
    const [TextBtn, setTextBtn] = useState("0.00")
    const [bills, setbills] = useState("0.00")
    const [ppls, setPpl] = useState(1)
    let one = (ppls==="" ? 1 :ppls)
    const alls = ((bills * (1+ TextBtn / 100))/one).toFixed(2)
    const res =() => {
        setTextBtn("0.00"||0)
        setbills("0.00"||0)
        setPpl(1)

}
    console.log(alls)
    // console.log(TextBtn)
        return (
            <Context.Provider value={{ TextBtn, setTextBtn,bills, setbills,ppls, setPpl,alls ,res}}>
                {children}
        </Context.Provider>
        
        )
}
    export const useStateContext =()=>useContext(Context)