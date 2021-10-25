'use strict'

const user1 = {
        id: 1,
        name: 'Elon',
        sname: 'Musk',
        age:50,
}

const user2 = {
    id: 2,
    name: 'Elen',
    age: 20,
}

const msgElon = ['12', 'hi!', 'bye!'];
const msgElen = ['Qwerty', 'hello', 'Add!'];


const msgUsers = new Map();
msgUsers.set(user1.id, msgElon);
msgUsers.set(user2.id, msgElen);

const getUserMessages = ({id})=>{
    msgUsers.get(id).forEach(msg=>console.log(msg));
}
getUserMessages(user2);


const createMap = (str) =>{
    const mapToStr = new Map();
    for(const letter of str){
        if(mapToStr.has(letter)){
            const amount = mapToStr.get(letter);
            mapToStr.set(letter, amount+1);
        }else{
            mapToStr.set(letter, 1);
        }
    }  
    return mapToStr
}

const compare = (str1, str2) =>{
    if(str1.length!==str2.length){
        return false;
    }
    const mapToStr1 = createMap(str1);
    const mapToStr2 = createMap(str2);
    if(mapToStr1.size!==mapToStr2.size){
        return false;    
    }
    for (const key of mapToStr1.keys()) {
        if(mapToStr1.get(key)!==mapToStr2.get(key)){
           return false; 
        }
    }
    return true;
}

console.log(compare('test', 'sett'));
console.log(compare('qwerty', 'qwertu'));