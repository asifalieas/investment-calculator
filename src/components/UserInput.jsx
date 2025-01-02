export default function UserInput({ onInputChange, userInput }) {
  return (
    <section id='user-input'>
      <div className='input-group'>
        <p>
          <label>Initial Investment</label>
          <input
            type='number'
            required
            value={userInput.initialInvestment}
            onChange={(event) =>
              onInputChange('initialInvestment', event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Yearly Investment</label>
          <input
            type='number'
            required
            value={userInput.annualInvestment}
            onChange={(event) =>
              onInputChange('annualInvestment', event.target.value)
            }
          ></input>
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label>Expected Return</label>
          <input
            type='number'
            required
            value={userInput.expectedReturn}
            onChange={(event) =>
              onInputChange('expectedReturn', event.target.value)
            }
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type='number'
            required
            value={userInput.duration}
            onChange={(event) => onInputChange('duration', event.target.value)}
          ></input>
        </p>
      </div>
    </section>
  )
}
