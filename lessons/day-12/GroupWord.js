const givenStr =  'Hello ban, tui ten Teo, ban cung cung ten Teo luon ah?';
//Hello: 1
//ban: 2
//Teo: 2
//...

//Usage
const groupWordMap = groupWordsUsingMap(givenStr);
console.log(groupWordMap);

//controller
function groupWordsUsingMap(givenString){
    //['Hello', 'ban', ....]
    let individualWords = givenString.replace(/,/gi, "").split(" ");
    let wordMaps = new Map();
    for (const word of individualWords){
        if (wordMaps.has(word)){
            wordMaps.set(word, wordMaps.get(word) +1);
        }else{
            wordMaps.set(word, 1);
        }
    }
    return wordMaps;
}