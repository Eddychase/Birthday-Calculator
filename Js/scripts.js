function getValue(){
    var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua","Afua","Afua","Ama"];
    var myStringdate= document.getElementById("dateProvided").value;
    var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var myDate= new Date(myStringdate);
    var dayofTheWeek= myDate.getDay();
    document.getElementById("message").innerHTML=("I was born on " + days[myDate]);
    document.getElementById("message").innerHTML=(maleNames[dayofTheWeek]);
    document.getElementById("message").innerHTML=(femaleNames[dayofTheWeek]);
}

