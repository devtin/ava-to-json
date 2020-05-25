import { name, version, author, license } from './package.json'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

const initialYear = 2020
const yearsActive = new Date().getFullYear() !== initialYear ? `${ initialYear }-${ new Date().getFullYear() }` : initialYear

const banner = `/*!
 * ${ name } v${ version }
 * (c) ${ yearsActive } ${ author }
 * ${ license }
 */`

const plugins = [commonjs(), resolve()]

export default [
  {
    input: 'src/index.js',
    output: [
      {
        file: `dist/ava-to-json.js`,
        format: 'umd',
        banner,
        name: 'ava2json'
      },
    ],
    plugins
  }
]
