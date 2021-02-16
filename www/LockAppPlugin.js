var exec = require('cordova/exec');
var PLUGIN_NAME = "LockAppPlugin";

var LockAppPlugin = function() {};

LockAppPlugin.echo = function(str, onSuccess, onError) {
  exec(onSuccess, onError, PLUGIN_NAME, "echo", [str]);
}

LockAppPlugin.lock = function(onSuccess, onError) {
  exec(onSuccess, onError, PLUGIN_NAME, "lock", []);
};

LockAppPlugin.lock = function(onSuccess, onError) {
  exec(onSuccess, onError, PLUGIN_NAME, "lock", []);
};

module.exports = LockAppPlugin;
