//?Ternary conditional operator

import React, { Component } from 'react'

export class UserGreetingThree extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isLoggedIn:true
        }
    }
    
    render() {
        return (
           
                this.state.isLoggedIn?
                <div><h2>Welcome User</h2></div>
                :<div><h2>Welcome Guest</h2></div>
          
        )
    }
}

export default UserGreetingThree
