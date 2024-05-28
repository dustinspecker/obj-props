// Slightly modified version of
// https://github.com/sindresorhus/proto-props/blob/04fad48f995428eff7e57ab088601a548fc20f2e/generate.js

import fs from 'node:fs';
import jsTypes from 'js-types';

const returnValue = Object.fromEntries(jsTypes.map(current =>
	[
		current,
		[
			...new Set([
				...Object.getOwnPropertyNames(global[current]),
				...Object.getOwnPropertyNames(Reflect.getPrototypeOf(global[current])),
			]),
		].sort(),
	],
));

fs.writeFileSync('obj-props.json', JSON.stringify(returnValue, null, '\t'));
