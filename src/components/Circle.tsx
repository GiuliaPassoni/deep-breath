import React, {useEffect, useRef} from "react";
import {select} from "d3";
import {drawCircle} from "../utils/drawCircle";


const width:number = window.innerWidth
const height:number = window.innerHeight
export function Circle(){
    const svgRef = useRef<SVGSVGElement | null>(null)

    useEffect(()=>{
        // svgRef.current
        select(svgRef.current).append('circle').attr('cx', '50%')
            .attr('cy', '50%')
            .attr('r', 20)
            .style('fill', 'green');

        drawCircle(svgRef)
    },)


    return (
        <div>
            <svg ref={svgRef}/>
        </div>
    );
}