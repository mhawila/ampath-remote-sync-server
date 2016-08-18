var shell = require('shelljs');

function executeCmdAsync(cmd) {
  console.log(cmd);

  var child = shell.exec(cmd, {
    async: true,
    silent: true
  });

  return new Promise(function(resolve, reject) {
    shell.exec(cmd, {
      silent: true
    }, function(code, stdout, stderr) {
      if (code !== undefined && code !== 0) {
        console.log('Error code====>', code);
        reject(stderr);
      }
      resolve(stdout);
    });
  });
}
exports.executeCmdAsync = executeCmdAsync;
