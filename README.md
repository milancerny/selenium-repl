# node-boilerplate

This is quick starting point to clone and start node project. Mainly for my own learning purposes. 
However this can help beginners to setup quickly "standardized" layout and set of "tooling/development" modules.

## Goals and Features 

- tests - including selected test runner and libs 
- lints
- unobtrusive - tools are installed as devDependencies, not --global and used with `npm run` scripts.

You can do the following:

	npm run lint
	npm test

	# with npm 2.0 you can also run tests (and any other scripts) 
	# with ad-hoc params, e.g changing reporter of test on CLI, 
	# without touching package.json scripts or mocha.opts

	npm run test -- -R dot


## Notes 

Useful commands used when creating this boilerplate, and few notes:

	npm init
	
	# lints

	npm install --save-dev JSHint
	touch .jshintignore
	touch .jshintrc

	# tests

	npm install --save-dev mocha

	mkdir test
	touch test/mocha.opts

	# git setup

	touch .gitignore
	echo "node_modules" >> .gitignore


	# you may also want this:

	# as assert library for tests
	npm install --save-dev chai-as-promised

	# for load tests
	npm install --save-dev loadtest