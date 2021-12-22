import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import './Metrics.css'

function Metrics({ clicksCount, usersColorMetrics }) {
  let shapedColors = []

  for (const color in usersColorMetrics) {
    shapedColors.push(
      <p className="metrics__color" style={{ backgroundColor: color }}>
        {usersColorMetrics[color]}
      </p>
    )
  }

  const infoText = useMemo(() => {
    if (!clicksCount) return 'Ningún usuario clickeó el botón'
    if (clicksCount === 1) return 'Gracias por clikear el botón! Activaste la simulación.'
    return `${clicksCount} usuarios clickearon le botón`
  }, [clicksCount])

  return (
    <div className="metrics">
      <p>{infoText}</p>
      {shapedColors.map((colorInfo) => colorInfo)}
    </div>
  )
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
