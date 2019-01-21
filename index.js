"use strict";

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.options = options;

    this.hooks = {
      "after:deploy": this.afterDeploy.bind(this)
    };
  }

  afterDeploy() {
    this.serverless.cli.log("Horray! it deployed!  🎉🎊 ");
  }
}

module.exports = ServerlessPlugin;
