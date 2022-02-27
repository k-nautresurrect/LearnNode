const p = Promise.reject("error is created.");
p.catch((err) => console.log(err));

const pm = Promise.reject(new Error("the issue is : "));
pm.catch((err) => console.log(err));
