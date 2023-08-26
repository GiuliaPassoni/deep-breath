import React from 'react';
import './App.scss';
import {Circle} from "./components/Circle";
import PulseTimer from "./components/PulseTimer";

const startMainRadius: number = 80, //120
    maxMainRadius: number = 160, //200
    maxMiddleRadius: number = maxMainRadius + 40, //+20
    maxOuterRadius: number = maxMainRadius + 80//+40
function App() {
    return (
        <>
            <main>
                <h1>Breathing Exercise</h1>
                <h2>Replicating the Nerva app animation</h2>
                <section className="instructions">
                    <h3>
                        Instructions
                    </h3>
                    <div className='instructions-text'>
                        Breath in as the circle expands.<br/>
                        Hold your breath as the expansion pauses. <br/>
                        Breath out as the circle shrinks.
                    </div>
                </section>
                <section className='more-text'>
                    <div className='breath-style'>
                        You can set your own timer, or you can choose a preset:
                        <ul>
                            <li>
                                <div className="bold">Deep breathing*: 5-5-5</div>
                                <div>Breath in for 5; hold for 5; exhale for 5.</div>
                            </li>
                            <li>
                                <div className="bold">Resonant breathing: 5-0-5</div>
                                <div>Breath in for 5; exhale for 5.</div>
                            </li>
                            <li>
                                <div className="bold">4-7-8 breathing</div>
                                <div>Breath in for 4; hold for 7; exhale for 8.</div>
                            </li>
                        </ul>
                        <div className='explain'>*Also known as diaphragmatic breathing, this breathing technique has been proven to reduce your physical stress levels (Hopper et al., 2019). </div>
                    </div>
                </section>
                <section className="animation">
                    <Circle startMainRadius={startMainRadius} maxMainRadius={maxMiddleRadius} maxMiddleRadius={maxMiddleRadius} maxOuterRadius={maxOuterRadius}/>
                    <PulseTimer minutes={5} seconds={0}/>
                </section>

            </main>
            <footer>
                <div> Giulia Passoni 2023 </div>
                <span className='citation'>Hopper, Susan I.1,2; Murray, Sherrie L.1,2; Ferrara, Lucille R.1,2; Singleton, Joanne K.1,2. Effectiveness of diaphragmatic breathing for reducing physiological and psychological stress in adults: a quantitative systematic review. JBI Database of Systematic Reviews and Implementation Reports 17(9):p 1855-1876, September 2019. | DOI: 10.11124/JBISRIR-2017-003848 </span>
            </footer>
        </>

    );
}

export default App;
