let id =1;

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

function createUserProfiles(names){
    const processedNumbers = processArray(names.map((name,index)=> index));
    const modifiedNames = formatArrayStrings(names,processedNumbers);
    return names.map((name,index)=>{
        const userProfile ={
            originalName : name,
            modifiedName : modifiedNames[index],
            id : id++
        };
        return userProfile;
    });
}

