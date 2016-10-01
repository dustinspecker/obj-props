'use strict';
import test from 'ava';
import objProps from './obj-props';

test(t => {
	t.true(Object.keys(objProps).length > 0);
	t.truthy(objProps.Array);
	t.truthy(objProps.Number);
	t.true(objProps.Array.indexOf('from') !== -1);
});
