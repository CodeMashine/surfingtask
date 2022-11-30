import React from "react" ;

import SvgOut from "../../images/SvgOut" ;
import SelectLanguage from "./SelectLanguage" ;

import logo  from "../../images/logo.svg";
import caption from "../../images/caption.svg";



export default function LogoBlock() {
    return (
        <div className = {`flex items-center w-[30%] justify-evenly`}>
           <SvgOut path = {logo} w='40' h='40'/>
           <SvgOut path = {caption} w='150' h='50'/>
           <SelectLanguage/>
        </div>
    ) ;

}