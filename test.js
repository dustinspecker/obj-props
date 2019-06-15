'use strict';
import test from 'ava';
import objProps from './obj-props';

test('obj-props', t => {
	t.true(Object.keys(objProps).length > 0);
	t.truthy(objProps.Array);
	t.truthy(objProps.Number);
	t.true(objProps.Array.includes('from'));
	t.true(objProps.Object.includes('fromEntries'));
});
