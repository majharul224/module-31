//single function arrow
/* const add=(num1,numb2)=>num1 + numb2;
const sum= add(12,15);
console.log(sum); */
//single function parameter arrow-3
/* const add2 = (num1, num2, num3)=> num1+num2*num3;
const sum2 = add2(12,15,5);
console.log(sum2); */
// single function   bracket()
/* const add3= (num)=>num*5;
const sum3= add3(6);
console.log(sum3); */
// single function no bracket()
/* const add4= num=>num*5;
const sum4= add4(6);
console.log(sum4); */
 //single function no parameter no bracket()
 /* const getName= ()=> 'Majharul Islam';
const name= getName();
console.log(name); 
 */
//multipul function us
const doMath= (x,y)=>{
    const sum=x + y;
    const diff=x -y;
    const result= sum *diff;
    const outPut =result *5;
    return outPut;
}
const total=doMath(9, 7);
console.log(total);