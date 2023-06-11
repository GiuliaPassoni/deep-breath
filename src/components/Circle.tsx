import React, {useEffect, useRef} from "react";
import {select} from "d3";
import {drawCircle, growCircle, pulseCircle, shrinkCircle} from "../utils/drawCircle";


const width:number = window.innerWidth
const height:number = window.innerHeight
const startRadius: number = 50

export function Circle(){
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(()=>{
        select(svgRef.current)
            .attr('width', width)
            .attr('height', height)

        drawCircle(svgRef, 'firstCircle', startRadius)
    },)


    return (
        <div>
            <svg ref={svgRef}/>
            <button onClick={()=>{pulseCircle('firstCircle', 300, startRadius)}}>Pulse</button>
            <button onClick={()=>{growCircle('firstCircle', 5000, 20, 300)}}>Grow</button>
            <button onClick={()=>{shrinkCircle('firstCircle',5000, 20, startRadius)}}>Shrink</button>
        </div>
    );
}