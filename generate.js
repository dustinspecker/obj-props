// Slightly modified version of
// https://github.com/sindresorhus/proto-props/blob/04fad48f995428eff7e57ab088601a548fc20f2e/generate.js

// The published module can be used from node.js 0.10 but the development scripts require node.js 12+.
'use strict';
const fs = require('fs');
const jsTypes = require('js-types');

// eslint-disable-next-line no-use-extend-native/no-use-extend-native
const ret = Object.fromEntries(jsTypes.map(cur => {
	return [
		cur,
		[
			...new Set([
				...Object.getOwnPropertyNames(global[cur]),
				...Object.getOwnPropertyNames(Reflect.getPrototypeOf(global[cur]))
			])
		].sort()
	];
}));

fs.writeFileSync('obj-props.json', JSON.stringify(ret, null, '\t'));
