import React, { Component } from 'react'
import {render} from 'react-dom'
import {Redirect} from 'react-router'
import AddUser from './AddUser'
import { Link } from 'react-router-dom'

class Home extends Component{
    constructor(props){ 
        super(props)
        this.state = {
            username:'cdc',
            render: false
        }
    }

    usertext = (event) => {
        this.setState = {
            username : event.target.value,
            render:true
        }
        console.log(this.setState.username)
    }
    render(){   
        console.log(this.setState.username)
        return (
        <div>
            <fieldset>
                <legend>Registration</legend>
                <form>
                    <table>
                    <tr>
                        <td>UserName</td>
                        <td><input type = "text" name="name" onClick={this.usertext}/></td>
                    </tr>
                    <tr>
                        <td>
                        <Link to ={{
                             pathname:'/AddUser',
                             username:this.state.username}}>
                            <button type="submit">Submit</button></Link>
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