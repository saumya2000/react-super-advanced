//?SHORT CIRCUIT OPEARTOR

import React, { Component } from 'react'

export class UserGreetingFour extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:true
        }
    }
    

    render() {
        return (
            
                this.state.isLoggedIn && <div><h2>Welcome User</h2></div>
            
        )
    }
}

export default UserGreetingFour
