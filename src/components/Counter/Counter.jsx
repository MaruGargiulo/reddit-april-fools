import React from 'react'
import PropTypes from 'prop-types'

import './Counter.css'

const Counter = ({ countdown }) => (
  <div className="counter">
    {countdown < 10 && 0}
    {countdown}
  </div>
)

Counter.propTypes = {
  countdown: PropTypes.number.isRequired,
}

export default Counter
