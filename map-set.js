/*
1. set(4){1,2,3,4}
2. 'ref'
3. {
    [1,2,3]=> true
    [1,2,3]=> false
}
*/ 




const hasDuplicate = (arr)=>arr.length !== new Set(arr).size;

function vowelCount(strng){
    const vowelCount = new Map();
    const vowels = Array.from(strng.toLowerCase()).filter((ltr)=> 'aeiou'.indexOf(ltr)!==-1)

    for(let i of vowels){
        if(vowelCount.has(i)){
            vowelCount.set(i,vowelCount.get(i)+1)
        }
        else{
            vowelCount.set(i,1);
        }
    }
    return vowelCount;

}
