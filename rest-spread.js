const filterOutOdds= (...nums)=> nums.filter((num)=>num%2===0);


const findMin = (...nums)=> Math.min(...nums);

function mergeObjects(obj1, obj2){
return {...obj1,...obj2}
}

const doubleAndReturnArgs = (arr,...rest)=>[...arr, ...rest.map(num=>num*2)];

const removeRandom=(item)=>{
    const index = Math.floor(Math.random()*(item.length+1));
    const newArr = [...item]
    newArr.splice(index,1);
    return newArr;
}
const extend =(arr1,arr2)=>[...arr1,...arr2];

const addKey=(obj, key, val)=> ({...obj, [key]:val });

const removeKey=(obj, key)=>{
    const newObj = {...obj}
    delete newObj[key];
    return newObj;
}

const combine=(obj1,obj2)=>({...obj1, ...obj2});

const update=(obj, key, value)=>({...obj, [key]:value})