import test from 'ava';
import {execa} from 'execa';

test('main', async t => {
	const {stdout} = await execa('./cli.js', ['Déjà Vu!']);
	t.is(stdout.split("\n")[0], 'deja-vu');
});

test('separator', async t => {
	const {stdout} = await execa('./cli.js', ['Like a Boss', '--separator=_']);
	t.is(stdout.split("\n")[0], 'like_a_boss');
});

test('lowercase', async t => {
	const {stdout} = await execa('./cli.js', ['Déjà Vu!', '--no-lowercase']);
	t.is(stdout.split("\n")[0], 'Deja-Vu');
});

test('decamelize', async t => {
	const {stdout} = await execa('./cli.js', ['fooBar', '--no-decamelize']);
	t.is(stdout.split("\n")[0], 'foobar');
});

test('preserve-leading-underscore', async t => {
	const {stdout} = await execa('./cli.js', ['_foo_bar', '--preserve-leading-underscore']);
	t.is(stdout.split("\n")[0], '_foo-bar');
});
