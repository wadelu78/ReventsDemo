import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './testAction'
import { Button } from 'semantic-ui-react'
import TestPlace from './TestPlace'
import SimpleMap from './SimpleMap'

import { geocodeByAddress, getLatLng } from 'react-places-autocomplete'

const mapState = (state) => ({
  data: state.test.data,
})

const actions = {
  incrementCounter,
  decrementCounter,
}

class TestComponent extends Component {
  state = {
    latlng: {
      lat: 59.95,
      lng: 30.33,
    },
  }

  handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        this.setState({
          latlng: latLng,
        })
      })
      .catch((error) => console.error('Error', error))
  }
  render() {
    const { data, incrementCounter, decrementCounter } = this.props
    return (
      <div>
        <h1>Test Component</h1>
        <h3>The answer is: {data}</h3>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
        <br />
        <br />
        <TestPlace selectAddress={this.handleSelect} />
        <br />
        <SimpleMap key={this.state.latlng} latlng={this.state.latlng} />
      </div>
    )
  }
}

export default connect(mapState, actions)(TestComponent)
