import React from "react";


export default function SendMessage() {

function clickOnsendButton() {
    console.log("send message ro manager") ;
}



    return (
        <button 
        className = {`mt-auto mb-auto text-[#3DABF7] border-[3px] border-[#3DABF7] w-[90%] h-[15%]`}
        onClick  = {clickOnsendButton}>
            Написать
        </button>
    )

}