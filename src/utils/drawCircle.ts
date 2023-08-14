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

// @ts-ignore
export function pulseCircle(circleId: string, duration: number, totalDuration: number, expandedRadius: number, reducedRadius: number) {
    const circleIdSelector: string = 'circle#' + circleId
    let circle = select(`${circleIdSelector}`)
    const timeLimit = totalDuration/duration
    let counter = 1
    console.log('timelimit', timeLimit)
    repeatPulse()

    function repeatPulse(){
        circle
            // grow
            .transition()
            .duration(duration/3)
            .attr("r", expandedRadius)
            // pause
            .transition()
            .duration(duration/3)
            // shrink
            .transition()
            .duration(duration/3)
            .attr("r", reducedRadius)
            .on("end",
                function(){
                    if(counter < timeLimit){
                        counter ++
                        repeatPulse()
                        console.log('test', counter)
                    }else{
                        console.log('end')
                        return
                    }
                })
    }
}

export function growCircle(circleId: string, duration: number, expandedRadius: number) {
    const circleIdSelector: string = 'circle#' + circleId
    let circle = select(`${circleIdSelector}`)

    return circle
        .transition()
        .duration(duration)
        .attr("r", expandedRadius)
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