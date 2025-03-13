for (var i = 0; i <=20; i++) {
    console.log(i);
    let x=i%2;
    while (x ==0) {
     
     console.log(i);
     break;
 }
 
 }   
 var i=10;
 do{
     console.log(i);
     i--;
     
 } while (i>0);    
 function greetuser(guest){
     console.log("Hello, " + guest);
     
 }
 function sumarr(arr) {
     let sum = 0;
     for (let i = 0; i < arr.length; i++) {
         sum += arr[i];
     }
     console.log(sum);
     
 }
 var student = {
     name:'joe',
     age : 24,
     grade : 'A',
     intrduce(){
         console.log(`Hello, my name is ${this.name} and I am ${this.age} years old. I got a ${this.grade} in the last exam.`);
     },
     updategrade(newgrade){
         this.grade = newgrade;
         console.log(`My new grade is ${this.grade}`);
     }
 }
 greetuser('John');
 sumarr([1,2,3,4,5]);
 student.intrduce();
 student.subject = ["Math", "Science", "English"];
 console.log(student.subject);
 student.updategrade('B');
 console.log(student.grade);
 var fruits = ['apple', 'banana', 'mango', 'orange', 'grape'];
 console.log(fruits);
 fruits.push('kiwi');
 console.log(fruits);
 fruits.pop();
 console.log(fruits);
 
 function reverse(array) {
     let reversed = [];
     for (let i = array.length - 1; i >= 0; i--) {
         reversed.push(array[i]);
     }
     return reversed;
 }
 console.log(reverse([1,2,3,4,5]));