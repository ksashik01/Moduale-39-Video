

// const getData = new Promise ((resolve,reject) =>{

//     resolve (566665);



// }  )

// // console.log (getData)

// getData.then (data => console.log (data));





const getData = new Promise ((resolve,reject) =>{

    // reject ('no data available');

    const num = Math.random ()*10;
    console.log (num);
    if (num < 5){

        resolve (566665)

    }
    else{
            reject ('no data available');

    }



}  )

console.log (getData)

getData
.then (data => console.log (data))
.catch (err => console.log ('ERR', err) )



// ----------

// const ride = new Promise ((resolve,reject) => {

// if (arrived)
// resolve ('Driver Arrived');

// else {

//     reject ('Driver Failed')
// }

// })

// ride 
// .then (data => console.log (data))
// .catch (err => console.log ('Error'))




