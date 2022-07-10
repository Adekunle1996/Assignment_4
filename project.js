let totalAcc= 0;
function sumOfNum(){
    for(var x=0; x < arguments.length; x++){
        if(!isNaN(arguments[x])){
            totalAcc += arguments[x];
        }
    } 
}
sumOfNum(1, 2, 4, 6, 7, "boy", "orange", "bola", 10, 30, 40 , 60, 10, 50, "Emmanuel");
console.log(totalAcc);
 
