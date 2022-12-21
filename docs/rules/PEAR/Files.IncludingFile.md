# IncludingFile

Ensure include_once is used in conditional situations and require_once is used elsewhere.

Also checks that brackets do not surround the file being included.

### Scope

`PEAR.Files.IncludingFile`

## Description

Anywhere you are unconditionally including a class file, use `<em>`require_once`</em>`. Anywhere you are conditionally including a class file (for example, factory methods), use `<em>`include_once`</em>`. Either of these will ensure that class files are included only once. They share the same file list, so you don't need to worry about mixing them - a file included with `<em>`require_once`</em>` will not be included again by `<em>`include_once`</em>`.

Note that `<em>`include_once`</em>` and `<em>`require_once`</em>` are statements, not functions. Parentheses should not surround the subject filename.

## Usage

```xml
<rule ref="PEAR.Files.IncludingFile"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::