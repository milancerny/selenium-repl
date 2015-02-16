var webdriver = require("selenium-webdriver");
var ff = require('selenium-webdriver/firefox');
var driver = new ff.Driver();

var By = webdriver.By;
var until = webdriver.until;




var repl = require("repl").start({
    prompt: "SELENIUM-REPL>",
    "eval": function(cmd, context, filename, callback) {
        webdriver.promise.controlFlow().on('uncaughtException', function(ex) {
            callback(ex, null);
        });
        webdriver.promise.controlFlow().execute(function() {
            /*jshint evil:true */
            return eval(cmd);
        }).then(function(r) {
            callback(null, r);
        }).thenCatch(function(ex) {
            callback(ex, null);
        });
    }
});
repl.context.webdriver = webdriver;
repl.context.driver = driver;

repl.on("exit", function() {
   driver.getSession().then(function(session) {
        if (session) {
            driver.quit();
        }
    });
});
