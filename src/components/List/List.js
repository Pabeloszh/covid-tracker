import React from 'react'

const List = () => {
    return (
        <div>
            <div className="container">
                <div className="search">
                    <input onChange={(e) => console.log(e.target.value)} type="text" placeholder='Search...'/>
                </div>
                <div className="list">

                </div>
            </div>
        </div>
    )
}

export default List
