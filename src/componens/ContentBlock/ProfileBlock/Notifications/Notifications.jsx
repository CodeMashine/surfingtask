import React from "react";

import NoticeBody from "./NoticeBody";


export default function Notifications() {

    return (
        <div className = {`flex flex-col bg-[#ffffff] w-[32%]`}> 
            <div className = {`text-2xl w-[80%] mx-auto my-[1rem]`} > {/*[#FAFCFE]*/ }
                Уведомления
            </div>
            <div className = {`border-t-[5px] border-[#2282a8]`}>
                <NoticeBody />
            </div>
        </div>
    )
}