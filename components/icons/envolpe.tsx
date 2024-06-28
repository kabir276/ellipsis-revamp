import React from 'react';

const EnvelopeIcon = ({ width = 20, height = 20 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 512 512"
        >
            <defs>
                <linearGradient id="envelopeGradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="rgb(255,255,255)" />
                    <stop offset="35%" stopColor="rgb(161,161,161)" />
                    <stop offset="100%" stopColor="rgb(66,66,66)" />
                </linearGradient>
            </defs>
            <path
                fill="url(#envelopeGradient)"
                d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
            />
        </svg>
    );
};

export default EnvelopeIcon;