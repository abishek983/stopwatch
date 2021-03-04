import React from 'react';

const Timer = ({timer: {min, sec}}) => {
    return (
        <div>
            <span>{min >= 10 ? min : "0" + min}</span>
            <span>:</span>
            <span>{sec >= 10 ? sec : "0" + sec}</span>
        </div>
    );
}

export default Timer;
