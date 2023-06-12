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
const startMainRadius: number = 50, maxMainRadius: number = 150
const startMiddleRadius: number = startMainRadius + 20, maxMiddleRadius: number = maxMainRadius + 20
const startOuterRadius: number = startMainRadius + 40, maxOuterRadius: number = maxMainRadius + 40
const duration:number = 1000

export function Circle(){
    const svgRef = useRef<SVGSVGElement | null>(null)
    let initialised: Boolean = false

    useEffect(()=>{
        console.log(svgRef.current, 'before')
        if(!initialised){
            initialised = true
            select(svgRef.current)
                .attr('width', width/2)
                .attr('height', height/2)
                .attr('id', 'mySvgId')

            drawCircle(svgRef, 'firstCircle', startMainRadius, '#ffffff')
            drawCircle(svgRef, 'middleCircle', startMainRadius, 'rgba(255,255,255,0.5)')
            drawCircle(svgRef, 'outerCircle', startMainRadius, 'rgba(255,255,255,0.2)')
            // testSelectSvgElement('firstCircle')
        }
    })


    return (
        <div>
            <svg ref={svgRef}/>
            <button onClick={()=>{
                pulseCircle('firstCircle', duration, maxMainRadius, startMainRadius)
                pulseCircle('middleCircle', duration, maxMiddleRadius, startMainRadius)
                pulseCircle('outerCircle', duration, maxOuterRadius, startMainRadius)
            }}>Pulse</button>
        </div>
    );
}