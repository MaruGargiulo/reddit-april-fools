import React from 'react'
import PropTypes from 'prop-types'

import './UserInfo.css'

function UserInfo({ userColor, hasClicked }) {
  return (
    <div className="user-info">
      {!hasClicked && <p>Ups! No clickeaste el botón</p>}
      <p>
        Este es tu color:
        <span
          className="user-info__color"
          style={{ backgroundColor: userColor }}
        ></span>
      </p>
    </div>
  )
}

UserInfo.propTypes = {
  userColor: PropTypes.string,
  hasClicked: PropTypes.bool,
}

UserInfo.defaultProps = {
  userColor: '',
  hasClicked: false,
}

export default UserInfo
