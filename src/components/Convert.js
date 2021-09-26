import React, { useState, useEffect } from 'react';
import googleApi from '../dataLayer/googleApi.js';

export default function Convert({ language, text }) {
    const [translated, setTranslated] = useState('');

    const [debouncedText, setDebouncedText] = useState(text);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500);
        return () => clearTimeout(timerId);
    }, [text]);

    useEffect(() => {
        googleApi.translate(debouncedText, language.value).then(({ data }) => {
            setTranslated(data.data.translations[0].translatedText);
        });
    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}
