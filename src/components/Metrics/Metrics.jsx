import React, { useMemo } from 'react'
import PropTypes from 'prop-types'

import './Metrics.css'

function Metrics({ clicksCount, usersColorMetrics }) {
  let shapedColors = []

  for (const color in usersColorMetrics) {
    shapedColors.push(
      <span className="metrics__color" style={{ backgroundColor: color }}>
        {usersColorMetrics[color]}
      </span>
    )
  }

  const infoText = useMemo(() => {
    if (!clicksCount) return 'Ningún usuario clickeó el botón'
    if (clicksCount === 1)
      return 'Gracias por clickear el botón! Activaste la simulación.'
    return `${clicksCount} usuarios clickearon el botón`
  }, [clicksCount])

  return (
    <div className="metrics">
      <p className="metrics__info">{infoText}</p>
      <div className="metrics__colors-count">
        {shapedColors.map((colorInfo) => colorInfo)}
      </div>
    </div>
  )
}

Metrics.propTypes = {
  clicksCount: PropTypes.number,
  usersColorMetrics: PropTypes.array,
}

Metrics.defaultProps = {
  clicksCount: 0,
  usersColorMetrics: [],
}

export default Metrics
