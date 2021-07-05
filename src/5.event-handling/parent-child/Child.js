import React, { Component } from 'react'

export class Child extends Component {
    render() {
        const {name,callParent}=this.props
        return (
            <div>
            <h1>This is Child component {name}</h1>
            <button onClick={()=>callParent('child component')}>Click</button>
            </div>
        )
    }
}

export default Child
