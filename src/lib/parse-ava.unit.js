import test from 'ava'
import { parseAva } from './parse-ava'

test(`Parses AVA test syntax into JSON`, t => {
  // > @source 'Given the tests in `./benchmark/sample.test.js` './benchmark/sample.test.js'
  const arrayOfTests = parseAva(fixture('sample.test.js'))
  const arrayOfTestsWithFunctions = parseAva(fixture('sample-with-function.test.js'))

  // returned object is an array of tests
  t.true(Array.isArray(arrayOfTests))
  t.is(arrayOfTests.length, 3)

  const firstAvaTest = arrayOfTests[0]

  t.true(typeof firstAvaTest === 'object')
  t.is(firstAvaTest.title, `Parses ava test\`s files`)
  t.is(firstAvaTest.description, 'I want to be able to parse test files to improve my software development experience')
  t.is(firstAvaTest.code, '// some code\nt.pass()')

  t.deepEqual(arrayOfTests, arrayOfTestsWithFunctions)

  t.snapshot(arrayOfTests)
})
