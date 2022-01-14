import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import * as C from './App.styles';
import {Item} from './types/Item';
import {Category} from './types/Category';
import {items} from './data/items';
import {categories} from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

function App() {
  
  const [list, setList] = useState(items);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  
  useEffect(()=>{
    let lista = filterListByMonth(list, currentMonth);
    setFilteredList(lista);
  },[list, currentMonth]);

  useEffect(()=>{
    let incomeCoutn = 0;
    let expenseCount = 0;

    for (const i of filteredList) {
      if ( categories[i.category].expense ){
        expenseCount += i.value;
      } else {
        incomeCoutn += i.value;
      }
    }

    setIncome(incomeCoutn);
    setExpense(expenseCount);    
  },[filteredList])

  const handleMonthChange = (newMonth: string) => {
    
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item: Item) => {
    let lista = [...list];
    lista.push(item);   
    setList(lista);
  }

  return (
    <div className="App">
      <C.Container>
        <C.Header>
          <C.HeaderText>Sistema Financeiro</C.HeaderText>
        </C.Header>
        <C.Body>
          <InfoArea 
            currentMonth={currentMonth} 
            onMonthChange={handleMonthChange}
            income={income}
            expense={expense}
            />
          <InputArea onAdd={handleAddItem} />
          <TableArea list={filteredList} />
        </C.Body>
      </C.Container>
    </div>
  );
}

export default App;
