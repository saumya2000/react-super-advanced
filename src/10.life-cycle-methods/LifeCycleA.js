import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

export class LifeCycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
        console.log('lifecycleA constructor')
    }
    
    static getDerivedStateFromProps(){
        console.log('LifeCycleA getDerivedStateFromProps')
        return null
    }
    

    render() {
        console.log("lifecyleA render")
        return (
            <div>
               <LifeCycleB/> 
            </div>
        )
    }

    componentDidMount(){
        console.log('LifeCycleA componentDidMount')
    }
}

export default LifeCycleA
