//?if/else conditional operator

import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn:false
        }
    }
    

    render() {
        if(this.state.isLoggedIn){
            return (
                <div>
                    <h2>Welcome User</h2>
                </div>
            )
        }else{
            return (
                <div>
                    <h2>Welcome Guest</h2>
                </div>
            )
        }
       
    }
}

export default UserGreeting

