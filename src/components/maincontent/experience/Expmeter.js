import React, { useState, useEffect, useRef } from 'react'

export const Expmeter = (props) => {

    const [positions, setpostition] = useState(10)
    const i = useRef(10)

    useEffect(() => {
        var barpercent = setInterval(() => {
            i.current = i.current + 1
            setpostition(positions => positions + 1)
            if(i.current === props.percentage){
                clearInterval(barpercent)
            }
        }, 20)
    }, [])

    return (
        <div className='expmeter__cont'>
            <div className='expmeter__info'>
                <p>{props.title}</p>
                <p style={{ "left": `${positions}%` }}>{positions}%</p>
            </div>
            <div className='expmeter__bar'>
                <div className='expmeter__bar-green' style={{"width":`${positions}%`}}></div>
                <div className='expmeter__bar-white' style={{"width":`${100-positions}%`}}></div>
            </div>
        </div>
    )
}
