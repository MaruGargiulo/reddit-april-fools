import React from 'react'
import PropTypes from 'prop-types'

function Metrics({ clicksCount, usersColorMetrics }) {
  return <div>{clicksCount}</div>
}

Metrics.propTypes = {
  clicksCount: PropTypes.number,
  usersColorMetrics: PropTypes.object,
}

Metrics.defaultProps = {
  clicksCount: 0,
  usersColorMetrics: {},
}

export default Metrics
