import React, { useState } from 'react';

export default function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) => {
        setActiveIndex(index);
    };
    const renderedItems = items.map(({ title, content }, index) => {
        const activeClass = index === activeIndex ? 'active' : '';
        return (
            <React.Fragment key={title}>
                <div
                    className={`title ${activeClass}`}
                    onClick={() => onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {title}
                </div>
                <div className={`content ${activeClass}`}>
                    <p>{content}</p>
                </div>
            </React.Fragment>
        );
    });
    return <div className="ui styled accordion">{renderedItems}</div>;
}
