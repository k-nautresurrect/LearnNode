const p = new Promise((resolve, reject) => {
  // async work
  setTimeout(() => {
    resolve(1);
    reject(new Error());
  }, 2000);
});

p.then((result) => console.log(result)).catch((err) => console.log(err));
