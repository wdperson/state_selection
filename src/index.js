/* eslint-disable import/default */
import '@babel/polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import StateSelection from './StateSelection'

const countries = [{ value: '', label: '' }, { value: 'US', label: 'United States' }, { value: 'CA', label: 'Canada' }, { value: 'NZ', label: 'New Zealand' }]

ReactDOM.render(
  <StateSelection name={'StateSelection'} countries={countries} />,
  document.getElementById('state_selection')
)
