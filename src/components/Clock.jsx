import React, { useState, useEffect } from 'react';
import Timer from "./Timer";

const Clock = ({ initial, interval }) => {
    const initialMin = Math.floor(initial / 60);
    const intiialSec = initial % 60;

    const [timer, setTimer] = useState({ min: initialMin, sec: intiialSec });
    const [start, setStart] = useState(false)
    const [stop, setStop] = useState(true)


    const calculateTimervalue = (timer) => {
        const secondNow = timer.sec + interval
        const minNow = Math.floor(secondNow / 60) + timer.min
        // console.log(secondNow)
        return { min: minNow, sec: secondNow % 60 }
    }

    useEffect(() => {
        let timer
        if (start) {
            setStop(true)
            setTimeout(() => {
                timer = setTimer(timer => {
                    const newTime = calculateTimervalue(timer)
                    return { min: newTime.min, sec: newTime.sec }
                })
            }, 1000);
        }
        return () => clearTimeout(timer)
    }, [timer, start]);

    const stopBtnClicked = (e) => {
        setStart(false);
        if (!stop) {
            setTimer({ min: initialMin, sec: intiialSec })
        }
        setStop(!stop)
    }


    return (
        <div className="App-header">
            <Timer timer={timer} />
            <div className="flex-container">
                <button onClick={(e) => setStart(true)} className="btn"> start</button>
                <button onClick={(e) => stopBtnClicked(e)} className="btn">{stop ? "STOP" : "RESET"}</button>
            </div>
        </div>
    )
}

export default Clock;