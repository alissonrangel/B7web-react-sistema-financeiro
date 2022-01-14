import * as C from './styles';
import { Item } from '../../types/Item';
// import { formatDate } from '../../helpers/dateFilter';
import { categories } from '../../data/categories';
import { useState, useEffect } from 'react';
import * as F from '../../helpers/dateFilter';

type Props = {
    it: string
}

export const TableItem = ({ it }: Props) => {
    const [item, setItem] = useState<Item>(JSON.parse(it));
         
    useEffect(()=>{
        setItem(JSON.parse(it))    
    },[it])
    return (
        <C.TableLine>
            <C.TableColumn>{F.formatDate(new Date(item.date))}</C.TableColumn>
            <C.TableColumn>
                <C.Category color={categories[item.category].color}>
                    {categories[item.category].title}
                </C.Category>
            </C.TableColumn>
            <C.TableColumn>{item.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value color={categories[item.category].expense ? 'red' : 'green'}>
                    R$ {item.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    );
}