// const string = 'Robin';
// const inputa = 'robIn';
// if (string.toLowerCase() === inputa.toLowerCase()){
//     console.log('valid');
// }
// else{
//     console.log('not valid');
// }

// const existing = lyrics.toLowerCase().includes('View'.toLowerCase())
// console.log(existing)
// console.log(lyrics.indexOf('will'))
// console.log(lyrics.charAt(5))

//  const lyrics = 'Future will view our history as crime. Written by serj tenkian'
// const one = lyrics.split(' ')
// const dot = lyrics.split('.')
// const chars = lyrics.split('')
// const piece = lyrics.slice(0, 6)
// const piece2 = lyrics.substring(0, 5)
// const third = dot.join(':')
// const num = 3.15
// console.log(Math.round(num))


// for(i = 0; i < 20; i++){
//     const rand = Math.round(Math.random()*10);
//     console.log(rand)
// }

// var a = 10;
// var temp = a;
// var b = 15;
// var a = b;
// var b = temp;
// [a, b] = [b, a];
// console.log(a,b)

// var jim = 69;
// var dela = 97;
// var chinku = 99;

// if (jim > dela && jim > chinku){
//     console.log( 'jim will get the cake');
// }
// else if(dela > jim && dela > chinku){
//     console.log('dela will get the cake')
// }
// else{
//     console.log('chinku will get the cake')
// }
// function maxNum(numbers){
//     var largest = numbers[0]; 
//     for(i = 0; i < numbers.length; i++){
//       var sec2 = numbers[i];
//       if(sec2 < largest){
//         largest = sec2;
//       }
//     }
//     return largest;
// }
// var number = [69, 97, 95, 88];
// var result = maxNum(number);
// console.log(result)

// function reverse(str){
//     let reversed = ''
//     for (i = str.length-1; i >= 0; i--){
//         let element = str[i];
//         reversed = reversed + element;
        
//     }
//     return reversed;
// }
// function reverse(str){
//     var one = str.split(' ');
//     let lass = []
//     for (let i = one.length-1; i >= 0; i--){
//         const element = one[i];
//         lass.push(element)
        
//     }
//     const joined = lass.join(' ');
//     return joined;
// }
     
// const myString = 'My name is robin';
// const result = reverse(myString);
// console.log(result)

const fibo = [0, 1]
for(i = 2; i <= 10; i++){
    fibo[i] = fibo[i-1] + fibo[i-2];
}
console.log(fibo)

