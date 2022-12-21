# DisallowAlternativePHPTags

Verifies that no alternative PHP tags are used.

If alternative PHP open tags are found, this sniff can fix both the open and close tags.

### Scope

`Generic.PHP.DisallowAlternativePHPTags`

## Description

Always use `<?php ?>` to delimit PHP code, do not use the ASP `<% %>` style tags nor the `<script language="php">``</script>` tags. This is the most portable way to include PHP code on differing operating systems and setups.

## Usage

```xml
<rule ref="Generic.PHP.DisallowAlternativePHPTags"></rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::