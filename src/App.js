import React,{useState} from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({ date: '', description: '', category: '', amount: '' });

  const [transactions, setTransactions] = useState([
    { date: '2024-04-26', description: 'Payment Received', category: 'Income', amount: 1000.00 },
    { date: '2024-04-25', description: 'Electricity Bill', category: 'Utilities', amount: -80.00 },
    { date: '2024-04-24', description: 'Grocery Shopping', category: 'Food & Drinks', amount: -150.00 },
    { date: '2024-04-23', description: 'Pay employees', category: 'Expense', amount: -10000.00 },
    { date: '2024-04-22', description: 'Movies', category: 'Entertainment', amount: 200.00 },
    { date: '2024-04-21', description: 'Order cakes', category: 'Dessert', amount: 90.00 },
    { date: '2024-04-20', description: 'Water Bill', category: 'Utilities', amount: -400.00 },
    { date: '2024-04-19', description: 'Children Monthly Allowances', category: 'Expense', amount: -2000.00 },
    { date: '2024-04-18', description: 'Fuel cars', category: 'Utilities', amount: -8000.00 }

  ]); 

  const [searchQuery, setSearchQuery] = useState('');

  function handleInputChange(e) {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  function handleAddTransaction(e) {
    e.preventDefault();
    const { date, description, category, amount } = formData;
    if (date && description && category && amount) {
      setTransactions([...transactions, { date, description, category, amount: parseFloat(amount) }]);
      setFormData({ date: '', description: '', category: '', amount: '' });
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTransactions = transactions.filter((transaction) =>
    transaction.date.includes(searchQuery) ||
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.amount.toString().includes(searchQuery)
  );


  return (
    <div className="container">
      <div className="header">
        <h1>The Royal Bank of Flatiron</h1>
      </div>
      <form className="search-bar">
        <input placeholder='Search your Recent Transactions' className="search-input" onChange={handleSearch} />
      </form>

      <form className="transaction-form">
        <input id='date' placeholder='Date' className="input-field" value={formData.date} onChange={handleInputChange}/>
        <input id='description' placeholder='Description' className="input-field" value={formData.description} onChange={handleInputChange}/>
        <input id='category' placeholder='Category' className="input-field" value={formData.category} onChange={handleInputChange}/>
        <input id='amount' placeholder='Amount' className="input-field" value={formData.amount} onChange={handleInputChange}/>
      </form>

      <button className="add-button" onClick={handleAddTransaction}>Add Transaction</button>

      <form className="transaction-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction, index) => (
              <tr key={index}>
                <td>{transaction.date}</td>
                <td>{transaction.description}</td>
                <td>{transaction.category}</td>
                <td>${transaction.amount.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;