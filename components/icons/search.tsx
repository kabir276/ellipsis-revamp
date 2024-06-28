import React from 'react';

export const SearchIcon = ({ width = 20, height = 20 }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 512 512"
        >
            <defs>
                <linearGradient id="searchIconGradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="rgb(255,255,255)" />
                    <stop offset="35%" stopColor="rgb(161,161,161)" />
                    <stop offset="100%" stopColor="rgb(66,66,66)" />
                </linearGradient>
            </defs>
            <path
                fill="url(#searchIconGradient)"
                d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
            />
        </svg>
    );
};
