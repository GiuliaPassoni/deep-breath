import React, {useEffect, useRef} from 'react';
import './App.css';
import {Circle} from "./components/Circle";
import Timer from "./components/Timer";

function App() {
    return (
        <div className="App">
            <Circle/>
            <Timer minutes={10} seconds={0}/>
        </div>
    );
}

export default App;
