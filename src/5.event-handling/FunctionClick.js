import React from 'react'

function FunctionClick() {
    function callMe(){
        console.log("button is clicked")
    }

    return (
        <div>
            <h1>Event handling</h1>
           <button className="btn btn-primary" onClick={callMe}>Click</button> 
           {/* we don't have to invoke the fn if we are using a function */}
        </div>
    )
}

export default FunctionClick
