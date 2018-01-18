/* eslint-disable import/default */
import React from 'react'
import '../css/styles.css'
import PropTypes from 'prop-types'

export default class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: this.props.placeholder,
      visible: false
    }
  }

  handleSelected = (item) => (e) => {
    this.setState({
      selected: item,
      visible: false
    })
    this.props.onChange(item.label)
  }

  handleVisible = () => (e) => {
    this.setState({
      visible: !this.state.visible
    })
  }

  render () {
    const {collection} = this.props
    return (
      <div className='dropdown'>
        <div className='selected_item' onClick={this.handleVisible()}>{this.state.selected.label}</div>
        <div className={`dropdown-content ${(this.state.visible ? ' show' : ' hidden')}`}>
          {
            collection.map(item =>
              <div onClick={this.handleSelected(item)} className='item' key={item.value}>{item.label}</div>
            )
          }
        </div>
      </div>
    )
  }
}

Dropdown.propTypes = {
  collection: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.object
}
