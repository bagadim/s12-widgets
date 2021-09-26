import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './navigation/Route';
import Header from './navigation/Header';

const accordionItems = [
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

const dropdownOptions = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Color Green',
        value: 'green'
    },
    {
        label: 'A Shade of Blue',
        value: 'blue'
    }
];

export default function App() {
    const [selectedColor, setSelectedColor] = useState(dropdownOptions[0]);
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={accordionItems} />
            </Route>
            <Route path="/search">
                <Search />
            </Route>
            <Route path="/dropdown">
                <Dropdown
                    label="Select Color"
                    options={dropdownOptions}
                    selected={selectedColor}
                    onSelectedChange={setSelectedColor}
                />
            </Route>
            <Route path="/translate">
                <Translate />
            </Route>
        </div>
    );
}
