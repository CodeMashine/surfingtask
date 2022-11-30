import React from "react";

import SvgOut from "../../images/SvgOut";
import ManagerBlock from "../MangerBlock/ManagerBlock";



import home from "../../images/home.svg";
import globe from "../../images/globe.svg";
import message from "../../images/mail.svg";
import calendar from "../../images/calendar.svg";


export default function LestSidebar() {
  const mainSpanStyle = `flex text-[#ffffff] items-center mt-[2rem] ml-[1rem]`;

  const text = `ml-[1rem]`;

  return (
    <div className = {`w-[20%] flex flex-col bg-[#0E1D27] h-[100%]`}>
     
      <span className = { mainSpanStyle }>
        <SvgOut path = { home } w="50" h=" 50" />
        <span className = { text }>Домой</span>
      </span>
      
      <span className = { mainSpanStyle }>
        <SvgOut path = { globe } w="50" h=" 50" />
        <span className = { text }>Предложения</span>
      </span>
      
      <span className = { mainSpanStyle }>
        <SvgOut path = { message } w="50" h=" 50" />
        <span className = { text }>Заявки</span>
      </span>
      
      <span className = { mainSpanStyle }>
        <SvgOut path = { calendar } w="50" h=" 50" />
        <span className = { text }>Календарь</span>
      </span>
   


    <ManagerBlock />
    </div>
  );
}
