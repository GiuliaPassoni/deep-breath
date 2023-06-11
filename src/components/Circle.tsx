import React, {useEffect, useRef} from "react";
import {select} from "d3";
import {
    drawCircle,
    growCircle,
    pulseCircle,
    shrinkCircle,
    testSelectSvgElement
} from "../utils/drawCircle";


const width:number = window.innerWidth
const height:number = window.innerHeight
const startRadius: number = 50, maxRadius: number = 300
const duration:number = 1000

export function Circle(){
    const svgRef = useRef<SVGSVGElement | null>(null)
    let initialised: Boolean = false

    useEffect(()=>{
        console.log(svgRef.current, 'before')
        if(!initialised){
            initialised = true
            select(svgRef.current)
                .attr('width', width)
                .attr('height', height)
                .attr('id', 'mySvgId')

            drawCircle(svgRef, 'firstCircle', startRadius)
            console.log(svgRef.current, 'test my useEffect')
            testSelectSvgElement('firstCircle')
        }
    })


    return (
        <div>
            <svg ref={svgRef}/>
            <button onClick={()=>{pulseCircle('firstCircle', duration, maxRadius, startRadius)}}>Pulse</button>
            <button onClick={()=>{growCircle('firstCircle', duration, 20, maxRadius)}}>Grow</button>
            <button onClick={()=>{shrinkCircle('firstCircle',duration, 20, startRadius)}}>Shrink</button>
        </div>
    );
}