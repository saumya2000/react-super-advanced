import React, { Component } from 'react'

export class Welcome extends Component {
    render() {
        return (
            <div>
                
                <h2>Developer Name: {this.props.name} and Skill:{this.props.skill}</h2>
            <p>{this.props.children}</p>
            </div>
        )
    }
}

export default Welcome

//we can modify state values but not props
//props are just used to pass values
//>react 16 enabled the functionality of changing values by using hooks
