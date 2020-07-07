import React, {Component} from "react";
import axios from "axios";

class MyDataComponent extends Component {

    state = {
        items: []
    };

    componentDidMount(){
        console.log("MyDataComponent mounteddd");
        this.retrieveNextElement();
    }

    retrieveNextElement = () => {
        axios.get("https://jsonplaceholder.typicode.com/todos/" + (this.state.items.length + 1) ).then((result) => {
            console.log(result.data);
            let currentItems = [...this.state.items];
            currentItems.push(result.data);
            this.setState({items: currentItems});
        });
    };

    render(){

        let myHeaderRow = <tr>
            <td>ID</td>
            <td>Title</td>
        </tr>;

        let myRowItems = this.state.items.map((item, index) => {
            return <tr key={index} >
                <td>
                    {item.id}
                </td>
                <td>
                    {item.title}
                </td>
            </tr>;
        });

        let myTable = <table border="1" >{myHeaderRow}{myRowItems}</table>;

        return <div>
            this is my data component
            <br/>
            <button onClick={() => this.retrieveNextElement()} >retrieve next element</button>
            {myTable}
        </div>;
    }
}

export default MyDataComponent;