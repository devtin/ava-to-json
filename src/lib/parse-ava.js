import { stripJsdocComment } from './utils/strip-js-doc-comment.js'
import { avaPatterns } from './utils/ava-patterns.js'

/**
 * A module for converting AVA tests syntax into JSON
 * @module ava2json
 */

/**
 * @typedef {Object} AvaTest
 * @property {String} title - The AVA test title wrapped inside of the test function
 * @property {String} description - The feature description (if any) added above the test as a JSDoc comment
 * @property {String} code - The code found wrapped in the test function.
 * @property {String} flag - Either `'skip'`, `'only'`, `'todo'` or `null` for none;
 */

/**
 * Parses given AVA test source code
 * @function parseAva
 * @param {String} avaString - The source of the AVA test file
 * @param {Object} [options]
 * @param {Number} [options.unIndent=2] - Positive integer in which the code will be un-indented
 * @param {String} [options.testName=test] - The name of the test function to look-up into the code
 * @return {AvaTest[]} The tests found in the source code
 */
export function parseAva (avaString, { unIndent = 2, testName = 'test' } = {}) {
  const { findComment, findStatusAndTitle, findCode } = avaPatterns
  const avaTestPatternText = [
    `(?:${ findComment }[\\s]+)?`,
    findStatusAndTitle.replace('<test-name>', testName),
    findCode.replace('<test-name>', testName)
  ].join('')
  const avaTestsPattern = new RegExp(avaTestPatternText, 'gsmi')

  const testsWithCode = []
  let testBlock
  while ((testBlock = avaTestsPattern.exec(avaString)) !== null) {
    // build ava test parts
    const title = testBlock[4].replace(new RegExp(`\\\\${ testBlock[3] }`, 'g'), testBlock[3])
    const description = testBlock[1] ? stripJsdocComment(testBlock[1]) : null
    const code = testBlock[5] ? testBlock[5].replace(new RegExp(`^ {${ unIndent }}`, 'mgsi'), '') : null
    const flag = testBlock[2] || null
    testsWithCode.push({
      title,
      description,
      code,
      flag
    })
  }
  return testsWithCode
}
