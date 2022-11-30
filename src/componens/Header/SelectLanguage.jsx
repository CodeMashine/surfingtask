import React , { useState } from "react";


export default function SelectLanguage () {
    
    const languages = ['RU' , 'EN' , 'ES' , 'KZ' , 'BEL']

    const [ chosen , setChosen ] = useState(languages[1])

    const options = languages.map( (lang , num) => {
        return <option key = {`${lang} num`} value = {lang}>
            {lang}
        </option>
    })

    function changeCategory(event){
        setChosen(event.target.value) ;
    }


    return (
        <select
        className = {`bg-inherit`}
         onChange= {changeCategory}  >
            <option defaultValue = {chosen}  hidden> {chosen} </option>
            {options}
        </select>
    )


}