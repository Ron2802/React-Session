import React, { Component } from 'react'

class Home extends Component{
    constructor(){
        super()

        this.state = {
            username:'',
            render: false
        }
    }

    usertext = (event) => {
        this.setState = {
            username : event.target.value
        }

    }

    pagerender = (username,event) => {
        console.log(username)
        console.log(event)
        console.log("ROnak")
        
    }

    pagerenderarg = (e) =>{
        this.pagerender(this.setState.username,e)
    }

    render(){
        return (
        <div>
            <fieldset>
                <legend>Registration</legend>
                <form>
                    <table>
                    <tr>
                        <td>UserName</td>
                        <td><input value={this.username} onChange={this.usertext}/></td>
                    </tr>
                    <tr>
                        <td>
                            <button type="submit" onClick={this.pagerenderarg}>Submit</button>
                        </td>
                    </tr>
                    </table>
                </form>
            </fieldset>
        </div>  
            )
    }
}
export default Home