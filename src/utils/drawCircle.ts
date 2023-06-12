import React from "react";
import {select} from "d3";

export function drawCircle(svgRef: React.MutableRefObject<SVGSVGElement | null>, circleId: string, startRadius: number, colour: string) {
    const svg = svgRef.current
    const circle = select(svg).append('circle')
        .attr('id', `${circleId}`)
        .attr('cx', '50%')
        .attr('cy', '50%')
        .attr('r', startRadius)
        .style('fill', colour);

    return circle
}

export function testSelectSvgElement(svgId: string, svgElementType?: string){
    const idSelector: string = svgElementType + '#' + svgId
    let selectedSvg = select(`${idSelector}`).attr("style", "outline: thin solid red;")
    return selectedSvg
}

export function pulseCircle(circleId: string, duration: number, expandedRadius: number, reducedRadius: number) {
    const circleIdSelector: string = 'circle#' + circleId
    let circle = select(`${circleIdSelector}`)

    return circle
        // grow
        .transition()
        .duration(duration)
        .attr("r", expandedRadius)
        // pause
        .transition()
        .duration(duration)
        // shrink
        .transition()
        .duration(duration)
        .attr("r", reducedRadius)
        .ease()
}


export function growCircle(circleId: string, duration: number, strokeWidth: number, expandedRadius: number) {
    const circleIdSelector: string = 'circle#' + circleId
    let circle = select(`${circleIdSelector}`)

    return circle.transition()
        .duration(duration)
        .attr("stroke-width", strokeWidth)
        .attr('stroke', 'red')
        .attr("r", expandedRadius)
}

export function shrinkCircle(circleId: string, duration: number, strokeWidth: number, reducedRadius: number) {
    const circleIdSelector: string = 'circle#' + circleId
    let circle = select(`${circleIdSelector}`)

    return circle.transition()
        .duration(duration)
        .attr('stroke-width', strokeWidth)
        .attr("r", reducedRadius)
}