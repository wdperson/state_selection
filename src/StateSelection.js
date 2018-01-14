/* eslint-disable import/default */
import React from 'react'
import styles from './css/styles.css'

const STATES = require('./data/states')

export default class StateSelection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {showStates: false}
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    event.target.value == "united_states"
    ? this.setState({ showStates: true })
    : this.setState({ showStates: false })
  }

  render() {
    return (
      <form>
        <select placeholder="Country" className="select_box" value={this.state.value} onChange={this.handleChange}>
          <option value=""></option>
          <option value="united_states">United States</option>
          <option value="canada">Canada</option>
          <option value="new_zealand">New Zealand</option>
        </select><br/>
        <input ype="text" placeholder='City' value={this.state.value} /><br/>
        { this.state.showStates == true
          ? <select ref="states" defaultValue="" required>
              <option value=""></option>
              {
                STATES["US"].map(state =>
                  <option key={state.value} value={state.value}>{state.label}</option>
                )
              }
           </select>
          : <input type="text" placeholder='State' value={this.state.value} />
        }<br/>
        <input type="text" placeholder='Zip Code' value={this.state.value} /><br/>
        <input type="text" placeholder='Permanent Address' value={this.state.value} /><br/>
        <input type="text" placeholder='Permanent Address (Line 2)' value={this.state.value} /><br/>
        <input type="text" placeholder='Country' value={this.state.value} /><br/>
        <input type="text" placeholder='City' value={this.state.value} /><br/>
        <input type="text" placeholder='State' value={this.state.value} /><br/>
        <input type="text" placeholder='Zip Code' value={this.state.value} /><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
