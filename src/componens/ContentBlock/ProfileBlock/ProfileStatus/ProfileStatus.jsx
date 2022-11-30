import React from "react";

import EditProfileButton from "./EditProfileButton";

import SvgOut from "../../../../images/SvgOut" ;

import graffic from "../../../../images/Graphic.svg" ;
import marker from "../../../../images/marker.svg" ;
import point from "../../../../images/point.svg" ;


export default function ProfileStatus() {

    const menuSpanClass = 'flex items-center mx-[0.3rem]' ;


    return (
        <div className = {`flex flex-col mt-[2rem] w-[90%] h-[25%] mx-auto bg-[#ffffff] `}>   {/*bg-[#ffffff]*/}
            <div className = {`flex text-xl mt-[0.5rem] pl-[1rem] h-[20%] border-b-[5px]`} >Заполненность профиля</div>
            <div className = {`border-t-[5px] flex border-[#FAFCFE] h-[80%]`}>
                <div className = {`flex flex-col`}>
                    <div className = {`flex ml-[0.5rem] mt-[2rem]`}>
                        <span className = {menuSpanClass} > <SvgOut path = {marker} w = '10' h = '10'  /> < span className ={`ml-[0.4rem]`}>Описание</span></span>
                        <span className = {menuSpanClass} > <SvgOut path = {marker} w = '10' h = '10'  /> < span className ={`ml-[0.4rem]`} >Фотографии</span></span>
                        <span className = {menuSpanClass} > <SvgOut path = {marker} w = '10' h = '10'  /> < span className ={`ml-[0.4rem]`} >Видео</span></span>
                        <span className = {menuSpanClass} > <SvgOut path = {point} w = '10' h = '10'  /> < span className ={`ml-[0.4rem]`} >Предложения</span></span>
                        <span className = {menuSpanClass} > <SvgOut path = {point} w = '10' h = '10'  /> < span className ={`ml-[0.4rem]`} >Отзывы</span></span>
                    </div>
                    <div className = {`flex mt-auto ml-[0.5rem] mb-[0.5rem] w-[50%] h-[30%]`} >
                        <EditProfileButton/>
                    </div>
                </div>
                <div  className = {`ml-auto mr-[3rem] my-auto`} >
                    <SvgOut path = {graffic} w = '120' h = '120'  />
                </div>
            </div>
        </div>
    )
}


// path = {caption} w='150' h='50'