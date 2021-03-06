import trim from 'lodash/trim'

/**
 * Removes all asterisks and additional white spaces from JSDoc comments
 * @param {String} jsDocCommentBlock
 * @param {String} replaceValue - Value with to replace comment blocks
 * @return {String} The comment without the asterisks
 *
 * @example
 *
 * ```js
 * const jsDocSyntax = `/**
 *  * A JSDoc description
 *  *
 *  * Hello
 *  **\/`
 *
 * console.log(stripJsdocComment(jsDocSyntax))
 * // outputs =>
 * // A JSDoc description
 * //
 * // Hello
 * ```
 */
export function stripJsdocComment (jsDocCommentBlock, replaceValue = '') {
  return trim(jsDocCommentBlock.replace(/^ \* ?/mgsi, replaceValue))
}
