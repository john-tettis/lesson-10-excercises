/*
obj1: 8, 1846
obj2:{yearNeptuneDiscovered:1846, yearMarsDiscovered: 1659}
obj3:'your name is Alejandro and you like purple'
      'your name is Melissa and you like green'
      'your name is undefined and you like green'

array1:Maya,marisa,chi
array2:
    "Raindrops on roses"
    "whiskers on kittens"

    ["Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"]
array3:[10,30,20]

*/

// object destructuring
const obj ={
    numbers: {
        a:1,
        b:2
    }
}
const {numbers:{a,b}}=obj;


//array swap

let arr=[1,2];
[arr[0], arr[1]]=[arr[1], arr[0]];

//race results

const raceResults= ([first,second,third,...rest])=> ({first,second,third,rest});
