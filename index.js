const showdown = require('showdown')
const fs = require('fs')

const converter = new showdown.Converter()
const md = fs.readFileSync('file.md', 'utf8')

const html = converter.makeHtml(md)

fs.writeFileSync('file.html', html)
