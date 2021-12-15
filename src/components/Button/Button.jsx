import React, { useState } from 'react'
import PropTypes from 'prop-types'

function Button({ handleClick, disabled }) {
  return (
    <button onClick={handleClick} disabled={disabled}>
      Botón
    </button>
  )
}

Button.propTypes = {}

export default Button
