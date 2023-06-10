import React from "react";
import {select} from "d3";

export function drawCircle(svgRef: React.MutableRefObject<SVGSVGElement | null>){
    const svg = svgRef.current
    select(svg).append('rect').attr('x', 10)
        .attr('y', 120)
        .attr('width', 600)
        .attr('height', 40)
        .attr('stroke', 'black')
        .attr('fill', '#69a3b2');
}