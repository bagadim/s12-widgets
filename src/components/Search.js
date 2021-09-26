import React, { useState, useEffect } from 'react';
import wikiApi from '../dataLayer/wikiApi';

export default function Search() {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);
        return () => clearTimeout(timerId);
    }, [term]);

    useEffect(() => {
        if (!debouncedTerm) {
            return;
        }
        wikiApi.search(debouncedTerm).then(({ data }) => {
            setResults(data.query.search);
        });
    }, [debouncedTerm]);

    const renderedResults = results.map((result) => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a
                        rel="noreferrer"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        target="_blank"
                        className="ui button"
                    >
                        Go
                    </a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span
                        dangerouslySetInnerHTML={{ __html: result.snippet }}
                    ></span>
                </div>
            </div>
        );
    });

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="searchTerm">Enter Search Term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        id="searchTerm"
                        type="text"
                        className="input"
                    />
                </div>
            </div>
            <div className="ui celled list">{renderedResults}</div>
        </div>
    );
}
