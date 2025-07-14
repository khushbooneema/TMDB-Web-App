import React, { useEffect, createRef } from "react";
import './movieCSS.css';

type ProgressProps = {
    value: number;
}

const Progress = ({ value }: ProgressProps) => {
    const  ref = useProgress(value);
    return (
        <div ref={ref} className="progress" data-value={value}></div>
    );
}

export default Progress;

export const useProgress = (value: number) => {
    const ref = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        ref.current.style.setProperty("--progress", value + "%");
        ref.current.setAttribute("data-value", value.toString());
    }, [value]);

    return ref;
}