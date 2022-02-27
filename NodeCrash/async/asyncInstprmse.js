console.log("before");

async function showCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepo(user.githubusername);
    const commits = await getCommit(repos);
    console.log(commits);
  } catch (err) {
    console.log(err);
  }
}
console.log("after");

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
      reject("repo doesn't exist");
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

showCommits();
