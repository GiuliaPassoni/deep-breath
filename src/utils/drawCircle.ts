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
    console.debug('pulseCircle', isDeepBreath)
    let growDuration, pauseDuration, shrinkDuration;
    if(isDeepBreath){
        growDuration = 5000
        pauseDuration = 5000
        shrinkDuration = 5000
    }else if(isResonantBreath){
        growDuration = 5000
        pauseDuration = 0
        shrinkDuration = 5000
    }else if(is4Breath){
        growDuration = 4000
        pauseDuration = 7000
        shrinkDuration = 8000
    }else{
        growDuration = duration/3 //we need /3 because there are 3 phases in total - start, pause, end
        pauseDuration = duration/3
        shrinkDuration = duration/3
    }

    console.debug('r', expandedRadius)

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