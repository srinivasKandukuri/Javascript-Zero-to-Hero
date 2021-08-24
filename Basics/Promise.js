
/* The function passed to new Promise is called the executor. When new Promise is created, the executor runs automatically.
Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.
When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

resolve(value) — if the job is finished successfully, with result value.
reject(error) — if an error has occurred, error is the error object.



So to summarize: the executor runs automatically and attempts to perform a job. When it is finished with the attempt, it calls resolve if it was successful or reject if there was an error.

The promise object returned by the new Promise constructor has these internal properties:

state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.

*/

let promise = new Promise(function(resolve, reject){
   // executor 
})



let promise = new Promise(function(resolve, reject) {
    // the function is executed automatically when the promise is constructed
  
    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
  });



  let promise = new Promise(function(resolve, reject) {
    // after 1 second signal that the job is finished with an error
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });



  let promise = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
  });
  
  // reject runs the second function in .then
  promise.then(
    result => alert(result), // doesn't run
    error => alert(error) // shows "Error: Whoops!" after 1 second
  );



  //  finally we don’t know whether the promise is successful or not. That’s all right, as our task is usually to perform “general” finalizing procedures.


  new Promise((resolve, reject) => {
    /* do something that takes time, and then call resolve/reject */
  })
    // runs when the promise is settled, doesn't matter successfully or not
    .finally(() => stop loading indicator)
    // so the loading indicator is always stopped before we process the result/error
    .then(result => show result, err => show error)