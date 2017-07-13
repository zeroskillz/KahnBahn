// static imports
require('../assets/css/kahnbahn/core.scss')

// js
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'


const root = document.getElementById('kahnbahn')


ReactDOM.render(<App/>, root)
