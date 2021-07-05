import React from 'react'

function NameListTwo() {
    const names=["scott","adam","tuan"]
    return (
        
        <div>
            <h2>List Of Names using map inside jsx</h2>
            {
            
            names.map((name,index)=><h2 key={index}>{name}{index}</h2>)
        }
        </div>
    )
}

export default NameListTwo
