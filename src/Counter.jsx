// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react'
import './index.css'


export default class Counter extends Component {
  constructor()
  {
    super()
      this.state={
        count:0
      }
    }
    handleadd=()=>{
      this.setState({count:this.state.count+1})
    }
    handleminus=()=>{
      this.setState({count:this.state.count-1})
    }
    handlereset=()=>{
      this.setState({count:0})
    }
  render() {
    return (
      <div className='one'>
      <h1>{this.state.count}</h1>
      <div className='two'>
      <button onClick={this.handleminus}>-</button>
      <button onClick={this.handlereset}>Reset</button>
      <button onClick={this.handleadd}>+</button>
      </div>
      </div>
    )
  }
}
