const start = new Date();

console.log("before");
const user = getUser(1);
console.log(`${user} consoled.`);
console.log("after");

function getUser(id) {
  setTimeout(() => {
    console.log("reading a user " + (new Date() - start));
    console.log(`${user} in func.`);
    return { id: id, githubUsername: "kushagra" };
  }, 2000);
}
if (user) {
  console.log(user);
}
