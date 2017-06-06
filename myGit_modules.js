//Modular design
function getRepoContributors(repoOwner, repoName, cb) {
  var request = require("request");
  require('dotenv').config()
  var requestURL = 'https://'+ process.env.GITHUB_USER + ':' + process.env.GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

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

module.exports = {
  getRepoContributors: getRepoContributors,
  downloadImageByURL: downloadImageByURL
}