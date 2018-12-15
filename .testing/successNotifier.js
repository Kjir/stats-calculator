const { exec } = require("child_process");

class SuccessNotifier {
  apply(jestHooks) {
    jestHooks.onTestRunComplete(results => {
      if (results.success) {
        exec('spotify play "Jingle Bell Rock"');
      }
    });
  }
}
module.exports = SuccessNotifier;
