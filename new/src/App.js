import React, { Component } from 'react';
import logo from './logo.svg';
import {Responsive, WidthProvider} from 'react-grid-layout';
import './App.css';
var ReactGridLayout = require('react-grid-layout');

class App extends Component {

    constructor(){
    super();
    this.state = {
      products: [],
    };
    }
  //  state = {
  //     data: []
  //  }
   componentDidMount = ()=> {
      fetch('http://localhost:3000/api/products', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        responseJson.sort(this.price);
         //console.log(responseJson.id);
         for(var i =0 ;i<500 ;i++){
           if(i % 20 === 0 ){
              //console.log("eimaste sta 20arakia");
           }
           console.log(responseJson[i].price);
         }
         this.setState({

            products : responseJson
            
         })
      })
      
      .catch((error) => {
         console.error(error);
      });
     //console.log(products);
     // this.setState({products:products});
   }
    

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Test</h1>
        </header>
        <div className="row">
          {/*layout={layout}*/}
          <ReactGridLayout className="layout"  cols={12} rowHeight={30} width={1200}> 
            <div key="a"></div>
            <div key="b"></div>
            <div key="c"></div>
          </ReactGridLayout>
          {/*<div className="col-3">{this.state.products}</div> */}
          <div className="col-9">...</div> 
        </div>
        <p className="App-intro">
          <br>{this.responseJson}</br>
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        </p>
      </div>
    );
  }
}

export default App;
