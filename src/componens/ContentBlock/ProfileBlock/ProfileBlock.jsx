import React from "react";

import ProfileStatus from "./ProfileStatus/ProfileStatus";

import Notifications from "./Notifications/Notifications";

import Requests from "./Requests/Requests";

import Calendar from "./Calender/Calendar" ;

export default function ProfileBlock() {

    return (
        <div className = {`bg-[#2282a8] w-[100%]`}> {/*[#FAFCFE]*/}
            <ProfileStatus />
            <div className = {`flex w-[90%] mx-auto justify-between mt-[2rem]`}>
                <Requests/>
                <Calendar/>
                <Notifications/>
            </div>
        </div>
    )
}

