import React, { Component } from 'react'

export class EventBindTwo extends Component {
constructor(props) {
    super(props)

    this.state = {
         message:"hello"
    }
}

// ?arrow function will help to pass the parameters of the function

    clickHandler(){
        console.log(this)
        this.setState({
            message:"Thank you"
        })
        //  console.log(this.state.message)
        // console.log("this is click handler method")
    }

    render() {
        return (
            <div className="container">
                <h1>This is Event bind Two Using Fat arrow functions,{this.state.message}</h1>
                <button className="btn btn-primary"
                onClick={()=>this.clickHandler()}
                >Click Me
                </button>
            </div>
        )
    }
}

export default EventBindTwo
