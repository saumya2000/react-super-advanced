import React from 'react'

function NameListOne() {
    const names=["scott","adam","tuan"]
    return (
        <div>
            <h2>List Of Names using index</h2>
            <ul>
                <li>{names[0]}</li>
                <li>{names[1]}</li>
                <li>{names[2]}</li>
            </ul>
        </div>
    )
}

export default NameListOne
