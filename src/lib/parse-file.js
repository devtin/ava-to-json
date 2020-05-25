import { readFileAsync } from './utils/read-file-async'
import { parseAva } from './parse-ava'
import path from 'path'

/**
 * Parses given AVA file
 * @function parseFile
 * @async
 * @param {String} file - Path to the AVA file
 * @param {Object} [options] - Same options as in {@link parseAva}
 * @return {Promise<AvaTest[]>}
 */
export async function parseFile (file, options) {
  return parseAva((await readFileAsync(path.resolve(process.cwd(), file))).toString(), options)
}
