import React from 'react'
import { MdDelete } from 'react-icons/md'

import Item from './ExpenseItem'

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <ul className='list'>
        {expenses.map(expense => (
          <Item key={expense.id} expense={expense} />
        ))}
      </ul>
      {expenses.length && (
        <button className='btn'>
          clear expenses <MdDelete className='btn-icon' />
        </button>
      )}
    </>
  )
}

export default ExpenseList
