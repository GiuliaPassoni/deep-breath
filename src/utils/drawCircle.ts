import React from "react";
import {select} from "d3";
import {Simulate} from "react-dom/test-utils";

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


// export function pulseCircle(circleId: string, duration: number, totalDuration: number, expandedRadius: number, reducedRadius: number, pauseAnimation: Boolean) {
export function pulseCircle(circleId: string, duration: number, expandedRadius: number, reducedRadius: number, breathingPreset: number = 0) {
    const circleIdSelector: string = 'circle#' + circleId
    let circle = select(`${circleIdSelector}`)
    let growDuration, pauseDuration, shrinkDuration;

    switch(breathingPreset) {
        case 1: {
            growDuration = 5000
            pauseDuration = 5000
            shrinkDuration = 5000
            break;
        }
        case 2: {
            growDuration = 5000
            pauseDuration = 0
            shrinkDuration = 5000
            break;
        }
        case 3: {
            growDuration = 4000
            pauseDuration = 7000
            shrinkDuration = 8000
            break;
        }
        default: {
            growDuration = duration/3 //we need /3 because there are 3 phases in total - start, pause, end
            pauseDuration = duration/3
            shrinkDuration = duration/3
            break;
        }
    }

    return circle
        // grow
        .transition()
        .duration(growDuration)
        .attr("r", expandedRadius)
        // pause
        .transition()
        .duration(pauseDuration)
        // shrink
        .transition()
        .duration(shrinkDuration)
        .attr("r", reducedRadius)
}

export function growCircle(circleId: string, duration: number, expandedRadius: number) {
    const circleIdSelector: string = 'circle#' + circleId
    let circle = select(`${circleIdSelector}`)

    return circle
        .transition()
        .duration(duration)
        .attr("r", expandedRadius)
}

export function pauseCircle(circleId: string, duration: number) {
    const circleIdSelector: string = 'circle#' + circleId
    let circle = select(`${circleIdSelector}`)

    return circle
        // pause
        .transition()
        .duration(duration)
}

export function shrinkCircle(circleId: string, duration: number, reducedRadius: number) {
    const circleIdSelector: string = 'circle#' + circleId
    let circle = select(`${circleIdSelector}`)

    return circle
        .transition()
        .duration(duration)
        .attr("r", reducedRadius)
}