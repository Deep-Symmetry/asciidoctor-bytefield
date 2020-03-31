# asciidoctor-bytefield

Asciidoctor.js extension to render byte field diagrams as SVG.

This allows you to invoke
[bytefield-svg](https://github.com/Deep-Symmetry/bytefield-svg) to
create a byte field diagram within an AsciiDoc document by simply
creating a `bytefield` block:

```
[bytefield]
----
(draw-column-headers)
(draw-box 0x0f)
...
----
```

The [Clojure](clojure.org)-based domain specific language in which
you write your diagrams has its own
[documentation site](https://bytefield-svg.deepsymmetry.org/).

## Use with Node.js

Install the dependencies:

    npm install asciidoctor @deepsymmetry/asciidoctor-bytefield

Create a file `convert.js` with the following content:

```javascript
const asciidoctor = require('asciidoctor')();
const registry = asciidoctor.Extensions.create();

require('@deepsymmetry/asciidoctor-bytefield')(registry);

const html = asciidoctor.convertFile('sample.adoc', {
  to_file: false,
  extension_registry: registry
});
console.log(html);
```

Create a file `sample.adoc` with content similar to this:

```asciidoc
# Some Document

Here is a paragraph.

.A byte field
[bytefield]
----
(draw-column-headers)
(draw-box 42)
(draw-gap "Whee!")
(draw-bottom)
----

And some more text.
```

Run the script to render the document:

    node convert.js >sample.html

## Use with Antora

Install the module:

    npm install @deepsymmetry/asciidoctor-bytefield

Register the extension in your Antora playbook:

```yaml
asciidoc:
  extensions:
    - @deepsymmetry/asciidoctor-bytefield
```

## Acknowledgements

Thanks to [David Jencks](https://gitlab.com/djencks) for the bulk of
the wrapper code, translated with permission from his
[`antora-generic-svg-extension-plugin`](https://gitlab.com/djencks/antora-generic-svg-extension-plugin).
