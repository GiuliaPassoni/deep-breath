import React from 'react';
import './App.css';
import {Circle} from "./components/Circle";
import Timer from "./components/Timer";
import PulseTimer from "./components/PulseTimer";

const startMainRadius: number = 80, //120
    maxMainRadius: number = 160, //200
    maxMiddleRadius: number = maxMainRadius + 40, //+20
    maxOuterRadius: number = maxMainRadius + 80//+40
function App() {
    return (
        <div className="App">
            <Circle startMainRadius={startMainRadius} maxMainRadius={maxMiddleRadius} maxMiddleRadius={maxMiddleRadius} maxOuterRadius={maxOuterRadius}/>
            {/*<Timer minutes={2} seconds={0}/>*/}
            <PulseTimer minutes={2} seconds={0}/>
        </div>
    );
}

export default App;
