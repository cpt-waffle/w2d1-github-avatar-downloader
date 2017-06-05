
//main
if (process.argv[2] && process.argv[3]) {
  var myGitModules = require('./myGit_modules')

  myGitModules.getRepoContributors(process.argv[2], process.argv[3], function(err, result) {
    //console.log("Errors:", err);
    for (let i = 0; i < result.length-1; i++) {
      myGitModules.downloadImageByURL(result[i].avatar_url, 'avatars/' + result[i].login + '.jpeg');
    }
  });
} else {
  console.log("Enter the comand in the following order");
  console.log("node download_avatars.js {repoOwner} {repoName}");
  return -1;
}


