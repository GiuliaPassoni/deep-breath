import React, {useEffect, useRef, useState} from "react";
import {pulseCircle} from "../utils/drawCircle";
import {Simulate} from "react-dom/test-utils";
import durationChange = Simulate.durationChange;

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

    function timePass(){
        if (timer.seconds === 0 && timer.minutes > 0) {
            setTimer({minutes: timer.minutes -= 1, seconds: timer.seconds = 59})
        } else if (timer.minutes > 0 || timer.seconds > 0) {
            setTimer({minutes: timer.minutes, seconds: timer.seconds -= 1})
        } else if (timer.minutes === 0 && timer.seconds === 0) {
            console.log("Timer ended")
            setTimer({minutes: 0, seconds: 0})
            setStart(false)
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
        if(start){
            pulseCircle('firstCircle', duration, maxMainRadius, startMainRadius)
            pulseCircle('middleCircle', duration, maxMiddleRadius, startMainRadius)
            pulseCircle('outerCircle', duration, maxOuterRadius, startMainRadius)
        }
        console.log('start timer', start)
    }

    useEffect(() => {
        if(firstRender.current){
            firstRender.current = !firstRender.current
            return;
        }

        const pulseDuration = 15000 //this needs to be 3* the duration of each phase (expand, pause, shrink)
        let timePassed: number = pulseDuration - 100

        if(start){
            tick.current = setInterval(function(){
                timePassed+=100
                if(timePassed%1000 === 0){
                    timePass()
                }
                if(timePassed>=pulseDuration){
                    startPulsing(pulseDuration)
                    timePassed = 0
                }
            }, 100)

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

