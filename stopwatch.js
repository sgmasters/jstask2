import {StopwatchTimer} from "./stopwatchTimer.js";

function Stopwatch(initSeconds) {
    new StopwatchTimer('stopwatch', initSeconds, this);

    this.onIntervalTick = function (lastDifferenceSeconds, startTime, myInterval) {
        const differenceMilliseconds = new Date().getTime() - startTime;
        return lastDifferenceSeconds + Math.round(differenceMilliseconds / 1000);
    };
}
export {Stopwatch};