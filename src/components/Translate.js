import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const languageOptions = [
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Danish',
        value: 'da'
    },
    {
        label: 'English',
        value: 'en'
    },
    {
        label: 'Hindi',
        value: 'hi'
    }
];

export default function Translate() {
    const [language, setLanguage] = useState(languageOptions[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="translateText">Enter Text</label>
                    <input
                        id="translateText"
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
            </div>

            <Dropdown
                label="Select Language"
                options={languageOptions}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <h3 className="ui header">Output</h3>
            <Convert language={language} text={text} />
        </div>
    );
}
