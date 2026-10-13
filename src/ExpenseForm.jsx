
import { useState } from 'react'

function ExpenseForm({ onAddExpense }) {
    const [title, setTitle] = useState("")
    const [amount, setAmount] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title || !amount) {
            return alert("Please fill all fields")
        }
        const newExpense = {
            id: Date.now(),
            title: title,
            amount: parseFloat(amount)
        }
        onAddExpense(newExpense)
        setTitle("")
        setAmount("")
    }

    return (
        <form className="expense-form" onSubmit={handleSubmit}>
            <input placeholder="Expense Title"type="text"value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input placeholder="Amount" type="number" value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />

            <button type="submit"> Add Expense</button>
        </form>
    )
}

export default ExpenseForm

