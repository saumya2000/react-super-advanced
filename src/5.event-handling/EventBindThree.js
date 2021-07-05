import React, { Component } from 'react'

export class EventBindThree extends Component {
constructor(props) {
    super(props)

    this.state = {
         message:"hello"
    }

    this.clickHandler=this.clickHandler.bind(this)
}

    clickHandler(event){
        console.log(event)
        // console.log(this)
        this.setState({
            message:"Thank you"
        })
    }

    render() {
        return (
            <div className="container">
                <h1>This is Event bind Three using binding in the constructor  ,{this.state.message}</h1>
                <button className="btn btn-primary"
                onClick={this.clickHandler}
                >Click Me
                </button>
            </div>
        )
    }
}

export default EventBindThree
