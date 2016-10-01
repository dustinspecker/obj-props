// Slightly modified version of
// https://github.com/sindresorhus/proto-props/blob/04fad48f995428eff7e57ab088601a548fc20f2e/generate.js

'use strict';
var fs = require('fs');
var jsTypes = require('js-types');

var ret = jsTypes.reduce(function (acc, cur) {
	acc[cur] = Object.getOwnPropertyNames(global[cur]).sort();

	return acc;
}, {});

fs.writeFileSync('obj-props.json', JSON.stringify(ret, null, '\t'));
