# CyclomaticComplexity

Checks the cyclomatic complexity (McCabe) for functions.

The cyclomatic complexity (also called McCabe code metrics)
indicates the complexity within a function by counting
the different paths the function includes.

### Scope

`Generic.Metrics.CyclomaticComplexity`

## Description

Functions should not have a cyclomatic complexity greater than 20, and should try to stay below a complexity of 10.

## Properties

| Property Name      | Type | Default | Available Since |
| ------------------ | ---- | ------- | --------------- |
| absoluteComplexity | int  | 20      | -               |
| complexity         | int  | 10      | -               |

## Usage

```xml
<rule ref="Generic.Metrics.CyclomaticComplexity">
    <properties>
        <property name="complexity" value="15" />
        <property name="absoluteComplexity" value="30" />
    </properties>
</rule>
```

## Examples

:::tip No Examples Available
Please edit this page through Github to add examples.
:::