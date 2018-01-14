/* eslint-disable import/default */
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import StateSelection from './StateSelection'

ReactDOM.render(
  <StateSelection name={'StateSelection'} />,
  document.getElementById('state_selection')
)
