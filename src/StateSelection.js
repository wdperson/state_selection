/* eslint-disable import/default */
import React from 'react'
import Dropdown from './components/Dropdown'
import PropTypes from 'prop-types'
import './css/styles.css'
import States from './data/states'

export default class StateSelection extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showStates: false
    }
  }

  handleCountryChange = (label) => {
    this.setState({ showStates: label === 'United States' })
  }

  handleStateChange = (label) => {
    console.log('state selected is: ', label)
  }

  render () {
    const { countries } = this.props
    return (
      <form>
        <div className="bottom-border">
          <Dropdown
            collection={countries}
            onChange={this.handleCountryChange}
            placeholder={{label: 'Country'}}
          />
        </div>
        <div className="bottom-border">
          <input type="text" placeholder='Permanent Address' value={this.state.address} />
        </div>
        <div className="bottom-border">
          <input type="text" placeholder='Permanent Address (Line 2)' value={this.state.address2} />
        </div>
        <div className="bottom-border">
          <input type="text" placeholder='City' value={this.state.city} />
        </div>
        {
          this.state.showStates === true ? (
            <div className="bottom-border">
              <Dropdown
                collection={States['US']}
                onChange={this.handleStateChange}
                placeholder={{label: 'States'}}
              />
            </div>
          ) : (
            <div className="bottom-border">
              <input type="text" placeholder="State" value={this.state.country_state} />
            </div>
          )
        }
        <div className="bottom-border">
          <input type="text" placeholder='Zip Code' value={this.state.zip_code} />
        </div>
        <div>
          <input type="submit" value="Submit" />
        </div>
      </form>
    )
  }
}

StateSelection.propTypes = {
  countries: PropTypes.array
}
