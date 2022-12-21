# LineLength

Checks the length of all lines in a file.

Checks all lines in the file, and throws warnings if they are over 80
characters in length and errors if they are over 100. Both these
figures can be changed in a ruleset.xml file.

### Scope

`Generic.Files.LineLength`

## Description

It is recommended to keep lines at approximately 80 characters long for better code readability.

## Properties

| Property Name     | Type | Default | Available Since |
| ----------------- | ---- | ------- | --------------- |
| absoluteLineLimit | int  | 100     | -               |
| ignoreComments    | bool | false   | 3.1.0           |
| lineLimit         | int  | 80      | -               |

## Usage

```xml
<rule ref="Generic.Files.LineLength">
    <properties>
        <property name="ignoreComments" value="true" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::