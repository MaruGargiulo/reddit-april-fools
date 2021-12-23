import { useApp } from './hooks/useApp'
import { SimulationContext } from './contexts/SimulationContext'

import Button from './components/Button'
import Counter from './components/Counter'
import Nav from './components/Nav/Nav'
import Metrics from './components/Metrics'
import UserInfo from './components/UserInfo'

import './App.css'

const App = () => {
  const {
    buttonRef,
    countdown,
    clicked,
    providerValue,
    showMetrics,
    handleUserClick,
    buttonLogic,
    currentUser,
  } = useApp()

  return (
    <SimulationContext.Provider value={providerValue}>
      <Nav />
      <div className="app-container">
        {showMetrics && <Metrics {...providerValue} />}
        <div className="counter-button">
          <Counter countdown={countdown} />
          <Button
            className="aprils-fool-button"
            handleClick={handleUserClick}
            disabled={clicked || !countdown}
            text="Click Me!"
            theme="primary"
          />
        </div>
        {(showMetrics || !countdown) && (
          <UserInfo
            userColor={currentUser.color}
            hasClicked={currentUser.hasClicked}
          />
        )}
      </div>
      <Button hidden handleClick={buttonLogic} ref={buttonRef} />
    </SimulationContext.Provider>
  )
}

export default App
