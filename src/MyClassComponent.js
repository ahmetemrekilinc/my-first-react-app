import React, {Component} from "react";
import "./MyClassComponent.css";

class MyClassComponent extends Component {

    state = {
        myCounter: 5,
        myInputValue: "default val"
    };

    myClickEvent = () => {
        let myCounter = this.state.myCounter;
        myCounter++;
        this.setState({
            myCounter: myCounter
        });
    };

    handleOnInputChange = (event) => {
        this.setState({
           myInputValue: event.target.value
        });
    };

    render(){

        let myVariable = "my variable";

        return <div>this is my class-based component and my name is {this.props.name} and my var is {myVariable} <br/>
            {this.props.children}
            <br/>
            my counter: {this.state.myCounter} <button onClick={this.myClickEvent} >increase counter</button>
            <br/>
            <input value={this.state.myInputValue} onChange={(event) => this.handleOnInputChange(event)} />
            my input value = {this.state.myInputValue}
            <br/>
            <div className="myClass" >this is class-styled div</div>
            <div style={{color: "blue", backgroundColor: "red", fontSize: this.state.myCounter+"px"}} >this is inline-styled div</div>
        </div>;
    }

}

export default MyClassComponent;