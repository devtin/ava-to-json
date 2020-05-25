import fs from 'fs'
import path from 'path'

function fixture (name) {
  const fixtureFile = path.join(__dirname, './fixtures', name)
  const benchmarkFile = path.join(__dirname, '../benchmark', name)
  if (!fs.existsSync(fixtureFile) && !fs.existsSync(benchmarkFile)) {
    throw new Error(`Fixture ${ path.relative(process.cwd(), fixtureFile) } not found`)
  }

  return fs.readFileSync(fs.existsSync(fixtureFile) ? fixtureFile : benchmarkFile).toString()
}

Object.assign(global, {
  fixture
})
