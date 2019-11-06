import React from "react";

import "./SummaryItem.css";

/*
    A component that can be used to render additional information in the Summary component.
    Each of these items will be separated by a border.

    The following props can be passed to this component besides children:
        header: string         // The header text, by default, this is the blue text
        subtext: string        // The sub text, by default, this is de white text underneath the header
*/
const SummaryItem = ({ header, subtext }) => {
    return (
        <div className="summary-item">
            <div className="summary-item__header">{header}</div>
            <div className="summary-item__text">{subtext}</div>
        </div>
    );
};

export default SummaryItem;
