import React from "react";
import './movieCSS.css'

type ToggleType<T> = {
    name: string;
    value: T
}

type ToggleProps<T> = {
    types: ToggleType<T>[];
    selected: T
    onChange: (value: T) => void;
}

const ToggleButtons = <T,>({types, selected, onChange}: ToggleProps<T>) => {
    return(
        <div className="toggle-buttons">
           {types.map((type) => (
                <button
                    key={type.name}
                    className={`toggle-button ${selected === type.value ? 'active' : ''}`}
                    onClick={() => onChange(type.value)}
                >
                    {type.name}
                </button>
           ))}

        </div>
    );
}

export default ToggleButtons;
