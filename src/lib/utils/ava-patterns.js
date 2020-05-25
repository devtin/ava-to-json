import { avaAvailableFlags } from './ava-available-flags'

export const avaPatterns = {
  findComment: `/\\*\\*(?:\\\\\\n)?(.*?)\\n \\*/`,
  findStatusAndTitle: `^<test-name>(?:\\.(${ avaAvailableFlags.join('|') }))?\\((["'\`])([^\\n]+)\\3`,
  findCode: `(?:(?<=^<test-name>[^\\n]*)[\\s]*,[\\s]*[^\\{]*\\{\\n(.*?)\\n\\})?`
}
