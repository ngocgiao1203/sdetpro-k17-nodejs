// CREATE
const emergencyList = new Map([
    ['123','Police Dept'],
    ['114','Fire Dept'],
    ['115','Hospital Dept'],
    ['116','Others'],
    // ['116','....'],
])

//READ 
console.log(emergencyList.get('116'));
//have
const is117Existing = emergencyList.has('117');
console.log(`Is 117 existing: ${is117Existing}`);


//Loop over all keys and get values
const allKeys = emergencyList.keys();
for(const key of allKeys){
    console.log(`${key}: ${emergencyList.get(key)}`);
}

for(const value of emergencyList.values()){
    console.log(`Value: ${value}`);
}

//UPDATE/ADD
emergencyList.set('117', "Somthing else..."); //set: dùng để update
console.log(emergencyList);

//DELETE


