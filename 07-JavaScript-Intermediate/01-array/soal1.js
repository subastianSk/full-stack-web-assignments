const arr = [
  [10],
  [9, 7, 1],
  [2, 8],
];

function searchInArray(arr, num) {
  let tempArr = [];
  for(let i = 0; i < arr.length; i++){
      let number = arr[i];
      for(let j = 0; j < number.length; j++){
          tempArr.push(number[j]);
      }
  }
  
  for(let k = 0; k < tempArr.length; k++){
      if(tempArr[k] === num){
          var found = true;
          var index = k;
      }
  }

  if(found){
      return index;
  } else {
      return 'null';
  }
}

console.log(searchInArray(arr, 3));
console.log(searchInArray(arr, 2));
console.log(searchInArray(arr, 4));
console.log(searchInArray(arr, 8));