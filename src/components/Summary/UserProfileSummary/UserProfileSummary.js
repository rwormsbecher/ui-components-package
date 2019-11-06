import React from "react";

import "./UserProfileSummary.css";
import UserProfileInfo from "./UserProfileInfo/UserProfileInfo";

/*
    A component which renders an image together with a header and subtext.

    The following props can be passed to this component besides children:
        image: string          // The image source
        header: string         // The header text, by default, this is the blue text
        subtext: string        // The sub text, by default, this is de white text underneath the header
*/
const UserProfileSummary = ({ image, header, subtext }) => {
    return (
        <div className="userprofile">
            <img src={image} alt="Avatar" />
            <UserProfileInfo header={header} subtext={subtext} />
        </div>
    );
};

export default UserProfileSummary;
