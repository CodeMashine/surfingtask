import React from "react";




export default function EditProfileButton() {


function edit (e) {
    console.log('edit profile') ;
}


    return (
        <button 
        className = {`bg-[#23E1A6] text-[#ffffff] w-full h-full`}
        onClick = {edit}>
            Редактировать профиль
        </button>
    )
}