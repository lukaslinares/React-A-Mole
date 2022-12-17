import { useEffect } from "react";
import moleImg from "../images/mole.png"

const Mole = (props)=> {

    useEffect(()=> {
        let randSeconds = Math.ceil(Math.random() * 10000)
        let timer = setTimeout(()=>{
            props.toggle(false)
        }, randSeconds)
        return () => clearTimeout(timer)
    })

    return (
        <>
            <img style={{'width':'30vh'}} src={moleImg} alt="Mole" onClick={props.handleClick} />
        </>
    )
}

export default Mole