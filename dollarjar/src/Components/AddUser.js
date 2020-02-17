import React, { Component} from 'react';
import '../App.css';

export default class AddUser extends Component {

    constructor(){
        super();
        this.state = {
            userData:{
                uid : '',
                name : '',
                balance: 0
            },
            userList: [],
            total: 0,
            panalty:10
        }
        this.createJar = this.createJar.bind(this);
    }

     handlerChngeInput = (e) =>{
        let user = e.target.value;
        let id = this.state.userList.length+1;
        console.log(user);
        
        this.setState({
            userData:{
                uid : id,
                name : user,
                balance: 0
            }
        })
    } 

    handlerAddBtn = () =>{
        let userData = this.state.userData;
        this.setState({
            userList: [...this.state.userList,userData]
        })
        console.log(this.state.userList);
    }

    createJar(item) {
        return (
            <div key={item.uid}>
                <ul>
                    <li> {item.name}</li> 
                    <h3> Balance : {item.balance} </h3>
                    <button type="button" onClick={() => this.addPoints(item)}> + </button> &nbsp;&nbsp; <button type="button" onClick={() => this.removePoints(item)}> - </button>
                </ul>
        </div>
            )
      }

      addPoints(item){
        console.log(item);
        item.balance += this.state.panalty; 
        this.setState({
            total: this.state.total +  this.state.panalty
        })
        
    }

    removePoints(item){
        const {userName} = this.props.location;
        console.log(this.props.location)
        if(userName.toLowerCase() == "chintan"){
            if (item.balance == 0 ) {
                alert("No Nagative Panalty")    
            } 
            else {
                item.balance -= this.state.panalty; 
                this.setState({
                    total: this.state.total -  this.state.panalty
            })  
            }
        }
        else{
            alert("Only Chintan Can Remove Panalty");
        }
    }

    render() {
        const {userName} = this.props.location;
        return (
            <div>
                <h1>Hello {userName}</h1> <hr/>
                    <input
                        type="text" id="user"
                        name="user" placeholder="Enter User Name"
                        value={this.state.userData.name}
                        onChange = {this.handlerChngeInput}
                        required
                    />
                    <button type="reset" onClick={this.handlerAddBtn}>add</button>
                    <h2 className="App">Total = {this.state.total} </h2>
                    {
                        this.state.userList.map((user)=>{
                            return this.createJar(user)
                        })                        
                    }
            </div>
        )
    }
}