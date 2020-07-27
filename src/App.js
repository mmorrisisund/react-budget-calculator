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
  const [edit, setEdit] = useState(false)
  const [editId, setEditId] = useState(0)

  const handleCharge = e => setCharge(e.target.value)
  const handleAmount = e => setAmount(e.target.value)
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text })
    setTimeout(() => setAlert({ show: false }), 3000)
  }
  const handleSubmit = e => {
    e.preventDefault()
    if (charge !== '' && amount > 0) {
      if (edit) {
        setExpenses(
          expenses.map(expense => {
            return expense.id === editId
              ? { ...expense, charge, amount }
              : expense
          })
        )
        setEdit(false)
        handleAlert({ type: 'success', text: 'item updated' })
      } else {
        setExpenses([...expenses, { id: uuid(), charge, amount }])
        handleAlert({ type: 'success', text: 'item added' })
      }
      setCharge('')
      setAmount('')
    } else {
      handleAlert({
        type: 'danger',
        text: 'charge cannot be blank and amount must be greater than 0'
      })
    }
  }
  const clearItems = () => {
    setExpenses([])
    handleAlert({ type: 'danger', text: 'all items deleted' })
  }
  const handleDelete = id => {
    setExpenses(expenses.filter(expense => expense.id !== id))
    handleAlert({ type: 'danger', text: 'item deleted' })
  }
  const handleEdit = id => {
    const { charge, amount } = expenses.find(expense => expense.id === id)
    setCharge(charge)
    setAmount(amount)
    setEdit(true)
    setEditId(id)
  }

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}

      <h1>budget calculator</h1>

      <main className='App'>
        <ExpenseForm
          charge={charge}
          amount={amount}
          edit={edit}
          handleCharge={handleCharge}
          handleAmount={handleAmount}
          handleSubmit={handleSubmit}
        />
        <ExpenseList
          expenses={expenses}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          clearItems={clearItems}
        />
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
