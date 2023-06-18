import React, {useEffect, useRef} from "react";
import {select} from "d3";
import {
    drawCircle,
    pulseCircle
} from "../utils/drawCircle";

const width:number = window.innerWidth
const height:number = window.innerHeight

interface circleRadii {
    startMainRadius: number,
    maxMainRadius: number,
    maxMiddleRadius: number,
    maxOuterRadius: number
}

export function Circle({startMainRadius,
                           maxMainRadius,
                           maxMiddleRadius,
                           maxOuterRadius}:circleRadii){
    const svgRef = useRef<SVGSVGElement | null>(null)

    let initialised: Boolean = false

    useEffect(()=>{
        if(!initialised){
            initialised = true
            select(svgRef.current)
                .attr('width', width/2)
                .attr('height', height/2)
                .attr('id', 'mySvgId')

            drawCircle(svgRef, 'firstCircle', startMainRadius, '#ffffff')
            drawCircle(svgRef, 'middleCircle', startMainRadius, 'rgba(255,255,255,0.5)')
            drawCircle(svgRef, 'outerCircle', startMainRadius, 'rgba(255,255,255,0.2)')
        }
    }, [initialised])


    return (
        <div>
            <svg ref={svgRef}/>
            <button onClick={()=>{
                pulseCircle('firstCircle', 1000, maxMainRadius, startMainRadius)
                pulseCircle('middleCircle', 1000, maxMiddleRadius, startMainRadius)
                pulseCircle('outerCircle', 1000, maxOuterRadius, startMainRadius)
            }}>Pulse</button>
        </div>
    );
}