import Header from './components/Header'
import Results from './components/Results'
import UserInput from './components/UserInput'
import { useState } from 'react'

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  })

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      const changedUserInput = {
        ...prevUserInput,
        [inputIdentifier]: +newValue, //this plus is used for type conversion : string->int
      }

      return changedUserInput
    })
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onInputChange={handleChange} />
      <Results input={userInput} />
    </>
  )
}

export default App
