// components/IconButton.js

import React from 'react';

const IconButton = () => {
    return (
        <span className="button__icon-wrapper">
            <svg width="12" className="mt-1 text-xl w-[10px] sm:w-[12px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
            </svg>
        </span>
    );
};

export default IconButton;
