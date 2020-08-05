// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state ={
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({
      name: ''
    })
  }
  
  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name: </label>
          <input id='name' type='text' onChange={this.handleChange} value={this.state.name}/>
          <br/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}


export default BandInput
