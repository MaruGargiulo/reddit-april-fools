import React from 'react'
import Button from '../Button'

import reditLogo from './reddit-logo.png'
import magGlass from './mag-glass.svg'
import './Nav.css'

function Nav() {
  return (
    <div className="nav-bar">
      <img className="nav-bar__img" src={reditLogo} alt="reddit-logo" />
      <div className="nav-bar__search">
        <img src={magGlass} alt="Search icon" className='nav-bar__search__icon'/>
        <input type="text" placeholder="Search Reddit" />
      </div>
      <div>
        <Button
          className="nav-bar__button __primary-inverted"
          text="Log In"
          theme="secondary-inverted"
        />
        <Button
          className="nav-bar__button __primary"
          text="Sign Up"
          theme="secondary"
        />
      </div>
    </div>
  )
}

export default Nav
