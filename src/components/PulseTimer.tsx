import React, {useEffect, useRef, useState} from "react";
import {pulseCircle} from "../utils/drawCircle";

interface timeState {
    minutes: number;
    seconds: number;
}

const startMainRadius: number = 80, //120
    maxMainRadius: number = 160, //200
    maxMiddleRadius: number = maxMainRadius + 40, //+20
    maxOuterRadius: number = maxMainRadius + 80//+40

export default function PulseTimer({minutes = 5, seconds = 0}: timeState) {
    const initialTimer: timeState = {minutes, seconds}
    const [timer, setTimer] = useState<timeState>({
        minutes: minutes,
        seconds: seconds
    })

    const [start, setStart] = useState<Boolean | any>(false)
    const firstRender: React.MutableRefObject<boolean | undefined> = useRef()
    const tick: React.MutableRefObject<any> = useRef()

    let myEffectTest: boolean = false

    function timePass(){
        if (timer.seconds === 0 && timer.minutes > 0) {
            setTimer({minutes: timer.minutes -= 1, seconds: timer.seconds = 59})
        } else if (timer.minutes > 0 || timer.seconds > 0) {
            setTimer({minutes: timer.minutes, seconds: timer.seconds -= 1})
        } else if (timer.minutes === 0 && timer.seconds === 0) {
            console.log("Timer ended")
            setTimer({minutes: 0, seconds: 0})
        }
    }

    function resetTimer() {
        setTimer({minutes: initialTimer.minutes, seconds: initialTimer.seconds})
        setStart(false)
    }

    function startTimer() {
        setStart(!start)
    }
/*
*     when timer starts, pulse should start
* when timer pause, pulse should freeze
* when timer resets, so does pulse
* when timer finishes, pulse is back to stage 0
*
* */

    function startPulsing(duration: number){
        // let myIntervalTest = setInterval(()=>{
            pulseCircle('firstCircle', duration, maxMainRadius, startMainRadius)
            pulseCircle('middleCircle', duration, maxMiddleRadius, startMainRadius)
            pulseCircle('outerCircle', duration, maxOuterRadius, startMainRadius)
        // }, duration)
    }

    useEffect(() => {
        if(firstRender.current){
            firstRender.current = !firstRender.current
            return;
        }

        if(start){
            tick.current = setInterval(function(){
                timePass()
                if(!myEffectTest){
                    myEffectTest = true
                    startPulsing(5000)
                }
            }, 1000)

        }else{
            clearInterval(tick.current)
        }
        return () => clearInterval(tick.current)
    }, [start])

    return (
        <>
            <p>{`${timer.minutes.toString().padStart(2, '0')}:${timer.seconds.toString().padStart(2, '0')}`}</p>
            <button onClick={() => {
                startTimer()
            }}>{ !start ? "Start" : "Pause" }</button>
            <button onClick={()=> resetTimer()}>Reset</button>
            {/*<button onClick={()=> startPulsing(1000)}>Start pulsing</button>*/}
        </>
    )
}

