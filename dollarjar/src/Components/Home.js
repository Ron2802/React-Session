import React, { Component } from 'react'
import {render} from 'react-dom'
import {ReactDOM} from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import AddUser from './AddUser'

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

    pagerender = (e) => {
        this.onsubmitchange(e)
    }

    onsubmitchange = (e) =>{
        this.setState = {
            render: true
        }
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
                            <button type="submit" onClick={this.pagerender}>Submit</button>
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