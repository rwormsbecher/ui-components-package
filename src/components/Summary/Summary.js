import React from "react";

import "./Summary.css";
import UserProfileSummary from "./UserProfileSummary/UserProfileSummary";

/*
    A component where the UserProfileSummary is rendered together with optional children. These children will be rendered next to each other.
    The intended usage for this component is to use the SummaryItem component as children, although else passed as children is also possible.

    The following props can be passed to this component besides children:
        image: string          // The image source
        header: string         // The header text, by default, this is the blue text
        subtext: string        // The sub text, by default, this is de white text underneath the header
*/
const Summary = ({ children, image, header, subtext }) => {
    return (
        <section id="summary" className="summary">
            <div className="summary-content">
                <UserProfileSummary image={image} header={header} subtext={subtext} />
                {children}
            </div>
        </section>
    );
};

export default Summary;
