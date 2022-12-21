# UnnecessaryStringConcat

Checks that two strings are not concatenated together; suggests using one string instead.

### Scope

`Generic.Strings.UnnecessaryStringConcat`

## Description

Strings should not be concatenated together.

## Properties

| Property Name  | Type | Default | Available Since | Removed In |
| -------------- | ---- | ------- | --------------- | ---------- |
| allowMultiline | bool | false   | 2.3.4           |
| error          | bool | true    | -               | 4.0.0      |

## Usage

```xml
<rule ref="Generic.Strings.UnnecessaryStringConcat">
    <properties>
        <property name="error" value="false" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::