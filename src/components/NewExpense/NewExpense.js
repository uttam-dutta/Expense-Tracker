import './NewExpense.css'
import { useState } from 'react'
const NewExpense = (props) => {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [isAdd, setIsAdd] = useState(false)
  // const [useInput, setUseInput] = useState({
  //   title: '',
  //   amount: '',
  //   date: '',
  // })

  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
    // setUseInput({
    //   ...useInput,
    //   title: event.target.value,
    // })
    // setUseInput((prevState) => {
    //   return { ...prevState, title: event.target.value }
    // })
  }

  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
    // setUseInput({
    //   ...useInput,
    //   amount: event.target.value,
    // })
    // setUseInput((prevState) => {
    //   return { ...prevState, amount: event.target.value }
    // })
  }

  const dateChangeHandler = (event) => {
    setDate(event.target.value)
    // setUseInput({
    //   ...useInput,
    //   date: event.target.value,
    // })
    // setUseInput((prevState) => {
    //   return { ...prevState, date: event.target.value }
    // })
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    }
    props.onSaveData(expenseData)
    setTitle('')
    setAmount('')
    setDate('')
    setIsAdd(false)
  }

  const isAddHandler = () => {
    setIsAdd(true)
  }

  const cancelHandler = () => {
    setIsAdd(false)
  }
  return (
    <div className='new-expense'>
      {!isAdd ? (
        <div
          style={{
            textAlign: 'center',
          }}
          className='new-expense__actions'
        >
          <button onClick={isAddHandler} type='submit'>
            Add New Expense
          </button>
        </div>
      ) : (
        <form onSubmit={submitHandler}>
          <div className='new-expense__controls'>
            <div className='new-expense__control'>
              <label>Title</label>
              <input type='text' value={title} onChange={titleChangeHandler} />
            </div>

            <div className='new-expense__control'>
              <label>Amount</label>
              <input
                type='number'
                min='0.01'
                step='0.01'
                value={amount}
                onChange={amountChangeHandler}
              />
            </div>

            <div className='new-expense__control'>
              <label>Date</label>
              <input
                type='date'
                min='2022-01-01'
                max='2028-12-31'
                value={date}
                onChange={dateChangeHandler}
              />
            </div>
          </div>

          <div className='new-expense__actions'>
            <button type='button' onClick={cancelHandler}>
              Cancel
            </button>
            <button type='submit'>Add Expense</button>
          </div>
        </form>
      )}
    </div>
  )
}

export default NewExpense
