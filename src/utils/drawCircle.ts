import React from "react";
import {min, select} from "d3";

export function drawCircle(svgRef: React.MutableRefObject<SVGSVGElement | null>, circleId: string, increase: Boolean){
    const svg = svgRef.current
    let time:number = 0

    let myTimerCounter: number=0

    const myInterval: NodeJS.Timer = setInterval(()=>{
        let timeIncrease: number = time*2, timeDecrease: number = time*.5
        console.log('timeIncrease', timeIncrease, 'timeDecrease', timeDecrease)
        let minRadius: number = 2, maxRadius: number = 200,
            radius: number = increase ? minRadius : maxRadius

        myTimerCounter += 1
        if(myTimerCounter === 250){
            clearInterval(myInterval)
        }else {
            select(svg).append('circle')
                .attr('id', `${circleId}`)
                .attr('cx', '50%')
                .attr('cy', '50%')
                .attr('stroke','black')
                .attr('r', increase ? radius*time : radius-time)
                .style('fill', '#a6a6a6');
        }
        time+=.25
        console.log('time', time)
    }, time)
}