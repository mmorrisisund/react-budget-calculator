import React, { useState } from 'react'
import { v4 as uuid } from 'uuid'

import './App.css'
import Alert from './components/Alert'
import ExpenseList from './components/ExpenseList'
import ExpenseForm from './components/ExpenseForm'

const initialExpense = [
  { id: uuid(), charge: 'rent', amount: 1600 },
  { id: uuid(), charge: 'car payment', amount: 400 },
  { id: uuid(), charge: 'credit card', amount: 1200 }
]

function App () {
  const [expenses, setExpenses] = useState(initialExpense)
  const [charge, setCharge] = useState('')
  const [amount, setAmount] = useState('')
  const [alert, setAlert] = useState({ show: false })

  const handleCharge = e => setCharge(e.target.value)
  const handleAmount = e => setAmount(e.target.value)
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => setAlert({ show: false }), 3000)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (charge !== '' && amount > 0) {
      setExpenses([...expenses, { id: uuid(), charge, amount }])
      handleAlert({ type: 'success', text: 'item added' })
      setCharge('')
      setAmount('')
    } else {
      handleAlert({
        type: 'danger',
        text: 'charge cannot be blank and amount must be greater than 0'
      })
    }
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1>budget calculator</h1>

      <main className='App'>
        <ExpenseForm
          charge={charge}
          amount={amount}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList expenses={expenses} />
      </main>

      <h1>
        total spending :{' '}
        <span className='total'>
          ${expenses.reduce((sum, { amount }) => sum + parseInt(amount), 0)}
        </span>
      </h1>
    </>
  )
}

export default App
