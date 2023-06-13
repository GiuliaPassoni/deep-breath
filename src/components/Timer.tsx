import React, {useEffect, useState} from "react";

interface timeState {
    minutes: number;
    seconds: number;
}
export default function Timer({ minutes = 0, seconds = 0}: timeState) {

    const [timer, setTimer] = useState<timeState>({
        minutes: minutes,
        seconds: seconds
    })

    function passTime(){
        if(timer.minutes === 0 && timer.seconds === 0){
            resetTimer()
        }else if(timer.seconds === 0){
            setTimer({minutes: timer.minutes-1, seconds: 59})
        }else{
            setTimer({minutes: timer.minutes, seconds: timer.seconds-1})
        }
    }

    function startTimer(){
    }

    function resetTimer(){
        setTimer({minutes: timer.minutes, seconds: timer.seconds})
        console.log('test')
    }

    useEffect(()=>{
        const timerId = setInterval(()=>passTime(), 1000)
        return () => clearInterval(timerId)
    })

    return (
        <>
            <p>{`${timer.minutes.toString().padStart(2, '0')}:${timer.seconds.toString().padStart(2, '0')}`}</p>
            <button>Start</button>
            <button onClick={()=> resetTimer()}>Reset</button>
        </>
    )
}