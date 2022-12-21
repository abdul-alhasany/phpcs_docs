# NestingLevel

Checks the nesting level for methods.

### Scope

`Generic.Metrics.NestingLevel`

## Description

Functions should not have a nesting level greater than 10, and should try to stay below 5.

## Properties

| Property Name        | Type | Default | Available Since |
| -------------------- | ---- | ------- | --------------- |
| absoluteNestingLevel | int  | 10      | -               |
| nestingLevel         | int  | 5       | -               |

## Usage

```xml
<rule ref="Generic.Metrics.NestingLevel">
    <properties>
        <property name="nestingLevel" value="8" />
        <property name="absoluteNestingLevel" value="12" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::