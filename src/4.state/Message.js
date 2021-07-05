import React, { Component } from 'react'

export class Message extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:'saumya',
             message:'this is the message'
        }
    }
    subscribe(){
        this.setState({
            message:'Thanks for subscribing!!'
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button 
                onClick={()=>this.subscribe()} 
                className="btn btn-primary"
                >Subscribe
                </button>
            </div>
        )
    }
}

export default Message
