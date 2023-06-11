import React from "react";
import {min, select} from "d3";

export function drawCircle(svgRef: React.MutableRefObject<SVGSVGElement | null>, circleId: string){
    const svg = svgRef.current
    const circle = select(svg).append('circle')
        .attr('id', `${circleId}`)
        .attr('cx', '50%')
        .attr('cy', '50%')
        .attr('stroke','white')
        .attr("stroke-width", 5)
        .attr('r', 200)
        .style('fill', '#a6a6a6');

    return circle
}

export function pulseCircle(svgRef: React.MutableRefObject<SVGSVGElement | null>, circleId:string){
    const circleIdSelector:string = 'circle#'+circleId
    // const svg = svgRef.current
    // let circle = svg.select(circleIdSelector)
    let circle = select(`${circleIdSelector}`)

    circle.transition()
        .duration(5000)
        .attr("stroke-width", 20)
        .attr('stroke', 'red')
        .attr("r", 300)
        .transition()
        .duration(5000)
        .attr('stroke-width', 0.5)
        .attr("r", 200)
        .ease()
}