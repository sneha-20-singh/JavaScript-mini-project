const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("display-resultBox");
function calculateAge()
{
    let birthDate = new Date(userInput.value);
    let birthDay = birthDate.getDate();
    let birthMonth = birthDate.getMonth();
    let birthYear = birthDate.getFullYear();

    let today = new Date();

    let currentDay = today.getDate();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();

    let d3,m3,y3;

    y3 = currentYear-birthYear;
    if(currentMonth>=birthMonth) 
    {
        m3 = currentMonth-birthMonth;
    }
    else{
        y3--;
        m3 = 12+currentMonth-birthMonth;
    }
    if(currentDay >= birthDay)
    {
        d3 = currentDay - birthDay;
    }
    else{
       m3--;
       //get days in previous month
       let lastMonth = new Date(currentYear,currentMonth,0);
        d3 = lastMonth.getDate();
    }
    
result.innerHTML=`You are ${y3} Years ${m3} Months ${d3} Days`;
}