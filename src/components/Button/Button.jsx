import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Button = forwardRef(({ handleClick, disabled }, ref) => (
  <button onClick={handleClick} disabled={disabled} ref={ref}>
    Botón
  </button>
))

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default Button
