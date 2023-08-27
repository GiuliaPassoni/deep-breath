import React from "react";
import {select} from "d3";
import {Simulate} from "react-dom/test-utils";
import pause = Simulate.pause;

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
export function pulseCircle(circleId: string, duration: number, expandedRadius: number, reducedRadius: number, isDeepBreath: Boolean = false, isResonantBreath: Boolean = false, is4Breath: Boolean = false) {
    const circleIdSelector: string = 'circle#' + circleId
    let circle = select(`${circleIdSelector}`)
    // const timeLimit = totalDuration/duration
    // let counter = 1
    // console.log('timelimit', timeLimit)
    return circle
        // grow
        .transition()
        .duration(
            isDeepBreath ? 5000
                : isResonantBreath ? 5000
                : is4Breath? duration*4000
                    : duration/3 //we need /3 because there are 3 phases in total - start, pause, end
        )
        .attr("r", expandedRadius)
        // pause
        .transition()
        .duration(isDeepBreath ? 5000
            : isResonantBreath ? 0
                : is4Breath? duration*7000
                    : duration/3)
        // shrink
        .transition()
        .duration(isDeepBreath ? 5000
            : isResonantBreath ? 5000
                : is4Breath? 8000
                    : duration/3)
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