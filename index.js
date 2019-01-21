"use strict";

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      "aws:deploy:deploy:updateStack": this.afterDeploy.bind(this)
    };
  }

  afterDeploy() {
    this.serverless.cli.log("Horray! it deployed!  🎉🎊 ");
  }
}

module.exports = ServerlessPlugin;
