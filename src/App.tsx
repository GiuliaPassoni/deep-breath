import React from 'react';
import './App.scss';
import {Circle} from "./components/Circle";
import PulseTimer from "./components/PulseTimer";

const startMainRadius: number = 60, //120
    maxMainRadius: number = 120, //200
    maxMiddleRadius: number = maxMainRadius + 30, //+20
    maxOuterRadius: number = maxMainRadius + 60//+40
function App() {
    return (
        <>
            <main>
                <h1 className='title'>Breath in</h1>
                <h2 className='subtitle'>
                    <span id='hold'>Hold</span>
                    <br/>
                    <span id='breath-out'>Breath out</span>
                </h2>
                <h5 className='disclaimer'>Personal interpretation of the Nerva app animation. </h5>
                {/*<section className="instructions">*/}
                {/*    <h3>*/}
                {/*        Instructions*/}
                {/*    </h3>*/}
                {/*    <div className='instructions-text'>*/}
                {/*        Breath in as the circle expands.<br/>*/}
                {/*        Hold your breath as the expansion pauses. <br/>*/}
                {/*        Breath out as the circle shrinks.*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*<section className='more-text'>*/}
                {/*    <div className='breath-style'>*/}
                {/*        You can set your own timer, or you can choose a preset:*/}
                {/*        <ul>*/}
                {/*            <li>*/}
                {/*                <div className="bold">Deep breathing*: 5-5-5</div>*/}
                {/*                <div>Breath in for 5; hold for 5; exhale for 5.</div>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <div className="bold">Resonant breathing: 5-0-5</div>*/}
                {/*                <div>Breath in for 5; exhale for 5.</div>*/}
                {/*            </li>*/}
                {/*            <li>*/}
                {/*                <div className="bold">4-7-8 breathing</div>*/}
                {/*                <div>Breath in for 4; hold for 7; exhale for 8.</div>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*        <div className='explain'>*Also known as diaphragmatic breathing, this breathing technique has been proven to reduce your physical stress levels (Hopper et al., 2019). </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                <section className="animation">
                    <Circle startMainRadius={startMainRadius} maxMainRadius={maxMainRadius} maxMiddleRadius={maxMiddleRadius} maxOuterRadius={maxOuterRadius}/>
                    <PulseTimer minutes={5} seconds={0}  startMainRadius={startMainRadius} maxMainRadius={maxMainRadius} maxMiddleRadius={maxMiddleRadius} maxOuterRadius={maxOuterRadius}/>
                </section>

            </main>
            <footer>
                <div> © Giulia Passoni 2023 </div>
            </footer>
        </>

    );
}

export default App;
