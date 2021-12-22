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
    userLogged,
  } = useApp()

  return (
    <SimulationContext.Provider value={providerValue}>
      <Nav />
      <div className="app-container">
        {showMetrics && <Metrics {...providerValue} />}
        <Counter countdown={countdown} />
        <Button
          className="aprils-fool-button"
          handleClick={handleUserClick}
          disabled={clicked || !countdown}
          text="Click Me!"
          theme="primary"
        />
        {(showMetrics || !countdown) && (
          <UserInfo
            userColor={userLogged.color}
            hasClicked={userLogged.hasClicked}
          />
        )}
      </div>
      <Button hidden handleClick={buttonLogic} ref={buttonRef} />
    </SimulationContext.Provider>
  )
}

export default App
