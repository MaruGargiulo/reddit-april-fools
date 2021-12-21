import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'

const Button = forwardRef(({ handleClick, disabled, ...props }, ref) => (
  <button onClick={handleClick} disabled={disabled} ref={ref} {...props} >
    Botón
  </button>
))

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  disabled: false,
}

export default Button
