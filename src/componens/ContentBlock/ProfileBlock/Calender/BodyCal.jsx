import React from "react";

export default function BodyCal( { monthArr } ){     //(notes , monthArr)
   
    return monthArr.map((week , num )=>{

        return <tr key = {num}>

           {week.map( ( day , dayNum ) => {

                return (<td 
                    key = {`day ${dayNum}`}
                    className = {`text-center text-lg border-[#827c7c] border-[3px]`}>

                        {day.day}

                    </td>)
        })
        }
        </tr> 
    })

}