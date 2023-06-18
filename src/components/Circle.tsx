import React, {useEffect, useRef} from "react";
import {select} from "d3";
import {
    drawCircle,
    pulseCircle
} from "../utils/drawCircle";

const width:number = window.innerWidth
const height:number = window.innerHeight
const startMainRadius: number = 120, maxMainRadius: number = 200
const startMiddleRadius: number = startMainRadius + 20, maxMiddleRadius: number = maxMainRadius + 20
const startOuterRadius: number = startMainRadius + 40, maxOuterRadius: number = maxMainRadius + 40
// const duration:number = 1000

export function Circle(duration: number | any){
    const svgRef = useRef<SVGSVGElement | null>(null)

    duration = duration*1000

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