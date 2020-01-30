// While Loop 
var isValid = false; // Global Variable
var run = 0; // Global Variable 

document.write("global  " + run + "<br>");
document.write("<br>")

while(run != 15){
    var txt = "My name is run "; // Local Variable
    document.write( txt + run + " " + isValid + "<br>"); // Prints out variables
    run = run + 1; // 
    document.write("<br>")

    // Either way is fine 
    // Another way run++;

}

document.write("global  " + run + "<br>");
document.write("<br>")
// WHILE LOOP ENDS

var scoops = 5; 
while(scoops > 0){
    document.write("I have  " + scoops + "scoops <br>"); 
    document.write(" Another Scoop Please !! <br>");
    scoops = scoops -1 ;
    document.write("<br>")

}
document.write("<br>")

document.write(" Life without Ice Cream isn't the same ")

