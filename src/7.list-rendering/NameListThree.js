import React from 'react'

function NameListThree() {
    const names=["scott","adam","tuan"]
    const nameList=names.map((name,index)=><h2 key={index}>{name}</h2>)
    return (
        <div>
            <h2>List Of Names using map outside jsx</h2>
          {nameList}  
        </div>
    )
}

export default NameListThree
