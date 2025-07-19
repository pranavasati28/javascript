const todaysdate = new Date();
const date1 = new Date("2025-07-20");
const date2 = new Date("2025-07-10");

function checkday() {
    if(todaysdate.getDay() == 0 || todaysdate.getDay() == 6){
        console.log("weekend");
        
    }
    else{
        console.log("weekday")
    }

}

console.log(todaysdate.getFullYear());


function Daysbwndates(){
    const diff = Math.abs(date1.getTime() - date2.getTime())
    const days = diff / (1000 * 60 * 60 * 24 )
    console.log(days);
}

// checkday();
// Daysbwndates();


 