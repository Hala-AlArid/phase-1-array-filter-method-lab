// Code your solution here

function findMatching(arr, str){
    const names = arr.filter(name => name.toUpperCase().includes(str.toUpperCase()));
return names;
}

function fuzzyMatch(arr, str){
    const names = arr.filter(name => name.charAt(0).toUpperCase() === str.charAt(0).toUpperCase());

    return names;
}

function matchName(arr, str){
    const names = arr.filter(n => n.name === (str) )

    return names;
}