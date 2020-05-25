import { parseAva } from './parse-ava'
import path from 'path'
import fs from 'fs'

/**
 * Parses given AVA file synchronously
 * @function parseFileSync
 * @param {String} file - Path to the AVA file
 * @param {Object} [options] - Same options as in {@link parseAva}
 * @return {AvaTest[]}
 */
export function parseFileSync (file, options) {
  return parseAva(fs.readFileSync(path.resolve(process.cwd(), file)).toString(), options)
}
