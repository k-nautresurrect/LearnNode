console.log("before");

getUser(1)
  .then((user) => getRepo(user.githubusername))
  .then((repo) => getCommit(repo))
  .then((commits) => console.log(commits));

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("reading user");
      const lusr = { id: id, githubusername: "kushagra" };
      resolve(lusr);
    }, 2000);
  });
}

function getRepo(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("fetching repo");
      const repo = { username: username, repos: ["repo1", "repo2", "repo3"] };
      resolve(repo);
    }, 2000);
  });
}

function getCommit(repos) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("getting commits");
      const commits = {
        repo: repos.repos[0],
        commit: ["commit1", "commit2", "commit3"],
      };
      resolve(commits);
    }, 2000);
  });
}
