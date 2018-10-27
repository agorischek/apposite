<img alt="Apposite logo" src="img/logo.png" width="200px"/>

# Apposite
_Conditionally compose document subsections._

## Intro

Apposite lets you build a source document into multiple output targets with subsets of the source content. It’s particularly useful with Markdown but works with any text content.

Subsections are marked with `@@@ [target] @@@` on the preceding line. Subsections end when a new section begins or at the end of the document. `@@@ * @@@` applies to all targets.

## Use

The `render` function takes a string input and will compose a document including only subsections that apply to all targets.

```js
apposite.render(input);
```

If you specify a target, `render` will compose a document consisting of subsections that apply to that target and subsections that apply to all targets.

```js
apposite.render(input, target)
```

You can optionally specify a custom marker. The default marker is `@@@`.

```js
apposite.render(input, target, marker)
```

## Example
```md
@@@ * @@@
# Document Title
Subsections marked with an asterisk will apply to all output targets.

@@@ targetA @@@
This section will only apply to targetA.

@@@ targetB @@@
This section will only apply to targetB.

@@@ targetA targetB @@@
This section will apply to targetA and targetB.
```
