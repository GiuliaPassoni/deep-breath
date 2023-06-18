import React, {useEffect, useRef, useState} from "react";

interface timeState {
    minutes: number;
    seconds: number;
}

export default function Timer({minutes = 5, seconds = 0}: timeState) {

    const initialTimer: timeState = {minutes, seconds}

    const [timer, setTimer] = useState<timeState>({
        minutes: minutes,
        seconds: seconds
    })

    const [start, setStart] = useState<Boolean>(false)
    const firstRender: React.MutableRefObject<boolean | undefined> = useRef()
    const tick: React.MutableRefObject<any> = useRef()

    function startTimer() {
        setStart(!start)
    }

    /* possible timer scenarios
    standard timePass (no reset)
    * minutes > 0 and seconds > 0, or if minutes == 0 but seconds > 0 => seconds -=1
    * when seconds = 0 , if minutes > 0 => minutes -=1, seconds = 59
    * if minutes = 0 and seconds = 0, timer ended
    * */
    function timePass() {
        if (timer.seconds === 0 && timer.minutes > 0) {
            setTimer({minutes: timer.minutes -= 1, seconds: timer.seconds = 59})
        } else if (timer.minutes > 0 || timer.seconds > 0) {
            setTimer({minutes: timer.minutes, seconds: timer.seconds -= 1})
        } else if (timer.minutes === 0 && timer.seconds === 0) {
            console.log("Timer ended")
            setTimer({minutes: 0, seconds: 0})
        }
    }

    /*
    * reset
    * minutes, seconds = input values i.e. function params.
    * */
    function resetTimer() {
        setTimer({minutes: initialTimer.minutes, seconds: initialTimer.seconds})
        setStart(false)
    }

    useEffect(() => {
        if(firstRender.current){
            firstRender.current = !firstRender.current
            return;
        }

        if(start){
            tick.current = setInterval(function(){
                timePass()
            }, 1000)
        }else{
            clearInterval(tick.current)
        }
        return () => clearInterval(tick.current)
    }, [start])

    return (
        <>
            <p>{`${timer.minutes.toString().padStart(2, '0')}:${timer.seconds.toString().padStart(2, '0')}`}</p>
            <button onClick={() => startTimer()}>{ !start ? "Start" : "Pause" }</button>
            <button onClick={()=> resetTimer()}>Reset</button>
        </>
    )
}