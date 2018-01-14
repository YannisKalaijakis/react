import React, { Component } from 'react';
  const API = 'https://localhost:3000/';


const urlForUsername = products =>
  `https://localhost:3000/products`

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      requestFailed: false,
      products:[]
    }
  }

  componentDidMount() {
   fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ hits: data.hits }))
      .then(d => d.json())
      .then(d => {
        this.setState({
          productData: d
        })
      }, () => {
        this.setState({
          requestFailed: true
        })
      })
  }

  render() {

    if (this.state.requestFailed) return <p>Failed the request!</p>
    if (!this.state.productData) return <p>Loading...</p>
    return (
      <div>
        <h2>{this.state.productData.id}</h2>
      </div>
    )
  }
}

export default Products;