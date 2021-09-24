import React from 'react';
import Accordion from './components/Accordion';
import Search from './components/Search';

const items = [
    {
        title: 'What is React?',
        content: 'React is a front end javascript library'
    },
    {
        title: 'What is eggs nutrition?',
        content:
            'One egg has only 75 calories but 7 grams of high-quality protein, 5 grams of fat, and 1.6 grams of saturated fat, along with iron, vitamins, minerals, and carotenoids. The egg is a powerhouse of disease-fighting nutrients like lutein and zeaxanthin.'
    },
    {
        title: 'How to make omelette?',
        content: 'Whisk eggs, water?, salt and pepper. Cook.'
    }
];
export default function App() {
    return (
        <div>
            <br />
            {/* <Accordion items={items} /> */}
            <Search />
        </div>
    );
}
