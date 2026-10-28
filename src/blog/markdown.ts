import hljs from 'highlight.js/lib/core'
import bash from 'highlight.js/lib/languages/bash'
import java from 'highlight.js/lib/languages/java'
import javascript from 'highlight.js/lib/languages/javascript'
import json from 'highlight.js/lib/languages/json'
import powershell from 'highlight.js/lib/languages/powershell'
import properties from 'highlight.js/lib/languages/properties'
import python from 'highlight.js/lib/languages/python'
import sql from 'highlight.js/lib/languages/sql'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import yaml from 'highlight.js/lib/languages/yaml'
import { Marked } from 'marked'
import { markedHighlight } from 'marked-highlight'

// Only the languages registered here are highlighted, which keeps the bundle small.
const languages = {
  bash,
  java,
  javascript,
  json,
  powershell,
  properties,
  python,
  sql,
  typescript,
  xml,
  yaml,
}
for (const [name, language] of Object.entries(languages)) {
  hljs.registerLanguage(name, language)
}

const marked = new Marked(
  markedHighlight({
    emptyLangClass: 'hljs',
    langPrefix: 'hljs language-',
    highlight(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext'
      return language === 'plaintext' ? code : hljs.highlight(code, { language }).value
    },
  }),
)

/** Renders a post's Markdown. Posts are written by the site owner, so the HTML is trusted. */
export function renderMarkdown(source: string) {
  return marked.parse(source, { async: false })
}
