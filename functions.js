function printConsole(user){
    var name = user;
    console.log(name)
    //! delete this line : document.write(name);
    document.getElementById("nameOutput").innerHTML = name;
}
// printConsole();
function phone( type ,batteryLife , os, memory){
    var status =  "Your " + os + type + " phone has " + memory + "gb of memory left. It only has " + batteryLife + "% battery left";
    //! delete this element:  document.write(status);
    document.getElementById("phoneOutput").innerHTML = status; 
    return status;
}

function main( name , age ){
    var message; 
    var user = name;
    if(age < 10){
        message = user + " you're just a kid "
    }else if(age < 20){
        message = user + " YOU'RE NO OLDER THAN THE LAST kid"
    }else if(age >= 20){
        message = user + " We don't have to say it - you're NOT a kid"
    }else{
        message = " enter a number please"
    }
    console.log(message);
    //! delete this element : document.write(message);
    document.getElementById("statusOutput").innerHTML = message ; 
}
