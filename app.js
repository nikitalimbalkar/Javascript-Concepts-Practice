const promise1=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Task 1 completed");
    },1000);
});

const promise2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Task 2 completed");
    },3000);
});

const promise3=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("Task 3 completed");
    },5000);
});

Promise.allSettled([promise1,promise2,promise3])
.then(results=> {
    console.log("all task finished:");
    console.log(results);
})
.catch(err=>{
    console.log("one of the tasks failed:",err);
});


