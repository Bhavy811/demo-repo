// const input = [1,2,3,4,5]
// const newArr = []
// for( let i =0; i<input.length; i++)
// {
//     newArr[i] = 2*input[i]
// }
// console.log(newArr)

// using map
// const input = [1,2,3,4,5]
// function transform(i){
//     return i*2;
// }

// const ans = input.map(transform)
// console.log(ans);

// const arr = [1,2,3,4,5,6,7,8,9,10];
// const arr2 = []
// for( let i =0;i< arr.length; i++)
// {
//     if(arr[i]%2 == 0){
//         arr2.push(arr[i])
//     }
// }
// console.log(arr2)

//FILTER:
// const arr = [1,2,3,4,5,6,7,8,9,10];
// function evenFilter(n){
//     if(n%2 == 0) return true;
//     else return false;
// }

// const ans = arr.filter(evenFilter)
// console.log(ans)

const name = ["hanu", "bhojo", "hakka"]
function Filter(n){
    if(n.startsWith("h")) return true;
    else return false;
}
const ans = name.filter(Filter)
console.log(ans)