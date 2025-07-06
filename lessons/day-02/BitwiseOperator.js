
if (get1stNumber() !=0 & get2ndNumber() !=0){
    console.log("All nums are NOT zero !!")
}
function get1stNumber(){
 console.log("Calling 1st function ");
 return 0;
    
}

function get2ndNumber(){
 console.log("Calling 2nd function");
    return 2;
}
/**
 
|: bitwise operator, process something then combine
1. Resolve all values (value ở đây nghĩa là từng function)
2. Combine: true | true: true

--
||: Combine operator
1. Resolve values from left to right, ONE BY ONE
true || get2ndNumber !=0
if it sees the FIRST true, will ignore the rest right ones
 */


//get1stNumber() return = 0 => false
//get2ndNumber() return !=0 => true
//1 dấu & =====> false + true = false ====> chỉ return 2 message của 2 functions
//1 dấu |