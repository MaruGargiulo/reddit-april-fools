import React from 'react'
import PropTypes from 'prop-types'

const Counter = ({ countdown }) => <div>{countdown}</div>

Counter.propTypes = {
  countdown: PropTypes.number.isRequired,
}

export default Counter
