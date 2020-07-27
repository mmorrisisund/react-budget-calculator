import React from 'react'
import { MdSend } from 'react-icons/md'

const ExpenseForm = ({
  charge,
  amount,
  handleCharge,
  handleAmount,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>charge</label>
          <input
            type='text'
            name='charge'
            id='charge'
            className='form-control'
            placeholder='e.g. rent'
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>amount</label>
          <input
            type='number'
            name='amount'
            id='amount'
            className='form-control'
            placeholder='e.g. 1600'
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type='submit' className='btn'>
        submit <MdSend className='btn-icon' />
      </button>
    </form>
  )
}

export default ExpenseForm
