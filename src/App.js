import React, { useState } from 'react'
import Expenses from './components/Expenses/Expense'
import NewExpense from './components/NewExpense/NewExpense'

const Dummy_Expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 150,
    date: new Date(2022, 1, 17),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 25000.67,
    date: new Date(2022, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 15000,
    date: new Date(2022, 5, 12),
  },
]
function App() {
  const [expenses, setExpenses] = useState(Dummy_Expenses)

  const saveDataHandler = (data) => {
    const newData = {
      ...data,
      id: Math.random().toString(),
    }
    setExpenses((prevState) => {
      return [newData, ...prevState]
    })
  }
  return (
    <div>
      <NewExpense onSaveData={saveDataHandler} />
      <Expenses arr={expenses} />
    </div>
  )
}

export default App
