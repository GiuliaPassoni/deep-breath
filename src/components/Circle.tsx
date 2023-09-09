import React, {useEffect, useRef} from "react";
import {select} from "d3";
import { drawCircle } from "../utils/drawCircle";
import ICircleRadii from '../interfaces/ICircleRadii'

const width:number = window.innerWidth
const height:number = window.innerHeight

export function Circle({...props}:ICircleRadii){
    const svgRef = useRef<SVGSVGElement | null>(null)

    let initialised: Boolean = false

    useEffect(()=>{
        if(!initialised){
            initialised = true
            select(svgRef.current)
                .attr('width', width/3)
                .attr('height', .4*height)
                .attr('id', 'mySvgId')

            drawCircle(svgRef, 'firstCircle', props.startMainRadius, '#ffffff')
            drawCircle(svgRef, 'middleCircle', props.startMainRadius, 'rgba(255,255,255,0.5)')
            drawCircle(svgRef, 'outerCircle', props.startMainRadius, 'rgba(255,255,255,0.2)')
        }
    }, [initialised])


    return (
        <div>
            <svg ref={svgRef}/>
        </div>
    );
}