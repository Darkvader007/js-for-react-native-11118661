function processArray (arr){
    return arr.map(function(num)
 {if (num % 2 === 0) {
    return num * num ;
 } else{
    return num * 3;
 }});
}  
 
