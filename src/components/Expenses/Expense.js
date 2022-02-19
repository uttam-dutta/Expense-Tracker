import './Expense.css'
import { useState } from 'react'
import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpenseFilter'
import ExpensesChart from './ExpensesChart'
const Expenses = (props) => {
  const [year, setYear] = useState(new Date().getFullYear() + '')
  const updateYearHandler = (year) => {
    setYear(year)
  }
  const filteredExpenses = props.arr.filter((expense) => {
    return expense.date.getFullYear().toString() === year
  })

  let expensesContent = (
    <p style={{ color: 'white', textAlign: 'center', paddingTop: '5px' }}>
      No expenses found.
    </p>
  )
  if (filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => (
      <ExpenseItem
        key={item.id}
        date={item.date}
        title={item.title}
        amount={item.amount}
      />
    ))
  }
  return (
    <Card className='expenses'>
      <div>
        <ExpensesFilter selected={year} onUpdate={updateYearHandler} />
      </div>
      {/* {filteredExpenses.length === 0 && (
        <p style={{ color: 'white' }}>No expenses found.</p>
      )} */}
      <ExpensesChart expenses={filteredExpenses} />
      {expensesContent}
    </Card>
  )
}

export default Expenses
