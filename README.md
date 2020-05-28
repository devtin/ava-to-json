# ava2json
[![tests](https://github.com/devtin/ava-to-json/workflows/test/badge.svg)](https://github.com/devtin/ava-to-json/actions)

## Usage

```js
// sample.test.js
import test from 'ava'

/**
* I want to be able to parse test files to improve my software development experience
*/

test(`Parses ava test\`s files`, async t => {
// some code
t.pass()
})

/**
* And the ability of displaying a description of the test in the form of a JSDoc comment
* right above the tests.
*/

test.skip(`Returning useful information such as the title, description, code and flags`, async t => {
// some other code
t.pass()
})

test.todo(`Even todo tests without a sample code are or description are parsed.`)
```


* [ava2json](#user-content-module_ava2json)
  * _Methods_
    * [parseAva(avaString, [options])](#user-content-module_ava2json..parseAva)
    * [parseFile(file, [options])](#user-content-module_ava2json..parseFile)
    * [parseFileSync(file, [options])](#user-content-module_ava2json..parseFileSync)
  * _Other_
    * [AvaTest](#user-content-module_ava2json..AvaTest)

<a name="module_ava2json..AvaTest"></a>

### ava2json~AvaTest

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | The AVA test title wrapped inside of the test function |
| description | <code>String</code> | The feature description (if any) added above the test as a JSDoc comment |
| code | <code>String</code> | The code found wrapped in the test function. |
| flag | <code>String</code> | Either `'skip'`, `'only'`, `'todo'` or `null` for none; |

<a name="module_ava2json..parseAva"></a>

### ava2json~parseAva(avaString, [options])

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| avaString | <code>String</code> |  | The source of the AVA test file |
| [options] | <code>Object</code> |  |  |
| [options.unIndent] | <code>Number</code> | <code>2</code> | Positive integer in which the code will be un-indented |
| [options.testName] | <code>String</code> | <code>test</code> | The name of the test function to look-up into the code |

**Returns**: <code>Array.&lt;AvaTest&gt;</code> - The tests found in the source code  

Parses given AVA test source code

<a name="module_ava2json..parseFile"></a>

### ava2json~parseFile(file, [options])

| Param | Type | Description |
| --- | --- | --- |
| file | <code>String</code> | Path to the AVA file |
| [options] | <code>Object</code> | Same options as in [parseAva](parseAva) |


Parses given AVA file

<a name="module_ava2json..parseFileSync"></a>

### ava2json~parseFileSync(file, [options])

| Param | Type | Description |
| --- | --- | --- |
| file | <code>String</code> | Path to the AVA file |
| [options] | <code>Object</code> | Same options as in [parseAva](parseAva) |


Parses given AVA file synchronously


A module for converting AVA tests syntax into JSON


* * *

### License

[MIT](https://opensource.org/licenses/MIT)

&copy; 2020-present Martin Rafael Gonzalez
<tin@devtin.io>
