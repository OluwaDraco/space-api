// const avalibleOrders  = ['ham','chicken','goat']
// const order = "pig"

// const promisesBreakfast = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         avalibleOrders.forEach(item => {
//             if(item === order){
//                 resolve("your order is ready come and get it!")
//             }
//             reject("I'm sorry we are out!");
//         })
        
//     },3000)
// });

// console.log(promisesBreakfast);
// promisesBreakfast
// .then( val => console.log(val) )
// .catch( error => console.log(error) );
function addFive(n){
    return n+5;
}
function double(n){
    return n*2;
}

function finalNumber(nextValue){
    console.log(`this is the final number: ${nextValue}`);
}
const pb = new Promise((resolve,reject) =>{
       setTimeout(()=>{
        if(typeof value === 'number'){
            resolve(value)
        }
        else{
            reject("im not a number")
        }
    
       },2000)
  });
  const value = 5;
  
  pb
  .then(addFive)
  .then(double)
  .then(finalNumber)
  .catch(error => console.log(error));

