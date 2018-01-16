/* eslint-disable import/default */
import React from 'react'
import '../css/styles.css'

export default class Dropdown extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: this.props.collection[0],
      visible: false
    }
  }

  handleSelected (item) {
    this.setState({
      selected: item,
      visible: false
    })
    this.props.onChange(item.label)
  }

  handleVisible () {
    this.setState({
      visible: !this.state.visible
    })
  }

  render () {
    const {collection} = this.props
    return (
      <div className='dropdown'>
        <div className='selected_item' onClick={() => this.handleVisible()}>{this.state.selected.label}</div>
        <div className={`dropdown-content ${(this.state.visible ? ' show' : ' hidden')}`}>
          {
            collection.map(item =>
              <div onClick={() => this.handleSelected(item)} className='item' key={item.value}>{item.label}</div>
            )
          }
        </div>
      </div>
    )
  }
}
