import React from "react";

import SvgOut from "../../images/SvgOut" ;

// import avatar from "../../images/avatar.svg" ;
import avatar from "../../images/avatar.jpg" ;
import likes from "../../images/ic_not_fav.svg" ;
import letter from "../../images/message_0.svg" ;

export default function UserBlock() {


    return (
        <div className = {`flex items-center w-[20%] justify-evenly mr-[5rem]`}>
            <SvgOut path = {likes} w='40' h='40'  />
            <SvgOut path = {letter} w='40' h='40'  />
            <span >Владислав</span>
            {/* <SvgOut path = {avatar} w='50' h='50'  />  почему то изображение из фигмы скачивается не то */}
            <img src = {avatar} alt = "avatar" width = {40} height = {40}  />  
        </div>

    )
}