console.log (1);
console.log (2);

setTimeout (()=>{
console.log ('lazy Logged')


}, 4000)

console.log (4);
console.log (5);
console.log (6);

function doSomething (){
    console.log (3);



}


let num = 0;
 const interValId = setInterval( () => {

 console.log (num++)

 if (num ===20){
    clearInterval (interValId);
 }


}, 2000 )