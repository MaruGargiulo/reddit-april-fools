// COUNTDOWN STEPS
const STEP_ONE = 'STEP_ONE'
const STEP_TWO = 'STEP_TWO'
const STEP_THREE = 'STEP_THREE'
const STEP_FOUR = 'STEP_FOUR'
const STEP_FIVE = 'STEP_FIVE'
const STEP_SIX = 'STEP_SIX'

// BUTTON STATUS
const DISABLED = 'DISABLED'
const DID_NOT_CLICK = 'DID_NOT_CLICK'

const colorTable = {
  [STEP_ONE]: { color: 'purple' },
  [STEP_TWO]: { color: 'blue' },
  [STEP_THREE]: { color: 'green' },
  [STEP_FOUR]: { color: 'yellow' },
  [STEP_FIVE]: { color: 'orange' },
  [STEP_SIX]: { color: 'red' },
  [DID_NOT_CLICK]: { color: 'grey' },
  [DISABLED]: { color: 'white' },
}

const isStepOne = (number) => number <= 60 && number >= 52
const isStepTwo = (number) => number <= 51 && number >= 42
const isStepThree = (number) => number <= 41 && number >= 32
const isStepFour = (number) => number <= 31 && number >= 22
const isStepFive = (number) => number <= 21 && number >= 12
const isStepSix = (number) => number <= 11 && number > 0
const didNotClick = (number) => number === 0

export const userColor = (countdown) => ({
  ...(isStepOne(countdown) && colorTable[STEP_ONE]),
  ...(isStepTwo(countdown) && colorTable[STEP_TWO]),
  ...(isStepThree(countdown) && colorTable[STEP_THREE]),
  ...(isStepFour(countdown) && colorTable[STEP_FOUR]),
  ...(isStepFive(countdown) && colorTable[STEP_FIVE]),
  ...(isStepSix(countdown) && colorTable[STEP_SIX]),
  ...(didNotClick(countdown) && colorTable[DID_NOT_CLICK]),
})
