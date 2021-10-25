'use strict';

const obj = {
    prop: 123,
}

const map1 = new Map();
map1.set(1, 'one');
map1.set(obj, 'object');

// console.log(map1.get(obj));

map1.set(1,1000);

map1.delete(1);


const dictionary = new Map();
dictionary.set('собака','Il cane');
dictionary.set('кот','il gatto');
dictionary.set('утка','Lanatra');
dictionary.set('брат','Fratello');
dictionary.set('небо','Il cielo');
dictionary.set('город','La citta');
dictionary.set('дорога','la strada');
dictionary.set('язык','La lingua');
dictionary.set('дерево','Lalbero');
dictionary.set('море','Il mare');

const str = 'Город утка брат дорога брат дерево кот';

const translate = (dictionary, str, separator = ' ')=>{
    return str.toLowerCase()
              .split(separator)
              .map((word)=>(dictionary.has(word) ? dictionary.get(word):word))
              .join(separator);
}

// console.log(translate(dictionary, str));


const iteratorKeys = dictionary.keys();
for (const iterator of dictionary.keys()) {
    console.log(iterator)
}

const iteratorValues = dictionary.values();
for (const iterator of dictionary.values()) {
    console.log(iterator)
}


const set1 = new Set();
set1.add(7);
set1.add(7);
set1.add(7);
set1.add('7');
set1.add([7]);
set1.add({7:7});