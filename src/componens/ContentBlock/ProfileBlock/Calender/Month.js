export default function Mounth(year , month){
    const firstDay = new Date(year, month, 0).getDay() ;
    const daysInMonth = new Date(year, month+1, 0).getDate();
    
    let  monthArr= [];
        for(let day = 1 ;day<=daysInMonth ; day++ ){
                monthArr.push({
                    year : year,
                    month:month,
                    day:day,
                    fullDate : `${year}:${month}:${day}`
            })
        }
        
        for(let day = new Date(year,month,0).getDate() ; day>new Date(year,month,0).getDate()-firstDay ; day--){
            monthArr.unshift({
                year:month===0?year-1:year,
                month:month===0?11:month-1,
                day : day,
                fullDate : `${month===0?year-1:year}:${month===0?11:month-1}:${day}`

            })
        }

        const totalMonthLength = 42 - monthArr.length ;

        for(let day = 1 ; day<=totalMonthLength ; day++){
            monthArr.push({
                year:month===11?year+1:year,
                month:month===11?0:month+1,
                day:day,
                fullDate : `${month===11?year+1:year}:${month===11?0:month+1}:${day}`
        })
        }
       return calForm(monthArr) ;
        
}

function calForm(arr){
    let month = [];
    let week =[] ;
    for(let i = 0 ; i<=arr.length ;i++){
        week.push(arr[i]) ;
        if(week.length === 7){
            month.push(week) ;
            week = [] ;
        }
    }
    return month ;
}


