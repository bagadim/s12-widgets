import axios from 'axios';
import React, { useState, useEffect } from 'react';

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
        axios
            .post(
                'https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    }
                }
            )
            .then(({ data }) => {
                setTranslated(data.data.translations[0].translatedText);
            });
    }, [language, debouncedText]);
    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>
    );
}
