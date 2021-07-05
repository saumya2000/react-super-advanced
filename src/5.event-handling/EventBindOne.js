import React, { Component } from 'react'

export class EventBind extends Component {
constructor(props) {
    super(props)

    this.state = {
         message:"hello"
    }
}

    clickHandler(event){
        console.log(event)
        // console.log(this)
        this.setState({
            message:"Thank you"
        })
        //  console.log(this.state.message)
        // console.log("this is click handler method")
    }

    render() {
        return (
            <div className="container">
                <h1>This is Event bind sing bind function,{this.state.message}</h1>
                <button className="btn btn-primary"
                onClick={this.clickHandler.bind(this)}
                >Click Me
                </button>
            </div>
        )
    }
}

export default EventBind
