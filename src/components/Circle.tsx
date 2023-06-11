import React, {useEffect, useRef} from "react";
import {select} from "d3";
import {drawCircle} from "../utils/drawCircle";


const width:number = window.innerWidth
const height:number = window.innerHeight
export function Circle(){
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(()=>{
        select(svgRef.current)
            .attr('width', width)
            .attr('height', height)

        drawCircle(svgRef, 'firstCircle', false)
    },)


    return (
        <div>
            <svg ref={svgRef}/>
        </div>
    );
}