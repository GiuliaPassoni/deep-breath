import React from "react";
import {select} from "d3";

export function drawCircle(svgRef: React.MutableRefObject<SVGSVGElement | null>, circleId: string){
    const svg = svgRef.current
    let minRadius: number = 2, maxRadius: number = 200, radius: number = minRadius
    let time:number = 0,
        timeIncrease: number = time*2, timeDecrease: number = time*.5

    let myTimerCounter: number=0

    const myInterval: NodeJS.Timer = setInterval(()=>{
    // setInterval(()=>{
        myTimerCounter += 1
        if(myTimerCounter === 250){
            clearInterval(myInterval)
        }else {
            select(svg).append('circle')
                .attr('id', `${circleId}`)
                .attr('cx', '50%')
                .attr('cy', '50%')
                // .attr('r', radius > maxRadius? radius*timeDecrease : radius*timeIncrease )
                .attr('r', radius*time )
                .style('fill', '#a6a6a6');
        }
        time+=.5
        console.log('time', time)
    }, time)

    // clearInterval(myInterval)
}

// export function growCircle(circleRef: React.MutableRefObject<SVGSVGElement | null>, ){
//     const firstCircleRef = circleRef.current
//
//     let initialRadius = 20,
//         lastRadius = 50
//
//     setTimeout(()=>{
//         select(firstCircleRef).append('rect')
//             .attr('x', 10)
//             .attr('y', 120)
//             .attr('width', 600)
//             .attr('height', 40)
//             .attr('stroke', 'black')
//             .attr('fill', '#69a3b2');
//
//         console.log('timeout')
//     }, 1000)
// }