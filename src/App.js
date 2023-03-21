import GlobalStyle from './styles/global';
import { useState, useEffect} from 'react';

//components
import Header from './components/Header';
import Resume from './components/Resume';
import Form from './components/Form';

function App() {
  const data = localStorage.getItem("transactions");
  const [transactionsList, setTransactionsList] = useState(data ? JSON.parse(data) : []);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {

    // montante de saídas 
    const amountExpense = transactionsList.filter((item) => item.expense).map((transaction) => Number(transaction.amount));

    // montante de entradas
    const amountIncome = transactionsList.filter((item) => !item.expense).map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2); 

    setIncome(`R$ ${income}`);
    setExpense(`R$ ${expense}`);    
    setTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

  }, [transactionsList]);
  
  const handleAdd = ( transaction ) => {
    
    // digo que o novo array de transações é formado pela lista de transferência + a transação que veio por parâmetro
    const newArrayTransactions = [...transactionsList, transaction];

    // seto a lista de tranferência com o novo array
    setTransactionsList(newArrayTransactions);
    
    // seto a lista no localStorage
    localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));

  };



  return (
    <>
      <Header />
      <Resume  income={income} expense={expense} total={total}/>
      <Form
        handleAdd={handleAdd}
        transactionsList={transactionsList}
        setTransactionsList={setTransactionsList}
      />
      <GlobalStyle />
    </>
  );
}

export default App;
