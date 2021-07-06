import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             country:'',
             gender:'',
             isActive:false
        }
    }

    changeUserName(value){
        this.setState({
            username:value
        })
        // console.log(value)
    }

    changeComments(value){
        this.setState({
            comments:value
        })
    }

    changeCountry(value){
        this.setState({
            country:value
        })
    }

    changeGender(value){
        this.setState({
            gender:value
        })
    }

    checkIfactive(){
        this.setState({
            isActive:!this.state.isActive
        })
    }


    submitData(){
        // event.preventDefault();
        console.log(this.state.username)
        console.log(this.state.comments)
        console.log(this.state.country)
        console.log(this.state.gender)
        console.log(this.state.isActive)
    }
    

    render() {
        return (
            <div className="container">
                <h1>Form Component</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="">UserName</label>
                        <input 
                            type="text" 
                            className="form-control w-50"
                            value={this.state.username}
                            onChange={(event)=>this.changeUserName(event.target.value)}
                        />
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="">Comments</label>
                        <textarea 
                        className="form-control w-50"
                        value={this.state.comments}
                        onChange={(event)=>{this.changeComments(event.target.value)}}
                        ></textarea>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="">Country</label>
                        <select 
                            className="form-select w-50"
                            value={this.state.country}
                            onChange={(event)=>this.changeCountry(event.target.value)}
                            >
                            <option value="">Select</option>
                            <option value="1">India</option>
                            <option value="2">Japan</option>
                            <option value="3">Korea</option>
                        </select>
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="">Gender:</label>&nbsp;
                        <input type="radio" 
                            className="form-check-input" 
                            name="gender"
                            value={0}
                            onChange={(event)=>this.changeGender(event.target.value)}
                        />Male
                        <input type="radio" 
                            className="form-check-input" 
                            name="gender"
                            value={1}
                            onChange={(event)=>this.changeGender(event.target.value)}
                            />Female
                    </div>
                    <br/>
                    <div className="form-group">
                        <label htmlFor="">IsActive</label>
                        <input type="checkbox" 
                            className="form-check-input"
                            value={this.state.isActive}
                            onChange={()=>this.checkIfactive()}
                         />
                    </div>
                    <br/>
                    <div className="form-group">
                        <button type="button"
                             className="btn btn-primary"
                             onClick={(event)=>this.submitData(event)}
                             >Submit
                             </button>
                    </div>
                    <br/>
                </form>
                
            </div>
        )
    }
}

export default Form
