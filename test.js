import test from 'ava';
import { execa } from 'execa';

test('main', async t => {
	const { stdout } = await execa('./cli.js', ['Déjà Vu!']);
	t.is(stdout.split("\n")[0], 'deja-vu');
});

test('separator', async t => {
	const { stdout } = await execa('./cli.js', ['Like a Boss', '--separator=_']);
	t.is(stdout.split("\n")[0], 'like_a_boss');
});

test('lowercase', async t => {
	const { stdout } = await execa('./cli.js', ['Déjà Vu!', '--no-lowercase']);
	t.is(stdout.split("\n")[0], 'Deja-Vu');
});

test('decamelize', async t => {
	const { stdout } = await execa('./cli.js', ['fooBar', '--no-decamelize']);
	t.is(stdout.split("\n")[0], 'foobar');
});

test('preserve-leading-underscore', async t => {
	const { stdout } = await execa('./cli.js', ['_foo_bar', '--preserve-leading-underscore']);
	t.is(stdout.split("\n")[0], '_foo-bar');
});

test('parentheses', async t => {
	const { stdout } = await execa('./cli.js', ['HSVDetector: a heterogeneous semantic graph-based method for smart contract vulnerability detection (Zhu et al., 2025)']);
	t.is(stdout.split("\n")[0], 'hsv-detector-a-heterogeneous-semantic-graph-based-method-for-smart-contract-vulnerability-detection-zhu-et-al-2025');
});

test('colons and parentheses with no-lowercase', async t => {
	const { stdout } = await execa('./cli.js', ['Paper Title: Some Research (Author et al., 2024)', '--no-lowercase']);
	t.is(stdout.split("\n")[0], 'Paper-Title-Some-Research-Author-et-al-2024');
});

test('multiple special characters', async t => {
	const { stdout } = await execa('./cli.js', ['Hello@World#Test$2024!']);
	t.is(stdout.split("\n")[0], 'hello-world-test-2024');
});

test('brackets and braces', async t => {
	const { stdout } = await execa('./cli.js', ['Array[0] and Object{key}']);
	t.is(stdout.split("\n")[0], 'array-0-and-object-key');
});

test('quotes', async t => {
	const { stdout } = await execa('./cli.js', ['She said "hello" and \'goodbye\'']);
	t.is(stdout.split("\n")[0], 'she-said-hello-and-goodbye');
});

test('ampersands and pipes', async t => {
	const { stdout } = await execa('./cli.js', ['A & B | C']);
	t.is(stdout.split("\n")[0], 'a-and-b-c');
});

test('math symbols', async t => {
	const { stdout } = await execa('./cli.js', ['2 + 2 = 4, 3 * 3 = 9']);
	t.is(stdout.split("\n")[0], '2-2-4-3-3-9');
});

test('percentage and currency', async t => {
	const { stdout } = await execa('./cli.js', ['$100 is 50% off']);
	t.is(stdout.split("\n")[0], '100-is-50-off');
});

test('slashes', async t => {
	const { stdout } = await execa('./cli.js', ['path/to/file.txt']);
	t.is(stdout.split("\n")[0], 'path-to-file-txt');
});

test('multiple spaces and tabs', async t => {
	const { stdout } = await execa('./cli.js', ['Multiple    Spaces   Here']);
	t.is(stdout.split("\n")[0], 'multiple-spaces-here');
});

test('emoji', async t => {
	const { stdout } = await execa('./cli.js', ['Hello 👋 World 🌍']);
	t.is(stdout.split("\n")[0], 'hello-world');
});

test('leading and trailing spaces', async t => {
	const { stdout } = await execa('./cli.js', ['  Trim Me  ']);
	t.is(stdout.split("\n")[0], 'trim-me');
});

test('only special characters', async t => {
	const { stdout } = await execa('./cli.js', ['@#$%^&*()']);
	t.is(stdout.split("\n")[0], 'and');
});

test('numbers only', async t => {
	const { stdout } = await execa('./cli.js', ['123456789']);
	t.is(stdout.split("\n")[0], '123456789');
});

test('mixed case with numbers', async t => {
	const { stdout } = await execa('./cli.js', ['iPhone15Pro', '--no-decamelize']);
	t.is(stdout.split("\n")[0], 'iphone15pro');
});

test('newlines', async t => {
	const { stdout } = await execa('./cli.js', ['Line 1\nLine 2\nLine 3']);
	t.is(stdout.split("\n")[0], 'line-1-line-2-line-3');
});

test('tabs', async t => {
	const { stdout } = await execa('./cli.js', ['Column\tA\tColumn\tB']);
	t.is(stdout.split("\n")[0], 'column-a-column-b');
});

test('carriage returns', async t => {
	const { stdout } = await execa('./cli.js', ['Carriage\rReturn\rTest']);
	t.is(stdout.split("\n")[0], 'carriage-return-test');
});

test('mixed whitespace characters', async t => {
	const { stdout } = await execa('./cli.js', ['Mix\n\tOf   \rWhitespace']);
	t.is(stdout.split("\n")[0], 'mix-of-whitespace');
});
