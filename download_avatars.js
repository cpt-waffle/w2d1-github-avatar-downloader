function getRepoContributors(repoOwner, repoName, cb) {
  var request = require("request");
  var GITHUB_TOKEN = '8548dbb8652a4ab3d1538e602d887a4c51f02167';
  var GITHUB_USER = 'waff1e';
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  console.log
  var options = {
    url: requestURL,
    headers: {
      'User-Agent': 'request'
    }
  };

  //the way to do with .get the output of request is outstream which is body
  // but we are not working with any files so doing it this way where entire body that was send out
  //is in a variable
  request(options, function(error, response, body) {
    if (error)
      throw error;

    //parsed working with json
    var objects = JSON.parse(body);
    cb(error,objects);


  });
}


function downloadImageByURL(url, filePath) {

  var request = require("request");
  var fs = require("fs");

  request.get(url)
  .on("error", function(err) {
    throw err;
  }).pipe(fs.createWriteStream(filePath));

}

downloadImageByURL("https://avatars3.githubusercontent.com/u/1615?v=3", "avatars/kvirani.jpg")


//https://avatars2.githubusercontent.com/u/81942?v=3



getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  for (let i = 0; i < result.length-1; i++) {
    console.log(result[i].avatar_url);
  }
});


