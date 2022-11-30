import React from "react" ;

import SendMessage from "./SendMessage" ;

import manager1 from "../../images/manager.png";

export default function ManagerBlock() {

    return (
        <div className = {`flex w-[100%] justify-center mt-auto mb-[3rem] h-[18rem]`}>

        <div className = {`flex flex-col text-[#ffffff]  items-center border-[2px] w-[75%] border-[#3DABF7]`}>
            <div className = {`mt-[1rem]`}>
                <img src = {manager1} alt = "manager" width = {80} height = {80} /> 
                </div>
            <span className = {`text-2xl`}>Кристина</span>
            <span className = {`text-sm mt-[0.5rem] mx-[1rem]`}>Ваш персональный помощник по работе с системой</span>
            <SendMessage/>
            <span className = {`text-xs mt-auto mb-[0.2rem]`}>
                E-mail <span className = {`text-[#3DABF7]`}>support@goodsurfing.org</span>
            </span>
        </div>
        </div>
    ) ;

}

