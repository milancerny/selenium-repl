# node-boilerplate

This is quick starting point to clone and start node project. Mainly for my own learning purposes. 
However this can help beginners to setup quickly "standardized" layout and set of "tooling/development" modules.

## Goals and Features 


Tools:

- tests - including selected test runner and libs 
- lints and other code quality tools
- unobtrusive - tools are installed as devDependencies, not --global and used with `npm run` scripts


Libraries:

- Promises - since we code in promise style, good lib was needed, we have chosen bluebird.


## Tools Installed

You can do the following:

Run Lints and Code Analysis 

	npm run lint
	npm run plato

Run tests

	npm test


With npm 2.0 you can also run tests (and any other scripts) 
with ad-hoc params, e.g changing reporter of test on CLI, 
without touching package.json scripts or mocha.opts

	npm run test -- -R dot


## Notes 

Useful commands used when creating this boilerplate, and few notes:

	npm init
	

	# git setup

	touch .gitignore
	echo "node_modules" 	>> .gitignore
	echo "npm-debug.log" 	>> .gitignore


	# lints

	npm install --save-dev JSHint
	touch .jshintignore
	touch .jshintrc
	echo "node_modules/" 	>> .jshintignore

	npm install --save-dev plato
	echo "test_reports/" 	>> .gitignore
	echo "test_reports/" 	>> .jshintignore

	# tests

	npm install --save-dev mocha

	mkdir test
	touch test/mocha.opts

	# you may also want this:

	# as assert library for tests
	npm install --save-dev chai-as-promised

	# for load tests
	npm install --save-dev loadtest


	# libs
	npm install --save bluebird|name|version|homepage|description|path|

## Review

This is summary of top level modules included in dependencies and devDependencies used by this boilerplate

|name|version|homepage|description|path|
|----|-------|--------|-----------|----|
|bluebird|2.7.1|https://github.com/petkaantonov/bluebird|Full featured Promises/A+ implementation with exceptionally good performance|./node_modules/bluebird/package.json|
|jshint|2.5.11|http://jshint.com/|Static analysis tool for JavaScript|./node_modules/jshint/package.json|
|loadtest|1.2.6|https://github.com/alexfernandez/loadtest|Run load tests for your web application. Mostly ab-compatible interface, with an option to force requests per second. Includes an API for automated load testing.|./node_modules/loadtest/package.json|
|mocha|2.1.0||simple, flexible, fun test framework|./node_modules/mocha/package.json|
|plato|1.3.0|https://github.com/es-analysis/plato|JavaScript source analysis and visualizer|./node_modules/plato/package.json|



