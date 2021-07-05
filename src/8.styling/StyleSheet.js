import React from 'react'
import './styling.css'
import StyleSheetTwo from './StyleSheetTwo'

function StyleSheet() {
    const colorName='primary'
    return (
        
        // <React.Fragment>
        //     <StyleSheetTwo primary="primary"/>
        // </React.Fragment>
        <div>
            <h2 className={`${colorName}`}>Using StyleSheets</h2>
        </div>
    )
}

export default StyleSheet
