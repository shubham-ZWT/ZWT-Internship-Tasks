// let x = 5;
// {
//     let x =10
//     console.log(x)
// }

// console.log(x)


// let date = Date.now()
// console.log(Math.floor(Math.random() * 1000));


// function myName () {
//     let name = "Sanket";
//     return function(){
//         name = "Yash";
//         return name;
//     };
// }

// const junk = myName()


// class Car {
//     constructor(model,year){
//         this.model = model;
//         this.year = year
//     }
// }

// const myCar = new Car("lam",2012)
// console.log(myCar.model)


// function myName(name){
//     console.log("this is fun");
// }


// myName();

const myPromise = new Promise((resolve,reject)=>{

    let is_true = true;

    if(is_true){
        resolve("Data is true");
    }
    else{
        reject("Data is false/rejected");
    }
});



myPromise
.then(result => console.log(result))
.catch(err => console.log(err))
.finally(()=>console.log("this is finally this will run always"))


function fetchUser(){
    return new Promise(resolve =>{
        setTimeout(()=> resolve("User Found"),2000);
    })
}

async function getUser() {
    try {
        const user = await fetchUser();
        console.log(user);
    } catch (error) {
        console.error(error);
    }
    
}

getUser();