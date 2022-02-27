console.log("before");
getUser(1, (user) => {
  getRepo(user.githubusername, (repo) => {
    getCommit(repo, (commits) => {
      console.log("commits ", commits);
      // callback hell
    });
  });
});
console.log("after");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("reading user");
    const lusr = { id: id, githubusername: "kushagra" };
    callback(lusr);
  }, 2000);
}

function getRepo(username, callback) {
  setTimeout(() => {
    console.log("fetching repo");
    const repo = { username: username, repos: ["repo1", "repo2", "repo3"] };
    callback(repo);
  }, 2000);
}

function getCommit(repos, callback) {
  setTimeout(() => {
    console.log("getting commits");
    const commits = {
      repo: repos.repos[0],
      commit: ["commit1", "commit2", "commit3"],
    };
    callback(commits);
  }, 2000);
}
