import { useEffect } from "react";
import MoleHill from "../images/molehill.png"

const EmptySlot = (props)=> {

    useEffect(()=> {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout(()=>{
            props.toggle(true)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <>
            <img style={{'width' : '30vh'}}src={MoleHill} alt="Molehill" />
        </>
    )
}

export default EmptySlot