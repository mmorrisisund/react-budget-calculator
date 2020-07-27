import React from 'react'
import { MdDelete } from 'react-icons/md'

import Item from './ExpenseItem'

const ExpenseList = ({ expenses, handleEdit, handleDelete, clearItems }) => {
  return (
    <>
      <ul className='list'>
        {expenses.map(expense => (
          <Item
            key={expense.id}
            expense={expense}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
          />
        ))}
      </ul>
      {expenses.length > 0 && (
        <button className='btn' onClick={clearItems}>
          clear expenses <MdDelete className='btn-icon' />
        </button>
      )}
    </>
  )
}

export default ExpenseList
