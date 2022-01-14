import { Item } from '../types/Item';

export const items: Item[] = [
    { date: new Date(2022, 1, 6), category: 'food', title: 'McDonalds', value: 32.12 },
    { date: new Date(2022, 0, 9), category: 'food', title: 'Burger King', value: 28 },
    { date: new Date(2022, 0, 10), category: 'rent', title: 'Aluguel Apt', value: 2300 },
    { date: new Date(2022, 0, 12), category: 'salary', title: 'Salário ACME', value: 4500 },
    { date: new Date(2022, 1, 11), category: 'rent', title: 'Aluguel Apt', value: 2300 },
    { date: new Date(2022, 2, 12), category: 'salary', title: 'Salário ACME 2', value: 6500 },
];