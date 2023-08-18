
/*

function failureCallback()

function dohirdThing(ewResult, callback, failureCallback);

function doSomethingElse(result, callback, failureCallback);

function doSomething(callback, failureCallback) {

  result = ...

  try {
    callback(...args)
  } catch (e) {
    failureCallback()
  }

 }

 

*/

// class Pwomise{

//   constructor(success = null, failure = null) {


//   }


// }


function failureCallback() {
  console.log("function failed");
}

function doSomething(callback, failureCallback) {
  result = "deeznuts";
  try {
    callback(result);
  } catch(e) {
    failureCallback();
    console.log("error from doSomething: " + e.message);
  }
}

function doSomethingElse(result, callback, failureCallback) {
  try {
    callback(result);
  } catch(e) {
    failureCallback();
    console.log("error from doSomethingElse: " + e.message);
  }
}

function doThirdThing(result, callback, failureCallback) {
  try {
    callback(result);
  } catch(e) {
    failureCallback();
    console.log("error from doThirdThing: " + e.message);
  }
}


// doSomething(function (result) {
//   doSomethingElse(result, function(newResult) {
//     doThirdThing(newResult, function(finalResult) {
//       console.log(`${finalResult} on yomama!`);
//     },failureCallback);
//   }, failureCallback);
// }, failureCallback);

// let promise = new Promise(function(resolve, reject) {
//     try {
//       console.log("I slap you with ");
//       resolve();
//     } catch(e) {
//       reject();
//     }

//   }
// );

// function printMsg(msg, result = null) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() { resolve(msg); }, 1000);
//   }).then((result) => {console.log(result)})
// }

// printMsg("deezzz").then(
//   (result) => printMsg("nuts")
// ).then(
//   (result) => printMsg("on")
// ).then(
//   (result) => printMsg("yo")
// ).then(
//   (result) => printMsg("mama!!")
// )




// async function testSyntax() {
//   await printMsg("deez");
//   await printMsg("nuts");
//   await printMsg("on");
//   await printMsg("yo");
//   await printMsg("mama!!")
// }


function getAsyncNum(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {resolve(num)}, 1000);
  })
}

// getAsyncNum(69).then((result) => {console.log(result)})

// Promise.all([getAsyncNum(69), getAsyncNum(420), getAsyncNum(666)]).then(
//   (result) => {
//     for (let num of result) {
//       console.log(num)
//     }
//   }
// )

async function getAsyncNums() {
  const nums = await Promise.all([getAsyncNum(69), getAsyncNum(420), getAsyncNum(666)]);
  for (let num of nums) {
    console.log(num);
  }
}

getAsyncNums();





