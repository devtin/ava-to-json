<div align="center"><h1 align="center">ava-to-json</h1></div>

<p align="center">
<a href="https://www.npmjs.com/package/ava-to-json" target="_blank"><img src="https://img.shields.io/npm/v/ava-to-json.svg" alt="Version"></a>
<a href="[object Object]/actions?query=workflow%3Atest"><img src="[object Object]/workflows/test/badge.svg"></a>
<a href="http://opensource.org/licenses" target="_blank"><img src="http://img.shields.io/badge/License-MIT-brightgreen.svg"></a>
</p>

<p align="center">
    Converts AVA tests syntax into JSON
</p>

## Installation

```sh
$ npm i ava-to-json --save
# or
$ yarn add ava-to-json
```



<br><a name="module_ava2json"></a>

## ava2json
**Description:**

A module for converting AVA tests syntax into JSON


* [ava2json](#module_ava2json)
    * [~parseAva(avaString, [options])](#module_ava2json..parseAva) ⇒ <code>Array.&lt;AvaTest&gt;</code>
    * [~parseFile(file, [options])](#module_ava2json..parseFile) ⇒ <code>Promise.&lt;Array.&lt;AvaTest&gt;&gt;</code>
    * [~parseFileSync(file, [options])](#module_ava2json..parseFileSync) ⇒ <code>Array.&lt;AvaTest&gt;</code>
    * [~AvaTest](#module_ava2json..AvaTest) : <code>Object</code>


<br><a name="module_ava2json..parseAva"></a>

### ava2json~parseAva(avaString, [options]) ⇒ <code>Array.&lt;AvaTest&gt;</code>

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| avaString | <code>String</code> |  | The source of the AVA test file |
| [options] | <code>Object</code> |  |  |
| [options.unIndent] | <code>Number</code> | <code>2</code> | Positive integer in which the code will be un-indented |
| [options.testName] | <code>String</code> | <code>test</code> | The name of the test function to look-up into the code |

**Returns**: <code>Array.&lt;AvaTest&gt;</code> - The tests found in the source code  
**Description:**

Parses given AVA test source code


<br><a name="module_ava2json..parseFile"></a>

### ava2json~parseFile(file, [options]) ⇒ <code>Promise.&lt;Array.&lt;AvaTest&gt;&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| file | <code>String</code> | Path to the AVA file |
| [options] | <code>Object</code> | Same options as in [parseAva](parseAva) |

**Description:**

Parses given AVA file


<br><a name="module_ava2json..parseFileSync"></a>

### ava2json~parseFileSync(file, [options]) ⇒ <code>Array.&lt;AvaTest&gt;</code>

| Param | Type | Description |
| --- | --- | --- |
| file | <code>String</code> | Path to the AVA file |
| [options] | <code>Object</code> | Same options as in [parseAva](parseAva) |

**Description:**

Parses given AVA file synchronously


<br><a name="module_ava2json..AvaTest"></a>

### ava2json~AvaTest : <code>Object</code>
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | The AVA test title wrapped inside of the test function |
| description | <code>String</code> | The feature description (if any) added above the test as a JSDoc comment |
| code | <code>String</code> | The code found wrapped in the test function. |
| flag | <code>String</code> | Either `'skip'`, `'only'`, `'todo'` or `null` for none; |


* * *

### License

[MIT](https://opensource.org/licenses/MIT)

&copy; 2020-present Martin Rafael Gonzalez
<tin@devtin.io>
