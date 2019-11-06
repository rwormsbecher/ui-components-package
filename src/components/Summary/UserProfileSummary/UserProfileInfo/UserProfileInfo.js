import React from "react";

import "./UserProfileInfo.css";
import SummaryItem from "../../SummaryItem/SummaryItem";

/*
    A component which alters the SummaryItem component to omit the left-border as well as align the text left.
    Styles of this can be overwritten to further differ the UserProfileInfo from the other SummaryItems.

    The following props can be passed to this component besides children:
        header: string         // The header text, by default, this is the blue text
        subtext: string        // The sub text, by default, this is de white text underneath the header
*/
const UserProfileInfo = ({ header, subtext }) => {
    return (
        <div className="userprofile-info">
            <SummaryItem header={header} subtext={subtext} />
        </div>
    );
};

export default UserProfileInfo;
