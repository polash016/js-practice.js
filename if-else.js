// problem1
// var fruits = ['Apple', 'Banana', 'Orange']
// fruits[1] = 'Mango'
// fruits.pop()
// fruits.push('Watermelon')

// console.log(fruits)
// problem2
// var my = 85;
// var tom = 66;
// var jane = 95;
// var peter = 56;
// var john = 40;
// if (my >= 80){
//     console.log('A Grade')
// }
// if (tom >= 60){
//     console.log('B Grade')
// }
// problem 3
// var num1 = 13;
// var num2 = 79;
// var num3 = 45;
// if (num1 > num2 && num1 > num3){
//     console.log('Largest Number' + num1)
// }
// else if (num2 > num1 && num2 > num1){
//     console.log('Largest Number' + num2)
// }
// else {
//     console.log('largest number' + num3)
// }

// var num1 = 9;
// var num2 = 8;
// var num3 = 9;
// if (num1 == num2 || num1 == num3){
//     console.log('Triangle is Isosceles')
// }
// var topics = ['html', 'css', 'bootstrap', 'responsive design', 'tailwind', 'basicjs']
// for(a = 0; a < topics.length; a += 1){
// var topic = topics[a];
//     console.log(topic);
// }
// var topics = ['html', 'css', 'bootstrap', 'responsive design', 'tailwind', 'basicjs']
// for(a = 5; a >= 0 ; a--){
// var topic = topics[a];
//     console.log(topic);
// }
// var a = 0;
// while(a <= 5){
//     var topic = topics[a]
//     console.log(topic)
//     a++
// }
// for(var a = 30; a <= 86; a++){
//     if(a > 44){
//         break
//     };
//     console.log(a)
// }
// let signal = 'green';
// if(signal === 'red'){
//     console.log('You are in danger')
// }
// else if (signal === 'yellow'){
//     console.log('You should stop')
// }
// else if (signal === 'green'){
//     console.log('You are good to go')
// }
// else{
//     console.log("Stand right there")
// }
// var signal = 'green'
// switch(signal){
//     case 'red':
//         console.log('you are in danger')
//         break;
//     case 'yellow':
//         console.log('you should stop')
//         break;
//     case 'green':
//         console.log('you are good to go')
//         break;
//     default:
//         console.log('stand here')    
// }
var numbers = [35, 44, 98, 25, 88, 122, 12]
for (var i = 0; i < 7; i++){
    var number = numbers[i];
    if (number > 60){
        continue;
    }
    console.log(number)
}