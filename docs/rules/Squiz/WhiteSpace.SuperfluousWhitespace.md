# SuperfluousWhitespace

Checks for unneeded whitespace.

Checks that no whitespace precedes the first content of the file, exists
after the last content of the file, resides after content on any line, or
are two empty lines in functions.

### Scope

`Squiz.WhiteSpace.SuperfluousWhitespace`

## Properties

| Property Name    | Type | Default | Available Since |
| ---------------- | ---- | ------- | --------------- |
| ignoreBlankLines | bool | false   | 1.4.2           |

## Usage

```xml
<rule ref="Squiz.WhiteSpace.SuperfluousWhitespace">
    <properties>
        <property name="ignoreBlankLines" value="true" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::