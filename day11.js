//task 1
const resolvePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise resolved after 2 seconds");
  }, 2000);
});
resolvePromise.then((message) => {
  console.log(message);
});

//task 2
const rejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("error");
  }, 2000);
});
rejectPromise.catch((message) => {
  console.log(message);
});

//task 3
const fetchData1 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 1");
    }, 1000);
  });
const fetchData2 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 2");
    }, 1000);
  });
const fetchData3 = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from server 3");
    }, 1000);
  });
fetchData1()
  .then((message) => {
    console.log(message);
    return fetchData2();
  })
  .then((message) => {
    console.log(message);
    return fetchData3();
  })
  .then((message) => {
    console.log(message);
  });

//task4
const asyncFunctionResolve = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved value after 2 seconds");
    }, 2000);
  });

const result = await promise;
  console.log(result);
};
asyncFunctionResolve();

//task5
const asyncFunctionReject = async () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Rejected value after 2 seconds");
    }, 2000);
  });

  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
asyncFunctionReject();

//task6
const fetchDataWithPromises = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
};
fetchDataWithPromises();

//task7
const fetchDataWithAsyncAwait = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};
fetchDataWithAsyncAwait();

//task8
const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

const promise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 3 resolved");
  }, 3000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // ["Promise 1 resolved", "Promise 2 resolved", "Promise 3 resolved"]
});

//task9
const promiseA = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise A resolved first");
  }, 1000);
});

const promiseB = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise B resolved first");
  }, 2000);
});

const promiseC = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise C resolved first");
  }, 3000);
});

Promise.race([promiseA, promiseB, promiseC]).then((value) => {
  console.log(value); // "Promise A resolved first"
});
