import React from 'react'
import {ListElContainer} from "./ListElement.style"

const ListElement = ({cData}) => {
    return (
        <ListElContainer>
            <div className="desc">
                <h3>{cData.Country}</h3>
                <p>{cData.TotalConfirmed} / {cData.TotalDeaths} / {cData.TotalRecovered}</p>
            </div>
            <div className="icon">
                <i class="fas fa-chart-area"></i>
            </div>
        </ListElContainer>
        )
}

export default ListElement
