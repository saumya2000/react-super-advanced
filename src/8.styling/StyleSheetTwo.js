import React from 'react'
import './styling.css'

function StyleSheetTwo(props) {
    let className=props.primary && props.primary==="primary"?"primary":"no-class"
    return (
        <div>
            <h1 className={className}>Using StyleSheet</h1>
        </div>
    )
}

export default StyleSheetTwo
