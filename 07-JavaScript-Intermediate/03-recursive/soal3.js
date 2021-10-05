const arr = [1, 2, 3, 4, 5];
function searchInArray(data, nilai) {
    if (data.length === 0) {
        return "angka tidak ditemukan"
    }
    if(data[data.length-1] === nilai){
        return "angka ditemukan pada index:" + (data.length-1)
    }
    return searchInArray(data.slice(0,-1), nilai)
}

searchInArray(arr, 6);
searchInArray(arr, 1);
searchInArray(arr, 8);

console.log(searchInArray(arr, 6));
console.log(searchInArray(arr, 1));
console.log(searchInArray(arr, 8));
