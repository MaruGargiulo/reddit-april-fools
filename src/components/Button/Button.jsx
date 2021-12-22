import React, { forwardRef } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import './Button.css'

const Button = forwardRef(
  ({ handleClick, disabled, hidden, className, text, theme }, ref) => (
    <button
      className={cn(
        {
          'button--primary': theme === 'primary',
          'button--hidden': hidden,
          'button--disabled': disabled,
        },
        'button',
        className
      )}
      onClick={handleClick}
      disabled={disabled}
      ref={ref}
    >
      {text && text}
    </button>
  )
)

Button.propTypes = {
  handleClick: PropTypes.func,
  disabled: PropTypes.bool,
  hidden: PropTypes.bool,
  className: PropTypes.string,
}

Button.defaultProps = {
  handleClick: () => {},
  disabled: false,
  hidden: false,
  className: '',
}

export default Button
