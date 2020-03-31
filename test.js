const asciidoctor = require('asciidoctor')();
const registry = asciidoctor.Extensions.create();

require('./extension.js')(registry);

const html = asciidoctor.convertFile('sample.adoc', {
  'to_file': false,
  'extension_registry': registry
});
console.log(html);