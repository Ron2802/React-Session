import React, { Component, useState } from 'react'

export default class AddUser extends Component{
    constructor(props){
        super(props)
        this.state = {
            users:[],
            total:0,
            balance:0,
            rate:10,
            count:0
        }
    }

    AddUserName = (event) => {
        event.preventDefault();
        const name = event.target.elements.user.value;
       // console.log(name)
       const user = {
           'id':this.state.count,
           'name': name,
           'balance':this.state.balance
       }
        this.setState (users =>({
            users: [...this.state.users, user]
        })) 
       console.log(user) 
    }

    addDollar =(event)=>{
        const bal = event.target.value
        console.log(bal)
        this.setState({
            fruits: [ ...this.state.users, {
                'id': e.target.id,
                'value': e.target.value
            }],
          });
    }

    render(){
      //  console.log(this.props.location.state.username);
        return(
            <div>
                <h1>Welcome</h1>
                <fieldset>
                    <legend>Add User</legend>
                    <form  onSubmit={this.AddUserName}>
                    <table>
                        <tr>
                            <td>
                                <input type="text" name="user" placeholder="UserName"/>
                            </td>
                            <td>
                                <button type="submit">AddUser</button>
                            </td>
                        </tr>
                    </table>
                    </form>
                </fieldset>
                <fieldset>
                    <legend>UserList</legend>
                         {this.state.users.map(item => {
                            return <table>
                                <tr>
                                    <td>{item.name}</td>
                                    <td><input value={this.state.balance} readOnly/></td>
                                    <td><button value={item.id} onClick={this.addDollar}>plus</button></td>
                                    <td><button onClick={this.minusDollar}>Minus</button></td>
                                </tr>
                            </table>
                        })}
                </fieldset>
            </div>
        )
    }
}