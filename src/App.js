import React,{useState} from 'react';
import './App.css';
import Search from './Search';


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



  return (
    <div className="container">
      <div className="header">
        <h1>The Royal Bank of Flatiron</h1>
      </div>
      
      <div>

         <form className="transaction-form">
        <input id='date' placeholder='Date' className="input-field" value={formData.date} onChange={handleInputChange}/>
        <input id='description' placeholder='Description' className="input-field" value={formData.description} onChange={handleInputChange}/>
        <input id='category' placeholder='Category' className="input-field" value={formData.category} onChange={handleInputChange}/>
        <input id='amount' placeholder='Amount' className="input-field" value={formData.amount} onChange={handleInputChange}/>
      </form>

      <button className="add-button" onClick={handleAddTransaction}>Add Transaction</button>

      <Search transactions={transactions} />
      
    </div>
    
    </div>
  );
}

export default App;