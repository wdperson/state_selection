/* eslint-disable import/default */
import React from 'react'
import './css/styles.css'
const STATES = require('./data/states')

export default class Dropdown extends React.Component {
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
        <select placeholder="Country" className="select_box" value={this.state.country} onChange={this.handleChange}>
        <option value="" hidden>Country</option>
          <option value="united_states">United States</option>
          <option value="canada">Canada</option>
          <option value="new_zealand">New Zealand</option>
        </select><br/>
        <input ype="text" placeholder='City' value={this.state.city} /><br/>
        { this.state.showStates == true
          ? <select ref="states" defaultValue="" required>
              {
                STATES["US"].map(state =>
                  <option key={state.value} value={state.value}>{state.label}</option>
                )
              }
           </select>
          : <input type="text" placeholder='State' value={this.state.country_state} />
        }<br/>
        <input type="text" placeholder='Zip Code' value={this.state.zip_code} /><br/>
        <input type="text" placeholder='Permanent Address' value={this.state.address} /><br/>
        <input type="text" placeholder='Permanent Address (Line 2)' value={this.state.address2} /><br/>
        <input type="text" placeholder='Country' value={this.state.country2} /><br/>
        <input type="text" placeholder='City' value={this.state.city2} /><br/>
        <input type="text" placeholder='State' value={this.state.country_state2} /><br/>
        <input type="text" placeholder='Zip Code' value={this.state.zip_code2} /><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
<div>
<ul>
<li>First Item </li>
<li>Second Item </li>
<li>Third Item </li>
</ul>
</div>
