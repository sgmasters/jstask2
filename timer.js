import {StopwatchTimer} from './stopwatchTimer.js';

function Timer(initSeconds) {
    new StopwatchTimer('timer', initSeconds, this);

    this.onIntervalTick = function (lastDifferenceSeconds, startTime, myInterval) {
        const differenceMilliseconds = new Date().getTime() - startTime;
        let differenceSeconds = lastDifferenceSeconds - Math.round(differenceMilliseconds / 1000);
        if (differenceSeconds === 0) {
            clearInterval(myInterval);
            console.log('stopped');
        }
        return differenceSeconds;
    };
}
export {Timer};