function processArray (arr){
    return arr.map(function(num)
 {if (num % 2 === 0) {
    return num * num ;
 } else{
    return num * 3;
 }});
}  
 
function formatArrayStrings(strings,processedNumbers){
    return processedNumbers.map((num,index)=> {
        if (num % 2 === 0){
            return strings[index].toUpperCase();
        } else{
            return strings[index].toLowerCase();
        }
    }
    
    
    
    );
}

const strings = ['Gabby','Rollas','Osborn','Icon'];
const processedNumbers =[1,2,3,4];
const formattedStrings = formatArrayStrings(strings,processedNumbers);
console.log(formattedStrings);