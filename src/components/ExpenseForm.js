import React from 'react'
import { MdSend } from 'react-icons/md'

const ExpenseForm = () => {
  return (
    <form>
      <div className='form-center'>
        <div className='form-group'>
          <label htmlFor='charge'>charge</label>
          <input
            type='text'
            name='charge'
            id='charge'
            className='form-control'
            placeholder='e.g. rent'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='amount'>amount</label>
          <input
            type='text'
            name='amount'
            id='amount'
            className='form-control'
            placeholder='e.g. 1600'
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
