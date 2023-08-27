import React, {useEffect, useRef, useState} from "react";
import {growCircle, pauseCircle, pulseCircle, shrinkCircle} from "../utils/drawCircle";
import ITimeState from '../interfaces/ITimeState'
import ICircleRadii from '../interfaces/ICircleRadii'
import {select} from "d3";
// const startMainRadius: number = 80, //120
//     maxMainRadius: number = 160, //200
//     maxMiddleRadius: number = maxMainRadius + 40, //+20
//     maxOuterRadius: number = maxMainRadius + 80//+40

type Props = ITimeState & ICircleRadii

export default function PulseTimer({...props}:Props ) {
    const initialTimer:ITimeState = {minutes: props.minutes, seconds: props.seconds}
    const [timer, setTimer] = useState<ITimeState>({
        minutes: props.minutes,
        seconds: props.seconds
    })

    const [start, setStart] = useState<Boolean | any>(false)
    const [userInput, setUserInput] = useState<ITimeState | any>({minutes: initialTimer.minutes, seconds: initialTimer.seconds})
    const firstRender: React.MutableRefObject<boolean | undefined> = useRef()
    const tick: React.MutableRefObject<any> = useRef()

    const [isDeepBreath, setIsDeepBreath] = useState<Boolean | any>( false)
    const [isResonantBreath, setIsResonantBreath] = useState<Boolean | any>(false)
    const [is4Breath, setIs4Breath] = useState<Boolean | any>(false)

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
        setTimer({minutes: userInput.minutes, seconds: userInput.seconds})
        setStart(false)
        shrinkCircle('firstCircle', 0, props.startMainRadius)
        shrinkCircle('middleCircle', 0, props.startMainRadius)
        shrinkCircle('outerCircle', 0, props.startMainRadius)
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
            pulseCircle('firstCircle', duration, props.maxMainRadius, props.startMainRadius)
            pulseCircle('middleCircle', duration, props.maxMiddleRadius, props.startMainRadius)
            pulseCircle('outerCircle', duration, props.maxOuterRadius, props.startMainRadius)
        }
        console.log('start timer', start)
    }


    useEffect(() => {
        if(firstRender.current){
            firstRender.current = !firstRender.current
            return;
        }

        const pulseDuration = 6000 //this needs to be 3* the duration of each phase (expand, pause, shrink)
        let timePassed: number = pulseDuration - 100

        if(start){
            tick.current = setInterval(function(){
                timePassed+=100
                if(timePassed%1000 === 0){
                    timePass()
                }
                if(timePassed>pulseDuration){
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
            <div className='timer'>
                <p className='timerDisplay'>{`${timer.minutes.toString().padStart(2, '0')}:${timer.seconds.toString().padStart(2, '0')}`}</p>
                <button id='start' onClick={() => {
                    startTimer()
                // }}>{ !start ? "Start" : "Pause" }</button>
                }}>Start</button>
                {/*todo: remove pause functionality bc it defeats the point of the breathing exercise*/}
                <button id='reset' onClick={()=> resetTimer()}>Reset</button>
            </div>
            <div className='presets'>
                <button id='deepBreathButton' onClick={()=>{
                    resetTimer()
                    // setUserInput({minutes: 5, seconds: 0})
                    // setTimer({minutes: 5, seconds: 0})
                    console.log(isDeepBreath)
                    setIsDeepBreath( true)
                    setIsResonantBreath(false)
                    setIs4Breath(false)
                }}>
                    5-5-5
                </button>
                <button id='resonantBreathButton' onClick={()=>{
                    setIsResonantBreath(true)
                    setIsDeepBreath(false)
                    setIs4Breath(false)
                }}>
                    5-0-5
                </button>
                <button id='otherBreathButton' onClick={()=>{
                    setIs4Breath(true)
                    setIsDeepBreath(false)
                    setIsResonantBreath(false)
                }}>
                    4-7-8
                </button>
            </div>
            {/*<div className='userSetTimer'>*/}
            {/*    <p>Or set your own timer:</p>*/}
            {/*    <input id='mins' type="number" value={userInput.minutes} onChange={(e)=>setUserInput({minutes: e.target.value, seconds: userInput.seconds})}/>*/}
            {/*    <span className="separator">:</span>*/}
            {/*    <input id='secs' type="number" value={userInput.seconds} onChange={(e)=>setUserInput({minutes: userInput.minutes, seconds: e.target.value})}/>*/}
            {/*    <button id='setTimerButton'*/}
            {/*            onClick={()=>{*/}
            {/*                resetTimer()*/}
            {/*                setTimer({minutes: userInput.minutes, seconds: userInput.seconds}*/}
            {/*                )*/}
            {/*            }}>*/}
            {/*        Set timer*/}
            {/*    </button>*/}
            {/*</div>*/}



        </>
    )
}

