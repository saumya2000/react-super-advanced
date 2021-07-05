import React, { Component } from 'react'

export class EventBindFour extends Component {
constructor(props) {
    super(props)

    this.state = {
        name:"saumya",
         message:"hello"
    }

    // this.clickHandler=this.clickHandler.bind(this)
}

    clickHandler=(event,one ,two)=>{
        console.log(event,one,two)
        // console.log(this)
        // console.log(target.value)
        this.setState({
            message:"Thank you"
        })
    }

    render() {
        return (
            <div className="container">
                <h1>This is Event bind Four using fat arrow functions for the function itself  ,{this.state.message}</h1>
                {/* <input type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})}></input> */}
                <button className="btn btn-primary"
                onClick={this.clickHandler}
                >Click Me
                </button>
                <br/>
                <button className="btn btn-primary"
                onClick={(event)=>{this.clickHandler(event,'one','two')}}
                >Click Again
                </button>
            </div>
        )
    }
}

export default EventBindFour



