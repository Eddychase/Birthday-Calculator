function myFunction(){
    var femaleNames = ["Akosua","Adwoa","Abenaa","Akua"," Yaa","Afua","Ama"];
var dayOfTheWeek= ["Sunday","Monday","Tuesday","Wednesday", "Thursday", "Friday","Saturday" ];
var maleNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var date = parseInt(
    document.getElementById("date").value
  );
var gender =document.getElementById("gender").value;
//var gender="Male";
//var date= Date.now();
var CC=parseInt(new Date(date).toISOString().substr(0,2));
var YY= parseInt(new Date(date).toISOString().substr(2,2));
var MM= parseInt(new Date(date).toISOString().substr(5,2));
var DD= parseInt(new Date(date).toISOString().substr(8,2));
var dayoftheweek = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;
if (gender === "Male"){
    var n= Math.round(dayoftheweek) -1;
    var day=dayOfTheWeek[n];
    var maleName=maleNames[n];
    var result=maleName+day;
    return result;
    
   }
   if (gender === "Female"){
    var n= Math.round(dayoftheweek) -1;
    var day=dayOfTheWeek[n];
    var femaleName=femaleNames[n];
    var result=femaleName+day;
    return result;
    
   }
     
}

