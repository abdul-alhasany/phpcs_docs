# LineEndings

Checks that end of line characters are correct.

### Scope

`Generic.Files.LineEndings`

## Description

Unix-style line endings are preferred ("\n" instead of "\r\n").

## Properties

| Property Name | Type   | Default | Available Since |
| ------------- | ------ | ------- | --------------- |
| eolChar       | string | \n      | -               |

## Usage

```xml
<rule ref="Generic.Files.LineEndings">
    <properties>
        <property name="eolChar" value="\r\n" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::