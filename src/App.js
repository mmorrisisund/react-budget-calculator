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
console.log(initialExpense)
function App () {
  const [expenses, setExpenses] = useState(initialExpense)

  return (
    <>
      <Alert />
      <h1>budget calculator</h1>

      <main className='App'>
        <ExpenseForm />
        <ExpenseList expenses={expenses} />
      </main>

      <h1>
        total spending :{' '}
        <span className='total'>
          ${expenses.reduce((sum, { amount }) => sum + amount, 0)}
        </span>
      </h1>
    </>
  )
}

export default App
