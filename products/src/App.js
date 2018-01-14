import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fetch from 'react-fetch'
// import api from './api.js';


class App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //   products: [],
  //   productName: ''
  //   }
  // }
  // componentWillMount(){
  //   api.getProducts().then((responseJson) =>{
  //     this.setState({
  //       product: responseJson.products,
  //       productName:responseJson.products[0].size
  //     })
  //   });
  // }


  render() {
    
    return (
      <div className="App">
        <header >
          No Header
         
        </header>
        <p className="App-intro">
          <Fetch url="http://localhost:3000/products">
            < TestComponent/>
          </Fetch>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
//https://medium.com/@taion/react-routing-and-data-fetching-ec519428135c
//https://css-tricks.com/learning-react-container-components/
class TestComponent extends React.Component{
  render(){
    //if(this.props != null){
    console.log("gege")
    var k = this.props;
    //console.log(k[0].id)
    //console.log(k[0].id)
    //console.log(this.props);
    //}
    //console.log(this.state.id)
    return <div/>
  }
}


export default App;
