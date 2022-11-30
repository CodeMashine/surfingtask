    import React, { useState } from 'react';
    
    import Month from './Month' ;
    import BodyCal from './BodyCal' ;
    
    import SvgOut from '../../../../images/SvgOut';

    import leftArrow from '../../../../images/leftArrow.svg' ;
    import rightArrow from '../../../../images/rightArrow.svg' ;

    
    export default function Calendar() {
        const [date, setDate] = useState(new Date());
    
        let year = date.getFullYear();
        let month = date.getMonth();
    
        const weekDayArr = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];


        const currentMonth = Month(year ,month) ;


        function header() {
            return weekDayArr.map(item => {
                return (
                    <th key={item}
                        className = {`border-[3px]  border-[#827c7c]`}
                    >{item}
                    </th>
                )
            })
        }
    
        const changeDate = (action) => {
            switch (action) {
                case 'prevMonth':
                    month--;
                    break;
                case 'nextMonth':
                    month++;
                    break;
                default :
                    break;
            }
    
            setDate(new Date(year, month));
        }
    
    
        return (
        <div className = {`flex flex-col bg-[#ffffff] w-[32%]`}>
            <div className = {`text-2xl w-[80%] mx-auto my-[1rem]`}>
                     Календарь
           </div>
            <div className = {`border-t-[5px] border-[#2282a8]`}>

                <div className = {`flex items-center justify-between w-[80%] mx-auto`}>
                     <button onClick={() => changeDate("prevMonth")}><SvgOut path = {leftArrow} w='40' h='40' /> </button>

                    <span className = {`text-xl`}>
                    {`${new Date( year , month ).toLocaleString("ru-RU", { month : 'long' }).toUpperCase()}     ${year}` } 
                    </span>

                    <button onClick={() => changeDate("nextMonth")} ><SvgOut path = {rightArrow} w='40' h='40' /></button> 
                </div>
                
                
                
                <table className = {`w-[80%] mx-auto mt-[2rem]`} >
                    <thead>
                        <tr className = {``}>
                            {header()}
                        </tr>
                    </thead>
                    <tbody>
                        <BodyCal monthArr = {currentMonth} />
                    </tbody>
                </table>
            </div>
        </div>
        )
    }