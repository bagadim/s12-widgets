import React, { useState, useEffect, useRef } from 'react';

export default function Dropdown({
    options,
    label,
    selected,
    onSelectedChange
}) {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if (dropdownRef.current.contains(event.target)) {
                return;
            }
            setOpen(false);
        };
        // addEventListeners are always called before React event listeners
        document.body.addEventListener('click', onBodyClick, { capture: true });

        return () => {
            document.body.removeEventListener('click', onBodyClick, {
                capture: true
            });
        };
    }, []);

    const renderedOptions = options.map((opt) => {
        if (selected.value === opt.value) {
            return null;
        }
        return (
            <div
                key={opt.value}
                onClick={() => onSelectedChange(opt)}
                className="item"
            >
                {opt.label}
            </div>
        );
    });

    return (
        <div className="ui form" ref={dropdownRef}>
            <div className="field">
                <label htmlFor="" className="label">
                    {label}
                </label>
                <div
                    onClick={() => setOpen(!open)}
                    className={`ui selection dropdown ${
                        open ? 'visible active' : ''
                    }`}
                >
                    <i className="dropdown icon"></i>
                    <div className="text">{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}
