var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];


function day(){
}
var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var mydate= new Date(date);
console.log(days[mydate.getDay()]);

function calculate(){
    
       
    dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + date ) % 7;
    Math.round(dayOfTheWeek);
    newFunction();
    
    


    function newFunction() {
        console.log(dayOfTheWeek);
    }
}
var checkgender = day(); {
    var Gender = document.getElementsByName("sex");
} //Try get document by name.same name for each gender
    if(Gender[0].checked == true){
        gender = "male";
    }else if(gdr[1].checked == true ){
        gender = "female";
    }
    else if(Gender[2].checked == true){
         gender="other";
    }
    else{
        alert("Input gender");
    }
var result = function(){
    dayOfTheWeek = calculate();
    checkgender();
}

switch(gender){
    case "male":
    if(dayOfTheWeek == 0){
        document.getElementById("result").innerHTML = "Monday" + MaleNames[0];
    }else if (day == 1){
        document.getElementById("result").innerHTML = "Tuesday" + maleNames[1];
    }else if (day == 2){ 
        document.getElementById("result").innerHTML = "Wednesay" + maleNames[2];
    }else if (day == 3){ 
        document.getElementById("result").innerHTML = "Thursday" + maleNames[3];
    }else if (day == 4){ 
        document.getElementById("result").innerHTML = "Friday" + maleNames[4];
    }else if (day == 5){ 
        document.getElementById("result").innerHTML = "Saturday" + maleNames[5];
    }else { 
        document.getElementById("result").innerHTML = "Sunday" + maleNames[6];
}
break;
case "female":
        if(dayOfTheWeek == 0){
            document.getElementById("result").innerHTML = "Monday" + femaleNames[0];
        }else if (day == 1){
            document.getElementById("result").innerHTML = "Tuesday" + femaleNames[1];
        }else if (day == 2){ 
            document.getElementById("result").innerHTML = "Wednesay" + femaleNames[2];
        }else if (day == 3){ 
            document.getElementById("result").innerHTML = "Thursday" + femaleNames[3];
        }else if (day == 4){ 
            document.getElementById("result").innerHTML = "Friday" + femaleNames[4];
        }else if (day == 5){ 
            document.getElementById("result").innerHTML = "Saturday" + femaleNames[5];
        }else{ 
            document.getElementById("result").innerHTML = "Sunday" + femaleNames[6];
        }
break;
default:
    
}

