import React from 'react';
import {SummaryContainer} from "./Summary.style"

const Summary = ({summary}) => {
    return (
        <SummaryContainer>
            <div>
                <h1>Total: {Math.round(summary.confirmed / 1000)}k Confirmed / {Math.round(summary.deaths / 1000)}k Deaths / {Math.round(summary.recovered / 1000)}k Recovered</h1>
            </div>
        </SummaryContainer>
    )
}

export default Summary
