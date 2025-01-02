import { calculateInvestmentResults, formatter } from '../util/investment'

export default function Results({ input }) {
  const calculatedResult = calculateInvestmentResults(input)
  console.log(calculatedResult)
  const initialInvestment =
    calculatedResult[0].valueEndOfYear -
    calculatedResult[0].annualInvestment -
    calculatedResult[0].interest
  return (
    <table id='result'>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>interest (year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {calculatedResult.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment

          const totalAmoutInvested = yearData.valueEndOfYear - totalInterest
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmoutInvested)}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
