import React from "react";

import SvgOut from "../../images/SvgOut" ;

import caption from "../../images/Oval 7.svg" ;

export default function Place() {


    return (
        <div className = {`flex items-center`}>
            <SvgOut path = {caption} w='40' h='40'  />
            <span className = {`text-[#3DABF7] text-xl ml-[3rem]`}>Природный парк "Вулканы Камчатки"</span>
        </div>

    )
}