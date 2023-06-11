import React from "react";
import {min, select} from "d3";

export function drawCircle(svgRef: React.MutableRefObject<SVGSVGElement | null>, circleId: string, startRadius:number){
    const svg = svgRef.current
    const circle = select(svg).append('circle')
        .attr('id', `${circleId}`)
        .attr('cx', '50%')
        .attr('cy', '50%')
        .attr('stroke','white')
        .attr("stroke-width", 5)
        .attr('r', startRadius)
        .style('fill', '#a6a6a6');

    return circle
}

export function pulseCircle(circleId:string, expandedRadius: number, reducedRadius: number){
    const circleIdSelector:string = 'circle#'+circleId
    let circle = select(`${circleIdSelector}`)

    return circle.transition()
        .duration(5000)
        .attr("stroke-width", 20)
        .attr('stroke', 'red')
        .attr("r", expandedRadius)
        .transition()
        .duration(5000)
        .attr('stroke-width', 0.5)
        .attr("r", reducedRadius)
        .ease()
}


export function growCircle(circleId:string, duration: number, strokeWidth: number, expandedRadius: number){
    const circleIdSelector:string = 'circle#'+circleId
    let circle = select(`${circleIdSelector}`)

    return circle.transition()
        .duration(duration)
        .attr("stroke-width", 20)
        .attr('stroke', 'red')
        .attr("r", 300)
}

export function shrinkCircle(circleId:string, duration: number, strokeWidth: number, reducedRadius: number){
    const circleIdSelector:string = 'circle#'+circleId
    let circle = select(`${circleIdSelector}`)

    return circle.transition()
        .duration(duration)
        .attr('stroke-width', 0.5)
        .attr("r", 200)
}