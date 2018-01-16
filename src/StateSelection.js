/* eslint-disable import/default */
import React from 'react'
import './css/styles.css'
import Dropdown from './components/Dropdown'

const STATES = require('./data/states')

export default class StateSelection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {showStates: false}
  }

  handleCountryChange (label) {
    label === 'United States'
      ? this.setState({ showStates: true })
      : this.setState({ showStates: false })
  }

  handleStateChange (label) {
    console.log('state selected is: ', label)
  }

  render () {
    const countries = [{ value: 'US', label: 'United States' }, { value: 'CA', label: 'Canada' }, { value: 'NZ', label: 'New Zealand' }]
    return (
      <form>
        <div className="bottom-border"><Dropdown collection={countries} onChange={(label) => this.handleCountryChange(label)} /></div>
        <div className="bottom-border"><input type="text" placeholder='City' value={this.state.city} /></div>
        { this.state.showStates === true
          ? <div className="bottom-border"><Dropdown collection={STATES['US']} onChange={(label) => this.handleStateChange(label)} /></div>
          : <div className="bottom-border"><input type="text" placeholder='State' value={this.state.country_state} /></div>
        }
        <div className="bottom-border"><input type="text" placeholder='Zip Code' value={this.state.zip_code} /></div>
        <div className="bottom-border"><input type="text" placeholder='Permanent Address' value={this.state.address} /></div>
        <div className="bottom-border"><input type="text" placeholder='Permanent Address (Line 2)' value={this.state.address2} /></div>
        <div className="bottom-border"><input type="text" placeholder='Country' value={this.state.country2} /></div>
        <div className="bottom-border"><input type="text" placeholder='City' value={this.state.city2} /></div>
        <div className="bottom-border"><input type="text" placeholder='State' value={this.state.country_state2} /></div>
        <div className="bottom-border"><input type="text" placeholder='Zip Code' value={this.state.zip_code2} /></div>
        <div><input type="submit" value="Submit" /></div>
      </form>
    )
  }
}
