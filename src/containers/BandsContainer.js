import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <ul>
          {this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)}
        </ul>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}


const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: (band) => dispatch({type: 'ADD_BAND', band: band})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
