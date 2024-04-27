import React,{useState}  from "react";
import './App.css';

function Search({transactions}){
    

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
      };

      const filteredTransactions = transactions.filter((transaction) =>
    transaction.date.includes(searchQuery) ||
    transaction.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    transaction.amount.toString().includes(searchQuery)
  );

  return(
    <div>
        
         <form className="search-bar">
        <input placeholder='Search your Recent Transactions' className="search-input" onChange={handleSearch} />
      </form>



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
  )

}

export default Search