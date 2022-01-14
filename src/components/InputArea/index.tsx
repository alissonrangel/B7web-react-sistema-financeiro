import { useEffect, useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';

import { categories } from '../../data/categories';

type Props = {
  onAdd: (item: Item) => void;
};

export const InputArea = ({ onAdd }: Props) => {
  const [dateField, setDateField] = useState('');
  const [categoryField, setCategoryField] = useState('');
  const [titleField, setTitleField] = useState('');
  const [valueField, setValueField] = useState(0);
  const [errors, setErrors] = useState<string[]>([])

  let categoryKeys: string[] = Object.keys(categories);

  const handleAddEvent = () => {
    let errors: string[] = [];
  }

  const clearFields = () => {
    setDateField('');
    setCategoryField('');
    setTitleField('');
    setValueField(0);
    setErrors([]);
  }

  useEffect(() => {
    console.log('renderiozu');
  }, errors);

  const addExpenseOrIncome = (e: React.FormEvent) => {
    e.preventDefault();
    if (!dateField || !titleField || !valueField || !categoryField) {
      let errors2 = [];
      if (!dateField) {
        errors2.push('Preencha a data!');
      }
      if (!titleField) {
        errors2.push('Preencha o título!');
      }
      if (!valueField) {
        errors2.push('Preencha o valor!');
      }
      if (!categoryField) {
        errors2.push('Selecione a categoria!');
      }
      setErrors(errors2);

      alert('Dados imcompletos');
      return;
    }
    let dataDates = dateField.split('-');
        
    let item: Item = {
      date: new Date(parseInt(dataDates[0]), (parseInt(dataDates[1])-1), parseInt(dataDates[2])),
      category: categoryField,
      title: titleField,
      value: valueField
    }
    // let item: Item = {
    //   date: new Date(2022, 0, 13),
    //   category: 'rent',
    //   title: 'Casa',
    //   value: 1000.50
    // }
    onAdd(item);
    clearFields();    
  }

  return (
      <C.Container>
        {errors.map((item, index) =>( 
          <div key={index}>{item}</div>
        ))}
        <form onSubmit={addExpenseOrIncome}>
          <label htmlFor="data">
            <span>Data:</span>
            <input type="date" name="data" onChange={(e)=>setDateField(e.target.value)} />
          </label>          
          <br/>
          <label htmlFor="cat">            
            <span>Categoria:</span>
            <select name="cat" onChange={(e)=>setCategoryField(e.target.value)}>
              <option></option>
              {/* <option value='food' >alimentação</option>
              <option value='rent'>aluguel</option>
              <option value='salary'>salário</option>  */}
              { categoryKeys.map((item, index)=>(
                <option key={index}>{item}</option>
              )) 
              }                           
            </select>
          </label>
          <br/>
          <label htmlFor="title">            
            <span>Título:</span>
            <input type="text" name="title" value={titleField} onChange={(e)=>setTitleField(e.target.value)} />
          </label>
          <br/>
          <label htmlFor="valor">            
            <span>Valor:</span>
            <input step="0.01" type="number" name="valor" value={valueField} onChange={(e)=>setValueField(parseFloat(e.target.value))}  />
          </label>
          <br/>
          <input type="submit" value="Adicionar" />
        </form>        
      </C.Container>
  );
}